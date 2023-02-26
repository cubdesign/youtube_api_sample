import type { NextApiRequest, NextApiResponse } from "next";
import { youtube, youtube_v3 } from "@googleapis/youtube";
import { ErrorResponse } from "@/utils/api-routes-utils";

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<youtube_v3.Schema$SearchResult | ErrorResponse>
) {
  const q = req.query.q ? req.query.q.toString() : null;

  if (!q) {
    res.status(400).json({ error: "q is required" });
    return;
  }

  const youtubeApi = youtube({
    version: "v3",
  });

  const part: string[] = ["snippet"];
  const regionCode = "jp";

  const maxResults: number = 5;

  const params: youtube_v3.Params$Resource$Search$List = {
    key: YOUTUBE_API_KEY!,
    part: part,
    regionCode: regionCode,
    type: ["video"],
    videoEmbeddable: "true",
    q: q,
    maxResults: maxResults,
  };

  const data = await youtubeApi.search.list(params);
  res.status(200).json(data.data);
}

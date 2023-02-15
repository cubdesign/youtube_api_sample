import type { NextApiRequest, NextApiResponse } from "next";
import { youtube, youtube_v3 } from "@googleapis/youtube";

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<youtube_v3.Schema$SearchResult>
) {
  const youtubeApi = youtube({
    version: "v3",
  });

  const part: string[] = ["snippet"];
  const regionCode = "jp";
  const q: string = "Aimer";
  const maxResults: number = 10;

  const params: youtube_v3.Params$Resource$Search$List = {
    key: YOUTUBE_API_KEY!,
    part: part,
    regionCode: regionCode,
    q: q,
    maxResults: maxResults,
  };

  const data = await youtubeApi.search.list(params);
  res.status(200).json(data.data);
}

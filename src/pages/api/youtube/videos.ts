import type { NextApiRequest, NextApiResponse } from "next";
import { youtube, youtube_v3 } from "@googleapis/youtube";

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<youtube_v3.Schema$VideoListResponse>
) {
  const youtubeApi = youtube({
    version: "v3",
  });

  const part: string[] = ["snippet", "statistics"];
  const regionCode = "jp";
  const videoId: string = "Z2Z9V-4DMGw";

  const params: youtube_v3.Params$Resource$Videos$List = {
    key: YOUTUBE_API_KEY!,
    part: part,
    regionCode: regionCode,
    id: [videoId],
  };

  const data = await youtubeApi.videos.list(params);
  res.status(200).json(data.data);
}

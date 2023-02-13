import type { NextApiRequest, NextApiResponse } from "next";

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const url = "https://www.googleapis.com/youtube/v3/videos";
  const videoId: string = "Z2Z9V-4DMGw";
  const part: string = "snippet";
  const regionCode = "jp";
  const params = {
    id: videoId,
    key: YOUTUBE_API_KEY!,
    part: part,
    regionCode: regionCode,
  };
  const query = new URLSearchParams(params);

  const api = await fetch(`${url}?${query}`);
  const data = await api.json();
  res.status(200).json({ name: data.kind });
}

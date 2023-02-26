import { youtube_v3 } from "@googleapis/youtube";
import axios from "axios";

export type ApiSearchResponse = youtube_v3.Schema$SearchListResponse;

export type ApiVideosResponse = youtube_v3.Schema$VideoListResponse;

export const apiClient = axios.create({
  baseURL: "/api",
});

export const search = async (q: string) => {
  const res = await apiClient.get<ApiSearchResponse>(`/youtube/search`, {
    params: {
      q,
    },
  });

  return res.data;
};

export const videos = async (videoId: string) => {
  console.log(videoId, videoId);
  const res = await apiClient.get<ApiVideosResponse>(
    `/youtube/videos/${videoId}`
  );

  return res.data;
};

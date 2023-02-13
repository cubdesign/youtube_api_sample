import Head from "next/head";
import YouTube from "react-youtube";
import { Options } from "youtube-player/dist/types";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const videoId: string = "Z2Z9V-4DMGw";
  const opts: Options = {
    playerVars: {
      rel: 0,
    },
  };

  const [data, setData] = useState(null);
  useEffect(() => {
    const f = async () => {
      const data = await fetch("/api/youtube/videos", {});
      const json = await data.json();
      console.log(json);
      setData(json);
    };
    f();
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Youtube</h1>
        <YouTube
          videoId={videoId}
          opts={opts}
          className={styles.youtubeContainer}
        />
      </main>
    </>
  );
}

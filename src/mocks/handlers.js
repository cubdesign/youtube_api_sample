import { rest } from "msw";
export const handlers = [
  rest.get("/api/youtube/search", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        kind: "youtube#searchListResponse",
        etag: "TmlpNVs9e1bu6FoEhN1DJIx8xtQ",
        nextPageToken: "CAUQAA",
        regionCode: "JP",
        pageInfo: {
          totalResults: 1000000,
          resultsPerPage: 5,
        },
        items: [
          {
            kind: "youtube#searchResult",
            etag: "-SnOD--Pw2HoMpOnFdpnbS41W50",
            id: {
              kind: "youtube#channel",
              channelId: "UCR1zT1s524Hbc85bdvno_8w",
            },
            snippet: {
              publishedAt: "2013-02-07T11:35:47Z",
              channelId: "UCR1zT1s524Hbc85bdvno_8w",
              title: "Aimer Official YouTube Channel",
              description:
                'Aimer Official YouTube Channel シンガーソングライター"Aimer（エメ）"によるOfficial YouTube Channelです。 不定期でライブ ...',
              thumbnails: {
                default: {
                  url: "https://yt3.ggpht.com/s3Lc_XpAJx57vebdioVvOv31Q3pszOb88AkEjsBI5RFA3q99WVEJTmUTOYsureMzTJpbrIL-_w=s88-c-k-c0xffffffff-no-rj-mo",
                },
                medium: {
                  url: "https://yt3.ggpht.com/s3Lc_XpAJx57vebdioVvOv31Q3pszOb88AkEjsBI5RFA3q99WVEJTmUTOYsureMzTJpbrIL-_w=s240-c-k-c0xffffffff-no-rj-mo",
                },
                high: {
                  url: "https://yt3.ggpht.com/s3Lc_XpAJx57vebdioVvOv31Q3pszOb88AkEjsBI5RFA3q99WVEJTmUTOYsureMzTJpbrIL-_w=s800-c-k-c0xffffffff-no-rj-mo",
                },
              },
              channelTitle: "Aimer Official YouTube Channel",
              liveBroadcastContent: "none",
              publishTime: "2013-02-07T11:35:47Z",
            },
          },
          {
            kind: "youtube#searchResult",
            etag: "8wOTvCKPC4bl1FAKm9FHeysVUGQ",
            id: {
              kind: "youtube#video",
              videoId: "Opp9nqiN5m0",
            },
            snippet: {
              publishedAt: "2022-01-28T13:00:11Z",
              channelId: "UC9zY_E8mcAo_Oq772LEZq8Q",
              title: "Aimer - カタオモイ / THE FIRST TAKE",
              description:
                "「THE FIRST TAKE」は、一発撮りのパフォーマンスを鮮明に切り取るYouTubeチャンネル。 ONE TAKE ONLY, ONE LIFE ONLY.",
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/Opp9nqiN5m0/default.jpg",
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: "https://i.ytimg.com/vi/Opp9nqiN5m0/mqdefault.jpg",
                  width: 320,
                  height: 180,
                },
                high: {
                  url: "https://i.ytimg.com/vi/Opp9nqiN5m0/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: "THE FIRST TAKE",
              liveBroadcastContent: "none",
              publishTime: "2022-01-28T13:00:11Z",
            },
          },
          {
            kind: "youtube#searchResult",
            etag: "j6PAo8IYj0PAbNxWk3VMzMdTCDY",
            id: {
              kind: "youtube#video",
              videoId: "tLQLa6lM3Us",
            },
            snippet: {
              publishedAt: "2021-12-12T15:00:11Z",
              channelId: "UCR1zT1s524Hbc85bdvno_8w",
              title:
                "Aimer「残響散歌」MUSIC VIDEO（テレビアニメ「鬼滅の刃」遊郭編オープニングテーマ）",
              description:
                "テレビアニメ「鬼滅の刃」遊郭編OPテーマ&EDテーマAimer 『残響散歌/朝が来る』now on sale!",
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/tLQLa6lM3Us/default.jpg",
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: "https://i.ytimg.com/vi/tLQLa6lM3Us/mqdefault.jpg",
                  width: 320,
                  height: 180,
                },
                high: {
                  url: "https://i.ytimg.com/vi/tLQLa6lM3Us/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: "Aimer Official YouTube Channel",
              liveBroadcastContent: "none",
              publishTime: "2021-12-12T15:00:11Z",
            },
          },
          {
            kind: "youtube#searchResult",
            etag: "xSpABuqYNL2ugSXV8rSX0rW9wFM",
            id: {
              kind: "youtube#video",
              videoId: "bnzPJhW9XQg",
            },
            snippet: {
              publishedAt: "2022-02-09T13:00:12Z",
              channelId: "UC9zY_E8mcAo_Oq772LEZq8Q",
              title: "Aimer - 残響散歌 / THE FIRST TAKE",
              description:
                "「THE FIRST TAKE」は、一発撮りのパフォーマンスを鮮明に切り取るYouTubeチャンネル。 ONE TAKE ONLY, ONE LIFE ONLY.",
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/bnzPJhW9XQg/default.jpg",
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: "https://i.ytimg.com/vi/bnzPJhW9XQg/mqdefault.jpg",
                  width: 320,
                  height: 180,
                },
                high: {
                  url: "https://i.ytimg.com/vi/bnzPJhW9XQg/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: "THE FIRST TAKE",
              liveBroadcastContent: "none",
              publishTime: "2022-02-09T13:00:12Z",
            },
          },
          {
            kind: "youtube#searchResult",
            etag: "5tjjNTqxGW7T_loHqMRvOUL_O6g",
            id: {
              kind: "youtube#video",
              videoId: "kxs9Su_mbpU",
            },
            snippet: {
              publishedAt: "2020-04-09T03:00:12Z",
              channelId: "UCR1zT1s524Hbc85bdvno_8w",
              title: "Aimer 『カタオモイ』MUSIC VIDEO（FULL ver.）",
              description:
                "Aimer Official YouTube Channel 100万人突破と、新曲「春はゆく」オリコン週間デジタルシングル1位を記念して、MUSIC ...",
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/kxs9Su_mbpU/default.jpg",
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: "https://i.ytimg.com/vi/kxs9Su_mbpU/mqdefault.jpg",
                  width: 320,
                  height: 180,
                },
                high: {
                  url: "https://i.ytimg.com/vi/kxs9Su_mbpU/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: "Aimer Official YouTube Channel",
              liveBroadcastContent: "none",
              publishTime: "2020-04-09T03:00:12Z",
            },
          },
        ],
      })
    );
  }),
  rest.get("/api/youtube/videos/*", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        kind: "youtube#videoListResponse",
        etag: "-TaryfKujuP589_VbXGhFRtZdT8",
        items: [
          {
            kind: "youtube#video",
            etag: "-NVyGlNQ-IvfDGDHqz_vSW-b0LA",
            id: "Z2Z9V-4DMGw",
            snippet: {
              publishedAt: "2021-12-17T13:00:13Z",
              channelId: "UC9zY_E8mcAo_Oq772LEZq8Q",
              title:
                "milet×Aimer×幾田りら - おもかげ (produced by Vaundy) / THE FIRST TAKE",
              description:
                "「THE FIRST TAKE」は、一発撮りのパフォーマンスを鮮明に切り取るYouTubeチャンネル。 ONE TAKE ONLY, ONE LIFE ONLY. 一発撮りで、音楽と向き合う。\n\n第178回は、発表の際に話題になったTHE FIRST TAKE MUSICのアーティストコラボレーション \nmilet×Aimer×幾田りらが登場。\n現役大学生のマルチクリエイターアーティストVaundyが手掛ける「おもかげ」を一発撮りで披露する。\n本楽曲は、大切な人の身近な愛を歌った楽曲となっていて、この出会いの歓びをわかちあうような愛に溢れたパフォーマンスとなっている。\n\nSTREAMING & DOWNLOAD：https://lnk.to/omokage\n\n■Podcast公開中\nmilet×Aimer×幾田りら / THE FIRST TAKE MUSIC  (Podcast)\nhttps://youtu.be/NiKLkYUnMUo\n\nソニーの完全ワイヤレスイヤホンWF-1000XM4\n■詳細はこちら\nhttps://www.sony.jp/headphone/special/WF-1000XM4/\n\n ■milet SNS\nOfficial Site：https://www.milet.jp/\nTwitter：https://twitter.com/milet_music\nInstagram：https://www.instagram.com/milet_music/\nOfficial YouTube Channel：https://www.youtube.com/c/miletOfficialYouTubeChannel\n\n■Aimer SNS\nOfficial Site：https://www.aimer-web.jp/\nTwitter：https://twitter.com/Aimer_and_staff\nOfficial YouTube Channel：https://www.youtube.com/user/aimerSMEJ\n\n■幾田りら SNS\nTwitter：https://twitter.com/ikutalilas\nInstagram：https://www.instagram.com/lilasikuta/\nOfficial YouTube Channel：https://www.youtube.com/channel/UCztEY6czNyJKjRWMwuur9bg\n\n\n ■「THE FIRST TAKE」SNS \nOfficial site：https://www.thefirsttake.jp/ \nInstagram：https://www.instagram.com/the_firsttake/ \nTwitter：https://twitter.com/The_FirstTake    \nTiktok：https://www.tiktok.com/@the_first_take \nTHE FIRST TIMES : https://www.thefirsttimes.jp/\n\n―\n\n白いスタジオに置かれた一本のマイク。 \n\n ここでのルールはただ一つ。\n一発撮りのパフォーマンスをすること。 \nそれ以外は、何をしてもいい。  \n\n一度きりのテイクで、何をみせてくれるだろうか。  \n\n一発撮りで、音楽と向き合う。 \nTHE FIRST TAKE \n   \n\nA microphone and a white studio.\n\nAnd 1 rule.\nYou’ve got 1 TAKE.\nPerform anything you like.\n\nShow us everything you’ve got for that 1 moment.\n\nONE TAKE ONLY, ONE LIFE ONLY.\nTHE FIRST TAKE\n\nEpisode 178 welcomes milet, Aimer, and Lilas Ikuta bringing us the collaborative performance present by THE FIRST TAKE MUSIC.\n1 TAKE performance of ‘Omokage,’ a song written specifically for THE FIRST TAKE by the young and talented artist/musician Vaundy.\nEnjoy the performance of the three next-generation JPOP divas singing the joyful and heartwarming tune, only on THE FIRST TAKE.\n\n\nCREDITS    \n―     \nDirector / Creative Director: Keisuke Shimizu\nArt Director: Kana Takarada\nDirector of Photography: Kazuki Nagayama\nLighting Director: Kazuhide Toya\nCopywriter: Hiroshi Yamazaki\nProducer: Kentaro Kinoshita\n\n#THEFIRSTTAKE #milet #Aimer #幾田りら #Vaundy",
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/Z2Z9V-4DMGw/default.jpg",
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: "https://i.ytimg.com/vi/Z2Z9V-4DMGw/mqdefault.jpg",
                  width: 320,
                  height: 180,
                },
                high: {
                  url: "https://i.ytimg.com/vi/Z2Z9V-4DMGw/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
                standard: {
                  url: "https://i.ytimg.com/vi/Z2Z9V-4DMGw/sddefault.jpg",
                  width: 640,
                  height: 480,
                },
                maxres: {
                  url: "https://i.ytimg.com/vi/Z2Z9V-4DMGw/maxresdefault.jpg",
                  width: 1280,
                  height: 720,
                },
              },
              channelTitle: "THE FIRST TAKE",
              tags: [
                "the first take",
                "first take",
                "ファーストテイク",
                "ファステク",
                "一発撮り",
                "緊張感",
                "COLORS",
                "DSCVR",
                "Tokyo sounds",
                "lute",
                "tiny desk",
                "コキア",
                "おもかげ",
                "omokage",
                "ばうんでぃ",
                "しああわせ",
                "鬼滅の刃",
                "inside you",
                "みれっと",
                "みれー",
                "ミレー",
                "YOASOBI",
                "rira",
                "Answer",
                "Ayase",
                "米津玄師",
                "踊り子",
                "バウンディ",
                "ソニーCM",
                "コラボ",
                "再会",
                "LiSA",
                "Uru",
                "kimetsu",
                "残響散歌",
                "ざんきょうさんか",
              ],
              categoryId: "10",
              liveBroadcastContent: "none",
              localized: {
                title:
                  "milet×Aimer×幾田りら - おもかげ (produced by Vaundy) / THE FIRST TAKE",
                description:
                  "「THE FIRST TAKE」は、一発撮りのパフォーマンスを鮮明に切り取るYouTubeチャンネル。 ONE TAKE ONLY, ONE LIFE ONLY. 一発撮りで、音楽と向き合う。\n\n第178回は、発表の際に話題になったTHE FIRST TAKE MUSICのアーティストコラボレーション \nmilet×Aimer×幾田りらが登場。\n現役大学生のマルチクリエイターアーティストVaundyが手掛ける「おもかげ」を一発撮りで披露する。\n本楽曲は、大切な人の身近な愛を歌った楽曲となっていて、この出会いの歓びをわかちあうような愛に溢れたパフォーマンスとなっている。\n\nSTREAMING & DOWNLOAD：https://lnk.to/omokage\n\n■Podcast公開中\nmilet×Aimer×幾田りら / THE FIRST TAKE MUSIC  (Podcast)\nhttps://youtu.be/NiKLkYUnMUo\n\nソニーの完全ワイヤレスイヤホンWF-1000XM4\n■詳細はこちら\nhttps://www.sony.jp/headphone/special/WF-1000XM4/\n\n ■milet SNS\nOfficial Site：https://www.milet.jp/\nTwitter：https://twitter.com/milet_music\nInstagram：https://www.instagram.com/milet_music/\nOfficial YouTube Channel：https://www.youtube.com/c/miletOfficialYouTubeChannel\n\n■Aimer SNS\nOfficial Site：https://www.aimer-web.jp/\nTwitter：https://twitter.com/Aimer_and_staff\nOfficial YouTube Channel：https://www.youtube.com/user/aimerSMEJ\n\n■幾田りら SNS\nTwitter：https://twitter.com/ikutalilas\nInstagram：https://www.instagram.com/lilasikuta/\nOfficial YouTube Channel：https://www.youtube.com/channel/UCztEY6czNyJKjRWMwuur9bg\n\n\n ■「THE FIRST TAKE」SNS \nOfficial site：https://www.thefirsttake.jp/ \nInstagram：https://www.instagram.com/the_firsttake/ \nTwitter：https://twitter.com/The_FirstTake    \nTiktok：https://www.tiktok.com/@the_first_take \nTHE FIRST TIMES : https://www.thefirsttimes.jp/\n\n―\n\n白いスタジオに置かれた一本のマイク。 \n\n ここでのルールはただ一つ。\n一発撮りのパフォーマンスをすること。 \nそれ以外は、何をしてもいい。  \n\n一度きりのテイクで、何をみせてくれるだろうか。  \n\n一発撮りで、音楽と向き合う。 \nTHE FIRST TAKE \n   \n\nA microphone and a white studio.\n\nAnd 1 rule.\nYou’ve got 1 TAKE.\nPerform anything you like.\n\nShow us everything you’ve got for that 1 moment.\n\nONE TAKE ONLY, ONE LIFE ONLY.\nTHE FIRST TAKE\n\nEpisode 178 welcomes milet, Aimer, and Lilas Ikuta bringing us the collaborative performance present by THE FIRST TAKE MUSIC.\n1 TAKE performance of ‘Omokage,’ a song written specifically for THE FIRST TAKE by the young and talented artist/musician Vaundy.\nEnjoy the performance of the three next-generation JPOP divas singing the joyful and heartwarming tune, only on THE FIRST TAKE.\n\n\nCREDITS    \n―     \nDirector / Creative Director: Keisuke Shimizu\nArt Director: Kana Takarada\nDirector of Photography: Kazuki Nagayama\nLighting Director: Kazuhide Toya\nCopywriter: Hiroshi Yamazaki\nProducer: Kentaro Kinoshita\n\n#THEFIRSTTAKE #milet #Aimer #幾田りら #Vaundy",
              },
              defaultAudioLanguage: "ja",
            },
            statistics: {
              viewCount: "49800303",
              likeCount: "553934",
              favoriteCount: "0",
              commentCount: "14967",
            },
          },
        ],
        pageInfo: {
          totalResults: 1,
          resultsPerPage: 1,
        },
      })
    );
  }),
];

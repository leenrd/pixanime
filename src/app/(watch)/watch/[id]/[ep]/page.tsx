"use client";

import NoShowFound from "@/components/common/no-show-found";
import { Thumbnail } from "@/components/custom/thumbnail";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FC, useEffect, useState } from "react";

import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";

const Page: FC = () => {
  const [serverWatchSrc, setServerWatchSrc] = useState<any>("");
  const params = useParams<{ id: string; ep: string }>();
  const showID = params.id;
  const epID = params.ep;

  const getWatchData = useQuery({
    queryKey: ["watch", showID],
    queryFn: async () => {
      const res = await axios.get(
        `https://animetize-api.vercel.app/info/${showID}`
      );

      return res.data;
    },
  });

  console.log("params", epID, showID);

  useEffect(() => {
    // const url = `https://animetize-api.vercel.app/servers/${epID}`;
    const url = `https://animetize-api.vercel.app/watch/${epID}?server=vidstreaming`;
    const data = async () => {
      try {
        const res = await axios.get(url, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        // TODO: map the sources to get the server url
        setServerWatchSrc(res.data.sources[2].url);
      } catch (err: any) {
        throw new Error(err.message);
      }
    };

    data();
  }, [epID]);

  console.log("serverWatchSrc", serverWatchSrc);

  const data = getWatchData.data;
  if (!data) {
    return <NoShowFound />;
  }

  return (
    <section className="flex">
      <aside className="w-52 border-r h-full">
        <div className="py-2">
          <h2 className="relative px-7 text-lg font-semibold tracking-tight">
            Episodes
          </h2>
          <ScrollArea className="h-[600px] px-1">
            <div className="space-y-1 p-5">
              {data.episodes.map((ep: any) => (
                <Link key={ep.id} href={`/watch/${data.id}/${ep.id}`} passHref>
                  <Thumbnail
                    key={ep.id}
                    item={data}
                    aspectRatio="square"
                    className="w-[150px] mt-2"
                    width={150}
                    height={150}
                    variant="episode"
                    eps={ep}
                  />
                </Link>
              ))}
            </div>
          </ScrollArea>
        </div>
      </aside>
      <div className="max-w-auto mx-auto flex">
        <MediaPlayer
          src={{ src: `${serverWatchSrc}`, type: "video/mp4" }}
          // src={serverWatchSrc}
        >
          <MediaProvider />
          <DefaultVideoLayout icons={defaultLayoutIcons} />
        </MediaPlayer>
      </div>
    </section>
  );
};

export default Page;

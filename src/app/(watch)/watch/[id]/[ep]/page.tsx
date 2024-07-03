"use client";

import NoShowFound from "@/components/common/no-show-found";
import { Thumbnail } from "@/components/custom/thumbnail";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TrendingData } from "@/lib/trending-data";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import { FC } from "react";

const Page = ({ params }: { params: { slug: string } }) => {
  const showID = params.slug;

  console.log("showID", showID);

  // const watchInfo = useQuery({
  //   queryKey: ["watch", "info"],
  //   queryFn: async () => {
  //     const res = await axios.get(
  //       `https://consumet_api_url/meta/anilist/data/${showID}`
  //     );

  //     return res.data;
  //   },
  // });

  // const watchData = useQuery({
  //   queryKey: ["watch", showID],
  //   queryFn: async () => {
  //     const res = await axios.get(
  //       `${process.env.CONSUMET_API_ANILIST_URL}/episodes/${watchInfo.data.id}?provider=gogoanime`
  //     );

  //     return res.data;
  //   },
  // });

  // console.log("watchInfo", watchInfo.data);

  // if (!watchData.data) {
  //   return <NoShowFound />;
  // }
  // if (!watchInfo.data) {
  //   return <NoShowFound />;
  // }

  return (
    <section className="flex">
      <aside className="w-52 border-r h-full">
        <div className="py-2">
          <h2 className="relative px-7 text-lg font-semibold tracking-tight">
            Episodes
          </h2>
          <ScrollArea className="h-[600px] px-1">
            <div className="space-y-1 p-5">
              {TrendingData?.map((playlist, i) => (
                <Link
                  key={i}
                  href={`/watch/${playlist.id}/${playlist.id}`}
                  passHref
                >
                  <Thumbnail
                    key={i}
                    item={playlist}
                    aspectRatio="square"
                    className="w-[150px] mt-2"
                    width={150}
                    height={150}
                    variant="square"
                  />
                </Link>
              ))}
            </div>
          </ScrollArea>
        </div>
      </aside>
      <div className="mt-7 flex justify-center items-center h-full w-full bg-red-600">
        <div className="bg-cyan-300">screen video</div>
      </div>
    </section>
  );
};

export default Page;

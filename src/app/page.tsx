"use client";

import NoShowFound from "@/components/common/no-show-found";
import { Announcement } from "@/components/custom/announcement";
import Marquee from "@/components/custom/marquee";
import {
  PageHeader,
  PageHeaderHeading,
  PageHeaderDescription,
  PageActions,
} from "@/components/custom/page-header";
import { Thumbnail } from "@/components/custom/thumbnail";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Flame } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const latestRelease = useQuery({
    queryKey: ["trending"],
    queryFn: async () => {
      const res = await axios.get(
        "https://animetize-api.vercel.app/recent-episodes"
      );

      return res.data;
    },
  });

  if (!latestRelease.data) {
    return <NoShowFound />;
  }

  // console.log(getPopular.data.results);

  return (
    <>
      <main className="container relative flex-1">
        <PageHeader>
          <Announcement />
          <PageHeaderHeading>PixAnime</PageHeaderHeading>
          <PageHeaderDescription>
            The best streaming platform for lazy people who like to watch
            millions of movies, series and animes&apos; for free. Click watch
            now to get started.
          </PageHeaderDescription>
          <PageActions>
            <Link href="/feed">
              <Button className="flex items-center justify-center">
                <Flame className="mr-1" size={14} />
                Watch now
              </Button>
            </Link>
            <Link href="/pixlens">
              <Button variant="outline">Pixlens</Button>
            </Link>
          </PageActions>
        </PageHeader>
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold mb-5 tracking-tight">
            Newest Releases
          </h2>
        </div>
        <div className="relative mb-20">
          <Marquee pauseOnHover className="[--duration:30s]">
            {latestRelease.data.results.map((item: any) => (
              <Link href={`feed/${item.id}`} key={item.id}>
                <Thumbnail
                  key={item.id}
                  item={item}
                  className="w-[150px]"
                  aspectRatio="square"
                  width={150}
                  height={150}
                  variant="square"
                />
              </Link>
            ))}
          </Marquee>
        </div>
      </main>
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
    </>
  );
}

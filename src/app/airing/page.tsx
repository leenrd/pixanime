"use client";

import NoShowFound from "@/components/common/no-show-found";
import { Thumbnail } from "@/components/custom/thumbnail";
import { Separator } from "@/components/ui/separator";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import { FC } from "react";

interface PageProps {}

export type Item = {
  id: string;
  episodeId: string;
  episodeNumber: number;
  title: string;
  image: string;
  url: string;
};

const Page: FC<PageProps> = ({}) => {
  const getTrending = useQuery({
    queryKey: ["trending", "page"],
    queryFn: async () => {
      const res = await axios.get(
        "https://animetize-api.vercel.app/recent-episodes"
      );

      return res.data;
    },
  });

  if (!getTrending.data) {
    return <NoShowFound />;
  }

  // console.log(getTrending.data);

  return (
    <section className="container">
      <div className="flex items-center justify-between mt-7">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            Releases Today
          </h2>
          <p className="text-sm text-muted-foreground">
            Top picks for you. Updated daily.
          </p>
        </div>
      </div>
      <Separator className="my-4" />
      <section className="flex flex-wrap gap-x-2 gap-y-11 h-full mb-10">
        {getTrending.data.results.map((item: Item) => (
          <Link href={`feed/${item.id}`} key={item.id}>
            <div className="overflow-hidden rounded-md relative">
              <Thumbnail
                item={item}
                className="w-[250px] h-auto"
                aspectRatio="portrait"
                width={250}
                height={330}
              />
            </div>
          </Link>
        ))}
      </section>
    </section>
  );
};

export default Page;

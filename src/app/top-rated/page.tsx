"use client";

import NoShowFound from "@/components/common/no-show-found";
import { Separator } from "@/components/ui/separator";
import { FC } from "react";
import { Item } from "../airing/page";
import Link from "next/link";
import { Thumbnail } from "@/components/custom/thumbnail";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  const getPopular = useQuery({
    queryKey: ["popular"],
    queryFn: async () => {
      const res = await axios.get(
        "https://animetize-api.vercel.app/top-airing"
      );

      return res.data;
    },
  });

  if (!getPopular.data) {
    return <NoShowFound />;
  }

  return (
    <section className="container">
      <div className="flex items-center justify-between mt-7">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Trending</h2>
          <p className="text-sm text-muted-foreground">What their watching.</p>
        </div>
      </div>
      <Separator className="my-4" />
      <section className="flex flex-wrap gap-x-2 gap-y-11 h-full mb-10">
        {getPopular.data.results.map((item: Item) => (
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

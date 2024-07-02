"use client";

import { Thumbnail } from "@/components/custom/thumbnail";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TrendingData } from "@/lib/trending-data";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FC } from "react";

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  const params = useParams<{ slug: string }>();
  const pageID = params.slug;
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

import FeedCarousel from "@/components/custom/feed-carousel";
import { Thumbnail } from "@/components/custom/thumbnail";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { TrendingData } from "@/lib/trending-data";
import { FC } from "react";

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  return (
    <section className="flex flex-col gap-16">
      <section className="container space-y-5 mt-7">
        <FeedCarousel />
      </section>

      <section className="container">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">
              Trending Now
            </h2>
            <p className="text-sm text-muted-foreground">
              Top picks for you. Updated daily.
            </p>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="relative">
          <ScrollArea>
            <div className="flex space-x-4 pb-4">
              {TrendingData.map((album) => (
                <Thumbnail
                  key={album.name}
                  album={album}
                  className="w-[250px]"
                  aspectRatio="portrait"
                  width={250}
                  height={330}
                />
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </section>

      <section className="container">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">
              Popular of All Time
            </h2>
            <p className="text-sm text-muted-foreground">
              Top charts of anime that are all-time popular.
            </p>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="relative">
          <ScrollArea>
            <div className="flex space-x-4 pb-4">
              {TrendingData.map((album) => (
                <Thumbnail
                  key={album.name}
                  album={album}
                  className="w-[250px]"
                  aspectRatio="portrait"
                  width={250}
                  height={330}
                />
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </section>
    </section>
  );
};

export default Page;

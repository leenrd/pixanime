import FeedCarousel from "@/components/custom/feed-carousel";
import FeedSubCarousel from "@/components/custom/feed-sub-carousel";
import { Separator } from "@/components/ui/separator";
import { TrendingData } from "@/lib/trending-data";
import { FC } from "react";

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  return (
    <section className="flex flex-col gap-16">
      <section className="container rounded-lg space-y-5 mt-7">
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
        <FeedSubCarousel data={TrendingData} />
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
        <FeedSubCarousel data={TrendingData} />
      </section>

      <section className="container mb-28">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">Upcoming</h2>
            <p className="text-sm text-muted-foreground">
              Scheduled releases. Stay tuned.
            </p>
          </div>
        </div>
        <Separator className="my-4" />
        <FeedSubCarousel data={TrendingData} />
      </section>
    </section>
  );
};

export default Page;

"use client";

import FeedCarousel from "@/components/custom/feed-carousel";
import FeedSubCarousel from "@/components/custom/feed-sub-carousel";
import { Separator } from "@/components/ui/separator";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FC } from "react";

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  const getTrending = useQuery({
    queryKey: ["trending"],
    queryFn: async () => {
      const res = await axios.get(
        "https://consumet-jade.vercel.app/meta/anilist/trending"
      );

      return res.data;
    },
  });

  const getPopular = useQuery({
    queryKey: ["popular"],
    queryFn: async () => {
      const res = await axios.get(
        "https://consumet-jade.vercel.app/meta/anilist/popular"
      );

      return res.data;
    },
  });

  const getUpcoming = useQuery({
    queryKey: ["upcoming"],
    queryFn: async () => {
      const res = await axios.get(
        "https://consumet-jade.vercel.app/meta/anilist/airing-schedule"
      );

      return res.data;
    },
  });

  if (!getTrending.data) {
    return <div>No show found. Try refreshing the page.</div>;
  }

  if (!getPopular.data) {
    return <div>No show found. Try refreshing the page.</div>;
  }

  if (!getUpcoming.data) {
    return <div>No show found. Try refreshing the page.</div>;
  }

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
        <FeedSubCarousel data={getTrending.data} />
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
        <FeedSubCarousel data={getPopular.data} />
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
        <FeedSubCarousel data={getUpcoming.data} />
      </section>
    </section>
  );
};

export default Page;

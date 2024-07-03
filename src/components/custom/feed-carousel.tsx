"use client";

import { FC } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { PlayIcon } from "lucide-react";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Badge } from "../ui/badge";

interface FeedCarouselProps {}

const FeedCarousel: FC<FeedCarouselProps> = ({}) => {
  const getPopular = useQuery({
    queryKey: ["popular", "carousel"],
    queryFn: async () => {
      const res = await axios.get(
        "https://consumet-jade.vercel.app/meta/anilist/popular"
      );

      return res.data;
    },
  });

  if (!getPopular.data) {
    return <Skeleton className="h-[500px] rounded-lg" />;
  }

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent>
        {getPopular.data.results?.map((item: any) => (
          <CarouselItem key={item.id}>
            <CarouselThumbnail item={item} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

interface CarouselThumbnailProps {
  item: any;
}

const CarouselThumbnail: FC<CarouselThumbnailProps> = ({ item }) => {
  return (
    <div
      className="h-[500px] bg-cover bg-center rounded-lg shadow-lg bg-no-repeat flex flex-col justify-end gap-2"
      style={{ backgroundImage: `url(${item.cover})` }}
    >
      <section className="py-5 px-8 bg-gradient-to-b from-transparent to-black rounded-b-lg flex justify-between items-center">
        <div>
          <h3 className="text-primary-foreground text-xl font-semibold">
            {item.title.english === null
              ? item.title.romaji
              : item.title.english}
          </h3>
          <p className="text-primary-foreground mb-3 text-sm">
            {item.genres.map((genre: any) => (
              <Badge
                key={genre}
                className="mr-1 rounded-sm"
                variant={"secondary"}
              >
                {genre}
              </Badge>
            ))}
          </p>
          <p className="text-muted-foreground text-xs max-w-5xl">
            {item.description}
          </p>
        </div>
      </section>
    </div>
  );
};

export default FeedCarousel;

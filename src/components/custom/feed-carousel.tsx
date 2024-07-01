"use client";

import { FC } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";

interface FeedCarouselProps {}

const FeedCarousel: FC<FeedCarouselProps> = ({}) => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent>
        {Array.from({ length: 10 }).map((item, index) => (
          <CarouselItem key={index}>
            <CarouselThumbnail item={item} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

interface CarouselThumbnailProps {
  item: any;
}

const CarouselThumbnail: FC<CarouselThumbnailProps> = ({ item }) => {
  return (
    <div
      className="h-[600px] bg-cover bg-center rounded-lg shadow-lg bg-no-repeat flex flex-col justify-end gap-2 cursor-pointer"
      style={{ backgroundImage: 'url("/batman.webp")' }}
    >
      <section className="py-5 px-8 bg-gradient-to-b from-transparent to-black rounded-b-lg flex justify-between items-center">
        <div>
          <h3 className="text-primary-foreground text-xl font-semibold">
            Batman
          </h3>
          <p className="text-primary-foreground mb-3 text-sm">
            Action, Adventure, Crime
          </p>
          <p className="text-muted-foreground text-xs">
            As new threats emerge, can our shy heroine step up and save the day
            once again?
          </p>
        </div>
        <Button className="mt-4" variant={"outline"}>
          Watch Now
        </Button>
      </section>
    </div>
  );
};

export default FeedCarousel;

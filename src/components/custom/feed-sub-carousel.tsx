import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Thumbnail } from "./thumbnail";
import { Image as ImageIcon } from "lucide-react";
import Link from "next/link";

const FeedSubCarousel = ({ data }: { data: any }) => {
  console.log("FeedSubCarousel", data);
  return (
    <>
      <Carousel className="w-full">
        <CarouselContent>
          {data &&
            data.results?.slice(0, 20).map((item: any) => (
              <Link href={`feed/${item.id}`} key={item.id}>
                <CarouselItem
                  key={item.id}
                  className=" md:basis-1/2 lg:basis-1/5"
                >
                  {item.cover ? (
                    <Thumbnail
                      key={item.id}
                      item={item}
                      className="w-[250px]"
                      aspectRatio="portrait"
                      width={250}
                      height={330}
                    />
                  ) : (
                    <ImageIcon className="text-muted" />
                  )}
                </CarouselItem>
              </Link>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default FeedSubCarousel;

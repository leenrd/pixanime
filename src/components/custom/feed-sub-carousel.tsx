import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Album } from "@/lib/trending-data";
import { Thumbnail } from "./thumbnail";
import Link from "next/link";

const FeedSubCarousel = ({ data }: { data: Album[] }) => {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {data.map((album: Album, index: number) => (
          <Link href={`feed/${album.id}`} key={index}>
            <CarouselItem key={index} className=" md:basis-1/2 lg:basis-1/5">
              <Thumbnail
                key={index}
                album={album}
                className="w-[250px]"
                aspectRatio="portrait"
                width={250}
                height={330}
              />
            </CarouselItem>
          </Link>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default FeedSubCarousel;

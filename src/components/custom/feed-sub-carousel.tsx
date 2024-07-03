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

const FeedSubCarousel = ({
  data,
  type = data,
  clickable = true,
}: {
  data: any;
  type: string;
  clickable?: boolean;
}) => {
  return (
    <>
      <Carousel className="w-full">
        <CarouselContent>
          {data
            ? type === "data"
              ? clickable
                ? data.results?.slice(0, 20).map((item: any) => (
                    <Link href={`feed/${item.id}`} key={item.id}>
                      <CarouselItem
                        key={item.id}
                        className=" md:basis-1/2 lg:basis-1/5"
                      >
                        {item.image ? (
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
                  ))
                : data.results?.slice(0, 20).map((item: any) => (
                    <CarouselItem
                      key={item.id}
                      className=" md:basis-1/2 lg:basis-1/5"
                    >
                      {item.image ? (
                        <Thumbnail
                          key={item.id}
                          item={item}
                          className="w-[250px] cursor-default"
                          aspectRatio="portrait"
                          width={250}
                          height={330}
                        />
                      ) : (
                        <ImageIcon className="text-muted" />
                      )}
                    </CarouselItem>
                  ))
              : data.map((item: any) => (
                  <Link href={`${item.id}`} key={item.id}>
                    <CarouselItem
                      key={item.id}
                      className=" md:basis-1/2 lg:basis-1/5"
                    >
                      {item.image ? (
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
                ))
            : null}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default FeedSubCarousel;

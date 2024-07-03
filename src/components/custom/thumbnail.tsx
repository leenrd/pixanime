import Image from "next/image";

import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { Star } from "lucide-react";

interface ThumbnailProps extends React.HTMLAttributes<HTMLDivElement> {
  item: any;
  aspectRatio?: "portrait" | "square";
  width?: number;
  height?: number;
  variant?: string;
}

export function Thumbnail({
  item,
  aspectRatio = "portrait",
  width,
  height,
  variant,
  className,
  ...props
}: ThumbnailProps) {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      <div className="overflow-hidden rounded-md relative">
        <Image
          src={item.image}
          alt={"cover"}
          width={width}
          loading="lazy"
          height={height}
          unoptimized
          className={cn(
            "h-auto w-auto object-cover transition-all hover:scale-105 cursor-pointer",
            aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
          )}
        />
      </div>
      {variant === "epThumbnail" ? null : (
        <ThumbnailMemo album={item} variant={variant} />
      )}
    </div>
  );
}

const ThumbnailMemo = ({
  album,
  variant,
}: {
  album: any;
  variant?: string;
}) => {
  return (
    <div className="space-y-1 text-sm">
      <div className="flex justify-between items-center">
        <h3 className="font-medium leading-none">
          {album.title.english === null
            ? album.title.romaji
            : album.title.english || album.title}
        </h3>
        {variant === "epThumbnail" || variant === "square" ? null : (
          <Badge variant={"outline"} className="rounded-md">
            <Star size={10} className="mr-1" />
            {album.rating}
          </Badge>
        )}
      </div>
    </div>
  );
};

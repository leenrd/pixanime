import Image from "next/image";

import { cn } from "@/lib/utils";
import { Album, TrendingData } from "@/lib/trending-data";
import { Badge } from "../ui/badge";

interface ThumbnailProps extends React.HTMLAttributes<HTMLDivElement> {
  album: Album;
  aspectRatio?: "portrait" | "square";
  width?: number;
  height?: number;
}

export function Thumbnail({
  album,
  aspectRatio = "portrait",
  width,
  height,
  className,
  ...props
}: ThumbnailProps) {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      <div className="overflow-hidden rounded-md">
        <Image
          src={album.cover}
          alt={album.name}
          width={width}
          height={height}
          className={cn(
            "h-auto w-auto object-cover transition-all hover:scale-105 cursor-pointer",
            aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
          )}
        />
      </div>
      <div className="space-y-1 text-sm">
        <div className="flex justify-between items-center">
          <h3 className="font-medium leading-none">{album.name}</h3>
          <Badge variant={"outline"} className="rounded-md">
            {album.rating}
          </Badge>
        </div>
        <p className="text-xs text-muted-foreground">{album.dec}</p>
      </div>
    </div>
  );
}

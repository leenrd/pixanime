"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { TrendingData } from "@/lib/trending-data";
import { PageActions } from "@/components/custom/page-header";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { LucideImage } from "lucide-react";
import FeedSubCarousel from "@/components/custom/feed-sub-carousel";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Badge } from "@/components/ui/badge";
import NoShowFound from "@/components/common/no-show-found";

const Page = () => {
  const params = useParams<{ slug: string }>();
  const showID = params.slug;

  const getShowData = useQuery({
    queryKey: ["show", showID],
    queryFn: async () => {
      const res = await axios.get(
        `https://consumet-jade.vercel.app/meta/anilist/data/${showID}`
      );

      return res.data;
    },
  });

  const watchData = useQuery({
    queryKey: ["watch", showID],
    queryFn: async () => {
      const res = await axios.get(
        `${process.env.CONSUMET_API_ANILIST_URL}/episodes/${getShowData.data.id}?provider=gogoanime`
      );

      return res.data;
    },
  });

  if (!getShowData.data) {
    return <NoShowFound />;
  }

  if (!watchData.data) {
    return <NoShowFound />;
  }

  const data = getShowData.data;
  // console.log("consumet", data);
  const embed = false;
  return (
    <>
      <div className="">
        <div className={cn("mx-auto container", embed ? "p-0" : "md:pt-4")}>
          <div
            className={cn(
              "h-[30dvh] w-full overflow-hidden border bg-muted shadow md:rounded-lg lg:h-[55dvh]",
              embed ? "max-h-[20vh] md:max-h-[50vh]" : null
            )}
          >
            {data.cover ? (
              <div
                style={{
                  backgroundImage: `url('${data.cover}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="h-full w-full brightness-50"
                data-testid="banner"
              />
            ) : null}
          </div>

          <div className="mx-auto my-8 max-w-4xl space-y-8 p-4 md:space-y-12 md:p-0 ">
            <main className="flex flex-col gap-8 md:flex-row">
              <aside className="-mt-24 w-full space-y-2  md:-mt-32 md:w-1/3">
                <div
                  className={cn(
                    "relative flex aspect-poster w-full items-center justify-center overflow-hidden h-[420px] rounded-lg bg-muted text-muted shadow"
                  )}
                >
                  {data.image ? (
                    <Image
                      className="object-fill"
                      fill
                      loading="lazy"
                      sizes="100%"
                      alt={"Anime Poster"}
                      src={data.image}
                    />
                  ) : (
                    <LucideImage size={24} />
                  )}
                </div>
              </aside>

              <article className="flex w-full flex-col gap-2 md:w-2/3">
                {data.releaseDate && (
                  <span className="text-xs text-muted-foreground">
                    {format(new Date(data.releaseDate), "PPP", {})}
                  </span>
                )}

                <h1 className="text-lg font-bold md:text-4xl">
                  {data.title.english === null
                    ? data.title.romaji
                    : data.title.english}
                </h1>

                <div className="flex flex-wrap items-center gap-2">
                  {data.genres && (
                    <>
                      {data.genres.map((genre: any) => {
                        return (
                          <Badge
                            variant="outline"
                            className="whitespace-nowrap"
                            key={genre}
                          >
                            {genre}
                          </Badge>
                        );
                      })}

                      <Separator orientation="vertical" className="h-6" />
                    </>
                  )}

                  <Badge variant="default" className="whitespace-nowrap">
                    {data.status}
                  </Badge>
                  <Separator orientation="vertical" className="h-6" />
                  <Badge variant="secondary" className="whitespace-nowrap">
                    {data.totalEpisodes}
                  </Badge>
                </div>

                <p className="text-xs leading-5 text-muted-foreground md:text-sm md:leading-6">
                  {data.description}
                </p>

                <PageActions className="justify-start">
                  <Link href={`/watch/${data.id}/{watchData.data}`}>
                    <Button variant={"default"}>Watch now</Button>
                  </Link>
                </PageActions>
              </article>
            </main>
          </div>

          {data.recommendations ? (
            <section className="container my-28">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Related Shows
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Watch this next.
                  </p>
                </div>
              </div>
              <Separator className="my-4" />
              <FeedSubCarousel data={data.recommendations} type="rec" />
            </section>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Page;

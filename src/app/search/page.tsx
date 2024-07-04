"use client";

import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import axios from "axios";
import { FC, useEffect, useState } from "react";
import { Item } from "../airing/page";
import Link from "next/link";
import { Thumbnail } from "@/components/custom/thumbnail";

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  const [search, setSearch] = useState<string>("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (search.trim() === "") {
      setSearchResults([]);
      return;
    }

    const url = `https://animetize-api.vercel.app/${search}?page=1`;
    const getSearch = async () => {
      try {
        const res = await axios.get(url, { params: { page: 1 } });
        setSearchResults(res.data.results);
      } catch (e: any) {
        console.error(e);
      }
    };

    getSearch();
  }, [search]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className="w-full h-full p-10">
      <h1 className="text-2xl font-semibold mb-2">Search for anime</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Violet Evergarden"
          value={search}
          onChange={handleSearch}
        />
      </form>
      <Separator className="my-7" />
      <div className="flex items-center justify-between my-7">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Results</h2>
          <p className="text-sm text-muted-foreground">Top picks only.</p>
        </div>
      </div>
      <section className="flex flex-wrap gap-x-2 gap-y-11 h-full mb-10">
        {search
          ? searchResults?.map((item: Item) => (
              <Link href={`feed/${item.id}`} key={item.id}>
                <div className="overflow-hidden rounded-md relative">
                  <Thumbnail
                    item={item}
                    className="w-[250px] h-auto"
                    aspectRatio="portrait"
                    width={250}
                    height={330}
                  />
                </div>
              </Link>
            ))
          : null}
      </section>
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
    </section>
  );
};

export default Page;

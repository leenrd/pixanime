"use client";

import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams<{ slug: string }>();
  const pageID = params.slug;
  return <div>{pageID}</div>;
};

export default Page;

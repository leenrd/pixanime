import Link from "next/link";
import { Github, ArrowRightIcon } from "lucide-react";

import { Separator } from "@/components/ui/separator";

export function Announcement() {
  return (
    <Link
      href="https://github.com/leenrd/pixanime"
      className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium mb-10"
    >
      <Github className="h-4 w-4" />{" "}
      <Separator className="mx-2 h-4" orientation="vertical" />{" "}
      <span>Check out on github</span>
      <ArrowRightIcon className="ml-1 h-4 w-4" />
    </Link>
  );
}

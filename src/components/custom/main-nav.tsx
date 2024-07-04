import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        {" "}
        <nav
          className={cn("flex items-center space-x-4 lg:space-x-6", className)}
          {...props}
        >
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            href="/airing"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Airing
          </Link>
          <Link
            href="/top-rated"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Top Rated
          </Link>
          <Link
            href="/pixlens"
            className="text-sm flex font-medium bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
          >
            Pixlens
          </Link>
        </nav>
        <nav>
          <Link
            href="/search"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <Button variant={"ghost"} className="flex items-center">
              <Search size={15} className="mr-1" /> Search
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}

import Link from "next/link";

import { cn } from "@/lib/utils";
import { Sparkle } from "lucide-react";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/examples/dashboard"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Genre
      </Link>
      <Link
        href="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Ongoing
      </Link>
      <Link
        href="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Upcoming
      </Link>
      <Link
        href="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Changelog
      </Link>
      <Link
        href="/examples/dashboard"
        className="text-sm flex font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <Sparkle size={10} />
        Feeling Lucky
      </Link>
    </nav>
  );
}

import { Announcement } from "@/components/custom/announcement";
import MainFooter from "@/components/custom/main-footer";
import { MainNav } from "@/components/custom/main-nav";
import {
  PageHeader,
  PageHeaderHeading,
  PageHeaderDescription,
  PageActions,
} from "@/components/custom/page-header";
import { Button } from "@/components/ui/button";
import { Flame } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container relative flex-1">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <MainNav />
        </div>
      </header>
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>PixAnime</PageHeaderHeading>
        <PageHeaderDescription>
          The best streaming platform for lazy people who like to watch millions
          of movies, series and animes&apos; for free. Click watch now to get
          started.
        </PageHeaderDescription>
        <PageActions>
          <Link href="/anime">
            <Button className="flex items-center justify-center">
              <Flame className="mr-1" size={14} />
              Watch now
            </Button>
          </Link>
          <Button variant="outline">Pixlens</Button>
        </PageActions>
      </PageHeader>

      <MainFooter className="mt-6" />
    </main>
  );
}

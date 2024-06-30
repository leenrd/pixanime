import { cn } from "@/lib/utils";
import { FC } from "react";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import Link from "next/link";

interface MainFooterProps {
  className?: string;
}

const MainFooter: FC<MainFooterProps> = ({ ...className }) => {
  return (
    <>
      <Separator className="mt-[10em] mb-7" />
      <footer
        className={cn("flex justify-between items-start px-7", className)}
      >
        <div id="left" className="flex gap-4 items-center">
          <h1 className="text-xl font-semibold transition-colors hover:text-primary">
            Pixqana
          </h1>
          <Badge
            variant="outline"
            className="inline-flex py-1 items-center gap-1 justify-center rounded-md"
          >
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            <span> Status: Operational</span>
          </Badge>
        </div>
        <div id="right">
          <ul className="flex gap-16">
            <li>
              <h1 className="font-semibold transition-colors hover:text-primary mb-3">
                Product
              </h1>
              <ul className="mb-3">
                <li>
                  <Link href={"/changelog"}>Changelog</Link>
                </li>
                <li>
                  <Link href={"/changelog"}>Support</Link>
                </li>
              </ul>
            </li>
            <li>
              <h1 className="font-semibold transition-colors hover:text-primary mb-3">
                Company
              </h1>
              <ul className="mb-3">
                <li>
                  <Link href={"/changelog"}>About Us</Link>
                </li>
                <li>
                  <Link href={"/changelog"}>Career</Link>
                </li>
              </ul>
            </li>
            <li>
              <h1 className="font-semibold transition-colors hover:text-primary mb-3">
                Developers
              </h1>
              <ul className="mb-3">
                <li>
                  <Link href={"https://github.com/leenrd/"}>Github</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default MainFooter;

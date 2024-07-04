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
      <Separator className="mb-7 mt-0" />
      <footer
        className={cn(
          "flex justify-between items-start px-7 mb-10 z-50 bg-background",
          className
        )}
      >
        <div className="flex flex-col justify-between">
          <div id="left" className="flex gap-4 items-center">
            <h1 className="text-xl font-semibold transition-colors hover:text-primary">
              Pixqana
            </h1>
            <Badge
              variant="outline"
              className="inline-flex py-1 items-center gap-1 justify-center rounded-md"
            >
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              <span className="text-primary"> Status: Operational</span>
            </Badge>
          </div>
          <span className="text-sm text-gray-600 mt-4">
            Made by Leenard Zarate
          </span>
        </div>
        <div id="right">
          <ul className="flex gap-16">
            <li>
              <h1 className="font-semibold transition-colors hover:text-primary mb-3">
                Product
              </h1>
              <ul className="mb-3">
                <li className="mb-2">
                  <Link href={"https://github.com/leenrd/"} className="text-sm">
                    Changelog
                  </Link>
                </li>
                <li>
                  <Link href={"https://github.com/leenrd/"} className="text-sm">
                    Support
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <h1 className="font-semibold transition-colors hover:text-primary mb-3">
                Company
              </h1>
              <ul className="mb-3">
                <li className="mb-2">
                  <Link href={"https://github.com/leenrd/"} className="text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href={"https://github.com/leenrd/"} className="text-sm">
                    Career
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <h1 className="font-semibold transition-colors hover:text-primary mb-3">
                Developers
              </h1>
              <ul className="mb-3">
                <li className="mb-2">
                  <Link href={"https://github.com/leenrd/"} className="text-sm">
                    Github
                  </Link>
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

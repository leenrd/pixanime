import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { MainNav } from "@/components/custom/main-nav";
import MainFooter from "@/components/custom/main-footer";

export const metadata: Metadata = {
  title: "PixAnime",
  description: "Anime streaming platform for lazy people.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <MainNav />
        {children}
        <MainFooter />
      </body>
    </html>
  );
}

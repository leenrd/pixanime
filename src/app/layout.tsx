"use client";

import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { MainNav } from "@/components/custom/main-nav";
import MainFooter from "@/components/custom/main-footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <QueryClientProvider client={queryClient}>
          <MainNav />
          {children}
          <MainFooter />
        </QueryClientProvider>
      </body>
    </html>
  );
}

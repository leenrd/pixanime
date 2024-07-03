/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sup-proxy.zephex0-f6c.workers.dev",
      },
      {
        protocol: "https",
        hostname: "s4.anilist.co",
      },
      {
        protocol: "https",
        hostname: "gogocdn.net",
      },
    ],
  },
};

export default nextConfig;

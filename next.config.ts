import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "ningen-kentei.vercel.app",
          },
        ],
        destination: "https://ningen-kentei.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

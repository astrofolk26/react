import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: '.',


  /* config options here */
  images: {
    // loader:"custom",
    // unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.jp",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "**",
      },
    ]
  },
};
module.exports = {
  productionBrowserSourceMaps: false,
}
module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://astro26-hthnaqdwcqbvgfbv.centralindia-01.azurewebsites.net/:path*',
      },
    ];
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/hulpaanbod/jongerenbegeleiding",
        destination: "/hulpaanbod/jeugdhulp",
        permanent: true,
      },
      {
        source: "/hulpaanbod/ouderbegeleiding",
        destination: "/hulpaanbod/ouderbegeleiding-oudertherapie",
        permanent: true,
      },
      {
        source: "/hulpaanbod/vaktherapie-creatieve-therapie",
        destination: "/hulpaanbod/vaktherapie-beeldende-therapie",
        permanent: true,
      },
      {
        source: "/hulpaanbod/psycholoog-pedagoog-begeleiding",
        destination: "/hulpaanbod/psycholoog-pedagoog",
        permanent: true,
      },
    ];
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;

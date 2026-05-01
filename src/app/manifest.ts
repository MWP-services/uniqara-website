import type { MetadataRoute } from "next";
import { seo } from "@/content/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: seo.defaultTitle,
    short_name: seo.siteName,
    description: seo.defaultDescription,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2f7652",
    icons: [
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}

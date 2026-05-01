import type { MetadataRoute } from "next";
import { absoluteUrl, technicalSeoRoutes } from "@/content/seo";

const lastModified = new Date("2026-05-01");

export default function sitemap(): MetadataRoute.Sitemap {
  return technicalSeoRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.routeKey === "home" ? "monthly" : "yearly",
    priority:
      route.routeKey === "home" ? 1 : route.routeKey === "privacy" ? 0.3 : 0.8,
  }));
}

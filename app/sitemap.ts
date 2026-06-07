import type { MetadataRoute } from "next";
import { routes } from "@/src/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: route.href,
    lastModified: new Date(),
  }));
}

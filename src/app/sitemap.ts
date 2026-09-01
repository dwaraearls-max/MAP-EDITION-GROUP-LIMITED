import type { MetadataRoute } from "next";
import { getAbsoluteAssetUrl, getAbsoluteUrl, sitemapEntries } from "@/lib/sitemap";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return sitemapEntries.map((entry) => ({
    url: getAbsoluteUrl(entry.path),
    lastModified,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
    ...(entry.images?.length
      ? { images: entry.images.map((image) => getAbsoluteAssetUrl(image)) }
      : {}),
  }));
}

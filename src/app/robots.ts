import type { MetadataRoute } from "next";
import { getAbsoluteUrl } from "@/lib/sitemap";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getAbsoluteUrl("");

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/search"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}

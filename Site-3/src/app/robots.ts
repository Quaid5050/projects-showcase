import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [],
    },
    sitemap: "https://www.merchantorders.io/sitemap.xml",
    host: "https://www.merchantorders.io",
  }
}

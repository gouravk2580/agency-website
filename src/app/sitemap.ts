import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] = [
    { path: "", changeFrequency: "weekly", priority: 1.0 },
    { path: "/services", changeFrequency: "monthly", priority: 0.9 },
    { path: "/services/meta-ads", changeFrequency: "monthly", priority: 0.8 },
    { path: "/services/google-ads", changeFrequency: "monthly", priority: 0.8 },
    { path: "/services/seo", changeFrequency: "monthly", priority: 0.8 },
    { path: "/services/video-editing", changeFrequency: "monthly", priority: 0.8 },
    { path: "/case-studies", changeFrequency: "monthly", priority: 0.7 },
    { path: "/pricing", changeFrequency: "monthly", priority: 0.7 },
    { path: "/about", changeFrequency: "yearly", priority: 0.6 },
    { path: "/blog", changeFrequency: "weekly", priority: 0.9 },
    { path: "/contact", changeFrequency: "yearly", priority: 0.6 },
    { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}

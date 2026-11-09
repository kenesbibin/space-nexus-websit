import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://spacenexus.net";
  const restrictedPaths = [
    "/api/",
    "/admin/",
    "/private/",
    "/kindora/email-click",
  ];

  return {
    rules: [
      {
        userAgent: [
          "GPTBot",
          "Google-Extended",
          "ClaudeBot",
          "anthropic-ai",
          "CCBot",
        ],
        allow: "/",
        disallow: restrictedPaths,
      },
      {
        userAgent: [
          "OAI-SearchBot",
          "PerplexityBot",
          "Claude-SearchBot",
          "Bingbot",
        ],
        allow: "/",
        disallow: restrictedPaths,
      },
      {
        userAgent: ["ChatGPT-User", "Claude-User", "Perplexity-User"],
        allow: "/",
        disallow: restrictedPaths,
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: restrictedPaths,
      },
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/kindora/sitemap.xml`,
    ],
    host: baseUrl,
  };
}

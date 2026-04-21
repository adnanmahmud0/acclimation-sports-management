import type { MetadataRoute } from "next";

import { siteMetadata } from "@/lib/seo";

const routes = [
    "/",
    "/contact",
    "/get-started",
    "/contract-negotiation",
    "/personal-branding",
    "/salary-cap",
    "/marketing-endorsements",
    "/pre-draft",
    "/holistic-concierge",
    "/high-school-talent",
    "/nba-players",
    "/college-prospects",
    "/wnba",
    "/two-way-contracts",
    "/g-league-elite",
];

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    return routes.map((route) => ({
        url: route === "/" ? siteMetadata.url : `${siteMetadata.url}${route}`,
        lastModified,
        changeFrequency: route === "/" ? "weekly" : "monthly",
        priority: route === "/" ? 1 : 0.8,
    }));
}

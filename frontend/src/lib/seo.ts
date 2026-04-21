import type { Metadata } from "next";
import { seoRoutes, seoSiteConfig } from "@/lib/seoConfig";

export const siteMetadata = seoSiteConfig;

export function buildPageMetadata(path: keyof typeof seoRoutes): Metadata {
    const route = seoRoutes[path] ?? seoRoutes["/"];
    const canonical = path === "/" ? seoSiteConfig.url : `${seoSiteConfig.url}${path}`;
    const image = route.image ?? seoSiteConfig.defaultImage;

    return {
        metadataBase: new URL(seoSiteConfig.url),
        title: route.title,
        description: route.description,
        keywords: [...seoSiteConfig.keywords, ...(route.keywords ?? [])],
        alternates: {
            canonical,
        },
        openGraph: {
            title: route.title,
            description: route.description,
            url: canonical,
            siteName: seoSiteConfig.name,
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: route.title,
                },
            ],
            locale: "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: route.title,
            description: route.description,
            images: [image],
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}

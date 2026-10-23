import type { Metadata } from "next";

/* Single source for company facts and link-preview metadata. When the domain
   changes, set NEXT_PUBLIC_SITE_URL (or edit the fallback) — every canonical
   URL, share image and sitemap entry follows it. */
export const site = {
  name: "Canary",
  company: "Canary Inc.",
  email: "support@halvex.net",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://canary.halvex.net").replace(/\/$/, ""),
  title: "Canary | Every vehicle, on the record",
  description:
    "Canary tells you how your car is being driven and treated, the moment it happens. Built for rental hosts, fleets & owners.",
  /** Canary Pink: link-card accent (theme-color) and brand colour. */
  color: "#ff0049",
  background: "#0c0a09",
} as const;

export const mailto = (subject?: string) =>
  `mailto:${site.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;

const ogImage = {
  url: "/og.jpg",
  width: 1200,
  height: 630,
  alt: "Canary: Every vehicle, on the record.",
  type: "image/jpeg",
};

/** Full per-page metadata, so every page’s link preview carries its own title,
    description and canonical URL alongside the shared share image. */
export function pageMetadata({
  title,
  description = site.description,
  path = "/",
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const fullTitle = title ? `${title} | ${site.name}` : site.title;
  return {
    title: title ?? { absolute: site.title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_US",
      url: path,
      title: fullTitle,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}

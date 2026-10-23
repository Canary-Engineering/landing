/* Single source for company facts that appear across the site and legal pages. */
export const site = {
  name: "Canary",
  company: "Canary Inc.",
  email: "support@halvex.net",
  description:
    "Canary plugs into your car and catches abuse the moment it happens — built for fleets, rentals & owners who need to know.",
} as const;

export const mailto = (subject?: string) =>
  `mailto:${site.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;

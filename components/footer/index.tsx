import Link from "next/link";

import { container } from "@/components/basic/primitives";
import { site } from "@/lib/site";

const links = [
  { title: "Privacy", href: "/privacy" },
  { title: "Terms", href: "/terms" },
];

const linkClass =
  "rounded-sm transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

/* One quiet row, then the brand signature: the wordmark oversized until it
   crops off the bottom of the page, line-hatched and fading out (see
   `.canary-signature`). */
export default function Footer() {
  return (
    <footer className="bg-background">
      <div
        className={`${container} flex flex-col gap-4 py-8 text-[13px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between`}
      >
        <p>© {new Date().getFullYear()} {site.company}</p>
        <nav aria-label="Footer" className="flex items-center gap-6">
          <a href={`mailto:${site.email}`} className={linkClass}>
            {site.email}
          </a>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={linkClass}>
              {l.title}
            </Link>
          ))}
        </nav>
      </div>

      <div className="canary-signature-wrap relative overflow-hidden">
        <Link
          href="/"
          aria-hidden
          tabIndex={-1}
          className="canary-signature absolute left-1/2 top-0 block -translate-x-1/2 transition-opacity hover:opacity-80"
        />
      </div>
    </footer>
  );
}

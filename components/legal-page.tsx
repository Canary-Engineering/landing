import type { ReactNode } from "react";

import { container } from "@/components/basic/primitives";

export type LegalSection = { id: string; title: string; body: ReactNode };

/* Shared layout for Terms & Privacy: a readable single column with an in-page
   table of contents. Plain anchor links, so sections deep-link and Back works. */
export function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: ReactNode;
  sections: LegalSection[];
}) {
  return (
    <section className="border-b border-border">
      <div className={`${container} pb-12 pt-20 lg:pt-28`}>
        <h1 className="text-[clamp(2.25rem,4vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.02em]">{title}</h1>
        <p className="mt-4 text-[14px] text-muted-foreground">Last updated {updated}</p>
      </div>

      <div className={`${container} grid gap-12 pb-24 lg:grid-cols-[1fr_16rem] lg:gap-16`}>
        <div className="max-w-[68ch] text-[16px] leading-relaxed text-muted-foreground [&_a]:text-foreground [&_a]:underline [&_a]:decoration-border [&_a]:underline-offset-4 hover:[&_a]:decoration-foreground [&_li]:mt-2 [&_p+p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-5">
          <div className="text-[17px] text-foreground/80">{intro}</div>
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="mt-12 scroll-mt-24">
              <h2 className="mb-4 text-2xl font-medium text-foreground">{s.title}</h2>
              {s.body}
            </section>
          ))}
        </div>

        <nav aria-label="On this page" className="order-first lg:order-none">
          <div className="lg:sticky lg:top-24">
            <div className="mb-3 text-[13px] font-medium text-foreground">On this page</div>
            <ol className="space-y-1 border-l border-border">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="-ml-px block border-l border-transparent py-1 pl-4 text-[14px] text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>
      </div>
    </section>
  );
}

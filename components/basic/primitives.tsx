import React from "react";

/* Shared shell: one 1440px container and one set of page gutters, used by the
   header, every section and the footer so their edges line up. */

export const container = "mx-auto w-full max-w-[1440px] px-7 md:px-8 lg:px-9 xl:px-10";

/** Opening block for inner pages (legal, 404). */
export function PageHeader({ title, lede }: { title: React.ReactNode; lede?: React.ReactNode }) {
  return (
    <section className="bg-background pb-16 pt-20 lg:pb-20 lg:pt-28">
      <div className={container}>
        <h1 className="max-w-[820px] text-balance text-[clamp(2.25rem,4vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-foreground">
          {title}
        </h1>
        {lede && (
          <p className="mt-6 max-w-[620px] text-pretty text-[17px] leading-[1.6] text-muted-foreground">
            {lede}
          </p>
        )}
      </div>
    </section>
  );
}

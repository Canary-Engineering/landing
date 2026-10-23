import type { Metadata } from "next";
import Image from "next/image";

import { ContactButton } from "@/components/contact-button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Canary exists so that what happened to a vehicle is a matter of record, not one person's word against another's.",
};

const values = [
  {
    t: "Transparency",
    d: "Owners deserve to know exactly what is happening with their vehicle — and to see the evidence, not just a score.",
  },
  {
    t: "Reliability",
    d: "An alert only matters if you can trust it — every time, even when the car is out of signal.",
  },
  {
    t: "Simplicity",
    d: "Plug it in and you're done. No wiring, no dealer visit, no learning curve.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-24">
          <h1 className="max-w-4xl text-balance text-5xl font-medium tracking-tight md:text-7xl">
            about canary.{" "}
            <span className="font-normal italic text-muted-foreground">
              evidence, not excuses.
            </span>
          </h1>
          <div className="mt-8 grid max-w-5xl gap-6 text-[17px] leading-relaxed text-muted-foreground md:grid-cols-2 md:gap-12">
            <p className="text-pretty">
              When a car comes back with cooked tires, a slipped clutch or a cracked
              bumper, the conversation that follows is almost always the same: one
              person&apos;s word against another&apos;s. Fleets, rental hosts and owners
              eat the cost because they can&apos;t prove what happened.
            </p>
            <p className="text-pretty">
              Canary changes that. It plugs into the car, spots abuse the moment it
              happens, and sends you the proof — so the answer to
              &ldquo;what happened out there?&rdquo; is a record, not an argument.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <figure>
            <Image
              src="/civicandbmw_WATERMARK.png"
              alt="A blue BMW and a dark Honda Civic driving along a winding tree-lined road."
              width={1280}
              height={720}
              sizes="(min-width: 1280px) 1232px, 100vw"
              className="w-full rounded-2xl border border-border"
              priority
            />
            <figcaption className="mt-3 text-[13px] text-muted-foreground">
              Photo: Ahmad Studios
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-3 md:gap-16">
          <h2 className="text-4xl font-medium tracking-tight md:text-5xl">
            what we{" "}
            <span className="font-normal italic text-muted-foreground">stand for.</span>
          </h2>
          <dl className="divide-y divide-border border-t border-border md:col-span-2">
            {values.map(({ t, d }) => (
              <div key={t} className="grid gap-2 py-6 sm:grid-cols-3 sm:gap-8">
                <dt className="text-[17px] font-medium">{t}</dt>
                <dd className="text-[15px] leading-relaxed text-muted-foreground sm:col-span-2">
                  {d}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-20 md:flex-row md:items-center">
          <p className="max-w-xl text-balance text-3xl font-medium tracking-tight md:text-4xl">
            running a fleet, a rental operation or just one car you care about?
          </p>
          <ContactButton />
        </div>
      </section>
    </>
  );
}

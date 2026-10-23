import type { Metadata } from "next";

import { ContactButton } from "@/components/contact-button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to the Canary team about fleets, rentals & early access.",
};

const topics = [
  ["Fleets & rentals", "Tell us roughly how many vehicles you run and what abuse costs you today."],
  ["Owners", "Tell us about the vehicle you want to protect."],
  ["Everything else", "Press, partnerships or questions about how Canary works."],
] as const;

export default function ContactPage() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:gap-16">
        <div>
          <h1 className="max-w-3xl text-balance text-5xl font-medium tracking-tight md:text-6xl">
            get in touch{" "}
            <span className="font-normal italic text-muted-foreground">about Canary.</span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-[17px] leading-relaxed text-muted-foreground">
            Canary is in private preview. Email the team and we&apos;ll get back to
            you.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <ContactButton label="Email us" subject="Hello from the Canary site" />
            <a
              href={`mailto:${site.email}`}
              className="text-[15px] underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
            >
              {site.email}
            </a>
          </div>
        </div>

        <dl className="divide-y divide-border self-start border-y border-border">
          {topics.map(([t, d]) => (
            <div key={t} className="py-6">
              <dt className="text-[17px] font-medium">{t}</dt>
              <dd className="mt-1 text-[15px] leading-relaxed text-muted-foreground">{d}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

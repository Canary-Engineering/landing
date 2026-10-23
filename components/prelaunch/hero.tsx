import { Play } from "lucide-react";

import { ContactButton } from "@/components/contact-button";
import { CanDataField } from "@/components/prelaunch/can-data-field";

export function PreLaunchHero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <CanDataField />
      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-24">
        <h1 className="max-w-4xl text-balance text-[56px] font-medium leading-[0.95] tracking-[-0.04em] sm:text-[64px] md:text-[92px]">
          see every abuse event
          <br />
          <span className="font-normal italic">the instant it happens.</span>
        </h1>

        <p className="mt-8 max-w-xl text-pretty text-[17px] leading-relaxed text-muted-foreground">
          Canary Core reads the CAN bus and classifies abuse at the edge — donuts,
          redline launches, harsh braking, tamper. Built for fleets, rentals &amp; owners
          who need to know.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <ContactButton />
          <a
            href="#abuse"
            className="group inline-flex items-center gap-2 rounded-full text-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-foreground text-background transition-transform group-hover:scale-105">
              <Play aria-hidden className="h-3 w-3 fill-current" />
            </span>
            See it happen
          </a>
        </div>
      </div>
    </section>
  );
}

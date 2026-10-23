import Image from "next/image";

import { ContactLink } from "@/components/basic/contact-link";
import { BrandStrip } from "@/components/basic/brands";
import { container } from "@/components/basic/primitives";


export function BasicHero() {
  return (
    <section className="relative isolate flex min-h-svh flex-col overflow-hidden bg-[#0c0a09] text-white">
      {/* 3840x2160, Senang Design via Unsplash (free for commercial use, no
          attribution required). The car sits small
          and right of centre, and the left half — valley and cloud — is the bed
          the headline sits on. Native 16:9, so a desktop viewport shows the
          whole frame with almost no crop. */}
      <Image
        src="/hero-road.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        /* Native 16:9, so a desktop viewport is essentially the whole frame.
           A portrait viewport crops hard sideways, and a centred crop leaves
           only a sliver of the car — 62% keeps its nose in the lower right and
           still leaves the top-left open for the headline. */
        className="object-cover object-[62%_50%] md:object-center"
        aria-hidden
      />
      {/* Two overlays, same job as the photograph’s own contrast: the horizontal
          one keeps the headline column readable, the vertical one seats the
          header and the bottom strip. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,10,9,0.72)_0%,rgba(12,10,9,0.5)_52%,rgba(12,10,9,0.15)_85%,rgba(12,10,9,0.05)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,10,9,0.45)_0%,rgba(12,10,9,0.05)_35%,rgba(12,10,9,0.6)_100%)]"
      />

      <div className="relative z-10 flex flex-1 flex-col justify-center pb-20 pt-32">
        <div className={container}>
          {/* Indented one 12-column step rather than starting at the page gutter. */}
          <div className="flex max-w-[600px] flex-col gap-8 md:ml-[4.5%] lg:ml-[6.5%]">
            <div className="flex flex-col gap-5">
              {/* Weight carries the emphasis: the subject stays light, the claim
                  lands bold. Explicit font-normal is required — the base layer
                  sets h1 to 500. */}
              <h1 className="text-[clamp(2.75rem,4.7vw,4.5rem)] font-normal leading-[1.0] tracking-[0.005em] text-white">
                Every vehicle,
                <br />
                <span className="font-medium">on the record.</span>
              </h1>
              {/* Hard-broken so both lines land at a chosen
                  length — but only once there is room for it; on a phone the
                  sentence wraps on its own. */}
              <p className="max-w-[520px] text-[16.5px] leading-[1.5] tracking-[-0.005em] text-white">
                Canary tells you how your car is being driven
                <br className="hidden sm:inline" /> and treated, the moment it happens.
              </p>
            </div>

            <div className="flex items-center">
              <ContactLink tone="onDark" label="Get in touch" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 pb-10 pt-6">
        <div className={container}>
          <BrandStrip />
        </div>
      </div>
    </section>
  );
}

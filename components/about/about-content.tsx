import Image from "next/image";

import { WaitlistModalButton } from "@/components/ui/waitlistmodal";

const beliefs: { t: string; d: string }[] = [
  {
    t: "proof beats opinion",
    d: "Almost every argument about a car comes down to two people remembering it differently. The car was there for all of it. It should be the one that settles it — not whoever is more confident.",
  },
  {
    t: "it has to work when it matters",
    d: "Anything that only works with a good signal, a charged phone and nobody interfering with it will fail on exactly the day you needed it. So Canary decides for itself, runs on its own power, and keeps recording when it's been cut off.",
  },
  {
    t: "you shouldn't have to think about it",
    d: "One connector, no splicing, no dealer visit, nothing to remember to switch on. It sits behind the dash and stays quiet until there's a reason not to be.",
  },
];

export function AboutContent() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="text-4xl font-medium tracking-tight md:text-5xl">
              it starts the moment{" "}
              <span className="font-normal italic text-muted-foreground">
                you hand over the keys.
              </span>
            </h2>
            <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-muted-foreground">
              <p>
                A renter, a valet, a shop, a friend, someone in the family who just got
                their licence. The car drives away and for the next few hours or days you
                know exactly nothing about what happens to it.
              </p>
              <p>
                Everything comes back to you afterwards, second-hand and already
                explained. A noise that wasn&apos;t there before. A light on the dash. A
                story about a pothole. By then the only honest answer anyone can give you
                is that they don&apos;t really remember.
              </p>
              <p>
                The strange part is that the car knew the whole time. It measures its own
                speed, its own revs, its own faults, hundreds of times a second, and then
                throws all of it away. Canary is the piece that keeps it and tells you.
              </p>
            </div>
          </div>

          <Image
            src="/civicandbmw_WATERMARK.png"
            alt="Canary origin"
            width={800}
            height={600}
            className="w-full rounded-2xl border border-border"
          />
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="mb-16 max-w-3xl text-4xl font-medium tracking-tight md:text-5xl">
            what we build{" "}
            <span className="font-normal italic text-muted-foreground">around.</span>
          </h2>
          <div className="grid gap-x-16 gap-y-12 md:grid-cols-3">
            {beliefs.map((b) => (
              <div key={b.t} className="border-t border-border pt-6">
                <h3 className="mb-3 text-[22px] leading-tight">{b.t}</h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <h2 className="mx-auto max-w-3xl text-4xl font-medium tracking-tight md:text-5xl">
            we&apos;re early,{" "}
            <span className="font-normal italic text-muted-foreground">
              and that&apos;s the point.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-muted-foreground">
            Canary is in private preview. The people you&apos;d be talking to are the ones
            designing the board and writing the firmware — which means what you tell us
            now still changes what gets built.
          </p>
          <div className="mt-10 flex items-center justify-center">
            <WaitlistModalButton className="h-11 px-6 text-[15px]" />
          </div>
        </div>
      </section>
    </>
  );
}

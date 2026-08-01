import { WaitlistModalButton } from "@/components/ui/waitlistmodal";

/* The technical buyer's page. Everything here is true to the specs in the docs repo
   (architecture/overview.md, hardware/*), but written for someone deciding whether to
   trust the thing — not for someone implementing it. Part numbers stay out; the
   engineering decisions and their consequences stay in, because the decisions are what
   make the product believable. */

export function TechHero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-24">
        <div className="mb-6 font-mono text-[12px] uppercase tracking-widest text-primary">
          Technology
        </div>
        <h1 className="max-w-4xl text-5xl font-medium tracking-tight md:text-6xl">
          how it actually{" "}
          <span className="font-normal italic text-muted-foreground">works.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
          Most vehicle trackers are a phone without a screen: they collect a position,
          send it somewhere, and let a server decide what it means. Canary is built the
          other way around — the car works out what happened, and the network is only
          how it tells you.
        </p>
      </div>
    </section>
  );
}

const principles: { n: string; t: string; d: string }[] = [
  {
    n: "01",
    t: "the thinking happens in the car",
    d: "Canary decides that something was a burnout, an impact or a theft on its own hardware, in the moment. If that judgment lived on a server instead, 'you'll know in seconds' would really mean 'you'll know in seconds, if there's coverage' — which is exactly the promise that breaks in an underground garage. Deciding locally makes it instant by construction; the connection is only needed to pass the message on.",
  },
  {
    n: "02",
    t: "nothing rests on a single reading",
    d: "Speed comes from the car's own drivetrain, not from GPS — so it stays correct in tunnels and multi-storey car parks where satellite position drops out. Location comes from GPS. Force and motion come from a separate sensor again. Anything Canary reports had to look true to more than one of them, which is what stops a bump in the road from being logged as a collision.",
  },
  {
    n: "03",
    t: "losing signal doesn't lose the event",
    d: "When there's no connection, everything is written to storage inside the device and sent when there is one. Under pressure, ordinary background data is dropped first and incidents are never dropped at all. A car that spends its day out of coverage still comes back with a complete account of the day.",
  },
  {
    n: "04",
    t: "removing it is itself the alarm",
    d: "Canary watches its own power supply. Cutting the car's battery, or pulling the unit out, takes it below the threshold it's watching for — which triggers an immediate alert carrying the last known location, sent on its own backup battery, before anything else happens. Then it keeps recording for as long as that battery holds.",
  },
  {
    n: "05",
    t: "records can't be rewritten after the fact",
    d: "Every device carries a dedicated security chip that signs what it records, using a key that never leaves the chip. Nobody downstream can alter an entry and have it still verify — not a driver, not a renter, not us. Where a car lets a fault code be cleared, Canary keeps its own copy of the code that existed before the clear.",
  },
  {
    n: "06",
    t: "it can't be turned against the car",
    d: "Software updates are signed by our servers, and each part checks that signature itself before accepting anything — the hub relays updates but has no authority to write them. So compromising the hub can't put hostile code into the parts wired to your engine. The engine cutoff is wired to fail safe, too: with no power and no signal, the starter circuit stays intact and the car still starts.",
  },
];

export function TechPrinciples() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="mb-16 max-w-3xl text-4xl font-medium tracking-tight md:text-5xl">
          six decisions{" "}
          <span className="font-normal italic text-muted-foreground">
            that make the difference.
          </span>
        </h2>

        <div className="grid gap-x-16 gap-y-12 md:grid-cols-2">
          {principles.map((p) => (
            <div key={p.n} className="border-t border-border pt-6">
              <div className="mb-3 font-mono text-[12px] tracking-widest text-primary">
                {p.n}
              </div>
              <h3 className="mb-3 text-[22px] leading-tight">{p.t}</h3>
              <p className="text-[15px] leading-relaxed text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const parts: { tag: string; name: string; d: string }[] = [
  {
    tag: "The hub",
    name: "Canary Core",
    d: "Installs out of sight behind the dash and wired to the car's permanent power. Holds the cellular connection, the GPS, the motion sensor, the storage and the security chip — and every judgment about what just happened is made here. It has its own battery so that losing the car's power is something it can report rather than something that silences it.",
  },
  {
    tag: "Included",
    name: "CAN Harness",
    d: "Plugs into the car's diagnostic port and gives Canary the vehicle's own live view of itself — road speed, engine revs, gear, doors, fault codes. This is where the difference between 'the car moved' and 'someone launched it at 6,800rpm' comes from.",
  },
  {
    tag: "Optional",
    name: "Starter Immobilizer",
    d: "Lets you stop the car being started again, from your phone. Never intervenes while the car is moving, and fails safe: if it loses power or contact with the hub, the starter circuit stays closed and the car starts normally.",
  },
];

export function TechParts() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="mb-4 max-w-3xl text-4xl font-medium tracking-tight md:text-5xl">
          one hub.{" "}
          <span className="font-normal italic text-muted-foreground">
            everything else plugs into it.
          </span>
        </h2>
        <p className="mb-16 max-w-2xl text-[16px] leading-relaxed text-muted-foreground">
          Every part uses the same sealed, weatherproof connector, and the hub recognises
          what it is the moment it&apos;s plugged in. Adding a part later means plugging it
          in — no rewiring, no return visit.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {parts.map((p) => (
            <div key={p.name} className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-4 font-mono text-[12px] uppercase tracking-widest text-primary">
                {p.tag}
              </div>
              <h3 className="mb-3 text-[22px] leading-tight">{p.name}</h3>
              <p className="text-[14px] leading-relaxed text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const specs: [string, string][] = [
  ["Connection", "4G LTE, with Wi-Fi when the car is somewhere it knows"],
  ["Location", "GPS, streamed live about once a second while the car is moving"],
  ["Speed", "Read from the car itself, so it survives tunnels and car parks"],
  ["Detection", "Runs on the device — no connection required to catch anything"],
  ["Offline storage", "Days of recording held on board and sent on reconnect"],
  ["Backup power", "On-board battery, so cutting the car's power is still reported"],
  ["Security", "A dedicated chip in every part; every record signed at the source"],
  ["Updates", "Signed, verified by each part itself, and reversible if one goes wrong"],
  ["Install", "One connector, no splicing, no dealer visit"],
  ["Weatherproofing", "Sealed connectors rated for engine-bay and under-body routing"],
];

export function TechSpecs() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <h2 className="mb-12 text-4xl font-medium tracking-tight md:text-5xl">
          the short version.
        </h2>
        <dl className="border-t border-border">
          {specs.map(([k, v]) => (
            <div
              key={k}
              className="grid gap-2 border-b border-border py-5 sm:grid-cols-3 sm:gap-6"
            >
              <dt className="font-mono text-[12px] uppercase tracking-widest text-primary">
                {k}
              </dt>
              <dd className="text-[15px] leading-relaxed text-foreground/80 sm:col-span-2">
                {v}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function TechCTA() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 text-center">
        <h2 className="mx-auto max-w-3xl text-4xl font-medium tracking-tight md:text-5xl">
          questions we haven&apos;t{" "}
          <span className="font-normal italic text-muted-foreground">answered here?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-[16px] text-muted-foreground">
          We&apos;re in private preview and we answer these ourselves. Join the waitlist
          and ask us anything.
        </p>
        <div className="mt-10 flex items-center justify-center">
          <WaitlistModalButton className="h-11 px-6 text-[15px]" />
        </div>
      </div>
    </section>
  );
}

import { ArrowDown, ArrowRight } from "lucide-react";

/* The system as it's actually built: Harness → Core → you. Each hop is labelled
   with what crosses it, because the interesting part of Canary is where the
   decision gets made (on the Core, before the network is involved). */

const stations = [
  {
    name: "Plug it in",
    role: "Under the dashboard",
    d: "Canary plugs into the diagnostic port under the dashboard. No wiring, no dealer visit.",
  },
  {
    name: "Canary watches",
    role: "Right there in the car",
    d: "It reads what the car already knows — speed, revs, braking — and spots abuse on the spot, even with no signal.",
  },
  {
    name: "You get the proof",
    role: "On your phone in seconds",
    d: "What happened, where, and the data to back it up — plus live location and a full trip history.",
  },
];

const links = ["car data", "instant alert"];

function Link({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center gap-3 py-4 md:flex-col md:gap-2 md:px-2 md:py-0">
      <ArrowDown aria-hidden className="h-4 w-4 text-primary md:hidden" />
      <ArrowRight aria-hidden className="hidden h-4 w-4 text-primary md:block" />
      <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground md:max-w-[9rem] md:text-center">
        {label}
      </span>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 md:grid-cols-2 md:gap-16">
          <h2 className="text-balance text-5xl font-medium tracking-tight md:text-6xl">
            your car knows.{" "}
            <span className="font-normal italic text-muted-foreground">now you do too.</span>
          </h2>
          <p className="max-w-md self-end text-pretty text-[16px] leading-relaxed text-muted-foreground">
            Every modern car keeps track of how it&apos;s being driven. Canary listens in
            and tells you the moment something&apos;s wrong — nothing more.
          </p>
        </div>

        <ol className="mt-16 flex flex-col md:flex-row md:items-stretch">
          {stations.map((s, i) => (
            <li key={s.name} className="contents">
              <div className="flex-1 rounded-2xl border border-border bg-card p-6 md:p-8">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-[22px] leading-tight">{s.name}</h3>
                  <span className="font-mono text-[11px] tabular-nums text-muted-foreground">
                    {i + 1}/{stations.length}
                  </span>
                </div>
                <p className="mt-1 text-[14px] text-primary">{s.role}</p>
                <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
              {i < links.length && <Link label={links[i]} />}
            </li>
          ))}
        </ol>

        <p className="mt-8 max-w-2xl text-[14px] leading-relaxed text-muted-foreground">
          Add-ons plug into the same unit. The first is the{" "}
          <span className="text-foreground">Starter Immobilizer</span>: block a parked car
          from starting, right from your phone. It never stops a car that&apos;s already
          running.
        </p>
      </div>
    </section>
  );
}

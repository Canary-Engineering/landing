import { Check } from "lucide-react";

type Audience = {
  tag: string;
  headline: string;
  body: string;
  points: string[];
  featured?: boolean;
};

/* Hosts lead, fleets follow — the ordering is deliberate. The host case is the one
   the product was designed around (see the owner-vs-renter command gating in the
   architecture docs), so it gets the accented card. */
const audiences: Audience[] = [
  {
    tag: "Rental hosts",
    headline: "you hand the keys to strangers.",
    body: "Then you hope. Canary tells you how the car was actually driven while it was gone — and gives you something to put in front of someone who says it wasn't.",
    points: [
      "Find out during the rental, not at drop-off",
      "Damage claims backed by what the car recorded",
      "Nobody can erase what Canary already saw",
      "Know the moment it leaves where it's supposed to be",
    ],
    featured: true,
  },
  {
    tag: "Fleets",
    headline: "you can't ride along with everyone.",
    body: "Fifty vehicles, fifty versions of what happened. Canary puts every one of them on a single screen, and tells you about the ones that need you.",
    points: [
      "Every vehicle, live, in one place",
      "Driver behaviour you don't have to take on trust",
      "Wear and abuse caught before it becomes a repair bill",
      "Stop a vehicle remotely if it's being taken",
    ],
  },
];

export function Audiences() {
  return (
    <section id="who" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 pt-24 text-center">
        <h2 className="mx-auto max-w-3xl text-5xl font-medium tracking-tight md:text-6xl">
          built for people who{" "}
          <span className="font-normal italic text-muted-foreground">
            aren&apos;t in the car.
          </span>
        </h2>
      </div>

      <div className="mx-auto grid max-w-7xl gap-6 px-6 pb-24 pt-16 md:grid-cols-2">
        {audiences.map((a) => (
          <div
            key={a.tag}
            className={`flex flex-col rounded-2xl border p-8 md:p-10 ${
              a.featured
                ? "border-primary/40 bg-card shadow-[0_20px_60px_-30px_rgba(255,0,73,0.25)]"
                : "border-border bg-card"
            }`}
          >
            <div className="mb-6 font-mono text-[12px] uppercase tracking-widest text-primary">
              {a.tag}
            </div>
            <h3 className="text-[28px] leading-tight tracking-tight md:text-[32px]">
              {a.headline}
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{a.body}</p>

            <ul className="mt-8 flex flex-col gap-3 border-t border-border pt-8">
              {a.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[14px] leading-relaxed">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-foreground/80">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

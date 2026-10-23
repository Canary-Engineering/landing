/* What Canary flags, in plain words. Kept to behaviours the Core is specced to
   detect — see the docs repo's architecture overview before adding one. */
const abuse = [
  {
    title: "Donuts & burnouts",
    body: "Spinning in place with the wheels slipping — someone treating a parking lot like a racetrack.",
  },
  {
    title: "Redline launches",
    body: "Floored from a standstill with the engine at the redline. The car records it, so there's no arguing it.",
  },
  {
    title: "Hard braking & cornering",
    body: "Sudden stops and sharp turns, confirmed two different ways so it's not a guess.",
  },
  {
    title: "Speeding",
    body: "Driving over a limit you set, with where and for how long.",
  },
  {
    title: "Tampering",
    body: "Unplugging Canary, cutting wires or disconnecting the battery — you hear about it right away.",
  },
];

export function AbuseCards() {
  return (
    <section id="abuse" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-3 md:gap-16">
        <div>
          <h2 className="text-balance text-4xl font-medium tracking-tight md:text-5xl">
            what canary{" "}
            <span className="font-normal italic text-muted-foreground">catches.</span>
          </h2>
          <p className="mt-6 max-w-sm text-pretty text-[16px] leading-relaxed text-muted-foreground">
            The moment one of these happens, you get an alert with what the car did,
            where it was, and when.
          </p>
        </div>
        <dl className="divide-y divide-border border-y border-border md:col-span-2">
          {abuse.map(({ title, body }) => (
            <div key={title} className="grid gap-2 py-6 sm:grid-cols-5 sm:gap-8">
              <dt className="text-[20px] leading-tight sm:col-span-2">{title}</dt>
              <dd className="text-[15px] leading-relaxed text-muted-foreground sm:col-span-3">
                {body}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

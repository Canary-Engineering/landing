import { BatteryCharging, BellRing, Cpu, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: BellRing,
    t: "It can't be quietly removed",
    d: "Unplug it, cut the wiring, drop the battery — you get told about that too, immediately.",
  },
  {
    icon: BatteryCharging,
    t: "It has its own power",
    d: "When the car's power goes, Canary keeps running on its own battery and keeps reporting.",
  },
  {
    icon: Cpu,
    t: "It works with no signal",
    d: "Tunnels, garages, dead zones. Canary catches everything on its own and sends it the moment it reconnects.",
  },
  {
    icon: ShieldCheck,
    t: "Nothing about it can be faked",
    d: "Every alert is signed by the device that recorded it. It can't be edited after the fact, by anyone.",
  },
];

function TamperEvidence() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 font-mono text-[12px] text-white/70">
      <div className="mb-4 flex items-center justify-between">
        <span className="uppercase tracking-widest text-white/50">Someone cut the power</span>
        <span className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
          </span>
          <span className="text-amber-400">live</span>
        </span>
      </div>
      <div className="space-y-2 rounded-lg bg-black/40 p-4 leading-5">
        <p>09:41:07 · car&apos;s power disconnected</p>
        <p>09:41:07 · switched to its own battery</p>
        <p>09:41:07 · you were alerted · last seen Ashburn, VA</p>
        <p className="text-white/40">09:41:08 · still recording…</p>
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
        <span className="text-white/50">signed by the device</span>
        <span className="text-emerald-400">can&apos;t be edited ✓</span>
      </div>
    </div>
  );
}

export function Security() {
  return (
    <section
      id="security"
      className="canary-noise relative overflow-hidden border-b border-border bg-[#0c0a09] text-white"
    >
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:gap-16 md:py-32">
        <div>
          <div className="mb-4 font-mono text-[12px] uppercase tracking-widest text-primary">
            If someone tries to stop it
          </div>
          <h2 className="text-4xl font-medium tracking-tight md:text-5xl">
            cut the power.{" "}
            <span className="font-normal italic text-white/60">it still reports.</span>
          </h2>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-white/70">
            The first thing anyone does to a tracker is unplug it. Do that to Canary and it
            switches to its own battery, tells you where the car was the second before it
            went dark, and keeps recording.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {features.map(({ icon: Icon, t, d }) => (
              <div key={t}>
                <div className="mb-3 grid h-9 w-9 place-items-center rounded-lg bg-primary/15 text-primary">
                  <Icon className="h-[18px] w-[18px]" />
                </div>
                <div className="mb-1 text-[15px] font-medium">{t}</div>
                <p className="text-[13.5px] leading-relaxed text-white/60">{d}</p>
              </div>
            ))}
          </div>
        </div>

        <TamperEvidence />
      </div>
    </section>
  );
}

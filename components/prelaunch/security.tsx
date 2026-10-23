import { BatteryCharging, BellRing, Cpu, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    t: "Tamper-proof records",
    d: "A dedicated security chip signs every alert, so no one can fake or edit what happened.",
  },
  {
    icon: BatteryCharging,
    t: "Backup battery",
    d: "Keeps Canary reporting even after the car's battery is disconnected.",
  },
  {
    icon: BellRing,
    t: "Tamper alerts",
    d: "Unplugging it, cutting wires or pulling power sends you an alert right away.",
  },
  {
    icon: Cpu,
    t: "Locked-down software",
    d: "Only official Canary updates can be installed. Nothing else runs.",
  },
];

export function Security() {
  return (
    <section
      id="security"
      className="canary-noise relative scroll-mt-16 overflow-hidden border-b border-border bg-[#0c0a09] text-white"
    >
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-6 md:grid-cols-2 md:gap-16">
          <h2 className="text-4xl font-medium tracking-tight md:text-5xl">
            cut the power.{" "}
            <span className="font-normal italic text-white/60">it still reports.</span>
          </h2>
          <p className="max-w-md self-end text-pretty text-[16px] leading-relaxed text-white/70">
            Unplug it or disconnect the battery and Canary switches to its own backup
            battery, sends you an alert with the car&apos;s last location, and keeps
            watching long enough to catch a tow.
          </p>
        </div>

        <div className="mt-16 grid gap-10 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, t, d }) => (
            <div key={t}>
              <div className="mb-3 grid h-9 w-9 place-items-center rounded-lg bg-primary/15 text-primary">
                <Icon aria-hidden className="h-[18px] w-[18px]" />
              </div>
              <div className="mb-1 text-[15px] font-medium">{t}</div>
              <p className="text-[13.5px] leading-relaxed text-white/60">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

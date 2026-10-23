import { Check, Minus } from "lucide-react";

/* Mirrors the four-tier permission model in the Canary spec. "Vendor" is the
   Read-Only (Limited) tier — fault codes only, scoped to specific vehicles. */

const roles = ["Owner", "Manager", "Read-only", "Vendor"] as const;

const rows: [string, boolean[]][] = [
  ["Live location & speed", [true, true, true, false]],
  ["Abuse & tamper events", [true, true, true, false]],
  ["Vehicle health & warning lights", [true, true, true, true]],
  ["Block the car from starting", [true, true, false, false]],
  ["Clear warning lights", [true, false, false, false]],
  ["Manage people & access", [true, false, false, false]],
];

const points = [
  {
    t: "Renters never get access.",
    d: "The people driving your cars can't see or change anything in Canary.",
  },
  {
    t: "Nothing gets erased.",
    d: "Only owners can clear a warning light — and Canary keeps a record of it anyway. Hiding damage doesn't work.",
  },
  {
    t: "Share only what's needed.",
    d: "Give your mechanic the health of the three cars in their shop this week — and nothing else.",
  },
];

export function Fleets() {
  return (
    <section id="fleets" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 md:grid-cols-5 md:gap-16">
        <div className="min-w-0 md:col-span-2">
          <h2 className="text-balance text-4xl font-medium tracking-tight md:text-5xl">
            built for fleets{" "}
            <span className="font-normal italic text-muted-foreground">& rental hosts.</span>
          </h2>
          <p className="mt-6 max-w-md text-pretty text-[16px] leading-relaxed text-muted-foreground">
            Owners, managers, investors, mechanics — everyone gets exactly the access
            they need, and nothing more.
          </p>
          <dl className="mt-10 space-y-6">
            {points.map(({ t, d }) => (
              <div key={t}>
                <dt className="text-[15px] font-medium">{t}</dt>
                <dd className="mt-1 text-[14px] leading-relaxed text-muted-foreground">{d}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="min-w-0 md:col-span-3 md:pt-2">
          <div className="overflow-x-auto rounded-2xl border border-border bg-card">
            <table className="w-full border-collapse text-left text-[13px] sm:text-[14px]">
              <caption className="sr-only">What each fleet role can see and do</caption>
              <thead>
                <tr className="border-b border-border">
                  <th scope="col" className="py-4 pl-4 pr-2 font-normal text-muted-foreground sm:px-5">
                    Capability
                  </th>
                  {roles.map((r) => (
                    <th key={r} scope="col" className="px-1.5 py-4 text-center text-[12px] font-medium sm:px-3 sm:text-[13px]">
                      {r}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map(([cap, allowed]) => (
                  <tr key={cap} className="border-b border-border last:border-0">
                    <th scope="row" className="py-3.5 pl-4 pr-2 font-normal text-foreground/80 sm:px-5">
                      {cap}
                    </th>
                    {allowed.map((ok, i) => (
                      <td key={roles[i]} className="px-1.5 py-3.5 text-center sm:px-3">
                        {ok ? (
                          <Check aria-hidden className="mx-auto h-4 w-4 text-primary" />
                        ) : (
                          <Minus aria-hidden className="mx-auto h-4 w-4 text-muted-foreground/50" />
                        )}
                        <span className="sr-only">{ok ? "Yes" : "No"}</span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[13px] text-muted-foreground">
            Every change to who can see what is permanently logged.
          </p>
        </div>
      </div>
    </section>
  );
}

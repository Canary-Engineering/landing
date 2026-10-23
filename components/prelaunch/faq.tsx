import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { site } from "@/lib/site";

const faqs: [string, string][] = [
  [
    "What exactly is Canary?",
    "A small device that plugs into your car and alerts you the moment it's abused — donuts, launches, hard braking, speeding or tampering — with the proof attached. Built for fleets, rentals & owners who need to know what happened, not guess.",
  ],
  [
    "What counts as abuse?",
    "Hard braking, hard acceleration and cornering, speeding past a limit you set, donuts, launches at the redline, and anyone unplugging the device or cutting the car's power.",
  ],
  [
    "Does it need cell signal to work?",
    "No. Canary spots abuse right there in the car, so it keeps working in tunnels, garages and dead zones. Alerts are saved and sent the moment it's back in signal — nothing gets lost.",
  ],
  [
    "Why should I trust the alerts?",
    "Every alert comes with when and where it happened and what the car was doing, checked against more than one source. A security chip signs each one, so no one can fake or edit it later.",
  ],
  [
    "Is it hard to install?",
    "No. It plugs into the diagnostic port under the dashboard — no wiring, no dealer visit. Add-ons like the Starter Immobilizer plug into the same unit.",
  ],
  [
    "When does it ship, and how do I get early access?",
    `Canary is in private preview. Email ${site.email} with a bit about your fleet, rental business or car and we'll follow up with early-access details & timing.`,
  ],
];

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-3 md:gap-16">
        <div className="md:col-span-1">
          <h2 className="text-4xl font-medium tracking-tight md:text-5xl">
            frequently asked{" "}
            <span className="font-normal italic text-muted-foreground">questions.</span>
          </h2>
        </div>
        <div className="md:col-span-2">
          <Accordion
            type="single"
            collapsible
            defaultValue={faqs[0][0]}
            className="w-full border-t border-border"
          >
            {faqs.map(([q, a]) => (
              <AccordionItem key={q} value={q}>
                <AccordionTrigger className="py-5 text-left text-[17px]">{q}</AccordionTrigger>
                <AccordionContent className="pb-6 text-[15px] leading-relaxed text-muted-foreground">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

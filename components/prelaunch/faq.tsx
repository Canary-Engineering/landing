import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs: [string, string][] = [
  [
    "What is Canary?",
    "A small device that installs behind the dash. It watches how the car is being driven and what happens to it, then tells you — on your phone, in seconds. Where it is, how it's being treated, and whether anyone is interfering with it.",
  ],
  [
    "What does it actually catch?",
    "Burnouts, donuts, launches, hard stops, impacts, speeding, drifting, missed gears — the things that wear a car out or write it off. Plus the things that aren't about driving at all: the car moving when it shouldn't be, being towed, or someone trying to unplug Canary itself.",
  ],
  [
    "Does it need cell service?",
    "No. Canary works out what happened inside the car itself, so it keeps catching things in tunnels, underground garages and dead zones where ordinary trackers go blind. Everything it saw gets sent the moment it has signal again.",
  ],
  [
    "Can someone just unplug it?",
    "They can try. Canary runs on its own battery when the car's power is cut, so pulling it is itself an alert — you get told where the car was the second before it went dark, and it keeps recording after.",
  ],
  [
    "How do I know what it tells me is true?",
    "Everything comes from the car's own sensors, cross-checked against each other rather than resting on any one reading. Each alert is signed by the device that recorded it, so it can't be altered afterwards — not by a driver, and not by us.",
  ],
  [
    "Is it hard to install?",
    "No. One connector, no splicing, no dealer visit. Anything you add later — like the remote engine cutoff — plugs into the same connector.",
  ],
  [
    "What does it cost, and when can I get one?",
    "Canary is in private preview, so pricing isn't public yet. Join the waitlist and tell us whether it's for your own car, your rentals or a fleet — we'll come back to you with early-access pricing and timing.",
  ],
];

export function Faq() {
  return (
    <section id="faq" className="border-b border-border">
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

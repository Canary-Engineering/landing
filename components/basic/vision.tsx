import { container } from "@/components/basic/primitives";

const founders = ["Yatin Jason Manuel", "Byron Millet", "Anish Porika"];

/* A single, signed letter in place of feature sections: the problem, what
   Canary does about it, and why it matters, read at essay measure. */
export function Vision() {
  return (
    <section id="vision" className="bg-background-alt py-28 lg:py-40">
      <div className={container}>
        <article className="mx-auto max-w-[680px]">
          <h2 className="text-[clamp(2.25rem,4vw,3.25rem)] font-medium leading-[1.05] tracking-[-0.025em] text-foreground">
            Our vision
          </h2>

          <div className="mt-10 space-y-7 text-pretty text-[clamp(1.1rem,1.4vw,1.3rem)] leading-[1.6] tracking-[-0.005em] text-foreground/85">
            <p>
              Every day, millions of cars are handed to someone else: a renter, a driver on
              shift, a valet, a new driver in the family. For the hours or days that follow,
              the person who owns that car knows nothing about how it’s being treated.
              Everything comes back second-hand: a noise that wasn’t there before, a light on
              the dash, a story about a pothole.
            </p>
            <p>
              The strange part is that the car knew the whole time. It measures its own speed,
              revs and braking constantly, then throws it all away. Canary keeps it. It
              recognizes abuse inside the car the moment it happens (burnouts, launches,
              hard braking, someone cutting its power) and tells the owner in seconds, with a
              record that can’t be edited after the fact. Not by the driver, and not by us.
            </p>
            <p>
              Rental hosts, fleets and owners shouldn’t have to choose between trusting a story
              and starting an argument. They should have the truth about what happened to
              their cars. That’s what we’re building.
            </p>
          </div>

          <footer className="mt-14 grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
            {founders.map((name) => (
              <div key={name}>
                <div className="text-[15px] font-medium text-foreground">{name}</div>
                <div className="mt-0.5 text-[14px] text-muted-foreground">Co-founder</div>
              </div>
            ))}
          </footer>
        </article>
      </div>
    </section>
  );
}

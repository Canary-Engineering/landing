import { ContactButton } from "@/components/contact-button";
import { site } from "@/lib/site";

export function PreLaunchCTA() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-32 text-center">
        <h2 className="mx-auto max-w-4xl text-balance text-5xl font-medium tracking-tight sm:text-6xl md:text-8xl">
          stop guessing what happened{" "}
          <span className="font-normal italic">out there.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-lg text-muted-foreground">
          Canary is in private preview. Tell us about your fleet, rental operation or
          vehicle and we&apos;ll get back to you.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <ContactButton />
          <a
            href={`mailto:${site.email}`}
            className="text-[14px] text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground"
          >
            {site.email}
          </a>
        </div>
      </div>
    </section>
  );
}

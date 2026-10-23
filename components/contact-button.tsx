import { ArrowUpRight } from "lucide-react";

import { mailto } from "@/lib/site";
import { cn } from "@/lib/utils";

/* Primary call to action site-wide. Canary is pre-launch with no signup flow, so
   every CTA opens an email to the team. */
export function ContactButton({
  className,
  label = "Get in touch",
  subject = "Canary early access",
}: {
  className?: string;
  label?: string;
  subject?: string;
}) {
  return (
    <a
      href={mailto(subject)}
      className={cn(
        "inline-flex h-11 items-center justify-center gap-1.5 rounded-lg bg-primary px-6 text-[15px] font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
    >
      {label}
      <ArrowUpRight aria-hidden className="h-4 w-4" />
    </a>
  );
}

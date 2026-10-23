"use client";

import { useState } from "react";
import { X } from "lucide-react";

import { mailto } from "@/lib/site";

export function TopBanner() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="w-full bg-foreground text-[12px] text-background sm:text-[13px]">
      <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-1.5 sm:gap-3 sm:px-6">
        <span className="inline-flex shrink-0 items-center rounded-full bg-primary px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-primary-foreground sm:text-[11px]">
          Preview
        </span>
        <span className="truncate opacity-90">Canary is in private preview</span>
        <a
          href={mailto("Canary early access")}
          className="hidden shrink-0 underline decoration-background/40 underline-offset-4 opacity-90 hover:opacity-100 sm:inline"
        >
          Request early access →
        </a>
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Dismiss announcement"
          className="-mr-2 ml-auto grid h-8 w-8 shrink-0 place-items-center rounded-md opacity-60 hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <X aria-hidden className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

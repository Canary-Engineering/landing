"use client";

import { useEffect, useState } from "react";

/* The hero's rotating noun. Every entry has to read correctly after "see every",
   and they're ordered as an escalation — driving abuse, then mechanical abuse,
   then theft — so someone watching the full loop reads a story rather than a list.
   Single-line words only: the slot sits on its own line in the h1, so width
   variance costs nothing, but a two-line word would break the headline's rhythm. */
const WORDS = [
  "redline",
  "burnout",
  "donut",
  "launch",
  "drift",
  "hard stop",
  "curb strike",
  "money shift",
  "joyride",
  "tow",
];

const HOLD_MS = 1900;

export function AbuseWordCycle() {
  const [{ i, prev }, setState] = useState({ i: 0, prev: -1 });

  useEffect(() => {
    const id = setInterval(
      () => setState((s) => ({ i: (s.i + 1) % WORDS.length, prev: s.i })),
      HOLD_MS,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <span className="canary-word-slot text-primary">
      {/* Screen readers and crawlers get the whole list once, as prose. The animated
          spans are hidden from them — a word swapping every 1.9s is unreadable
          assistive output, and the h1 still ships real text server-side either way. */}
      <span className="sr-only">
        {WORDS.slice(0, -1).join(", ")} or {WORDS[WORDS.length - 1]}
      </span>

      <span aria-hidden>
        {prev >= 0 && (
          <span key={`out-${prev}`} className="canary-word-out">
            {WORDS[prev]}
          </span>
        )}
        <span key={`in-${i}`} className="canary-word-in">
          {WORDS[i]}
        </span>
      </span>
    </span>
  );
}

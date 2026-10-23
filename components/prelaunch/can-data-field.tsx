"use client";

import { memo, useEffect, useState } from "react";

/* Decorative field of raw vehicle data behind the hero — real-shaped CAN frames,
   PIDs and fixes packed edge to edge, in place of warp.co's currency glyphs.

   Two stacked layers share one monospace metric so they line up exactly:
     · base  — the whole field, near-invisible
     · glow  — the same rows with only the "hot" characters kept and the rest
               blanked to spaces, drawn in Canary Pink
   The glow layer carries a soft radial mask that drifts across it in CSS
   (`.canary-can-glow`), so the lit characters change smoothly as it passes.
   Rows are whole strings rather than per-character spans — a 52x260 field would
   otherwise be ~13k DOM nodes per layer. Built in an effect, so the server
   renders nothing and hydration can't mismatch on the random values. */
const CAN_TOKENS = [
  "0C1#3120", "0D0#22FF", "1A2#00FF3C", "2B8#0047", "3F0#01", "7E8#410C1F40",
  "RPM:3184", "SPD:71", "THR:34%", "BRK:00", "GEAR:4", "TEMP:92C",
  "39.0438N", "77.4874W", "-0.82g", "+0.31g", "FD:8M", "STB:0",
  "DTC:P0301", "VIN:4471", "SEQ:0x1F", "LEN:8", "CRC:OK", "09:41:07",
  "IMU:OK", "GNSS:FIX", "TAMPER:0", "V12:13.8", "LAMBDA:0.98", "0x7DF",
];
const FIELD_ROWS = 52;
const FIELD_COLS = 260;

type FieldRow = { base: string; glow: string };

function buildRow(): FieldRow {
  let base = "";
  while (base.length < FIELD_COLS) {
    base += CAN_TOKENS[Math.floor(Math.random() * CAN_TOKENS.length)] + "·";
  }
  base = base.slice(0, FIELD_COLS);

  // Keep a sparse ~8% of characters for the glow layer; everything else becomes
  // a space so the two layers stay character-aligned.
  let glow = "";
  for (const ch of base) glow += ch !== " " && Math.random() > 0.92 ? ch : " ";

  return { base, glow };
}

const FieldLine = memo(function FieldLine({ text }: { text: string }) {
  return <div className="whitespace-pre">{text}</div>;
});

export function CanDataField() {
  const [rows, setRows] = useState<FieldRow[]>([]);

  useEffect(() => {
    setRows(Array.from({ length: FIELD_ROWS }, buildRow));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Light churn so the data reads as live; the drifting glow carries the rest
    // of the motion.
    const id = setInterval(() => {
      setRows((prev) => {
        if (!prev.length) return prev;
        const next = prev.slice();
        for (let k = 0; k < 3; k++) next[Math.floor(Math.random() * FIELD_ROWS)] = buildRow();
        return next;
      });
    }, 500);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 select-none overflow-hidden font-mono text-[11px] leading-[14px]"
    >
      {/* Static mask opens a clearing behind the headline. */}
      <div
        className="absolute inset-0"
        style={{
          maskImage: "radial-gradient(ellipse at 30% 40%, transparent 0%, transparent 30%, black 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at 30% 40%, transparent 0%, transparent 30%, black 75%)",
        }}
      >
        <div className="absolute inset-0 text-foreground/[0.09]">
          {rows.map((r, i) => (
            <FieldLine key={i} text={r.base} />
          ))}
        </div>
        <div className="canary-can-glow absolute inset-0">
          {rows.map((r, i) => (
            <FieldLine key={i} text={r.glow} />
          ))}
        </div>
      </div>
    </div>
  );
}

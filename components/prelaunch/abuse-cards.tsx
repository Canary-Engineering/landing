"use client";

import { useRef, useState } from "react";

type Abuse = {
  tag: string;
  title: string;
  body: string;
  label: string;
  when: string;
  video: string;
  poster: string;
};

/* One card per category. Real clips drop into /public/abuse/<name>.mp4 (with a
   matching /public/abuse/<name>.jpg poster) later with no code change — the video paths
   are already wired here. Card 1 points at the existing /hero.mp4 so the play/replay
   interaction is verifiable in dev; swap it to /abuse/donuts.* once the real clip
   exists.

   Posters: until the real /abuse/*.jpg frames exist, every card uses /gtr.png as a
   temporary shared poster so nothing 404s. When a real clip lands, point that card's
   `poster` at its /abuse/<name>.jpg alongside the video. `preload="none"` means the
   missing videos aren't fetched until a card is actually clicked.

   The overlay chips read as plain language on purpose — `label` is what a person
   would call it, `when` is how fast they found out. The internal event codes and
   signal thresholds (DONUTS, yaw °/s, g-force) belong on /technology, not here.

   Held-back categories (add when we have footage): overspeed, tamper / power-loss,
   money shift, cold-start revving, drift, geofence breach, excessive idling. */
const TEMP_POSTER = "/gtr.png";

const abuse: Abuse[] = [
  {
    tag: "Burnouts & donuts",
    title: "using the lot as a skidpad",
    body: "Tires spinning, car going nowhere. You find out while it's still happening — not from the tread depth three weeks later.",
    label: "Burnout",
    when: "you knew 1.4s in",
    video: "/hero.mp4",
    poster: TEMP_POSTER,
  },
  {
    tag: "Redline launches",
    title: "launched it off the line",
    body: "Full throttle from a standstill, at revs the engine was never meant to see. Every one of them logged, timed and placed.",
    label: "Redline launch",
    when: "you knew before 2nd gear",
    video: "/abuse/redline-launch.mp4",
    poster: TEMP_POSTER,
  },
  {
    tag: "Hard stops & impacts",
    title: "hit something and kept driving",
    body: "A stop hard enough to move things around inside the car. You hear about it that second, instead of when the damage turns up.",
    label: "Impact",
    when: "you knew before they parked",
    video: "/abuse/harsh-brake.mp4",
    poster: TEMP_POSTER,
  },
];

function AbuseVideoCard({ tag, title, body, label, when, video, poster }: Abuse) {
  const ref = useRef<HTMLVideoElement>(null);
  const [state, setState] = useState<"idle" | "playing" | "ended">("idle");

  // Only advance to "playing" once playback actually starts. If the source is missing
  // (placeholder cards) or the codec is unsupported, play() rejects and we leave the
  // overlay button in place instead of hiding it over a blank well.
  const start = () => {
    ref.current?.play().then(() => setState("playing")).catch(() => {});
  };
  const play = () => start();
  const replay = () => {
    if (ref.current) ref.current.currentTime = 0;
    start();
  };

  return (
    <div className="flex flex-col rounded-2xl border border-border bg-card p-6">
      <div className="relative mb-6 aspect-video overflow-hidden rounded-xl border border-border bg-muted/50">
        <video
          ref={ref}
          muted
          playsInline
          preload="none"
          poster={poster}
          src={video}
          className="h-full w-full object-cover"
          onEnded={() => setState("ended")}
        />

        <div className="pointer-events-none absolute left-3 top-3 rounded bg-card/80 px-2 py-1 font-mono text-[11px] uppercase text-primary backdrop-blur">
          {label}
        </div>
        <div className="pointer-events-none absolute bottom-3 left-3 rounded bg-card/80 px-2 py-1 font-mono text-[11px] text-muted-foreground backdrop-blur">
          {when}
        </div>

        {state !== "playing" && (
          <button
            type="button"
            onClick={state === "ended" ? replay : play}
            aria-label={state === "ended" ? `Replay ${tag} clip` : `Play ${tag} clip`}
            className="absolute inset-0 grid place-items-center transition-colors hover:bg-foreground/5"
          >
            <span className="grid h-14 w-14 place-items-center rounded-full bg-foreground text-[18px] text-background shadow-lg">
              {state === "ended" ? "↻" : "▶"}
            </span>
          </button>
        )}
      </div>

      <div className="mb-2 font-mono text-[12px] uppercase tracking-widest text-primary">
        {tag}
      </div>
      <h3 className="mb-2 text-[22px] leading-tight">{title}</h3>
      <p className="text-[14px] leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}

export function AbuseCards() {
  return (
    <section id="abuse" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 pt-24 text-center">
        <h2 className="mx-auto max-w-3xl text-5xl font-medium tracking-tight md:text-6xl">
          this is what you&apos;d{" "}
          <span className="font-normal italic text-muted-foreground">have missed.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-[16px] text-muted-foreground">
          Press play on any of them. Canary catches all three the second they happen —
          and plenty more besides.
        </p>
      </div>
      <div className="mx-auto grid max-w-7xl gap-8 px-6 pb-24 pt-16 md:grid-cols-3">
        {abuse.map((a) => (
          <AbuseVideoCard key={a.label} {...a} />
        ))}
      </div>
    </section>
  );
}

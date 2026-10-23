import { ImageResponse } from "next/og";

export const alt = "Canary — see every abuse event the instant it happens.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0c0a09",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 40, fontWeight: 600, color: "#ff0049", letterSpacing: -1 }}>canary</div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 84, lineHeight: 1, letterSpacing: -3 }}>
          <span>see every abuse event</span>
          <span style={{ color: "#a3a3a3", fontStyle: "italic" }}>the instant it happens.</span>
        </div>
        <div style={{ fontSize: 28, color: "#a3a3a3" }}>
          Real-time vehicle abuse detection for fleets, rentals & owners.
        </div>
      </div>
    ),
    size,
  );
}

import type { Metadata } from "next";

import {
  TechCTA,
  TechHero,
  TechParts,
  TechPrinciples,
  TechSpecs,
} from "@/components/technology/sections";

export const metadata: Metadata = {
  title: "Technology — Canary",
  description:
    "How Canary works: detection that runs inside the car, cross-checked sensors, recording that survives no signal, and records that can't be rewritten.",
};

export default function TechnologyPage() {
  return (
    <>
      <TechHero />
      <TechPrinciples />
      <TechParts />
      <TechSpecs />
      <TechCTA />
    </>
  );
}

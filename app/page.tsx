import { PreLaunchHero } from "@/components/prelaunch/hero";
import { HowItWorks } from "@/components/prelaunch/how-it-works";
import { AbuseCards } from "@/components/prelaunch/abuse-cards";
import { Security } from "@/components/prelaunch/security";
import { Fleets } from "@/components/prelaunch/fleets";
import { Faq } from "@/components/prelaunch/faq";
import { PreLaunchCTA } from "@/components/prelaunch/cta";

export default function Home() {
  return (
    <>
      <PreLaunchHero />
      <HowItWorks />
      <AbuseCards />
      <Security />
      <Fleets />
      <Faq />
      <PreLaunchCTA />
    </>
  );
}

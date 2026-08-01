import { PreLaunchHero } from "@/components/prelaunch/hero";
import { AbuseCards } from "@/components/prelaunch/abuse-cards";
import { Notifications } from "@/components/prelaunch/notifications";
import { Audiences } from "@/components/prelaunch/audiences";
import { Security } from "@/components/prelaunch/security";
import { Faq } from "@/components/prelaunch/faq";
import { PreLaunchCTA } from "@/components/prelaunch/cta";

export default function Home() {
  return (
    <>
      <PreLaunchHero />
      <AbuseCards />
      <Notifications />
      <Audiences />
      <Security />
      <Faq />
      <PreLaunchCTA />
    </>
  );
}

import type { Metadata } from "next";
import { MarketingShell } from "@/components/layout/MarketingShell";
import { InteriorPageHeader } from "@/components/layout/InteriorPageHeader";
import { PageMain } from "@/components/layout/PageMain";
import { MobileDetailingSection } from "@/components/sections/MobileDetailingSection";

export const metadata: Metadata = {
  title: "Mobile Detailing | PAC Phantom Auto Center",
  description:
    "Phantom-level detailing at your driveway — packages, scheduling, and vehicle details. Book online or call 905-299-9267.",
};

export default function MobileDetailingPage() {
  return (
    <MarketingShell>
      <PageMain>
        <InteriorPageHeader
          eyebrow="Mobile detailing"
          title="Delivered to your driveway"
          description="Select a package, pick a window, and we confirm the appointment. Same materials discipline as in-shop work."
        />
        <MobileDetailingSection withTopBorder={false} />
      </PageMain>
    </MarketingShell>
  );
}

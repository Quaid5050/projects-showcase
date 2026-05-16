import type { Metadata } from "next";
import { MarketingShell } from "@/components/layout/MarketingShell";
import { PageMain } from "@/components/layout/PageMain";
import { ServicesOverview } from "@/components/sections/ServicesOverview";

export const metadata: Metadata = {
  title: "Mechanical Services | PAC Phantom Auto Center",
  description:
    "General repairs, tires, brakes, oil changes, and safety certification — OEM discipline and transparent reporting.",
};

export default function MechanicalPage() {
  return (
    <MarketingShell>
      <PageMain>
        <ServicesOverview variant="mechanical" />
      </PageMain>
    </MarketingShell>
  );
}

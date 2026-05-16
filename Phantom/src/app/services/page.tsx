import type { Metadata } from "next";
import { MarketingShell } from "@/components/layout/MarketingShell";
import { PageMain } from "@/components/layout/PageMain";
import { ServicesOverview } from "@/components/sections/ServicesOverview";

export const metadata: Metadata = {
  title: "Services | PAC Phantom Auto Center",
  description:
    "Mechanical service, safety certification, wraps, detailing, PPF, ceramic coating, lighting, and electronics — all under one roof.",
};

export default function ServicesPage() {
  return (
    <MarketingShell>
      <PageMain>
        <ServicesOverview variant="all" />
      </PageMain>
    </MarketingShell>
  );
}

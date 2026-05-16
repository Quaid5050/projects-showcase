import type { Metadata } from "next";
import { MarketingShell } from "@/components/layout/MarketingShell";
import { PageMain } from "@/components/layout/PageMain";
import { ServicesOverview } from "@/components/sections/ServicesOverview";

export const metadata: Metadata = {
  title: "Customizations & Protection | PAC Phantom Auto Center",
  description:
    "Vinyl wraps, detailing, paint correction, ambient lighting, starlights, dashcams, CarPlay, PPF, and ceramic coating.",
};

export default function CustomizationsPage() {
  return (
    <MarketingShell>
      <PageMain>
        <ServicesOverview variant="customizations" />
      </PageMain>
    </MarketingShell>
  );
}

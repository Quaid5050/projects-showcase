import type { Metadata } from "next";
import { MarketingShell } from "@/components/layout/MarketingShell";
import { InteriorPageHeader } from "@/components/layout/InteriorPageHeader";
import { PageMain } from "@/components/layout/PageMain";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";

export const metadata: Metadata = {
  title: "About | PAC Phantom Auto Center",
  description:
    "Why drivers choose PAC Phantom — precision workmanship, premium materials, mechanical and customization under one roof, and mobile detailing.",
};

export default function AboutPage() {
  return (
    <MarketingShell>
      <PageMain>
        <InteriorPageHeader
          eyebrow="About"
          title="About PAC Phantom Auto Center"
          description="Mechanical integrity and exotic finish work share the same standard: Phantom-level execution, transparent communication, and zero compromise on materials."
        />
        <WhyChooseSection withTopBorder={false} />
        <TestimonialsSection />
      </PageMain>
    </MarketingShell>
  );
}

import type { Metadata } from "next";
import { MarketingShell } from "@/components/layout/MarketingShell";
import { InteriorPageHeader } from "@/components/layout/InteriorPageHeader";
import { PageMain } from "@/components/layout/PageMain";
import { GallerySection } from "@/components/sections/GallerySection";

export const metadata: Metadata = {
  title: "Gallery | PAC Phantom Auto Center",
  description:
    "Wraps, detailing, paint correction, lighting, PPF, and ceramic coating — before/after comparisons and select project frames.",
};

export default function GalleryPage() {
  return (
    <MarketingShell>
      <PageMain>
        <InteriorPageHeader
          eyebrow="Gallery"
          title="Before, after, proof"
          description="Filter by category, compare correction results on the slider, and browse project frames. Replace placeholders in /public/placeholders with your own photography when ready."
        />
        <GallerySection showIntro={false} />
      </PageMain>
    </MarketingShell>
  );
}

import type { Metadata } from "next";
import { MarketingShell } from "@/components/layout/MarketingShell";
import { InteriorPageHeader } from "@/components/layout/InteriorPageHeader";
import { PageMain } from "@/components/layout/PageMain";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact | PAC Phantom Auto Center",
  description:
    "345 Wyecroft Road, Unit 5 and 6 — phone 905-299-9267, email info@phantomautocenter.com. Book mechanical, customization, or mobile detailing.",
};

export default function ContactPage() {
  return (
    <MarketingShell>
      <PageMain>
        <InteriorPageHeader
          eyebrow="Contact"
          title="PAC Phantom Auto Center"
          description="Call, email, or send a project note. Business hours are listed below; Sunday visits are by appointment."
        />
        <ContactSection showTitle={false} />
      </PageMain>
    </MarketingShell>
  );
}

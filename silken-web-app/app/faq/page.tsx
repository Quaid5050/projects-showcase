import type { Metadata } from "next";
import FAQHero from "@/components/FAQHero";
import FAQAccordion from "@/components/FAQAccordion";
import faqsData from "@/data/faqs.json";

export const metadata: Metadata = {
  title: "FAQ | Silken Trading",
  description:
    "Frequently asked questions about installation time, custom fit, warranty, compatibility, and cleaning.",
  openGraph: {
    title: "FAQ | Silken Trading",
    description: "Common questions about our products and installation.",
  },
};

export default function FAQPage() {
  const faqs = faqsData as { id: string; question: string; answer: string }[];

  return (
    <>
      <FAQHero />
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FAQAccordion items={faqs} />
        </div>
      </section>
    </>
  );
}

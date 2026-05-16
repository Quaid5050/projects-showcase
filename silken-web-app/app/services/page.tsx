import type { Metadata } from "next";
import ServicesHero from "@/components/ServicesHero";
import ServiceCard from "@/components/ServiceCard";
import servicesData from "@/data/services.json";

export const metadata: Metadata = {
  title: "Services | Silken Trading",
  description:
    "Professional installation for seat covers, window visors, and car mats. Premium fit and finish for your vehicle.",
  openGraph: { title: "Services | Silken Trading", description: "Seat cover, window visor, and car mat installation services." },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />

      <section className="py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(servicesData as { slug: string; title: string; shortDescription: string; image: string }[]).map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import servicesData from "@/data/services.json";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return (servicesData as { slug: string }[]).map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = (servicesData as { slug: string; title: string; shortDescription: string }[]).find(
    (s) => s.slug === slug
  );
  if (!service) return { title: "Service | Silken Trading" };
  return {
    title: `${service.title} | Silken Trading`,
    description: service.shortDescription,
    openGraph: { title: `${service.title} | Silken Trading`, description: service.shortDescription },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = (servicesData as {
    slug: string;
    title: string;
    shortDescription: string;
    overview: string;
    includes?: string[];
    benefits?: string[];
    materials?: string[];
    process?: string[];
    pricing: string;
    image: string;
  }[]).find((s) => s.slug === slug);

  if (!service) notFound();

  return (
    <>
      <section className="relative border-b border-white/10 py-14 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-gold-dark/20 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl tracking-wide text-white sm:text-4xl lg:text-5xl">
            {service.title}
          </h1>
          <p className="mt-3 max-w-2xl text-base text-yellow-pastel/90 sm:text-lg">{service.shortDescription}</p>
        </div>
      </section>

      <section className="border-b border-white/10 py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="relative aspect-video overflow-hidden rounded-lg border border-white/10 lg:aspect-auto lg:min-h-[320px]">
              <Image
                src={service.image || "/images/placeholder.svg"}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-display text-2xl text-gold-primary">Overview</h2>
              <p className="mt-4 text-yellow-pastel/90 leading-relaxed">{service.overview}</p>
            </div>
          </div>
        </div>
      </section>

      {service.includes && service.includes.length > 0 && (
        <section className="border-b border-white/10 py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl text-gold-primary">What the Service Includes</h2>
            <ul className="mt-4 space-y-2">
              {service.includes.map((item) => (
                <li key={item} className="flex items-center gap-2 text-yellow-pastel/90">
                  <span className="text-gold-primary">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {service.benefits && service.benefits.length > 0 && (
        <section className="border-b border-white/10 py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl text-gold-primary">Benefits</h2>
            <ul className="mt-4 space-y-2">
              {service.benefits.map((item) => (
                <li key={item} className="flex items-center gap-2 text-yellow-pastel/90">
                  <span className="text-gold-primary">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {service.materials && service.materials.length > 0 && (
        <section className="border-b border-white/10 py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl text-gold-primary">Materials Used</h2>
            <ul className="mt-4 space-y-2">
              {service.materials.map((item) => (
                <li key={item} className="flex items-center gap-2 text-yellow-pastel/90">
                  <span className="text-gold-primary">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {service.process && service.process.length > 0 && (
        <section className="border-b border-white/10 py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl text-gold-primary">Installation Process</h2>
            <ol className="mt-4 space-y-3">
              {service.process.map((step, i) => (
                <li key={step} className="flex gap-3 text-yellow-pastel/90">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-primary/30 text-sm font-medium text-gold-primary">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {service.pricing && (
        <section className="border-b border-white/10 py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl text-gold-primary">Pricing / Estimate</h2>
            <p className="mt-4 text-yellow-pastel/90">{service.pricing}</p>
          </div>
        </section>
      )}

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl text-white">Ready to Book?</h2>
          <p className="mt-2 text-yellow-pastel/80">Schedule your installation with us today.</p>
          <Link
            href="/contact"
            className="mt-6 inline-block w-full max-w-xs rounded-md bg-gradient-to-r from-gold-primary to-yellow-glow px-8 py-4 font-semibold text-luxury-black shadow-glow hover:shadow-glow-strong text-center sm:w-auto"
          >
            Book Appointment
          </Link>
        </div>
      </section>
    </>
  );
}

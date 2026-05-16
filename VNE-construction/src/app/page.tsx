import type { Metadata } from "next";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Hammer,
  MapPin,
  Star,
  Upload,
} from "lucide-react";
import { HomeHero } from "@/components/home/HomeHero";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/FadeIn";
import { CTALink } from "@/components/CTAButton";
import { ServiceCard } from "@/components/ServiceCard";
import { PricingCard } from "@/components/PricingCard";
import { OfferCard } from "@/components/OfferCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { SERVICE_GROUPS } from "@/lib/services-data";
import { HOME_FAQ } from "@/lib/faq";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Toronto Handyman | Home Repair & Maintenance",
  description:
    "Aerofix Handyman Services — handyman services near you in Toronto. Home repair services, painting, TV mounting, drywall repair, furniture assembly, and property maintenance services with transparent pricing.",
  openGraph: {
    title: "Aerofix Handyman Services | Toronto",
    description:
      "Fast, affordable, professional handyman in Toronto. Book online or get a free estimate.",
  },
};

const why = [
  {
    title: "Customer-first service",
    body: "Clear communication, respectful crews, and tidy job sites—built for homeowners, tenants, landlords, and businesses.",
  },
  {
    title: "Skilled technicians",
    body: "Professional handyman services for installs, repairs, and maintenance with quality checks on every visit.",
  },
  {
    title: "Flexible online scheduling",
    body: "Book a visit in minutes. Need an affordable handyman fast? We prioritize urgent repairs when possible.",
  },
];

const testimonials = [
  {
    quote:
      "They handled drywall repair and painting in our rental within days. Pricing was explained upfront—no surprises.",
    name: "Jordan M.",
    role: "Landlord, Toronto",
  },
  {
    quote:
      "TV mounting and IKEA furniture assembly were flawless. Polite, on time, and the walls look perfect.",
    name: "Priya S.",
    role: "Homeowner, Old Toronto",
  },
  {
    quote:
      "We use Aerofix for monthly property upkeep at our storefront. Reliable and easy to coordinate.",
    name: "Alex R.",
    role: "Small business owner",
  },
];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="border-y border-border bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Book online"
              title="Schedule your visit in minutes"
              description="Tell us what you need—from furniture assembly to painting services—and pick a time that works. Ideal when you are comparing local handyman options and want clarity before we arrive."
              align="center"
              className="mx-auto"
            />
          </FadeIn>
          <FadeIn className="mt-10 flex justify-center">
            <div className="w-full max-w-2xl rounded-2xl border border-border bg-zinc-50 p-6 shadow-[var(--shadow-card)] sm:p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-charcoal">
                    Ready to book?
                  </p>
                  <p className="text-sm text-muted">
                    Average confirmation same business day.
                  </p>
                </div>
                <CTALink href="/booking" className="justify-center sm:shrink-0">
                  Start booking
                  <ArrowRight className="h-4 w-4" />
                </CTALink>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-y border-border bg-gradient-to-b from-zinc-100 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Simple process"
              title="How an Aerofix visit works"
              description="From first click to final walkthrough, we keep things predictable—so you always know what happens next."
              align="center"
              className="mx-auto"
            />
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: ClipboardList,
                title: "Tell us the outcome",
                body: "Book online or upload photos—include measurements and access notes when you can.",
              },
              {
                icon: CalendarDays,
                title: "Pick a time that fits",
                body: "Choose a preferred window; we confirm details and send your arrival estimate.",
              },
              {
                icon: Hammer,
                title: "We work tidy & fast",
                body: "Technicians arrive prepared, protect floors, and communicate before anything permanent.",
              },
              {
                icon: Star,
                title: "Walkthrough & recap",
                body: "We review results together and share care tips for finishes, hardware, or paint.",
              },
            ].map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-border bg-white p-6 shadow-[var(--shadow-card)]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-charcoal text-white">
                    <s.icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mt-4 font-bold text-charcoal">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24" id="services">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Services"
              title="Professional handyman services for every space"
              description="Whether you need drywall repair, TV mounting, or ongoing property maintenance services, Aerofix delivers dependable results across Toronto."
            />
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {SERVICE_GROUPS.slice(0, 4).map((g, i) => (
              <FadeIn key={g.id} delay={i * 0.05}>
                <ServiceCard
                  id={g.id}
                  title={g.title}
                  description={g.description}
                  iconKey={g.iconKey}
                  items={g.items.slice(0, 4)}
                />
              </FadeIn>
            ))}
          </div>
          <FadeIn className="mt-10 flex justify-center">
            <CTALink href="/services" variant="outline">
              View all services
              <ArrowRight className="h-4 w-4" />
            </CTALink>
          </FadeIn>
        </div>
      </section>

      <section className="border-y border-border bg-zinc-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn>
              <SectionHeading
                eyebrow="Why Aerofix"
                title="Why customers choose us for home repair services"
                description="We combine craftsmanship with clear pricing—so you always know what to expect from your local handyman."
              />
              <ul className="mt-8 space-y-5">
                {why.map((w) => (
                  <li key={w.title} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <p className="font-semibold text-charcoal">{w.title}</p>
                      <p className="mt-1 text-sm text-muted">{w.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="grid grid-cols-2 gap-4 rounded-3xl border border-border bg-white p-6 shadow-[var(--shadow-soft)] sm:p-8">
                <div className="rounded-2xl bg-charcoal p-5 text-white">
                  <p className="text-xs font-medium uppercase tracking-widest text-zinc-400">
                    Minimum service
                  </p>
                  <p className="mt-2 text-3xl font-bold">
                    $<AnimatedCounter value={175} />
                  </p>
                  <p className="mt-1 text-xs text-zinc-400">First 2 hours included</p>
                </div>
                <div className="rounded-2xl border border-border p-5">
                  <p className="text-xs font-medium uppercase tracking-widest text-muted">
                    Add-on time
                  </p>
                  <p className="mt-2 text-3xl font-bold text-charcoal">
                    $<AnimatedCounter value={100} />
                    <span className="text-lg font-semibold">/hr</span>
                  </p>
                  <p className="mt-1 text-xs text-muted">Simple hourly after minimum</p>
                </div>
                <div className="col-span-2 rounded-2xl border border-border bg-zinc-50 p-5">
                  <div className="flex items-center gap-2 text-accent">
                    <Star className="h-5 w-5 fill-accent text-accent" />
                    <span className="text-sm font-semibold text-charcoal">
                      Rated for professionalism & punctuality
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    Transparent pricing, fast scheduling, and skilled technicians on every job.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="overflow-hidden rounded-3xl border border-accent/25 bg-gradient-to-br from-charcoal via-charcoal to-zinc-900 p-8 text-white shadow-[var(--shadow-soft)] sm:p-12 lg:flex lg:items-center lg:justify-between lg:gap-12">
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Photo quotes
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Upload your project for a faster, accurate estimate
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                  Share photos and job details so we can scope materials, time,
                  and the right technician—perfect for drywall repair, painting
                  touch-ups, or multi-room work.
                </p>
              </div>
              <div className="mt-8 flex shrink-0 flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-col">
                <CTALink href="/upload-project" size="lg" className="justify-center">
                  <Upload className="h-5 w-5" />
                  Upload your project
                </CTALink>
                <CTALink
                  href="/contact"
                  variant="outline"
                  size="lg"
                  className="justify-center border-white/25 bg-white/5 text-white hover:border-white/40 hover:bg-white/10"
                >
                  Talk to our team
                </CTALink>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-border bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Pricing"
              title="Transparent pricing preview"
              description="No hidden fees. Simple, transparent pricing for customers looking for an affordable and reliable handyman near them."
              align="center"
              className="mx-auto"
            />
          </FadeIn>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <FadeIn className="lg:col-span-1">
              <PricingCard
                title="Minimum service"
                price="$175"
                subtitle="Includes first 2 hours of labor"
                highlight
                features={[
                  "Ideal for smaller repairs & installs",
                  "Clear scope review before we start",
                  "Professional handyman services",
                ]}
                footer="Materials billed separately if required."
              />
            </FadeIn>
            <FadeIn delay={0.05} className="lg:col-span-1">
              <PricingCard
                title="Additional time"
                price="$100/hr"
                subtitle="After the included 2 hours"
                features={[
                  "Billed in practical increments",
                  "Great for larger home repair services",
                  "Custom quotes for complex projects",
                ]}
              />
            </FadeIn>
            <FadeIn delay={0.1} className="lg:col-span-1">
              <PricingCard
                title="Custom projects"
                price="Free estimate"
                subtitle="Larger renovations & bundled work"
                features={[
                  "On-site or virtual assessments",
                  "Bundle discounts available",
                  "Landlord & business programs",
                ]}
              />
            </FadeIn>
          </div>
          <FadeIn className="mt-10 flex justify-center">
            <CTALink href="/pricing" variant="outline">
              Full pricing details
            </CTALink>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Offers"
              title="Special offers for new and returning clients"
              description="Save when you bundle handyman services or sign up for recurring property maintenance services."
            />
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <FadeIn>
              <OfferCard
                badge="Welcome"
                title="10% off for first-time customers"
                description="Try our service with confidence—discount applied to qualifying labor blocks on your first booking."
              />
            </FadeIn>
            <FadeIn delay={0.06}>
              <OfferCard
                badge="Bundles"
                title="Multi-service bundle discounts"
                description="Book TV mounting with furniture assembly, or pair painting services with drywall repair and save."
              />
            </FadeIn>
            <FadeIn delay={0.08}>
              <OfferCard
                badge="Landlords"
                title="Monthly maintenance plans"
                description="Predictable monthly property upkeep for landlords and businesses across Toronto."
              />
            </FadeIn>
            <FadeIn delay={0.1}>
              <OfferCard
                badge="Half-day"
                title="Discounted half-day packages"
                description="Bigger punch-list items completed in a focused session—ask about half-day service packages."
              />
            </FadeIn>
          </div>
          <FadeIn className="mt-10 flex justify-center">
            <CTALink href="/offers">View all offers</CTALink>
          </FadeIn>
        </div>
      </section>

      <section className="border-y border-border bg-zinc-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Service area"
              title="Toronto and surrounding areas"
              description={`Based at ${SITE.address.street}, we serve ${SITE.serviceArea.toLowerCase()} with responsive scheduling for urgent repairs.`}
            />
          </FadeIn>
          <FadeIn className="mt-8 flex flex-wrap items-center gap-3 text-sm text-muted">
            <MapPin className="h-4 w-4 text-accent" />
            <span>{SITE.address.full}</span>
          </FadeIn>
          <FadeIn className="mt-6">
            <p className="text-sm font-semibold text-charcoal">Neighbourhoods we often serve</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "Old Toronto",
                "The Junction",
                "High Park",
                "Roncesvalles",
                "Little Portugal",
                "Annex",
                "Yorkville",
                "Liberty Village",
                "Leslieville",
                "Etobicoke",
                "North York",
                "Scarborough",
                "Mississauga",
                "Markham",
              ].map((n) => (
                <span
                  key={n}
                  className="rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-muted shadow-sm"
                >
                  {n}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted">
              Don’t see your area? Call us—many visits are still possible with a
              small travel adjustment.
            </p>
          </FadeIn>
          <FadeIn className="mt-8 rounded-2xl border border-dashed border-border bg-white p-10 text-center text-sm text-muted">
            Map embed placeholder — drop in Google Maps iframe when your API key
            is ready.
          </FadeIn>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Reviews"
              title="What Toronto clients say"
              description="Placeholder testimonials for layout review—swap in real reviews anytime."
              align="center"
              className="mx-auto"
            />
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.06}>
                <TestimonialCard {...t} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="FAQ"
              title="Common questions"
              description="Straight answers about booking, pricing, and the handyman services we provide."
              align="center"
              className="mx-auto"
            />
          </FadeIn>
          <FadeIn className="mt-10">
            <FAQAccordion items={HOME_FAQ} />
          </FadeIn>
        </div>
      </section>

      <section className="pb-20 pt-4 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="rounded-3xl bg-accent px-8 py-12 text-center text-white shadow-[var(--shadow-soft)] sm:px-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready for a dependable handyman in Toronto?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/90">
                Book online, call {SITE.phoneDisplay}, or upload photos for a free
                estimate. Fast scheduling. Skilled technicians. Transparent
                pricing.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <CTALink
                  href="/booking"
                  variant="secondary"
                  size="lg"
                  className="min-w-[200px] justify-center bg-charcoal text-white hover:bg-black"
                >
                  Book Now
                </CTALink>
                <CTALink
                  href="/upload-project"
                  variant="outline"
                  size="lg"
                  className="min-w-[200px] justify-center border-white/40 bg-white/10 text-white hover:bg-white/15"
                >
                  Get a Free Estimate
                </CTALink>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

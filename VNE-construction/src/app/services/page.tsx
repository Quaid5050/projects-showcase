import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ClipboardCheck,
  Hammer,
  Layers,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { FadeIn } from "@/components/FadeIn";
import { ServiceCard } from "@/components/ServiceCard";
import { CTALink } from "@/components/CTAButton";
import { FeatureGrid } from "@/components/page/FeatureGrid";
import { PageCtaBanner } from "@/components/page/PageCtaBanner";
import { SERVICE_GROUPS } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Home repair services, installation, painting services, and property maintenance in Toronto — drywall repair, TV mounting, furniture assembly, and more.",
  openGraph: {
    title: "Handyman Services | Aerofix",
    description:
      "Full menu of professional handyman services for Toronto homes and businesses.",
  },
};

const process = [
  {
    icon: MessageSquare,
    title: "Tell us the outcome",
    description:
      "Share photos, measurements, and access details—especially for drywall repair, painting prep, or installs above standard heights.",
  },
  {
    icon: ClipboardCheck,
    title: "Confirm scope & timing",
    description:
      "We align on materials, duration, and arrival windows so your day stays predictable.",
  },
  {
    icon: Hammer,
    title: "Work completed on site",
    description:
      "Skilled technicians execute the plan with tidy workspaces and respectful communication throughout.",
  },
  {
    icon: Layers,
    title: "Optional follow-ups",
    description:
      "For maintenance clients, we can schedule recurring visits or seasonal checklists.",
  },
];

const combos = [
  {
    title: "Move-in refresh",
    body: "Patch + paint touch-ups, hardware swaps, and fixture installs for a polished first impression.",
  },
  {
    title: "Living room tech",
    body: "TV mounting, cable concealment basics, and media shelf installs—done in one coordinated visit.",
  },
  {
    title: "Rental turnover",
    body: "Quick repairs, lock re-key support, and minor maintenance to reduce vacancy days.",
  },
];

export default function ServicesPage() {
  return (
    <PageShell
      wide
      eyebrow="Full catalog"
      title="Handyman services built for real Toronto homes"
      description="From same-day fixes to planned maintenance, Aerofix covers the jobs you need done right—the first time. Explore categories below, then book online or request a photo-based quote."
    >
      <div className="space-y-16 sm:space-y-20">
        <FadeIn>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-border bg-gradient-to-br from-zinc-50 to-white p-6 shadow-[var(--shadow-card)] sm:p-8 lg:col-span-2">
              <h2 className="text-lg font-bold text-charcoal sm:text-xl">
                Why clients choose Aerofix for{" "}
                <span className="text-accent">local handyman</span> work
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                Searching for{" "}
                <strong className="text-charcoal">handyman services near me</strong>{" "}
                shouldn’t mean gambling on quality. We specialize in{" "}
                <strong className="text-charcoal">affordable handyman</strong>{" "}
                pricing with upfront structure—so you can plan around{" "}
                <strong className="text-charcoal">furniture assembly</strong>,{" "}
                <strong className="text-charcoal">TV mounting</strong>,{" "}
                <strong className="text-charcoal">drywall repair</strong>, and{" "}
                <strong className="text-charcoal">painting services</strong>{" "}
                without hidden fees.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                Need recurring help? Ask about{" "}
                <strong className="text-charcoal">
                  property maintenance services
                </strong>{" "}
                for landlords and storefronts—ideal when you want one trusted team
                instead of a rotating cast of unknown contractors.
              </p>
            </div>
            <div className="flex flex-col justify-between rounded-2xl border border-accent/25 bg-accent/5 p-6 sm:p-8">
              <div>
                <Sparkles className="h-6 w-6 text-accent" />
                <p className="mt-3 text-sm font-semibold text-charcoal">
                  Not sure which category fits?
                </p>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  Upload photos—we’ll recommend the right service mix and time
                  block.
                </p>
              </div>
              <CTALink href="/upload-project" className="mt-6 w-full justify-center !rounded-full">
                Get guidance
                <ArrowRight className="h-4 w-4" />
              </CTALink>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <h2 className="text-2xl font-bold text-charcoal">How a visit flows</h2>
          <p className="mt-3 max-w-3xl text-muted leading-relaxed">
            A consistent process keeps quality high—whether it’s a 90-minute
            install or a half-day punch list across multiple rooms.
          </p>
          <div className="mt-8">
            <FeatureGrid items={process} columns={2} />
          </div>
        </FadeIn>

        <FadeIn>
          <h2 className="text-2xl font-bold text-charcoal">Service categories</h2>
          <p className="mt-3 max-w-3xl text-muted leading-relaxed">
            Tap a category to jump on this page, or scroll to read the full list
            of tasks we commonly handle.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {SERVICE_GROUPS.map((g) => (
              <Link
                key={g.id}
                href={`#${g.id}`}
                className="rounded-full border border-border bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-charcoal shadow-sm transition-colors hover:border-accent/40 hover:text-accent"
              >
                {g.title.replace(" Services", "")}
              </Link>
            ))}
          </div>
        </FadeIn>

        <div className="grid gap-8">
          {SERVICE_GROUPS.map((g, i) => (
            <FadeIn key={g.id} delay={i * 0.05}>
              <ServiceCard
                id={g.id}
                title={g.title}
                description={g.description}
                iconKey={g.iconKey}
                items={g.items}
              />
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <h2 className="text-2xl font-bold text-charcoal">Popular combinations</h2>
          <p className="mt-3 max-w-3xl text-muted leading-relaxed">
            Bundle work on the same visit to save time and often reduce overall
            cost—ask us what pairs best for your space.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {combos.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-border bg-white p-6 shadow-[var(--shadow-card)]"
              >
                <h3 className="font-bold text-charcoal">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.body}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn className="flex flex-wrap gap-3">
          <CTALink href="/booking" className="!rounded-full px-8">
            Book a service
          </CTALink>
          <CTALink href="/pricing" variant="outline" className="!rounded-full">
            View pricing
          </CTALink>
          <CTALink href="/offers" variant="outline" className="!rounded-full">
            Current offers
          </CTALink>
        </FadeIn>

        <FadeIn>
          <PageCtaBanner
            title="Tell us what’s on your list"
            description="One booking. Clear scope. Dependable results—book online or send photos for a tailored quote."
            primaryHref="/booking"
            primaryLabel="Book now"
            secondaryHref="/upload-project"
            secondaryLabel="Upload project photos"
          />
        </FadeIn>
      </div>
    </PageShell>
  );
}

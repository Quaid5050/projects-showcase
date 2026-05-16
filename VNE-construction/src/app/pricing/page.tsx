import type { Metadata } from "next";
import { Check, HelpCircle, Percent, Shield } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { FadeIn } from "@/components/FadeIn";
import { PricingCard } from "@/components/PricingCard";
import { CTALink } from "@/components/CTAButton";
import { PageCtaBanner } from "@/components/page/PageCtaBanner";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent handyman pricing in Toronto — $175 minimum (2 hours), $100/hr additional time, materials separate. Free estimates for larger projects.",
  openGraph: {
    title: "Transparent Pricing | Aerofix",
    description:
      "No hidden fees. Simple pricing for affordable handyman services near you.",
  },
};

const included = [
  "Travel within our standard Toronto service area",
  "Consultation & scope confirmation at arrival",
  "Standard tools & equipment for typical handyman tasks",
  "Site protection basics (drops cloths where needed)",
  "Walkthrough before we depart",
];

const compareRows = [
  { label: "First 2 hours of labor", min: "Included", add: "—", custom: "Quoted" },
  { label: "Additional labor", min: "$100/hr", add: "$100/hr", custom: "Custom" },
  { label: "Materials", min: "As needed", add: "As needed", custom: "Planned" },
  { label: "Best for", min: "Small jobs", add: "Longer lists", custom: "Projects" },
];

export default function PricingPage() {
  return (
    <PageShell
      wide
      eyebrow="Simple rates"
      title="Transparent pricing you can trust"
      description="No hidden fees. Simple, transparent pricing for customers looking for an affordable and reliable handyman near them—whether you need a quick fix or a scoped multi-day plan."
    >
      <div className="space-y-16 sm:space-y-20">
        <FadeIn>
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="rounded-3xl border border-border bg-gradient-to-br from-charcoal to-zinc-900 p-8 text-white shadow-[var(--shadow-soft)] lg:col-span-5">
              <Shield className="h-8 w-8 text-accent" />
              <h2 className="mt-4 text-xl font-bold sm:text-2xl">
                Predictable billing, fewer surprises
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                We structure visits so you can compare us fairly against other{" "}
                <strong className="text-white">local handyman</strong> options—
                especially when you need{" "}
                <strong className="text-white">home repair services</strong>{" "}
                on a tight timeline or budget.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-zinc-300">
                <li className="flex gap-2">
                  <Percent className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  Ask about bundles when booking multiple services together.
                </li>
                <li className="flex gap-2">
                  <HelpCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  Not sure how long it takes? Upload photos for a faster estimate.
                </li>
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-white p-8 shadow-[var(--shadow-card)] lg:col-span-7">
              <h2 className="text-xl font-bold text-charcoal sm:text-2xl">
                What’s typically included in a visit
              </h2>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Exact scope always depends on your job notes and site conditions—
                this list explains what “minimum service” generally covers for
                standard handyman work in Toronto.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {included.map((line) => (
                  <li key={line} className="flex gap-2 text-sm text-charcoal">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="grid gap-6 lg:grid-cols-3">
            <PricingCard
              title="Minimum service"
              price="$175"
              subtitle="Includes first 2 hours"
              highlight
              features={[
                "Covers most small repairs & installs",
                "Clear arrival window & communication",
                "Skilled technician on every visit",
              ]}
              footer="Materials charged separately if required."
            />
            <PricingCard
              title="Additional time"
              price="$100/hr"
              subtitle="After the first 2 hours"
              features={[
                "Ideal for larger punch lists",
                "Great for painting prep + repair combos",
                "Detailed recap when the job wraps",
              ]}
            />
            <PricingCard
              title="Larger or custom projects"
              price="Custom quote"
              subtitle="Free estimates available"
              features={[
                "Multi-room painting services",
                "Office build-outs & maintenance plans",
                "Bundle discounts when you combine services",
              ]}
              footer="We scope materials, labor, and timeline before work begins."
            />
          </div>
        </FadeIn>

        <FadeIn>
          <h2 className="text-2xl font-bold text-charcoal">Compare visit types</h2>
          <p className="mt-3 max-w-3xl text-muted leading-relaxed">
            A quick side-by-side to help you choose the right starting point—
            call {SITE.phoneDisplay} if you want a human to sanity-check your plan.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
            <div className="grid grid-cols-4 bg-zinc-50 text-xs font-bold uppercase tracking-wide text-muted sm:text-sm">
              <div className="p-4">Detail</div>
              <div className="p-4 text-center text-charcoal">Minimum</div>
              <div className="p-4 text-center text-charcoal">Add time</div>
              <div className="p-4 text-center text-charcoal">Custom</div>
            </div>
            {compareRows.map((row, i) => (
              <div
                key={row.label}
                className={cn(
                  "grid grid-cols-4 border-t border-border text-sm",
                  i % 2 === 0 && "bg-zinc-50/50"
                )}
              >
                <div className="p-4 font-medium text-charcoal">{row.label}</div>
                <div className="p-4 text-center text-muted">{row.min}</div>
                <div className="p-4 text-center text-muted">{row.add}</div>
                <div className="p-4 text-center text-muted">{row.custom}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <div className="rounded-2xl border border-dashed border-accent/40 bg-accent/5 p-6 sm:p-8">
            <h3 className="font-bold text-charcoal">Still comparing quotes?</h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
              Send us competitor quotes (where appropriate) and photos—we’ll help
              you understand what’s included so you can compare apples to apples
              on labor, materials, and warranty expectations.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <CTALink href="/upload-project" className="!rounded-full">
                Upload for estimate
              </CTALink>
              <CTALink href="/contact" variant="outline" className="!rounded-full">
                Ask a billing question
              </CTALink>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <PageCtaBanner
            title="Lock in your visit"
            description="Transparent pricing starts with a clear scope—book online or message us with photos."
            primaryHref="/booking"
            primaryLabel="Book now"
            secondaryHref="/upload-project"
            secondaryLabel="Free estimate"
          />
        </FadeIn>
      </div>
    </PageShell>
  );
}

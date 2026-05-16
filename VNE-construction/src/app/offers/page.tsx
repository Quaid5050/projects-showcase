import type { Metadata } from "next";
import { BadgePercent, CalendarRange, Gift, Home, Sparkles } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { FadeIn } from "@/components/FadeIn";
import { OfferCard } from "@/components/OfferCard";
import { CTALink } from "@/components/CTAButton";
import { PageCtaBanner } from "@/components/page/PageCtaBanner";

export const metadata: Metadata = {
  title: "Special Offers",
  description:
    "Save with Aerofix — first-time customer discounts, half-day packages, landlord maintenance plans, and bundle pricing on handyman services in Toronto.",
  openGraph: {
    title: "Offers | Aerofix Handyman",
    description: "Seasonal savings and bundles for Toronto handyman services.",
  },
};

const offers = [
  {
    badge: "New clients",
    title: "10% off for first-time customers",
    description:
      "Welcome to Aerofix — enjoy 10% off qualifying labor on your first booking when you schedule online or through our upload tool.",
  },
  {
    badge: "Half-day",
    title: "Discounted half-day service packages",
    description:
      "Tackle longer punch lists with a focused half-day block—ideal for multiple small repairs, installs, or prep work before painting.",
  },
  {
    badge: "Recurring",
    title: "Monthly maintenance plans",
    description:
      "Landlords and businesses can lock in monthly property upkeep with prioritized scheduling and bundled handyman services.",
  },
  {
    badge: "Bundles",
    title: "Bundle discounts on multiple services",
    description:
      "Combine TV mounting with furniture assembly, or pair drywall repair with interior painting for better value on the same visit.",
  },
];

const redeem = [
  { step: "01", title: "Pick your services", body: "Choose what you need online—or upload photos if you’re unsure." },
  { step: "02", title: "Mention the offer", body: "Add a note in your booking or tell our coordinator when you call." },
  { step: "03", title: "We confirm eligibility", body: "Some offers apply to labor blocks only; we’ll confirm before work starts." },
  { step: "04", title: "Enjoy the savings", body: "Discounts are applied to the final invoice summary you approve." },
];

export default function OffersPage() {
  return (
    <PageShell
      wide
      eyebrow="Save more"
      title="Special offers & member-style perks"
      description="Maximize value when you bundle work or join a maintenance plan—built for busy homeowners, landlords with multiple doors, and commercial teams that need predictable upkeep."
    >
      <div className="space-y-16 sm:space-y-20">
        <FadeIn>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-border bg-gradient-to-br from-white to-orange-50/40 p-7 shadow-[var(--shadow-card)] lg:col-span-2">
              <div className="flex items-center gap-2 text-accent">
                <Sparkles className="h-6 w-6" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Why we run offers
                </span>
              </div>
              <h2 className="mt-3 text-xl font-bold text-charcoal sm:text-2xl">
                Try Aerofix once—stay for the consistency
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                Promotions help new clients experience our process: on-time arrivals,
                tidy work habits, and clear communication. Returning clients benefit
                from bundle pricing and recurring programs designed for{" "}
                <strong className="text-charcoal">property maintenance services</strong>{" "}
                at scale.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                Offers may change seasonally. If you’re planning a larger project,
                ask what’s currently available for multi-day or multi-unit work.
              </p>
            </div>
            <div className="space-y-4 rounded-2xl border border-border bg-charcoal p-6 text-white sm:p-7">
              <div className="flex items-center gap-2 text-accent">
                <BadgePercent className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Eligibility tips
                </span>
              </div>
              <ul className="space-y-3 text-sm text-zinc-300">
                <li className="flex gap-2">
                  <Gift className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  First-time discounts typically apply to standard labor blocks—not
                  materials or specialty rentals.
                </li>
                <li className="flex gap-2">
                  <Home className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  Landlord plans may require a minimum monthly commitment—ask for a
                  sample schedule.
                </li>
                <li className="flex gap-2">
                  <CalendarRange className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  Half-day packages must be booked as a contiguous block when
                  capacity allows.
                </li>
              </ul>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <h2 className="text-2xl font-bold text-charcoal">Active promotions</h2>
          <p className="mt-3 max-w-3xl text-muted leading-relaxed">
            Tap an offer card for the headline—details are confirmed at booking so
            you always know what applies before we start.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {offers.map((o) => (
              <OfferCard key={o.title} {...o} />
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <h2 className="text-2xl font-bold text-charcoal">How to redeem</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {redeem.map((r) => (
              <div
                key={r.step}
                className="relative overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-sm"
              >
                <span className="text-3xl font-black text-accent/25">{r.step}</span>
                <h3 className="mt-2 font-bold text-charcoal">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{r.body}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn className="flex flex-wrap gap-3">
          <CTALink href="/booking" className="!rounded-full px-8">
            Book with an offer
          </CTALink>
          <CTALink href="/contact" variant="outline" className="!rounded-full">
            Ask about landlord plans
          </CTALink>
        </FadeIn>

        <FadeIn>
          <PageCtaBanner
            title="Stack savings with smart scheduling"
            description="Combine tasks in one visit, or set up recurring maintenance—our team will recommend the best path."
            primaryHref="/booking"
            primaryLabel="Book now"
            secondaryHref="/services"
            secondaryLabel="Browse services"
          />
        </FadeIn>
      </div>
    </PageShell>
  );
}

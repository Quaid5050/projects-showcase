import type { Metadata } from "next";
import {
  Award,
  Clock,
  HeartHandshake,
  Shield,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { FadeIn } from "@/components/FadeIn";
import { CTALink } from "@/components/CTAButton";
import { FeatureGrid } from "@/components/page/FeatureGrid";
import { PageCtaBanner } from "@/components/page/PageCtaBanner";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${SITE.name} — trusted handyman in Toronto for homeowners, tenants, landlords, and businesses. Affordable maintenance and repair solutions with flexible online scheduling.`,
  openGraph: {
    title: `About | ${SITE.name}`,
    description:
      "Mission-driven handyman services focused on quality, reliability, and customer satisfaction across Toronto.",
  },
};

const values = [
  {
    icon: Shield,
    title: "Safety & respect",
    description:
      "We treat your home or workplace with care—floor protection, tidy workspaces, and clear communication before we cut, drill, or paint.",
  },
  {
    icon: Target,
    title: "Right-first-time mindset",
    description:
      "Detailed scoping, honest timelines, and the right tools on the truck help us avoid repeat visits and surprise add-ons.",
  },
  {
    icon: HeartHandshake,
    title: "Long-term relationships",
    description:
      "Many clients book us again for seasonal maintenance, rental turnovers, and small business upkeep—because consistency matters.",
  },
];

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="Our story"
      title="About Aerofix Handyman Services"
      description="We built Aerofix for Toronto families, renters, landlords, and local businesses who want dependable repairs without the runaround—clear quotes, skilled hands, and respectful service from start to finish."
    >
      <div className="space-y-16 sm:space-y-20">
        <FadeIn>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="rounded-3xl border border-border bg-gradient-to-br from-white to-zinc-50 p-8 shadow-[var(--shadow-card)] sm:p-10">
              <h2 className="text-xl font-bold text-charcoal sm:text-2xl">
                Who we are
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                {SITE.name} connects you with experienced technicians for{" "}
                <strong className="text-charcoal">home repair services</strong>
                , installs, painting, and ongoing{" "}
                <strong className="text-charcoal">
                  property maintenance services
                </strong>
                . Whether you searched for a{" "}
                <strong className="text-charcoal">handyman in Toronto</strong>{" "}
                or a partner for recurring building care, we focus on quality,
                reliability, and customer satisfaction on every visit.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                Our mission is simple: make professional handyman help easy to
                book, easy to understand, and easy to trust—especially when life
                gets busy and small problems can’t wait.
              </p>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl border border-border bg-charcoal p-6 text-white sm:p-8">
                <p className="text-xs font-bold uppercase tracking-widest text-accent">
                  At a glance
                </p>
                <ul className="mt-6 space-y-4 text-sm text-zinc-300">
                  <li className="flex gap-3">
                    <Users className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span>
                      <span className="font-semibold text-white">
                        Who we serve:
                      </span>{" "}
                      homeowners, tenants, landlords, retail & offices.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span>
                      <span className="font-semibold text-white">
                        Scheduling:
                      </span>{" "}
                      flexible online booking plus phone support when you need
                      it.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Award className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span>
                      <span className="font-semibold text-white">
                        Standards:
                      </span>{" "}
                      courteous crews, transparent pricing, tidy job sites.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border border-accent/25 bg-accent/5 p-6 sm:p-7">
                <p className="text-sm font-semibold text-charcoal">
                  Lead contact: {SITE.contactPerson}
                </p>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  Questions about a larger project, landlord program, or
                  multi-location maintenance? Reach out—we’ll help you plan the
                  right visit cadence and scope.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <CTALink href={`tel:${SITE.phoneTel}`} className="!rounded-full text-sm">
                    Call {SITE.phoneDisplay}
                  </CTALink>
                  <CTALink href="/contact" variant="outline" className="!rounded-full text-sm">
                    Email us
                  </CTALink>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-accent" />
            <h2 className="text-2xl font-bold text-charcoal">What we stand for</h2>
          </div>
          <p className="mt-3 max-w-3xl text-muted leading-relaxed">
            These principles guide how we quote, how we work on site, and how we
            follow up—so you always know what “professional handyman services”
            should feel like.
          </p>
          <div className="mt-8">
            <FeatureGrid items={values} />
          </div>
        </FadeIn>

        <FadeIn>
          <h2 className="text-2xl font-bold text-charcoal">Who we serve</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Homeowners",
                body: "Punch lists, pre-sale refreshes, fixture upgrades, and seasonal fixes—without juggling multiple contractors.",
              },
              {
                title: "Tenants & landlords",
                body: "Rental turnovers, drywall repair, lock hardware, and recurring landlord maintenance plans that stay on budget.",
              },
              {
                title: "Small businesses",
                body: "Retail fit-ups, shelving, signage installs, and light facility upkeep so your team can stay focused on customers.",
              },
              {
                title: "Busy professionals",
                body: "TV mounting, furniture assembly, and quick installs scheduled around your calendar—not the other way around.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className={cn(
                  "rounded-2xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                )}
              >
                <h3 className="font-bold text-charcoal">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.body}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <h2 className="text-2xl font-bold text-charcoal">How we work with you</h2>
          <ol className="mt-6 space-y-4 border-l-2 border-accent/40 pl-6 text-muted">
            <li>
              <span className="font-semibold text-charcoal">1. Listen & scope</span>{" "}
              — we clarify outcomes, access, and materials so expectations match
              reality.
            </li>
            <li>
              <span className="font-semibold text-charcoal">2. Quote clearly</span>{" "}
              — simple pricing for standard visits; photo uploads help us quote
              complex work faster.
            </li>
            <li>
              <span className="font-semibold text-charcoal">3. Arrive prepared</span>{" "}
              — we bring the right tools and supplies to reduce downtime on site.
            </li>
            <li>
              <span className="font-semibold text-charcoal">4. Finish tidy</span> — we
              walk through results with you and recap any maintenance tips before
              we leave.
            </li>
          </ol>
        </FadeIn>

        <FadeIn>
          <PageCtaBanner
            title="Ready when you are"
            description="Book a visit for this week—or send photos for a free estimate on a bigger job."
            primaryHref="/booking"
            primaryLabel="Book now"
            secondaryHref="/upload-project"
            secondaryLabel="Upload photos"
          />
        </FadeIn>
      </div>
    </PageShell>
  );
}

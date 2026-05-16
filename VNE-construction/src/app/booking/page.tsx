import type { Metadata } from "next";
import {
  CalendarCheck,
  Camera,
  CheckCircle2,
  ClipboardList,
  Headphones,
  ShieldCheck,
} from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { FadeIn } from "@/components/FadeIn";
import { BookingForm } from "@/components/BookingForm";
import { CTALink } from "@/components/CTAButton";
import { PageCtaBanner } from "@/components/page/PageCtaBanner";

export const metadata: Metadata = {
  title: "Book Online",
  description:
    "Book professional handyman services in Toronto — choose service type, date, time, and share job details. Fast scheduling for home repair and installs.",
  openGraph: {
    title: "Book a Handyman | Aerofix",
    description: "Premium online booking for Toronto handyman services.",
  },
};

const sidebar = [
  {
    icon: CalendarCheck,
    title: "Same-week availability",
    body: "We respond quickly to booking requests and prioritize urgent repairs when capacity allows.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent scope",
    body: "Share photos and details so we arrive prepared with the right tools and materials plan.",
  },
  {
    icon: Camera,
    title: "Photo-friendly booking",
    body: "Upload images of the area—especially for drywall, paint color matching, or mounting surfaces.",
  },
  {
    icon: Headphones,
    title: "Human confirmation",
    body: "You’ll receive a confirmation message with your arrival window and technician notes.",
  },
];

const checklist = [
  "Access instructions (buzz code, parking, pets)",
  "Photos of the work area and any damage",
  "Preferred time window and backup date",
  "List of materials you already purchased (if any)",
];

export default function BookingPage() {
  return (
    <PageShell
      wide
      eyebrow="Scheduling"
      title="Book your handyman visit"
      description="Complete the form below and our team will confirm your appointment. Built for homeowners, landlords, and businesses who need dependable scheduling—without endless back-and-forth."
    >
      <div className="space-y-12 sm:space-y-14">
        <FadeIn>
          <div className="rounded-2xl border border-border bg-zinc-50 p-6 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-8">
            <div className="flex items-start gap-3">
              <ClipboardList className="mt-0.5 h-6 w-6 shrink-0 text-accent" />
              <div>
                <p className="font-bold text-charcoal">Before you start</p>
                <p className="mt-1 text-sm text-muted leading-relaxed">
                  This demo form shows a success state only—no data is sent yet.
                  When you connect a CRM or booking API, these fields map cleanly
                  to most provider schemas.
                </p>
              </div>
            </div>
            <CTALink href="/upload-project" variant="outline" className="mt-4 shrink-0 !rounded-full sm:mt-0">
              Prefer photo quote first
            </CTALink>
          </div>
        </FadeIn>

        <div className="grid gap-10 lg:grid-cols-12">
          <FadeIn className="lg:col-span-4">
            <div className="sticky top-28 space-y-5">
              <div className="rounded-2xl border border-border bg-gradient-to-b from-charcoal to-zinc-900 p-6 text-white shadow-lg sm:p-7">
                <p className="text-xs font-bold uppercase tracking-widest text-accent">
                  Why book online
                </p>
                <ul className="mt-5 space-y-5">
                  {sidebar.map(({ icon: Icon, title, body }) => (
                    <li key={title} className="flex gap-3">
                      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <div>
                        <p className="font-semibold">{title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                          {body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                <p className="text-sm font-bold text-charcoal">Prep checklist</p>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {checklist.map((c) => (
                    <li key={c} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.06} className="lg:col-span-8">
            <div className="rounded-3xl border border-border bg-white p-6 shadow-[var(--shadow-soft)] sm:p-8 lg:p-10">
              <h2 className="text-xl font-bold text-charcoal sm:text-2xl">
                Booking details
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Fields marked * are required. Add as much detail as you can—we use
                it to assign the right technician and time block.
              </p>
              <div className="mt-8">
                <BookingForm />
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn>
          <PageCtaBanner
            title="Questions before you book?"
            description="Call us for complex access, landlord approvals, or commercial scheduling—we’ll help you pick the right service type."
            primaryHref="/contact"
            primaryLabel="Contact us"
            secondaryHref="/pricing"
            secondaryLabel="See pricing"
          />
        </FadeIn>
      </div>
    </PageShell>
  );
}

import type { Metadata } from "next";
import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { FadeIn } from "@/components/FadeIn";
import { ContactForm } from "@/components/ContactForm";
import { BookingForm } from "@/components/BookingForm";
import { CTALink } from "@/components/CTAButton";
import { PageCtaBanner } from "@/components/page/PageCtaBanner";
import { SITE } from "@/lib/site";
import { ContactJsonLd } from "@/components/seo/ContactJsonLd";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${SITE.name} — ${SITE.phoneDisplay}, ${SITE.email}. ${SITE.address.full}. Handyman in Toronto and surrounding areas.`,
  openGraph: {
    title: `Contact | ${SITE.name}`,
    description: "Call, email, or book online. Service hours and location.",
  },
};

const quick = [
  { label: "Call now", href: `tel:${SITE.phoneTel}`, sub: SITE.phoneDisplay },
  { label: "Email", href: `mailto:${SITE.email}`, sub: SITE.email },
  { label: "Book online", href: "/booking", sub: "Same-week slots" },
];

export default function ContactPage() {
  return (
    <>
      <ContactJsonLd />
      <PageShell
        wide
        eyebrow="We’re here to help"
        title="Contact & service hours"
        description={`Reach ${SITE.contactPerson} and the Aerofix team by phone, email, or the forms below. For urgent issues, calling is fastest—we’ll route you to the next available technician when possible.`}
      >
        <div className="space-y-16 sm:space-y-20">
          <FadeIn>
            <div className="grid gap-4 sm:grid-cols-3">
              {quick.map((q) => (
                <a
                  key={q.label}
                  href={q.href}
                  className="group rounded-2xl border border-border bg-gradient-to-br from-white to-zinc-50 p-5 shadow-sm transition-all hover:border-accent/35 hover:shadow-md"
                >
                  <p className="text-xs font-bold uppercase tracking-widest text-accent">
                    {q.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-charcoal group-hover:text-accent">
                    {q.sub}
                  </p>
                </a>
              ))}
            </div>
          </FadeIn>

          <div className="grid gap-10 lg:grid-cols-2">
            <FadeIn>
              <div className="relative overflow-hidden rounded-3xl border border-border bg-white p-6 shadow-[var(--shadow-soft)] sm:p-8">
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />
                <div className="relative">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-accent" />
                    <h2 className="text-xl font-bold text-charcoal">Visit & coverage</h2>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {SITE.address.full}
                  </p>
                  <p className="mt-2 text-sm text-muted">
                    <span className="font-semibold text-charcoal">Service area:</span>{" "}
                    {SITE.serviceArea}
                  </p>
                  <div className="mt-6 rounded-2xl border border-dashed border-border bg-zinc-50 p-8 text-center">
                    <Sparkles className="mx-auto h-8 w-8 text-accent/80" />
                    <p className="mt-3 text-sm font-medium text-charcoal">
                      Map embed ready
                    </p>
                    <p className="mt-2 text-xs text-muted leading-relaxed">
                      Drop in a Google Maps iframe for {SITE.address.street} when
                      you’re ready—this placeholder keeps layout stable during
                      development.
                    </p>
                  </div>
                  <ul className="mt-8 space-y-4 text-sm text-muted">
                    <li className="flex gap-3">
                      <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <div>
                        <p className="font-semibold text-charcoal">Phone</p>
                        <a className="hover:text-accent" href={`tel:${SITE.phoneTel}`}>
                          {SITE.phoneDisplay}
                        </a>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <div>
                        <p className="font-semibold text-charcoal">Email</p>
                        <a
                          className="break-all hover:text-accent"
                          href={`mailto:${SITE.email}`}
                        >
                          {SITE.email}
                        </a>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <div>
                        <p className="font-semibold text-charcoal">Business hours</p>
                        <p>{SITE.hours.weekdays}</p>
                        <p>{SITE.hours.saturday}</p>
                        <p>{SITE.hours.sunday}</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.06}>
              <div className="rounded-3xl border border-border bg-gradient-to-b from-white to-zinc-50 p-6 shadow-[var(--shadow-card)] sm:p-8">
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-accent" />
                  <h2 className="text-xl font-bold text-charcoal">Send a message</h2>
                </div>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  Quick questions about pricing, timing, or what to prep before we
                  arrive? Leave a note—we typically reply same business day.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn>
            <div className="rounded-3xl border border-accent/25 bg-accent/5 p-6 sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <Send className="h-5 w-5 text-accent" />
                    <h2 className="text-xl font-bold text-charcoal">Online booking</h2>
                  </div>
                  <p className="mt-2 max-w-xl text-sm text-muted leading-relaxed">
                    Prefer to lock in a time now? Complete the booking form—add
                    photos so we can confirm scope and bring the right tools.
                  </p>
                </div>
                <CTALink href="/upload-project" variant="outline" className="shrink-0 !rounded-full">
                  Photo quote first
                </CTALink>
              </div>
              <div className="mt-6 rounded-2xl border border-border bg-white p-4 sm:p-6">
                <BookingForm />
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <PageCtaBanner
              title="Prefer to talk it through?"
              description="Call us for same-day guidance when you’re stuck choosing between repair vs replace—or text photos before you book."
              primaryHref={`tel:${SITE.phoneTel}`}
              primaryLabel="Call now"
              secondaryHref="/upload-project"
              secondaryLabel="Upload photos"
            />
          </FadeIn>
        </div>
      </PageShell>
    </>
  );
}

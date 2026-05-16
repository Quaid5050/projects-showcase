import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck, Sparkles, Truck, Heart, Award, Users,
  Wrench, Smartphone, Battery, Monitor,
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About — 3 Ray Mobiles",
  description:
    "3 Ray Mobiles — trusted phone & laptop sales and repair in Mississauga. New, pre-owned, and repair services with free quotes.",
};

const reasons = [
  { icon: ShieldCheck, title: "Verified quality",    text: "Every device is inspected, tested, and graded before listing." },
  { icon: Sparkles,    title: "Curated selection",   text: "We only stock devices we'd recommend to our friends and family." },
  { icon: Truck,       title: "Fast worldwide ship", text: "Insured, tracked delivery to your door — wherever you are." },
  { icon: Heart,       title: "Honest support",      text: "Real humans, real answers. No upsells, no pressure." },
  { icon: Award,       title: "5+ years experience", text: "Trusted by thousands of customers across 30+ countries." },
  { icon: Users,       title: "Community first",     text: "We grow by referrals — your trust is our most important metric." },
];

const repairServices = [
  { icon: Monitor,    title: "Screen Replacement",  text: "All iPhone, Samsung, Google Pixel, and laptop models." },
  { icon: Battery,    title: "Battery Replacement", text: "Restore full battery life with genuine-grade batteries." },
  { icon: Smartphone, title: "Water Damage",        text: "Fast recovery service for water-damaged phones and laptops." },
  { icon: Wrench,     title: "All Other Repairs",   text: "Charging ports, cameras, speakers, software, unlocking & more." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About 3 Ray Mobiles"
        title="Tech you can trust, without the noise"
        description="We sell, we repair, we support. Based in Mississauga — serving customers across Canada."
      />

      {/* Story */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-5 text-sm sm:text-base text-muted-foreground leading-relaxed">
        <p>
          3 Ray Mobiles was founded with one belief: buying or repairing a phone, laptop, or
          accessory should feel exciting — not stressful. Whether you're upgrading to the latest
          flagship, looking for a smart pre-owned find, or need a cracked screen fixed fast —
          you deserve transparency, quality, and real human support.
        </p>
        <p>
          We hand-pick every device in our catalog. Refurbished items go through a rigorous
          inspection and grading process. New items come straight from authorized channels.
          We don't show prices online — because every customer's needs are different. Send
          us an inquiry and we'll respond with availability and a tailored quote within 24 hours.
        </p>
        <p>
          Our repair workshop is staffed by experienced technicians who have serviced thousands
          of devices. We offer a <strong className="text-foreground">90-day warranty</strong> on
          all repairs and operate on a <strong className="text-foreground">no fix, no fee</strong> policy
          on most services.
        </p>
      </section>

      {/* Repair Services highlight */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border/60 bg-surface p-6 sm:p-8 md:p-10">
          <div className="absolute inset-0 bg-gradient-primary opacity-5" />
          <div className="relative">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">Repair services</p>
                <h2 className="text-xl sm:text-2xl font-bold">We fix phones & laptops too</h2>
                <p className="mt-2 text-sm text-muted-foreground max-w-lg">
                  Bring your broken device to our Mississauga location. Free quote, fast turnaround, 90-day warranty.
                </p>
              </div>
              <Link
                href="/repair"
                className="inline-flex items-center justify-center rounded-md bg-gradient-primary border-0 hover:opacity-90 glow-blue shrink-0 w-full sm:w-auto h-10 px-4 text-sm font-medium text-primary-foreground transition-opacity"
              >
                Get a repair quote
              </Link>
            </div>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {repairServices.map((r) => (
                <div key={r.title} className="flex items-start gap-3 rounded-xl border border-border/60 bg-background/60 p-4">
                  <div className="shrink-0 h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <r.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{r.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{r.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">Why choose us</p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Built on trust, powered by tech</h2>
        </div>
        <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.title} className="rounded-2xl border border-border/60 bg-surface p-5 sm:p-6 card-hover">
              <div className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-gradient-primary/15 border border-primary/20 mb-4">
                <r.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-sm sm:text-base font-semibold">{r.title}</h3>
              <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground">{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border/60 bg-surface p-8 sm:p-10 md:p-14 text-center">
          <div className="absolute inset-0 bg-gradient-primary opacity-10" />
          <div className="relative space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Ready to find your next device?</h2>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-md bg-gradient-primary border-0 hover:opacity-90 glow-blue w-full sm:w-auto h-11 px-6 text-sm font-semibold text-primary-foreground transition-opacity"
              >
                Browse the catalog
              </Link>
              <Link
                href="/repair"
                className="inline-flex items-center justify-center rounded-md border border-border/60 bg-background hover:bg-surface w-full sm:w-auto h-11 px-6 text-sm font-semibold transition-colors"
              >
                Book a repair
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

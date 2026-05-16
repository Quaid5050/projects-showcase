import type { Metadata } from "next";
import Link from "next/link";
import {
  ShoppingCart, DollarSign, Wrench, Smartphone, Laptop,
  CheckCircle, ArrowRight, MessageCircle, Shield,
  Clock, BadgeCheck, Zap, RefreshCw, Package, Headphones,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services — 3 Ray Mobiles",
  description:
    "3 Ray Mobiles offers phone & laptop sales (new & used), device buyback, and professional repair services in Mississauga. Get a free quote today.",
};

const mainServices = [
  {
    id: "sell",
    icon: ShoppingCart,
    accent: "blue",
    badge: "Buy from us",
    title: "Buy New & Used Devices",
    subtitle: "Phones · Laptops · Accessories",
    description:
      "Browse our curated catalog of brand-new and certified pre-owned smartphones, laptops, and accessories. Every device is inspected, tested, and ready to ship.",
    highlights: [
      "iPhones X through 16 Pro Max",
      "Google Pixel 6 – 9 Pro",
      "Samsung Galaxy S & Z Fold series",
      "MacBook Air & Pro (M1 / M2 / M4)",
      "Gaming & student laptops",
      "Earbuds, chargers, cases & watches",
    ],
    cta: { label: "Browse Products", href: "/products" },
    ctaSecondary: { label: "Request a Quote", href: "/inquiry" },
  },
  {
    id: "purchase",
    icon: DollarSign,
    accent: "green",
    badge: "Sell to us",
    title: "Sell or Trade Your Device",
    subtitle: "Get cash for your old phone or laptop",
    description:
      "We buy used phones and laptops in any condition. Get a fair, instant quote — no haggling, no hassle. Bring it in or send us a message with the details.",
    highlights: [
      "All iPhone models accepted",
      "Samsung, Google, OnePlus & more",
      "MacBooks and Windows laptops",
      "Working or damaged — we assess all",
      "Same-day cash payment available",
      "Free device assessment, no obligation",
    ],
    cta: { label: "Get a Buyback Quote", href: "/inquiry?type=sell" },
    ctaSecondary: { label: "WhatsApp Us", href: "https://wa.me/14166693931", external: true },
  },
  {
    id: "repair",
    icon: Wrench,
    accent: "purple",
    badge: "Fix it",
    title: "Professional Repair Services",
    subtitle: "Phones · Laptops · Tablets",
    description:
      "Our experienced technicians repair all major brands. We use quality parts, offer a 90-day warranty on all repairs, and operate on a no-fix, no-fee policy.",
    highlights: [
      "Screen & display replacement",
      "Battery replacement",
      "Charging port repair",
      "Water damage recovery",
      "Camera & speaker repair",
      "Software restore & carrier unlock",
    ],
    cta: { label: "Book a Repair", href: "/inquiry?type=repair" },
    ctaSecondary: { label: "View All Repairs", href: "/repair" },
  },
];

const repairBrands = [
  { name: "iPhone",      icon: Smartphone },
  { name: "Samsung",     icon: Smartphone },
  { name: "Google Pixel",icon: Smartphone },
  { name: "MacBook",     icon: Laptop },
  { name: "Dell / HP",   icon: Laptop },
  { name: "iPad / Tablet",icon: Smartphone },
];

const whyUs = [
  { icon: BadgeCheck, title: "Certified Quality",  text: "Every device sold is inspected and graded. Every repair uses quality parts." },
  { icon: Shield,     title: "90-Day Warranty",    text: "All repairs come with a 90-day parts and labour warranty." },
  { icon: Clock,      title: "Fast Turnaround",    text: "Most repairs done same day. Orders shipped within 24 hours." },
  { icon: Zap,        title: "Instant Quotes",     text: "Send us a message and get a quote within hours — no waiting." },
  { icon: RefreshCw,  title: "No Fix, No Fee",     text: "If we can't fix it, you don't pay. Simple as that." },
  { icon: Headphones, title: "Real Human Support", text: "Talk to a real person via WhatsApp, email, or phone — no bots." },
];

const stats = [
  { value: "5+",    label: "Years in business" },
  { value: "2000+", label: "Devices repaired" },
  { value: "1500+", label: "Happy customers" },
  { value: "90",    label: "Day repair warranty" },
];

const accentMap: Record<string, { border: string; bg: string; text: string; badge: string }> = {
  blue:   { border: "border-primary/30",     bg: "bg-primary/10",     text: "text-primary",     badge: "bg-primary/15 text-primary border-primary/30" },
  green:  { border: "border-success/30",     bg: "bg-success/10",     text: "text-success",     badge: "bg-success/15 text-success border-success/30" },
  purple: { border: "border-purple-glow/30", bg: "bg-purple-glow/10", text: "text-purple-glow", badge: "bg-purple-glow/15 text-purple-glow border-purple-glow/30" },
};

export default function ServicesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="absolute inset-0 grid-bg" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-16 sm:pt-20 sm:pb-24 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] mb-4">
            Everything tech,
            <br />
            <span className="gradient-text">under one roof.</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Buy new or used devices, sell your old ones for cash, or get your broken phone
            or laptop repaired — all at 3 Ray Mobiles.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/products" className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-primary border-0 hover:opacity-90 glow-blue w-full sm:w-auto h-11 px-6 text-sm font-semibold text-primary-foreground transition-opacity">
              Shop Devices <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/repair" className="inline-flex items-center justify-center rounded-md border border-border/60 bg-background hover:bg-surface w-full sm:w-auto h-11 px-6 text-sm font-semibold transition-colors">
              Book a Repair
            </Link>
            <a href="https://wa.me/14166693931" target="_blank" rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] hover:bg-[#1ebe5d] border-0 text-white w-full sm:w-auto h-11 px-6 text-sm font-semibold transition-colors">
              <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-border/60 bg-surface/60 p-5 text-center">
              <p className="text-2xl sm:text-3xl font-bold gradient-text">{s.value}</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── THREE MAIN SERVICES ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">What we do</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Our Services</h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            Three ways we help you — buy, sell, or repair. All quote-based, all transparent.
          </p>
        </div>

        <div className="space-y-6">
          {mainServices.map((svc, idx) => {
            const colors = accentMap[svc.accent];
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={svc.id}
                className={`relative overflow-hidden rounded-3xl border ${colors.border} bg-surface p-6 sm:p-8 md:p-10`}
              >
                <div className={`absolute top-0 ${isReversed ? "right-0" : "left-0"} w-64 h-64 ${colors.bg} blur-3xl rounded-full opacity-40 pointer-events-none`} />

                <div className={`relative grid gap-8 lg:grid-cols-2 lg:gap-12 items-center`}>
                  <div className={isReversed ? "lg:order-2" : ""}>
                    <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold mb-4 ${colors.badge}`}>
                      <svc.icon className="h-3.5 w-3.5" />
                      {svc.badge}
                    </span>

                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">{svc.title}</h3>
                    <p className={`text-sm font-medium mt-1 mb-3 ${colors.text}`}>{svc.subtitle}</p>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                      {svc.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                      {svc.ctaSecondary && (
                        (svc.ctaSecondary as { external?: boolean }).external ? (
                          <a href={svc.ctaSecondary.href} target="_blank" rel="noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] hover:bg-[#1ebe5d] border-0 text-white w-full sm:w-auto h-11 px-6 text-sm font-semibold transition-colors">
                            <MessageCircle className="mr-2 h-4 w-4" />
                            {svc.ctaSecondary.label}
                          </a>
                        ) : (
                          <Link href={svc.ctaSecondary.href}
                            className="inline-flex items-center justify-center rounded-md border border-border/60 bg-background hover:bg-surface w-full sm:w-auto h-11 px-6 text-sm font-semibold transition-colors">
                            {svc.ctaSecondary.label}
                          </Link>
                        )
                      )}
                      <Link href={svc.cta.href}
                        className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-primary border-0 hover:opacity-90 glow-blue w-full sm:w-auto h-11 px-6 text-sm font-semibold text-primary-foreground transition-opacity">
                        {svc.cta.label} <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>

                  <div className={`${isReversed ? "lg:order-1" : ""} rounded-2xl border border-border/60 bg-background/60 p-5 sm:p-6`}>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                      What's included
                    </p>
                    <ul className="space-y-3">
                      {svc.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-3 text-sm">
                          <CheckCircle className={`h-4 w-4 shrink-0 mt-0.5 ${colors.text}`} />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── REPAIR BRANDS ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <div className="rounded-2xl border border-border/60 bg-surface/60 p-6 sm:p-8">
          <div className="text-center mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">Repair coverage</p>
            <h2 className="text-xl sm:text-2xl font-bold">Brands we repair</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {repairBrands.map((b) => (
              <div key={b.name} className="flex flex-col items-center gap-2 rounded-xl border border-border/60 bg-background/60 p-4 text-center card-hover">
                <b.icon className="h-6 w-6 text-primary" />
                <span className="text-xs sm:text-sm font-medium">{b.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="text-center mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">Why 3 Ray Mobiles</p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">The 3 Ray difference</h2>
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((w) => (
            <div key={w.title} className="flex items-start gap-4 rounded-2xl border border-border/60 bg-surface p-5 sm:p-6 card-hover">
              <div className="shrink-0 h-11 w-11 rounded-xl bg-gradient-primary/15 border border-primary/20 flex items-center justify-center">
                <w.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-semibold">{w.title}</h3>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground">{w.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="text-center mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">Simple process</p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">How it works</h2>
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
          {[
            { step: "01", icon: MessageCircle, title: "Contact us",  text: "Send us a WhatsApp message or email with your device details and what you need." },
            { step: "02", icon: Package,       title: "Get a quote", text: "We respond within hours with a clear, no-obligation quote — no hidden fees." },
            { step: "03", icon: CheckCircle,   title: "Done deal",   text: "Confirm and we handle the rest — delivery, repair, or buyback payment." },
          ].map((step) => (
            <div key={step.step} className="relative rounded-2xl border border-border/60 bg-surface p-6 sm:p-7 card-hover overflow-hidden">
              <span className="absolute top-4 right-4 text-5xl font-black text-border/40 select-none leading-none">
                {step.step}
              </span>
              <div className="relative">
                <div className="h-11 w-11 rounded-xl bg-gradient-primary/15 border border-primary/20 flex items-center justify-center mb-4">
                  <step.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold">{step.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border/60 bg-surface p-8 sm:p-10 md:p-14 text-center">
          <div className="absolute inset-0 bg-gradient-primary opacity-10" />
          <div className="absolute -inset-x-20 -top-40 h-80 bg-purple-glow/20 blur-3xl" />
          <div className="relative space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Ready to get started?</h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
              Whether you're buying, selling, or repairing — we're here to help.
              Reach out and get a free quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link href="/inquiry"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-primary border-0 hover:opacity-90 glow-blue w-full sm:w-auto h-11 px-6 text-sm font-semibold text-primary-foreground transition-opacity">
                Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a href="https://wa.me/14166693931" target="_blank" rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] hover:bg-[#1ebe5d] border-0 text-white w-full sm:w-auto h-11 px-6 text-sm font-semibold transition-colors">
                <MessageCircle className="mr-2 h-4 w-4" /> Chat on WhatsApp
              </a>
              <Link href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-border/60 bg-background hover:bg-surface w-full sm:w-auto h-11 px-6 text-sm font-semibold transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

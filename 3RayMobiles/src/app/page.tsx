import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, ShieldCheck, Truck, Headphones,
  ShoppingCart, DollarSign, Wrench, CheckCircle,
} from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { CategoryCard } from "@/components/CategoryCard";
import { featuredProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "3 Ray Mobiles — Buy, Sell & Repair",
  description:
    "Buy new & used phones and laptops, sell your old device for cash, or get professional repairs. Based in Mississauga.",
};

const services = [
  {
    icon: ShoppingCart,
    accent: "blue",
    title: "Buy Devices",
    desc: "New & certified pre-owned phones, laptops, and accessories. Every device inspected and ready.",
    items: ["iPhones X – 16 Pro Max", "Google Pixel 6 – 9 Pro", "Samsung Galaxy series", "MacBook Air & Pro"],
    cta: "Browse Products",
    href: "/products",
  },
  {
    icon: DollarSign,
    accent: "green",
    title: "Sell Your Device",
    desc: "Get cash for your old phone or laptop. Fair instant quotes, same-day payment available.",
    items: ["All iPhone models", "Samsung & Google phones", "MacBooks & laptops", "Working or damaged"],
    cta: "Get a Buyback Quote",
    href: "/inquiry",
  },
  {
    icon: Wrench,
    accent: "purple",
    title: "Repair Services",
    desc: "Professional repairs with 90-day warranty. No fix, no fee on most services.",
    items: ["Screen replacement", "Battery replacement", "Charging port repair", "Water damage recovery"],
    cta: "Book a Repair",
    href: "/repair",
  },
];

const accentClasses: Record<string, { icon: string; check: string; border: string; bg: string }> = {
  blue:   { icon: "text-primary",     check: "text-primary",     border: "border-primary/20",     bg: "bg-primary/10" },
  green:  { icon: "text-success",     check: "text-success",     border: "border-success/20",     bg: "bg-success/10" },
  purple: { icon: "text-purple-glow", check: "text-purple-glow", border: "border-purple-glow/20", bg: "bg-purple-glow/10" },
};

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="absolute inset-0 grid-bg" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-28 lg:pb-32">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-5 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08]">
                Buy. Sell. Repair.
                <br />
                <span className="gradient-text">All in one place.</span>
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
                Premium new and used phones, laptops, and accessories — plus professional repair services. Based in Mississauga, serving customers across Canada.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center rounded-md bg-gradient-primary border-0 hover:opacity-90 glow-blue w-full sm:w-auto h-11 px-6 text-sm font-semibold text-primary-foreground transition-opacity"
                >
                  Browse Products <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/repair"
                  className="inline-flex items-center justify-center rounded-md border border-border/60 bg-background hover:bg-surface w-full sm:w-auto h-11 px-6 text-sm font-semibold transition-colors"
                >
                  Book a Repair
                </Link>
              </div>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 pt-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-success" /> Verified quality</span>
                <span className="flex items-center gap-1.5"><Truck className="h-4 w-4 text-primary" /> Fast shipping</span>
                <span className="flex items-center gap-1.5"><Headphones className="h-4 w-4 text-purple-glow" /> Expert support</span>
              </div>
            </div>

            <div className="relative order-first lg:order-last">
              <div className="absolute -inset-4 sm:-inset-6 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-border/60 glow-blue">
                <img
                  src="/hero.jpg"
                  alt="3 Ray Mobiles — phones, laptops, accessories"
                  width={1920}
                  height={1080}
                  className="w-full h-auto object-cover animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR SERVICES ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">What we do</p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Three ways we can help</h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-lg mx-auto">
            Whether you're buying, selling, or need a repair — we've got you covered.
          </p>
        </div>
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-3">
          {services.map((s) => {
            const c = accentClasses[s.accent];
            return (
              <div key={s.title} className={`rounded-2xl border ${c.border} bg-surface p-6 flex flex-col card-hover`}>
                <div className={`h-12 w-12 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center mb-4`}>
                  <s.icon className={`h-6 w-6 ${c.icon}`} />
                </div>
                <h3 className="text-lg font-bold mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{s.desc}</p>
                <ul className="space-y-1.5 mb-6">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle className={`h-3.5 w-3.5 shrink-0 ${c.check}`} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Link
                    href={s.href}
                    className="flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
                  >
                    {s.cta} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-6">
          <Link href="/services" className="text-sm text-primary hover:underline font-medium">
            View all services →
          </Link>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="mb-6 sm:mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">Shop by category</p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Find your next device</h2>
        </div>
        <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <CategoryCard
            title="Mobiles"
            description="Latest flagships and certified pre-owned phones."
            href="/mobiles"
            image="/Google Pixel 7.jpeg"
            accent="blue"
          />
          <CategoryCard
            title="Tablets"
            description="iPad Pro, iPad Air and more for work and play."
            href="/tablets"
            image="/The iPad Pro is one of the best iPad lines out….jpg"
            accent="teal"
          />
          <CategoryCard
            title="Laptops"
            description="Business, gaming, and student-ready notebooks."
            href="/laptops"
            image="https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&w=800"
            accent="purple"
          />
          <CategoryCard
            title="Accessories"
            description="Earbuds, chargers, cases, smartwatches and more."
            href="/accessories"
            image="/jabra elite 10.jpeg"
            accent="green"
          />
        </div>
      </section>

      {/* ── FEATURED ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="flex items-end justify-between mb-6 sm:mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">Recommended devices</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Featured this week</h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 font-medium shrink-0 transition-colors"
          >
            View all <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border/60 bg-surface p-8 sm:p-10 md:p-14 text-center">
          <div className="absolute inset-0 bg-gradient-primary opacity-10" />
          <div className="absolute -inset-x-20 -top-40 h-80 bg-purple-glow/20 blur-3xl" />
          <div className="relative space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Ready to get started?</h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
              Send us a message — we'll respond with availability, pricing, or a repair quote within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/inquiry"
                className="inline-flex items-center justify-center rounded-md bg-gradient-primary border-0 hover:opacity-90 glow-blue w-full sm:w-auto h-11 px-6 text-sm font-semibold text-primary-foreground transition-opacity"
              >
                Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-border/60 bg-background hover:bg-surface w-full sm:w-auto h-11 px-6 text-sm font-semibold transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

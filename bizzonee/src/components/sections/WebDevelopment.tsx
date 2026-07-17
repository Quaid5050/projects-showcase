"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, ExternalLink, ChevronLeft, ChevronRight, Layers, Gauge, Globe, Send, CheckCircle2, Star, ShieldCheck } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import NeonButton from "@/components/ui/NeonButton";
import WebProcess from "@/components/sections/WebProcess";
import TrustReviews from "@/components/sections/TrustReviews";


const BASE_W = 1440;

/* ── live iframe frame ── */
function LiveFrame({ url, name }: { url: string; name: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.25);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / BASE_W);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0a0814] shadow-xl">
      {/* browser bar */}
      <div className="flex items-center gap-1.5 border-b border-white/5 bg-[#0f0a1e] px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-red-400/60" />
        <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
        <span className="h-2 w-2 rounded-full bg-green-400/60" />
        <span className="ml-2 truncate text-[9px] text-white/25">{url.replace("https://www.", "").replace("https://", "")}</span>
      </div>
      {/* scaled iframe */}
      <div ref={ref} className="relative w-full overflow-hidden" style={{ aspectRatio: "16/10" }}>
        <iframe
          src={url}
          title={name}
          scrolling="no"
          loading="lazy"
          className="absolute left-0 top-0 origin-top-left border-0"
          style={{
            width: `${BASE_W}px`,
            height: `${BASE_W * (10 / 16)}px`,
            transform: `scale(${scale})`,
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
}

/* ── all projects with industry tag ── */
const ALL_PROJECTS = [
  { name: "M2M Pro Cleaners",  industry: "construction", url: "https://www.m2mprocleaners.ca",        tag: "Construction" },
  { name: "Royal Empire Renovation", industry: "construction", url: "https://www.royalempirerenovation.com", tag: "Construction" },
  { name: "Lupin Project",     industry: "construction", url: "https://lupinprojectgroup.com",         tag: "Construction" },
  { name: "Cobb Church",       industry: "nonprofit",    url: "https://www.cobbchurchnetwork.org",     tag: "Non-Profit" },
  { name: "Bariis Pizza",      industry: "restaurant",   url: "https://www.bariishalalpizza.com",      tag: "Restaurant" },
     { name: "Royal Pizza",      industry: "restaurant",   url: "https://www.theroyalgeorgetown.ca",      tag: "Restaurant" },
  { name: "Haven Customs",          industry: "automotive",   url: "https://www.havencustoms.ca",               tag: "Automotive" },
   { name: "Haven Tire",          industry: "automotive",   url: "https://www.haventire.ca",               tag: "Automotive" },
    { name: "Black Truck",          industry: "automotive",   url: "https://www.blacktrucksco.com",               tag: "Automotive" },
     { name: "Book A Cab",          industry: "automotive",   url: "https://www.bookacab.ca",               tag: "Automotive" },
  { name: "PerfectTouch Auto Detailing", industry: "automotive", url: "https://www.perfecttouchautodetailing.company", tag: "Automotive" },
  { name: "AEM Quality ISO",   industry: "health",       url: "https://www.aemqualityiso.com",        tag: "Health" },
  { name: "Global Paradon",    industry: "professional", url: "https://www.globalpardonwaivers.com",  tag: "Professional" },
  { name: "Toronto Notary",    industry: "professional", url: "https://www.torontonotaryoffice.ca",   tag: "Professional" },
  { name: "M&L Cleaning",      industry: "professional", url: "https://www.mlcleaninghs.com",         tag: "Professional" },
  { name: "A1 Furnished",      industry: "hospitality",  url: "https://www.a1furnished.ca",           tag: "Hospitality" },
  { name: "Corner Store",      industry: "ecommerce",    url: "https://www.cornerstoreatlinwood.com", tag: "E-commerce" },
  { name: "Strides Hockey Sales", industry: "ecommerce", url: "https://www.strideshockeysales.com",   tag: "E-commerce" },
  { name: "Smokablunt",        industry: "ecommerce",    url: "https://www.smokablunt.com",           tag: "E-commerce" },
];

const INDUSTRIES = [
  { id: "construction", label: "Construction & Renovation",       color: "#F59E0B", emoji: "🏗️" },
  { id: "restaurant",   label: "Restaurant & Food Services",      color: "#EF4444", emoji: "🍴" },
  { id: "professional", label: "Professional Services",           color: "#10B981", emoji: "💼" },
  { id: "ecommerce",    label: "E-commerce & Retail",             color: "#C8F31D", emoji: "🛍️" },
  { id: "hospitality",  label: "Travel & Hospitality",            color: "#06B6D4", emoji: "✈️" },
  { id: "health",       label: "Health & Wellness",               color: "#EC4899", emoji: "❤️" },
  { id: "automotive",   label: "Automotive Services",             color: "#3B82F6", emoji: "🚗" },
  { id: "nonprofit",    label: "Non-Profit & Community",          color: "#8B5CF6", emoji: "🤝" },
];

/* ── industry slider card ── */
function IndustryCard({ ind }: { ind: typeof INDUSTRIES[0] }) {
  const projects = ALL_PROJECTS.filter((p) => p.industry === ind.id);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = projects.length;

  useEffect(() => {
    if (!n || paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % n), 4000);
    return () => clearInterval(id);
  }, [paused, n]);

  const cur = projects[active];

  return (
    <div className="glass rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1"
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 28px ${ind.color}25`; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = ""; }}>

      {/* header */}
      <div className="mb-3 flex items-center gap-2">
        <span className="text-xl">{ind.emoji}</span>
        <div>
          <p className="text-sm font-bold uppercase tracking-wider sm:text-base" style={{ color: ind.color }}>{ind.label}</p>
        </div>
      </div>

      {/* slider */}
      <div>
        {n > 0 ? (
          <>
            <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
              <AnimatePresence mode="wait">
                <motion.div key={active}
                  initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3 }}>
                  <LiveFrame url={cur.url} name={cur.name} />
                </motion.div>
              </AnimatePresence>

              {/* info row */}
              <div className="mt-2 flex items-center justify-between">
                <p className="text-xs font-semibold text-white/70">{cur.name}</p>
                <div className="flex items-center gap-1">
                  <a href={cur.url} target="_blank" rel="noreferrer"
                    className="grid h-6 w-6 place-items-center rounded-full bg-white/5 text-white/90 hover:text-white transition-colors">
                    <ExternalLink size={11} />
                  </a>
                  {n > 1 && (
                    <>
                      <button onClick={() => setActive((a) => (a - 1 + n) % n)}
                        className="grid h-6 w-6 place-items-center rounded-full bg-white/5 text-white/90 hover:text-white transition-colors">
                        <ChevronLeft size={12} />
                      </button>
                      <button onClick={() => setActive((a) => (a + 1) % n)}
                        className="grid h-6 w-6 place-items-center rounded-full bg-white/5 text-white/90 hover:text-white transition-colors">
                        <ChevronRight size={12} />
                      </button>
                    </>
                  )}
                </div>
              </div>

              {n > 1 && (
                <div className="mt-1.5 flex gap-1">
                  {projects.map((_, i) => (
                    <button key={i} onClick={() => setActive(i)}
                      className="h-1 rounded-full transition-all"
                      style={{ width: i === active ? 16 : 4, background: i === active ? ind.color : "rgba(255,255,255,0.2)" }} />
                  ))}
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="flex aspect-[16/10] items-center justify-center rounded-xl border border-white/8 bg-white/[0.02]">
            <p className="text-xs text-white/25">Coming soon</p>
          </div>
        )}
      </div>

      {/* CTA */}
      <button onClick={() => document.getElementById("onboard")?.scrollIntoView({ behavior: "smooth" })}
        className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-xl py-2 text-xs font-bold transition-all hover:opacity-90"
        style={{ background: `${ind.color}15`, border: `1px solid ${ind.color}35`, color: ind.color }}>
        Build mine <ArrowRight size={11} />
      </button>
    </div>
  );
}


type Pkg = { name: string; price: string; tagline: string; popular?: boolean; contact?: boolean; paymentLink?: string; includes: string[] };
const PACKAGES: Pkg[] = [
  { name: "Standard", price: "$79", tagline: "Clean, professional website to get online fast.", paymentLink: "https://link.fastpaydirect.com/payment-link/6a18e979c3ea3a19f0bd90ee", includes: ["Up to 5 pages", "Contact form", "Stock photos", "Mobile responsive", "Basic on-page SEO"] },
  { name: "Premium", price: "$149", tagline: "More pages and essential integrations for growing businesses.", popular: true, paymentLink: "https://link.fastpaydirect.com/payment-link/6a18e118f4e3f699673a6464", includes: ["Up to 12 pages", "Contact form", "Admin Portal", "Booking / appointment form", "Payment integration setup", "Gallery management", "Mobile responsive + SEO setup"] },
  { name: "Advanced", price: "$299", tagline: "Custom eCommerce website with products, payments, and business features.", paymentLink: "https://link.fastpaydirect.com/payment-link/6a1498033f4eb69bef72fc9a", includes: ["Up to 15 pages", "eCommerce ready", "Upload up to 50+ products", "Custom website design", "Payment gateway integration", "Order management setup", "Admin dashboard", "Basic automation features"] },
  { name: "Custom", contact: true, price: "Contact Us", tagline: "Advanced custom website with premium design, 3D visuals, and full business systems.", includes: ["Up to 20 pages", "Advanced custom 3D design", "eCommerce with 100+ products", "Full admin dashboard", "Payment, shipping & order management", "Customer portal", "Multi-language support", "Advanced integrations & automation"] },
];

const STATS = [
  { icon: Layers, value: "120+", label: "Sites launched" },
  { icon: Gauge, value: "98%", label: "Performance" },
  { icon: Globe, value: "24–48h", label: "Kickoff" },
];

/* ── Stripe wordmark (inline SVG, no external asset) ── */
function StripeLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 25" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 0 1-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.04 1.26-.06 1.48Zm-6.02-5.4c-1.03 0-2.17.75-2.17 2.55h4.25c0-1.8-1.07-2.55-2.08-2.55ZM40.95 20.3c-1.44 0-2.32-.6-2.9-1.04l-.02 4.63-4.12.87V5.57h3.76l.08 1.02a4.7 4.7 0 0 1 3.23-1.29c2.9 0 5.62 2.6 5.62 7.4 0 5.23-2.7 7.6-5.65 7.6ZM40 8.62c-.95 0-1.54.34-1.97.8l.02 6.12c.4.44.98.78 1.95.78 1.52 0 2.54-1.65 2.54-3.87 0-2.15-1.04-3.83-2.54-3.83ZM28.24 4.5l4.13-.88v3.35l-4.13.88V4.5ZM28.24 5.57h4.13v14.44h-4.13V5.57ZM23.76 6.75l.26-1.18h3.55v14.44h-4.13V10.32c0-1.85-2.01-2.14-2.01-2.14a5.94 5.94 0 0 0-1.55.2v10.63h-4.14V5.57h3.75l.24 1.18a4.65 4.65 0 0 1 4.03-1.45c.1 0 .1 0 0 0-.02 0-.02 0 0 0Z" />
      <path d="M8.83 8.36c0-.66.55-.92 1.44-.92a9.4 9.4 0 0 1 4.2 1.1V4.5a11.1 11.1 0 0 0-4.2-.78C6.87 3.72 4.6 5.4 4.6 8.34c0 4.62 6.36 3.87 6.36 5.85 0 .78-.68 1.03-1.63 1.03-1.4 0-3.2-.58-4.63-1.36v4.1c1.58.68 3.19 1 4.63 1 3.5 0 5.9-1.73 5.9-4.72 0-4.98-6.4-4.08-6.4-5.88Z" />
    </svg>
  );
}

function SecurePaymentBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-semibold text-white/70">
        <ShieldCheck size={13} className="text-brand-mint" /> Secure Payment by Stripe
      </span>
      <StripeLogo className="h-4 w-auto text-white/50" />
    </div>
  );
}

function GoogleRatingBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 ${className}`}>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <span className="text-[11px] font-semibold text-white/80">5.0 rating <span className="text-white/50">on Google</span></span>
    </div>
  );
}


/* ── hero package showcase card ── */
function HeroPackageCard() {
  const pkg = PACKAGES.find((p) => p.name === "Standard")!;
  return (
    <div className="relative mx-auto max-w-md rounded-3xl neon-border p-6 shadow-glow-purple sm:p-7">
      <span className="absolute -top-3 left-6 rounded-full bg-brand-mint px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-ink shadow-glow-mint">
        Best Value
      </span>

      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold uppercase tracking-wide text-brand-mint">{pkg.name} Package</div>
        <GoogleRatingBadge />
      </div>

      <div className="mt-3 flex items-end gap-1">
        <span className="font-display text-4xl font-extrabold text-white">{pkg.price}</span>
        <span className="mb-1 text-xs text-white/70">one-time</span>
      </div>
      <p className="mt-2 text-sm leading-snug text-white/80">{pkg.tagline}</p>

      <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-5">
        {pkg.includes.map((it) => (
          <li key={it} className="flex items-start gap-2 text-sm text-white/75">
            <Check size={14} className="mt-0.5 shrink-0 text-brand-mint" /> {it}
          </li>
        ))}
      </ul>

      <a href={pkg.paymentLink} target="_blank" rel="noreferrer"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-mint px-7 py-4 text-base font-bold text-ink shadow-glow-mint transition-all hover:-translate-y-0.5 hover:brightness-110">
        Get Started – {pkg.price} <ArrowRight size={17} />
      </a>
      <button onClick={() => document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })}
        className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-white/80 transition-all hover:bg-white/[0.08] hover:text-white">
        View all packages <ArrowRight size={13} />
      </button>

      <SecurePaymentBadge className="mt-5 justify-center" />
    </div>
  );
}

export default function WebDevelopment() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative py-16 sm:py-24">
        <div className="pointer-events-none absolute -top-10 left-1/2 h-80 w-[50rem] -translate-x-1/2 rounded-full bg-brand-purple/20 blur-[140px]" />
        <div className="section">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* left — heading */}
            <Reveal className="text-center lg:text-left">
              <div className="mx-auto lg:mx-0" style={{ maxWidth: "36rem" }}>
                <SectionLabel>Web Development</SectionLabel>
                <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Your Website. Live in <br className="hidden sm:block" /><span className="whitespace-nowrap">24–48 Hours.</span> <span className="text-gradient">$79. No Surprises.</span>
                </h1>
                <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white sm:text-lg lg:mx-0">
                  Pay once, and our team starts today. You&apos;ll get a confirmation within minutes, a kickoff message within hours, and a live website within 48 hours, or your money back. Over 120 businesses have launched with us.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
                  <NeonButton href="#packages" variant="primary" className="px-9 py-4 text-base">Get Started – $79 <ArrowRight size={18} /></NeonButton>
                  <NeonButton href="#onboard" variant="ghost">Talk To Us First</NeonButton>
                </div>
                <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
                  <GoogleRatingBadge />
                  <SecurePaymentBadge />
                </div>
                <div className="mt-10 flex flex-wrap justify-center gap-6 lg:justify-start">
                  {STATS.map((s) => (
                    <div key={s.label} className="flex items-center gap-2.5">
                      <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-mint/10 text-brand-mint"><s.icon size={16} /></span>
                      <div className="text-left">
                        <div className="font-display text-base font-bold text-white">{s.value}</div>
                        <div className="text-[11px] text-white/90">{s.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* right — package showcase card */}
            <Reveal delay={0.1}>
              <HeroPackageCard />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── BY INDUSTRY — 2 columns ── */}
      <section className="relative py-16 sm:py-20">
        <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-brand-mint/8 blur-[120px]" />
        <div className="section">
          <Reveal className="mb-12 text-center">
            <SectionLabel>Browse by Industry</SectionLabel>
            <h2 className="mt-4 font-display text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
              We Build for <span className="text-gradient">Every Business</span>
            </h2>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((ind, i) => (
              <Reveal key={ind.id} delay={i * 0.06}>
                <IndustryCard ind={ind} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TrustReviews />
      <WebProcess />

      {/* ── PACKAGES ── */}
      <section id="packages" className="relative py-16 sm:py-20">
        <div className="section">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full neon-border px-5 py-2 text-xs font-bold uppercase tracking-[0.22em]">
              <span className="text-brand-purple-light">Our</span><span className="text-brand-mint">Packages</span>
            </span>
            <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Choose The <span className="text-gradient">Perfect Plan</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/90">
              Transparent pricing. Pick a package and complete onboarding, we handle the rest.
            </p>
            <SecurePaymentBadge className="mt-5 justify-center" />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {PACKAGES.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.07}>
                <div className={`relative flex h-full flex-col rounded-3xl p-4 xl:p-6 transition-all duration-300 hover:-translate-y-2 ${p.popular ? "neon-border shadow-glow-purple" : "glass hover:shadow-glow-purple"}`}>
                  {p.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-mint px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-ink shadow-glow-mint">Most Popular</span>}
                  <div className="text-sm font-semibold uppercase tracking-wide text-brand-mint">{p.name}</div>
                  <div className="mt-2">
                    {!p.contact ? (
                      <div className="flex items-end gap-1">
                        <span className="font-display text-3xl xl:text-4xl font-extrabold text-white">{p.price}</span>
                        <span className="mb-1 text-xs text-white/90">one-time</span>
                      </div>
                    ) : (
                      <span className="inline-block rounded-full border border-brand-mint/30 bg-brand-mint/10 px-3 py-1 text-xs font-semibold text-brand-mint">Contact Us</span>
                    )}
                  </div>
                  <p className="mt-2 text-sm leading-snug text-white/90">{p.tagline}</p>
                  <ul className="mt-5 flex-1 space-y-3 border-t border-white/10 pt-5">
                    {p.includes.map((it) => (
                      <li key={it} className="flex items-start gap-2 text-xs xl:text-sm text-white/75"><Check size={14} className="mt-0.5 shrink-0 text-brand-mint" /> {it}</li>
                    ))}
                  </ul>
                  {p.paymentLink ? (
                    <a href={p.paymentLink} target="_blank" rel="noreferrer"
                      className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-mint px-5 py-3 text-sm font-bold text-ink shadow-glow-mint transition-all hover:-translate-y-0.5 hover:brightness-110">
                      Get Started <ArrowRight size={15} />
                    </a>
                  ) : (
                    <button onClick={() => document.getElementById("onboard")?.scrollIntoView({ behavior: "smooth" })}
                      className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-mint px-5 py-3 text-sm font-bold text-ink shadow-glow-mint transition-all hover:-translate-y-0.5 hover:brightness-110">
                      Get Started <ArrowRight size={15} />
                    </button>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-white/90">Need something custom? Mention it in the form and we&apos;ll send a tailored quote.</p>
        </div>
      </section>

      {/* ── GET IN TOUCH ── */}
      <section id="onboard" className="relative py-16 sm:py-20">
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-brand-mint/10 blur-[130px]" />
        <div className="section">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl neon-border px-6 py-12 sm:px-12 sm:py-14">
              <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-brand-purple/30 blur-[100px]" />
              <div className="pointer-events-none absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-brand-mint/20 blur-[100px]" />
              <div className="relative grid items-start gap-10 lg:grid-cols-2">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-brand-mint">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-mint shadow-glow-mint" /> Get In Touch
                  </span>
                  <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                    Let&apos;s Build Your <span className="text-gradient">Website</span>
                  </h2>
                  <p className="mt-5 max-w-lg text-base leading-relaxed text-white/90">
                    Send us a quick message and our team will reach out within 24–48 hours to get started.
                  </p>
                  <ul className="mt-8 space-y-3">
                    {[{ label: "Reply within 24–48 hours" }, { label: "Free strategy consultation" }, { label: "No spam, ever" }].map((t) => (
                      <li key={t.label} className="flex items-center gap-3 text-sm text-white/70">
                        <span className="h-2 w-2 rounded-full bg-brand-mint shadow-glow-mint" />
                        {t.label}
                      </li>
                    ))}
                  </ul>
                </div>
                <WebContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function WebContactForm() {
  const fieldCls = "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/35 outline-none transition-colors focus:border-brand-mint/60";
  const [form, setForm] = useState({ name: "", email: "", phone: "", business: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const set = (k: string, v: string) => { setForm((p) => ({ ...p, [k]: v })); if (status === "error") setStatus("idle"); };

  const submit = async () => {
    if (!form.name || !form.email) { setStatus("error"); setErrorMsg("Please fill in your name and email."); return; }
    setStatus("sending"); setErrorMsg("");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, service: "Web Development" }) });
      const data = await res.json().catch(() => ({}));
      if (res.ok) setStatus("sent");
      else { setStatus("error"); setErrorMsg(data.error || "Something went wrong."); }
    } catch { setStatus("error"); setErrorMsg("Network error. Please try again."); }
  };

  if (status === "sent") {
    return (
      <div className="flex min-h-[340px] flex-col items-center justify-center rounded-3xl glass-strong p-10 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-brand-mint/15 text-brand-mint shadow-glow-mint"><CheckCircle2 size={34} /></span>
        <h3 className="mt-5 font-display text-2xl font-bold text-white">Message sent!</h3>
        <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/90">Thanks {form.name.split(" ")[0] || "there"}, we&apos;ll be in touch within 24–48 hours.</p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl glass-strong p-6 sm:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-white/80">Full Name <span className="text-brand-mint">*</span></label>
          <input className={fieldCls} value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Your name" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-white/80">Phone</label>
          <input type="tel" className={fieldCls} value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+1 (___) ___-____" />
        </div>
      </div>
      <div className="mt-4">
        <label className="mb-1.5 block text-sm font-medium text-white/80">Email <span className="text-brand-mint">*</span></label>
        <input type="email" className={fieldCls} value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="you@business.com" />
      </div>
      <div className="mt-4">
        <label className="mb-1.5 block text-sm font-medium text-white/80">Business Name</label>
        <input className={fieldCls} value={form.business} onChange={(e) => set("business", e.target.value)} placeholder="ABC Company" />
      </div>
      <div className="mt-4">
        <label className="mb-1.5 block text-sm font-medium text-white/80">Message</label>
        <textarea className={`${fieldCls} min-h-[110px] resize-y leading-relaxed`} value={form.message} onChange={(e) => set("message", e.target.value)} placeholder="Tell us about your project or goals..." />
      </div>
      {status === "error" && <p className="mt-4 rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-2.5 text-sm text-red-300">{errorMsg}</p>}
      <button onClick={submit} disabled={status === "sending"}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-mint px-7 py-3.5 text-sm font-bold text-ink shadow-glow-mint transition-all hover:-translate-y-0.5 hover:brightness-110 disabled:opacity-60">
        <Send size={16} /> {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </div>
  );
}
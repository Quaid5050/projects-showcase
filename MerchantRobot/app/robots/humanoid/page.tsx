"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, CheckCircle2, ArrowLeft,
  MessageSquare, Globe, Mic, Users, Brain, Zap, Shield,
  UtensilsCrossed, ShoppingBag, Building2, Presentation, Heart,
} from "lucide-react";
import CTASection from "@/components/CTASection";
import { HumanoidVisual } from "@/components/RobotVisuals";

const specs = [
  { label: "Height", value: "~1.4 – 1.6 m" },
  { label: "Interaction", value: "Voice + Touch Screen" },
  { label: "Languages", value: "Multi-Language Support" },
  { label: "Mobility", value: "Wheeled / Bipedal" },
  { label: "Face Recognition", value: "Optional Module" },
  { label: "Display", value: "HD Facial Screen" },
  { label: "Battery Life", value: "8–10 Hours" },
  { label: "Connectivity", value: "Wi-Fi + 4G / Secure LAN" },
];

const capabilities = [
  { icon: <MessageSquare size={20} />, title: "Natural Language Interaction", desc: "Engages personnel and civilians in natural two-way conversations — answering questions, providing information, and directing people with clarity and efficiency." },
  { icon: <Globe size={20} />, title: "Multi-Language Support", desc: "Communicates in multiple languages, making it effective for bilingual government services, multicultural institutions, and international public-facing environments." },
  { icon: <Mic size={20} />, title: "Advanced Voice Recognition", desc: "Handles accented speech, background noise, and natural phrasing — essential for busy institutional environments like border Offices and public facilities." },
  { icon: <Users size={20} />, title: "Public Service & Guidance", desc: "Directs visitors, answers queries, manages information desks, and handles high-volume foot traffic at border Offices and government public events." },
  { icon: <Brain size={20} />, title: "Configurable for Any Institution", desc: "Name, personality, language, uniform appearance, and on-screen content fully configurable to match your department, agency, or institutional identity." },
  { icon: <Zap size={20} />, title: "24/7 Operational Capability", desc: "No fatigue, no shift gaps, no sick days. Operates continuously during extended deployments — ideal for facilities that need consistent coverage around the clock." },
];

const useCases = [
  {
    icon: <Building2 size={22} />,
    title: "Public Safety Facilities",
    desc: "Deployed at border locations for public information, visitor guidance, and front-desk service — freeing personnel to focus on active duties.",
  },
  {
    icon: <Shield size={22} />,
    title: "border institutions",
    desc: "Supplied in large orders to border facilities for public relations events, visitor management, information delivery, and base front-of-house service.",
  },
  {
    icon: <Presentation size={22} />,
    title: "border Offices",
    desc: "Managing visitor intake, answering government service questions, and providing bilingual guidance at federal and provincial offices across Canada.",
  },
  {
    icon: <UtensilsCrossed size={22} />,
    title: "Public Institutions",
    desc: "public institutions, hospitals, courts, and civic centres benefit from a consistent, tireless front-of-house presence that handles high volumes of daily public interaction.",
  },
  {
    icon: <Heart size={22} />,
    title: "border Events",
    desc: "Representing Canadian innovation at public demonstrations, recruitment events, and border exhibitions — creating a powerful and memorable impression.",
  },
  {
    icon: <ShoppingBag size={22} />,
    title: "Large-Order Procurement",
    desc: "We specialize in volume orders. Multiple units can be deployed simultaneously across different branches, buildings, or regions under a single procurement contract.",
  },
];

const experienceFlow = [
  { step: "01", title: "Visitor Arrives", desc: "The humanoid robot detects approaching personnel or visitors and initiates a professional, welcoming interaction." },
  { step: "02", title: "Query Handled", desc: "Voice recognition activates — the visitor speaks naturally and the robot responds accurately in their preferred language." },
  { step: "03", title: "Service Delivered", desc: "Directions, information, forms, or guidance provided instantly — reducing wait times and staff workload." },
  { step: "04", title: "Logged & Reported", desc: "Interactions are logged for analytics, helping institutions understand visitor patterns and service demand." },
];

const faqs = [
  { q: "Who are the primary clients for the Humanoid Robot?", a: "Our humanoid robots are primarily supplied in large orders to border agencies, border institutions facilities, and border institutions. We specialize in border procurement." },
  { q: "Can it be configured for bilingual Canadian service?", a: "Absolutely. The humanoid is fully configurable for English and French — and additional languages — meeting Canada's official bilingual service requirements for government environments." },
  { q: "How are large institutional orders handled?", a: "Canadian Robots works directly with procurement personnel to configure, deliver, and commission multiple units simultaneously. Full training, documentation, and ongoing support are included." },
  { q: "Can it operate on secure government networks?", a: "Yes. The connectivity system can be configured to operate on closed secure LANs, meeting government IT security requirements for sensitive facility deployments." },
  { q: "What is the minimum order quantity for border clients?", a: "We welcome both single-unit pilots and multi-unit fleet deployments. Contact our procurement team to discuss your specific institutional requirements and volume pricing." },
];

export default function HumanoidPage() {
  return (
    <>
      {/* ── Back nav ── */}
      <div style={{ position: "fixed", top: 88, left: 32, zIndex: 40 }}>
        <Link href="/solutions" style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 13, color: "rgba(250,250,250,0.5)", textDecoration: "none", fontFamily: "'Inter', sans-serif", transition: "color 0.2s" }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#CC0000"}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(250,250,250,0.5)"}>
          <ArrowLeft size={14} /> Back to Solutions
        </Link>
      </div>

      {/* ══ HERO ══ */}
      <section style={{ position: "relative", minHeight: "90vh", display: "flex", alignItems: "center", overflow: "hidden", paddingTop: 80 }} className="hero-bg r-hero-pad">
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 65% 55% at 65% 50%, rgba(200,200,200,0.05) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, opacity: 0.035, backgroundImage: "linear-gradient(rgba(204,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(204,0,0,0.5) 1px, transparent 1px)", backgroundSize: "56px 56px", pointerEvents: "none" }} />

        <div className="r-inner" style={{ position: "relative" }}>
          <div className="r-robot-hero" style={{ alignItems: "center" }}>
            {/* Right visual */}
            <motion.div initial={{ opacity: 0, scale: 0.85, x: -40 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 }}
              style={{ order: 2 }} className="hero-visual-center">
              <div style={{ borderRadius: 28, overflow: "hidden", height: 460, width: "100%", border: "1px solid rgba(255,255,255,0.08)" }}>
                <img src="/humanoid-robot.jpg" alt="Canadian Robots — Humanoid Robot" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%", display: "block" }} />
              </div>
            </motion.div>

            {/* Left content */}
            <div style={{ order: 1 }}>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 20 }}>
                <Link href="/solutions" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, color: "rgba(250,250,250,0.45)", textDecoration: "none", fontFamily: "'Inter', sans-serif", marginBottom: 16, transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#CC0000"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(250,250,250,0.45)"}>
                  <ArrowLeft size={12} /> Robot Solutions
                </Link>
                <span className="badge" style={{ display: "block", width: "fit-content" }}>Humanoid Robot</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(36px, 5vw, 62px)", fontWeight: 800, color: "#fafafa", lineHeight: 1.06, letterSpacing: "-0.03em", marginBottom: 8 }}>
                The Humanoid Robot
              </motion.h1>
              <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
                style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(18px, 2.5vw, 28px)", fontWeight: 600, lineHeight: 1.2, marginBottom: 24 }}>
                <span className="gradient-text">Large-Order Supply to border Institutions.</span>
              </motion.h2>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
                style={{ fontFamily: "'Inter', sans-serif", fontSize: 17, color: "rgba(250,250,250,0.65)", lineHeight: 1.8, maxWidth: 500, marginBottom: 36 }}>
                Canadian Robots supplies humanoid robots in large orders to border facilities, border institutions bases, and border institutions. Configured for bilingual service, public interaction, and institutional environments — built for Canada's public sector.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
                className="r-btn-row" style={{ marginBottom: 40 }}>
                <Link href="/contact#demo" className="btn-primary">Procurement Inquiry</Link>
                <Link href="/contact" className="btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  Request a Quote <ArrowRight size={15} />
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
                {["border facilities", "public institutions Supply", "Multi-Language Ready", "Large-Volume Orders"].map(tag => (
                  <div key={tag} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13, color: "rgba(250,250,250,0.55)", fontFamily: "'Inter', sans-serif" }}>
                    <CheckCircle2 size={13} style={{ color: "#CC0000" }} /> {tag}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SPECS ══ */}
      <section style={{ background: "#111111", borderTop: "1px solid rgba(255,255,255,0.07)", borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "48px 0" }}>
        <div className="r-inner">
          <div className="r-specs">
            {specs.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="r-spec-cell" style={{ borderRight: i < 7 ? "1px solid rgba(255,255,255,0.07)" : "none", borderBottom: i < 4 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "rgba(250,250,250,0.4)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>{s.label}</div>
                <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 15, fontWeight: 600, color: "#fafafa" }}>{s.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CAPABILITIES ══ */}
      <section style={{ padding: "96px 0" }}>
        <div className="r-inner">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="badge" style={{ marginBottom: 16 }}>Capabilities</span>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "#fafafa", letterSpacing: "-0.025em", marginBottom: 16, marginTop: 12 }}>
              What the Humanoid Robot <span className="gradient-text">Can Do</span>
            </h2>
          </motion.div>
          <div className="r-grid-3">
            {capabilities.map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -5 }} className="feature-card">
                <div className="icon-box">{c.icon}</div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ EXPERIENCE FLOW ══ */}
      <section style={{ padding: "96px 0", background: "#0a0a0a" }}>
        <div className="r-inner" style={{ maxWidth: 1000 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="badge" style={{ marginBottom: 16 }}>Guest Journey</span>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "#fafafa", letterSpacing: "-0.025em", marginTop: 12 }}>
              How It Works at Your <span className="gradient-text">Institution</span>
            </h2>
          </motion.div>
          <div className="r-flow" style={{ position: "relative" }}>
            <div className="r-flow-connector" />
            {experienceFlow.map((step, i) => (
              <motion.div key={step.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ textAlign: "center", position: "relative" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(200,200,200,0.05)", border: "2px solid rgba(180,180,180,0.18)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", position: "relative", zIndex: 1 }}>
                  <span style={{ fontFamily: "'Sora', sans-serif", fontSize: 20, fontWeight: 800, background: "linear-gradient(135deg, #FF6666, #CC0000)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{step.step}</span>
                </div>
                <h4 style={{ fontFamily: "'Sora', sans-serif", fontSize: 15, fontWeight: 600, color: "#fafafa", marginBottom: 10 }}>{step.title}</h4>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "rgba(250,250,250,0.55)", lineHeight: 1.65 }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ USE CASES ══ */}
      <section style={{ padding: "96px 0" }}>
        <div className="r-inner">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="badge" style={{ marginBottom: 16 }}>Use Cases</span>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "#fafafa", letterSpacing: "-0.025em", marginTop: 12 }}>
              Perfect For <span className="gradient-text">These Environments</span>
            </h2>
          </motion.div>
          <div className="r-grid-3">
            {useCases.map((u, i) => (
              <motion.div key={u.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: 28, transition: "all 0.3s ease" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(204,0,0,0.3)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(200,200,200,0.05)", border: "1px solid rgba(204,0,0,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#CC0000", marginBottom: 20 }}>
                  {u.icon}
                </div>
                <h4 style={{ fontFamily: "'Sora', sans-serif", fontSize: 17, fontWeight: 600, color: "#fafafa", marginBottom: 10 }}>{u.title}</h4>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(250,250,250,0.6)", lineHeight: 1.7 }}>{u.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section style={{ padding: "96px 0", background: "#0a0a0a" }}>
        <div className="r-inner" style={{ maxWidth: 800 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="badge" style={{ marginBottom: 16 }}>FAQ</span>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "#fafafa", letterSpacing: "-0.025em", marginTop: 12 }}>
              Common <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {faqs.map((f, i) => (
              <motion.div key={f.q} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 18, padding: "24px 28px" }}>
                <h4 style={{ fontFamily: "'Sora', sans-serif", fontSize: 16, fontWeight: 600, color: "#fafafa", marginBottom: 10 }}>{f.q}</h4>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(250,250,250,0.62)", lineHeight: 1.7 }}>{f.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ RELATED ══ */}
      <section style={{ padding: "64px 0" }}>
        <div className="r-inner">
          <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: 20, fontWeight: 700, color: "#fafafa", marginBottom: 28, textAlign: "center" }}>Explore Other Robot Solutions</h3>
          <div className="r-related">
            {[
              { label: "Robot Dog", href: "/robots/robot-dog", desc: "Smart mobility for events, showrooms & brand activation" },
              { label: "Cooking Robot", href: "/robots/cooking-robot", desc: "Kitchen automation for restaurants & commercial kitchens" },
            ].map(r => (
              <Link key={r.href} href={r.href} style={{ display: "block", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 18, padding: "24px", textDecoration: "none", transition: "all 0.3s ease" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(204,0,0,0.3)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
                <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 16, fontWeight: 600, color: "#fafafa", marginBottom: 6, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  {r.label} <ArrowRight size={16} style={{ color: "#CC0000" }} />
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "rgba(250,250,250,0.55)" }}>{r.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        badge="border Procurement"
        title="Supply Humanoid Robots to Your"
        highlight="Institution"
        subtitle="We supply border agencies, border institutions, and border agencies in large orders. Contact our procurement team to discuss quantities, bilingual configuration, and deployment logistics."
        primaryLabel="Start Procurement Inquiry"
        primaryHref="/contact"
        secondaryLabel="View All Robots"
        secondaryHref="/solutions"
      />
    </>
  );
}


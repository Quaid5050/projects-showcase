"use client";

import Link from "next/link";
import Image from "next/image";
import CTABar from "@/components/ui/CTABar";
import { ArrowRightIcon, CheckCircleIcon, PhoneIcon } from "@/components/icons/Icons";
import { SITE } from "@/lib/data";

const SERVICES = [
  {
    title: "Garage Door Repair",
    desc: "Broken panels, cables, tracks, rollers — we diagnose and fix the problem fast with quality parts that last.",
    img: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600&q=80",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="#F26522" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Spring Replacement",
    desc: "Torsion and extension spring replacement done safely by trained technicians. Never a DIY job — let us handle it right.",
    img: "/new/spring.jpeg",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#F26522" strokeWidth="2" />
        <path d="M8 12C8 12 9 8 12 8C15 8 16 12 16 12" stroke="#F26522" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 12C8 12 9 16 12 16C15 16 16 12 16 12" stroke="#F26522" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Opener Service & Install",
    desc: "LiftMaster and Manaras opener repair, reprogramming, smart home integration, and full new installations.",
    img: "/new/serviceheroo.jpeg",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="6" width="20" height="12" rx="2" stroke="#F26522" strokeWidth="2" />
        <circle cx="8" cy="12" r="2" stroke="#F26522" strokeWidth="2" />
        <path d="M13 10H18M13 14H16" stroke="#F26522" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Preventative Maintenance",
    desc: "Seasonal tune-ups to extend the life of your door system and catch small issues before they turn into expensive repairs.",
    img: "/new/mainta.jpeg",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="#F26522" strokeWidth="2" strokeLinecap="round" />
        <path d="M9 12l2 2 4-4" stroke="#F26522" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Cable & Track Repair",
    desc: "Realignment, cable rewinding, and track repairs to keep your door running smoothly and safely every time.",
    img: "/new/cable.jpeg",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M4 6h16M4 12h16M4 18h8" stroke="#F26522" strokeWidth="2" strokeLinecap="round" />
        <circle cx="19" cy="18" r="3" stroke="#F26522" strokeWidth="2" />
        <path d="M19 15V18L21 20" stroke="#F26522" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Weather Seal Replacement",
    desc: "Bottom seal and perimeter seal replacement to keep your garage insulated, pest-free, and weather-tight year-round.",
    img: "/new/weather.jpeg",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 6V12C3 16.5 7 20.7 12 22C17 20.7 21 16.5 21 12V6L12 2Z" stroke="#F26522" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12L11 14L15 10" stroke="#F26522" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const PROCESS = [
  { step: "01", title: "Call or Book Online", desc: "Reach us by phone or submit a request — we respond within 1 business day." },
  { step: "02", title: "Free Diagnosis", desc: "Our technician arrives on time, inspects the problem, and gives you a straight answer." },
  { step: "03", title: "Clear Quote", desc: "We give you a firm quote before any work starts. No surprise charges." },
  { step: "04", title: "Fixed Right", desc: "We complete the work professionally and test everything before we leave." },
];

const FEATURES = [
  { title: "Fast Response", desc: "We aim to respond within 1 business day." },
  { title: "Qualified Technicians", desc: "Experienced, trained, and professional every visit." },
  { title: "Quality Parts", desc: "We use manufacturer-approved parts that last." },
  { title: "Honest Pricing", desc: "Clear quotes. No hidden fees. No pressure." },
  { title: "Local & Reliable", desc: "Proudly serving Southwestern Ontario." },
];

const WHY = [
  "Fast, same-area response times",
  "Experienced technicians on every job",
  "Transparent quotes before work begins",
  "Quality parts from trusted brands",
  "Service on all makes and models",
  "Proudly serving Southwestern Ontario",
];

export default function ServicesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "75vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <Image
          src="/new/serviceheroo.jpeg"
          alt="Garage Door Service"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority

        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(8,8,8,.97) 0%, rgba(8,8,8,.82) 50%, rgba(8,8,8,.15) 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: "1280px", margin: "0 auto", padding: "5rem 1.5rem", width: "100%" }}>
          <p style={{ color: "#F26522", fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>
            Service &amp; Repairs
          </p>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.8rem, 7vw, 5.5rem)", color: "#FFFFFF", lineHeight: 1.0, letterSpacing: "0.02em", marginBottom: "1.25rem" }}>
            FAST.<br />RELIABLE.<br /><span style={{ color: "#F26522" }}>PROFESSIONAL.</span>
          </h1>
          <p style={{ color: "#D7D7D7", fontFamily: "'Inter', sans-serif", fontSize: "1rem", lineHeight: 1.7, maxWidth: "400px", marginBottom: "2rem" }}>
            Garage door giving you trouble? Our technicians are ready to diagnose, repair, and restore your door system quickly and correctly — the first time.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
            <Link href="/contact" className="btn-primary">Book Service <ArrowRightIcon size={16} color="#fff" /></Link>
            <a
              href={`tel:${SITE.phoneFull}`}
              style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#fff", textDecoration: "none", fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "1.1rem", letterSpacing: "0.02em" }}
            >
              <PhoneIcon size={20} color="#F26522" />
              {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ── FEATURE BAR ── */}
      <section style={{ backgroundColor: "#0D0D0D", borderBottom: "1px solid #1A1A1A" }}>
        <div className="nb-features5" style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>
          {FEATURES.map((f, i) => (
            <div key={f.title} style={{ padding: "1.75rem 1rem", borderRight: i < 4 ? "1px solid #1A1A1A" : "none" }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, color: "#FFFFFF", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "0.4rem" }}>
                {f.title}
              </div>
              <div style={{ color: "#7C7C7C", fontSize: "0.75rem", fontFamily: "'Inter', sans-serif", lineHeight: 1.5 }}>
                {f.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section style={{ backgroundColor: "#0B0B0B", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{ display: "inline-block", width: "40px", height: "3px", backgroundColor: "#F26522", marginBottom: "1rem" }} />
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", color: "#FFFFFF", letterSpacing: "0.06em" }}>
              What We Repair &amp; Service
            </h2>
            <p style={{ color: "#7C7C7C", fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", marginTop: "0.75rem", maxWidth: "480px", margin: "0.75rem auto 0" }}>
              From broken springs to full opener installs — we handle it all, fast and right.
            </p>
          </div>
          <div className="nb-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
            {SERVICES.map((s) => (
              <div
                key={s.title}
                style={{ backgroundColor: "#111", border: "1px solid #2C2C2C", borderRadius: "6px", overflow: "hidden", transition: "border-color 0.2s, transform 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#F26522"; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#2C2C2C"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
              >
                <div style={{ position: "relative", height: "180px", overflow: "hidden" }}>
                  <Image src={s.img} alt={s.title} fill style={{ objectFit: "cover" }}/>
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,8,8,0) 40%, rgba(8,8,8,0.85) 100%)" }} />
                  <div style={{ position: "absolute", top: "0.75rem", left: "0.75rem", backgroundColor: "rgba(8,8,8,0.85)", border: "1px solid #2C2C2C", borderRadius: "4px", padding: "0.4rem" }}>
                    {s.icon}
                  </div>
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <div style={{ width: "28px", height: "3px", backgroundColor: "#F26522", marginBottom: "0.75rem" }} />
                  <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.25rem", color: "#FFFFFF", letterSpacing: "0.05em", marginBottom: "0.5rem" }}>{s.title}</h3>
                  <p style={{ color: "#A3A3A3", fontSize: "0.82rem", fontFamily: "'Inter', sans-serif", lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ backgroundColor: "#121212", padding: "5rem 1.5rem", borderTop: "1px solid #1A1A1A" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div style={{ display: "inline-block", width: "40px", height: "3px", backgroundColor: "#F26522", marginBottom: "1rem" }} />
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", color: "#FFFFFF", letterSpacing: "0.06em" }}>
              How the Process Works
            </h2>
            <p style={{ color: "#7C7C7C", fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", marginTop: "0.75rem" }}>
              Simple, transparent, and built around your schedule.
            </p>
          </div>
          <div className="nb-features" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0" }}>
            {PROCESS.map((p, i) => (
              <div
                key={p.step}
                style={{
                  padding: "2.5rem 2rem",
                  borderRight: i < 3 ? "1px solid #1A1A1A" : "none",
                  position: "relative",
                  textAlign: "center",
                }}
              >
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "4rem", color: "#F26522", opacity: 0.15, lineHeight: 1, marginBottom: "0.5rem" }}>
                  {p.step}
                </div>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    border: "2px solid #F26522",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "-3rem auto 1rem",
                    backgroundColor: "#121212",
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1.1rem",
                    color: "#F26522",
                    letterSpacing: "0.05em",
                  }}
                >
                  {p.step}
                </div>
                <h4 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, color: "#FFFFFF", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "0.6rem" }}>
                  {p.title}
                </h4>
                <p style={{ color: "#7C7C7C", fontSize: "0.82rem", fontFamily: "'Inter', sans-serif", lineHeight: 1.65 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY NORTHBUILT ── */}
      <section style={{ backgroundColor: "#0B0B0B", padding: "5rem 1.5rem", position: "relative", overflow: "hidden" }}>
        {/* Mountain backdrop (full scene) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/moun.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center bottom",
            backgroundSize: "cover",
            opacity: 0.9,
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
        {/* Fleet truck image, right side */}
        <img
          src="/new/foot.jpeg"
          alt="Northbuilt Truck"
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            height: "100%",
            width: "min(70%, 1100px)",
            objectFit: "cover",
            zIndex: 0,
            pointerEvents: "none",
            WebkitMaskImage: "linear-gradient(90deg, transparent 0%, #000 22%, #000 100%)",
            maskImage: "linear-gradient(90deg, transparent 0%, #000 22%, #000 100%)",
          }}
        />
        {/* Left black shade for text legibility */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg, #0B0B0B 0%, rgba(11,11,11,0.8) 20%, rgba(11,11,11,0.25) 40%, rgba(11,11,11,0) 52%)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", zIndex: 2, maxWidth: "1280px", margin: "0 auto", minHeight: "340px", display: "flex", alignItems: "center" }}>
          <div style={{ maxWidth: "520px" }}>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#FFFFFF", letterSpacing: "0.04em", marginBottom: "0.25rem", lineHeight: 1.05 }}>
              Why Homeowners &amp;<br />Businesses Choose <span style={{ color: "#F26522" }}>Northbuilt</span>
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "1.5rem" }}>
              {WHY.map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <CheckCircleIcon size={18} color="#F26522" />
                  <span style={{ color: "#D7D7D7", fontFamily: "'Inter', sans-serif", fontSize: "0.88rem" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABar title="Need Service Now?" subtitle="We aim to respond within 1 business day." />
    </>
  );
}
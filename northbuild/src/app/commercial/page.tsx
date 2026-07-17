"use client";

import Link from "next/link";
import Image from "next/image";
import CTABar from "@/components/ui/CTABar";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  IconBadge,
  ShieldIcon,
  WrenchIcon,
  LockIcon,
  MapleLeafIcon,
} from "@/components/icons/Icons";

const SOLUTIONS = [
  {
    title: "Commercial Doors",
    desc: "Insulated steel, high cycle, and specialty doors built for performance and security.",
    href: "/commercial",
    img: "/comm1.png",
    btnLabel: "Explore Doors",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="18" rx="1" stroke="#F26522" strokeWidth="2" />
        <path d="M2 9H22M2 15H22M8 3V21M16 3V21" stroke="#F26522" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Dock Equipment",
    desc: "Dock levelers, seals, bumpers, and restraints to keep your operation moving.",
    href: "/commercial",
    img: "/comm2.png",
    btnLabel: "Explore Dock Equipment",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="1" y="10" width="22" height="10" rx="1" stroke="#F26522" strokeWidth="2" />
        <path d="M5 10V6M19 10V6M5 6H19" stroke="#F26522" strokeWidth="2" strokeLinecap="round" />
        <circle cx="7" cy="20" r="2" stroke="#F26522" strokeWidth="2" />
        <circle cx="17" cy="20" r="2" stroke="#F26522" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Service & Repairs",
    desc: "Fast, professional repairs and preventative maintenance to reduce downtime.",
    href: "/services",
    img: "/comm3.png",
    btnLabel: "View Service Options",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke="#F26522" strokeWidth="2" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" stroke="#F26522" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Preventative Maintenance",
    desc: "Customized maintenance programs to extend the life of your equipment.",
    href: "/services",
    img: "/new/mainta.jpeg",
    btnLabel: "Learn More",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="#F26522" strokeWidth="2" strokeLinecap="round" />
        <path d="M9 12l2 2 4-4" stroke="#F26522" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const GALLERY = [
  "/rescom1.png",
  "/rescom2.png",
  "/rescom3.png",
  "/rescom4.png",
  "/comm2.png",
];

const FEATURES = [
  { title: "Industry Leading Durability", desc: "Premium products built to withstand demanding environments.", icon: <ShieldIcon size={24} /> },
  { title: "Expert Installation", desc: "Installed right the first time by experienced professionals.", icon: <WrenchIcon size={24} /> },
  { title: "Reliable Performance", desc: "Minimize downtime with solutions you can count on every day.", icon: <CheckCircleIcon size={24} /> },
  { title: "Safety Focused", desc: "Engineered with safety features to protect your people and your business.", icon: <LockIcon size={24} color="#F26522" /> },
  { title: "Local Service You Can Trust", desc: "Proudly local. Fast response and ongoing support when you need it most.", icon: <MapleLeafIcon size={24} /> },
];

const WHY = [
  "Commercial door & dock experts",
  "Quality products from trusted brands",
  "Skilled installation and responsive service",
  "Preventative maintenance that saves you money",
  "Proudly serving Southwestern Ontario",
];

export default function CommercialPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "80vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <Image
          src="/new/foot.jpeg"
          alt="Commercial Dock Doors"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority

        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(8,8,8,.96) 0%, rgba(8,8,8,.80) 50%, rgba(8,8,8,.15) 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: "1280px", margin: "0 auto", padding: "5rem 1.5rem", width: "100%" }}>
          <p style={{ color: "#F26522", fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>
            Commercial Doors &amp; Dock Equipment
          </p>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.8rem, 7vw, 5.5rem)", color: "#FFFFFF", lineHeight: 1.0, letterSpacing: "0.02em", marginBottom: "1.25rem" }}>
            BUILT TO WORK.<br />BUILT TO LAST.<br /><span style={{ color: "#F26522" }}>BUILT FOR BUSINESS.</span>
          </h1>
          <p style={{ color: "#D7D7D7", fontFamily: "'Inter', sans-serif", fontSize: "1rem", lineHeight: 1.7, maxWidth: "400px", marginBottom: "2rem" }}>
            High performance commercial doors and dock solutions designed for reliability, safety, and efficiency. Proudly serving businesses across Southwestern Ontario.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">Request a Free Quote <ArrowRightIcon size={16} color="#fff" /></Link>
            <Link href="/services" className="btn-secondary">View Our Services</Link>
          </div>
        </div>
      </section>

      {/* ── FEATURE BAR ── */}
      <section style={{ backgroundColor: "#0D0D0D", borderBottom: "1px solid #1A1A1A" }}>
        <div className="nb-features5" style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>
          {FEATURES.map((f, i) => (
            <div key={f.title} style={{ padding: "1.75rem 1rem", borderRight: i < 4 ? "1px solid #1A1A1A" : "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <IconBadge>{f.icon}</IconBadge>
              <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, color: "#FFFFFF", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.07em" }}>
                {f.title}
              </div>
              <div style={{ color: "#7C7C7C", fontSize: "0.75rem", fontFamily: "'Inter', sans-serif", lineHeight: 1.5 }}>
                {f.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SOLUTIONS GRID ── */}
      <section style={{ backgroundColor: "#0B0B0B", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#FFFFFF", letterSpacing: "0.06em", textAlign: "center", marginBottom: "2.5rem" }}>
            Commercial Solutions Built for Your Business
          </h2>
          <div className="nb-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
            {SOLUTIONS.map((s) => (
              <div
                key={s.title}
                style={{ backgroundColor: "#111", border: "1px solid #2C2C2C", borderRadius: "4px", overflow: "hidden", transition: "border-color 0.2s, transform 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#F26522"; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#2C2C2C"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
              >
                <div style={{ position: "relative", height: "190px", overflow: "hidden" }}>
                  <Image src={s.img} alt={s.title} fill style={{ objectFit: "cover" }}/>
                  {/* icon overlay top-left */}
                  <div style={{ position: "absolute", top: "0.75rem", left: "0.75rem" }}>
                    <IconBadge size={42} radius={8} tone="overlay">{s.icon}</IconBadge>
                  </div>
                </div>
                <div style={{ padding: "1.25rem" }}>
                  <div style={{ width: "24px", height: "3px", backgroundColor: "#F26522", marginBottom: "0.6rem" }} />
                  <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.2rem", color: "#FFFFFF", letterSpacing: "0.05em", marginBottom: "0.35rem" }}>{s.title}</h3>
                  <p style={{ color: "#A3A3A3", fontSize: "0.78rem", fontFamily: "'Inter', sans-serif", lineHeight: 1.5 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section style={{ backgroundColor: "#121212", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#FFFFFF", letterSpacing: "0.06em", textAlign: "center", marginBottom: "2.5rem" }}>
            Recent Commercial Projects
          </h2>
          <div className="nb-gallery" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "0.75rem", marginBottom: "1.5rem" }}>
            {GALLERY.map((img, i) => (
              <div
                key={i}
                style={{ position: "relative", height: "180px", borderRadius: "4px", overflow: "hidden", border: "1px solid #2C2C2C", transition: "border-color 0.2s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#F26522")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#2C2C2C")}
              >
                <Image src={img} alt={`Project ${i + 1}`} fill style={{ objectFit: "cover" }}/>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", borderTop: "1px solid #1A1A1A", paddingTop: "1.5rem" }}>
            <Link href="/contact" className="btn-secondary">View More Projects <ArrowRightIcon size={14} color="#fff" /></Link>
          </div>
        </div>
      </section>

      {/* ── WHY NORTHBUILT ── */}
      <section style={{ backgroundColor: "#0B0B0B", padding: "5rem 1.5rem", position: "relative", overflow: "hidden" }}>
        {/* Commercial dock + truck image, right side */}
        <img
          src="/newcar.png"
          alt="Northbuilt Commercial Truck"
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
              Why Businesses<br />Choose <span style={{ color: "#F26522" }}>Northbuilt</span>
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

      <CTABar title="Ready to Improve Your Operation?" subtitle="Contact us today for a free, no-obligation quote." />
    </>
  );
}
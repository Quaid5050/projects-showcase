"use client";

import Link from "next/link";
import Image from "next/image";
import CTABar from "@/components/ui/CTABar";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  IconBadge,
  ShieldIcon,
  TractorIcon,
  LockIcon,
  MapleLeafIcon,
} from "@/components/icons/Icons";

const SOLUTIONS = [
  {
    title: "Farm Building Doors",
    desc: "Insulated steel doors built to protect your equipment, livestock, and materials year-round.",
    href: "/agricultural",
    img: "/ag1.png",
    btnLabel: "Explore Doors",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M3 12L12 3L21 12V20C21 20.55 20.55 21 20 21H15V16H9V21H4C3.45 21 3 20.55 3 20V12Z" stroke="#F26522" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Agricultural Doors",
    desc: "Large opening solutions for barns, machine shops, storage buildings, and more.",
    href: "/agricultural",
    img: "/ag2.png",
    btnLabel: "View Door Options",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="18" rx="1" stroke="#F26522" strokeWidth="2" />
        <path d="M12 3V21M2 12H22" stroke="#F26522" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Dock Equipment",
    desc: "Dock levelers, seals, bumpers, and restraints designed for ag facilities and loading needs.",
    href: "/commercial",
    img: "/ag3.png",
    btnLabel: "Explore Equipment",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <rect x="1" y="10" width="22" height="10" rx="1" stroke="#F26522" strokeWidth="2" />
        <path d="M5 10V6M19 10V6M5 6H19" stroke="#F26522" strokeWidth="2" strokeLinecap="round" />
        <circle cx="7" cy="20" r="2" stroke="#F26522" strokeWidth="2" />
        <circle cx="17" cy="20" r="2" stroke="#F26522" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Service & Repairs",
    desc: "Fast, reliable service to minimize downtime and keep your operation running strong.",
    href: "/services",
    img: "/ag4.png",
    btnLabel: "View Service Options",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="#F26522" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const GALLERY = [
  "/agp.png",
  "/agp1.png",
  "/agp2.png",
  "/agp4.png",
  "/agp5.png",
];

const FEATURES = [
  { title: "Built for Agriculture", desc: "Heavy-duty doors and equipment made for tough farm environments.", icon: <ShieldIcon size={24} /> },
  { title: "Efficient Operation", desc: "Designed to keep your operation moving smoothly.", icon: <TractorIcon size={24} /> },
  { title: "Durable & Dependable", desc: "Premium materials and workmanship you can count on.", icon: <CheckCircleIcon size={24} /> },
  { title: "Safety Focused", desc: "Engineered with safety features to protect your people and assets.", icon: <LockIcon size={24} color="#F26522" /> },
  { title: "Local Service You Can Trust", desc: "Fast, local support from a team that understands agriculture.", icon: <MapleLeafIcon size={24} /> },
];

const WHY = [
  "Agricultural door & dock specialists",
  "Quality products from trusted brands",
  "Experienced installation & responsive service",
  "Preventative maintenance that saves you money",
  "Proudly serving Southwestern Ontario",
];

export default function AgriculturalPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "80vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <Image
          src="/3rd.png"
          alt="Agricultural Building"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority

        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(8,8,8,.96) 0%, rgba(8,8,8,.80) 50%, rgba(8,8,8,.15) 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: "1280px", margin: "0 auto", padding: "5rem 1.5rem", width: "100%" }}>
          <p style={{ color: "#F26522", fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>
            Agricultural Doors &amp; Equipment
          </p>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.8rem, 7vw, 5.5rem)", color: "#FFFFFF", lineHeight: 1.0, letterSpacing: "0.02em", marginBottom: "1.25rem" }}>
            BUILT FOR THE<br />WORK YOU DO.<br /><span style={{ color: "#F26522" }}>BUILT TO LAST.</span>
          </h1>
          <p style={{ color: "#D7D7D7", fontFamily: "'Inter', sans-serif", fontSize: "1rem", lineHeight: 1.7, maxWidth: "400px", marginBottom: "2rem" }}>
            Reliable agricultural doors and equipment designed to handle the demands of your operation. Proudly serving farms and ag businesses across Southwestern Ontario.
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
            Built for Every Season
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
                  <div style={{ position: "absolute", top: "0.75rem", left: "0.75rem" }}>
                    <IconBadge size={42} radius={8} tone="overlay">{s.icon}</IconBadge>
                  </div>
                </div>
                <div style={{ padding: "1.25rem" }}>
                  <div style={{ width: "24px", height: "3px", backgroundColor: "#F26522", marginBottom: "0.6rem" }} />
                  <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.15rem", color: "#FFFFFF", letterSpacing: "0.05em", marginBottom: "0.35rem" }}>{s.title}</h3>
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
            Recent Agricultural Projects
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
        {/* Agriculture truck image, right side */}
        <img
          src="/new/foot2.jpeg"
          alt="Northbuilt Agricultural Truck"
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
        {/* Left black shade */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg, #0B0B0B 0%, rgba(11,11,11,0.8) 20%, rgba(11,11,11,0.25) 40%, rgba(11,11,11,0) 52%)",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "1280px", margin: "0 auto", minHeight: "340px", display: "flex", alignItems: "center" }}>
          <div style={{ maxWidth: "520px" }}>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#FFFFFF", letterSpacing: "0.04em", marginBottom: "0.25rem", lineHeight: 1.05 }}>
              Why Farmers<br />Choose <span style={{ color: "#F26522" }}>Northbuilt</span>
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

      <CTABar title="Ready to Upgrade Your Operation?" subtitle="Contact us today for a free, no-obligation quote." />
    </>
  );
}
"use client";

import Link from "next/link";
import Image from "next/image";
import CTABar from "@/components/ui/CTABar";
import { ArrowRightIcon, CheckCircleIcon } from "@/components/icons/Icons";

const STYLES = [
  {
    title: "Contemporary",
    desc: "Clean lines and modern designs for a sleek, updated look.",
    href: "/residential",
    img: "/gat1.png",
  },
  {
    title: "Carriage House",
    desc: "Timeless charm with classic elegance and detail.",
    href: "/residential",
    img: "/gat2.png",
  },
  {
    title: "Traditional",
    desc: "Versatile designs that suit any home style.",
    href: "/residential",
    img: "/gat3.png",
  },
  {
    title: "Full View & Aluminum",
    desc: "Modern glass and aluminum options for a bold statement.",
    href: "/residential",
    img: "/new/glassdoor.jpeg",
  },
];

const GALLERY = [
  "/res1.png",
  "/res2.png",
  "/res3.png",
  "/res4.png",
];

const WHY = [
  "Locally owned and operated",
  "Premium products from trusted brands",
  "Expert installation by experienced professionals",
  "Responsive service and honest advice",
  "Proudly serving Southwestern Ontario",
];

const FEATURES = [
  {
    icon: "🛡",
    title: "Built to Last",
    desc: "Quality materials engineered for Canadian weather.",
  },
  {
    icon: "🏠",
    title: "Curb Appeal",
    desc: "Stylish designs to complement any home.",
  },
  {
    icon: "🔇",
    title: "Quiet Operation",
    desc: "Smooth, quiet performance you can count on.",
  },
  {
    icon: "🔧",
    title: "Expert Service",
    desc: "Professional installation and reliable service when you need it.",
  },
];

export default function ResidentialPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "80vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <Image
          src="/1st.png"
          alt="Residential Garage Door"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority

        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(8,8,8,.95) 0%, rgba(8,8,8,.80) 50%, rgba(8,8,8,.20) 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: "1280px", margin: "0 auto", padding: "5rem 1.5rem", width: "100%" }}>
          <p style={{ color: "#F26522", fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>
            Residential Garage Doors
          </p>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.8rem, 7vw, 5.5rem)", color: "#FFFFFF", lineHeight: 1.0, letterSpacing: "0.02em", marginBottom: "1.25rem" }}>
            BEAUTIFUL.<br />DURABLE.<br /><span style={{ color: "#F26522" }}>BUILT FOR HOME.</span>
          </h1>
          <p style={{ color: "#D7D7D7", fontFamily: "'Inter', sans-serif", fontSize: "1rem", lineHeight: 1.7, maxWidth: "380px", marginBottom: "2rem" }}>
            Enhance your home&apos;s curb appeal, security, and value with a quality garage door from Northbuilt Door &amp; Dock. Proudly serving homeowners across Southwestern Ontario.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">Request a Free Quote <ArrowRightIcon size={16} color="#fff" /></Link>
            <Link href="#gallery" className="btn-secondary">View Gallery</Link>
          </div>
        </div>
      </section>

      {/* ── FEATURE BAR ── */}
      <section style={{ backgroundColor: "#0D0D0D", borderBottom: "1px solid #1A1A1A" }}>
        <div className="nb-features" style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              style={{
                padding: "2rem 1.5rem",
                borderRight: i < 3 ? "1px solid #1A1A1A" : "none",
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem",
              }}
            >
              <div style={{ width: "44px", height: "44px", border: "1.5px solid #F26522", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {/* SVG icons per feature */}
                {i === 0 && (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L3 6V12C3 16.5 7 20.7 12 22C17 20.7 21 16.5 21 12V6L12 2Z" stroke="#F26522" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 12L11 14L15 10" stroke="#F26522" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                {i === 1 && (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M3 12L12 3L21 12V20C21 20.55 20.55 21 20 21H15V16H9V21H4C3.45 21 3 20.55 3 20V12Z" stroke="#F26522" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                {i === 2 && (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="#F26522" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23 9L17 15M17 9L23 15" stroke="#F26522" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                )}
                {i === 3 && (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="#F26522" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, color: "#FFFFFF", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.35rem" }}>
                  {f.title}
                </div>
                <div style={{ color: "#7C7C7C", fontSize: "0.78rem", fontFamily: "'Inter', sans-serif", lineHeight: 1.5 }}>
                  {f.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── STYLES GRID ── */}
      <section style={{ backgroundColor: "#0B0B0B", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#FFFFFF", letterSpacing: "0.06em", textAlign: "center", marginBottom: "2.5rem" }}>
            Find the Perfect Style for Your Home
          </h2>
          <div className="nb-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
            {STYLES.map((s) => (
              <div
                key={s.title}
                style={{ backgroundColor: "#111", border: "1px solid #2C2C2C", borderRadius: "4px", overflow: "hidden", transition: "border-color 0.2s, transform 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#F26522"; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#2C2C2C"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
              >
                <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
                  <Image src={s.img} alt={s.title} fill style={{ objectFit: "cover" }}/>
                </div>
                <div style={{ padding: "1.25rem" }}>
                  <div style={{ width: "24px", height: "3px", backgroundColor: "#F26522", marginBottom: "0.6rem" }} />
                  <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.25rem", color: "#FFFFFF", letterSpacing: "0.05em", marginBottom: "0.35rem" }}>{s.title}</h3>
                  <p style={{ color: "#A3A3A3", fontSize: "0.8rem", fontFamily: "'Inter', sans-serif", lineHeight: 1.5 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section id="gallery" style={{ backgroundColor: "#121212", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#FFFFFF", letterSpacing: "0.06em", textAlign: "center", marginBottom: "2.5rem" }}>
            Recent Residential Installs
          </h2>
          <div className="nb-gallery" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.75rem", marginBottom: "1.5rem" }}>
            {GALLERY.map((img, i) => (
              <div
                key={i}
                style={{ position: "relative", height: "200px", borderRadius: "4px", overflow: "hidden", border: "1px solid #2C2C2C", transition: "border-color 0.2s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#F26522")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#2C2C2C")}
              >
                <Image src={img} alt={`Install ${i + 1}`} fill style={{ objectFit: "cover" }}/>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", borderTop: "1px solid #1A1A1A", paddingTop: "1.5rem" }}>
            <Link href="/contact" className="btn-secondary">
              View More Gallery <ArrowRightIcon size={14} color="#fff" />
            </Link>
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
        {/* Fleet truck sitting on the ground, bottom-right */}
        <img
          src="/newcar.png"
          alt="Northbuilt Truck"
          style={{
            position: "absolute",
            right: "clamp(-40px, -2vw, 0px)",
            bottom: 0,
            width: "min(70%, 880px)",
            height: "auto",
            objectFit: "contain",
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
              Why Homeowners<br />Choose <span style={{ color: "#F26522" }}>Northbuilt</span>
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

      <CTABar title="Ready to Upgrade Your Home?" subtitle="Contact us today for a free, no-obligation quote." />
    </>
  );
}
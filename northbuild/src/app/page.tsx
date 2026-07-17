"use client";

import Link from "next/link";
import Image from "next/image";
import CTABar from "@/components/ui/CTABar";
import { ArrowRightIcon, CheckCircleIcon, IconBadge } from "@/components/icons/Icons";
import { SITE } from "@/lib/data";

const FEATURES = [
  {
    title: "Quality Materials",
    desc: "Built to handle Canadian weather.",
    img: "/new/svg1.jpeg",
  },
  {
    title: "Expert Installation",
    desc: "Installed right the first time.",
    img: "/new/svg3.jpeg",
  },
  {
    title: "Reliable Service",
    desc: "Fast, professional support you can count on.",
    img: "/new/svg4.jpeg",
  },
  {
    title: "Southwestern Ontario",
    desc: "Local roots. Community focused.",
    img: "/new/svg2.jpeg",
  },
];

const SOLUTIONS = [
  {
    title: "Residential",
    subtitle: "Garage Doors",
    href: "/residential",
    img: "/img1.png",
    btnLabel: "Explore Residential",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M3 12L12 3L21 12V20C21 20.55 20.55 21 20 21H15V16H9V21H4C3.45 21 3 20.55 3 20V12Z" stroke="#F26522" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Commercial",
    subtitle: "Doors & Dock Equipment",
    href: "/commercial",
    img: "/img2.png",
    btnLabel: "Explore Commercial",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="18" rx="1" stroke="#F26522" strokeWidth="2" />
        <path d="M2 9H22M2 15H22M8 3V21M16 3V21" stroke="#F26522" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Agricultural",
    subtitle: "Doors & Equipment",
    href: "/agricultural",
    img: "/img3.png",
    btnLabel: "Explore Agricultural",
    iconImg: "/new/svg6.jpeg",
  },
  {
    title: "Service & Repairs",
    subtitle: "Fast · Reliable · Professional",
    href: "/services",
    img: "/img4.png",
    btnLabel: "View Services",
    iconImg: "/new/svg3.jpeg",
  },
];

const GALLERY = [
  { img: "/1.png", label: "Full View Aluminum" },
  { img: "/4.png", label: "Carriage House" },
  { img: "/3.png", label: "Commercial Roll-up" },
  { img: "/res1.png", label: "Residential" },
];

const BRANDS = ["Upwardor", "Richards-Wilcox", "Garaga", "LiftMaster", "ManarasOpera"];

const ADVANTAGES = [
  "Quality materials & expert craftsmanship",
  "Local service you can rely on",
  "Solutions for every application",
  "Built strong. Built local. Built to last.",
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "88vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <Image
          src="/new/hero.jpeg"
          alt="Northbuilt Garage Door"
          fill
          style={{ objectFit: "cover", objectPosition: "center right" }}
          priority

        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(8,8,8,.97) 0%, rgba(8,8,8,.88) 45%, rgba(8,8,8,.25) 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: "1280px", margin: "0 auto", padding: "6rem 1.5rem", width: "100%" }}>
          <p style={{ color: "#F26522", fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1.1rem" }}>
            Southwestern Ontario&apos;s Trusted Installer
          </p>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3rem, 9vw, 6.5rem)", color: "#FFFFFF", lineHeight: 0.98, letterSpacing: "0.02em", marginBottom: "1.5rem", maxWidth: "640px" }}>
            BUILT STRONG.<br />BUILT LOCAL.<br /><span style={{ color: "#F26522" }}>BUILT TO LAST.</span>
          </h1>
          <p style={{ color: "#D7D7D7", fontFamily: "'Inter', sans-serif", fontSize: "1.05rem", lineHeight: 1.75, maxWidth: "420px", marginBottom: "2.25rem" }}>
            Premium residential, commercial, and agricultural doors and dock equipment. Proudly serving Southwestern Ontario.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">
              Request a Free Quote <ArrowRightIcon size={16} color="#fff" />
            </Link>
            <Link href="/residential" className="btn-secondary">
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURE BAR ── */}
      <section style={{ backgroundColor: "#0D0D0D", borderBottom: "1px solid #1A1A1A" }}>
        <div className="nb-features" style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          {FEATURES.map((f, i) => (
            <div key={f.title} style={{ padding: "2rem 1.5rem", borderRight: i < 3 ? "1px solid #1A1A1A" : "none", display: "flex", alignItems: "flex-start", gap: "1rem" }}>
              <Image
                src={f.img}
                alt={f.title}
                width={38}
                height={38}

                style={{ objectFit: "contain", mixBlendMode: "screen", flexShrink: 0 }}
              />
              <div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, color: "#FFFFFF", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.3rem" }}>
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

      {/* ── SOLUTIONS ── */}
      <section style={{ backgroundColor: "#121212", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{ display: "inline-block", width: "40px", height: "3px", backgroundColor: "#F26522", marginBottom: "1rem" }} />
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#FFFFFF", letterSpacing: "0.06em" }}>
              Solutions Built for Every Need
            </h2>
          </div>
          <div className="nb-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.25rem" }}>
            {SOLUTIONS.map((s) => (
              <div
                key={s.title}
                style={{ backgroundColor: "#1A1A1A", border: "1px solid #2C2C2C", borderRadius: "6px", overflow: "hidden", transition: "border-color 0.2s, transform 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#F26522"; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#2C2C2C"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
              >
                <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
                  <Image src={s.img} alt={s.title} fill style={{ objectFit: "cover" }}/>
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,8,8,0) 40%, rgba(8,8,8,0.7) 100%)" }} />
                  <div style={{ position: "absolute", top: "0.75rem", left: "0.75rem" }}>
                    <IconBadge size={42} radius={8} tone="overlay">
                      {s.iconImg ? (
                        <Image
                          src={s.iconImg}
                          alt={s.title}
                          width={26}
                          height={26}

                          style={{ objectFit: "contain", mixBlendMode: "screen" }}
                        />
                      ) : (
                        s.icon
                      )}
                    </IconBadge>
                  </div>
                </div>
                <div style={{ padding: "1.25rem" }}>
                  <div style={{ width: "24px", height: "3px", backgroundColor: "#F26522", marginBottom: "0.6rem" }} />
                  <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.3rem", color: "#FFFFFF", letterSpacing: "0.05em", marginBottom: "0.2rem" }}>{s.title}</h3>
                  <p style={{ color: "#7C7C7C", fontSize: "0.72rem", fontFamily: "'Inter', sans-serif", textTransform: "uppercase", letterSpacing: "0.1em" }}>{s.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR WORK GALLERY ── */}
      <section style={{ backgroundColor: "#0B0B0B", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#FFFFFF", letterSpacing: "0.06em" }}>
              Our Work. <span style={{ color: "#F26522" }}>Your Peace of Mind.</span>
            </h2>
          </div>
          <div className="nb-gallery" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", marginBottom: "1.5rem" }}>
            {GALLERY.map((item, i) => (
              <div
                key={i}
                style={{ position: "relative", height: "230px", borderRadius: "4px", overflow: "hidden", border: "1px solid #2C2C2C", transition: "border-color 0.2s, transform 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#F26522"; (e.currentTarget as HTMLElement).style.transform = "scale(1.01)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#2C2C2C"; (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
              >
                <Image src={item.img} alt={item.label} fill style={{ objectFit: "cover" }}/>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,8,8,0) 55%, rgba(8,8,8,0.85) 100%)" }} />
                <span style={{ position: "absolute", bottom: "0.75rem", left: "0.85rem", color: "#D7D7D7", fontSize: "0.72rem", fontFamily: "'Inter', sans-serif", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="/contact" className="btn-secondary">
              View More Gallery <ArrowRightIcon size={14} color="#fff" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── NORTHBUILT ADVANTAGE ── */}
      <section style={{ position: "relative", backgroundColor: "#121212", padding: "5rem 1.5rem", overflow: "hidden" }}>
        {/* Mountain backdrop */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/moun.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center bottom",
            backgroundSize: "cover",
            opacity: 0.5,
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
        {/* Left black shade */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg, #121212 0%, rgba(18,18,18,0.85) 25%, rgba(18,18,18,0.35) 55%, rgba(18,18,18,0) 80%)",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
        <div className="nb-grid-2" style={{ position: "relative", zIndex: 1, maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-block", width: "40px", height: "3px", backgroundColor: "#F26522", marginBottom: "1rem" }} />
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.2rem, 4vw, 3.2rem)", color: "#FFFFFF", letterSpacing: "0.04em", marginBottom: "1.5rem", lineHeight: 1.05 }}>
              The Northbuilt <span style={{ color: "#F26522" }}>Advantage</span>
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginBottom: "2rem" }}>
              {ADVANTAGES.map((a) => (
                <div key={a} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <CheckCircleIcon size={20} color="#F26522" />
                  <span style={{ color: "#D7D7D7", fontFamily: "'Inter', sans-serif", fontSize: "0.92rem" }}>{a}</span>
                </div>
              ))}
            </div>
            <Link href="/about" className="btn-secondary">
              About Northbuilt <ArrowRightIcon size={14} color="#fff" />
            </Link>
          </div>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img
              src="/logo.png"
              alt="NorthBuilt Door & Dock"
              style={{ width: "100%", maxWidth: "480px", height: "auto", objectFit: "contain" }}
            />
          </div>
        </div>
      </section>

      {/* ── BRANDS ── */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "2.5rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p style={{ textAlign: "center", color: "#1A1A1A", fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "1.75rem" }}>
            We Work with Top Quality Brands
          </p>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "3.5rem", flexWrap: "wrap" }}>
            {BRANDS.map((brand) => (
              <img
                key={brand}
                src={`/${brand}.png`}
                alt={brand}
                style={{ height: "72px", width: "auto", objectFit: "contain" }}
              />
            ))}
          </div>
        </div>
      </section>

      <CTABar />
    </>
  );
}
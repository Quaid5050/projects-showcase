"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SparkleIcon = ({ style }: { style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="#FFD700" style={{ position: "absolute", ...style }}>
    <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
  </svg>
);

const stars = [
  { top: "15%", left: "8%", size: 18, delay: "0s" },
  { top: "25%", left: "92%", size: 24, delay: "0.5s" },
  { top: "70%", left: "5%", size: 14, delay: "1s" },
  { top: "80%", left: "88%", size: 20, delay: "0.3s" },
  { top: "45%", left: "96%", size: 12, delay: "0.8s" },
  { top: "10%", left: "50%", size: 10, delay: "1.2s" },
];

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section style={{
      minHeight: "100vh",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
    }}>
      {/* Background Image with overlay */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <img
          src="/hero1.png"
          alt="Clean home"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, rgba(45,0,80,0.65) 0%, rgba(75,0,130,0.55) 50%, rgba(45,0,80,0.65) 100%)",
        }} />
        {/* Animated gradient orbs */}
        <div style={{
          position: "absolute", top: "-20%", right: "-10%",
          width: "600px", height: "600px",
          background: "radial-gradient(circle, rgba(255,215,0,0.12) 0%, transparent 70%)",
          borderRadius: "50%", animation: "float 6s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", bottom: "-20%", left: "-10%",
          width: "500px", height: "500px",
          background: "radial-gradient(circle, rgba(106,0,184,0.3) 0%, transparent 70%)",
          borderRadius: "50%", animation: "float 8s ease-in-out infinite reverse",
        }} />
      </div>

      {/* Floating sparkles */}
      {stars.map((s, i) => (
        <SparkleIcon
          key={i}
          style={{
            top: s.top, left: s.left,
            width: `${s.size}px`, height: `${s.size}px`,
            zIndex: 1, opacity: 0.8,
            animation: `floatSparkle ${2 + i * 0.4}s ease-in-out infinite`,
            animationDelay: s.delay,
          }}
        />
      ))}

      {/* Content */}
      <div style={{
        position: "relative", zIndex: 2,
        maxWidth: "1200px", margin: "0 auto",
        padding: "120px 24px 80px",
        width: "100%",
      }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}
          className="hero-grid">
          {/* Left: Text */}
          <div style={{ opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(40px)", transition: "all 0.8s ease" }}>
            {/* Badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(255,215,0,0.15)", border: "1px solid rgba(255,215,0,0.4)",
              borderRadius: "50px", padding: "8px 18px", marginBottom: "24px",
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#FFD700"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <span style={{ color: "#FFD700", fontSize: "13px", fontWeight: 600, letterSpacing: "0.05em" }}>
                #1 Cleaning Service in Lake Wales, FL
              </span>
            </div>

            <h1 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.15,
              marginBottom: "24px",
            }}>
              Professional Cleaning
              <br />
              <span className="gold-text">Services You Can</span>
              <br />
              Trust.
            </h1>

            <p style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: "clamp(15px, 2vw, 18px)",
              lineHeight: 1.75,
              marginBottom: "40px",
              maxWidth: "480px",
            }}>
              From deep cleaning to move-in/move-out, we deliver spotless results every time. Licensed, insured, and trusted by hundreds of homeowners across Polk County.
            </p>

            {/* Stats */}
            <div style={{ display: "flex", gap: "32px", marginBottom: "40px", flexWrap: "wrap" }}>
              {[
                { num: "500+", label: "Happy Clients" },
                { num: "5★", label: "Google Rating" },
                { num: "100%", label: "Satisfaction" },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 800, color: "#FFD700" }}>{s.num}</div>
                  <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px" }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a href="tel:8634568958" className="btn-primary" style={{ fontSize: "16px" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                Call Now
              </a>
              <Link href="/contact" className="btn-secondary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
                </svg>
                Get Free Estimate
              </Link>
            </div>
          </div>

          {/* Right: Logo + service cards */}
          <div style={{
            display: "flex", flexDirection: "column", alignItems: "center", gap: "24px",
            opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.8s ease 0.2s"
          }}>
            {/* Logo with glow ring */}
            <div style={{ position: "relative", animation: "float 4s ease-in-out infinite" }}>
              <div style={{
                position: "absolute", inset: "-20px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(255,215,0,0.2) 0%, transparent 70%)",
              }} />
              <Image
                src="/logo1.png"
                alt="M&L Cleaning Home Services LLC"
                width={280}
                height={280}
                style={{ objectFit: "contain", filter: "drop-shadow(0 10px 40px rgba(255,215,0,0.4))" }}
                priority
              />
            </div>

            {/* Quick info cards */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", width: "100%" }}>
              {[
                { icon: "shield", text: "Licensed & Insured" },
                { icon: "star", text: "5-Star Rated" },
                { icon: "check", text: "Free Estimates" },
                { icon: "clock", text: "Mon–Sat 8AM–6PM" },
              ].map((item) => (
                <div key={item.text} style={{
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,215,0,0.2)",
                  borderRadius: "12px",
                  padding: "14px",
                  display: "flex", alignItems: "center", gap: "10px",
                }}>
                  <QuickIcon type={item.icon} />
                  <span style={{ color: "#fff", fontSize: "13px", fontWeight: 500 }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)",
        zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
      }}>
        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "11px", letterSpacing: "0.15em" }}>SCROLL</span>
        <div style={{
          width: "24px", height: "40px",
          border: "2px solid rgba(255,215,0,0.4)",
          borderRadius: "12px",
          display: "flex", alignItems: "flex-start", justifyContent: "center",
          padding: "6px",
        }}>
          <div style={{
            width: "4px", height: "8px",
            background: "#FFD700", borderRadius: "2px",
            animation: "scrollDot 1.5s ease-in-out infinite",
          }} />
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollDot {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(12px); opacity: 0.4; }
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}

function QuickIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    shield: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    star: <svg width="18" height="18" viewBox="0 0 24 24" fill="#FFD700"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
    check: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20,6 9,17 4,12"/></svg>,
    clock: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>,
  };
  return <>{icons[type]}</>;
}

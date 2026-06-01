"use client";
import Link from "next/link";
import { useState } from "react";

type Service = {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  includes: string[];
  pricing: { size: string; price: string }[];
  iconPath: string;
};

const icons: Record<string, React.ReactNode> = {
  home: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d="M6 34V18L20 6L34 18V34H24V26H16V34H6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  ),
  deep: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M20 10V20L27 25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 20H13M27 20H30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  move: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="4" y="10" width="24" height="22" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M28 16L38 16M38 16L34 12M38 16L34 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 18H21M9 24H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  office: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="4" y="4" width="32" height="32" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M4 14H36M14 14V36" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="24" cy="26" r="4" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  construction: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d="M8 32L32 32M12 32V20L20 12L28 20V32" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"/>
      <path d="M16 32V24H24V32" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
};

export default function ServiceCard({ service: s, flipped }: { service: Service; flipped: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <section id={s.id} style={{
      background: flipped ? "white" : "#FAF8F4",
      padding: "80px 32px",
    }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: flipped ? "1fr 1fr" : "1fr 1fr",
          gap: "80px",
          alignItems: "start",
          direction: flipped ? "rtl" : "ltr",
        }} className="service-detail-grid">
          <div style={{ direction: "ltr" }}>
            <div style={{ color: "#C9A96E", marginBottom: "24px" }}>{icons[s.iconPath]}</div>
            <p style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: "#8A8078", marginBottom: "12px" }}>{s.subtitle}</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, color: "#1A1A1A", marginBottom: "20px" }}>{s.title}</h2>
            <div style={{ width: "40px", height: "1px", background: "#C9A96E", marginBottom: "24px" }} />
            <p style={{ fontSize: "15px", lineHeight: 1.9, color: "#8A8078", marginBottom: "36px" }}>{s.desc}</p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
              <Link href="/booking" className="btn-primary">Book This Service</Link>
              <Link href="/contact" style={{ color: "#C9A96E", textDecoration: "none", fontSize: "13px", letterSpacing: "1px" }}>Get a Quote →</Link>
            </div>
          </div>
          <div style={{ direction: "ltr" }}>
            <div style={{ background: "#1A1A1A", padding: "36px", marginBottom: "24px" }}>
              <p style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: "#C9A96E", marginBottom: "20px" }}>What is Included</p>
              {s.includes.map((item, j) => (
                <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "12px" }}>
                  <div style={{ width: "16px", height: "16px", border: "1px solid #C9A96E", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1 4L3 6L7 2" stroke="#C9A96E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{ border: "1px solid rgba(201,169,110,0.3)", padding: "28px" }}>
              <p style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: "#C9A96E", marginBottom: "16px" }}>Pricing</p>
              {s.pricing.map((p, k) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: k < s.pricing.length - 1 ? "1px solid rgba(201,169,110,0.1)" : "none" }}>
                  <span style={{ fontSize: "13px", color: "#8A8078" }}>{p.size}</span>
                  <span style={{ fontSize: "16px", fontFamily: "'Cormorant Garamond', serif", color: "#1A1A1A", fontWeight: 600 }}>{p.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .service-detail-grid { grid-template-columns: 1fr !important; direction: ltr !important; gap: 40px !important; } }
      `}</style>
    </section>
  );
}

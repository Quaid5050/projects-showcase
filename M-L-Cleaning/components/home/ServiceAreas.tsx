"use client";
import { useEffect, useRef } from "react";

const areas = [
  { name: "Lake Wales", primary: true },
  { name: "Winter Haven", primary: false },
  { name: "Haines City", primary: false },
  { name: "Davenport", primary: false },
  { name: "Bartow", primary: false },
  { name: "Auburndale", primary: false },
  { name: "Polk City", primary: false },
  { name: "Eagle Lake", primary: false },
];

export default function ServiceAreas() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el) => {
              (el as HTMLElement).style.opacity = "1";
              (el as HTMLElement).style.transform = "translateY(0)";
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={{ padding: "80px 24px", background: "#fff" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div className="reveal" style={{
          background: "linear-gradient(135deg, #2D0050, #4B0082, #6A00B8)",
          borderRadius: "24px",
          padding: "60px 48px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease",
        }}>
          {/* Decoration */}
          <div style={{
            position: "absolute", top: "-60px", right: "-60px",
            width: "200px", height: "200px",
            background: "radial-gradient(circle, rgba(255,215,0,0.1) 0%, transparent 70%)",
            borderRadius: "50%",
          }} />

          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            <span style={{ color: "#FFD700", fontWeight: 700, fontSize: "14px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Service Areas
            </span>
          </div>

          <h2 style={{
            fontFamily: "var(--font-display)",
            color: "#fff", fontSize: "clamp(24px, 3vw, 38px)",
            fontWeight: 800, marginBottom: "12px",
          }}>
            Serving Polk County & Beyond
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", marginBottom: "36px", fontSize: "15px", lineHeight: 1.6 }}>
            Based in Lake Wales, FL — proudly cleaning homes and businesses across the region.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center", marginBottom: "36px" }}>
            {areas.map((a) => (
              <div key={a.name} style={{
                background: a.primary ? "linear-gradient(135deg, #FFD700, #E6C200)" : "rgba(255,255,255,0.1)",
                border: a.primary ? "none" : "1px solid rgba(255,215,0,0.3)",
                color: a.primary ? "#2D0050" : "#fff",
                fontWeight: a.primary ? 700 : 500,
                fontSize: "14px",
                padding: "10px 22px",
                borderRadius: "50px",
                display: "flex", alignItems: "center", gap: "6px",
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill={a.primary ? "#2D0050" : "#FFD700"}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                </svg>
                {a.name}
                {a.primary && <span style={{ fontSize: "11px", opacity: 0.7 }}>(HQ)</span>}
              </div>
            ))}
          </div>

          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px" }}>
            Not sure if we cover your area?{" "}
            <a href="tel:8634568958" style={{ color: "#FFD700", fontWeight: 600, textDecoration: "none" }}>
              Call us at (863) 456-8958
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

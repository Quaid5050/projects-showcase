"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function CTA() {
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
    <section ref={sectionRef} style={{ padding: "80px 24px", background: "#f9f4ff" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div className="reveal" style={{
          background: "linear-gradient(135deg, #FFD700 0%, #FFE44D 50%, #E6C200 100%)",
          borderRadius: "24px",
          padding: "60px 48px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 20px 60px rgba(255,215,0,0.3)",
          opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease",
        }}>
          {/* Sparkle decorations */}
          {[{ top: "20%", left: "5%", size: 24 }, { top: "70%", right: "6%", size: 18 }, { top: "15%", right: "12%", size: 14 }].map((s, i) => (
            <svg key={i} viewBox="0 0 24 24" fill="rgba(75,0,130,0.15)" style={{
              position: "absolute", ...s, width: s.size, height: s.size,
              animation: `floatSparkle ${2 + i}s ease-in-out infinite`,
            }}>
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"/>
            </svg>
          ))}

          <h2 style={{
            fontFamily: "var(--font-display)",
            color: "#2D0050", fontSize: "clamp(26px, 4vw, 44px)",
            fontWeight: 800, marginBottom: "16px",
          }}>
            Ready for a Spotless Home?
          </h2>
          <p style={{ color: "#4B0082", fontSize: "17px", lineHeight: 1.7, marginBottom: "36px", maxWidth: "500px", margin: "0 auto 36px" }}>
            Get your free estimate today. No commitment, no hassle — just a cleaner, healthier space waiting for you.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="tel:8634568958"
              style={{
                background: "#2D0050",
                color: "#FFD700",
                fontWeight: 700,
                padding: "16px 36px",
                borderRadius: "50px",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 8px 30px rgba(45,0,80,0.3)",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
                fontSize: "16px",
                fontFamily: "var(--font-body)",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              Call (863) 456-8958
            </a>
            <Link
              href="/contact"
              style={{
                background: "transparent",
                color: "#2D0050",
                fontWeight: 700,
                padding: "15px 35px",
                borderRadius: "50px",
                border: "2px solid #2D0050",
                cursor: "pointer",
                transition: "all 0.3s ease",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
                fontSize: "16px",
                fontFamily: "var(--font-body)",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
              </svg>
              Get Free Estimate
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

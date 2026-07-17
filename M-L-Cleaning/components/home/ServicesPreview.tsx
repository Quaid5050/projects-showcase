"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const services = [
  {
    icon: "deep",
    title: "Deep Cleaning",
    desc: "Thorough top-to-bottom cleaning of every surface, corner, and crevice in your home or office.",
    price: "From $349",
    color: "#7c3aed",
  },
  {
    icon: "moveinout",
    title: "Move-In / Move-Out",
    desc: "Leave your old space spotless or arrive to a perfectly clean new home. We handle it all.",
    price: "From $399",
    color: "#6A00B8",
  },
  {
    icon: "regular",
    title: "Regular Cleaning",
    desc: "Weekly, bi-weekly, or monthly recurring service to keep your space consistently clean.",
    price: "Custom Quote",
    color: "#4B0082",
  },
  {
    icon: "commercial",
    title: "Commercial Cleaning",
    desc: "Professional cleaning for offices, retail spaces, and commercial properties.",
    price: "Custom Quote",
    color: "#3b0072",
  },
  {
    icon: "apartment",
    title: "Apartment Cleaning",
    desc: "Tailored cleaning solutions for apartments of any size, on your schedule.",
    price: "Custom Quote",
    color: "#5200b8",
  },
  {
    icon: "airbnb",
    title: "Airbnb / Vacation Rental",
    desc: "Fast turnaround, hotel-quality cleaning between guest stays. Ready for 5-star reviews.",
    price: "Custom Quote",
    color: "#6600e6",
  },
];

const ServiceIcon = ({ type }: { type: string }) => {
  const icons: Record<string, React.ReactNode> = {
    deep: (
      <svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="20"/>
        <path d="M16 24c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8"/>
        <path d="M24 12v4M24 32v4M12 24h4M32 24h4"/>
        <circle cx="24" cy="24" r="4" fill="#FFD700" stroke="none"/>
      </svg>
    ),
    moveinout: (
      <svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 42V22L24 6l18 16v20H30V30h-8v12H6z"/>
        <rect x="20" y="30" width="8" height="12"/>
        <path d="M14 30h6M28 30h6M14 36h6M28 36h6"/>
        <path d="M8 22l4-4M40 22l-4-4"/>
      </svg>
    ),
    regular: (
      <svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="6" width="36" height="36" rx="4"/>
        <path d="M16 6v8M32 6v8M6 20h36"/>
        <path d="M16 28h4v4h-4zM22 28h4v4h-4zM28 28h4v4h-4z"/>
        <path d="M16 34h4v4h-4z"/>
      </svg>
    ),
    commercial: (
      <svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="10" width="40" height="32" rx="2"/>
        <path d="M16 10V6h16v4"/>
        <path d="M4 24h40"/>
        <path d="M16 38V24M32 38V24M24 38V24"/>
        <path d="M12 16h4M20 16h4M28 16h4"/>
      </svg>
    ),
    apartment: (
      <svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="4" width="32" height="40" rx="2"/>
        <path d="M16 4v40M8 14h32M8 24h32M8 34h32"/>
        <rect x="12" y="18" width="6" height="6"/>
        <rect x="22" y="18" width="6" height="6"/>
        <rect x="12" y="28" width="6" height="6"/>
        <rect x="22" y="28" width="6" height="6"/>
      </svg>
    ),
    airbnb: (
      <svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 4C16.3 4 10 10.3 10 18c0 10 14 26 14 26s14-16 14-26c0-7.7-6.3-14-14-14z"/>
        <circle cx="24" cy="18" r="6"/>
        <path d="M18 42h12"/>
        <path d="M8 36l4-6M40 36l-4-6"/>
      </svg>
    ),
  };
  return <>{icons[type]}</>;
};

export default function ServicesPreview() {
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
    <section ref={sectionRef} style={{ padding: "100px 24px", background: "#f9f4ff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div className="reveal" style={{
          textAlign: "center", marginBottom: "64px",
          opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease"
        }}>
          <span style={{
            display: "inline-block",
            background: "linear-gradient(135deg, #4B0082, #6A00B8)",
            color: "#FFD700",
            fontSize: "12px", fontWeight: 700,
            letterSpacing: "0.15em", textTransform: "uppercase",
            padding: "6px 20px", borderRadius: "50px", marginBottom: "16px",
          }}>
            What We Offer
          </span>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 800, color: "#2D0050",
            marginBottom: "16px",
          }}>
            Complete Cleaning Solutions
          </h2>
          <p style={{ color: "#6b7280", fontSize: "17px", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
            Every service is performed by trained, vetted professionals using eco-friendly products.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "24px",
        }}>
          {services.map((s, i) => (
            <div
              key={s.title}
              className="reveal card-hover"
              style={{
                background: "#fff",
                borderRadius: "20px",
                padding: "32px",
                border: "1px solid rgba(75,0,130,0.08)",
                boxShadow: "0 4px 20px rgba(75,0,130,0.06)",
                opacity: 0, transform: "translateY(30px)",
                transition: `all 0.7s ease ${i * 0.1}s`,
                position: "relative", overflow: "hidden",
              }}
            >
              {/* Accent corner */}
              <div style={{
                position: "absolute", top: 0, right: 0,
                width: "80px", height: "80px",
                background: `linear-gradient(225deg, ${s.color}15, transparent)`,
                borderBottomLeftRadius: "80px",
              }} />

              <div style={{
                width: "70px", height: "70px",
                background: `linear-gradient(135deg, ${s.color}, ${s.color}cc)`,
                borderRadius: "18px", marginBottom: "20px",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: `0 8px 24px ${s.color}40`,
              }}>
                <ServiceIcon type={s.icon} />
              </div>

              <h3 style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                color: "#2D0050", fontSize: "20px", marginBottom: "12px",
              }}>
                {s.title}
              </h3>
              <p style={{ color: "#6b7280", fontSize: "14px", lineHeight: 1.7, marginBottom: "20px" }}>
                {s.desc}
              </p>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{
                  background: "linear-gradient(135deg, #FFD700, #E6C200)",
                  color: "#2D0050", fontWeight: 700, fontSize: "14px",
                  padding: "6px 16px", borderRadius: "50px",
                }}>
                  {s.price}
                </span>
                <Link href="/contact" style={{
                  color: "#4B0082", fontWeight: 600, fontSize: "13px",
                  textDecoration: "none", display: "flex", alignItems: "center", gap: "4px",
                  transition: "gap 0.2s",
                }}>
                  Book Now →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal" style={{
          textAlign: "center", marginTop: "48px",
          opacity: 0, transform: "translateY(20px)", transition: "all 0.7s ease 0.6s"
        }}>
          <Link href="/services" className="btn-primary" style={{ fontSize: "16px" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}

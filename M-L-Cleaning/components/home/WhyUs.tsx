"use client";
import { useEffect, useRef } from "react";

const reasons = [
  {
    icon: "verified",
    title: "Licensed & Insured",
    desc: "Fully licensed and insured for your protection and peace of mind on every job.",
  },
  {
    icon: "eco",
    title: "Eco-Friendly Products",
    desc: "We use safe, non-toxic, environmentally responsible cleaning solutions for your family and pets.",
  },
  {
    icon: "clock",
    title: "Always On Time",
    desc: "We show up when promised and finish the job right. Your time is valuable to us.",
  },
  {
    icon: "team",
    title: "Trained Professionals",
    desc: "Our team is background-checked, professionally trained, and dedicated to consistent quality.",
  },
  {
    icon: "guarantee",
    title: "Satisfaction Guaranteed",
    desc: "Not happy? We'll come back and make it right — no questions, no hassle.",
  },
  {
    icon: "flexible",
    title: "Flexible Scheduling",
    desc: "We work around your schedule. Morning, afternoon, or weekend — we're here for you.",
  },
];

const icons: Record<string, React.ReactNode> = {
  verified: <svg viewBox="0 0 48 48" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M24 4L8 12v10c0 9.4 6.8 18.2 16 20 9.2-1.8 16-10.6 16-20V12L24 4z"/><polyline points="18,24 22,28 30,20"/></svg>,
  eco: <svg viewBox="0 0 48 48" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M40 8c-4 0-20 2-24 20"/><path d="M8 40c0 0 4-12 16-16"/><path d="M24 28c4-8 12-12 16-20"/><circle cx="16" cy="32" r="4"/></svg>,
  clock: <svg viewBox="0 0 48 48" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="24" cy="24" r="18"/><polyline points="24,12 24,24 32,28"/></svg>,
  team: <svg viewBox="0 0 48 48" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="14" r="6"/><circle cx="30" cy="14" r="6"/><path d="M6 40c0-7 5.4-12 12-12h12c6.6 0 12 5 12 12"/></svg>,
  guarantee: <svg viewBox="0 0 48 48" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" transform="translate(12, 12) scale(1)"/><circle cx="24" cy="24" r="20"/><polyline points="17,24 21,28 31,18"/></svg>,
  flexible: <svg viewBox="0 0 48 48" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="8" width="36" height="32" rx="2"/><path d="M6 16h36"/><path d="M16 8v8M32 8v8"/><circle cx="24" cy="28" r="5"/><path d="M24 23v5l3 3"/></svg>,
};

export default function WhyUs() {
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
    <section ref={sectionRef} style={{
      padding: "100px 24px",
      background: "linear-gradient(135deg, #2D0050 0%, #4B0082 50%, #6A00B8 100%)",
      position: "relative", overflow: "hidden",
    }}>
      {/* Background decoration */}
      <div style={{
        position: "absolute", top: "-100px", right: "-100px",
        width: "400px", height: "400px",
        background: "radial-gradient(circle, rgba(255,215,0,0.08) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-80px", left: "-80px",
        width: "300px", height: "300px",
        background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div className="reveal" style={{
          textAlign: "center", marginBottom: "64px",
          opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease"
        }}>
          <span style={{
            display: "inline-block",
            background: "rgba(255,215,0,0.15)", border: "1px solid rgba(255,215,0,0.4)",
            color: "#FFD700",
            fontSize: "12px", fontWeight: 700,
            letterSpacing: "0.15em", textTransform: "uppercase",
            padding: "6px 20px", borderRadius: "50px", marginBottom: "16px",
          }}>
            Why Choose Us
          </span>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 800, color: "#fff",
            marginBottom: "16px",
          }}>
            The M&L Standard
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "17px", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
            We don&apos;t just clean — we transform your space and protect what matters most to you.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
        }}>
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="reveal card-hover"
              style={{
                background: "rgba(255,255,255,0.07)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,215,0,0.15)",
                borderRadius: "20px",
                padding: "32px",
                opacity: 0, transform: "translateY(30px)",
                transition: `all 0.7s ease ${i * 0.1}s`,
              }}
            >
              <div style={{
                width: "64px", height: "64px",
                background: "rgba(255,215,0,0.15)",
                border: "1px solid rgba(255,215,0,0.3)",
                borderRadius: "16px", marginBottom: "20px",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#FFD700",
              }}>
                {icons[r.icon]}
              </div>
              <h3 style={{
                fontFamily: "var(--font-display)",
                color: "#fff", fontWeight: 700, fontSize: "18px", marginBottom: "12px",
              }}>
                {r.title}
              </h3>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", lineHeight: 1.7 }}>
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

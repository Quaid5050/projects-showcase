"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const services = [
  {
    icon: "deep",
    title: "Deep Cleaning",
    price: "From $349",
    duration: "4-8 hours",
    includes: [
      "Full kitchen scrub including inside appliances",
      "Bathroom disinfection and grout cleaning",
      "Baseboards, windowsills, and light fixtures",
      "Inside cabinets and drawers",
      "Behind and under all furniture",
      "Ceiling fans, vents, and blinds",
    ],
    image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&q=80",
    ideal: "Ideal for first-time clients, spring cleaning, or homes that need extra attention.",
  },
  {
    icon: "moveinout",
    title: "Move-In / Move-Out Cleaning",
    price: "From $399",
    duration: "5-9 hours",
    includes: [
      "Complete clean of every room",
      "Inside all appliances, cabinets, and closets",
      "Detailed bathroom sanitization",
      "Window tracks and door frames",
      "Baseboards and all surfaces",
      "Refrigerator and oven interior",
    ],
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80",
    ideal: "Ideal for tenants moving out, new homeowners, landlords between tenants, and real estate agents.",
  },
  {
    icon: "regular",
    title: "Regular Cleaning",
    price: "Custom Quote",
    duration: "2-4 hours",
    includes: [
      "Vacuuming and mopping all floors",
      "Dusting all surfaces and furniture",
      "Kitchen counters, sink, and stovetop",
      "Bathroom cleaning and sanitization",
      "Trash removal",
      "Bed making",
    ],
    image: "https://images.unsplash.com/photo-1740657254989-42fe9c3b8cce?q=80",
    ideal: "Ideal for busy households wanting consistent cleanliness on a weekly, bi-weekly, or monthly schedule.",
  },
  {
    icon: "commercial",
    title: "Commercial Cleaning",
    price: "Custom Quote",
    duration: "Varies",
    includes: [
      "Office workstations and common areas",
      "Restroom disinfection",
      "Floor care and carpet vacuuming",
      "Break room and kitchen",
      "Trash and recycling removal",
      "Door handles and high-touch surfaces",
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    ideal: "Ideal for offices, retail stores, medical offices, and commercial properties of any size.",
  },
  {
    icon: "apartment",
    title: "Apartment Cleaning",
    price: "Custom Quote",
    duration: "2-5 hours",
    includes: [
      "All rooms cleaned and sanitized",
      "Kitchen and bathrooms deep cleaned",
      "Floors vacuumed and mopped",
      "Surfaces wiped and dusted",
      "Appliances cleaned",
      "Trash removed",
    ],
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80",
    ideal: "Ideal for apartment residents, property managers, and landlords.",
  },
  {
    icon: "airbnb",
    title: "Vacation Rental / Airbnb Cleaning",
    price: "Custom Quote",
    duration: "2-4 hours",
    includes: [
      "Full clean between guest checkouts",
      "Fresh linen and towel setup",
      "Restocking toiletries and supplies",
      "Kitchen reset and appliance wipe-down",
      "Inspection-ready presentation",
      "Fast turnaround guaranteed",
    ],
    image: "https://images.unsplash.com/photo-1758273238415-01ec03d9ef27?q=80",
    ideal: "Ideal for Airbnb hosts, VRBO owners, and short-term rental managers who need reliable, fast turnarounds.",
  },
];

const iconMap: Record<string, React.ReactNode> = {
  deep: <svg viewBox="0 0 48 48" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="24" cy="24" r="20"/><path d="M16 24c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8"/><path d="M24 12v4M24 32v4M12 24h4M32 24h4"/><circle cx="24" cy="24" r="4" fill="currentColor" stroke="none"/></svg>,
  moveinout: <svg viewBox="0 0 48 48" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 42V22L24 6l18 16v20H30V30h-8v12H6z"/></svg>,
  regular: <svg viewBox="0 0 48 48" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="6" width="36" height="36" rx="4"/><path d="M16 6v8M32 6v8M6 20h36"/><path d="M16 28h4v4h-4zM22 28h4v4h-4zM28 28h4v4h-4z"/></svg>,
  commercial: <svg viewBox="0 0 48 48" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="10" width="40" height="32" rx="2"/><path d="M16 10V6h16v4"/><path d="M4 24h40"/></svg>,
  apartment: <svg viewBox="0 0 48 48" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="4" width="32" height="40" rx="2"/><path d="M16 4v40M8 14h32M8 24h32M8 34h32"/></svg>,
  airbnb: <svg viewBox="0 0 48 48" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M24 4C16.3 4 10 10.3 10 18c0 10 14 26 14 26s14-16 14-26c0-7.7-6.3-14-14-14z"/><circle cx="24" cy="18" r="6"/></svg>,
};

export default function ServicesPage() {
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
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* Hero */}
      <div style={{
        background: "linear-gradient(135deg, #2D0050 0%, #4B0082 60%, #6A00B8 100%)",
        padding: "140px 24px 80px",
        textAlign: "center",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "-80px", right: "-80px",
          width: "300px", height: "300px",
          background: "radial-gradient(circle, rgba(255,215,0,0.1) 0%, transparent 70%)",
          borderRadius: "50%",
        }} />
        <span style={{
          display: "inline-block",
          background: "rgba(255,215,0,0.15)", border: "1px solid rgba(255,215,0,0.4)",
          color: "#FFD700", fontSize: "12px", fontWeight: 700,
          letterSpacing: "0.15em", textTransform: "uppercase",
          padding: "6px 20px", borderRadius: "50px", marginBottom: "20px",
        }}>Our Services</span>
        <h1 style={{
          fontFamily: "var(--font-display)", color: "#fff",
          fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 800,
          marginBottom: "16px",
        }}>
          Professional Cleaning
          <br /><span className="gold-text">Tailored to Your Needs</span>
        </h1>
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "17px", maxWidth: "520px", margin: "0 auto 32px", lineHeight: 1.7 }}>
          Every service includes trained professionals, eco-friendly products, and a 100% satisfaction guarantee.
        </p>
        <a href="tel:8634568958" className="btn-primary">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
          </svg>
          Get a Free Quote
        </a>
      </div>

      {/* Services List */}
      <div ref={sectionRef} style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "80px" }}>
          {services.map((s, i) => (
            <div
              key={s.title}
              className="reveal"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "60px",
                alignItems: "center",
                opacity: 0, transform: "translateY(40px)", transition: "all 0.7s ease",
              }}
            >
              {/* Image - alternates sides */}
              <div style={{ order: i % 2 === 0 ? 0 : 1 }} className="service-img">
                <div style={{ position: "relative", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 60px rgba(75,0,130,0.15)" }}>
                  <img
                    src={s.image}
                    alt={s.title}
                    style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block" }}
                  />
                  <div style={{
                    position: "absolute", bottom: "20px", left: "20px",
                    background: "linear-gradient(135deg, #FFD700, #E6C200)",
                    color: "#2D0050", fontWeight: 700, fontSize: "15px",
                    padding: "8px 20px", borderRadius: "50px",
                  }}>
                    {s.price}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <div style={{
                  width: "60px", height: "60px",
                  background: "linear-gradient(135deg, #4B0082, #6A00B8)",
                  borderRadius: "16px", marginBottom: "20px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#FFD700", boxShadow: "0 8px 24px rgba(75,0,130,0.3)",
                }}>
                  {iconMap[s.icon]}
                </div>

                <h2 style={{
                  fontFamily: "var(--font-display)", color: "#2D0050",
                  fontSize: "28px", fontWeight: 800, marginBottom: "8px",
                }}>{s.title}</h2>

                <div style={{ display: "flex", gap: "16px", marginBottom: "20px", flexWrap: "wrap" }}>
                  <span style={{ background: "#f9f4ff", color: "#4B0082", fontSize: "13px", fontWeight: 600, padding: "4px 14px", borderRadius: "50px" }}>
                    {s.price}
                  </span>
                  <span style={{ background: "#f0fdf4", color: "#16a34a", fontSize: "13px", fontWeight: 600, padding: "4px 14px", borderRadius: "50px" }}>
                    {s.duration}
                  </span>
                </div>

                <p style={{ color: "#6b7280", fontSize: "14px", lineHeight: 1.7, marginBottom: "20px", fontStyle: "italic" }}>
                  {s.ideal}
                </p>

                <h4 style={{ color: "#2D0050", fontWeight: 700, fontSize: "15px", marginBottom: "14px" }}>What&apos;s Included:</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px" }}>
                  {s.includes.map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                      <div style={{
                        width: "22px", height: "22px", flexShrink: 0,
                        background: "linear-gradient(135deg, #4B0082, #6A00B8)",
                        borderRadius: "50%",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        marginTop: "1px",
                      }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20,6 9,17 4,12"/>
                        </svg>
                      </div>
                      <span style={{ color: "#374151", fontSize: "14px", lineHeight: 1.6 }}>{item}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <Link href="/contact" className="btn-primary" style={{ fontSize: "14px", padding: "12px 24px" }}>
                    Book This Service
                  </Link>
                  <a href="tel:8634568958" className="btn-secondary" style={{ fontSize: "14px", padding: "11px 23px" }}>
                    Call for Pricing
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Free Estimates Banner */}
      <div style={{
        background: "#f9f4ff", padding: "60px 24px", textAlign: "center",
        borderTop: "1px solid rgba(75,0,130,0.08)"
      }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "12px",
          background: "linear-gradient(135deg, #FFD700, #E6C200)",
          padding: "16px 36px", borderRadius: "50px",
          boxShadow: "0 8px 30px rgba(255,215,0,0.4)",
        }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#2D0050">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          <span style={{ color: "#2D0050", fontWeight: 700, fontSize: "17px" }}>
            Free Estimates Available — Call (863) 456-8958
          </span>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .reveal { grid-template-columns: 1fr !important; }
          .service-img { order: 0 !important; }
        }
      `}</style>
    </div>
  );
}

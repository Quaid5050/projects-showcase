"use client";
import Link from "next/link";
import BookingForm from "@/components/BookingForm";

export default function Home() {
  const services = [
    {
      title: "Standard Home Cleaning",
      desc: "Regular maintenance cleaning for busy families & professionals. Consistent, reliable, spotless.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M4 28V14L16 4L28 14V28H20V20H12V28H4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        </svg>
      ),
      price: "From $149",
      href: "/services#standard",
    },
    {
      title: "Deep Cleaning",
      desc: "A thorough, top-to-bottom clean for homes that need extra attention. Every corner addressed.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M16 8V16L21 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      price: "Custom Quote",
      href: "/services#deep",
    },
    {
      title: "Move-In / Move-Out",
      desc: "Get your full deposit back. We deep clean every surface so you can move on stress-free.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="3" y="8" width="18" height="16" rx="1" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M21 13L29 13M29 13L26 10M29 13L26 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      price: "Custom Quote",
      href: "/services#move",
    },
    {
      title: "Office & Commercial",
      desc: "Professional workspace cleaning that creates a productive, welcoming environment for your team.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="4" y="4" width="24" height="24" rx="1" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M4 12H28M12 12V28" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      ),
      price: "Custom Quote",
      href: "/services#commercial",
    },
  ];

  const discounts = [
    { freq: "Weekly", discount: "20% Off" },
    { freq: "Bi-Weekly", discount: "15% Off" },
    { freq: "Monthly", discount: "10% Off" },
    { freq: "First Deep Clean", discount: "$20 Off" },
  ];

  const stats = [
    { num: "500+", label: "Homes Cleaned" },
    { num: "5★", label: "Rated Service" },
    { num: "9", label: "Cities Served" },
    { num: "100%", label: "Satisfaction" },
  ];

  const process = [
    { step: "01", title: "Book Online", desc: "Fill out our quick booking form — takes under 2 minutes. No payment required upfront." },
    { step: "02", title: "We Confirm", desc: "Our team contacts you within 2 hours to confirm details and answer any questions." },
    { step: "03", title: "We Clean", desc: "Professional cleaners arrive on time with all supplies. You relax — we handle everything." },
    { step: "04", title: "You Love It", desc: "Enjoy your spotless space. If anything is not perfect, we make it right — guaranteed." },
  ];

  const testimonials = [
    { name: "Sarah M.", area: "Langley", text: "M2M transformed my home before a listing. Absolutely immaculate — went above and beyond every expectation.", stars: 5 },
    { name: "James R.", area: "Surrey", text: "I have tried many cleaners. These guys are the only ones who actually pay attention to detail. Worth every penny.", stars: 5 },
    { name: "Priya K.", area: "Burnaby", text: "Used them for our office every week. The team is professional, reliable, and the results speak for themselves.", stars: 5 },
  ];

  return (
    <>
      {/* HERO */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Background Image */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('/hero-kitchen.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
        }} />

        {/* Dark overlay — stronger on left for text, lighter on right to show image */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(100deg, rgba(10,18,10,0.93) 0%, rgba(10,18,10,0.85) 40%, rgba(10,18,10,0.45) 65%, rgba(10,18,10,0.15) 100%)",
        }} />

        {/* Gold gradient accent at bottom */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "3px",
          background: "linear-gradient(90deg, transparent, #C9A96E 40%, #C9A96E 60%, transparent)",
        }} />

        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "120px 32px 80px", position: "relative", zIndex: 2, width: "100%" }}>
          <div style={{ maxWidth: "600px" }}>
            {/* Badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              border: "1px solid rgba(201,169,110,0.5)",
              background: "rgba(0,0,0,0.3)",
              backdropFilter: "blur(8px)",
              padding: "8px 20px", marginBottom: "36px",
            }}>
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#C9A96E" }} />
              <span style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: "#C9A96E", fontWeight: 500 }}>
                Langley and Lower Mainland
              </span>
            </div>

            <h1 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(52px, 8vw, 88px)",
              fontWeight: 300,
              lineHeight: 1.05,
              color: "white",
              marginBottom: "28px",
              letterSpacing: "-1px",
              textShadow: "0 2px 20px rgba(0,0,0,0.5)",
            }}>
              From Mess<br />
              <em style={{ fontStyle: "italic", color: "#C9A96E" }}>to Magic.</em>
            </h1>

            <p style={{
              fontSize: "17px", lineHeight: 1.8,
              color: "rgba(255,255,255,0.85)",
              maxWidth: "480px", marginBottom: "44px", fontWeight: 300,
              textShadow: "0 1px 8px rgba(0,0,0,0.6)",
            }}>
              Professional cleaning that transforms your space. Reliable, detail-driven cleaners serving Langley and the Lower Mainland with spotless results — every single time.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Link href="/booking" className="btn-primary">Book Your Clean</Link>
              <Link href="/contact" className="btn-outline">Get a Free Quote</Link>
            </div>

            {/* Trust badges */}
            <div style={{
              display: "flex", gap: "24px", marginTop: "56px", flexWrap: "wrap",
              background: "rgba(0,0,0,0.35)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(201,169,110,0.15)",
              padding: "16px 24px",
              width: "fit-content",
            }}>
              {[
                { text: "5-Star Rated" },
                { text: "Licensed & Insured" },
                { text: "Professional Team" },
              ].map((b, i) => (
                <div key={b.text} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  {i > 0 && <div style={{ width: "1px", height: "14px", background: "rgba(201,169,110,0.3)", marginRight: "8px" }} />}
                  <div style={{ width: "4px", height: "4px", background: "#C9A96E", borderRadius: "50%" }} />
                  <span style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.8)", whiteSpace: "nowrap" }}>{b.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile styles */}
        <style>{`
          @media (max-width: 768px) {
            .hero-bg { background-position: center center !important; }
          }
        `}</style>
      </section>

      {/* STATS BAR */}
      <section style={{ background: "#C9A96E" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }} className="stats-grid">
            {stats.map((s, i) => (
              <div key={i} style={{
                padding: "32px 24px", textAlign: "center",
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.2)" : "none",
              }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "42px", fontWeight: 600, color: "white", lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.75)", marginTop: "6px" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 640px) { .stats-grid { grid-template-columns: 1fr 1fr !important; } }`}</style>
      </section>

      {/* SERVICES */}
      <section className="section-pad" style={{ background: "#FAF8F4" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ textAlign: "center", marginBottom: "70px" }}>
            <p style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A96E", marginBottom: "16px" }}>What We Offer</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 300, color: "#1A1A1A", marginBottom: "20px" }}>Our Cleaning Services</h2>
            <div className="gold-divider" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2px" }} className="services-grid">
            {services.map((s) => (
              <Link key={s.title} href={s.href} style={{ textDecoration: "none" }}>
                <div style={{ background: "white", padding: "52px 44px", transition: "all 0.3s ease", borderLeft: "3px solid transparent" }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.borderLeftColor = "#C9A96E"; el.style.transform = "translateX(4px)"; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.borderLeftColor = "transparent"; el.style.transform = "translateX(0)"; }}>
                  <div style={{ color: "#C9A96E", marginBottom: "20px" }}>{s.icon}</div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "26px", fontWeight: 500, color: "#1A1A1A", marginBottom: "12px" }}>{s.title}</h3>
                  <p style={{ fontSize: "14px", lineHeight: 1.8, color: "#8A8078", marginBottom: "20px" }}>{s.desc}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "13px", color: "#C9A96E", fontWeight: 600, letterSpacing: "1px" }}>{s.price}</span>
                    <span style={{ fontSize: "12px", color: "#C9A96E", letterSpacing: "1px" }}>Learn More</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <Link href="/services" className="btn-outline">View All Services</Link>
          </div>
        </div>
        <style>{`@media (max-width: 768px) { .services-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* DISCOUNTS */}
      <section className="section-pad" style={{ background: "#1A1A1A" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <p style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A96E", marginBottom: "16px" }}>Save More</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 300, color: "white", marginBottom: "20px" }}>Exclusive Discounts</h2>
            <div className="gold-divider" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2px" }} className="discounts-grid">
            {discounts.map((d, i) => (
              <div key={i} style={{
                background: i === 3 ? "#2D4A3E" : "rgba(255,255,255,0.04)",
                border: "1px solid rgba(201,169,110,0.15)",
                padding: "44px 32px", textAlign: "center", transition: "all 0.3s ease",
              }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "#C9A96E"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,169,110,0.15)"; }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "52px", fontWeight: 600, color: "#C9A96E", lineHeight: 1 }}>{d.discount}</div>
                <div style={{ fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginTop: "12px" }}>{d.freq}</div>
                {i === 3 && <div style={{ marginTop: "12px", fontSize: "11px", color: "#E8D5B0" }}>New clients only</div>}
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <Link href="/booking" className="btn-primary">Claim Your Discount</Link>
          </div>
        </div>
        <style>{`
          @media (max-width: 1024px) { .discounts-grid { grid-template-columns: 1fr 1fr !important; } }
          @media (max-width: 480px) { .discounts-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-pad" style={{ background: "#F5F0E8" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ textAlign: "center", marginBottom: "70px" }}>
            <p style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A96E", marginBottom: "16px" }}>Simple Process</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 300, color: "#1A1A1A" }}>How It Works</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "40px" }} className="process-grid">
            {process.map((p, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{
                  width: "52px", height: "52px", border: "1px solid #C9A96E",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 24px",
                  fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", color: "#C9A96E",
                }}>{p.step}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontWeight: 500, color: "#1A1A1A", marginBottom: "12px" }}>{p.title}</h3>
                <p style={{ fontSize: "13px", lineHeight: 1.8, color: "#8A8078" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) { .process-grid { grid-template-columns: 1fr 1fr !important; } }
          @media (max-width: 480px) { .process-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-pad" style={{ background: "#FAF8F4" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ textAlign: "center", marginBottom: "70px" }}>
            <p style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A96E", marginBottom: "16px" }}>Client Stories</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 300, color: "#1A1A1A" }}>What Our Clients Say</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }} className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} style={{ background: "white", padding: "40px 36px", borderBottom: "3px solid #C9A96E" }}>
                <div style={{ display: "flex", gap: "4px", marginBottom: "20px" }}>
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="#C9A96E"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  ))}
                </div>
                <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#2C2C2C", fontStyle: "italic", marginBottom: "24px" }}>"{t.text}"</p>
                <div>
                  <div style={{ fontWeight: 600, fontSize: "14px", color: "#1A1A1A" }}>{t.name}</div>
                  <div style={{ fontSize: "12px", color: "#8A8078", letterSpacing: "1px" }}>{t.area}, BC</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 768px) { .testimonials-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* COMMERCIAL CTA */}
      <section style={{ background: "linear-gradient(135deg, #2D4A3E 0%, #1a2e25 100%)", padding: "100px 32px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 80% 50%, rgba(201,169,110,0.1) 0%, transparent 60%)" }} />
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "1px solid rgba(201,169,110,0.3)", padding: "8px 20px", marginBottom: "32px" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2"><rect x="2" y="3" width="20" height="18" rx="2"/><path d="M8 21V12h8v9"/><path d="M2 9h20"/></svg>
            <span style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: "#C9A96E" }}>Business and Office Cleaning</span>
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(38px, 6vw, 66px)", fontWeight: 300, color: "white", marginBottom: "24px", lineHeight: 1.1 }}>
            A Cleaner Office Is a<br /><em style={{ color: "#C9A96E", fontStyle: "italic" }}>More Productive Office</em>
          </h2>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "rgba(255,255,255,0.65)", marginBottom: "44px", maxWidth: "580px", margin: "0 auto 44px" }}>
            Reliable commercial cleaning for offices, retail spaces, and businesses across the Lower Mainland. Flexible scheduling, professional results, zero disruption.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/booking?type=commercial" className="btn-primary">Get a Commercial Quote</Link>
            <Link href="/contact" style={{ textDecoration: "none", background: "transparent", color: "white", padding: "13px 32px", border: "1px solid rgba(255,255,255,0.4)", fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", display: "inline-block", transition: "all 0.3s ease" }}>Contact Us</Link>
          </div>
        </div>
      </section>

      {/* QUICK BOOKING */}
      <section className="section-pad" style={{ background: "#1A1A1A" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <p style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A96E", marginBottom: "16px" }}>Ready to Book?</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 300, color: "white", marginBottom: "16px" }}>Book Your Clean Today</h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px" }}>No payment required. We will contact you to confirm your booking.</p>
          </div>
          <BookingForm />
        </div>
      </section>

      {/* AREAS */}
      <section style={{ background: "#FAF8F4", padding: "60px 32px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#8A8078", marginBottom: "24px" }}>Proudly Serving</p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
            {["Langley", "Surrey", "Abbotsford", "Maple Ridge", "Coquitlam", "Burnaby", "Vancouver", "Delta", "White Rock"].map((area) => (
              <span key={area} style={{ padding: "8px 20px", border: "1px solid rgba(201,169,110,0.3)", fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", color: "#8A8078" }}>{area}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
"use client";
import Link from "next/link";


const values = [
  {
    title: "Quality First",
    desc: "Every clean is executed with precision and care. We don't cut corners — we clean them.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <polygon points="14 2 17.7 9.5 26 10.7 20 16.5 21.4 24.8 14 20.9 6.6 24.8 8 16.5 2 10.7 10.3 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Reliability",
    desc: "We show up on time, every time. Your schedule matters — we respect it completely.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 7V14L19 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Professionalism",
    desc: "Our team is trained, insured, and dedicated to treating every home with the utmost respect.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3L17 10H24L18.5 14.5L20.5 22L14 17.5L7.5 22L9.5 14.5L4 10H11L14 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Transparency",
    desc: "Clear pricing, honest communication, and no hidden fees. What we quote is what you pay.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 14C4 14 7 7 14 7C21 7 24 14 24 14C24 14 21 21 14 21C7 21 4 14 4 14Z" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="14" cy="14" r="3" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: "Care",
    desc: "We treat every space like it's our own — with genuine care for your home and belongings.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 24C14 24 4 18 4 10.5C4 7.5 6.5 5 9.5 5C11.5 5 13.2 6.1 14 7.8C14.8 6.1 16.5 5 18.5 5C21.5 5 24 7.5 24 10.5C24 18 14 24 14 24Z" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: "Satisfaction",
    desc: "If you are not 100% happy with our work, we come back and make it right — no questions asked.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 15C9 15 11 18 14 18C17 18 19 15 19 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="10.5" cy="11.5" r="1.5" fill="currentColor"/>
        <circle cx="17.5" cy="11.5" r="1.5" fill="currentColor"/>
      </svg>
    ),
  },
];

const areas = ["Langley", "Surrey", "Abbotsford", "Maple Ridge", "Coquitlam", "Burnaby", "Vancouver", "Delta", "White Rock"];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: "linear-gradient(160deg, #1A1A1A 0%, #2D4A3E 100%)",
        padding: "160px 32px 100px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 30% 60%, rgba(201,169,110,0.07) 0%, transparent 50%)" }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <p style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A96E", marginBottom: "20px" }}>Our Story</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(44px, 7vw, 80px)", fontWeight: 300, color: "white", marginBottom: "24px", letterSpacing: "-1px" }}>
            We Believe a<br />
            <em style={{ color: "#C9A96E", fontStyle: "italic" }}>Clean Home Changes Everything</em>
          </h1>
          <p style={{ fontSize: "16px", lineHeight: 1.9, color: "rgba(255,255,255,0.6)", maxWidth: "560px" }}>
            Based in Langley, BC, M2M Pro Cleaners was built on a simple belief: a spotless, organized home doesn't just look good — it changes how you feel, how you work, and how you live.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-pad" style={{ background: "#FAF8F4" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "100px", alignItems: "center" }} className="about-grid">
            <div>
              <p style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A96E", marginBottom: "20px" }}>Our Mission</p>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 300, color: "#1A1A1A", marginBottom: "24px", lineHeight: 1.15 }}>
                Making Life Easier,<br />One Clean at a Time
              </h2>
              <div style={{ width: "40px", height: "1px", background: "#C9A96E", marginBottom: "28px" }} />
              <p style={{ fontSize: "15px", lineHeight: 1.9, color: "#8A8078", marginBottom: "20px" }}>
                Our mission is to provide reliable, high-quality cleaning services that make life easier for our clients — bringing comfort, clarity, and peace back into their homes and offices.
              </p>
              <p style={{ fontSize: "15px", lineHeight: 1.9, color: "#8A8078", marginBottom: "36px" }}>
                Whether it's a standard weekly clean or a complete move-out transformation, we approach every job with the same professionalism, attention to detail, and commitment to excellence.
              </p>
              <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
                {[["500+", "Homes Cleaned"], ["5★", "Average Rating"], ["9", "Cities Served"]].map(([n, l]) => (
                  <div key={l}>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "40px", fontWeight: 600, color: "#C9A96E", lineHeight: 1 }}>{n}</div>
                    <div style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: "#8A8078", marginTop: "4px" }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: "relative" }}>
              {/* Real kitchen image */}
              <div style={{
                aspectRatio: "4/5",
                overflow: "hidden",
                position: "relative",
              }}>
                <img
                  src="/about-kitchen.jpg"
                  alt="Luxury clean kitchen — M2M Pro Cleaners"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    display: "block",
                  }}
                />
                {/* Subtle gold overlay at bottom */}
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  height: "40%",
                  background: "linear-gradient(to top, rgba(10,18,10,0.6), transparent)",
                }} />
              </div>
              {/* Gold badge */}
              <div style={{ position: "absolute", bottom: "-24px", right: "-24px", width: "120px", height: "120px", background: "#C9A96E", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", zIndex: 2 }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "36px", fontWeight: 600, color: "white", lineHeight: 1 }}>5★</div>
                <div style={{ fontSize: "9px", letterSpacing: "2px", color: "rgba(255,255,255,0.8)", textTransform: "uppercase", marginTop: "4px" }}>Rated</div>
              </div>
              {/* Gold border accent */}
              <div style={{ position: "absolute", top: "16px", left: "16px", right: "-16px", bottom: "-16px", border: "1px solid rgba(201,169,110,0.3)", zIndex: -1 }} />
            </div>
          </div>
        </div>
        <style>{`@media (max-width: 900px) { .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }`}</style>
      </section>

      {/* Values */}
      <section className="section-pad" style={{ background: "#1A1A1A" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ textAlign: "center", marginBottom: "70px" }}>
            <p style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A96E", marginBottom: "16px" }}>What We Stand For</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 300, color: "white" }}>Our Values</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }} className="values-grid">
            {values.map((v) => (
              <div key={v.title} style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(201,169,110,0.1)",
                padding: "40px 36px",
                transition: "all 0.3s ease",
              }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "#C9A96E"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,169,110,0.1)"; }}>
                <div style={{ color: "#C9A96E", marginBottom: "20px" }}>{v.icon}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontWeight: 500, color: "white", marginBottom: "12px" }}>{v.title}</h3>
                <p style={{ fontSize: "13px", lineHeight: 1.8, color: "rgba(255,255,255,0.5)" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .values-grid { grid-template-columns: 1fr 1fr !important; } }
          @media (max-width: 480px) { .values-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* Why Choose Us */}
      <section className="section-pad" style={{ background: "#F5F0E8" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <p style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A96E", marginBottom: "16px" }}>Why M2M</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 300, color: "#1A1A1A" }}>Why Choose Us</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }} className="why-grid">
            {[
              { title: "Licensed & Insured", desc: "Full liability coverage for complete peace of mind. Your home and belongings are always protected." },
              { title: "Satisfaction Guaranteed", desc: "If you are not completely satisfied, we return to fix any issues within 24 hours — no charge." },
              { title: "Eco-Friendly Options", desc: "We offer green cleaning products that are safe for children, pets, and the environment." },
              { title: "Flexible Scheduling", desc: "Morning, afternoon, or evening — we work around your schedule, 7 days a week." },
              { title: "Background-Checked Team", desc: "Every cleaner on our team is thoroughly vetted, trained, and trusted with our clients' homes." },
              { title: "No Hidden Fees", desc: "The price we quote is the price you pay. Transparent pricing, always." },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                <div style={{ width: "40px", height: "40px", border: "1px solid #C9A96E", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 8L6 12L14 4" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", fontWeight: 500, color: "#1A1A1A", marginBottom: "8px" }}>{item.title}</h3>
                  <p style={{ fontSize: "13px", lineHeight: 1.8, color: "#8A8078" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 640px) { .why-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* Areas */}
      <section style={{ background: "#FAF8F4", padding: "60px 32px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#8A8078", marginBottom: "24px" }}>Proudly Serving</p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px", marginBottom: "48px" }}>
            {areas.map((area) => (
              <span key={area} style={{ padding: "8px 20px", border: "1px solid rgba(201,169,110,0.3)", fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", color: "#8A8078" }}>{area}</span>
            ))}
          </div>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/booking" className="btn-primary">Book a Clean</Link>
            <Link href="/contact" className="btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
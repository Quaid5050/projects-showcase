"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Link from "next/link";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export default function Home() {
  useScrollReveal();

  const services = [
    {
      title: "Tree Removal",
      desc: "Safe, efficient removal of trees of any size. We protect your property throughout the entire process.",
      image: "/service1.png",
    },
    {
      title: "Tree Trimming & Pruning",
      desc: "Expert trimming and shaping to keep your trees healthy, beautiful, and free from hazardous branches.",
      image: "/service2.png",
    },
    {
      title: "Fallen Tree Removal",
      desc: "24/7 emergency response for storm damage and fallen trees. Fast, safe clearance to restore access.",
      image: "/service3.png",
    },
    {
      title: "Lot Clearing",
      desc: "Full land clearing for construction, farming, or development. We leave your lot clean and ready.",
      image: "/service4.png",
    },
    {
      title: "Stump Grinding",
      desc: "Stumps ground below soil level, eliminating tripping hazards and pest infestation from your yard.",
      image: "/service5.png",
    },
    {
      title: "Colored Wood Chips",
      desc: "Colored wood chips available in a variety of colors — perfect for landscaping and garden beds.",
      image: "/service6.png",
    },
  ];

  const stats = [
    { number: "500+", label: "Trees Removed" },
    { number: "10+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Emergency Service" },
  ];

  const whyUs = [
    { title: "Licensed & Insured", desc: "Fully certified professionals protecting your property and our team." },
    { title: "Same-Day Service", desc: "Emergency tree situations cannot wait. We respond fast across Jamaica." },
    { title: "No Hidden Fees", desc: "Transparent pricing. What we quote is what you pay — nothing more." },
    { title: "Locally Rooted", desc: "Proudly Jamaican. We know the land, the climate, and our communities." },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/hero.png')", backgroundSize: "cover", backgroundPosition: "center" }} />
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse 60% 80% at 80% 50%, rgba(26,107,58,0.18) 0%, transparent 60%), radial-gradient(ellipse 40% 60% at 20% 30%, rgba(212,160,23,0.08) 0%, transparent 50%)" }} />
          <svg style={{ position: "absolute", bottom: 0, left: 0, right: 0, width: "100%", opacity: 0.1 }} viewBox="0 0 1440 300" preserveAspectRatio="none" fill="none">
            <path d="M0 300 L60 200 L90 220 L120 160 L150 180 L180 120 L210 150 L240 100 L270 130 L300 80 L330 110 L360 300Z" fill="#1A6B3A" />
            <path d="M300 300 L370 180 L410 200 L450 140 L490 160 L530 100 L570 130 L610 300Z" fill="#2D9955" />
            <path d="M1100 300 L1160 170 L1200 200 L1240 130 L1280 160 L1320 90 L1360 120 L1400 80 L1440 300Z" fill="#1A6B3A" />
          </svg>
          {[0,1,2,3,4,5].map((i) => (
            <div key={i} style={{ position: "absolute", width: 6, height: 6, borderRadius: "50%", background: i % 2 === 0 ? "#D4A017" : "#2D9955", left: `${10 + i * 15}%`, top: `${20 + (i % 3) * 20}%`, animation: `float ${3 + i * 0.5}s ease-in-out infinite`, animationDelay: `${i * 0.4}s`, opacity: 0.5 }} />
          ))}
        </div>

        <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto", padding: "120px 24px 80px", width: "100%" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <div className="animate-fadeInUp" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(212,160,23,0.1)", border: "1px solid rgba(212,160,23,0.3)", padding: "6px 16px", marginBottom: 28 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#D4A017" }} className="animate-pulse-gold" />
              <span style={{ fontFamily: "Arial, sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#D4A017" }}>Jamaica&apos;s #1 Tree Service</span>
            </div>
            <h1 className="animate-fadeInUp delay-100" style={{ fontFamily: "Georgia, serif", fontWeight: 700, lineHeight: 1.1, marginBottom: 24 }}>
              <span style={{ display: "block", fontSize: "clamp(2.4rem, 5vw, 4rem)", color: "#F5F5F0" }}>When Trees</span>
              <span style={{ display: "block", fontSize: "clamp(2.8rem, 6vw, 4.8rem)" }} className="gold-shimmer">Demand Action</span>
              <span style={{ display: "block", fontSize: "clamp(2.4rem, 5vw, 4rem)", color: "#2D9955" }}>We Deliver.</span>
            </h1>
            <p className="animate-fadeInUp delay-200" style={{ color: "rgba(245,245,240,0.7)", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: 36, maxWidth: 560 }}>
              From emergency fallen trees to full lot clearing — 876 Tree Removal serves homeowners, businesses, and landowners across Jamaica with precision, safety, and island pride.
            </p>
            <div className="animate-fadeInUp delay-300" style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
              <Link href="/contact" className="btn-primary animate-pulse-gold" style={{ textDecoration: "none" }}>Get Free Quote</Link>
              <Link href="/services" className="btn-outline" style={{ textDecoration: "none" }}>View Services</Link>
            </div>
            <div className="animate-fadeInUp delay-400" style={{ display: "flex", gap: 28, marginTop: 40, flexWrap: "wrap", justifyContent: "center" }}>
              {["Licensed & Insured", "Free Estimates", "24/7 Emergency"].map((tag) => (
                <div key={tag} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#1A6B3A" strokeWidth="1.5" /><path d="M4.5 8L7 10.5L11.5 6" stroke="#2D9955" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <span style={{ fontSize: "0.82rem", color: "rgba(245,245,240,0.6)", fontFamily: "Arial, sans-serif" }}>{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 30, left: "50%", transform: "translateX(-50%)", zIndex: 1 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <span style={{ fontFamily: "Arial, sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(245,245,240,0.4)" }}>Scroll</span>
            <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, rgba(212,160,23,0.5), transparent)" }} />
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ background: "linear-gradient(135deg, #D4A017, #A07810)", padding: "28px 24px" }}>
        <div className="stats-grid" style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {stats.map((stat, i) => (
            <div key={i} className="reveal" style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: "#0a0a0a", lineHeight: 1 }}>{stat.number}</div>
              <div style={{ fontFamily: "Arial, sans-serif", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(10,10,10,0.7)", marginTop: 4 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section style={{ padding: "100px 24px", background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="section-label reveal">What We Do</div>
            <div className="gold-divider reveal" style={{ margin: "12px auto" }} />
            <h2 className="section-title reveal" style={{ marginBottom: 16 }}>Complete Tree Services<br />Across Jamaica</h2>
            <p className="reveal" style={{ color: "rgba(245,245,240,0.6)", maxWidth: 540, margin: "0 auto", lineHeight: 1.7, fontSize: "0.95rem" }}>
              Whether it&apos;s a backyard tree threatening your home or a full plot that needs clearing, we have the equipment and expertise to handle it all.
            </p>
          </div>
          <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {services.map((service, i) => (
              <div key={i} className="service-card reveal" style={{ overflow: "hidden" }}>
                <div style={{ height: 260, overflow: "hidden" }}>
                  <img src={service.image} alt={service.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
                </div>
                <div style={{ padding: "20px 24px" }}>
                  <h3 style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: "1.1rem", color: "#F5F5F0", marginBottom: 8 }}>{service.title}</h3>
                  <p style={{ color: "rgba(245,245,240,0.6)", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: 12 }}>{service.desc}</p>
                  <Link href="/services" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#D4A017", fontFamily: "Arial, sans-serif", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", fontWeight: 700 }}>
                    Learn More
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER SLIDER */}
      <section style={{ padding: "80px 24px", background: "#0D0D0D" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <div className="section-label reveal">Our Work</div>
            <div className="gold-divider reveal" style={{ margin: "12px auto" }} />
            <h2 className="section-title reveal">Before &amp; After</h2>
            <p className="reveal" style={{ color: "rgba(245,245,240,0.6)", marginTop: 12, fontSize: "0.95rem" }}>Drag the slider to see the transformation</p>
          </div>
          <div className="reveal"><BeforeAfterSlider /></div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ padding: "100px 24px", background: "#0a0a0a", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: 400, height: 400, background: "radial-gradient(circle, rgba(26,107,58,0.08) 0%, transparent 70%)", borderRadius: "50%", transform: "translate(30%, -30%)" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div className="why-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <div>
              <div className="section-label reveal-left">Why 876</div>
              <div className="gold-divider reveal-left" />
              <h2 className="section-title reveal-left" style={{ marginBottom: 20 }}>Trusted by Jamaica&apos;s<br />Homeowners &amp; Businesses</h2>
              <p className="reveal-left" style={{ color: "rgba(245,245,240,0.6)", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: 32 }}>
                We are not just tree cutters. We are professionals who understand that every job impacts real homes, real families, and real businesses. That is why we bring the right tools, safety measures, and genuine care to every job.
              </p>
              <Link href="/about" className="btn-primary reveal-left" style={{ textDecoration: "none", display: "inline-block" }}>Learn About Us</Link>
            </div>
            <div className="whyus-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              {whyUs.map((item, i) => (
                <div key={i} className="reveal-right" style={{ padding: 24, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,160,23,0.1)" }}>
                  <div style={{ width: 40, height: 40, background: "rgba(26,107,58,0.2)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10L8 14L16 6" stroke="#2D9955" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <h4 style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: "1rem", color: "#F5F5F0", marginBottom: 8 }}>{item.title}</h4>
                  <p style={{ color: "rgba(245,245,240,0.55)", fontSize: "0.85rem", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WOOD CHIPS CTA */}
      <section style={{ padding: "80px 24px", background: "linear-gradient(135deg, #0D2B17 0%, #0a0a0a 50%, #1A1A00 100%)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <div className="section-label reveal">Bonus Product</div>
          <div className="gold-divider reveal" style={{ margin: "12px auto" }} />
          <h2 className="section-title reveal" style={{ marginBottom: 16 }}>Colored Wood Chips<br />for Your Landscape</h2>
          <p className="reveal" style={{ color: "rgba(245,245,240,0.65)", maxWidth: 560, margin: "0 auto 36px", fontSize: "0.95rem", lineHeight: 1.8 }}>
            After every removal, we produce quality wood chips available in a variety of colors. Perfect for garden beds, landscaping, and ground cover. Contact us for availability and pricing.
          </p>
          <div className="reveal" style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap", marginBottom: 36 }}>
            {["Natural Brown", "Golden Yellow", "Forest Green", "Black Mulch", "Red Cedar"].map((color) => (
              <span key={color} style={{ padding: "6px 16px", border: "1px solid rgba(212,160,23,0.3)", fontFamily: "Arial, sans-serif", fontSize: "0.75rem", letterSpacing: "0.08em", color: "#D4A017" }}>{color}</span>
            ))}
          </div>
          <Link href="/contact" className="btn-primary reveal" style={{ textDecoration: "none" }}>Inquire About Wood Chips</Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: "100px 24px", background: "#0a0a0a", borderTop: "1px solid rgba(212,160,23,0.1)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <div className="section-label reveal">Ready to Get Started?</div>
          <div className="gold-divider reveal" style={{ margin: "12px auto" }} />
          <h2 className="section-title reveal" style={{ marginBottom: 20 }}>Get Your Free Quote Today</h2>
          <p className="reveal" style={{ color: "rgba(245,245,240,0.6)", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: 40 }}>
            No obligation. No pressure. Just a straightforward assessment of your needs and an honest price. Call, email, or fill out our contact form.
          </p>
          <div className="reveal" style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary" style={{ textDecoration: "none" }}>Contact Us Now</Link>
            <a href="tel:8764781248" className="btn-outline" style={{ textDecoration: "none" }}>Call: 876-478-1248</a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .why-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .whyus-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </>
  );
}

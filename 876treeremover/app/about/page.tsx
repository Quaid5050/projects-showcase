"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Link from "next/link";

export default function AboutPage() {
  useScrollReveal();

  const process = [
    { step: "01", title: "Free Consultation", desc: "Contact us and we will assess your property, discuss the job, and give you an honest, no-obligation quote." },
    { step: "02", title: "Safety Assessment", desc: "Before any cut is made, our crew evaluates the tree, surroundings, and safest approach to protect your property." },
    { step: "03", title: "The Work Gets Done", desc: "Our licensed and insured team executes the job efficiently, using the right equipment for a clean, safe result." },
    { step: "04", title: "Full Cleanup", desc: "We haul away all debris and leave your property clean — no branches, no mess, no trace of the work but the result." },
  ];

  const values = [
    { icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 3L3 9V15C3 20.5 7.8 25.7 14 27C20.2 25.7 25 20.5 25 15V9L14 3Z" stroke="#D4A017" strokeWidth="1.5" strokeLinejoin="round"/><path d="M9 14L12 17L19 10" stroke="#2D9955" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>, title: "Safety First", desc: "Every job follows strict safety protocols to protect our crew, your property, and bystanders." },
    { icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="11" stroke="#D4A017" strokeWidth="1.5"/><path d="M14 8V14L18 17" stroke="#2D9955" strokeWidth="2" strokeLinecap="round"/></svg>, title: "Always On Time", desc: "We show up when we say we will. Your time is valuable and we respect it completely." },
    { icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M4 14C4 14 7 7 14 7C21 7 24 14 24 14C24 14 21 21 14 21C7 21 4 14 4 14Z" stroke="#D4A017" strokeWidth="1.5"/><circle cx="14" cy="14" r="3" fill="#2D9955"/></svg>, title: "Transparency", desc: "No surprise charges. No hidden fees. We explain everything clearly before any work begins." },
    { icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 3C14 3 5 9 5 16C5 20.4 9 24 14 24C19 24 23 20.4 23 16C23 9 14 3 14 3Z" fill="#1A6B3A" opacity="0.3" stroke="#D4A017" strokeWidth="1.5"/><path d="M14 24V27" stroke="#A07810" strokeWidth="2" strokeLinecap="round"/></svg>, title: "Island Pride", desc: "We are Jamaican. We serve Jamaicans. The land matters to us personally, not just professionally." },
  ];

  return (
    <>
      {/* Page Hero */}
      <section style={{ position: "relative", paddingTop: 160, paddingBottom: 100, background: "linear-gradient(135deg, #050505 0%, #0D2B17 60%, #0a0a0a 100%)", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse 70% 60% at 30% 50%, rgba(26,107,58,0.12) 0%, transparent 60%)" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <div className="section-label animate-fadeInUp">About Us</div>
          <div className="gold-divider animate-fadeInUp" />
          <h1 className="animate-fadeInUp delay-100" style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#F5F5F0", marginBottom: 20, maxWidth: 600 }}>
            Built on Hard Work &amp; <span className="gold-shimmer">Island Pride</span>
          </h1>
          <p className="animate-fadeInUp delay-200" style={{ color: "rgba(245,245,240,0.65)", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: 580 }}>
            876 Tree Removal was founded with a simple belief: Jamaica deserves professional tree services with integrity, expertise, and a genuine commitment to the communities we serve.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section style={{ padding: "100px 24px", background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="story-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <div>
              <div className="section-label reveal-left">Our Story</div>
              <div className="gold-divider reveal-left" />
              <h2 className="section-title reveal-left" style={{ marginBottom: 24 }}>From a Single Chainsaw<br />to Jamaica&apos;s Trusted Team</h2>
              <p className="reveal-left" style={{ color: "rgba(245,245,240,0.65)", fontSize: "0.95rem", lineHeight: 1.85, marginBottom: 20 }}>
                It started with Steve Hurde, a machete, a chainsaw, and a determination to do the job right. What began as a one-man operation handling small residential jobs quickly grew as word spread across the island that 876 Tree Removal was different — professional, reliable, and fairly priced.
              </p>
              <p className="reveal-left" style={{ color: "rgba(245,245,240,0.65)", fontSize: "0.95rem", lineHeight: 1.85, marginBottom: 20 }}>
                Today, we serve homeowners, businesses, and landowners across Jamaica. Every job — from a single backyard tree to large-scale lot clearing — gets the same level of care and professionalism.
              </p>
              <p className="reveal-left" style={{ color: "rgba(245,245,240,0.65)", fontSize: "0.95rem", lineHeight: 1.85 }}>
                Our team is licensed, insured, and trained to international safety standards. But at heart, we are still the same local, hands-on crew that treats your property like it is our own.
              </p>
            </div>
            <div className="reveal-right" style={{ display: "flex", justifyContent: "center" }}>
              <img src="/about.png" alt="876 Tree Removal team at work" style={{ width: "100%", maxWidth: 640, height: "auto", display: "block", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section style={{ padding: "80px 24px", background: "#0D0D0D" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="section-label reveal">What We Stand For</div>
            <div className="gold-divider reveal" style={{ margin: "12px auto" }} />
            <h2 className="section-title reveal">Our Core Values</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            {values.map((v, i) => (
              <div key={i} className="reveal service-card" style={{ padding: 32, textAlign: "center" }}>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>{v.icon}</div>
                <h3 style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: "1.15rem", color: "#F5F5F0", marginBottom: 12 }}>{v.title}</h3>
                <p style={{ color: "rgba(245,245,240,0.6)", fontSize: "0.88rem", lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: "100px 24px", background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="section-label reveal">How It Works</div>
            <div className="gold-divider reveal" style={{ margin: "12px auto" }} />
            <h2 className="section-title reveal">Our Process, Start to Finish</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 28 }}>
            {process.map((p, i) => (
              <div key={i} className="reveal service-card" style={{ padding: 32 }}>
                <div style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: "2.2rem", color: "rgba(212,160,23,0.3)", marginBottom: 12 }}>{p.step}</div>
                <h3 style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: "1.1rem", color: "#F5F5F0", marginBottom: 12 }}>{p.title}</h3>
                <p style={{ color: "rgba(245,245,240,0.6)", fontSize: "0.88rem", lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 24px", background: "linear-gradient(135deg, #D4A017, #A07810)", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 className="reveal" style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: "#0a0a0a", marginBottom: 16 }}>Ready to Work Together?</h2>
          <p className="reveal" style={{ color: "rgba(10,10,10,0.75)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: 32 }}>Get in touch today for your free, no-obligation quote. We will assess your needs honestly and get the job done right.</p>
          <div className="reveal" style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <Link href="/contact" style={{ background: "#0a0a0a", color: "#D4A017", padding: "14px 32px", textDecoration: "none", fontFamily: "Arial, sans-serif", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", transition: "all 0.3s" }}>Get Free Quote</Link>
            <Link href="/services" style={{ background: "transparent", color: "#0a0a0a", padding: "12px 30px", border: "2px solid #0a0a0a", textDecoration: "none", fontFamily: "Arial, sans-serif", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>View Services</Link>
          </div>
        </div>
      </section>

      <style>{`@media (max-width: 768px) { .story-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
    </>
  );
}

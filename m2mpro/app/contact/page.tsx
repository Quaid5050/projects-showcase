"use client";
import { useState } from "react";
import type { Metadata } from "next";

const inputStyle = {
  width: "100%",
  background: "white",
  border: "1px solid rgba(201,169,110,0.2)",
  padding: "14px 18px",
  fontSize: "14px",
  color: "#1A1A1A",
  fontFamily: "'Jost', sans-serif",
  outline: "none",
  transition: "border-color 0.2s ease",
};

const labelStyle = {
  display: "block",
  fontSize: "11px",
  letterSpacing: "2px",
  textTransform: "uppercase" as const,
  color: "#8A8078",
  marginBottom: "8px",
};

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, formType: "contact" }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const info = [
    {
      title: "Phone",
      value: "(778) 893-6786",
      sub: "Call or text anytime",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.69A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14z"/>
        </svg>
      ),
      href: "tel:7788936786",
    },
    {
      title: "Email",
      value: "info@m2mprocleaners.ca",
      sub: "We reply within 2 hours",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      href: "mailto:info@m2mprocleaners.ca",
    },
    {
      title: "Location",
      value: "Langley, BC, Canada",
      sub: "Serving the Lower Mainland",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      href: "#",
    },
    {
      title: "Hours",
      value: "Mon–Fri: 7AM–10PM",
      sub: "Sat & Sun: 8AM–8PM",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      href: "#",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section style={{
        background: "linear-gradient(160deg, #1A1A1A 0%, #2C2C2C 100%)",
        padding: "160px 32px 100px",
        position: "relative",
      }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 80% 50%, rgba(201,169,110,0.06) 0%, transparent 50%)" }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <p style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A96E", marginBottom: "20px" }}>Get In Touch</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(44px, 7vw, 80px)", fontWeight: 300, color: "white", marginBottom: "24px", letterSpacing: "-1px" }}>
            Let's Talk About<br />
            <em style={{ color: "#C9A96E", fontStyle: "italic" }}>Your Space</em>
          </h1>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "rgba(255,255,255,0.6)", maxWidth: "480px" }}>
            Have a question or ready to book? Reach out and we will get back to you within 2 hours.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section-pad" style={{ background: "#FAF8F4" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "80px" }} className="contact-main-grid">
            {/* Info */}
            <div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "36px", fontWeight: 300, color: "#1A1A1A", marginBottom: "8px" }}>Contact Information</h2>
              <div style={{ width: "40px", height: "1px", background: "#C9A96E", marginBottom: "36px" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                {info.map((item) => (
                  <a key={item.title} href={item.href} style={{ display: "flex", gap: "20px", alignItems: "flex-start", textDecoration: "none" }}>
                    <div style={{ width: "48px", height: "48px", border: "1px solid rgba(201,169,110,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#C9A96E" }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: "#8A8078", marginBottom: "4px" }}>{item.title}</div>
                      <div style={{ fontSize: "15px", color: "#1A1A1A", fontWeight: 500, marginBottom: "2px" }}>{item.value}</div>
                      <div style={{ fontSize: "12px", color: "#8A8078" }}>{item.sub}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Areas */}
              <div style={{ marginTop: "48px", padding: "28px", background: "#1A1A1A" }}>
                <p style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: "#C9A96E", marginBottom: "16px" }}>Service Areas</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {["Langley", "Surrey", "Abbotsford", "Maple Ridge", "Coquitlam", "Burnaby", "Vancouver", "Delta", "White Rock"].map((a) => (
                    <span key={a} style={{ padding: "4px 12px", border: "1px solid rgba(201,169,110,0.2)", fontSize: "11px", color: "rgba(255,255,255,0.5)", letterSpacing: "1px" }}>{a}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "36px", fontWeight: 300, color: "#1A1A1A", marginBottom: "8px" }}>Send a Message</h2>
              <div style={{ width: "40px", height: "1px", background: "#C9A96E", marginBottom: "36px" }} />

              {status === "success" ? (
                <div style={{ textAlign: "center", padding: "60px 32px", border: "1px solid rgba(201,169,110,0.3)", background: "rgba(201,169,110,0.05)" }}>
                  <div style={{ width: "56px", height: "56px", border: "1px solid #C9A96E", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "28px", color: "#1A1A1A", fontWeight: 300, marginBottom: "12px" }}>Message Sent!</h3>
                  <p style={{ color: "#8A8078", fontSize: "14px" }}>We will be in touch within 2 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="contact-form-grid">
                    <div>
                      <label style={labelStyle}>Full Name *</label>
                      <input style={inputStyle} name="name" value={form.name} onChange={handleChange} required placeholder="Your name"
                        onFocus={(e) => (e.target.style.borderColor = "#C9A96E")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.2)")} />
                    </div>
                    <div>
                      <label style={labelStyle}>Email *</label>
                      <input style={inputStyle} name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com"
                        onFocus={(e) => (e.target.style.borderColor = "#C9A96E")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.2)")} />
                    </div>
                    <div>
                      <label style={labelStyle}>Phone</label>
                      <input style={inputStyle} name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="(778) 000-0000"
                        onFocus={(e) => (e.target.style.borderColor = "#C9A96E")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.2)")} />
                    </div>
                    <div>
                      <label style={labelStyle}>Subject</label>
                      <select style={{ ...inputStyle, cursor: "pointer" }} name="subject" value={form.subject} onChange={handleChange}
                        onFocus={(e) => (e.target.style.borderColor = "#C9A96E")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.2)")}>
                        <option value="">Select a topic</option>
                        <option>Booking Inquiry</option>
                        <option>Pricing Question</option>
                        <option>Commercial Cleaning</option>
                        <option>Service Area Question</option>
                        <option>General Question</option>
                      </select>
                    </div>
                    <div style={{ gridColumn: "1 / -1" }}>
                      <label style={labelStyle}>Message *</label>
                      <textarea style={{ ...inputStyle, resize: "vertical", minHeight: "140px" }}
                        name="message" value={form.message} onChange={handleChange} required
                        placeholder="Tell us about your space and what you need..."
                        onFocus={(e) => (e.target.style.borderColor = "#C9A96E")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.2)")} />
                    </div>
                  </div>
                  {status === "error" && (
                    <p style={{ color: "#e07070", fontSize: "13px", marginTop: "12px" }}>Something went wrong. Please try again or call us directly.</p>
                  )}
                  <div style={{ marginTop: "24px" }}>
                    <button type="submit" className="btn-primary" disabled={status === "loading"} style={{ opacity: status === "loading" ? 0.7 : 1, cursor: status === "loading" ? "wait" : "pointer" }}>
                      {status === "loading" ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .contact-main-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }
          @media (max-width: 600px) { .contact-form-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* Quick Book CTA */}
      <section style={{ background: "#1A1A1A", padding: "80px 32px", textAlign: "center" }}>
        <p style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A96E", marginBottom: "20px" }}>Skip the Wait</p>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 300, color: "white", marginBottom: "32px" }}>
          Ready to Book Right Now?
        </h2>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/booking" className="btn-primary">Book Online Now</a>
          <a href="tel:7788936786" style={{ textDecoration: "none", background: "transparent", color: "#C9A96E", padding: "13px 32px", border: "1px solid rgba(201,169,110,0.4)", fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", display: "inline-block" }}>(778) 893-6786</a>
        </div>
      </section>
    </>
  );
}

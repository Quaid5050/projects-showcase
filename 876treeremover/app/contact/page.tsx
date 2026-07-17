"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";

export default function ContactPage() {
  useScrollReveal();

  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMsg("Please fill in your name, email, and message.");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        const data = await res.json();
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Could not send message. Please call us directly.");
    }
  };

  const contactCards = [
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="#D4A017"/></svg>,
      label: "Phone",
      value: "876-478-1248",
      href: "tel:8764781248",
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#D4A017"/></svg>,
      label: "Email",
      value: "876treeremoval@gmail.com",
      href: "mailto:876treeremoval@gmail.com",
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#D4A017" strokeWidth="1.5"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="#D4A017" strokeWidth="1.5"/></svg>,
      label: "Website",
      value: "876treeremoval.com",
      href: "https://876treeremoval.com",
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="#D4A017" strokeWidth="1.5"/><circle cx="12" cy="12" r="5" stroke="#D4A017" strokeWidth="1.5"/><circle cx="17.5" cy="6.5" r="1.2" fill="#D4A017"/></svg>,
      label: "Instagram",
      value: "@876tree.removal",
      href: "https://instagram.com/876tree.removal",
    },
  ];

  const services = ["Tree Removal", "Tree Trimming & Pruning", "Fallen Tree Removal", "Lot Clearing", "Stump Grinding", "Wood Chips", "Other"];

  return (
    <>
      {/* Page Hero */}
      <section style={{ position: "relative", paddingTop: 160, paddingBottom: 80, background: "linear-gradient(135deg, #050505 0%, #0D1A10 60%, #0a0a0a 100%)", overflow: "hidden" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <div className="section-label animate-fadeInUp">Get in Touch</div>
          <div className="gold-divider animate-fadeInUp" />
          <h1 className="animate-fadeInUp delay-100" style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#F5F5F0", marginBottom: 20 }}>
            Request Your <span className="gold-shimmer">Free Quote</span>
          </h1>
          <p className="animate-fadeInUp delay-200" style={{ color: "rgba(245,245,240,0.65)", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: 520 }}>
            Tell us about your tree service needs. We will review your request and respond with an honest, detailed quote — no obligation.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ padding: "80px 24px", background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 64, alignItems: "start" }}>
            {/* Left — Info */}
            <div>
              <h2 className="section-title reveal-left" style={{ marginBottom: 24, fontSize: "1.8rem" }}>Contact Information</h2>
              <p className="reveal-left" style={{ color: "rgba(245,245,240,0.6)", fontSize: "0.92rem", lineHeight: 1.8, marginBottom: 36 }}>
                Prefer to call? We are available every day. For emergencies, call us directly — we respond fast.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {contactCards.map((card, i) => (
                  <a key={i} href={card.href} target={card.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                    className="reveal-left service-card"
                    style={{ padding: "20px 24px", display: "flex", alignItems: "center", gap: 16, textDecoration: "none", animationDelay: `${i * 0.1}s` }}
                  >
                    <div style={{ width: 44, height: 44, background: "rgba(212,160,23,0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{card.icon}</div>
                    <div>
                      <div style={{ fontFamily: "Arial, sans-serif", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#D4A017", marginBottom: 2 }}>{card.label}</div>
                      <div style={{ color: "#F5F5F0", fontSize: "0.92rem" }}>{card.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Hours */}
              <div className="reveal-left" style={{ marginTop: 36, padding: 24, background: "rgba(26,107,58,0.08)", border: "1px solid rgba(26,107,58,0.2)" }}>
                <div style={{ fontFamily: "Arial, sans-serif", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#2D9955", marginBottom: 14 }}>Hours of Operation</div>
                {[
                  { day: "Monday – Friday", hours: "6:00 AM – 6:00 PM" },
                  { day: "Saturday", hours: "7:00 AM – 4:00 PM" },
                  { day: "Sunday / Emergency", hours: "Available by Call" },
                ].map((h, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                    <span style={{ color: "rgba(245,245,240,0.65)", fontSize: "0.85rem" }}>{h.day}</span>
                    <span style={{ color: "#D4A017", fontSize: "0.85rem", fontWeight: 700 }}>{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <div className="reveal-right" style={{ padding: 48, background: "#0D0D0D", border: "1px solid rgba(212,160,23,0.12)" }}>
              <h2 style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: "1.6rem", color: "#F5F5F0", marginBottom: 8 }}>Send Us a Message</h2>
              <p style={{ color: "rgba(245,245,240,0.5)", fontSize: "0.88rem", marginBottom: 32 }}>We respond within 24 hours — usually much faster.</p>

              {status === "success" ? (
                <div style={{ padding: 32, background: "rgba(45,153,85,0.1)", border: "1px solid rgba(45,153,85,0.3)", textAlign: "center" }}>
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ margin: "0 auto 16px" }}>
                    <circle cx="24" cy="24" r="23" stroke="#2D9955" strokeWidth="1.5" />
                    <path d="M14 24L20 30L34 16" stroke="#2D9955" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <h3 style={{ color: "#2D9955", fontFamily: "Georgia, serif", marginBottom: 8 }}>Message Sent!</h3>
                  <p style={{ color: "rgba(245,245,240,0.65)", fontSize: "0.9rem", lineHeight: 1.7 }}>Thank you for reaching out. We will get back to you shortly with your free quote.</p>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div>
                      <label style={{ display: "block", fontFamily: "Arial, sans-serif", fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#D4A017", marginBottom: 8 }}>Full Name *</label>
                      <input name="name" value={formData.name} onChange={handleChange} placeholder="Your name" className="form-input" />
                    </div>
                    <div>
                      <label style={{ display: "block", fontFamily: "Arial, sans-serif", fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#D4A017", marginBottom: 8 }}>Phone Number</label>
                      <input name="phone" value={formData.phone} onChange={handleChange} placeholder="876-xxx-xxxx" className="form-input" />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: "block", fontFamily: "Arial, sans-serif", fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#D4A017", marginBottom: 8 }}>Email Address *</label>
                    <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" className="form-input" />
                  </div>
                  <div>
                    <label style={{ display: "block", fontFamily: "Arial, sans-serif", fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#D4A017", marginBottom: 8 }}>Service Needed</label>
                    <select name="service" value={formData.service} onChange={handleChange} className="form-input" style={{ cursor: "pointer" }}>
                      <option value="">Select a service...</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ display: "block", fontFamily: "Arial, sans-serif", fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#D4A017", marginBottom: 8 }}>Message *</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Describe your tree situation, location, and any relevant details..." rows={5} className="form-input" style={{ resize: "vertical" }} />
                  </div>
                  {status === "error" && (
                    <div style={{ padding: "12px 16px", background: "rgba(220,50,50,0.1)", border: "1px solid rgba(220,50,50,0.3)", color: "#FF6B6B", fontSize: "0.85rem" }}>{errorMsg}</div>
                  )}
                  <button onClick={handleSubmit} className="btn-primary" disabled={status === "sending"} style={{ fontSize: "0.85rem", marginTop: 4, opacity: status === "sending" ? 0.7 : 1 }}>
                    {status === "sending" ? "Sending..." : "Send Message & Request Quote"}
                  </button>
                  <p style={{ color: "rgba(245,245,240,0.35)", fontSize: "0.75rem", textAlign: "center" }}>
                    Your information is private and will only be used to respond to your request.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map area placeholder */}
      <section style={{ background: "#050505", padding: "0 24px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="reveal" style={{ height: 220, background: "rgba(26,107,58,0.05)", border: "1px solid rgba(212,160,23,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 12 }}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M20 4C13.37 4 8 9.37 8 16C8 25.5 20 38 20 38C20 38 32 25.5 32 16C32 9.37 26.63 4 20 4ZM20 21C17.24 21 15 18.76 15 16C15 13.24 17.24 11 20 11C22.76 11 25 13.24 25 16C25 18.76 22.76 21 20 21Z" fill="#D4A017" opacity="0.4"/>
            </svg>
            <p style={{ color: "rgba(245,245,240,0.4)", fontFamily: "Arial, sans-serif", fontSize: "0.85rem", letterSpacing: "0.05em" }}>Serving all parishes across Jamaica</p>
          </div>
        </div>
      </section>

      <style>{`@media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; } .form-row { grid-template-columns: 1fr !important; } }`}</style>
    </>
  );
}

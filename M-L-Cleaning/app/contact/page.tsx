"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "", message: "",
    preferredDate: "", preferredTime: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", service: "", message: "", preferredDate: "", preferredTime: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div>
      {/* Hero */}
      <div style={{
        background: "linear-gradient(135deg, #2D0050, #4B0082, #6A00B8)",
        padding: "140px 24px 80px",
        textAlign: "center",
      }}>
        <span style={{
          display: "inline-block",
          background: "rgba(255,215,0,0.15)", border: "1px solid rgba(255,215,0,0.4)",
          color: "#FFD700", fontSize: "12px", fontWeight: 700,
          letterSpacing: "0.15em", textTransform: "uppercase",
          padding: "6px 20px", borderRadius: "50px", marginBottom: "20px",
        }}>Get in Touch</span>
        <h1 style={{
          fontFamily: "var(--font-display)", color: "#fff",
          fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 800, marginBottom: "16px",
        }}>
          Request a <span className="gold-text">Free Estimate</span>
        </h1>
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "17px", maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}>
          Fill out the form below or call us directly. We respond within 1 business hour.
        </p>
      </div>

      {/* Content */}
      <div style={{ padding: "80px 24px", background: "#f9f4ff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "60px", alignItems: "start" }} className="contact-grid">
          {/* Left: Contact Info */}
          <div>
            <h2 style={{ fontFamily: "var(--font-display)", color: "#2D0050", fontSize: "26px", fontWeight: 800, marginBottom: "32px" }}>
              Contact Information
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "40px" }}>
              {[
                { icon: "phone", label: "Phone", value: "(863) 456-8958", href: "tel:8634568958" },
                { icon: "email", label: "Email", value: "mlcleaninghomeservicesllc@gmail.com", href: "mailto:mlcleaninghomeservicesllc@gmail.com" },
                { icon: "web", label: "Website", value: "mlcleaninghs.com", href: "https://mlcleaninghs.com" },
                { icon: "clock", label: "Hours", value: "Monday – Saturday, 8:00 AM – 6:00 PM" },
                { icon: "location", label: "Service Area", value: "Lake Wales, FL & Surrounding Areas" },
              ].map((item) => (
                <div key={item.label} style={{
                  display: "flex", alignItems: "flex-start", gap: "16px",
                  background: "#fff", borderRadius: "14px", padding: "18px",
                  border: "1px solid rgba(75,0,130,0.08)",
                  boxShadow: "0 2px 10px rgba(75,0,130,0.05)",
                }}>
                  <div style={{
                    width: "44px", height: "44px", flexShrink: 0,
                    background: "linear-gradient(135deg, #4B0082, #6A00B8)",
                    borderRadius: "12px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <ContactSvgIcon type={item.icon} />
                  </div>
                  <div>
                    <div style={{ color: "#6b7280", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "4px" }}>
                      {item.label}
                    </div>
                    {item.href ? (
                      <a href={item.href} style={{ color: "#2D0050", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}>
                        {item.value}
                      </a>
                    ) : (
                      <div style={{ color: "#2D0050", fontWeight: 600, fontSize: "14px" }}>{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick CTAs */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a href="tel:8634568958" className="btn-primary" style={{ justifyContent: "center" }}>
                <ContactSvgIcon type="phone" />
                Call Now: (863) 456-8958
              </a>
              <a href="mailto:mlcleaninghomeservicesllc@gmail.com" className="btn-secondary" style={{ justifyContent: "center" }}>
                <ContactSvgIcon type="email" />
                Send Email
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div style={{
            background: "#fff", borderRadius: "24px", padding: "40px",
            boxShadow: "0 10px 40px rgba(75,0,130,0.1)",
            border: "1px solid rgba(75,0,130,0.08)",
          }}>
            <h3 style={{ fontFamily: "var(--font-display)", color: "#2D0050", fontSize: "22px", fontWeight: 800, marginBottom: "8px" }}>
              Book a Free Estimate
            </h3>
            <p style={{ color: "#6b7280", fontSize: "14px", marginBottom: "28px" }}>
              Fill out the form and we will get back to you within 1 business hour.
            </p>

            {status === "success" && (
              <div style={{
                background: "#f0fdf4", border: "1px solid #86efac",
                borderRadius: "12px", padding: "16px", marginBottom: "24px",
                display: "flex", alignItems: "center", gap: "12px",
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/>
                </svg>
                <div>
                  <div style={{ fontWeight: 700, color: "#16a34a", fontSize: "14px" }}>Message Sent Successfully!</div>
                  <div style={{ color: "#15803d", fontSize: "13px" }}>We will contact you within 1 business hour.</div>
                </div>
              </div>
            )}

            {status === "error" && (
              <div style={{
                background: "#fef2f2", border: "1px solid #fca5a5",
                borderRadius: "12px", padding: "16px", marginBottom: "24px",
                color: "#dc2626", fontSize: "14px",
              }}>
                Something went wrong. Please call us directly at (863) 456-8958.
              </div>
            )}

            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              {/* Row 1 */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
                <FormField label="Full Name *" name="name" type="text" placeholder="Your full name" value={form.name} onChange={handleChange} />
                <FormField label="Phone Number *" name="phone" type="tel" placeholder="(863) 000-0000" value={form.phone} onChange={handleChange} />
              </div>

              <FormField label="Email Address *" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} />

              {/* Service Select */}
              <div>
                <label style={{ display: "block", color: "#374151", fontWeight: 600, fontSize: "13px", marginBottom: "8px" }}>
                  Service Needed *
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  style={{
                    width: "100%", padding: "12px 16px",
                    border: "1.5px solid #e5e7eb",
                    borderRadius: "10px", fontSize: "14px",
                    color: form.service ? "#1a1a2e" : "#9ca3af",
                    background: "#fff", cursor: "pointer",
                    fontFamily: "var(--font-body)",
                    appearance: "none",
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%234B0082' stroke-width='2'%3E%3Cpolyline points='6,9 12,15 18,9'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 12px center",
                  }}
                >
                  <option value="">Select a service...</option>
                  <option>Deep Cleaning</option>
                  <option>Move-In / Move-Out Cleaning</option>
                  <option>Regular Cleaning (Weekly / Bi-Weekly / Monthly)</option>
                  <option>Commercial Cleaning</option>
                  <option>Apartment Cleaning</option>
                  <option>Airbnb / Vacation Rental Cleaning</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Date & Time */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
                <FormField label="Preferred Date" name="preferredDate" type="date" value={form.preferredDate} onChange={handleChange} />
                <div>
                  <label style={{ display: "block", color: "#374151", fontWeight: 600, fontSize: "13px", marginBottom: "8px" }}>
                    Preferred Time
                  </label>
                  <select
                    name="preferredTime"
                    value={form.preferredTime}
                    onChange={handleChange}
                    style={{
                      width: "100%", padding: "12px 16px",
                      border: "1.5px solid #e5e7eb",
                      borderRadius: "10px", fontSize: "14px",
                      background: "#fff", cursor: "pointer",
                      fontFamily: "var(--font-body)",
                      color: form.preferredTime ? "#1a1a2e" : "#9ca3af",
                      appearance: "none",
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%234B0082' stroke-width='2'%3E%3Cpolyline points='6,9 12,15 18,9'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 12px center",
                    }}
                  >
                    <option value="">Any time</option>
                    <option>8:00 AM – 10:00 AM</option>
                    <option>10:00 AM – 12:00 PM</option>
                    <option>12:00 PM – 2:00 PM</option>
                    <option>2:00 PM – 4:00 PM</option>
                    <option>4:00 PM – 6:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label style={{ display: "block", color: "#374151", fontWeight: 600, fontSize: "13px", marginBottom: "8px" }}>
                  Additional Details
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your space, any special requests, or questions..."
                  rows={4}
                  style={{
                    width: "100%", padding: "12px 16px",
                    border: "1.5px solid #e5e7eb",
                    borderRadius: "10px", fontSize: "14px",
                    resize: "vertical", fontFamily: "var(--font-body)",
                    color: "#1a1a2e",
                  }}
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={status === "loading"}
                className="btn-primary"
                style={{
                  width: "100%", justifyContent: "center",
                  fontSize: "16px", padding: "16px",
                  opacity: status === "loading" ? 0.7 : 1,
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                }}
              >
                {status === "loading" ? (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: "spin 1s linear infinite" }}>
                      <path d="M21 12a9 9 0 11-6.219-8.56"/>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22,2 15,22 11,13 2,9 22,2"/>
                    </svg>
                    Send Request
                  </>
                )}
              </button>

              <p style={{ color: "#9ca3af", fontSize: "12px", textAlign: "center" }}>
                By submitting, you agree to be contacted by M&L Cleaning Home Services LLC.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

function FormField({
  label, name, type, placeholder, value, onChange,
}: {
  label: string; name: string; type: string;
  placeholder?: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label style={{ display: "block", color: "#374151", fontWeight: 600, fontSize: "13px", marginBottom: "8px" }}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          width: "100%", padding: "12px 16px",
          border: "1.5px solid #e5e7eb",
          borderRadius: "10px", fontSize: "14px",
          fontFamily: "var(--font-body)", color: "#1a1a2e",
          background: "#fff",
        }}
      />
    </div>
  );
}

function ContactSvgIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    phone: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
    email: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
    web: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>,
    clock: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>,
    location: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  };
  return <>{icons[type]}</>;
}

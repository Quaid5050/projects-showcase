"use client";

import { useState } from "react";
import CTABar from "@/components/ui/CTABar";
import { PhoneIcon, MailIcon, GlobeIcon, MapPinIcon, LockIcon, Icon } from "@/components/icons/Icons";
import { SITE, CONTACT_SERVICES } from "@/lib/data";

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    interest: "",
    serviceType: "",
    message: "",
    agree: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }
      setSubmitted(true);
    } catch (err) {
      console.error("[contact] submission request failed:", err);
      setError("Could not reach the server. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "#111111",
    border: "1px solid #3A3A3A",
    color: "#FFFFFF",
    padding: "0.75rem 1rem",
    borderRadius: "4px",
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.875rem",
    outline: "none",
  };

  return (
    <>
      {/* HERO */}
      <section style={{ position: "relative", minHeight: "55vh", display: "flex", alignItems: "center", backgroundColor: "#0B0B0B" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(8,8,8,.96) 0%, rgba(8,8,8,.70) 60%, rgba(8,8,8,.10) 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: "1280px", margin: "0 auto", padding: "5rem 1.5rem", width: "100%" }}>
          <p style={{ color: "#F26522", fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>
            Get in Touch
          </p>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.5rem, 7vw, 5rem)", color: "#FFFFFF", lineHeight: 1.05, letterSpacing: "0.03em", marginBottom: "1.5rem" }}>
            WE&apos;RE HERE TO <span style={{ color: "#F26522" }}>HELP.</span>
          </h1>
          <p style={{ color: "#D7D7D7", fontFamily: "'Inter', sans-serif", fontSize: "1rem", lineHeight: 1.7, maxWidth: "420px", marginBottom: "1.5rem" }}>
            Have a question, need a quote, or want to book service? Fill out the form and our team will get back to you as soon as possible.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              { icon: "phone", label: "Fast Response", desc: "We aim to respond within 1 business day." },
              { icon: "shield", label: "Expert Support", desc: "Get answers from experienced professionals." },
              { icon: "maple", label: "Local & Reliable", desc: "Proudly serving Southwestern Ontario." },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <Icon name={item.icon} size={20} color="#F26522" />
                <div>
                  <span style={{ color: "#FFFFFF", fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "0.85rem" }}>{item.label}</span>
                  <span style={{ color: "#A3A3A3", fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", marginLeft: "0.5rem" }}>{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section style={{ backgroundColor: "#0B0B0B", padding: "5rem 1.5rem" }}>
        <div
          className="nb-grid-2"
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: "2rem",
            alignItems: "start",
          }}
        >
          {/* FORM */}
          <div style={{ backgroundColor: "#121212", border: "1px solid #2C2C2C", borderRadius: "6px", padding: "2.5rem" }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "3rem 0" }}>
                <div style={{ width: "60px", height: "60px", border: "2px solid #F26522", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
                  <span style={{ color: "#F26522", fontSize: "1.5rem" }}>✓</span>
                </div>
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", color: "#FFFFFF", marginBottom: "0.75rem" }}>Message Sent!</h3>
                <p style={{ color: "#A3A3A3", fontFamily: "'Inter', sans-serif", fontSize: "0.9rem" }}>
                  Thank you for reaching out. We&apos;ll be in touch within 1 business day.
                </p>
              </div>
            ) : (
              <>
                <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.8rem", color: "#FFFFFF", letterSpacing: "0.04em", marginBottom: "0.5rem" }}>
                  Send Us a Message
                </h2>
                <p style={{ color: "#7C7C7C", fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", marginBottom: "2rem" }}>
                  Fill out the form below and we&apos;ll get back to you shortly.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {/* Name Row */}
                  <div className="nb-stack-sm" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <input
                      style={inputStyle}
                      name="firstName"
                      placeholder="First Name *"
                      value={form.firstName}
                      onChange={handleChange}
                      onFocus={(e) => (e.target.style.borderColor = "#F26522")}
                      onBlur={(e) => (e.target.style.borderColor = "#3A3A3A")}
                    />
                    <input
                      style={inputStyle}
                      name="lastName"
                      placeholder="Last Name *"
                      value={form.lastName}
                      onChange={handleChange}
                      onFocus={(e) => (e.target.style.borderColor = "#F26522")}
                      onBlur={(e) => (e.target.style.borderColor = "#3A3A3A")}
                    />
                  </div>
                  <input
                    style={inputStyle}
                    name="email"
                    type="email"
                    placeholder="Email Address *"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={(e) => (e.target.style.borderColor = "#F26522")}
                    onBlur={(e) => (e.target.style.borderColor = "#3A3A3A")}
                  />
                  <input
                    style={inputStyle}
                    name="phone"
                    type="tel"
                    placeholder="Phone Number *"
                    value={form.phone}
                    onChange={handleChange}
                    onFocus={(e) => (e.target.style.borderColor = "#F26522")}
                    onBlur={(e) => (e.target.style.borderColor = "#3A3A3A")}
                  />
                  <input
                    style={inputStyle}
                    name="address"
                    placeholder="Address / Location"
                    value={form.address}
                    onChange={handleChange}
                    onFocus={(e) => (e.target.style.borderColor = "#F26522")}
                    onBlur={(e) => (e.target.style.borderColor = "#3A3A3A")}
                  />
                  <select
                    style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    onFocus={(e) => (e.target.style.borderColor = "#F26522")}
                    onBlur={(e) => (e.target.style.borderColor = "#3A3A3A")}
                  >
                    <option value="">I&apos;m interested in... *</option>
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Agricultural</option>
                    <option>Service & Repairs</option>
                    <option>Preventative Maintenance</option>
                    <option>General Inquiry</option>
                  </select>
                  <select
                    style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
                    name="serviceType"
                    value={form.serviceType}
                    onChange={handleChange}
                    onFocus={(e) => (e.target.style.borderColor = "#F26522")}
                    onBlur={(e) => (e.target.style.borderColor = "#3A3A3A")}
                  >
                    <option value="">Type of Service Needed *</option>
                    <option>New Installation</option>
                    <option>Repair</option>
                    <option>Maintenance</option>
                    <option>Quote Only</option>
                    <option>Other</option>
                  </select>
                  <textarea
                    style={{ ...inputStyle, minHeight: "120px", resize: "vertical" }}
                    name="message"
                    placeholder="Tell us more about your project or request..."
                    value={form.message}
                    onChange={handleChange}
                    onFocus={(e) => (e.target.style.borderColor = "#F26522")}
                    onBlur={(e) => (e.target.style.borderColor = "#3A3A3A")}
                  />
                  {/* Consent */}
                  <label style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", cursor: "pointer" }}>
                    <input
                      type="checkbox"
                      name="agree"
                      checked={form.agree}
                      onChange={handleChange}
                      style={{ marginTop: "2px", accentColor: "#F26522", width: "16px", height: "16px", flexShrink: 0 }}
                    />
                    <span style={{ color: "#A3A3A3", fontFamily: "'Inter', sans-serif", fontSize: "0.82rem" }}>
                      I agree to be contacted by Northbuilt Door &amp; Dock.{" "}
                      <a href="#" style={{ color: "#F26522", textDecoration: "none" }}>Privacy Policy</a>
                    </span>
                  </label>
                  {/* Error */}
                  {error && (
                    <div style={{ color: "#FF6B6B", fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", backgroundColor: "rgba(255,107,107,0.08)", border: "1px solid rgba(255,107,107,0.3)", borderRadius: "4px", padding: "0.75rem 1rem" }}>
                      {error}
                    </div>
                  )}
                  {/* Submit */}
                  <button
                    onClick={handleSubmit}
                    disabled={!form.agree || submitting}
                    style={{
                      backgroundColor: form.agree && !submitting ? "#F26522" : "#3A3A3A",
                      color: "#fff",
                      padding: "0.9rem 2rem",
                      border: "none",
                      borderRadius: "4px",
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.875rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      cursor: form.agree && !submitting ? "pointer" : "not-allowed",
                      transition: "background-color 0.2s",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                    onMouseEnter={(e) => { if (form.agree && !submitting) (e.currentTarget as HTMLElement).style.backgroundColor = "#FF7A1A"; }}
                    onMouseLeave={(e) => { if (form.agree && !submitting) (e.currentTarget as HTMLElement).style.backgroundColor = "#F26522"; }}
                  >
                    {submitting ? "Sending..." : "Submit Request →"}
                  </button>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <LockIcon size={14} color="#7C7C7C" />
                    <span style={{ color: "#7C7C7C", fontFamily: "'Inter', sans-serif", fontSize: "0.75rem" }}>
                      Your information is secure and will never be shared.
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* SIDEBAR */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* How Can We Help */}
            <div style={{ backgroundColor: "#121212", border: "1px solid #2C2C2C", borderRadius: "6px", padding: "1.75rem" }}>
              <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, color: "#FFFFFF", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1.25rem" }}>
                How Can We Help?
              </h3>
              <div className="nb-stack-sm" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                {CONTACT_SERVICES.map((s) => (
                  <div
                    key={s.title}
                    style={{ backgroundColor: "#1A1A1A", border: "1px solid #2C2C2C", borderRadius: "4px", padding: "1rem", textAlign: "center", transition: "border-color 0.2s", cursor: "pointer" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#F26522")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#2C2C2C")}
                  >
                    <Icon name={s.icon} size={28} color="#F26522" />
                    <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, color: "#FFFFFF", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.06em", marginTop: "0.5rem", marginBottom: "0.3rem" }}>{s.title}</div>
                    <div style={{ color: "#7C7C7C", fontSize: "0.7rem", fontFamily: "'Inter', sans-serif", lineHeight: 1.4 }}>{s.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Contact */}
            <div style={{ backgroundColor: "#121212", border: "1px solid #2C2C2C", borderRadius: "6px", padding: "1.75rem" }}>
              <h4 style={{ color: "#F26522", fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1rem" }}>
                Prefer to Reach Us Directly?
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { Icon: PhoneIcon, text: SITE.phone, href: `tel:${SITE.phoneFull}` },
                  { Icon: MailIcon, text: SITE.email, href: `mailto:${SITE.email}` },
                  { Icon: GlobeIcon, text: SITE.website, href: `https://${SITE.website}` },
                  { Icon: MapPinIcon, text: `Serving ${SITE.region}`, href: "#" },
                ].map(({ Icon: Ic, text, href }) => (
                  <a key={text} href={href} style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "#D7D7D7", textDecoration: "none", fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", transition: "color 0.2s" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#F26522")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#D7D7D7")}
                  >
                    <Ic size={16} color="#F26522" />
                    {text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABar title="Ready to Upgrade Your Doors?" subtitle="Contact us today for a free, no-obligation quote." />

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

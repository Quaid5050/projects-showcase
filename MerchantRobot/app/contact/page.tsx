"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ArrowRight } from "lucide-react";

const robotInterests = ["Robot Dog", "Humanoid Robot", "Cooking Robot", "General Inquiry"];

const contactInfo = [
  { icon: <Mail size={18} />, label: "Email", value: "info@canadianrobots.ca", sub: "We reply within 24 hours", href: "mailto:info@canadianrobots.ca" },
  { icon: <Phone size={18} />, label: "Phone", value: "+1 778.681.7688", sub: "Mon–Fri, 9AM–6PM", href: "tel:+17786817688" },
  { icon: <MapPin size={18} />, label: "Service Area", value: "Nationwide Coverage", sub: "Serving restaurants & businesses everywhere", href: null },
  { icon: <Clock size={18} />, label: "Business Hours", value: "Mon–Fri: 9AM–6PM", sub: "Weekend inquiries responded Monday", href: null },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", business: "", interest: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-glow" />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto", padding: "0 32px" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="badge" style={{ marginBottom: 20 }}>Contact Us</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(30px, 5vw, 56px)", fontWeight: 800, color: "#fafafa", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 20 }}>
            Let's Build the{" "}<span className="gradient-text">Future of Automation</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, color: "rgba(250,250,250,0.6)", lineHeight: 1.7, maxWidth: 580, margin: "0 auto" }}>
            Interested in robot dogs, humanoid robots, or cooking robots? Contact Canadian Robots today to discuss the right solution for your business.
          </motion.p>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section style={{ padding: "80px 0 120px" }}>
        <div className="r-inner">
          <div className="r-contact-grid" style={{ alignItems: "start" }}>

            {/* ─ Left: Info ─ */}
            <div>
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
                <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 26, fontWeight: 700, color: "#fafafa", marginBottom: 12 }}>Get in Touch</h2>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "rgba(250,250,250,0.58)", lineHeight: 1.75, marginBottom: 36 }}>
                  Our team of robotics experts is ready to help you find the perfect solution for your restaurant or business. Reach out and let's start the conversation.
                </p>

                {contactInfo.map((info, i) => (
                  <motion.div key={info.label} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.1 }} className="contact-item">
                    <div className="icon-box">{info.icon}</div>
                    <div>
                      <div className="label">{info.label}</div>
                      <div className="value">
                        {info.href ? (
                          <a href={info.href} style={{ color: "#fafafa", textDecoration: "none", transition: "color 0.2s" }}
                            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#CC0000"}
                            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#fafafa"}>
                            {info.value}
                          </a>
                        ) : info.value}
                      </div>
                      <div className="sub">{info.sub}</div>
                    </div>
                  </motion.div>
                ))}

                {/* Demo CTA card */}
                <motion.div id="demo" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                  <div className="quote-card">
                    <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: 18, fontWeight: 700, color: "#fafafa", marginBottom: 10 }}>Book a Robot Demo</h3>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(250,250,250,0.58)", lineHeight: 1.7, marginBottom: 20 }}>
                      See our robots in action. Schedule a personalized demonstration tailored to your business environment.
                    </p>
                    <button
                      onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                      className="btn-primary"
                      style={{ width: "100%", justifyContent: "center" }}
                    >
                      Request Consultation <ArrowRight size={15} />
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* ─ Right: Form ─ */}
            <div id="contact-form">
              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
                <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 28, padding: "clamp(24px, 5vw, 48px)", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #CC0000, #FF6666)" }} />

                  {submitted ? (
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ padding: "48px 0", textAlign: "center" }}>
                      <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(200,200,200,0.05)", border: "1px solid rgba(204,0,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                        <CheckCircle2 size={28} style={{ color: "#CC0000" }} />
                      </div>
                      <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: 24, fontWeight: 700, color: "#fafafa", marginBottom: 12 }}>Message Sent!</h3>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "rgba(250,250,250,0.6)", lineHeight: 1.7, maxWidth: 340, margin: "0 auto 24px" }}>
                        Thank you for reaching out. Our team will review your inquiry and get back to you within 24 hours.
                      </p>
                      <button onClick={() => setSubmitted(false)} style={{ background: "none", border: "none", color: "#CC0000", fontSize: 14, cursor: "pointer", textDecoration: "underline", fontFamily: "'Inter', sans-serif" }}>
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <>
                      <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 24, fontWeight: 700, color: "#fafafa", marginBottom: 8 }}>Send Us a Message</h2>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(250,250,250,0.5)", marginBottom: 32 }}>Fill in the details below and we'll get back to you shortly.</p>

                      <form onSubmit={handleSubmit}>
                        <div className="r-form-row" style={{ marginBottom: 20 }}>
                          <div>
                            <label className="form-label">Full Name *</label>
                            <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="John Smith" className="form-input" />
                          </div>
                          <div>
                            <label className="form-label">Email Address *</label>
                            <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="john@business.com" className="form-input" />
                          </div>
                        </div>

                        <div className="r-form-row" style={{ marginBottom: 20 }}>
                          <div>
                            <label className="form-label">Phone Number</label>
                            <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+1 778.681.7688" className="form-input" />
                          </div>
                          <div>
                            <label className="form-label">Business Name</label>
                            <input type="text" name="business" value={form.business} onChange={handleChange} placeholder="Your Restaurant / Business" className="form-input" />
                          </div>
                        </div>

                        <div style={{ marginBottom: 20 }}>
                          <label className="form-label">I&apos;m Interested In *</label>
                          <select name="interest" required value={form.interest} onChange={handleChange} className="form-input">
                            <option value="" disabled>Select robot type...</option>
                            {robotInterests.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                          </select>
                        </div>

                        <div style={{ marginBottom: 28 }}>
                          <label className="form-label">Message *</label>
                          <textarea name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="Tell us about your business, what you're looking to automate, and any specific requirements..." className="form-input" style={{ resize: "none", minHeight: 130 }} />
                        </div>

                        <button type="submit" disabled={loading} className="btn-primary" style={{ width: "100%", justifyContent: "center", opacity: loading ? 0.7 : 1, cursor: loading ? "not-allowed" : "pointer" }}>
                          {loading ? (
                            <>
                              <div style={{ width: 18, height: 18, border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
                              Sending...
                            </>
                          ) : (
                            <><Send size={17} /> Send Message</>
                          )}
                        </button>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "rgba(250,250,250,0.3)", textAlign: "center", marginTop: 16 }}>
                          By submitting, you agree to be contacted by the our team.
                        </p>
                      </form>
                      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                    </>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom guarantees ── */}
      <section style={{ paddingBottom: 96 }}>
        <div className="r-inner">
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 24, padding: "48px" }}>
            <div className="r-guarantees">
              {[
                { title: "Free Consultation", desc: "We'll assess your business needs at no cost and recommend the best robot solution." },
                { title: "Live Demo Available", desc: "See the robots in action before making any decisions. Demos available on request." },
                { title: "Full Support Included", desc: "Every deployment includes professional setup, staff training, and ongoing technical support." },
              ].map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                  <CheckCircle2 size={20} style={{ color: "#CC0000", flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <h4 style={{ fontFamily: "'Sora', sans-serif", fontSize: 16, fontWeight: 600, color: "#fafafa", marginBottom: 8 }}>{item.title}</h4>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(250,250,250,0.57)", lineHeight: 1.65 }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


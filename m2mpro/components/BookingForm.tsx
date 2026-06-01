"use client";
import { useState } from "react";

const inputStyle = {
  width: "100%",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(201,169,110,0.2)",
  padding: "14px 18px",
  fontSize: "14px",
  color: "white",
  fontFamily: "'Jost', sans-serif",
  outline: "none",
  transition: "border-color 0.2s ease",
};

const labelStyle = {
  display: "block",
  fontSize: "11px",
  letterSpacing: "2px",
  textTransform: "uppercase" as const,
  color: "rgba(255,255,255,0.5)",
  marginBottom: "8px",
};

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", address: "", city: "",
    serviceType: "", bedrooms: "", frequency: "", preferredDate: "",
    preferredTime: "", specialRequests: "",
  });
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
        body: JSON.stringify({ ...form, formType: "booking" }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", address: "", city: "", serviceType: "", bedrooms: "", frequency: "", preferredDate: "", preferredTime: "", specialRequests: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div style={{ textAlign: "center", padding: "60px 32px", border: "1px solid rgba(201,169,110,0.3)", background: "rgba(201,169,110,0.05)" }}>
        <div style={{ width: "64px", height: "64px", border: "1px solid #C9A96E", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "32px", color: "white", marginBottom: "12px", fontWeight: 300 }}>Booking Request Received</h3>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", lineHeight: 1.8 }}>
          Thank you! We will contact you within 2 hours to confirm your booking.<br />
          Check your email at <strong style={{ color: "#C9A96E" }}>{form.email || "the address provided"}</strong>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-grid">
        <div>
          <label style={labelStyle}>Full Name *</label>
          <input style={inputStyle} name="name" value={form.name} onChange={handleChange} required placeholder="Your full name"
            onFocus={(e) => (e.target.style.borderColor = "#C9A96E")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.2)")} />
        </div>
        <div>
          <label style={labelStyle}>Email Address *</label>
          <input style={inputStyle} name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com"
            onFocus={(e) => (e.target.style.borderColor = "#C9A96E")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.2)")} />
        </div>
        <div>
          <label style={labelStyle}>Phone Number *</label>
          <input style={inputStyle} name="phone" type="tel" value={form.phone} onChange={handleChange} required placeholder="(778) 000-0000"
            onFocus={(e) => (e.target.style.borderColor = "#C9A96E")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.2)")} />
        </div>
        <div>
          <label style={labelStyle}>City *</label>
          <select style={{ ...inputStyle, cursor: "pointer" }} name="city" value={form.city} onChange={handleChange} required
            onFocus={(e) => (e.target.style.borderColor = "#C9A96E")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.2)")}>
            <option value="" disabled>Select your city</option>
            {["Langley", "Surrey", "Abbotsford", "Maple Ridge", "Coquitlam", "Burnaby", "Vancouver", "Delta", "White Rock"].map(c => (
              <option key={c} value={c} style={{ background: "#1A1A1A" }}>{c}</option>
            ))}
          </select>
        </div>
        <div style={{ gridColumn: "1 / -1" }}>
          <label style={labelStyle}>Service Address</label>
          <input style={inputStyle} name="address" value={form.address} onChange={handleChange} placeholder="123 Main Street, Langley, BC"
            onFocus={(e) => (e.target.style.borderColor = "#C9A96E")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.2)")} />
        </div>
        <div>
          <label style={labelStyle}>Service Type *</label>
          <select style={{ ...inputStyle, cursor: "pointer" }} name="serviceType" value={form.serviceType} onChange={handleChange} required
            onFocus={(e) => (e.target.style.borderColor = "#C9A96E")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.2)")}>
            <option value="" disabled>Select a service</option>
            <option value="Standard Home Cleaning" style={{ background: "#1A1A1A" }}>Standard Home Cleaning</option>
            <option value="Deep Cleaning" style={{ background: "#1A1A1A" }}>Deep Cleaning</option>
            <option value="Move-In Cleaning" style={{ background: "#1A1A1A" }}>Move-In Cleaning</option>
            <option value="Move-Out Cleaning" style={{ background: "#1A1A1A" }}>Move-Out Cleaning</option>
            <option value="Office / Commercial Cleaning" style={{ background: "#1A1A1A" }}>Office / Commercial Cleaning</option>
            <option value="Post-Construction Cleaning" style={{ background: "#1A1A1A" }}>Post-Construction Cleaning</option>
          </select>
        </div>
        <div>
          <label style={labelStyle}>Bedrooms</label>
          <select style={{ ...inputStyle, cursor: "pointer" }} name="bedrooms" value={form.bedrooms} onChange={handleChange}
            onFocus={(e) => (e.target.style.borderColor = "#C9A96E")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.2)")}>
            <option value="" style={{ background: "#1A1A1A" }}>Select bedrooms</option>
            <option value="Studio" style={{ background: "#1A1A1A" }}>Studio</option>
            <option value="1 Bedroom" style={{ background: "#1A1A1A" }}>1 Bedroom</option>
            <option value="2 Bedrooms" style={{ background: "#1A1A1A" }}>2 Bedrooms</option>
            <option value="3 Bedrooms" style={{ background: "#1A1A1A" }}>3 Bedrooms</option>
            <option value="4+ Bedrooms" style={{ background: "#1A1A1A" }}>4+ Bedrooms</option>
            <option value="Office Space" style={{ background: "#1A1A1A" }}>Office Space</option>
          </select>
        </div>
        <div>
          <label style={labelStyle}>Cleaning Frequency</label>
          <select style={{ ...inputStyle, cursor: "pointer" }} name="frequency" value={form.frequency} onChange={handleChange}
            onFocus={(e) => (e.target.style.borderColor = "#C9A96E")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.2)")}>
            <option value="" style={{ background: "#1A1A1A" }}>Select frequency</option>
            <option value="One-Time" style={{ background: "#1A1A1A" }}>One-Time</option>
            <option value="Weekly (20% Off)" style={{ background: "#1A1A1A" }}>Weekly — 20% Off</option>
            <option value="Bi-Weekly (15% Off)" style={{ background: "#1A1A1A" }}>Bi-Weekly — 15% Off</option>
            <option value="Monthly (10% Off)" style={{ background: "#1A1A1A" }}>Monthly — 10% Off</option>
          </select>
        </div>
        <div>
          <label style={labelStyle}>Preferred Date</label>
          <input style={inputStyle} name="preferredDate" type="date" value={form.preferredDate} onChange={handleChange}
            onFocus={(e) => (e.target.style.borderColor = "#C9A96E")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.2)")} />
        </div>
        <div>
          <label style={labelStyle}>Preferred Time</label>
          <select style={{ ...inputStyle, cursor: "pointer" }} name="preferredTime" value={form.preferredTime} onChange={handleChange}
            onFocus={(e) => (e.target.style.borderColor = "#C9A96E")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.2)")}>
            <option value="" style={{ background: "#1A1A1A" }}>Select time</option>
            <option value="Morning (7AM-10AM)" style={{ background: "#1A1A1A" }}>Morning (7AM – 10AM)</option>
            <option value="Mid-Morning (10AM-1PM)" style={{ background: "#1A1A1A" }}>Mid-Morning (10AM – 1PM)</option>
            <option value="Afternoon (1PM-5PM)" style={{ background: "#1A1A1A" }}>Afternoon (1PM – 5PM)</option>
            <option value="Evening (5PM-8PM)" style={{ background: "#1A1A1A" }}>Evening (5PM – 8PM)</option>
          </select>
        </div>
        <div style={{ gridColumn: "1 / -1" }}>
          <label style={labelStyle}>Special Requests or Notes</label>
          <textarea style={{ ...inputStyle, resize: "vertical", minHeight: "100px" }}
            name="specialRequests" value={form.specialRequests} onChange={handleChange}
            placeholder="Pets, specific areas to focus on, access instructions, etc."
            onFocus={(e) => (e.target.style.borderColor = "#C9A96E")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.2)")} />
        </div>
      </div>

      {status === "error" && (
        <p style={{ color: "#e07070", fontSize: "13px", marginTop: "12px", textAlign: "center" }}>
          Something went wrong. Please try again or call us at (778) 893-6786.
        </p>
      )}

      <div style={{ textAlign: "center", marginTop: "32px" }}>
        <button type="submit" className="btn-primary" disabled={status === "loading"} style={{ opacity: status === "loading" ? 0.7 : 1, cursor: status === "loading" ? "wait" : "pointer", fontSize: "12px", padding: "16px 48px", letterSpacing: "3px" }}>
          {status === "loading" ? "Sending..." : "Submit Booking Request"}
        </button>
        <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", marginTop: "16px", letterSpacing: "1px" }}>
          No payment required — we will contact you within 2 hours to confirm.
        </p>
      </div>

      <style>{`
        @media (max-width: 600px) { .form-grid { grid-template-columns: 1fr !important; } }
        input[type="date"]::-webkit-calendar-picker-indicator { filter: invert(0.5); }
        select option { background: #1A1A1A; color: white; }
      `}</style>
    </form>
  );
}

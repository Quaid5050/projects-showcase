"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Send, CheckCircle, AlertCircle } from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  patientType: string;
  concernType: string;
  preferredDate: string;
  message: string;
}

const patientTypes = ["Woman", "Child", "Family", "Other"];
const concernTypes = [
  "Women's Health Support",
  "Children's Health Support",
  "Skin & Hair Concerns",
  "Digestive Wellness",
  "Stress & Sleep Support",
  "General Homeopathic Consultation",
  "Family Wellness",
  "Other / Not Listed",
];

export default function BookingForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    patientType: "",
    concernType: "",
    preferredDate: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const buildWhatsAppMessage = () => {
    const lines = [
      `Hi Dr. Afreen, I'd like to book a consultation.`,
      ``,
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      formData.email ? `Email: ${formData.email}` : "",
      `Patient Type: ${formData.patientType}`,
      `Concern: ${formData.concernType}`,
      formData.preferredDate ? `Preferred Date: ${formData.preferredDate}` : "",
      formData.message ? `Message: ${formData.message}` : "",
    ].filter(Boolean);
    return encodeURIComponent(lines.join("\n"));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.patientType || !formData.concernType || !formData.message) {
      setErrorMessage("Please fill in all required fields.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setErrorMessage("");

    // No database — submit opens WhatsApp directly
    setStatus("success");
    window.open(`https://wa.me/16477819461?text=${buildWhatsAppMessage()}`, "_blank");
  };

  const inputClass = "w-full px-4 py-3 rounded-2xl text-sm outline-none transition-all focus:ring-2 focus:ring-pink-soft/40 border";
  const inputStyle = { background: "#FFFCF8", borderColor: "rgba(247,168,196,0.3)", color: "#2B1821", fontFamily: "Nunito Sans, sans-serif" };
  const labelStyle = { color: "#7A1F3D", fontFamily: "Nunito Sans, sans-serif", fontSize: "0.8rem", fontWeight: 600, display: "block", marginBottom: "6px" };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-8 rounded-3xl text-center"
        style={{ background: "linear-gradient(135deg, #FFE8F0, #FFF0F5)", border: "1px solid rgba(247,168,196,0.3)" }}
      >
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: "rgba(37,211,102,0.1)" }}>
          <CheckCircle className="w-8 h-8" style={{ color: "#25D366" }} />
        </div>
        <h3 className="text-2xl font-light mb-3" style={{ fontFamily: "Cormorant Garamond, Georgia, serif", color: "#7A1F3D" }}>
          Inquiry Submitted!
        </h3>
        <p className="text-sm leading-relaxed mb-6" style={{ color: "#6B4755", fontFamily: "Nunito Sans, sans-serif" }}>
          Thank you! Dr. Afreen will reach out on WhatsApp shortly. You can also message directly using the button below.
        </p>
        <a
          href={`https://wa.me/16477819461?text=${buildWhatsAppMessage()}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white"
          style={{ background: "#25D366", fontFamily: "Nunito Sans, sans-serif" }}
        >
          <MessageCircle className="w-5 h-5" />
          Message on WhatsApp
        </a>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label style={labelStyle}>Full Name *</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your name"
            className={inputClass}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Phone Number *</label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="+1 647 000 0000"
            type="tel"
            className={inputClass}
            style={inputStyle}
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label style={labelStyle}>Email (Optional)</label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          type="email"
          className={inputClass}
          style={inputStyle}
        />
      </div>

      {/* Patient Type + Concern */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label style={labelStyle}>Patient Type *</label>
          <select
            name="patientType"
            value={formData.patientType}
            onChange={handleChange}
            required
            className={inputClass}
            style={inputStyle}
          >
            <option value="">Select type</option>
            {patientTypes.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label style={labelStyle}>Concern Type *</label>
          <select
            name="concernType"
            value={formData.concernType}
            onChange={handleChange}
            required
            className={inputClass}
            style={inputStyle}
          >
            <option value="">Select concern</option>
            {concernTypes.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>

      {/* Preferred Date */}
      <div>
        <label style={labelStyle}>Preferred Date (Optional)</label>
        <input
          name="preferredDate"
          value={formData.preferredDate}
          onChange={handleChange}
          type="date"
          min={new Date().toISOString().split("T")[0]}
          className={inputClass}
          style={inputStyle}
        />
      </div>

      {/* Message */}
      <div>
        <label style={labelStyle}>Brief Message *</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          placeholder="Briefly describe your concern or what you'd like to discuss..."
          className={`${inputClass} resize-none`}
          style={inputStyle}
        />
      </div>

      {/* Error */}
      {status === "error" && (
        <div className="flex items-center gap-2 p-3 rounded-xl" style={{ background: "rgba(122,31,61,0.06)", border: "1px solid rgba(122,31,61,0.2)" }}>
          <AlertCircle className="w-4 h-4 shrink-0" style={{ color: "#7A1F3D" }} />
          <p className="text-sm" style={{ color: "#7A1F3D", fontFamily: "Nunito Sans, sans-serif" }}>{errorMessage}</p>
        </div>
      )}

      {/* Submit */}
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <motion.button
          type="submit"
          disabled={status === "loading"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white disabled:opacity-60"
          style={{ background: "linear-gradient(135deg, #7A1F3D, #4B1025)", fontFamily: "Nunito Sans, sans-serif", boxShadow: "0 4px 16px rgba(122,31,61,0.25)" }}
        >
          {status === "loading" ? (
            <><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" /> Sending...</>
          ) : (
            <><Send className="w-4 h-4" /> Submit Inquiry</>
          )}
        </motion.button>

        <a
          href={`https://wa.me/16477819461?text=${buildWhatsAppMessage()}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white"
          style={{ background: "#25D366", fontFamily: "Nunito Sans, sans-serif" }}
        >
          <MessageCircle className="w-4 h-4" />
          Book via WhatsApp
        </a>
      </div>

      <p className="text-xs pt-1" style={{ color: "#9B6878", fontFamily: "Nunito Sans, sans-serif" }}>
        * Required fields. Your information is kept private and used only to respond to your inquiry.
      </p>
    </form>
  );
}

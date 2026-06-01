import BookingForm from "@/components/BookingForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Clean — M2M Pro Cleaners | Langley, BC",
  description: "Book your professional cleaning service online. No payment required — we will contact you to confirm. Serving Langley, Surrey, Vancouver & the Lower Mainland.",
};

export default function BookingPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: "linear-gradient(160deg, #1A1A1A 0%, #2D4A3E 100%)",
        padding: "160px 32px 80px",
        position: "relative",
      }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 60% 40%, rgba(201,169,110,0.08) 0%, transparent 55%)" }} />
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
          <p style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A96E", marginBottom: "20px" }}>Book Online</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(44px, 7vw, 76px)", fontWeight: 300, color: "white", marginBottom: "20px", letterSpacing: "-1px" }}>
            Book Your Clean
          </h1>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "rgba(255,255,255,0.6)", maxWidth: "480px", margin: "0 auto" }}>
            Fill in your details below. No payment required — we will contact you within 2 hours to confirm your booking.
          </p>
        </div>
      </section>

      {/* Discounts reminder */}
      <div style={{ background: "#C9A96E", padding: "16px 32px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap" }}>
          {["Weekly — 20% Off", "Bi-Weekly — 15% Off", "Monthly — 10% Off", "First Deep Clean — $20 Off"].map((d) => (
            <span key={d} style={{ fontSize: "12px", color: "white", letterSpacing: "1.5px", textTransform: "uppercase", fontWeight: 500 }}>{d}</span>
          ))}
        </div>
      </div>

      {/* Form */}
      <section style={{ background: "#1A1A1A", padding: "80px 32px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <BookingForm />
        </div>
      </section>

      {/* Trust */}
      <section style={{ background: "#FAF8F4", padding: "60px 32px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "40px", textAlign: "center" }} className="trust-grid">
          {[
            { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, title: "Licensed & Insured", desc: "Fully covered for your peace of mind" },
            { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, title: "2-Hour Response", desc: "We confirm every booking fast" },
            { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="20 6 9 17 4 12"/></svg>, title: "Satisfaction Guaranteed", desc: "Not happy? We come back and fix it free" },
          ].map((t, i) => (
            <div key={i}>
              <div style={{ color: "#C9A96E", marginBottom: "16px", display: "flex", justifyContent: "center" }}>{t.icon}</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", fontWeight: 500, color: "#1A1A1A", marginBottom: "8px" }}>{t.title}</h3>
              <p style={{ fontSize: "13px", color: "#8A8078", lineHeight: 1.7 }}>{t.desc}</p>
            </div>
          ))}
        </div>
        <style>{`@media (max-width: 600px) { .trust-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>
    </>
  );
}

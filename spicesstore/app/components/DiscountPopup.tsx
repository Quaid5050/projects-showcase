"use client";
import { useState, useEffect } from "react";

export default function DiscountPopup() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem("popup-dismissed")) {
      const t = setTimeout(() => setShow(true), 2200);
      return () => clearTimeout(t);
    }
  }, []);

  const dismiss = () => { sessionStorage.setItem("popup-dismissed", "1"); setShow(false); };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/discount-signup", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({ name, email }) });
    } catch {}
    setSubmitted(true);
    setLoading(false);
    setTimeout(dismiss, 3200);
  };

  if (!show) return null;

  return (
    <div onClick={(e) => { if (e.target === e.currentTarget) dismiss(); }} style={{
      position:"fixed", inset:0, zIndex:9999,
      display:"flex", alignItems:"center", justifyContent:"center", padding:"1rem",
      background:"rgba(44,24,16,0.72)", backdropFilter:"blur(5px)"
    }}>
      <div style={{
        background:"#FDF6EC", borderRadius:"22px", maxWidth:"430px", width:"100%",
        overflow:"hidden", boxShadow:"0 30px 80px rgba(44,24,16,0.4)", position:"relative"
      }}>
        <div style={{ height:"5px", background:"linear-gradient(90deg,#E8A020,#C4622D,#E8A020)" }}/>
        <button onClick={dismiss} style={{
          position:"absolute", top:"14px", right:"14px", background:"none", border:"none",
          cursor:"pointer", color:"rgba(44,24,16,0.3)", padding:"4px", lineHeight:1
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>

        <div style={{ padding:"2.2rem 2.5rem" }}>
          <div style={{ display:"flex", justifyContent:"center", marginBottom:"1.1rem" }}>
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
              <circle cx="36" cy="36" r="35" fill="#FFF8E8" stroke="#E8A020" strokeWidth="1.5"/>
              <path d="M36 12C36 12 22 22 22 34C22 42.8 28.3 50 36 50C43.7 50 50 42.8 50 34C50 22 36 12 36 12Z" fill="#E8A020" opacity="0.65"/>
              <path d="M36 22C36 22 26 30 26 37C26 41.4 30.6 45 36 45C41.4 45 46 41.4 46 37C46 30 36 22 36 22Z" fill="#C4622D" opacity="0.55"/>
              <circle cx="36" cy="37" r="7" fill="#E8A020"/>
              <circle cx="36" cy="37" r="3" fill="#2C1810"/>
            </svg>
          </div>

          {!submitted ? (
            <>
              <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.85rem", color:"#2C1810", textAlign:"center", marginBottom:"0.4rem" }}>
                Welcome! Get 10% Off
              </h2>
              <p style={{ color:"rgba(44,24,16,0.52)", fontSize:"0.875rem", textAlign:"center", lineHeight:1.65, marginBottom:"1.6rem" }}>
                Enter your name and email to unlock your first order discount.
              </p>
              <form onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", gap:"0.75rem" }}>
                <input className="form-input" type="text" placeholder="Your name" value={name} onChange={e=>setName(e.target.value)} required/>
                <input className="form-input" type="email" placeholder="Your email address" value={email} onChange={e=>setEmail(e.target.value)} required/>
                <button type="submit" className="btn-submit" disabled={loading}>
                  {loading ? "Claiming..." : "Claim My 10% Discount"}
                </button>
              </form>
              <p style={{ color:"rgba(44,24,16,0.32)", fontSize:"0.75rem", textAlign:"center", marginTop:"0.75rem" }}>No spam. Unsubscribe anytime.</p>
            </>
          ) : (
            <div style={{ textAlign:"center", padding:"1rem 0" }}>
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" style={{ margin:"0 auto 1rem", display:"block" }}>
                <circle cx="28" cy="28" r="27" fill="#6B7C5C" opacity="0.14"/>
                <path d="M16 28l9 9 15-14" stroke="#6B7C5C" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.5rem", color:"#2C1810", marginBottom:"0.5rem" }}>You are in!</h3>
              <p style={{ color:"rgba(44,24,16,0.52)", fontSize:"0.875rem" }}>Discount code is on its way to your email.</p>
            </div>
          )}
        </div>

        <div style={{ background:"rgba(232,160,32,0.1)", borderTop:"1px solid rgba(232,160,32,0.2)", padding:"0.85rem 1.5rem", textAlign:"center" }}>
          <p style={{ fontSize:"0.78rem", color:"rgba(44,24,16,0.6)" }}>
            <strong style={{ color:"#C4622D" }}>Also:</strong> Orders over $100 get 15% off automatically!
          </p>
        </div>
      </div>
    </div>
  );
}

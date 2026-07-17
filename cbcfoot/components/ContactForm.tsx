"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name:"", email:"", phone:"", service:"", message:"" });
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  const [err, setErr] = useState("");

  const handle = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setStatus("loading"); setErr("");
    try {
      const res = await fetch("/api/contact", { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify(form) });
      const data = await res.json();
      if (res.ok) { setStatus("success"); setForm({ name:"", email:"", phone:"", service:"", message:"" }); }
      else { setStatus("error"); setErr(data.error || "Something went wrong. Please try again."); }
    } catch { setStatus("error"); setErr("Network error. Please call us directly."); }
  };

  if (status === "success") return (
    <div style={{ textAlign:"center", padding:"2.5rem 1rem" }}>
      <div style={{ width:"60px", height:"60px", borderRadius:"50%", backgroundColor:"#DCFCE7", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 1.25rem" }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <h3 style={{ fontFamily:"var(--font-playfair)", fontSize:"1.4rem", color:"#1B2A6B", marginBottom:"0.6rem" }}>Message Sent!</h3>
      <p style={{ color:"#4B5563", lineHeight:1.7, marginBottom:"1.25rem", fontSize:"0.92rem" }}>
        Thank you! Lance will be in touch soon. For immediate help call <a href="tel:+14032592474" style={{ color:"#1B2A6B", fontWeight:700 }}>+1 403 259 2474</a>.
      </p>
      <button onClick={() => setStatus("idle")} className="btn-outline" style={{ fontSize:"0.82rem" }}>Send Another Message</button>
    </div>
  );

  return (
    <form onSubmit={submit} style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>
      <div className="form-row" style={{ display:"grid", gridTemplateColumns:"1fr", gap:"1rem" }}>
        <div><label style={lbl}>Full Name *</label><input type="text" name="name" value={form.name} onChange={handle} required placeholder="Your name" /></div>
        <div><label style={lbl}>Email *</label><input type="email" name="email" value={form.email} onChange={handle} required placeholder="your@email.com" /></div>
      </div>
      <div className="form-row" style={{ display:"grid", gridTemplateColumns:"1fr", gap:"1rem" }}>
        <div><label style={lbl}>Phone</label><input type="tel" name="phone" value={form.phone} onChange={handle} placeholder="+1 403 000 0000" /></div>
        <div>
          <label style={lbl}>Service Interested In</label>
          <select name="service" value={form.service} onChange={handle} style={{ cursor:"pointer" }}>
            <option value="">Select a service...</option>
            <option>Custom Orthotics</option>
            <option>Free Foot Assessment</option>
            <option>Free Back Assessment</option>
            <option>General Inquiry</option>
          </select>
        </div>
      </div>
      <div><label style={lbl}>Message *</label><textarea name="message" value={form.message} onChange={handle} required rows={5} placeholder="Tell us about your foot or back concerns..." style={{ resize:"vertical" }} /></div>
      {status === "error" && <div style={{ backgroundColor:"#FEF2F2", border:"1px solid #FECACA", borderRadius:"8px", padding:"0.9rem", color:"#DC2626", fontSize:"0.88rem" }}>{err}</div>}
      <button type="submit" disabled={status==="loading"} className="btn-primary" style={{ width:"100%", opacity:status==="loading"?0.7:1, cursor:status==="loading"?"not-allowed":"pointer" }}>
        {status === "loading" ? "Sending..." : <>Send Message <SendIcon /></>}
      </button>
      <p style={{ textAlign:"center", color:"#9CA3AF", fontSize:"0.8rem" }}>Or call: <a href="tel:+14032592474" style={{ color:"#1B2A6B", fontWeight:700 }}>+1 403 259 2474</a></p>
      <style>{`@media(min-width:480px){.form-row{grid-template-columns:1fr 1fr!important}}`}</style>
    </form>
  );
}
const lbl: React.CSSProperties = { display:"block", fontWeight:700, fontSize:"0.8rem", color:"#374151", marginBottom:"5px", letterSpacing:"0.03em", textTransform:"uppercase" };
function SendIcon() { return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>; }
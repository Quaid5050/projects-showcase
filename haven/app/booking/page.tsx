"use client";
import { useState } from "react";

const UNSPLASH = "https://images.unsplash.com";

const serviceOptions = [
  "Tail Light Tinting",
  "Ceramic Coating",
  "Paint Protection Film",
  "Window Tinting",
  "Tire Services",
  "Vinyl Wraps",
  "DashCams",
  "Wheel Balancing",
  "Custom Stickers",
  "Tire Installation",
  "Logo Blackout",
  "Headlight Restoration",
  "Multiple Services",
  "Not Sure — Need Consultation",
];

const locationOptions = [
  "Scarborough — 124 Production Dr, ON M1H 2X8",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    service: "",
    location: "",
    notes: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const base: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    padding: "14px 16px",
    color: "#f0f0f0",
    fontFamily: "'Rajdhani',sans-serif",
    fontSize: "16px",
    outline: "none",
    transition: "border-color .25s",
    boxSizing: "border-box",
  };

  const lbl: React.CSSProperties = {
    display: "block",
    fontFamily: "'Orbitron',sans-serif",
    fontSize: "11px",
    letterSpacing: "3px",
    color: "rgba(240,240,240,0.65)",
    textTransform: "uppercase",
    marginBottom: "8px",
  };

  const fo = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    (e.target.style.borderColor = "#e8001d");
  const bl = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    (e.target.style.borderColor = "rgba(255,255,255,0.1)");

  const Chevron = () => (
    <svg style={{ position:"absolute", right:"16px", top:"50%", transform:"translateY(-50%)", pointerEvents:"none" }}
      width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="#e8001d" strokeWidth="1.8" strokeLinecap="round">
      <path d="M2 4.5 L6.5 9 L11 4.5"/>
    </svg>
  );

  return (
    <main style={{ background: "#080808", paddingTop: "100px" }}>

      {/* Hero */}
      <section style={{ position:"relative", height:"55vh", display:"flex", alignItems:"center", overflow:"hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${UNSPLASH}/photo-1603386329225-868f9b1ee6c9?w=1400&q=80`} alt="Contact"
          style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", filter:"brightness(0.2) saturate(1.1)" }}
          onError={e => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to right,rgba(8,8,8,0.96) 50%,rgba(8,8,8,0.5) 100%)" }}/>
        <div style={{ position:"absolute", top:0, left:0, right:0, height:"2px", background:"linear-gradient(90deg,transparent,#e8001d 30%,#e8001d 70%,transparent)" }}/>
        <div style={{ position:"relative", padding:"0 60px", zIndex:2, maxWidth:"700px" }}>
          <span style={{ display:"inline-flex", alignItems:"center", gap:"10px", fontFamily:"'Orbitron',sans-serif", fontSize:"13px", letterSpacing:"6px", color:"#e8001d", textTransform:"uppercase", marginBottom:"20px" }}>
            <span style={{ width:"28px", height:"1px", background:"#e8001d", display:"block" }}/>Get in Touch
          </span>
          <h1 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"clamp(58px,7vw,100px)", lineHeight:.9, color:"#f0f0f0", letterSpacing:"2px", marginBottom:"20px" }}>
            BOOKING<br/><span style={{ color:"#e8001d" }}>FORM</span>
          </h1>
          <p style={{ fontSize:"18px", color:"rgba(240,240,240,0.88)", lineHeight:1.85, maxWidth:"460px" }}>
            Same-week slots available. Fill out the form and our team will confirm your booking within 24 hours.
          </p>
        </div>
      </section>

      {/* Main grid */}
      <section style={{ padding:"100px 60px", maxWidth:"1400px", margin:"0 auto" }}>
        <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr", gap:"60px", alignItems:"start" }} className="contact-grid">

          {/* ── Form box ── */}
          <div style={{ background:"#0d0d0d", border:"1px solid rgba(255,255,255,0.07)", padding:"56px" }}>
            {status === "sent" ? (
              <div style={{ textAlign:"center", padding:"60px 0" }}>
                <div style={{ width:"64px", height:"64px", border:"2px solid #e8001d", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 24px" }}>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#e8001d" strokeWidth="2" strokeLinecap="round">
                    <path d="M5 14 L11 20 L23 8"/>
                  </svg>
                </div>
                <h3 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"42px", color:"#f0f0f0", marginBottom:"12px" }}>REQUEST RECEIVED</h3>
                <p style={{ fontSize:"17px", color:"rgba(240,240,240,0.88)", lineHeight:1.8 }}>
                  We will contact you within 24 hours to confirm your appointment.<br/>Check your email for a summary.
                </p>
              </div>
            ) : (
              <form onSubmit={submit}>
                <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"40px", color:"#f0f0f0", marginBottom:"8px", letterSpacing:"1px" }}>BOOK A SERVICE</h2>
                <p style={{ fontSize:"14px", color:"rgba(240,240,240,0.55)", letterSpacing:"1px", marginBottom:"40px" }}>All fields marked with * are required.</p>

                {status === "error" && (
                  <div style={{ background:"rgba(232,0,29,0.1)", border:"1px solid rgba(232,0,29,0.3)", padding:"14px 18px", marginBottom:"24px", fontSize:"14px", color:"#ff4d4d" }}>
                    Something went wrong. Please try again or call us at (416) 430-0040.
                  </div>
                )}

                <div style={{ marginBottom:"20px" }}>
                  <label style={lbl}>Full Name *</label>
                  <input type="text" placeholder="John Smith" required value={form.name} onChange={e => set("name", e.target.value)} style={base} onFocus={fo} onBlur={bl} />
                </div>

                <div style={{ marginBottom:"20px" }}>
                  <label style={lbl}>Email Address *</label>
                  <input type="email" placeholder="john@example.com" required value={form.email} onChange={e => set("email", e.target.value)} style={base} onFocus={fo} onBlur={bl} />
                </div>

                <div style={{ marginBottom:"20px" }}>
                  <label style={lbl}>Phone Number *</label>
                  <input type="tel" placeholder="(555) 000-0000" required value={form.phone} onChange={e => set("phone", e.target.value)} style={base} onFocus={fo} onBlur={bl} />
                </div>

                <div style={{ marginBottom:"20px" }}>
                  <label style={lbl}>Preferred Date</label>
                  <input type="date" value={form.date} onChange={e => set("date", e.target.value)} style={{ ...base, colorScheme:"dark" }} onFocus={fo} onBlur={bl} />
                </div>

                <div style={{ marginBottom:"20px" }}>
                  <label style={lbl}>Service Required *</label>
                  <div style={{ position:"relative" }}>
                    <select required value={form.service} onChange={e => set("service", e.target.value)}
                      style={{ ...base, appearance:"none", WebkitAppearance:"none", cursor:"pointer", color: form.service ? "#f0f0f0" : "rgba(240,240,240,0.38)" }}
                      onFocus={fo} onBlur={bl}>
                      <option value="" disabled style={{ background:"#111", color:"rgba(255,255,255,0.4)" }}>Select a service...</option>
                      {serviceOptions.map(s => (<option key={s} value={s} style={{ background:"#111", color:"#f0f0f0" }}>{s}</option>))}
                    </select>
                    <Chevron/>
                  </div>
                </div>

                <div style={{ marginBottom:"20px" }}>
                  <label style={lbl}>Preferred Location *</label>
                  <div style={{ position:"relative" }}>
                    <select required value={form.location} onChange={e => set("location", e.target.value)}
                      style={{ ...base, appearance:"none", WebkitAppearance:"none", cursor:"pointer", color: form.location ? "#f0f0f0" : "rgba(240,240,240,0.38)" }}
                      onFocus={fo} onBlur={bl}>
                      <option value="" disabled style={{ background:"#111", color:"rgba(255,255,255,0.4)" }}>Select a location...</option>
                      {locationOptions.map(l => (<option key={l} value={l} style={{ background:"#111", color:"#f0f0f0" }}>{l}</option>))}
                    </select>
                    <Chevron/>
                  </div>
                </div>

                <div style={{ marginBottom:"36px" }}>
                  <label style={lbl}>Additional Notes / Vehicle Details</label>
                  <textarea rows={4} value={form.notes} onChange={e => set("notes", e.target.value)}
                    placeholder="Your vehicle make/model, preferred time, or any special requirements..."
                    style={{ ...base, resize:"vertical" }} onFocus={fo} onBlur={bl} />
                </div>

                <button type="submit" disabled={status === "sending"}
                  style={{ width:"100%", background: status === "sending" ? "#666" : "#e8001d", color:"#fff", border:"none", padding:"18px", fontFamily:"'Orbitron',sans-serif", fontSize:"13px", fontWeight:700, letterSpacing:"4px", textTransform:"uppercase", cursor: status === "sending" ? "not-allowed" : "pointer", transition:"all .3s", opacity: status === "sending" ? 0.7 : 1 }}
                  onMouseEnter={e => { if (status !== "sending") { e.currentTarget.style.background="#ff0025"; e.currentTarget.style.boxShadow="0 0 40px rgba(232,0,29,0.5)"; }}}
                  onMouseLeave={e => { if (status !== "sending") { e.currentTarget.style.background="#e8001d"; e.currentTarget.style.boxShadow="none"; }}}>
                  {status === "sending" ? "SENDING..." : "Get Appointment"}
                </button>
              </form>
            )}
          </div>

          {/* ── Sidebar ── */}
          <div style={{ display:"flex", flexDirection:"column", gap:"2px" }}>
            {[
              { icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#e8001d" strokeWidth="1.5" strokeLinecap="round"><path d="M3 3h3l1.5 4-2 1.5a11 11 0 0 0 4 4L11 11l4 1.5V16a2 2 0 0 1-2 2C6.5 18 0 11.5 0 5a2 2 0 0 1 2-2z"/></svg>, label:"Phone", val:"(416) 430-0040", sub:"(416) 431-5255" },
              { icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#e8001d" strokeWidth="1.5" strokeLinecap="round"><path d="M2 4h16v12H2z"/><path d="M2 4 L10 11 L18 4"/></svg>, label:"Email", val:"havencustomstinttire@gmail.com", sub:"Reply within 24 hours" },
              { icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#e8001d" strokeWidth="1.5" strokeLinecap="round"><circle cx="10" cy="8" r="4"/><path d="M4 18 Q4 13 10 13 Q16 13 16 18"/></svg>, label:"Location", val:"124 Production Dr", sub:"Scarborough, ON M1H 2X8" },
              { icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#e8001d" strokeWidth="1.5" strokeLinecap="round"><circle cx="10" cy="10" r="8"/><path d="M10 5 L10 10 L14 12"/></svg>, label:"Hours", val:"Mon to Sun  11AM to 8PM", sub:"" },
            ].map(i => (
              <div key={i.label} style={{ background:"#0d0d0d", border:"1px solid rgba(255,255,255,0.07)", padding:"28px", display:"flex", gap:"16px", alignItems:"flex-start" }}>
                <div style={{ width:"44px", height:"44px", border:"1px solid rgba(232,0,29,0.35)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>{i.icon}</div>
                <div>
                  <div style={{ fontFamily:"'Orbitron',sans-serif", fontSize:"11px", letterSpacing:"4px", color:"rgba(240,240,240,0.5)", textTransform:"uppercase", marginBottom:"6px" }}>{i.label}</div>
                  <div style={{ fontFamily:"'Rajdhani',sans-serif", fontSize:"16px", fontWeight:600, color:"#f0f0f0", marginBottom:"3px" }}>{i.val}</div>
                  <div style={{ fontSize:"14px", color:"rgba(240,240,240,0.5)" }}>{i.sub}</div>
                </div>
              </div>
            ))}
            <div style={{ background:"#0d0d0d", border:"1px solid rgba(255,255,255,0.07)", overflow:"hidden", position:"relative", height:"220px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${UNSPLASH}/photo-1449824913935-59a10b8d2000?w=600&q=80`} alt="Location"
                style={{ width:"100%", height:"100%", objectFit:"cover", filter:"brightness(0.35) saturate(0.5)" }}
                onError={e => { (e.target as HTMLImageElement).style.display = "none"; }} />
              <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", gap:"8px" }}>
                <div style={{ width:"14px", height:"14px", background:"#e8001d", borderRadius:"50%", boxShadow:"0 0 20px rgba(232,0,29,0.8)" }}/>
                <span style={{ fontFamily:"'Orbitron',sans-serif", fontSize:"12px", letterSpacing:"3px", color:"#e8001d", textTransform:"uppercase" }}>Find Us</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <style>{`
        input[type="date"]::-webkit-calendar-picker-indicator { filter: invert(0.7); cursor: pointer; }
        @media(max-width:900px){
          .contact-grid { grid-template-columns: 1fr !important; }
          section { padding-left: 24px !important; padding-right: 24px !important; }
        }
      `}</style>
    </main>
  );
}
export const metadata = { title: "Contact Us | ShoeMate Orthotic Clinic" };

export default function ContactPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="section-label">Get In Touch</p>
          <h1 className="section-title section-title-white" style={{ marginBottom:"0.75rem" }}>Contact Us</h1>
          <div className="red-bar-center" />
          <p className="section-subtitle" style={{ maxWidth:"560px", margin:"0 auto", color:"rgba(255,255,255,0.75)" }}>
            Call Lance directly or send a message. Free foot and back assessment — no obligations, no time limits.
          </p>
        </div>
      </div>

      <section className="section" style={{ backgroundColor:"#F5F7FC" }}>
        <div className="container">

          {/* 3 Contact Cards */}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:"2px", marginBottom:"48px" }}>

            {/* Phone (Landline) */}
            <a href="tel:+14032592474" style={{
              background:"#fff", padding:"48px 36px", textDecoration:"none",
              borderTop:"4px solid #1B2A6B", display:"flex", flexDirection:"column",
              alignItems:"center", textAlign:"center", gap:"20px",
              border:"1px solid #DDE3F0", transition:"background 0.25s",
            }}>
              <div style={{ width:"64px", height:"64px", background:"#1B2A6B", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <PhoneIcon />
              </div>
              <div>
                <div style={{ fontWeight:700, fontSize:"11px", letterSpacing:"0.25em", textTransform:"uppercase", color:"#1B2A6B", marginBottom:"10px" }}>Phone (Preferred)</div>
                <div style={{ fontSize:"22px", fontWeight:700, color:"#1B2A6B", marginBottom:"8px" }}>+1 403 259 2474</div>
                <p style={{ fontSize:"13px", color:"#6B7280", lineHeight:1.6 }}>Speak directly with Lance about your foot health needs. Available Mon–Sat.</p>
              </div>
              <div style={{ display:"flex", alignItems:"center", gap:"6px", color:"#1B2A6B", fontSize:"12px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", marginTop:"auto" }}>
                Call Now
                <svg width="14" height="8" viewBox="0 0 16 10"><path d="M0 5h14M10 1l4 4-4 4" stroke="#1B2A6B" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
              </div>
            </a>

            {/* Email */}
            <a href="mailto:cbcfoot@live.ca" style={{
              background:"#fff", padding:"48px 36px", textDecoration:"none",
              borderTop:"4px solid #E63329", display:"flex", flexDirection:"column",
              alignItems:"center", textAlign:"center", gap:"20px",
              border:"1px solid #DDE3F0", transition:"background 0.25s",
            }}>
              <div style={{ width:"64px", height:"64px", background:"#E63329", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <MailIcon />
              </div>
              <div>
                <div style={{ fontWeight:700, fontSize:"11px", letterSpacing:"0.25em", textTransform:"uppercase", color:"#E63329", marginBottom:"10px" }}>Email Us</div>
                <div style={{ fontSize:"20px", fontWeight:700, color:"#1B2A6B", marginBottom:"8px" }}>cbcfoot@live.ca</div>
                <p style={{ fontSize:"13px", color:"#6B7280", lineHeight:1.6 }}>Send us your questions and we'll get back to you within 24 hours.</p>
              </div>
              <div style={{ display:"flex", alignItems:"center", gap:"6px", color:"#E63329", fontSize:"12px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", marginTop:"auto" }}>
                Send Email
                <svg width="14" height="8" viewBox="0 0 16 10"><path d="M0 5h14M10 1l4 4-4 4" stroke="#E63329" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
              </div>
            </a>

            {/* Text / Mobile */}
            <a href="sms:+15879991944" style={{
              background:"#fff", padding:"48px 36px", textDecoration:"none",
              borderTop:"4px solid #16A34A", display:"flex", flexDirection:"column",
              alignItems:"center", textAlign:"center", gap:"20px",
              border:"1px solid #DDE3F0", transition:"background 0.25s",
            }}>
              <div style={{ width:"64px", height:"64px", background:"#16A34A", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <TextIcon />
              </div>
              <div>
                <div style={{ fontWeight:700, fontSize:"11px", letterSpacing:"0.25em", textTransform:"uppercase", color:"#16A34A", marginBottom:"10px" }}>Text / Mobile</div>
                <div style={{ fontSize:"22px", fontWeight:700, color:"#1B2A6B", marginBottom:"8px" }}>+1 587 999 1944</div>
                <p style={{ fontSize:"13px", color:"#6B7280", lineHeight:1.6 }}>Prefer texting? Send Lance a quick message directly to his mobile.</p>
              </div>
              <div style={{ display:"flex", alignItems:"center", gap:"6px", color:"#16A34A", fontSize:"12px", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", marginTop:"auto" }}>
                Text Now
                <svg width="14" height="8" viewBox="0 0 16 10"><path d="M0 5h14M10 1l4 4-4 4" stroke="#16A34A" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
              </div>
            </a>
          </div>

          {/* Bottom info strip */}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:"1px", background:"#DDE3F0" }}>
            {[
              { label:"Hours", value:"Mon – Sat · 9AM to 5PM" },
              { label:"Response Time", value:"Within 24 Business Hours" },
              { label:"Assessment", value:"Free · No Obligations" },
            ].map(item => (
              <div key={item.label} style={{ background:"#F5F7FC", padding:"24px 32px", textAlign:"center" }}>
                <div style={{ fontSize:"10px", fontWeight:700, letterSpacing:"0.25em", textTransform:"uppercase", color:"#E63329", marginBottom:"8px" }}>{item.label}</div>
                <div style={{ fontSize:"15px", fontWeight:600, color:"#1B2A6B" }}>{item.value}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          div[style*="repeat(3"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.63 4.9 2 2 0 0 1 3.6 2.7h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10a16 16 0 0 0 6 6l1.36-1.36a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}

function TextIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      <line x1="8" y1="8" x2="16" y2="8"/>
      <line x1="8" y1="12" x2="13" y2="12"/>
    </svg>
  );
}
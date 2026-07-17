import Link from "next/link";
export const metadata = { title: "Services | ShoeMate Orthotic Clinic" };

export default function ServicesPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="section-label">What We Offer</p>
          <h1 className="section-title section-title-white" style={{ marginBottom:"0.75rem" }}>Our Services</h1>
          <div className="red-bar-center" />
          <p className="section-subtitle" style={{ maxWidth:"560px", margin:"0 auto", color:"rgba(255,255,255,0.75)" }}>Custom orthotics and life-improving suggestions — built around your needs.</p>
        </div>
      </div>

      <section className="section" style={{ backgroundColor:"#F5F7FC" }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems:"center", marginBottom:"4rem" }}>
            <div>
              <span style={{ display:"inline-block", backgroundColor:"#E63329", color:"#fff", fontSize:"0.7rem", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", padding:"5px 14px", borderRadius:"50px", marginBottom:"1.25rem" }}>Signature Service</span>
              <h2 className="section-title">Custom Orthotics</h2>
              <div className="red-bar" />
              <p className="section-subtitle" style={{ marginBottom:"1.5rem" }}>Handcrafted, custom-fit orthotics made right in front of you in approximately 30 minutes. Lance designed this system 45 years ago — fast, effective, and built to last.</p>
              <ul style={{ listStyle:"none", marginBottom:"2rem" }}>
                {["Made for your unique foot structure","Ready in approximately 30 minutes","Lifetime warranty on product and service","Free long shoe horn with every order","Best prices in the industry — call for details"].map(item=>(
                  <li key={item} style={{ display:"flex", alignItems:"flex-start", gap:"10px", padding:"0.55rem 0", borderBottom:"1px solid #DDE3F0", color:"#4B5563", fontSize:"0.92rem" }}>
                    <CheckIcon /> {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary">Book Your Assessment</Link>
            </div>
            <div style={{ backgroundColor:"#1B2A6B", borderRadius:"16px", padding:"clamp(1.5rem,4vw,2.5rem)", textAlign:"center" }}>
              <FootSVG />
              <h3 style={{ fontFamily:"var(--font-playfair)", color:"#fff", fontSize:"1.3rem", margin:"1.25rem 0 0.75rem" }}>Built While You Wait</h3>
              <p style={{ color:"rgba(255,255,255,0.72)", lineHeight:1.7, fontSize:"0.92rem" }}>No waiting weeks. No molds sent away. Your orthotics are crafted right here, in about 30 minutes, by Lance himself.</p>
              <div style={{ marginTop:"1.5rem", padding:"1.25rem", backgroundColor:"rgba(230,51,41,0.15)", borderRadius:"10px", border:"1px solid rgba(230,51,41,0.3)" }}>
                <div style={{ color:"#E63329", fontWeight:700, fontSize:"1rem", marginBottom:"4px" }}>Special Offer</div>
                <div style={{ color:"rgba(255,255,255,0.85)", fontSize:"0.88rem" }}>FREE long shoe horn included with every orthotic order</div>
              </div>
            </div>
          </div>

          <div style={{ textAlign:"center", marginBottom:"2.5rem" }}>
            <p className="section-label">No Cost To You</p>
            <h2 className="section-title">Free Assessments</h2>
            <div className="red-bar-center" />
            <p className="section-subtitle" style={{ maxWidth:"560px", margin:"0 auto" }}>Your assessment is completely free. No obligations. No time limits. Just honest, expert analysis.</p>
          </div>

          <div className="grid-2" style={{ gap:"1.5rem", marginBottom:"3rem" }}>
            {[
              { title:"Foot Assessment", features:["Standing position analysis","Walking position analysis","Full explanation throughout","No time limits","No appointment pressure"] },
              { title:"Back Assessment", features:["Back-to-foot relationship analysis","Standing posture review","Walking gait analysis","Suggestions provided","No time limits"] },
            ].map(s=>(
              <div key={s.title} className="card" style={{ border:"2px solid #1B2A6B", textAlign:"center" }}>
                <h3 style={{ fontFamily:"var(--font-playfair)", color:"#1B2A6B", fontSize:"1.25rem", marginBottom:"0.5rem" }}>{s.title}</h3>
                <div style={{ fontFamily:"var(--font-playfair)", fontSize:"2rem", fontWeight:700, color:"#E63329", marginBottom:"1.5rem" }}>FREE</div>
                <ul style={{ listStyle:"none", textAlign:"left" }}>
                  {s.features.map(f=>(
                    <li key={f} style={{ display:"flex", alignItems:"center", gap:"9px", padding:"0.45rem 0", color:"#4B5563", fontSize:"0.9rem", borderBottom:"1px solid #F0F2F8" }}>
                      <CheckIcon /> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-outline" style={{ marginTop:"1.5rem", width:"100%" }}>Book Free Assessment</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor:"#EDF0F8" }}>
        <div className="container" style={{ maxWidth:"760px", textAlign:"center" }}>
          <h2 className="section-title">Pricing</h2>
          <div className="red-bar-center" />
          <p className="section-subtitle" style={{ marginBottom:"2rem" }}>Our prices and services are the best in the industry. Orthotics vary in price. The assessment is always free. Call us to discuss — no pressure.</p>
          <div className="grid-4" style={{ gridTemplateColumns:"1fr 1fr", marginBottom:"2rem" }}>
            {[["Foot Assessment","FREE"],["Back Assessment","FREE"],["Custom Orthotics","Call Us"],["Shoe Horn Gift","FREE"]].map(([l,p])=>(
              <div key={l} className="card" style={{ padding:"1.25rem" }}>
                <div style={{ fontFamily:"var(--font-playfair)", fontSize:"1.4rem", fontWeight:700, color:"#1B2A6B" }}>{p}</div>
                <div style={{ color:"#6B7280", fontSize:"0.82rem", marginTop:"3px" }}>{l}</div>
              </div>
            ))}
          </div>
          <Link href="/contact" className="btn-primary">Get a Quote — Call Lance</Link>
        </div>
      </section>

      <section style={{ background:"linear-gradient(135deg,#E63329,#B5251C)", padding:"4rem 0", textAlign:"center" }}>
        <div className="container" style={{ maxWidth:"560px" }}>
          <h2 style={{ fontFamily:"var(--font-playfair)", fontSize:"clamp(1.5rem,4vw,2.1rem)", fontWeight:700, color:"#fff", marginBottom:"0.9rem" }}>Ready to Get Started?</h2>
          <p style={{ color:"rgba(255,255,255,0.9)", marginBottom:"1.75rem" }}>Call Lance today or fill out the contact form. Free assessment, no obligations.</p>
          <div style={{ display:"flex", gap:"0.75rem", justifyContent:"center", flexWrap:"wrap" }}>
            <Link href="/contact" className="btn-white">Contact Us</Link>
            <a href="tel:+14032592474" className="btn-outline" style={{ borderColor:"#fff", color:"#fff" }}>+1 403 259 2474</a>
          </div>
        </div>
      </section>
    </>
  );
}
function CheckIcon() { return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#E63329" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0}}><polyline points="20 6 9 17 4 12"/></svg>; }
function FootSVG() {
  return (
    <svg width="130" height="130" viewBox="0 0 120 120" fill="none" style={{ margin:"0 auto" }}>
      <ellipse cx="60" cy="82" rx="28" ry="20" fill="rgba(230,51,41,0.15)" stroke="#E63329" strokeWidth="1.5"/>
      <path d="M40 82 Q35 60 38 44 Q42 28 55 26 Q67 25 72 35 Q77 46 73 62 Q71 72 69 82" stroke="#fff" strokeWidth="2" fill="rgba(255,255,255,0.05)" strokeLinecap="round"/>
      <ellipse cx="51" cy="26" rx="5" ry="7" fill="rgba(255,255,255,0.15)" stroke="#fff" strokeWidth="1.5"/>
      <ellipse cx="61" cy="24" rx="4.5" ry="6.5" fill="rgba(255,255,255,0.15)" stroke="#fff" strokeWidth="1.5"/>
      <ellipse cx="70" cy="25" rx="4" ry="6" fill="rgba(255,255,255,0.15)" stroke="#fff" strokeWidth="1.5"/>
      <ellipse cx="78" cy="29" rx="3.5" ry="5.5" fill="rgba(255,255,255,0.15)" stroke="#fff" strokeWidth="1.5"/>
      <ellipse cx="42" cy="31" rx="4" ry="6" fill="rgba(255,255,255,0.15)" stroke="#fff" strokeWidth="1.5"/>
    </svg>
  );
}
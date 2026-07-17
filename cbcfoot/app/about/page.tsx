import Link from "next/link";
export const metadata = { title: "About Lance Colins | ShoeMate Orthotic Clinic" };

export default function AboutPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="section-label">Our Story</p>
          <h1 className="section-title section-title-white" style={{ marginBottom:"0.75rem" }}>About ShoeMate Clinic</h1>
          <div className="red-bar-center" />
          <p className="section-subtitle" style={{ maxWidth:"560px", margin:"0 auto", color:"rgba(255,255,255,0.75)" }}>45 years of improving lives, one step at a time.</p>
        </div>
      </div>

      <section className="section" style={{ backgroundColor:"#F5F7FC" }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems:"center" }}>
            <div>
              <p className="section-label">The Founder</p>
              <h2 className="section-title">Lance Colins</h2>
              <div className="red-bar" />
              <p className="section-subtitle" style={{ marginBottom:"1.25rem" }}>In 1979, Lance Colins started with a vision: that everyone deserves to walk without pain, and that custom orthotics should be accessible, fast, and built to last.</p>
              <p style={{ color:"#4B5563", lineHeight:1.8, marginBottom:"1.25rem", fontSize:"0.95rem" }}>&quot;I designed my system 45 years ago. It&apos;s quick and very effective. I&apos;ve been to a few rodeos in my lifetime and have many good ideas to help improve your health and your life.&quot;</p>
              <p style={{ color:"#4B5563", lineHeight:1.8, marginBottom:"2rem", fontSize:"0.95rem" }}>Lance works directly with every client — no assistants, no shortcuts. He does a complete standing and walking assessment, explains everything as he goes, and crafts your orthotics right in front of you. There are no time limits.</p>
              <Link href="/contact" className="btn-primary">Book a Free Assessment with Lance</Link>
            </div>
            <div style={{ backgroundColor:"#1B2A6B", borderRadius:"16px", padding:"clamp(1.5rem,4vw,2.5rem)", textAlign:"center" }}>
              <div style={{ width:"120px", height:"120px", borderRadius:"50%", backgroundColor:"rgba(230,51,41,0.2)", border:"4px solid #E63329", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 1.5rem" }}>
                <PersonIcon />
              </div>
              <h3 style={{ fontFamily:"var(--font-playfair)", color:"#fff", fontSize:"1.3rem", marginBottom:"0.4rem" }}>Lance Colins</h3>
              <p style={{ color:"#E63329", fontSize:"0.82rem", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase" }}>Founder &amp; Master Orthotist</p>
              <div style={{ borderTop:"1px solid rgba(255,255,255,0.1)", marginTop:"1.25rem", paddingTop:"1.25rem" }}>
                <p style={{ color:"rgba(255,255,255,0.7)", fontStyle:"italic", fontSize:"0.92rem", lineHeight:1.7 }}>&quot;We do not diagnose — we analyze.<br />We do not prescribe — we suggest.&quot;</p>
              </div>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0.75rem", marginTop:"1.25rem" }}>
                {[["1979","Est."],["45+","Years"],["FREE","Assessment"],["Lifetime","Warranty"]].map(([v,l])=>(
                  <div key={l} style={{ backgroundColor:"rgba(255,255,255,0.06)", borderRadius:"8px", padding:"0.7rem 0.5rem" }}>
                    <div style={{ color:"#E63329", fontWeight:700, fontSize:"1rem", fontFamily:"var(--font-playfair)" }}>{v}</div>
                    <div style={{ color:"rgba(255,255,255,0.5)", fontSize:"0.7rem", textTransform:"uppercase", letterSpacing:"0.07em" }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor:"#EDF0F8" }}>
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:"3rem" }}>
            <p className="section-label">Our Approach</p>
            <h2 className="section-title">The CBC Philosophy</h2>
            <div className="red-bar-center" />
          </div>
          <div className="grid-4" style={{ gridTemplateColumns:"1fr" }}>
            {[
              { title:"We Analyze, Not Diagnose", desc:"We look at how your feet and back work together — in motion, under load, in your real life." },
              { title:"We Suggest, Not Prescribe", desc:"Based on what we find, we offer professional recommendations. You remain in control." },
              { title:"No Time Limits", desc:"Every session is as long as it needs to be. Your understanding and comfort are our priority." },
              { title:"Quality That Lasts", desc:"Every orthotic comes with a lifetime warranty on product and service." },
            ].map((p,i)=>(
              <div key={p.title} className="card">
                <div style={{ color:"#1B2A6B", marginBottom:"0.9rem" }}><PhiloIcon idx={i} /></div>
                <h3 style={{ fontFamily:"var(--font-playfair)", color:"#1B2A6B", fontSize:"1.1rem", marginBottom:"0.6rem" }}>{p.title}</h3>
                <p style={{ color:"#6B7280", lineHeight:1.7, fontSize:"0.92rem" }}>{p.desc}</p>
              </div>
            ))}
          </div>
          <style>{`@media(min-width:560px){.grid-4{grid-template-columns:1fr 1fr!important}}@media(min-width:900px){.grid-4{grid-template-columns:repeat(4,1fr)!important}}`}</style>
        </div>
      </section>

      <section style={{ background:"linear-gradient(135deg,#1B2A6B,#253580)", padding:"4rem 0", textAlign:"center" }}>
        <div className="container" style={{ maxWidth:"560px" }}>
          <h2 style={{ fontFamily:"var(--font-playfair)", fontSize:"clamp(1.5rem,4vw,2.3rem)", fontWeight:700, color:"#fff", marginBottom:"0.9rem" }}>Ready to Walk Better?</h2>
          <p style={{ color:"rgba(255,255,255,0.8)", marginBottom:"1.75rem", lineHeight:1.7 }}>Call Lance today. Free assessment — no time limits, no pressure.</p>
          <div style={{ display:"flex", gap:"0.75rem", justifyContent:"center", flexWrap:"wrap" }}>
            <Link href="/contact" className="btn-primary">Book Free Assessment</Link>
            <a href="tel:+14032592474" className="btn-white">+1 403 259 2474</a>
          </div>
        </div>
      </section>
    </>
  );
}
function PersonIcon() { return <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#E63329" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>; }
function PhiloIcon({ idx }: { idx: number }) {
  const d = [
    <svg key="0" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>,
    <svg key="1" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    <svg key="2" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    <svg key="3" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>,
  ];
  return d[idx];
}
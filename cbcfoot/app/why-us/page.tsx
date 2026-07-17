import Link from "next/link";
export const metadata = { title: "Why Choose CBC | ShoeMate Orthotic Clinic" };

export default function WhyUsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <p className="section-label">The CBC Difference</p>
          <h1 className="section-title section-title-white" style={{ marginBottom:"0.75rem" }}>Why Choose CBC?</h1>
          <div className="red-bar-center" />
          <p className="section-subtitle" style={{ maxWidth:"560px", margin:"0 auto", color:"rgba(255,255,255,0.75)" }}>45 years of experience, a proven system, and a genuine commitment to your wellbeing.</p>
        </div>
      </div>

      <section className="section" style={{ backgroundColor:"#F5F7FC" }}>
        <div className="container">
          {[
            { title:"45 Years of Proven Experience", stat:"1979", statLabel:"Year Founded", desc:"Lance Colins designed his orthotic system in 1979. In four and a half decades, he has refined every aspect of the process. One expert, one mission, proven across generations of clients." },
            { title:"Custom Made in ~30 Minutes",    stat:"~30 min", statLabel:"Turnaround", desc:"No sending molds away. No waiting weeks. Your orthotics are built right in front of you — by Lance — in approximately 30 minutes. Walk in with foot pain and walk out with a solution." },
            { title:"Lifetime Warranty on Everything", stat:"Lifetime", statLabel:"Warranty", desc:"We stand behind our work for life. Product warranty. Service warranty. If something isn't right, we make it right. No asterisks, no expiry dates." },
            { title:"Free Assessment — No Obligations", stat:"$0", statLabel:"Assessment Cost", desc:"Both your foot and back assessments are completely free. No pressure to buy, no time limits, and no cost if you just want an honest opinion about your feet." },
          ].map((item)=>(
            <div key={item.title} style={{ display:"grid", gridTemplateColumns:"1fr", gap:"2rem", marginBottom:"3.5rem", paddingBottom:"3.5rem", borderBottom:"1px solid #DDE3F0" }}>
              <div style={{ textAlign:"center" }}>
                <div style={{ backgroundColor:"#1B2A6B", borderRadius:"16px", padding:"2.5rem 2rem", display:"inline-block", minWidth:"200px" }}>
                  <div style={{ fontFamily:"var(--font-playfair)", fontSize:"clamp(2rem,6vw,3.2rem)", fontWeight:700, color:"#E63329" }}>{item.stat}</div>
                  <div style={{ color:"rgba(255,255,255,0.65)", fontSize:"0.82rem", textTransform:"uppercase", letterSpacing:"0.1em", marginTop:"6px" }}>{item.statLabel}</div>
                </div>
              </div>
              <div>
                <h3 style={{ fontFamily:"var(--font-playfair)", fontSize:"clamp(1.2rem,3vw,1.55rem)", color:"#1B2A6B", marginBottom:"0.75rem" }}>{item.title}</h3>
                <div style={{ width:"40px", height:"3px", backgroundColor:"#E63329", marginBottom:"1rem" }} />
                <p style={{ color:"#4B5563", lineHeight:1.8, fontSize:"0.97rem", marginBottom:"1.5rem" }}>{item.desc}</p>
                <Link href="/contact" className="btn-outline">Book Free Assessment</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{ backgroundColor:"#EDF0F8" }}>
        <div className="container" style={{ maxWidth:"860px" }}>
          <div style={{ textAlign:"center", marginBottom:"2.5rem" }}>
            <h2 className="section-title">CBC vs. The Rest</h2>
            <div className="red-bar-center" />
          </div>
          <div className="table-wrap">
            <table style={{ width:"100%", borderCollapse:"collapse", backgroundColor:"#fff", borderRadius:"16px", overflow:"hidden", border:"1px solid #DDE3F0", minWidth:"420px" }}>
              <thead>
                <tr style={{ backgroundColor:"#1B2A6B" }}>
                  <th style={{ padding:"1rem 1.25rem", textAlign:"left", color:"#fff", fontFamily:"var(--font-playfair)", fontSize:"0.95rem", width:"60%" }}>Feature</th>
                  <th style={{ padding:"1rem", textAlign:"center", color:"#E63329", fontSize:"0.85rem" }}>CBC / ShoeMate</th>
                  <th style={{ padding:"1rem", textAlign:"center", color:"rgba(255,255,255,0.6)", fontSize:"0.85rem" }}>Typical Clinics</th>
                </tr>
              </thead>
              <tbody>
                {["Free foot assessment","Free back assessment","Ready in 30 minutes","Lifetime warranty","Made by the expert himself","No time limits on sessions","Free shoe horn included","45+ years experience"].map((label,i)=>(
                  <tr key={label} style={{ backgroundColor:i%2===0?"#fff":"#F5F7FC", borderBottom:"1px solid #F0F2F8" }}>
                    <td style={{ padding:"0.85rem 1.25rem", color:"#374151", fontSize:"0.9rem" }}>{label}</td>
                    <td style={{ padding:"0.85rem", textAlign:"center" }}><YesIcon /></td>
                    <td style={{ padding:"0.85rem", textAlign:"center" }}><NoIcon /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section style={{ background:"linear-gradient(135deg,#E63329,#B5251C)", padding:"4rem 0", textAlign:"center" }}>
        <div className="container" style={{ maxWidth:"560px" }}>
          <h2 style={{ fontFamily:"var(--font-playfair)", fontSize:"clamp(1.5rem,4vw,2.1rem)", fontWeight:700, color:"#fff", marginBottom:"0.9rem" }}>Experience the CBC Difference</h2>
          <p style={{ color:"rgba(255,255,255,0.9)", marginBottom:"1.75rem" }}>Call Lance today. Free assessment, no pressure, real results.</p>
          <div style={{ display:"flex", gap:"0.75rem", justifyContent:"center", flexWrap:"wrap" }}>
            <Link href="/contact" className="btn-white">Book Free Assessment</Link>
            <a href="tel:+14032592474" className="btn-outline" style={{ borderColor:"#fff", color:"#fff" }}>+1 403 259 2474</a>
          </div>
        </div>
      </section>
    </>
  );
}
function YesIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>; }
function NoIcon()  { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>; }
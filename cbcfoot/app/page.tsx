import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ minHeight:"100svh", background:"linear-gradient(135deg, #0F1A45 0%, #1B2A6B 60%, #253580 100%)", display:"flex", alignItems:"center", position:"relative", overflow:"hidden", paddingTop:"80px" }}>
        <div style={{ position:"absolute", top:"-80px", right:"-80px", width:"500px", height:"500px", borderRadius:"50%", border:"1px solid rgba(230,51,41,0.12)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", top:"-40px", right:"-40px", width:"340px", height:"340px", borderRadius:"50%", border:"1px solid rgba(230,51,41,0.08)", pointerEvents:"none" }} />

        <div className="container" style={{ width:"100%", paddingTop:"2rem", paddingBottom:"3rem" }}>
          <div className="hero-grid" style={{ display:"grid", gridTemplateColumns:"1fr", gap:"2.5rem" }}>

            {/* Left */}
            <div className="fade-in-up">
              <div style={{ display:"inline-flex", alignItems:"center", gap:"7px", backgroundColor:"rgba(230,51,41,0.15)", border:"1px solid rgba(230,51,41,0.3)", borderRadius:"50px", padding:"5px 14px", marginBottom:"1.25rem" }}>
                <StarIcon />
                <span style={{ color:"#E63329", fontSize:"0.75rem", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase" }}>45 Years of Excellence</span>
              </div>
              <h1 style={{ fontFamily:"var(--font-playfair)", fontSize:"clamp(2rem,5vw,3.8rem)", fontWeight:700, color:"#fff", lineHeight:1.15, marginBottom:"1.25rem" }}>
                Custom Orthotics<br /><span style={{ color:"#E63329" }}>That Change Lives</span>
              </h1>
              <p style={{ fontSize:"clamp(0.95rem,2vw,1.1rem)", color:"rgba(255,255,255,0.82)", lineHeight:1.8, marginBottom:"1.75rem", maxWidth:"520px" }}>
                Handcrafted while you wait — in just 30 minutes. Free foot &amp; back assessment. Lifetime warranty. Lance Colins has been transforming lives since 1979.
              </p>
              <div style={{ display:"flex", gap:"0.75rem", flexWrap:"wrap", marginBottom:"2.5rem" }}>
                <Link href="/contact" className="btn-primary">Book Free Assessment <ArrowIcon /></Link>
                <Link href="/services" className="btn-white">Our Services</Link>
              </div>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"1rem" }}>
                {[["45+","Years Experience"],["100%","Custom Made"],["Lifetime","Warranty"]].map(([v,l])=>(
                  <div key={l} style={{ borderLeft:"3px solid #E63329", paddingLeft:"0.85rem" }}>
                    <div style={{ fontFamily:"var(--font-playfair)", fontSize:"clamp(1.3rem,3vw,1.8rem)", fontWeight:700, color:"#fff" }}>{v}</div>
                    <div style={{ fontSize:"0.7rem", color:"rgba(255,255,255,0.55)", textTransform:"uppercase", letterSpacing:"0.07em" }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right card */}
            <div className="fade-in-up delay-2">
              <div style={{ background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.12)", borderRadius:"16px", padding:"clamp(1.25rem,4vw,2rem)" }}>
                <div style={{ backgroundColor:"rgba(230,51,41,0.1)", borderRadius:"12px", padding:"1.5rem", textAlign:"center", marginBottom:"1.5rem" }}>
                  <FootSVG />
                  <p style={{ color:"#E63329", fontSize:"0.8rem", fontWeight:700, marginTop:"0.75rem", textTransform:"uppercase", letterSpacing:"0.1em" }}>Custom Made While You Wait</p>
                </div>
                <div style={{ backgroundColor:"#E63329", borderRadius:"8px", padding:"0.9rem 1.25rem", display:"flex", alignItems:"center", gap:"0.9rem", marginBottom:"1.25rem" }}>
                  <GiftIcon />
                  <div>
                    <div style={{ color:"#fff", fontWeight:700, fontSize:"0.9rem" }}>Special Offer</div>
                    <div style={{ color:"rgba(255,255,255,0.88)", fontSize:"0.82rem" }}>FREE long shoe horn with every orthotic pair</div>
                  </div>
                </div>
                {["Free Foot & Back Assessment","No Time Limits on Sessions","Lifetime Warranty Included","Ready in ~30 Minutes"].map(t=>(
                  <div key={t} style={{ display:"flex", alignItems:"center", gap:"10px", padding:"0.55rem 0", borderBottom:"1px solid rgba(255,255,255,0.07)" }}>
                    <CheckCircle /><span style={{ color:"rgba(255,255,255,0.85)", fontSize:"0.9rem" }}>{t}</span>
                  </div>
                ))}
                <a href="tel:+14032592474" style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"10px", marginTop:"1.25rem", backgroundColor:"rgba(255,255,255,0.1)", borderRadius:"8px", padding:"0.9rem", color:"#fff", textDecoration:"none", fontWeight:700, fontSize:"clamp(0.95rem,2vw,1.1rem)" }}>
                  <PhoneIcon /> +1 403 259 2474
                </a>
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(min-width:900px){.hero-grid{grid-template-columns:1fr 1fr!important;gap:4rem!important;align-items:center}}`}</style>
      </section>

      {/* ── TRUST BAND ── */}
      <section style={{ backgroundColor:"#1B2A6B", padding:"1.5rem 0" }}>
        <div className="container" style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"1.25rem 2.5rem" }}>
          {["Lifetime Warranty","Ready in 30 Min","45 Years Expertise","Free Assessment"].map(t=>(
            <div key={t} style={{ display:"flex", alignItems:"center", gap:"10px", color:"#fff" }}>
              <span style={{ color:"#E63329" }}><ShieldIcon /></span>
              <span style={{ fontWeight:700, fontSize:"0.82rem", letterSpacing:"0.06em", textTransform:"uppercase" }}>{t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section" style={{ backgroundColor:"#F5F7FC" }}>
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:"3rem" }}>
            <p className="section-label">What We Do</p>
            <h2 className="section-title">Our Services</h2>
            <div className="red-bar-center" />
            <p className="section-subtitle" style={{ maxWidth:"580px", margin:"0 auto" }}>We don&apos;t diagnose — we analyze. We don&apos;t prescribe — we suggest. Every service improves your quality of life.</p>
          </div>
          <div className="services-grid" style={{ display:"grid", gridTemplateColumns:"1fr", gap:"1.5rem" }}>
            {[
              { title:"Custom Orthotics", desc:"Handcrafted for your feet. Made while you wait in ~30 minutes using Lance's proven 45-year system.", badge:"Most Popular" },
              { title:"Free Foot Assessment", desc:"Comprehensive analysis in standing and walking position. No time limits — everything explained." },
              { title:"Free Back Assessment", desc:"Understand your back in relation to your feet. Standing and walking analysis with full explanation." },
              { title:"Life Improvement Advice", desc:"45 years of experience and many good ideas to help improve your health. Your wellbeing is priority." },
            ].map((s,i)=>(
              <div key={s.title} className="card" style={{ position:"relative", border: i===0?"2px solid #E63329":"1px solid #DDE3F0" }}>
                {s.badge&&<div style={{ position:"absolute", top:"-13px", left:"50%", transform:"translateX(-50%)", backgroundColor:"#E63329", color:"#fff", fontSize:"0.68rem", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", padding:"3px 12px", borderRadius:"50px", whiteSpace:"nowrap" }}>{s.badge}</div>}
                <div style={{ color:"#1B2A6B", marginBottom:"0.9rem" }}><ServiceIcon idx={i} /></div>
                <h3 style={{ fontFamily:"var(--font-playfair)", fontSize:"1.15rem", color:"#1B2A6B", marginBottom:"0.6rem" }}>{s.title}</h3>
                <p style={{ color:"#6B7280", lineHeight:1.7, fontSize:"0.92rem" }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <style>{`@media(min-width:560px){.services-grid{grid-template-columns:1fr 1fr!important}}@media(min-width:900px){.services-grid{grid-template-columns:repeat(4,1fr)!important}}`}</style>
          <div style={{ textAlign:"center", marginTop:"2.5rem" }}>
            <Link href="/services" className="btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT LANCE ── */}
      <section className="section" style={{ backgroundColor:"#1B2A6B" }}>
        <div className="container">
          <div className="lance-section-grid" style={{ display:"grid", gridTemplateColumns:"1fr", gap:"2.5rem", alignItems:"center" }}>
            <div>
              <p style={{ color:"#E63329", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", fontSize:"0.82rem", marginBottom:"0.5rem" }}>Meet the Expert</p>
              <h2 style={{ fontFamily:"var(--font-playfair)", fontSize:"clamp(2rem,4vw,3.2rem)", fontWeight:700, color:"#fff", lineHeight:1.15, marginBottom:"0.4rem" }}>Lance Colins</h2>
              <h2 style={{ fontFamily:"var(--font-playfair)", fontSize:"clamp(2rem,4vw,3.2rem)", fontWeight:700, color:"#E63329", lineHeight:1.15, marginBottom:"1.25rem", fontStyle:"italic" }}>45 Years, One Passion</h2>
              <div style={{ width:"48px", height:"3px", backgroundColor:"#E63329", marginBottom:"1.5rem" }} />
              <p style={{ color:"rgba(255,255,255,0.85)", lineHeight:1.85, marginBottom:"1.25rem", fontSize:"1rem" }}>
                I designed my orthotic system 45 years ago — it&apos;s quick, effective, and proven. I&apos;ve been to a few rodeos in my lifetime and have many good ideas to help improve your health.
              </p>
              <p style={{ color:"rgba(255,255,255,0.7)", lineHeight:1.8, marginBottom:"2rem", fontStyle:"italic", fontSize:"0.97rem" }}>
                &quot;We do not diagnose — we analyze. We do not prescribe — we suggest.&quot;
              </p>
              <Link href="/about" className="btn-primary">Learn More About Lance</Link>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1rem" }}>
              {[["1979","Year\nFounded"],["~30\nmin","Made While\nYou Wait"],["FREE","Foot &\nBack Assessment"],["Lifetime","Product\nWarranty"]].map(([v,l])=>(
                <div key={l} style={{ backgroundColor:"rgba(255,255,255,0.07)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:"16px", padding:"2rem 1rem", textAlign:"center", minHeight:"140px", display:"flex", flexDirection:"column", justifyContent:"center" }}>
                  <div style={{ fontFamily:"var(--font-playfair)", fontSize:"clamp(1.3rem,3vw,1.9rem)", fontWeight:700, color:"#fff", lineHeight:1.1, marginBottom:"0.6rem", whiteSpace:"pre-line" }}>{v}</div>
                  <div style={{ fontSize:"0.7rem", color:"rgba(255,255,255,0.5)", textTransform:"uppercase", letterSpacing:"0.1em", whiteSpace:"pre-line", lineHeight:1.5 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`@media(min-width:900px){.lance-section-grid{grid-template-columns:1fr 1fr!important;gap:4rem!important}}`}</style>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section" style={{ backgroundColor:"#EDF0F8" }}>
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:"3rem" }}>
            <p className="section-label">Simple Process</p>
            <h2 className="section-title">How It Works</h2>
            <div className="red-bar-center" />
          </div>
          <div className="steps-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1.5rem" }}>
            {[["01","Book Your Visit","Call or email. No long waits."],["02","Free Assessment","Foot and back analysis — no time limits."],["03","Custom Made","Lance handcrafts your orthotics in ~30 min."],["04","Walk Out Better","Leave with your orthotics and feel the difference."]].map(([n,t,d])=>(
              <div key={n} style={{ textAlign:"center", padding:"1.5rem 1rem", backgroundColor:"#fff", borderRadius:"12px", border:"1px solid #DDE3F0" }}>
                <div style={{ width:"60px", height:"60px", borderRadius:"50%", backgroundColor:"#1B2A6B", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 1rem" }}>
                  <span style={{ fontFamily:"var(--font-playfair)", fontSize:"1.1rem", fontWeight:700, color:"#E63329" }}>{n}</span>
                </div>
                <h3 style={{ fontFamily:"var(--font-playfair)", fontSize:"1.05rem", color:"#1B2A6B", marginBottom:"0.6rem" }}>{t}</h3>
                <p style={{ color:"#6B7280", fontSize:"0.88rem", lineHeight:1.7 }}>{d}</p>
              </div>
            ))}
          </div>
          <style>{`@media(min-width:768px){.steps-grid{grid-template-columns:repeat(4,1fr)!important}}`}</style>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section" style={{ backgroundColor:"#F5F7FC" }}>
        <div className="container">
          <div style={{ textAlign:"center", marginBottom:"3rem" }}>
            <p className="section-label">What People Say</p>
            <h2 className="section-title">Lives Improved</h2>
            <div className="red-bar-center" />
          </div>
          <div className="grid-3">
            {[
              { q:"Lance's orthotics changed my life. After years of back pain, I finally feel comfortable walking again. The assessment was thorough.", n:"Margaret T.", loc:"Calgary, AB" },
              { q:"Skeptical at first but within a week I noticed a huge difference. Made right in front of me in 30 minutes. The lifetime warranty is a bonus.", n:"Robert K.", loc:"Calgary, AB" },
              { q:"Free assessment, no pressure, no time limits — Lance genuinely cares about your wellbeing. Best investment I've made for my health.", n:"Sandra M.", loc:"Calgary, AB" },
            ].map(t=>(
              <div key={t.n} className="card">
                <div style={{ color:"#E63329", fontSize:"2.5rem", fontFamily:"Georgia", lineHeight:1, marginBottom:"0.75rem" }}>&ldquo;</div>
                <p style={{ color:"#4B5563", lineHeight:1.8, fontSize:"0.93rem", marginBottom:"1.25rem", fontStyle:"italic" }}>{t.q}</p>
                <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
                  <div style={{ width:"40px", height:"40px", borderRadius:"50%", backgroundColor:"#1B2A6B", display:"flex", alignItems:"center", justifyContent:"center", color:"#E63329", fontWeight:700, fontFamily:"var(--font-playfair)", flexShrink:0 }}>{t.n[0]}</div>
                  <div>
                    <div style={{ fontWeight:700, color:"#1B2A6B", fontSize:"0.9rem" }}>{t.n}</div>
                    <div style={{ color:"#9CA3AF", fontSize:"0.78rem" }}>{t.loc}</div>
                  </div>
                  <div style={{ marginLeft:"auto" }}>{"★★★★★".split("").map((_,i)=><span key={i} style={{ color:"#E63329", fontSize:"13px" }}>★</span>)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ background:"linear-gradient(135deg,#E63329,#B5251C)", padding:"4rem 0", textAlign:"center" }}>
        <div className="container" style={{ maxWidth:"680px" }}>
          <div style={{ display:"flex", justifyContent:"center", marginBottom:"1rem" }}><GiftLargeIcon /></div>
          <h2 style={{ fontFamily:"var(--font-playfair)", fontSize:"clamp(1.5rem,4vw,2.3rem)", fontWeight:700, color:"#fff", margin:"0.75rem 0" }}>
            Free Long Shoe Horn<br />With Every Orthotic Order
          </h2>
          <p style={{ color:"rgba(255,255,255,0.92)", fontSize:"1rem", marginBottom:"2rem", lineHeight:1.7 }}>
            Plus a completely FREE foot and back assessment. No time limits. No pressure. Just results.
          </p>
          <div style={{ display:"flex", gap:"0.75rem", justifyContent:"center", flexWrap:"wrap" }}>
            <Link href="/contact" className="btn-white">Book Your Free Assessment</Link>
            <a href="tel:+14032592474" className="btn-outline" style={{ borderColor:"#fff", color:"#fff" }}>
              <PhoneIcon /> +1 403 259 2474
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function StarIcon() { return <svg width="14" height="14" viewBox="0 0 24 24" fill="#E63329"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>; }
function ArrowIcon() { return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>; }
function ShieldIcon() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>; }
function CheckCircle() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E63329" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0}}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>; }
function PhoneIcon() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.63 4.9 2 2 0 0 1 3.6 2.7h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10a16 16 0 0 0 6 6l1.36-1.36a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>; }
function GiftIcon() { return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0}}><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>; }
function GiftLargeIcon() { return <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>; }
function ServiceIcon({ idx }: { idx: number }) {
  const icons = [
    <svg key="0" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>,
    <svg key="1" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
    <svg key="2" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><path d="M12 6H8a2 2 0 0 0 0 4h8a2 2 0 0 0 0-4"/><path d="M12 14H9a2 2 0 0 0 0 4h6a2 2 0 0 0 0-4"/></svg>,
    <svg key="3" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
  ];
  return icons[idx];
}
function FootSVG() {
  return (
    <svg width="100" height="100" viewBox="0 0 120 120" fill="none">
      <ellipse cx="60" cy="82" rx="28" ry="20" fill="rgba(230,51,41,0.15)" stroke="#E63329" strokeWidth="1.5"/>
      <path d="M40 82 Q35 60 38 44 Q42 28 55 26 Q67 25 72 35 Q77 46 73 62 Q71 72 69 82" stroke="#1B2A6B" strokeWidth="2" fill="rgba(27,42,107,0.1)" strokeLinecap="round"/>
      <ellipse cx="51" cy="26" rx="5" ry="7" fill="rgba(27,42,107,0.25)" stroke="#1B2A6B" strokeWidth="1.5"/>
      <ellipse cx="61" cy="24" rx="4.5" ry="6.5" fill="rgba(27,42,107,0.25)" stroke="#1B2A6B" strokeWidth="1.5"/>
      <ellipse cx="70" cy="25" rx="4" ry="6" fill="rgba(27,42,107,0.25)" stroke="#1B2A6B" strokeWidth="1.5"/>
      <ellipse cx="78" cy="29" rx="3.5" ry="5.5" fill="rgba(27,42,107,0.25)" stroke="#1B2A6B" strokeWidth="1.5"/>
      <ellipse cx="42" cy="31" rx="4" ry="6" fill="rgba(27,42,107,0.25)" stroke="#1B2A6B" strokeWidth="1.5"/>
    </svg>
  );
}
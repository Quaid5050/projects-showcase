"use client";
/* eslint-disable */
import { useState } from "react";
const ONB_CSS = ".bz-onb input::placeholder,.bz-onb textarea::placeholder{color:#7a7591}.bz-onb select option{color:#ffffff;background:#15101f}";

const PKGS = {
  starter:  { label: "$79 Starter",   maxPages: 5 },
  standard: { label: "$149 Standard", maxPages: 7 },
  advanced: { label: "$399 Advanced", maxPages: 7 },
  premium:  { label: "$499 Premium",  maxPages: 10 },
};
const PKG_ORDER = ["starter","standard","advanced","premium"];

const ALL_PAGES = [
  { id:"home",         label:"Home",                 min:"starter"  },
  { id:"about",        label:"About Us",              min:"starter"  },
  { id:"services",     label:"Services",              min:"starter"  },
  { id:"contact",      label:"Contact",               min:"starter"  },
  { id:"gallery",      label:"Gallery / Portfolio",   min:"starter"  },
  { id:"testimonials", label:"Testimonials",          min:"starter"  },
  { id:"faq",          label:"FAQ",                   min:"starter"  },
  { id:"pricing",      label:"Pricing",               min:"starter"  },
  { id:"blog",         label:"Blog / News",           min:"standard" },
  { id:"shop",         label:"Products / Shop",       min:"standard" },
  { id:"booking",      label:"Book Appointment",      min:"standard" },
  { id:"team",         label:"Our Team",              min:"standard" },
  { id:"careers",      label:"Careers",               min:"advanced" },
  { id:"members",      label:"Members Area",          min:"advanced" },
  { id:"custom1",      label:"Custom Page 1",         min:"premium"  },
  { id:"custom2",      label:"Custom Page 2",         min:"premium"  },
];

const ALL_FEATS = [
  { id:"cf",   label:"Contact form",          min:"starter"  },
  { id:"gm",   label:"Google Maps / location",min:"starter"  },
  { id:"sf",   label:"Social media feed",     min:"starter"  },
  { id:"gal",  label:"Gallery management",    min:"standard" },
  { id:"ap",   label:"Admin portal",          min:"standard" },
  { id:"bc",   label:"Blog CMS",              min:"standard" },
  { id:"ob",   label:"Online booking",        min:"standard" },
  { id:"cp",   label:"Customer portal",       min:"advanced" },
  { id:"pay",  label:"Payment integration",   min:"advanced" },
  { id:"nl",   label:"Email newsletter",      min:"advanced" },
  { id:"crm",  label:"CRM integration",       min:"advanced" },
  { id:"ec",   label:"eCommerce / store",     min:"premium"  },
  { id:"ai",   label:"All integrations",      min:"premium"  },
  { id:"cd",   label:"Fully custom design",   min:"premium"  },
  { id:"ml",   label:"Multi-language",        min:"premium"  },
];


const pidx = k => PKG_ORDER.indexOf(k);

const s = {
  page:    { width:"100%", fontFamily:"inherit", fontSize:16, color:"#e9e6f2" },
  wrap:    { maxWidth:860, margin:"0 auto" },
  card:    { background:"linear-gradient(160deg, rgba(20,12,35,0.7), rgba(8,5,16,0.55))", border:"1px solid rgba(255,255,255,0.09)", borderRadius:20, padding:"2.25rem 2.25rem 2rem", backdropFilter:"blur(16px)", WebkitBackdropFilter:"blur(16px)" },
  hdr:     { background:"linear-gradient(160deg, rgba(20,12,35,0.7), rgba(8,5,16,0.55))", border:"1px solid rgba(255,255,255,0.09)", borderRadius:20, padding:"1.5rem 1.75rem", display:"flex", alignItems:"flex-start", gap:18, marginBottom:"2rem", backdropFilter:"blur(16px)", WebkitBackdropFilter:"blur(16px)" },
  chk:     { width:58, height:58, borderRadius:"50%", background:"rgba(198,245,41,0.12)", border:"1.5px solid rgba(198,245,41,0.45)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:28, color:"#c6f529", flexShrink:0 },
  title:   { fontSize:34, fontWeight:800, textAlign:"center", marginBottom:8, color:"#ffffff" },
  sub:     { fontSize:17, textAlign:"center", color:"#9b96b0", marginBottom:"2rem" },
  label:   { fontSize:15, fontWeight:600, color:"#e9e6f2", display:"block", marginBottom:7 },
  input:   { fontFamily:"inherit", fontSize:16, color:"#ffffff", background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.12)", borderRadius:12, padding:"13px 16px", width:"100%", outline:"none", boxSizing:"border-box" },
  textarea:{ fontFamily:"inherit", fontSize:16, color:"#ffffff", background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.12)", borderRadius:12, padding:"13px 16px", width:"100%", outline:"none", boxSizing:"border-box", resize:"vertical", minHeight:100, lineHeight:1.55 },
  select:  { fontFamily:"inherit", fontSize:16, color:"#ffffff", background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.12)", borderRadius:12, padding:"13px 16px", width:"100%", outline:"none", boxSizing:"border-box", appearance:"none" },
  hint:    { fontSize:13, color:"#8a85a0", marginTop:5 },
  divl:    { fontSize:13, fontWeight:700, letterSpacing:.6, textTransform:"uppercase", color:"#8a85a0", margin:"1.75rem 0 1rem", display:"flex", alignItems:"center", gap:10 },
  divline: { flex:1, height:1, background:"rgba(255,255,255,0.12)" },
  g2:      { display:"grid", gridTemplateColumns:"1fr 1fr", gap:18 },
  gap:     { marginTop:18 },
  gapl:    { marginTop:26 },
  foot:    { display:"flex", alignItems:"center", justifyContent:"space-between", marginTop:"2rem", paddingTop:"1.5rem", borderTop:"1px solid rgba(255,255,255,0.08)", gap:14 },
  footSec: { fontSize:13, color:"#8a85a0" },
  btnBack: { padding:"13px 26px", border:"1px solid rgba(255,255,255,0.18)", borderRadius:999, background:"rgba(255,255,255,0.05)", fontSize:15.5, fontWeight:700, color:"#e9e6f2", cursor:"pointer" },
  btnNext: { padding:"14px 30px", border:"none", borderRadius:999, background:"#c6f529", fontSize:16.5, fontWeight:800, color:"#050308", cursor:"pointer", display:"flex", alignItems:"center", gap:8, boxShadow:"0 8px 24px -8px rgba(198,245,41,0.6)" },
  btnSubmit:{ padding:"15px 34px", border:"none", borderRadius:999, background:"#8000f0", fontSize:17, fontWeight:800, color:"#ffffff", cursor:"pointer", display:"flex", alignItems:"center", gap:8, boxShadow:"0 8px 24px -8px rgba(128,0,240,0.8)" },
  pkgGrid: { display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:14, marginBottom:"1.75rem" },
  ubox:    { border:"1px solid rgba(245,158,11,0.35)", borderRadius:12, padding:"1rem 1.15rem", background:"rgba(245,158,11,0.1)", fontSize:14, color:"#fcd9a5", lineHeight:1.6, marginTop:12 },
  alertG:  { border:"1px solid rgba(198,245,41,0.35)", borderRadius:12, padding:"1rem 1.15rem", background:"rgba(198,245,41,0.1)", fontSize:14, color:"#d9ff4d", lineHeight:1.6, marginTop:14 },
  alertY:  { border:"1px solid rgba(245,158,11,0.3)", borderRadius:12, padding:"1rem 1.15rem", background:"rgba(245,158,11,0.1)", fontSize:14, color:"#fcd9a5", lineHeight:1.6, marginBottom:14 },
  banner:  { display:"flex", alignItems:"center", gap:10, padding:".85rem 1.15rem", background:"rgba(164,53,255,0.1)", border:"1px solid rgba(164,53,255,0.28)", borderRadius:12, marginBottom:"1.5rem", fontSize:14, color:"#9b96b0" },
  sshdr:   { display:"flex", alignItems:"center", gap:16, marginBottom:"1.75rem", paddingBottom:"1rem", borderBottom:"1px solid rgba(255,255,255,0.08)" },
  sico:    { width:52, height:52, flexShrink:0, background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:12, display:"flex", alignItems:"center", justifyContent:"center", fontSize:25 },
  rbox:    { background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:12, padding:"1.1rem 1.3rem", marginBottom:12 },
};

function Rb({ label, selected, onClick, multi, upgrade, upgradePkg }) {
  return (
    <div onClick={onClick} style={{ display:"flex", alignItems:"center", gap:7, padding:"8px 14px", border:`1px solid ${selected?"#a435ff":"rgba(255,255,255,0.12)"}`, borderRadius:10, cursor:"pointer", fontSize:16.6, fontWeight:600, color:selected?"#a435ff":"#a9a3bf", background:selected?"rgba(198,245,41,0.14)":"rgba(255,255,255,0.03)", userSelect:"none", opacity:upgrade&&!selected?.65:1 }}>
      <span style={{ width:13, height:13, borderRadius:multi?3:"50%", border:`1.5px solid currentColor`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, fontSize:10.2, fontWeight:900 }}>
        {selected ? (multi ? "✓" : "") : ""}
        {selected && !multi ? <span style={{width:6,height:6,borderRadius:"50%",background:"#a435ff",display:"block"}}></span> : null}
      </span>
      {label}
      {upgrade && <span style={{ fontSize:13.4, fontWeight:700, padding:"2px 7px", borderRadius:999, background:"rgba(245,158,11,0.12)", color:"#fcd9a5", border:"1px solid rgba(245,158,11,0.35)", marginLeft:4 }}>⚡ {upgradePkg}</span>}
    </div>
  );
}

function Field({ label, required, optional, hint, children }) {
  return (
    <div style={{ display:"flex", flexDirection:"column", gap:0 }}>
      <label style={s.label}>{label}{required&&<span style={{color:"#dc2626",marginLeft:2}}>*</span>}{optional&&<span style={{fontWeight:400,color:"#8a85a0",fontSize:14.1,marginLeft:4}}>(optional)</span>}</label>
      {children}
      {hint && <div style={s.hint}>{hint}</div>}
    </div>
  );
}

function Divider({ children }) {
  return <div style={s.divl}><span style={s.divline}></span>{children}<span style={s.divline}></span></div>;
}

function PkgCard({ price, name, includes, selected, onClick }) {
  return (
    <div onClick={onClick} style={{ border:`2px solid ${selected?"#a435ff":"rgba(255,255,255,0.12)"}`, borderRadius:14, padding:"1rem .9rem", cursor:"pointer", background:selected?"rgba(164,53,255,0.12)":"rgba(255,255,255,0.03)", position:"relative", userSelect:"none" }}>
      {selected && <span style={{ position:"absolute", top:8, right:10, width:20, height:20, borderRadius:"50%", background:"#a435ff", color:"#fff", fontSize:14.1, fontWeight:700, display:"flex", alignItems:"center", justifyContent:"center" }}>✓</span>}
      <div style={{ fontSize:28.2, fontWeight:800, color:"#a435ff", marginBottom:3 }}>{price}</div>
      <div style={{ fontSize:16, fontWeight:700, color:"#ffffff", marginBottom:8 }}>{name}</div>
      <ul style={{ listStyle:"none", fontSize:15.4, color:"#a9a3bf", lineHeight:1.7 }}>
        {includes.map((item,i) => <li key={i}><span style={{color:"#9bc400",fontWeight:700}}>✓ </span>{item}</li>)}
      </ul>
    </div>
  );
}

function ColorPicker({ colors, setColors }) {
  const addColor = () => setColors(c => [...c, { hex:"#a435ff", role:"Colour "+(c.length+1) }]);
  const update = (i, key, val) => setColors(c => c.map((x,idx) => idx===i ? {...x,[key]:val} : x));
  const remove = i => setColors(c => c.filter((_,idx) => idx!==i));
  return (
    <div>
      {colors.map((col, i) => (
        <div key={i} style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10 }}>
          <div style={{ position:"relative", width:36, height:36, borderRadius:8, border:"1px solid #e2e5ec", overflow:"hidden", flexShrink:0, cursor:"pointer" }}>
            <div style={{ position:"absolute", inset:0, background:col.hex }}></div>
            <input type="color" value={col.hex} onChange={e => update(i,"hex",e.target.value)} style={{ position:"absolute", inset:-4, width:"calc(100% + 8px)", height:"calc(100% + 8px)", opacity:0, cursor:"pointer", border:"none" }} />
          </div>
          <input type="text" value={col.hex} maxLength={7} onChange={e => { if(/^#[0-9a-fA-F]{0,6}$/.test(e.target.value)) update(i,"hex",e.target.value); }} style={{ ...s.input, width:90, fontFamily:"monospace", fontSize:16.6 }} />
          <input type="text" value={col.role} onChange={e => update(i,"role",e.target.value)} placeholder="Colour role (e.g. Primary, Accent)" style={{ ...s.input, flex:1 }} />
          <button onClick={() => remove(i)} style={{ background:"none", border:"none", color:"#8a85a0", cursor:"pointer", fontSize:23, padding:4, borderRadius:6, lineHeight:1 }}>×</button>
        </div>
      ))}
      <button onClick={addColor} style={{ display:"inline-flex", alignItems:"center", gap:6, padding:"7px 14px", border:"1px dashed rgba(255,255,255,0.18)", borderRadius:10, background:"none", fontSize:16.6, fontWeight:600, color:"#a9a3bf", cursor:"pointer", marginTop:4 }}>+ Add another colour</button>
    </div>
  );
}

function Stepper({ step }) {
  const steps = ["Contact","Brand","Content","Technical","Submit"];
  return (
    <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:4, marginBottom:"1.1rem", flexWrap:"wrap" }}>
      {steps.map((label, i) => {
        const n = i+1;
        const active = n === step, done = n < step;
        return [
          <div key={n} style={{ display:"flex", alignItems:"center", gap:7, fontSize:16, color:active?"#a435ff":done?"#9bc400":"#8a85a0", fontWeight:active?700:400 }}>
            <span style={{ width:26, height:26, borderRadius:"50%", border:`1.5px solid ${active?"#a435ff":done?"rgba(198,245,41,0.4)":"rgba(255,255,255,0.12)"}`, background:active?"#a435ff":done?"rgba(198,245,41,0.1)":"transparent", color:active?"#fff":done?"#9bc400":"#8a85a0", display:"flex", alignItems:"center", justifyContent:"center", fontSize:14.1, fontWeight:700 }}>
              {done ? "✓" : n}
            </span>
            <span style={{ display:"none" }}>{label}</span>
            <span>{label}</span>
          </div>,
          i < steps.length-1 && <div key={`line-${i}`} style={{ width:28, height:1.5, background:"rgba(255,255,255,0.12)", flexShrink:0 }}></div>
        ];
      })}
    </div>
  );
}

function Banner({ pkg, onChangePkg }) {
  return (
    <div style={s.banner}>
      <span>📦 Package: <strong style={{color:"#a435ff"}}>{PKGS[pkg]?.label}</strong></span>
      <span onClick={onChangePkg} style={{ marginLeft:"auto", color:"#a435ff", fontWeight:600, cursor:"pointer", fontSize:15.4, textDecoration:"underline" }}>Change</span>
    </div>
  );
}

export default function OnboardingForm() {
  const [step, setStep] = useState(0); // 0 = pkg selector
  const [pkg, setPkg] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [taskUrl, setTaskUrl] = useState("");

  // Form fields
  const [f, setF] = useState({
    bizName:"", fullName:"", email:"", phone:"", address:"", currentSite:"", social:"",
    priority:"", launchDate:"", goal:"", audience:"", usp:"",
    logo:"", hasColors:"",
    colors:[{hex:"#a435ff",role:"Primary colour"},{hex:"#f97316",role:"Secondary colour"}],
    mood:"", style:"", inspo:"", fonts:"", photos:"",
    pages:{}, headline:"", cta:"", about:"", services:"", showPrice:"", promos:"", reviews:"", contactInfo:"", extraContent:"",
    domain:"", hosting:"", domainName:"", domainReg:"", loginInfo:"",
    feats:{}, tools:"", formEmail:"", fileNotes:"", extraNotes:"",
  });

  const upd = (k,v) => setF(p => ({...p,[k]:v}));
  const updMap = (k,id,val,on) => setF(p => { const m={...p[k]}; if(on) m[id]=val; else delete m[id]; return {...p,[k]:m}; });

  const avail = (min) => pidx(pkg) >= pidx(min);

  const upsellItems = () => {
    const items = [];
    const max = PKGS[pkg]?.maxPages || 5;
    const cnt = Object.keys(f.pages).length;
    if (cnt > max) items.push(`Selected ${cnt} pages — your plan includes up to ${max}.`);
    Object.values(f.pages).forEach(p => { if(p.upgrade) items.push(`Page: "${p.label}" requires ${PKGS[p.min]?.label} or above.`); });
    Object.values(f.feats).forEach(ft => { if(ft.upgrade) items.push(`Feature: "${ft.label}" requires ${PKGS[ft.min]?.label} or above.`); });
    return items;
  };

  const buildDesc = () => {
    const colors = f.hasColors==="yes"
      ? f.colors.map(c=>`${c.role}: ${c.hex}`).join(" | ")
      : `No brand colours — mood preference: ${f.mood}`;
    const pages = Object.values(f.pages).map(p=>p.label+(p.upgrade?" ⚡(upgrade needed)":"")).join(", ")||"None";
    const feats = Object.values(f.feats).map(ft=>ft.label+(ft.upgrade?" ⚡(upgrade needed)":"")).join(", ")||"None";
    const ups = upsellItems();
    return `## 💳 Package\n**Package:** ${PKGS[pkg]?.label}\n**Max Pages:** ${PKGS[pkg]?.maxPages}${ups.length?"\n\n⚡ **Client selected items outside their package.**":""}\n\n---\n## 📋 Contact & Project\n**Business:** ${f.bizName}\n**Contact:** ${f.fullName} | ${f.email} | ${f.phone}\n**Address:** ${f.address||"Not provided"}\n**Current Site:** ${f.currentSite||"None"}\n**Social:** ${f.social||"Not provided"}\n**Priority:** ${f.priority}\n**Launch Date:** ${f.launchDate}\n**Goal:** ${f.goal}\n**Audience:** ${f.audience}\n**USP:** ${f.usp}\n\n---\n## 🎨 Brand & Design\n**Logo:** ${f.logo}\n**Colours:** ${colors}\n**Style:** ${f.style}\n**Inspiration:**\n${f.inspo}\n**Fonts:** ${f.fonts||"No preference"}\n**Photos:** ${f.photos}\n\n---\n## 📝 Content\n**Pages:** ${pages}\n**Headline:** ${f.headline}\n**CTA:** ${f.cta}\n\n**About Us:**\n${f.about}\n\n**Services/Products:**\n${f.services}\n\n**Display Pricing:** ${f.showPrice}\n**Promos:** ${f.promos||"None"}\n**Reviews:** ${f.reviews}\n**Contact Info:**\n${f.contactInfo}\n**Extra Notes:** ${f.extraContent||"None"}\n\n---\n## 🔧 Technical\n**Domain:** ${f.domain}${f.domainName?" — "+f.domainName:""}\n**Registrar:** ${f.domainReg||"Unknown"}\n**Hosting:** ${f.hosting}\n**Login Info:** ${f.loginInfo||"None"}\n**Form Email:** ${f.formEmail}\n**Features:** ${feats}\n**Tools:** ${f.tools||"None"}\n**File Notes:** ${f.fileNotes}\n**Extra Notes:** ${f.extraNotes||"None"}${ups.length?"\n\n---\n## ⚡ Upgrade Items Flagged\n"+ups.map(i=>"- "+i).join("\n"):""}\n\n---\n*Submitted via BizzOne Digital Client Onboarding Form*`;
  };

  const handleSubmit = async () => {
    if (!f.bizName||!f.fullName||!f.email||!f.phone||!f.priority||!f.launchDate) {
      alert("Please complete all required fields before submitting."); return;
    }
    setSubmitting(true);
    const pMap = {"Urgent — launch ASAP":"urgent","High — within 1 to 2 weeks":"high","Medium — within 3 to 4 weeks":"normal","Low — flexible timeline":"low"};
    try {
      const res = await fetch("/api/onboarding", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
          name:`${f.bizName} — ${f.fullName} | ${PKGS[pkg]?.label} Website`,
          markdown_description: buildDesc(),
          priority: pMap[f.priority] || "normal",
          launchDate: f.launchDate,
          tags:["website","onboarding",pkg],
        })
      });
      const data = await res.json();
      if (res.ok && data.id) { setTaskUrl(data.url); setSubmitted(true); }
      else { alert(data.error || "Submission failed. Please try again."); }
    } catch(e) { alert("Network error — please try again."); }
    setSubmitting(false);
  };

  // ── SUCCESS ──────────────────────────────
  if (submitted) return (
    <div style={s.page} className="bz-onb"><style>{ONB_CSS}</style><div style={s.wrap}>
      <div style={{...s.card, textAlign:"center", padding:"3rem 2rem"}}>
        <div style={{width:72,height:72,borderRadius:"50%",background:"rgba(198,245,41,0.1)",border:"2px solid #bbf7d0",display:"flex",alignItems:"center",justifyContent:"center",fontSize:43.5,color:"#9bc400",margin:"0 auto 1.5rem"}}>✓</div>
        <h2 style={{fontSize:30.7,fontWeight:700,marginBottom:10,color:"#ffffff"}}>Form Submitted Successfully!</h2>
        <p style={{fontSize:17.9,color:"#a9a3bf",maxWidth:420,margin:"0 auto",lineHeight:1.7}}>A task has been created for our development team. We will be in touch within <strong>24–48 hours</strong> to confirm next steps.{upsellItems().length?" Our team will also reach out about the upgrade items you selected.":""}</p>
        {taskUrl && <a href={taskUrl} target="_blank" rel="noreferrer" style={{display:"inline-block",marginTop:"1.25rem",padding:"9px 22px",background:"#a435ff",color:"#fff",borderRadius:10,fontWeight:700,fontSize:17.9,textDecoration:"none"}}>View Task in ClickUp →</a>}
      </div>
    </div></div>
  );

  // ── PACKAGE SELECTOR ─────────────────────
  if (step === 0) return (
    <div style={s.page} className="bz-onb"><style>{ONB_CSS}</style><div style={s.wrap}>
      <div style={s.hdr}>
        <div style={s.chk}>✓</div>
        <div>
          <h2 style={{fontSize:20.5,fontWeight:700,marginBottom:5,color:"#ffffff"}}>Thank you for your purchase!</h2>
          <p style={{fontSize:16.6,color:"#a9a3bf",lineHeight:1.65}}>Complete this onboarding form so our web development team can get started. We will reach out within <strong style={{color:"#a435ff"}}>24 to 48 hours</strong>.</p>
        </div>
      </div>
      <h1 style={s.title}>Website Development Onboarding</h1>
      <p style={s.sub}>Fill out the form below — the more detail you provide, the better your website will turn out.</p>
      <div style={s.card}>
        <div style={s.sshdr}>
          <div style={s.sico}>💳</div>
          <div><h3 style={{fontSize:20.5,fontWeight:700,color:"#ffffff"}}>Select the package you purchased</h3><p style={{fontSize:16,color:"#a9a3bf"}}>This lets us flag anything outside your plan.</p></div>
        </div>
        <div style={s.pkgGrid}>
          <PkgCard price="$79" name="Starter" selected={pkg==="starter"} onClick={()=>setPkg("starter")} includes={["Up to 5 pages","Contact form","Stock photos","Mobile responsive"]}/>
          <PkgCard price="$149" name="Standard" selected={pkg==="standard"} onClick={()=>setPkg("standard")} includes={["Up to 7 pages","Contact form","Admin portal","Gallery management"]}/>
          <PkgCard price="$399" name="Advanced" selected={pkg==="advanced"} onClick={()=>setPkg("advanced")} includes={["Up to 7 pages","Basic admin portal","Basic customer portal","Payment integration"]}/>
          <PkgCard price="$499" name="Premium" selected={pkg==="premium"} onClick={()=>setPkg("premium")} includes={["Up to 10 pages","All integrations","eCommerce ready","Custom design"]}/>
        </div>
        <div style={{textAlign:"center",marginTop:".9rem"}}>
          <button disabled={!pkg} onClick={()=>setStep(1)} style={{...s.btnNext,margin:"0 auto",opacity:pkg?1:.5}}>Continue with selected package →</button>
        </div>
      </div>
    </div></div>
  );

  const go = n => setStep(n);
  const ups = upsellItems();

  return (
    <div style={s.page} className="bz-onb"><style>{ONB_CSS}</style><div style={s.wrap}>
      <div style={s.hdr}>
        <div style={s.chk}>✓</div>
        <div>
          <h2 style={{fontSize:20.5,fontWeight:700,marginBottom:5,color:"#ffffff"}}>Thank you for your purchase!</h2>
          <p style={{fontSize:16.6,color:"#a9a3bf",lineHeight:1.65}}>Complete this form so our team can get started. We will reach out within <strong style={{color:"#a435ff"}}>24 to 48 hours</strong>.</p>
        </div>
      </div>
      <Stepper step={step}/>
      <div style={{height:4,background:"rgba(255,255,255,0.12)",borderRadius:4,overflow:"hidden",marginBottom:"1.25rem"}}>
        <div style={{height:"100%",background:"#a435ff",borderRadius:4,width:`${(step/5)*100}%`,transition:"width .4s"}}></div>
      </div>
      <div style={s.card}>

      {/* ── STEP 1 ── */}
      {step===1&&<>
        <Banner pkg={pkg} onChangePkg={()=>setStep(0)}/>
        <div style={s.sshdr}><div style={s.sico}>📋</div><div><h3 style={{fontSize:19.2,fontWeight:700,color:"#ffffff"}}>Contact &amp; Project Info</h3><p style={{fontSize:16,color:"#a9a3bf"}}>Tell us who you are and what you need built.</p></div></div>
        <div style={s.g2}>
          <Field label="Business name" required><input style={s.input} value={f.bizName} onChange={e=>upd("bizName",e.target.value)} placeholder="e.g. Maple Leaf Bakery"/></Field>
          <Field label="Your full name" required><input style={s.input} value={f.fullName} onChange={e=>upd("fullName",e.target.value)} placeholder="First and last name"/></Field>
        </div>
        <div style={{...s.g2,...s.gap}}>
          <Field label="Email address" required><input style={s.input} type="email" value={f.email} onChange={e=>upd("email",e.target.value)} placeholder="you@yourbusiness.com"/></Field>
          <Field label="Phone number" required><input style={s.input} type="tel" value={f.phone} onChange={e=>upd("phone",e.target.value)} placeholder="+1 (___) ___-____"/></Field>
        </div>
        <div style={s.gap}><Field label="Business address" optional hint="Only if you want it displayed on the website."><input style={s.input} value={f.address} onChange={e=>upd("address",e.target.value)} placeholder="123 Main St, City, Province, Postal Code"/></Field></div>
        <div style={s.gap}><Field label="Current website" optional><input style={s.input} type="url" value={f.currentSite} onChange={e=>upd("currentSite",e.target.value)} placeholder="https://www.yourbusiness.com"/></Field></div>
        <div style={s.gap}><Field label="Social media profiles" optional hint="Paste all links separated by commas."><input style={s.input} value={f.social} onChange={e=>upd("social",e.target.value)} placeholder="https://instagram.com/yourbiz, https://facebook.com/yourbiz"/></Field></div>
        <Divider>Project scope</Divider>
        <div style={s.g2}>
          <Field label="Project priority" required>
            <select style={s.select} value={f.priority} onChange={e=>upd("priority",e.target.value)}>
              <option value="">Select priority</option>
              <option>Urgent — launch ASAP</option>
              <option>High — within 1 to 2 weeks</option>
              <option>Medium — within 3 to 4 weeks</option>
              <option>Low — flexible timeline</option>
            </select>
          </Field>
          <Field label="Desired launch date" required hint="The date you want the site live."><input style={s.input} type="date" value={f.launchDate} onChange={e=>upd("launchDate",e.target.value)}/></Field>
        </div>
        <div style={s.gap}><Field label="Main goal of this website" required>
          <select style={s.select} value={f.goal} onChange={e=>upd("goal",e.target.value)}>
            <option value="">Select the primary goal</option>
            <option>Generate leads and inquiries</option>
            <option>Sell products online (eCommerce)</option>
            <option>Book appointments or services</option>
            <option>Build brand awareness and credibility</option>
            <option>Showcase a portfolio or past work</option>
            <option>Provide information to existing customers</option>
          </select>
        </Field></div>
        <div style={s.gap}><Field label="Who is your target audience?" required><textarea style={s.textarea} value={f.audience} onChange={e=>upd("audience",e.target.value)} placeholder="e.g. Homeowners in the GTA aged 30–55 looking for renovation services..."/></Field></div>
        <div style={s.gap}><Field label="What makes your business different from competitors?" required hint="This helps us write copy that makes visitors choose you."><textarea style={s.textarea} value={f.usp} onChange={e=>upd("usp",e.target.value)} placeholder="e.g. 10 years experience, fastest turnaround, 5-star rated, locally trusted..."/></Field></div>
        <div style={s.foot}><div style={s.footSec}>🔒 Secure &amp; private</div><div style={{display:"flex",gap:8}}><button style={s.btnNext} onClick={()=>go(2)}>Save &amp; Continue →</button></div></div>
      </>}

      {/* ── STEP 2 ── */}
      {step===2&&<>
        <Banner pkg={pkg} onChangePkg={()=>setStep(0)}/>
        <div style={s.sshdr}><div style={s.sico}>🎨</div><div><h3 style={{fontSize:19.2,fontWeight:700,color:"#ffffff"}}>Brand &amp; Design</h3><p style={{fontSize:16,color:"#a9a3bf"}}>Your visual identity and design preferences.</p></div></div>
        <Field label="Do you have a logo?" required>
          <div style={{display:"flex",gap:8,flexWrap:"wrap",marginTop:4}}>
            {[["Yes — I will upload it","Yes — I'll upload it"],["No — I need one designed","No — need one"],["Have one but needs updating","Needs updating"]].map(([val,lbl])=>
              <Rb key={val} label={lbl} selected={f.logo===val} onClick={()=>upd("logo",val)}/>
            )}
          </div>
        </Field>
        <div style={s.gapl}><Field label="Do you have existing brand colours?" required>
          <div style={{display:"flex",gap:8,flexWrap:"wrap",marginTop:4}}>
            <Rb label="Yes — I know my colours" selected={f.hasColors==="yes"} onClick={()=>upd("hasColors","yes")}/>
            <Rb label="No — help me choose" selected={f.hasColors==="no"} onClick={()=>upd("hasColors","no")}/>
          </div>
        </Field></div>
        {f.hasColors==="yes"&&<div style={s.gap}><Field label="Select your brand colours" hint="Click the colour box to open the colour picker."><ColorPicker colors={f.colors} setColors={v=>upd("colors",v)}/></Field></div>}
        {f.hasColors==="no"&&<div style={s.gap}><Field label="What feeling should your website give visitors?" required>
          <div style={{display:"flex",gap:8,flexWrap:"wrap",marginTop:4}}>
            {["Professional & trustworthy","Bold & energetic","Warm & friendly","Luxury & premium","Clean & minimal","Fun & playful"].map(m=>
              <Rb key={m} label={m} selected={f.mood===m} onClick={()=>upd("mood",m)}/>
            )}
          </div>
        </Field></div>}
        <div style={s.gapl}><Field label="Preferred design style" required>
          <select style={s.select} value={f.style} onChange={e=>upd("style",e.target.value)}>
            <option value="">Select a style</option>
            <option>Modern & minimalist — clean, lots of white space</option>
            <option>Bold & graphic — strong colours, big visuals</option>
            <option>Corporate & professional — structured, formal</option>
            <option>Warm & approachable — friendly, inviting</option>
            <option>Luxury & high-end — elegant, refined</option>
            <option>Playful & creative — fun, colourful, unique</option>
            <option>Dark & sleek — dark backgrounds, modern feel</option>
          </select>
        </Field></div>
        {pkg!=="premium"&&<div style={{...s.ubox,marginTop:8}}>⚡ <strong>Custom design is included in Premium ($499) only.</strong> Your plan uses our professional template system.</div>}
        <div style={s.gap}><Field label="List 2–3 websites you love and why" required hint="Even competitors are fine. This is the fastest way for us to match your taste."><textarea style={{...s.textarea,minHeight:90}} value={f.inspo} onChange={e=>upd("inspo",e.target.value)} placeholder={"Website 1: https://example.com — I love the clean layout\nWebsite 2: https://example2.com — I like the colour scheme\nWebsite 3: https://example3.com — The homepage makes me want to call"}/></Field></div>
        <div style={s.gap}><Field label="Font preference" optional><input style={s.input} value={f.fonts} onChange={e=>upd("fonts",e.target.value)} placeholder="e.g. Modern like Montserrat, classic like Georgia, match the logo font"/></Field></div>
        <div style={s.gapl}><Field label="Do you have professional photos or images?" required>
          <div style={{display:"flex",gap:8,flexWrap:"wrap",marginTop:4}}>
            {[["Yes — I will provide them","Yes — I'll provide"],["No — use stock photos","Use stock photos"],["Mix of both","Mix of both"]].map(([val,lbl])=>
              <Rb key={val} label={lbl} selected={f.photos===val} onClick={()=>upd("photos",val)}/>
            )}
          </div>
        </Field></div>
        <div style={s.foot}><div style={s.footSec}>🔒 Secure &amp; private</div><div style={{display:"flex",gap:8}}><button style={s.btnBack} onClick={()=>go(1)}>← Back</button><button style={s.btnNext} onClick={()=>go(3)}>Save &amp; Continue →</button></div></div>
      </>}

      {/* ── STEP 3 ── */}
      {step===3&&<>
        <Banner pkg={pkg} onChangePkg={()=>setStep(0)}/>
        <div style={s.sshdr}><div style={s.sico}>📝</div><div><h3 style={{fontSize:19.2,fontWeight:700,color:"#ffffff"}}>Website Content</h3><p style={{fontSize:16,color:"#a9a3bf"}}>Tell us what goes on each page. The more detail, the better.</p></div></div>
        <div style={s.alertY}>💡 <strong>Tip:</strong> Write as if explaining your business to someone who has never heard of it. This content goes directly into your website.</div>
        <Field label="Which pages do you need?" required hint={`Your package includes up to ${PKGS[pkg]?.maxPages} pages. Items outside your plan are flagged.`}>
          <div style={{display:"flex",flexWrap:"wrap",gap:8,marginTop:8}}>
            {ALL_PAGES.map(pg=>{
              const a=avail(pg.min), sel=!!f.pages[pg.id];
              return <Rb key={pg.id} multi label={pg.label} selected={sel} upgrade={!a} upgradePkg={PKGS[pg.min]?.price} onClick={()=>updMap("pages",pg.id,{label:pg.label,min:pg.min,upgrade:!a},!sel)}/>;
            })}
          </div>
          {Object.keys(f.pages).length > PKGS[pkg]?.maxPages && <div style={s.ubox}>⚡ <strong>You selected {Object.keys(f.pages).length} pages</strong> — your plan includes up to {PKGS[pkg]?.maxPages}. Our team will discuss upgrade options before starting.</div>}
        </Field>
        <Divider>Homepage</Divider>
        <Field label="Main headline for the homepage" required hint="The first line visitors read. Make it clear and compelling."><input style={s.input} value={f.headline} onChange={e=>upd("headline",e.target.value)} placeholder="e.g. Trusted Plumbing Services in Mississauga — Available 24/7"/></Field>
        <div style={s.gap}><Field label="What action should visitors take?" required>
          <select style={s.select} value={f.cta} onChange={e=>upd("cta",e.target.value)}>
            <option value="">Select call to action</option>
            <option>Call us now</option>
            <option>Request a free quote</option>
            <option>Book an appointment</option>
            <option>Shop now</option>
            <option>Get a free consultation</option>
            <option>Contact us</option>
          </select>
        </Field></div>
        <Divider>About us</Divider>
        <Field label="Tell us about your business" required><textarea style={{...s.textarea,minHeight:100}} value={f.about} onChange={e=>upd("about",e.target.value)} placeholder="When founded? What do you do and why? Mission? Team size? Certifications, awards? What do customers say?"/></Field>
        <Divider>Services / products</Divider>
        <Field label="List all services or products with details" required hint="Include name, description, and pricing for each."><textarea style={{...s.textarea,minHeight:110}} value={f.services} onChange={e=>upd("services",e.target.value)} placeholder={"Service 1: Window Tinting — Ceramic, carbon and dyed tint. From $199.\nService 2: PPF — Full front-end protection from $899.\nService 3: Dashcam Installation — All brands from $69."}/></Field>
        <Divider>Pricing</Divider>
        <Field label="Should pricing be displayed on the website?" required>
          <div style={{display:"flex",gap:8,flexWrap:"wrap",marginTop:4}}>
            {[["Yes — display prices publicly","Yes — show prices"],["No — contact us for pricing","Contact for pricing"],["Starting price range only","Starting range only"]].map(([val,lbl])=>
              <Rb key={val} label={lbl} selected={f.showPrice===val} onClick={()=>upd("showPrice",val)}/>
            )}
          </div>
        </Field>
        <div style={s.gap}><Field label="Special packages or promotions" optional><textarea style={s.textarea} value={f.promos} onChange={e=>upd("promos",e.target.value)} placeholder="e.g. Tint + Dashcam bundle $249, Summer special 20% off PPF..."/></Field></div>
        <Divider>Reviews &amp; social proof</Divider>
        <Field label="Do you have customer reviews or testimonials?" required>
          <div style={{display:"flex",gap:8,flexWrap:"wrap",marginTop:4}}>
            {[["Yes — I will provide them","Yes — I'll provide"],["Yes — pull from Google Reviews","Pull from Google"],["No — not yet","Not yet"]].map(([val,lbl])=>
              <Rb key={val} label={lbl} selected={f.reviews===val} onClick={()=>upd("reviews",val)}/>
            )}
          </div>
        </Field>
        <Divider>Contact page</Divider>
        <Field label="What contact details should appear on the website?" required><textarea style={s.textarea} value={f.contactInfo} onChange={e=>upd("contactInfo",e.target.value)} placeholder={"Phone: 905-555-1234\nEmail: hello@yourbusiness.com\nHours: Mon–Fri 9am–6pm, Sat 10am–4pm"}/></Field>
        <div style={s.gap}><Field label="Other content notes" optional><textarea style={s.textarea} value={f.extraContent} onChange={e=>upd("extraContent",e.target.value)} placeholder="e.g. Gallery should have before-and-after photos. FAQ should cover these questions: ..."/></Field></div>
        <div style={s.foot}><div style={s.footSec}>🔒 Secure &amp; private</div><div style={{display:"flex",gap:8}}><button style={s.btnBack} onClick={()=>go(2)}>← Back</button><button style={s.btnNext} onClick={()=>go(4)}>Save &amp; Continue →</button></div></div>
      </>}

      {/* ── STEP 4 ── */}
      {step===4&&<>
        <Banner pkg={pkg} onChangePkg={()=>setStep(0)}/>
        <div style={s.sshdr}><div style={s.sico}>🔧</div><div><h3 style={{fontSize:19.2,fontWeight:700,color:"#ffffff"}}>Technical &amp; Access</h3><p style={{fontSize:16,color:"#a9a3bf"}}>Domain, hosting, features, integrations, and files.</p></div></div>
        <div style={s.g2}>
          <Field label="Do you own a domain name?" required>
            <div style={{display:"flex",gap:7,flexWrap:"wrap",marginTop:4}}>
              <Rb label="Yes" selected={f.domain==="Yes"} onClick={()=>upd("domain","Yes")}/>
              <Rb label="No — need one" selected={f.domain==="No — need one purchased"} onClick={()=>upd("domain","No — need one purchased")}/>
            </div>
          </Field>
          <Field label="Do you have web hosting?" required>
            <div style={{display:"flex",gap:7,flexWrap:"wrap",marginTop:4}}>
              <Rb label="Yes" selected={f.hosting==="Yes"} onClick={()=>upd("hosting","Yes")}/>
              <Rb label="No — set up for me" selected={f.hosting==="No — set it up for me"} onClick={()=>upd("hosting","No — set it up for me")}/>
            </div>
          </Field>
        </div>
        <div style={s.gap}><Field label="Domain name" optional><input style={s.input} value={f.domainName} onChange={e=>upd("domainName",e.target.value)} placeholder="e.g. www.yourbusiness.com"/></Field></div>
        <div style={s.gap}><Field label="Domain registrar" optional><input style={s.input} value={f.domainReg} onChange={e=>upd("domainReg",e.target.value)} placeholder="e.g. GoDaddy, Namecheap, Google Domains..."/></Field></div>
        <div style={s.gap}><Field label="Existing platform or admin URL" optional hint="No passwords please."><input style={s.input} value={f.loginInfo} onChange={e=>upd("loginInfo",e.target.value)} placeholder="e.g. WordPress — https://yourdomain.com/wp-admin, Wix, Shopify..."/></Field></div>
        <Divider>Features needed</Divider>
        <Field label="Select all features you need" required hint="Items outside your package are flagged — you can still select them and we'll follow up.">
          <div style={{display:"flex",flexWrap:"wrap",gap:8,marginTop:8}}>
            {ALL_FEATS.map(ft=>{
              const a=avail(ft.min), sel=!!f.feats[ft.id];
              return <Rb key={ft.id} multi label={ft.label} selected={sel} upgrade={!a} upgradePkg={PKGS[ft.min]?.price} onClick={()=>updMap("feats",ft.id,{label:ft.label,min:ft.min,upgrade:!a},!sel)}/>;
            })}
          </div>
        </Field>
        {ups.length>0&&<div style={{...s.ubox,marginTop:10}}><strong>⚡ Items outside your plan:</strong><ul style={{marginTop:6,paddingLeft:16,fontSize:15.4}}>{ups.map((u,i)=><li key={i}>{u}</li>)}</ul><div style={{marginTop:8,fontSize:15.4}}>Our team will reach out to discuss upgrade options before starting. <strong>You can still submit.</strong></div></div>}
        <div style={s.gap}><Field label="Where should contact form submissions go?" required hint="Every form submission will be emailed here."><input style={s.input} type="email" value={f.formEmail} onChange={e=>upd("formEmail",e.target.value)} placeholder="e.g. leads@yourbusiness.com"/></Field></div>
        <div style={s.gap}><Field label="Third-party tools to connect" optional><input style={s.input} value={f.tools} onChange={e=>upd("tools",e.target.value)} placeholder="e.g. GoHighLevel, Calendly, Stripe, Mailchimp, Tidio..."/></Field></div>
        <Divider>Files</Divider>
        <Field label="Notes about files you will send our team" required hint="Describe your logo, photos, documents — our team will request them directly."><textarea style={s.textarea} value={f.fileNotes} onChange={e=>upd("fileNotes",e.target.value)} placeholder="e.g. I have a PNG logo on white background, 3 shop photos, and a PDF with our service menu."/></Field>
        <div style={s.gap}><Field label="Anything else our team should know?" optional><textarea style={s.textarea} value={f.extraNotes} onChange={e=>upd("extraNotes",e.target.value)} placeholder="Hard deadlines, things you disliked about your previous website, specific concerns..."/></Field></div>
        <div style={s.foot}><div style={s.footSec}>🔒 Secure &amp; private</div><div style={{display:"flex",gap:8}}><button style={s.btnBack} onClick={()=>go(3)}>← Back</button><button style={s.btnNext} onClick={()=>go(5)}>Review &amp; Submit →</button></div></div>
      </>}

      {/* ── STEP 5 ── */}
      {step===5&&<>
        <div style={s.sshdr}><div style={s.sico}>✅</div><div><h3 style={{fontSize:19.2,fontWeight:700,color:"#ffffff"}}>Review &amp; Submit</h3><p style={{fontSize:16,color:"#a9a3bf"}}>Almost done — review everything then hit submit.</p></div></div>
        {ups.length>0&&<div style={{...s.ubox,marginBottom:12}}><strong>⚡ Heads up — items outside your package:</strong><ul style={{marginTop:6,paddingLeft:16,fontSize:15.4}}>{ups.map((u,i)=><li key={i}>{u}</li>)}</ul><div style={{marginTop:8,fontSize:15.4}}>Our team will contact you before starting to discuss options. <strong>You can still submit.</strong></div></div>}
        {[
          {icon:"💳",title:"Package",  body:`${PKGS[pkg]?.label} — up to ${PKGS[pkg]?.maxPages} pages.`, step:0},
          {icon:"📋",title:"Contact & Project Info", body:"Business name, contact details, priority, launch date, website goal, target audience, and USP.", step:1},
          {icon:"🎨",title:"Brand & Design", body:"Logo, brand colours with hex codes, design style, inspiration websites, font preference, and image availability.", step:2},
          {icon:"📝",title:"Website Content", body:"Pages selected, homepage headline and CTA, about us, services/products, pricing, promotions, reviews, and contact info.", step:3},
          {icon:"🔧",title:"Technical & Access", body:"Domain, hosting, features needed, integrations, form delivery email, and file notes.", step:4},
        ].map(r=>(
          <div key={r.title} style={s.rbox}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:5}}>
              <div style={{fontSize:16.6,fontWeight:600,color:"#ffffff"}}>{r.icon} {r.title}</div>
              <button onClick={()=>go(r.step)} style={{background:"none",border:"none",fontSize:15.4,color:"#a435ff",cursor:"pointer",fontWeight:600,padding:"2px 8px",borderRadius:6}}>Edit</button>
            </div>
            <p style={{fontSize:16,color:"#a9a3bf",lineHeight:1.6}}>{r.body}</p>
          </div>
        ))}
        <div style={s.alertG}>🔒 Your information is secure and will only be used for your project. Our team will be in touch within <strong>24–48 hours</strong>.</div>
        <div style={s.foot}>
          <div style={s.footSec}>🔒 Secure submission</div>
          <div style={{display:"flex",gap:8}}>
            <button style={s.btnBack} onClick={()=>go(4)}>← Back</button>
            <button style={{...s.btnSubmit,opacity:submitting?.7:1}} disabled={submitting} onClick={handleSubmit}>
              {submitting ? "Creating task..." : "✓ Submit Form"}
            </button>
          </div>
        </div>
      </>}

      </div>
    </div></div>
  );
}
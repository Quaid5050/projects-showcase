"use client";
import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, Globe, MapPin, Shield, ArrowRight, CheckCircle2, Clock, Send, Star } from "lucide-react";

const T = {
  en: {
    tag:"Contact Us", hero_title:"Start Your ISO 9001", hero_highlight:"Journey Today",
    hero_sub:"Book your free 30-minute consultation with Abdelali El-Magueri. No pressure, no commitment — just a clear conversation about your business and how ISO 9001 can work for you.",
    badge1:"Response within 24 hours", badge2:"Free 30-min consultation", badge3:"No obligation",
    info_title:"Get in Touch",
    info_sub:"Reach out through any channel — we respond within 24 hours on business days.",
    phone_label:"Phone", email_label:"Email", web_label:"Website", location_label:"Location",
    expect_title:"What to Expect",
    e1_title:"Quick Response", e1_desc:"We reply to all inquiries within 24 business hours.",
    e2_title:"No Pressure", e2_desc:"Our consultation is genuinely free — no hard sell, no commitment.",
    e3_title:"Direct Access", e3_desc:"You will speak directly with Abdelali, not a sales team.",
    trust_title:"Why Businesses Trust AEM",
    form_title:"Send Us a Message",
    form_sub:"Fill in the form below and we will get back to you within 24 hours.",
    fname:"First Name", lname:"Last Name", email:"Email Address", phone:"Phone Number",
    company:"Company Name", service_label:"Service Interested In", how_label:"How Did You Hear About Us?",
    message_label:"Message", submit:"Send Message & Book Free Consultation",
    sending:"Sending...",
    success_title:"Message Sent Successfully!", success_sub:"Thank you for reaching out. We will reply within 24 hours. Check your inbox for a confirmation email.",
    error_msg:"Something went wrong. Please try again or email us directly at aemqualityiso@gmail.com",
    privacy:"By submitting this form you agree to be contacted by AEM Quality ISO Consulting. We respect your privacy.",
    services_opts:["— Select a Service —","Diagnostic & Gap Analysis ($500 CAD+)","ISO 9001 Implementation ($3,000 CAD+)","Training Services ($750 CAD/session+)","Documentation & Continuous Improvement ($1,500 CAD+)","Full Package","Not Sure Yet — Need Guidance"],
    how_opts:["— Select —","Google Search","LinkedIn","Referral / Word of Mouth","Social Media","Other"],
    req:"Required fields",
  },
  fr: {
    tag:"Contactez-nous", hero_title:"Commencez votre parcours", hero_highlight:"ISO 9001 aujourd'hui",
    hero_sub:"Réservez votre consultation gratuite de 30 minutes avec Abdelali El-Magueri. Sans pression, sans engagement — juste une conversation claire sur votre entreprise.",
    badge1:"Réponse sous 24 heures", badge2:"Consultation gratuite de 30 min", badge3:"Sans obligation",
    info_title:"Contactez-nous",
    info_sub:"Contactez-nous par n'importe quel canal — nous répondons dans les 24 heures les jours ouvrables.",
    phone_label:"Téléphone", email_label:"Email", web_label:"Site web", location_label:"Localisation",
    expect_title:"Ce à quoi s'attendre",
    e1_title:"Réponse rapide", e1_desc:"Nous répondons à toutes les demandes dans les 24 heures ouvrables.",
    e2_title:"Sans pression", e2_desc:"Notre consultation est vraiment gratuite — pas de vente forcée, pas d'engagement.",
    e3_title:"Accès direct", e3_desc:"Vous parlerez directement avec Abdelali, pas une équipe commerciale.",
    trust_title:"Pourquoi les entreprises font confiance à AEM",
    form_title:"Envoyez-nous un message",
    form_sub:"Remplissez le formulaire ci-dessous et nous vous répondrons dans les 24 heures.",
    fname:"Prénom", lname:"Nom", email:"Adresse email", phone:"Numéro de téléphone",
    company:"Nom de l'entreprise", service_label:"Service qui vous intéresse", how_label:"Comment nous avez-vous trouvés ?",
    message_label:"Message", submit:"Envoyer le message & réserver une consultation gratuite",
    sending:"Envoi en cours...",
    success_title:"Message envoyé avec succès !", success_sub:"Merci de nous avoir contactés. Nous vous répondrons dans les 24 heures. Vérifiez votre boîte de réception pour un email de confirmation.",
    error_msg:"Une erreur s'est produite. Veuillez réessayer ou nous envoyer un email directement à aemqualityiso@gmail.com",
    privacy:"En soumettant ce formulaire, vous acceptez d'être contacté par AEM Quality ISO Consulting. Nous respectons votre vie privée.",
    services_opts:["— Sélectionner un service —","Diagnostic & Analyse des écarts (500 $ CAD+)","Mise en œuvre ISO 9001 (3 000 $ CAD+)","Services de formation (750 $ CAD/session+)","Documentation & Amélioration continue (1 500 $ CAD+)","Package complet","Pas encore sûr — Besoin de conseils"],
    how_opts:["— Sélectionner —","Recherche Google","LinkedIn","Référence / Bouche à oreille","Réseaux sociaux","Autre"],
    req:"Champs obligatoires",
  }
};

export default function ContactPage() {
  const [lang, setLang] = useState<"en"|"fr">("en");
  const [form, setForm] = useState({ fname:"", lname:"", email:"", phone:"", company:"", service:"", message:"", how:"" });
  const [status, setStatus] = useState<"idle"|"sending"|"success"|"error">("idle");
  const t = T[lang];

  const handle = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const submit = async () => {
    if(!form.fname || !form.lname || !form.email || !form.message) { alert(lang==="en"?"Please fill in all required fields.":"Veuillez remplir tous les champs obligatoires."); return; }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify(form) });
      if(res.ok) { setStatus("success"); setForm({ fname:"", lname:"", email:"", phone:"", company:"", service:"", message:"", how:"" }); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  const inp: React.CSSProperties = { width:"100%", fontFamily:"Barlow,sans-serif", fontSize:15, color:"#0d1b35", background:"#f4f7fb", border:"1px solid #e4eaf5", borderRadius:8, padding:"13px 16px", outline:"none", transition:"all 0.2s", appearance:"none" as const };
  const lbl: React.CSSProperties = { display:"block", fontFamily:"Montserrat,sans-serif", fontSize:10, fontWeight:700, letterSpacing:"1.5px", textTransform:"uppercase", color:"#0a1f44", marginBottom:8 };

  return (
    <div style={{ paddingTop:74, overflowX:"hidden", maxWidth:"100vw" }}>
      {/* LANG SWITCHER */}
      <div style={{ position:"fixed", top:18, right:80, zIndex:1100, display:"flex", gap:4, background:"#f0f4f8", borderRadius:20, padding:"3px 4px" }}>
        <button onClick={()=>setLang("en")} style={{ fontFamily:"Montserrat,sans-serif", fontSize:10, fontWeight:700, letterSpacing:"1px", padding:"5px 12px", borderRadius:16, border:"none", cursor:"pointer", background:lang==="en"?"#1a56db":"transparent", color:lang==="en"?"#fff":"#3d4f6b" }}>EN</button>
        <button onClick={()=>setLang("fr")} style={{ fontFamily:"Montserrat,sans-serif", fontSize:10, fontWeight:700, letterSpacing:"1px", padding:"5px 12px", borderRadius:16, border:"none", cursor:"pointer", background:lang==="fr"?"#1a56db":"transparent", color:lang==="fr"?"#fff":"#3d4f6b" }}>FR</button>
      </div>

      {/* HERO */}
      <section style={{ background:"#0a1f44", padding:"96px 24px 80px", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 70% 60% at 60% 50%, rgba(26,86,219,0.2) 0%, transparent 70%)" }} />
        <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)", backgroundSize:"60px 60px" }} />
        <div style={{ maxWidth:800, margin:"0 auto", position:"relative", zIndex:2, textAlign:"center" }}>
          <span style={{ display:"inline-block", fontFamily:"Montserrat,sans-serif", fontSize:10, fontWeight:700, letterSpacing:"3px", textTransform:"uppercase", color:"#3b82f6", background:"rgba(26,86,219,0.2)", border:"1px solid rgba(26,86,219,0.35)", padding:"6px 18px", borderRadius:50, marginBottom:20 }}>{t.tag}</span>
          <h1 style={{ fontFamily:"Montserrat,sans-serif", fontSize:"clamp(32px,5vw,52px)", fontWeight:900, color:"#fff", lineHeight:1.1, marginBottom:18 }}>
            {t.hero_title}<br/>
            <span style={{ background:"linear-gradient(135deg,#3b82f6,#00c2ff)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>{t.hero_highlight}</span>
          </h1>
          <p style={{ fontSize:17, color:"rgba(255,255,255,0.6)", lineHeight:1.8, marginBottom:36 }}>{t.hero_sub}</p>
          <div style={{ display:"flex", justifyContent:"center", gap:24, flexWrap:"wrap" }}>
            {[{ icon:<Clock size={15}/>, text:t.badge1 },{ icon:<CheckCircle2 size={15}/>, text:t.badge2 },{ icon:<Shield size={15}/>, text:t.badge3 }].map((b,i) => (
              <div key={i} style={{ display:"flex", alignItems:"center", gap:8, color:"rgba(255,255,255,0.6)", fontSize:13, fontFamily:"Montserrat,sans-serif", fontWeight:600 }}>
                <span style={{ color:"#3b82f6" }}>{b.icon}</span>{b.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section style={{ padding:"72px 24px", background:"#f4f7fb" }}>
        <div style={{ maxWidth:1240, margin:"0 auto" }}>
          <div className="contact-grid">
            {/* Info */}
            <div>
              <div style={{ background:"#0a1f44", borderRadius:20, padding:"36px 32px", marginBottom:20, position:"relative", overflow:"hidden" }}>
                <div style={{ position:"absolute", bottom:-30, right:-30, width:140, height:140, borderRadius:"50%", background:"rgba(26,86,219,0.12)" }} />
                <h3 style={{ fontFamily:"Montserrat,sans-serif", fontSize:18, fontWeight:800, color:"#fff", marginBottom:8 }}>{t.info_title}</h3>
                <p style={{ fontSize:14, color:"rgba(255,255,255,0.5)", lineHeight:1.7, marginBottom:28 }}>{t.info_sub}</p>
                {[
                  { icon:<Phone size={17}/>, label:t.phone_label, val:"+1 514 552 6936", href:"tel:+15145526936" },
                  { icon:<Mail size={17}/>, label:t.email_label, val:"aemqualityiso@gmail.com", href:"mailto:aemqualityiso@gmail.com" },
                  { icon:<Globe size={17}/>, label:t.web_label, val:"www.aemqualityiso.com", href:"https://www.aemqualityiso.com" },
                  { icon:<MapPin size={17}/>, label:t.location_label, val:"Montréal, Québec, Canada", href:"#" },
                ].map((item,i) => (
                  <a key={i} href={item.href} style={{ display:"flex", alignItems:"flex-start", gap:14, marginBottom:18, textDecoration:"none" }}>
                    <div style={{ width:42, height:42, borderRadius:10, background:"rgba(26,86,219,0.25)", display:"flex", alignItems:"center", justifyContent:"center", color:"#3b82f6", flexShrink:0 }}>{item.icon}</div>
                    <div>
                      <div style={{ fontFamily:"Montserrat,sans-serif", fontSize:9, fontWeight:700, letterSpacing:"2px", textTransform:"uppercase", color:"#3b82f6", marginBottom:3 }}>{item.label}</div>
                      <div style={{ fontSize:13, color:"rgba(255,255,255,0.8)", fontWeight:500 }}>{item.val}</div>
                    </div>
                  </a>
                ))}
                <div style={{ borderTop:"1px solid rgba(255,255,255,0.07)", paddingTop:18, marginTop:8, display:"flex", alignItems:"center", gap:8 }}>
                  <Shield size={13} color="#3b82f6"/>
                  <span style={{ fontFamily:"Montserrat,sans-serif", fontSize:9, fontWeight:700, letterSpacing:"2px", textTransform:"uppercase", color:"rgba(255,255,255,0.35)" }}>Québec Registered · NEQ: 2282117623</span>
                </div>
              </div>

              <div style={{ background:"#fff", border:"1px solid #e4eaf5", borderRadius:16, padding:"24px", marginBottom:20 }}>
                <h4 style={{ fontFamily:"Montserrat,sans-serif", fontSize:11, fontWeight:800, letterSpacing:"1.5px", textTransform:"uppercase", color:"#0a1f44", marginBottom:16 }}>{t.expect_title}</h4>
                {[{ icon:<Clock size={15}/>, title:t.e1_title, desc:t.e1_desc },{ icon:<CheckCircle2 size={15}/>, title:t.e2_title, desc:t.e2_desc },{ icon:<Shield size={15}/>, title:t.e3_title, desc:t.e3_desc }].map((item,i) => (
                  <div key={i} style={{ display:"flex", gap:12, padding:"11px 0", borderBottom:i<2?"1px solid #f4f7fb":"none" }}>
                    <div style={{ width:34, height:34, borderRadius:10, background:"rgba(26,86,219,0.08)", display:"flex", alignItems:"center", justifyContent:"center", color:"#1a56db", flexShrink:0 }}>{item.icon}</div>
                    <div>
                      <div style={{ fontFamily:"Montserrat,sans-serif", fontSize:12, fontWeight:700, color:"#0a1f44", marginBottom:3 }}>{item.title}</div>
                      <div style={{ fontSize:12, color:"#3d4f6b" }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust signals */}
              <div style={{ background:"#fff", border:"1px solid #e4eaf5", borderRadius:16, padding:"24px" }}>
                <h4 style={{ fontFamily:"Montserrat,sans-serif", fontSize:11, fontWeight:800, letterSpacing:"1.5px", textTransform:"uppercase", color:"#0a1f44", marginBottom:16 }}>{t.trust_title}</h4>
                <div style={{ display:"flex", gap:4, marginBottom:12 }}>
                  {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="#f0b429" color="#f0b429"/>)}
                  <span style={{ fontSize:13, color:"#3d4f6b", marginLeft:6, fontFamily:"Montserrat,sans-serif", fontWeight:600 }}>5/5 Client Rating</span>
                </div>
                <p style={{ fontSize:13, color:"#3d4f6b", lineHeight:1.7, fontStyle:"italic" }}>"Professional, practical and highly experienced. Abdelali understood our industry immediately."</p>
                <p style={{ fontSize:12, color:"#8492a6", marginTop:8 }}>— Quality Director, Industrial Services</p>
              </div>
            </div>

            {/* FORM */}
            <div style={{ background:"#fff", border:"1px solid #e4eaf5", borderRadius:20, padding:"44px 36px" }}>
              <h2 style={{ fontFamily:"Montserrat,sans-serif", fontSize:22, fontWeight:800, color:"#0a1f44", marginBottom:6 }}>{t.form_title}</h2>
              <p style={{ fontSize:14, color:"#3d4f6b", marginBottom:28 }}>{t.form_sub} <span style={{ color:"#8492a6" }}>(*{t.req})</span></p>

              {status==="success" && (
                <div style={{ background:"rgba(34,197,94,0.1)", border:"1px solid rgba(34,197,94,0.3)", borderRadius:10, padding:"20px 24px", marginBottom:24, display:"flex", alignItems:"flex-start", gap:14 }}>
                  <CheckCircle2 size={22} color="#22c55e" style={{ flexShrink:0, marginTop:2 }}/>
                  <div>
                    <div style={{ fontFamily:"Montserrat,sans-serif", fontSize:13, fontWeight:700, color:"#22c55e", marginBottom:4 }}>{t.success_title}</div>
                    <div style={{ fontSize:13, color:"#3d4f6b" }}>{t.success_sub}</div>
                  </div>
                </div>
              )}
              {status==="error" && (
                <div style={{ background:"rgba(239,68,68,0.1)", border:"1px solid rgba(239,68,68,0.3)", borderRadius:10, padding:"16px 20px", marginBottom:24, fontSize:13, color:"#ef4444", fontFamily:"Montserrat,sans-serif", fontWeight:600 }}>⚠️ {t.error_msg}</div>
              )}

              <div className="form-row">
                <div style={{ marginBottom:18 }}><label style={lbl}>{t.fname} *</label><input name="fname" value={form.fname} onChange={handle} placeholder="John" style={inp}/></div>
                <div style={{ marginBottom:18 }}><label style={lbl}>{t.lname} *</label><input name="lname" value={form.lname} onChange={handle} placeholder="Smith" style={inp}/></div>
              </div>
              <div className="form-row">
                <div style={{ marginBottom:18 }}><label style={lbl}>{t.email} *</label><input name="email" type="email" value={form.email} onChange={handle} placeholder="john@company.com" style={inp}/></div>
                <div style={{ marginBottom:18 }}><label style={lbl}>{t.phone}</label><input name="phone" type="tel" value={form.phone} onChange={handle} placeholder="+1 (514) 000-0000" style={inp}/></div>
              </div>
              <div style={{ marginBottom:18 }}><label style={lbl}>{t.company}</label><input name="company" value={form.company} onChange={handle} placeholder="Your Company Inc." style={inp}/></div>
              <div className="form-row">
                <div style={{ marginBottom:18 }}>
                  <label style={lbl}>{t.service_label}</label>
                  <select name="service" value={form.service} onChange={handle} style={inp}>
                    {t.services_opts.map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div style={{ marginBottom:18 }}>
                  <label style={lbl}>{t.how_label}</label>
                  <select name="how" value={form.how} onChange={handle} style={inp}>
                    {t.how_opts.map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
              </div>
              <div style={{ marginBottom:24 }}>
                <label style={lbl}>{t.message_label} *</label>
                <textarea name="message" value={form.message} onChange={handle} rows={5} placeholder={lang==="en"?"Tell us about your business, what you want to achieve, and any questions you have about ISO 9001...":"Parlez-nous de votre entreprise, de ce que vous souhaitez réaliser et de vos questions sur l'ISO 9001..."} style={{ ...inp, resize:"vertical" }}/>
              </div>
              <button onClick={submit} disabled={status==="sending"} style={{ width:"100%", fontFamily:"Montserrat,sans-serif", fontSize:12, fontWeight:700, letterSpacing:"1.5px", textTransform:"uppercase", padding:"17px 32px", background:status==="sending"?"rgba(26,86,219,0.6)":"linear-gradient(135deg,#1a56db,#2563eb)", color:"#fff", border:"none", borderRadius:8, cursor:status==="sending"?"not-allowed":"pointer", display:"flex", alignItems:"center", justifyContent:"center", gap:10, boxShadow:"0 8px 24px rgba(26,86,219,0.3)" }}>
                {status==="sending" ? t.sending : <><Send size={16}/> {t.submit}</>}
              </button>
              <p style={{ fontSize:11, color:"#8492a6", textAlign:"center", marginTop:14, lineHeight:1.6 }}>{t.privacy}</p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-grid{display:grid;grid-template-columns:360px 1fr;gap:32px;align-items:start;}
        .form-row{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
        @media(max-width:960px){.contact-grid{grid-template-columns:1fr!important;}}
        @media(max-width:600px){.form-row{grid-template-columns:1fr!important;}}
        input:focus,select:focus,textarea:focus{border-color:#1a56db!important;background:#fff!important;box-shadow:0 0 0 3px rgba(26,86,219,0.1)!important;}
      `}</style>
    </div>
  );
}
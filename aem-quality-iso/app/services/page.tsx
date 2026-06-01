"use client";
import { useState } from "react";
import Link from "next/link";
import { Search, Settings, GraduationCap, FileText, ArrowRight, CheckCircle2, Clock, ChevronRight } from "lucide-react";

const T = {
  en: {
    tag:"Our Services", hero_title:"End-to-End ISO 9001 Support", hero_highlight:"For Every Stage of Your Journey",
    hero_sub:"Whether you are starting from scratch, mid-implementation, or looking to improve an existing system — we have a service designed precisely for where you are right now.",
    nav1:"01 Diagnostic", nav2:"02 Implementation", nav3:"03 Training", nav4:"04 Documentation",
    starting:"Investment Starting From", get_quote:"Get a Quote", not_sure_title:"Not Sure Which Service is Right?",
    not_sure_sub:"Book a free 30-minute consultation and we will help you identify exactly where to start and build a plan that fits your timeline and budget.",
    cta_btn:"Book Free Consultation",
    duration_label:"Typical Duration", ideal_label:"Ideal For", included_label:"What's Included", deliverables_label:"Deliverables",
    industries_label:"Industries Served",
    services:[
      {
        id:"diagnostic", num:"01", name:"Diagnostic & Gap Analysis", price:"$500", tag:"Best Starting Point",
        headline:"Know Exactly Where You Stand Before You Start",
        desc:"Before any implementation begins, you need a clear, honest picture of where your organization currently stands against ISO 9001 requirements. Our diagnostic service delivers exactly that — a comprehensive, expert-led assessment that maps every gap, risk, and opportunity in your current management system.",
        fullDesc:"Our senior ISO consultant conducts a thorough on-site or remote review of your existing processes, documentation, and quality practices. We compare your current state against all ISO 9001:2015 clauses and produce a detailed report with prioritized recommendations.",
        includes:["Clause-by-clause gap assessment against ISO 9001:2015","Identification of major and minor nonconformities","Risk and opportunity analysis","Detailed written Gap Analysis Report","Strategic prioritized Action Plan with timelines","Executive summary presentation for leadership"],
        deliverables:["Comprehensive Gap Analysis Report (PDF)","Nonconformity register","Prioritized improvement roadmap","30-minute debrief call"],
        duration:"3–5 business days", ideal:"SMEs, Manufacturers, Service companies, Engineering firms starting their ISO journey.",
        industries:["Manufacturing","Automotive","Aerospace","Professional Services","Logistics","Construction"],
      },
      {
        id:"implementation", num:"02", name:"ISO 9001 Implementation", price:"$3,000", tag:"Complete System Build",
        headline:"Build a Quality Management System That Actually Works",
        desc:"ISO 9001 implementation is more than just paperwork — it is about creating a management system that genuinely improves how your business operates, reduces errors, satisfies customers, and positions you for sustainable growth.",
        fullDesc:"We work alongside your team to design, document, and embed a quality management system tailored specifically to your business. From developing your Quality Manual to writing operational procedures and training your staff, we manage the entire process.",
        includes:["Quality Management System (QMS) design and architecture","Quality Manual development from scratch","Operational procedures and work instructions","Process mapping and flowchart documentation","Risk and opportunity register","Objectives and KPI framework","Management review process setup","Internal audit program design","Corrective action process implementation","Pre-certification readiness review"],
        deliverables:["Complete QMS documentation package","Quality Manual (English/French)","All mandatory ISO 9001:2015 procedures","Process maps and flowcharts","Training materials for your team","Internal audit checklist"],
        duration:"8–16 weeks depending on size", ideal:"Growing businesses, Industrial companies, SMEs wanting full certification support from start to finish.",
        industries:["Manufacturing","Industrial Services","Automotive","Aerospace","Engineering","SMEs"],
      },
      {
        id:"training", num:"03", name:"Training Services", price:"$750", tag:"Per Session",
        headline:"Build a Team That Understands Quality From the Inside Out",
        desc:"ISO 9001 only works when your people understand it. Our training programs are practical, engaging, and designed specifically for your industry and team — not generic classroom material.",
        fullDesc:"Led by Abdelali El-Magueri with over 20 years of hands-on experience, our training sessions combine theory with real-world application. Every session is tailored to your specific context, using examples from your own industry and processes wherever possible.",
        includes:["Quality Management Awareness (ISO 9001 fundamentals)","7 QC Tools: Histogram, Pareto, Fishbone, Control Chart, Scatter, Flowchart, Check Sheet","PDCA Cycle implementation workshops","5M / Ishikawa root cause analysis","AMDEC / FMEA — Failure Mode & Effects Analysis","Problem Solving: 8D, RCA, A3 Report, 5 Whys","Internal Auditor Training (theory + practice audit)","Customized workshops for specific quality challenges"],
        deliverables:["Comprehensive training slides and handouts","Workshop exercises and templates","Participant certificates of completion","Post-training assessment report"],
        duration:"Half-day or full-day (online or on-site)", ideal:"Quality teams, production managers, department heads, all staff involved in quality or auditing activities.",
        industries:["All Industries","Manufacturing","Automotive","Aerospace","Logistics","Professional Services"],
      },
      {
        id:"documentation", num:"04", name:"Documentation & Continuous Improvement", price:"$1,500", tag:"Ongoing Excellence",
        headline:"Create Documentation That Drives Real Continuous Improvement",
        desc:"Good documentation is not about creating mountains of paper — it is about capturing the right information in a clear, usable way that your team will actually follow and use every day.",
        fullDesc:"We create clear, compliant, and practical documentation systems that meet ISO 9001 requirements while being simple enough for your team to actually use. We also implement continuous improvement processes — internal audits, KPI monitoring, and corrective action systems.",
        includes:["Documentation system design and structure","Quality records templates (forms, logs, registers)","Standard Operating Procedures (SOPs) writing","Work instructions for critical processes","Document control and version management system","Internal audit schedule and checklists","KPI dashboard design and reporting templates","Management review agenda and minutes templates","Corrective and preventive action (CAPA) system","Continual improvement project tracking"],
        deliverables:["Complete documentation library","Document control matrix","Internal audit toolkit","KPI monitoring templates","CAPA log and process guide"],
        duration:"2–6 weeks depending on scope", ideal:"Certified companies maintaining compliance, organizations post-implementation needing robust ongoing systems.",
        industries:["All Certified Organizations","Manufacturing","Services","Industrial","Engineering","Healthcare"],
      }
    ]
  },
  fr: {
    tag:"Nos Services", hero_title:"Accompagnement ISO 9001 de bout en bout", hero_highlight:"Pour chaque étape de votre parcours",
    hero_sub:"Que vous partiez de zéro, soyez en cours de mise en œuvre, ou cherchiez à améliorer un système existant — nous avons un service conçu précisément pour là où vous en êtes.",
    nav1:"01 Diagnostic", nav2:"02 Mise en œuvre", nav3:"03 Formation", nav4:"04 Documentation",
    starting:"Investissement à partir de", get_quote:"Demander un devis", not_sure_title:"Vous ne savez pas quel service choisir ?",
    not_sure_sub:"Réservez une consultation gratuite de 30 minutes et nous vous aiderons à identifier exactement par où commencer.",
    cta_btn:"Réserver une consultation gratuite",
    duration_label:"Durée typique", ideal_label:"Idéal pour", included_label:"Ce qui est inclus", deliverables_label:"Livrables",
    industries_label:"Secteurs servis",
    services:[
      {
        id:"diagnostic", num:"01", name:"Diagnostic & Analyse des écarts", price:"500 $", tag:"Meilleur point de départ",
        headline:"Sachez exactement où vous en êtes avant de commencer",
        desc:"Avant toute mise en œuvre, vous avez besoin d'une image claire et honnête de l'endroit où se trouve votre organisation par rapport aux exigences ISO 9001. Notre service de diagnostic livre exactement cela.",
        fullDesc:"Notre consultant ISO principal effectue une revue approfondie en présentiel ou à distance de vos processus existants, de votre documentation et de vos pratiques qualité. Nous comparons votre état actuel à toutes les clauses ISO 9001:2015.",
        includes:["Évaluation des écarts clause par clause vs ISO 9001:2015","Identification des non-conformités majeures et mineures","Analyse des risques et opportunités","Rapport d'analyse des écarts détaillé","Plan d'action stratégique et priorisé avec délais","Présentation du résumé exécutif pour la direction"],
        deliverables:["Rapport d'analyse des écarts complet (PDF)","Registre des non-conformités","Feuille de route d'amélioration priorisée","Appel de débriefing de 30 minutes"],
        duration:"3 à 5 jours ouvrables", ideal:"PME, fabricants, entreprises de services, cabinets d'ingénierie débutant leur parcours ISO.",
        industries:["Fabrication","Automobile","Aérospatiale","Services professionnels","Logistique","Construction"],
      },
      {
        id:"implementation", num:"02", name:"Mise en œuvre ISO 9001", price:"3 000 $", tag:"Construction complète du système",
        headline:"Construisez un système de management de la qualité qui fonctionne vraiment",
        desc:"La mise en œuvre ISO 9001 va au-delà de la paperasse — il s'agit de créer un système de management qui améliore réellement le fonctionnement de votre entreprise, réduit les erreurs et satisfait vos clients.",
        fullDesc:"Nous travaillons aux côtés de votre équipe pour concevoir, documenter et intégrer un système de management de la qualité spécifiquement adapté à votre entreprise.",
        includes:["Conception et architecture du SMQ","Développement du Manuel Qualité à partir de zéro","Procédures opérationnelles et instructions de travail","Cartographie des processus et documentation des organigrammes","Registre des risques et opportunités","Cadre d'objectifs et d'indicateurs KPI","Mise en place du processus de revue de direction","Conception du programme d'audit interne","Mise en œuvre du processus d'action corrective","Revue de préparation à la certification"],
        deliverables:["Package complet de documentation SMQ","Manuel Qualité (anglais/français)","Toutes les procédures ISO 9001:2015 obligatoires","Cartes de processus et organigrammes","Matériel de formation pour votre équipe","Liste de contrôle d'audit interne"],
        duration:"8 à 16 semaines selon la taille", ideal:"Entreprises en croissance, industries, PME souhaitant un accompagnement complet de la certification du début à la fin.",
        industries:["Fabrication","Services industriels","Automobile","Aérospatiale","Ingénierie","PME"],
      },
      {
        id:"training", num:"03", name:"Services de formation", price:"750 $", tag:"Par session",
        headline:"Construisez une équipe qui comprend la qualité de l'intérieur",
        desc:"L'ISO 9001 ne fonctionne que lorsque vos collaborateurs le comprennent. Nos programmes de formation sont pratiques, engageants et conçus spécifiquement pour votre secteur et votre équipe.",
        fullDesc:"Animées par Abdelali El-Magueri avec plus de 20 ans d'expérience pratique, nos sessions de formation combinent théorie et application concrète.",
        includes:["Sensibilisation au management de la qualité (fondamentaux ISO 9001)","7 outils QC : Histogramme, Pareto, Ishikawa, Carte de contrôle, Nuage de points","Ateliers de mise en œuvre du cycle PDCA","Analyse des causes racines 5M / Ishikawa","AMDEC / FMEA — Analyse des modes de défaillance","Résolution de problèmes : 8D, RCA, Rapport A3, 5 Pourquoi","Formation auditeur interne (théorie + audit pratique)","Ateliers personnalisés pour des défis qualité spécifiques"],
        deliverables:["Diapositives de formation complètes et documents","Exercices d'atelier et modèles","Certificats de participation","Rapport d'évaluation post-formation"],
        duration:"Demi-journée ou journée complète (en ligne ou présentiel)", ideal:"Équipes qualité, responsables de production, chefs de département, tout le personnel impliqué dans les activités qualité.",
        industries:["Tous secteurs","Fabrication","Automobile","Aérospatiale","Logistique","Services professionnels"],
      },
      {
        id:"documentation", num:"04", name:"Documentation & Amélioration continue", price:"1 500 $", tag:"Excellence continue",
        headline:"Créez une documentation qui favorise une vraie amélioration continue",
        desc:"Une bonne documentation ne consiste pas à créer des montagnes de papier — il s'agit de capturer les bonnes informations de manière claire et utilisable que votre équipe suivra réellement.",
        fullDesc:"Nous créons des systèmes de documentation clairs, conformes et pratiques qui répondent aux exigences ISO 9001 tout en étant suffisamment simples pour que votre équipe les utilise réellement.",
        includes:["Conception et structure du système documentaire","Modèles d'enregistrements qualité (formulaires, journaux, registres)","Rédaction des Procédures Opérationnelles Standard (POS)","Instructions de travail pour les processus critiques","Système de contrôle et gestion des versions des documents","Calendrier et listes de contrôle d'audit interne","Conception du tableau de bord KPI et modèles de rapports","Modèles d'agenda et de compte-rendu de revue de direction","Système d'actions correctives et préventives (CAPA)","Suivi des projets d'amélioration continue"],
        deliverables:["Bibliothèque documentaire complète","Matrice de contrôle des documents","Kit d'outils d'audit interne","Modèles de suivi des KPI","Journal et guide du processus CAPA"],
        duration:"2 à 6 semaines selon la portée", ideal:"Entreprises certifiées maintenant leur conformité, organisations post-mise en œuvre nécessitant des systèmes continus robustes.",
        industries:["Toutes organisations certifiées","Fabrication","Services","Industrie","Ingénierie","Santé"],
      }
    ]
  }
};

export default function ServicesPage() {
  const [lang, setLang] = useState<"en"|"fr">("en");
  const t = T[lang];

  return (
    <div style={{ paddingTop:74, overflowX:"hidden", maxWidth:"100vw" }}>
      {/* LANG SWITCHER */}
      <div style={{ position:"fixed", top:18, right:80, zIndex:1100, display:"flex", gap:4, background:"#f0f4f8", borderRadius:20, padding:"3px 4px" }}>
        <button onClick={()=>setLang("en")} style={{ fontFamily:"Montserrat,sans-serif", fontSize:10, fontWeight:700, letterSpacing:"1px", padding:"5px 12px", borderRadius:16, border:"none", cursor:"pointer", background:lang==="en"?"#1a56db":"transparent", color:lang==="en"?"#fff":"#3d4f6b" }}>EN</button>
        <button onClick={()=>setLang("fr")} style={{ fontFamily:"Montserrat,sans-serif", fontSize:10, fontWeight:700, letterSpacing:"1px", padding:"5px 12px", borderRadius:16, border:"none", cursor:"pointer", background:lang==="fr"?"#1a56db":"transparent", color:lang==="fr"?"#fff":"#3d4f6b" }}>FR</button>
      </div>

      {/* HERO */}
      <section style={{ background:"#0a1f44", padding:"96px 24px 80px", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 60% 70% at 60% 50%, rgba(26,86,219,0.2) 0%, transparent 70%)" }} />
        <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)", backgroundSize:"60px 60px" }} />
        <div style={{ maxWidth:1240, margin:"0 auto", position:"relative", zIndex:2, textAlign:"center" }}>
          <span style={{ display:"inline-block", fontFamily:"Montserrat,sans-serif", fontSize:10, fontWeight:700, letterSpacing:"3px", textTransform:"uppercase", color:"#3b82f6", background:"rgba(26,86,219,0.2)", border:"1px solid rgba(26,86,219,0.35)", padding:"6px 18px", borderRadius:50, marginBottom:20 }}>{t.tag}</span>
          <h1 style={{ fontFamily:"Montserrat,sans-serif", fontSize:"clamp(32px,5vw,52px)", fontWeight:900, color:"#fff", lineHeight:1.1, marginBottom:18 }}>
            {t.hero_title}<br/>
            <span style={{ background:"linear-gradient(135deg,#3b82f6,#00c2ff)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>{t.hero_highlight}</span>
          </h1>
          <p style={{ fontSize:17, color:"rgba(255,255,255,0.6)", lineHeight:1.8, maxWidth:660, margin:"0 auto" }}>{t.hero_sub}</p>
        </div>
      </section>

      {/* QUICK NAV */}
      <div style={{ background:"#fff", borderBottom:"1px solid #e4eaf5", padding:"0 24px", position:"sticky", top:74, zIndex:100, overflowX:"auto" }}>
        <div style={{ maxWidth:1240, margin:"0 auto", display:"flex", gap:0 }}>
          {[t.nav1,t.nav2,t.nav3,t.nav4].map((n,i) => (
            <a key={i} href={`#${t.services[i].id}`} style={{ fontFamily:"Montserrat,sans-serif", fontSize:11, fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", color:"#3d4f6b", textDecoration:"none", padding:"16px 24px", borderBottom:"2px solid transparent", whiteSpace:"nowrap", flexShrink:0 }}>{n}</a>
          ))}
        </div>
      </div>

      {/* EACH SERVICE */}
      {t.services.map((s, i) => (
        <section key={s.id} id={s.id} style={{ padding:"80px 24px", background:i%2===0?"#fff":"#f4f7fb" }}>
          <div style={{ maxWidth:1240, margin:"0 auto" }}>
            <div className="svc-det-grid">
              {/* Content */}
              <div style={{ order:i%2===0?1:2 }}>
                <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:20 }}>
                  <span style={{ fontFamily:"Montserrat,sans-serif", fontSize:11, fontWeight:800, letterSpacing:"2px", color:"#1a56db" }}>{s.num}</span>
                  <span style={{ background:"rgba(26,86,219,0.08)", color:"#1a56db", fontFamily:"Montserrat,sans-serif", fontSize:9, fontWeight:700, letterSpacing:"2px", textTransform:"uppercase", padding:"5px 12px", borderRadius:50 }}>{s.tag}</span>
                </div>
                <h2 style={{ fontFamily:"Montserrat,sans-serif", fontSize:"clamp(22px,3.2vw,34px)", fontWeight:900, color:"#0a1f44", lineHeight:1.2, marginBottom:16 }}>{s.headline}</h2>
                <p style={{ fontSize:16, color:"#3d4f6b", lineHeight:1.82, marginBottom:14 }}>{s.desc}</p>
                <p style={{ fontSize:15, color:"#3d4f6b", lineHeight:1.82, marginBottom:28 }}>{s.fullDesc}</p>
                <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"#f4f7fb", border:"1px solid #e4eaf5", borderRadius:8, padding:"10px 16px", marginBottom:28 }}>
                  <Clock size={15} color="#1a56db"/>
                  <span style={{ fontFamily:"Montserrat,sans-serif", fontSize:11, fontWeight:600, color:"#3d4f6b" }}>{t.duration_label}: {s.duration}</span>
                </div>
                <h3 style={{ fontFamily:"Montserrat,sans-serif", fontSize:11, fontWeight:800, letterSpacing:"1.5px", textTransform:"uppercase", color:"#0a1f44", marginBottom:16 }}>{t.included_label}</h3>
                <ul style={{ listStyle:"none", marginBottom:32 }}>
                  {s.includes.map(item => (
                    <li key={item} style={{ display:"flex", alignItems:"flex-start", gap:10, padding:"8px 0", borderBottom:"1px solid #f4f7fb", fontSize:14, color:"#3d4f6b", lineHeight:1.55 }}>
                      <CheckCircle2 size={15} color="#1a56db" style={{ flexShrink:0, marginTop:2 }}/>{item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" style={{ display:"inline-flex", alignItems:"center", gap:10, fontFamily:"Montserrat,sans-serif", fontSize:12, fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", padding:"15px 32px", background:"linear-gradient(135deg,#1a56db,#2563eb)", color:"#fff", borderRadius:8, textDecoration:"none", boxShadow:"0 6px 20px rgba(26,86,219,0.3)" }}>
                  {t.get_quote} <ArrowRight size={16}/>
                </Link>
              </div>

              {/* Sidebar */}
              <div style={{ order:i%2===0?2:1, display:"flex", flexDirection:"column", gap:18 }}>
                <div style={{ background:"#0a1f44", borderRadius:16, padding:"32px 28px", position:"relative", overflow:"hidden" }}>
                  <div style={{ position:"absolute", top:-20, right:-20, width:100, height:100, borderRadius:"50%", background:"rgba(26,86,219,0.15)" }} />
                  <h3 style={{ fontFamily:"Montserrat,sans-serif", fontSize:16, fontWeight:800, color:"#fff", marginBottom:16 }}>{s.name}</h3>
                  <div style={{ borderTop:"1px solid rgba(255,255,255,0.1)", paddingTop:16 }}>
                    <p style={{ fontFamily:"Montserrat,sans-serif", fontSize:9, fontWeight:700, letterSpacing:"2px", textTransform:"uppercase", color:"rgba(255,255,255,0.4)", marginBottom:6 }}>{t.starting}</p>
                    <div style={{ fontFamily:"Montserrat,sans-serif", fontSize:40, fontWeight:900, color:"#fff" }}>{s.price} <span style={{ fontSize:14, color:"#3b82f6" }}>CAD</span></div>
                  </div>
                </div>
                <div style={{ background:"#fff", border:"1px solid #e4eaf5", borderRadius:14, padding:"24px 28px" }}>
                  <h4 style={{ fontFamily:"Montserrat,sans-serif", fontSize:11, fontWeight:800, letterSpacing:"1.5px", textTransform:"uppercase", color:"#0a1f44", marginBottom:16 }}>{t.deliverables_label}</h4>
                  {s.deliverables.map(d => (
                    <div key={d} style={{ display:"flex", alignItems:"center", gap:10, padding:"8px 0", borderBottom:"1px solid #f4f7fb", fontSize:13, color:"#3d4f6b" }}>
                      <ChevronRight size={14} color="#1a56db" style={{ flexShrink:0 }}/>{d}
                    </div>
                  ))}
                </div>
                <div style={{ background:"rgba(26,86,219,0.06)", border:"1px solid rgba(26,86,219,0.15)", borderRadius:14, padding:"20px 24px" }}>
                  <h4 style={{ fontFamily:"Montserrat,sans-serif", fontSize:11, fontWeight:800, letterSpacing:"1.5px", textTransform:"uppercase", color:"#1a56db", marginBottom:10 }}>{t.ideal_label}</h4>
                  <p style={{ fontSize:13, color:"#3d4f6b", lineHeight:1.7, marginBottom:14 }}>{s.ideal}</p>
                  <h4 style={{ fontFamily:"Montserrat,sans-serif", fontSize:11, fontWeight:800, letterSpacing:"1.5px", textTransform:"uppercase", color:"#1a56db", marginBottom:10 }}>{t.industries_label}</h4>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                    {s.industries.map(ind => (
                      <span key={ind} style={{ background:"#fff", border:"1px solid #e4eaf5", borderRadius:50, padding:"4px 12px", fontSize:11, color:"#3d4f6b", fontFamily:"Montserrat,sans-serif", fontWeight:600 }}>{ind}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* DICTIONNAIRE AMÉLIORATION CONTINUE */}
      <section style={{ padding:"88px 24px", background:"#f4f7fb" }} id="dictionnaire">
        <div style={{ maxWidth:1240, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:52 }}>
            <span style={{ display:"inline-block", fontFamily:"Montserrat,sans-serif", fontSize:10, fontWeight:700, letterSpacing:"3px", textTransform:"uppercase", color:"#1a56db", background:"rgba(26,86,219,0.08)", padding:"6px 16px", borderRadius:50, marginBottom:14 }}>
              {lang==="fr" ? "Ressource Formation" : "Training Resource"}
            </span>
            <h2 style={{ fontFamily:"Montserrat,sans-serif", fontSize:"clamp(26px,4vw,40px)", fontWeight:800, color:"#0a1f44", lineHeight:1.15, marginBottom:14 }}>
              {lang==="fr" ? <>Dictionnaire de<br/><span style={{ color:"#2563eb" }}>l&apos;Amélioration Continue</span></> : <>Dictionary of<br/><span style={{ color:"#2563eb" }}>Continuous Improvement</span></>}
            </h2>
            <p style={{ fontSize:16, color:"#3d4f6b", lineHeight:1.75, maxWidth:580, margin:"0 auto" }}>
              {lang==="fr"
                ? "Les concepts clés enseignés dans nos formations qualité — maîtrisez le vocabulaire de l'excellence opérationnelle."
                : "Key concepts taught in our quality training sessions — master the vocabulary of operational excellence."}
            </p>
          </div>

          <div className="dict-grid">
            {[
              {
                icon:<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="4" y="16" width="6" height="8" rx="1" fill="#1a56db"/><rect x="11" y="10" width="6" height="14" rx="1" fill="#1a56db" opacity=".6"/><rect x="18" y="4" width="6" height="20" rx="1" fill="#1a56db" opacity=".3"/><path d="M6 14l5-5 5 3 6-8" stroke="#1a56db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                term:"Kaizen",
                en:"Daily continuous improvement — small, incremental changes made by everyone, every day.",
                fr:"Amélioration continue quotidienne — petits changements progressifs réalisés par tous, chaque jour.",
              },
              {
                icon:<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="10" stroke="#1a56db" strokeWidth="2" fill="none"/><text x="8" y="12" fontFamily="Montserrat" fontSize="6" fontWeight="700" fill="#1a56db">P</text><text x="18" y="12" fontFamily="Montserrat" fontSize="6" fontWeight="700" fill="#1a56db">D</text><text x="8" y="21" fontFamily="Montserrat" fontSize="6" fontWeight="700" fill="#1a56db">A</text><text x="18" y="21" fontFamily="Montserrat" fontSize="6" fontWeight="700" fill="#1a56db">C</text></svg>,
                term:"PDCA",
                en:"Plan-Do-Check-Act — a 4-step method for planning, executing, verifying, and improving.",
                fr:"Planifier-Déployer-Contrôler-Agir — méthode pour planifier, exécuter, vérifier et agir.",
              },
              {
                icon:<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 4C14 4 6 9 6 16a8 8 0 0016 0c0-7-8-12-8-12z" stroke="#1a56db" strokeWidth="2" fill="none"/><circle cx="14" cy="16" r="2.5" fill="#1a56db"/></svg>,
                term:"Gemba",
                en:"The actual place where work happens — where processes and value are created.",
                fr:"Lieu où le travail et les processus se déroulent réellement — là où la valeur est créée.",
              },
              {
                icon:<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="10" stroke="#1a56db" strokeWidth="2" fill="none"/><path d="M14 8v6l4 2" stroke="#1a56db" strokeWidth="2" strokeLinecap="round"/></svg>,
                term:"Takt Time",
                en:"The ideal production pace calculated from customer demand — how fast you need to produce.",
                fr:"Rythme de production idéal selon la demande client — la cadence à laquelle vous devez produire.",
              },
              {
                icon:<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="6" y="6" width="16" height="16" rx="2" stroke="#1a56db" strokeWidth="2" fill="none"/><path d="M10 10h8M10 14h8M10 18h5" stroke="#1a56db" strokeWidth="1.5" strokeLinecap="round"/><path d="M20 4l2 2-2 2" stroke="#1a56db" strokeWidth="1.5" strokeLinecap="round"/></svg>,
                term:"Muda",
                en:"Waste — any activity that consumes resources but creates no value for the customer.",
                fr:"Gaspillages qui n'ajoutent pas de valeur — toute activité qui consomme des ressources sans créer de valeur.",
              },
              {
                icon:<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="4" y="8" width="8" height="12" rx="1" stroke="#1a56db" strokeWidth="2" fill="none"/><rect x="16" y="8" width="8" height="12" rx="1" stroke="#1a56db" strokeWidth="2" fill="none"/><path d="M12 14h4" stroke="#1a56db" strokeWidth="2" strokeLinecap="round"/></svg>,
                term:"Kanban",
                en:"A visual system for managing workflow, limiting work-in-progress, and improving flow.",
                fr:"Système visuel pour gérer et fluidifier le flux de travail en limitant les encours.",
              },
              {
                icon:<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="4" y="4" width="20" height="20" rx="3" stroke="#1a56db" strokeWidth="2" fill="none"/><text x="9" y="19" fontFamily="Montserrat" fontSize="10" fontWeight="900" fill="#1a56db">5S</text></svg>,
                term:"5S",
                en:"Sort, Set in order, Shine, Standardize, Sustain — workplace organization and discipline.",
                fr:"Trier, Ranger, Nettoyer, Standardiser, Maintenir — organisation et discipline du lieu de travail.",
              },
              {
                icon:<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="10" stroke="#1a56db" strokeWidth="2" fill="none"/><text x="10" y="18" fontFamily="Montserrat" fontSize="12" fontWeight="900" fill="#1a56db">σ</text></svg>,
                term:"DMAIC",
                en:"Define-Measure-Analyze-Improve-Control — the core Six Sigma structured problem-solving method.",
                fr:"Définir-Mesurer-Analyser-Améliorer-Contrôler — méthode structurée du Six Sigma.",
              },
              {
                icon:<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="10" stroke="#1a56db" strokeWidth="2" fill="none"/><path d="M9 14a5 5 0 015-5" stroke="#1a56db" strokeWidth="2" strokeLinecap="round"/><circle cx="19" cy="14" r="2" fill="#1a56db"/></svg>,
                term:"OEE",
                en:"Overall Equipment Effectiveness — key indicator measuring operational efficiency of equipment.",
                fr:"Indicateur d'efficacité opérationnelle globale des équipements de production.",
              },
              {
                icon:<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="10" stroke="#1a56db" strokeWidth="2" fill="none"/><path d="M14 8v6l3 3" stroke="#1a56db" strokeWidth="2" strokeLinecap="round"/><circle cx="8" cy="8" r="2" fill="#1a56db"/></svg>,
                term:"Lead Time",
                en:"Total time required to deliver a product or service from order to delivery.",
                fr:"Temps total nécessaire pour livrer un produit ou un service de la commande à la livraison.",
              },
              {
                icon:<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="10" stroke="#1a56db" strokeWidth="2" fill="none"/><path d="M10 18l-2-2 2-2M18 18l2-2-2-2M13 9l2 10" stroke="#1a56db" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                term:"TPM",
                en:"Total Productive Maintenance — maintenance method involving all employees to maximize equipment availability.",
                fr:"Maintenance productive totale — implique tous les collaborateurs pour maximiser la disponibilité des équipements.",
              },
              {
                icon:<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M6 22L22 6M6 6h6M22 6v6" stroke="#1a56db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="8" cy="20" r="2" fill="#1a56db"/></svg>,
                term:"8D",
                en:"Eight Disciplines — structured team-based problem solving method for root cause elimination.",
                fr:"Huit disciplines — méthode structurée de résolution de problèmes en équipe pour éliminer les causes racines.",
              },
            ].map((item, i) => (
              <div key={i} style={{ background:"#fff", border:"1px solid #e4eaf5", borderRadius:14, padding:"22px 20px", display:"flex", gap:16, alignItems:"flex-start", transition:"all 0.25s" }} className="dict-card">
                <div style={{ width:52, height:52, borderRadius:12, background:"rgba(26,86,219,0.07)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                  {item.icon}
                </div>
                <div style={{ flex:1 }}>
                  <div style={{ fontFamily:"Montserrat,sans-serif", fontSize:16, fontWeight:900, color:"#0a1f44", marginBottom:6 }}>{item.term}</div>
                  <div style={{ width:32, height:2, background:"#1a56db", borderRadius:2, marginBottom:8 }} />
                  <p style={{ fontSize:13, color:"#3d4f6b", lineHeight:1.65 }}>{lang==="fr" ? item.fr : item.en}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign:"center", marginTop:48, padding:"28px 32px", background:"linear-gradient(135deg,#0a1f44,#1a3a7a)", borderRadius:16 }}>
            <p style={{ fontFamily:"Montserrat,sans-serif", fontSize:13, fontWeight:700, color:"rgba(255,255,255,0.65)", letterSpacing:"1px", marginBottom:10 }}>
              {lang==="fr" ? "Tous ces concepts sont enseignés dans nos formations sur mesure." : "All these concepts are taught in our customized training sessions."}
            </p>
            <Link href="/contact" style={{ display:"inline-flex", alignItems:"center", gap:10, fontFamily:"Montserrat,sans-serif", fontSize:12, fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", padding:"13px 28px", background:"linear-gradient(135deg,#1a56db,#2563eb)", color:"#fff", borderRadius:8, textDecoration:"none" }}>
              {lang==="fr" ? "Réserver une formation" : "Book a Training Session"} <ArrowRight size={15}/>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding:"80px 24px", background:"#0a1f44" }}>
        <div style={{ maxWidth:800, margin:"0 auto", textAlign:"center" }}>
          <h2 style={{ fontFamily:"Montserrat,sans-serif", fontSize:"clamp(24px,3.5vw,36px)", fontWeight:900, color:"#fff", marginBottom:14 }}>{t.not_sure_title}</h2>
          <p style={{ fontSize:17, color:"rgba(255,255,255,0.55)", lineHeight:1.8, marginBottom:36 }}>{t.not_sure_sub}</p>
          <Link href="/contact" style={{ display:"inline-flex", alignItems:"center", gap:10, fontFamily:"Montserrat,sans-serif", fontSize:12, fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", padding:"16px 36px", background:"linear-gradient(135deg,#1a56db,#2563eb)", color:"#fff", borderRadius:8, textDecoration:"none" }}>
            {t.cta_btn} <ArrowRight size={16}/>
          </Link>
        </div>
      </section>

      <style>{`.svc-det-grid{display:grid;grid-template-columns:1fr 400px;gap:56px;align-items:start;} .dict-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;} .dict-card:hover{border-color:#1a56db!important;box-shadow:0 8px 24px rgba(26,86,219,0.1)!important;transform:translateY(-2px);} @media(max-width:960px){.svc-det-grid{grid-template-columns:1fr!important;} .svc-det-grid > div{order:unset!important;} .dict-grid{grid-template-columns:1fr 1fr!important;}} @media(max-width:600px){.dict-grid{grid-template-columns:1fr!important;}}`}</style>
    </div>
  );
}
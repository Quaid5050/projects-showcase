"use client";
import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight, CheckCircle2, Award, Users, Target, Zap,
  Shield, TrendingUp, Search, Settings, GraduationCap,
  FileText, Phone, Star, ChevronDown, ChevronUp, Globe
} from "lucide-react";

const translations = {
  en: {
    nav_home:"Home", nav_services:"Services", nav_about:"About", nav_process:"Process", nav_contact:"Contact",
    hero_badge:"ISO 9001 Specialist · Montréal, Canada",
    hero_title1:"END-TO-END ISO 9001 SUPPORT",
    hero_title2:"FOR SMEs AND AMBITIOUS BUSINESSES",
    hero_sub:"Assessment • Implementation • Documentation • Training • Certification",
    hero_desc:"We simplify ISO 9001 certification through practical, efficient and results-driven support tailored to your business. Zero to Certified. Efficiently.",
    hero_cta1:"Book Your Free 30-Min Consultation",
    hero_cta2:"Get an ISO 9001 Roadmap",
    led_by:"Led by",
    led_title:"Founder & Principal ISO Consultant",
    led_exp:"+20 Years of Quality & Industrial Experience",
    trust_title:"Trusted by International Industrial Groups & Growing SMEs",
    stats_1:"Years Experience", stats_2:"Processes Optimized", stats_3:"Teams Trained", stats_4:"Start to Certification",
    why_title:"Why Businesses Choose AEM?",
    why_sub:"We don't just consult — we partner with you through every phase until the certification is in your hands.",
    why_1_title:"Personalized Approach", why_1_desc:"Tailored solutions adapted to your reality, goals and industry. No one-size-fits-all consulting.",
    why_2_title:"Proven Results", why_2_desc:"Effective systems leading to certification and sustainable long-term performance improvements.",
    why_3_title:"Simplicity & Efficiency", why_3_desc:"We simplify ISO 9001 into practical, clear and efficient actions — not bureaucratic burden.",
    why_4_title:"Support Until Certification", why_4_desc:"Complete support at every step until your business successfully obtains certification.",
    why_5_title:"Recognized Expertise", why_5_desc:"More than 20 years of industrial and quality management experience across global companies.",
    services_title:"Our Services",
    services_sub:"Four comprehensive service pillars, each designed to move your business closer to ISO 9001 certification with clarity and minimal disruption.",
    svc_1_name:"Diagnostic & Gap Analysis", svc_1_desc:"A complete assessment of your management system to identify nonconformities, risks, and improvement areas before any implementation begins.", svc_1_for:"SMEs, Manufacturers, Services",
    svc_2_name:"ISO 9001 Implementation", svc_2_desc:"End-to-end support to build your system in full compliance with ISO 9001, including Quality Manual and all operational procedures.", svc_2_for:"Growing businesses, Industrial companies",
    svc_3_name:"Training Services", svc_3_desc:"Build your team's skills with practical training on quality tools and proven methodologies, delivered in-house or online sessions.", svc_3_for:"Quality teams, Department heads",
    svc_4_name:"Documentation & CI", svc_4_desc:"Create clear, compliant documents and implement continuous improvement with internal audit and performance monitoring systems.", svc_4_for:"Certified companies, All sectors",
    starting:"Starting From", view_all:"View All Services",
    industries_title:"Industries We Serve",
    industries_sub:"We bring specialized ISO 9001 expertise across a wide range of industrial and service sectors.",
    process_title:"Your Path to Certification",
    process_sub:"A clear, predictable 5-step process. You will always know exactly where you are and what comes next.",
    p1:"Free Consultation", p1d:"Understanding your business, goals and current state.",
    p2:"Gap Analysis", p2d:"Assessment of your system against ISO 9001 requirements.",
    p3:"Implementation", p3d:"Documentation, procedures and quality system deployment.",
    p4:"Training", p4d:"Training your team and preparing for certification audits.",
    p5:"Certification", p5d:"Final support until your successful certification.",
    about_tag:"About AEM",
    about_title:"Your Dedicated ISO 9001 Partner",
    about_sub:"AEM Quality & ISO Consulting helps SMEs and industrial organizations implement efficient ISO 9001 quality management systems. Led by Abdelali El-Magueri, the company combines over 20 years of industrial, operational and quality expertise to simplify certification and improve business performance.",
    about_li1:"Bilingual support in English & French",
    about_li2:"Experience with international industrial groups",
    about_li3:"Tailored approach — no copy-paste consulting",
    about_li4:"Québec Registered Business (NEQ: 2282117623)",
    about_cta:"Meet Abdelali",
    testimonials_title:"What Our Clients Say",
    testimonials_sub:"Real feedback from businesses we have helped achieve ISO 9001 certification.",
    t1_text:"AEM simplified our ISO certification process and helped us obtain certification faster than expected. Highly professional and practical approach.",
    t1_name:"Operations Manager", t1_company:"Manufacturing SME, Québec",
    t2_text:"Professional, practical and highly experienced consultant. Abdelali understood our industry immediately and delivered exactly what we needed.",
    t2_name:"Quality Director", t2_company:"Industrial Services Company",
    t3_text:"Excellent support from gap analysis to final certification. The documentation AEM produced was clear, compliant and ready to use from day one.",
    t3_name:"CEO", t3_company:"Engineering Firm, Canada",
    faq_title:"Frequently Asked Questions",
    faq_sub:"Everything you need to know about ISO 9001 certification with AEM.",
    faq_1q:"How long does ISO 9001 certification take?",
    faq_1a:"Typically 3–6 months for most SMEs, depending on your starting point, organization size, and team capacity. We will give you a specific estimate after the initial diagnostic.",
    faq_2q:"How much does ISO 9001 certification cost in Canada?",
    faq_2a:"Our consulting services start from $500 CAD for a diagnostic. Full implementation starts from $3,000 CAD. The certification body audit fee is separate and varies by organization size.",
    faq_3q:"Can small businesses get ISO certified?",
    faq_3a:"Absolutely. ISO 9001 is designed for organizations of all sizes. In fact, many of our most successful projects are with SMEs who use certification to win larger contracts and improve operations.",
    faq_4q:"Do you provide remote consulting?",
    faq_4a:"Yes. We offer both on-site and remote consulting across Canada. Many clients complete the entire process remotely with excellent results.",
    faq_5q:"What industries do you support?",
    faq_5a:"We work across manufacturing, automotive, aerospace, logistics, engineering, industrial services, professional services, and more. If your industry requires quality management, we can help.",
    faq_6q:"Do you help with audits and documentation?",
    faq_6a:"Yes — documentation and audit preparation are core parts of our service. We write procedures, quality manuals, and prepare your team for both internal and certification audits.",
    cta_title:"Ready to Start Your ISO 9001 Journey?",
    cta_sub:"Book your free 30-minute consultation — no commitment, just clarity and a clear path forward.",
    cta_btn1:"Book Free Consultation",
    cta_btn2:"Speak With an ISO Expert",
    cta_btn3:"Get Your ISO 9001 Roadmap",
  },
  fr: {
    nav_home:"Accueil", nav_services:"Services", nav_about:"À propos", nav_process:"Processus", nav_contact:"Contact",
    hero_badge:"Spécialiste ISO 9001 · Montréal, Canada",
    hero_title1:"ACCOMPAGNEMENT ISO 9001 DE BOUT EN BOUT",
    hero_title2:"POUR LES PME ET ENTREPRISES AMBITIEUSES",
    hero_sub:"Évaluation • Mise en œuvre • Documentation • Formation • Certification",
    hero_desc:"Nous simplifions la certification ISO 9001 grâce à un accompagnement pratique, efficace et axé sur les résultats, adapté à votre entreprise. De zéro à certifié. Efficacement.",
    hero_cta1:"Réserver une consultation gratuite de 30 min",
    hero_cta2:"Obtenir une feuille de route ISO 9001",
    led_by:"Dirigé par",
    led_title:"Fondateur & Consultant ISO Principal",
    led_exp:"+20 ans d'expérience en qualité et industrie",
    trust_title:"Reconnus par des groupes industriels internationaux et des PME en croissance",
    stats_1:"Ans d'expérience", stats_2:"Processus optimisés", stats_3:"Équipes formées", stats_4:"Du début à la certification",
    why_title:"Pourquoi les entreprises choisissent AEM ?",
    why_sub:"Nous ne faisons pas que conseiller — nous vous accompagnons à chaque étape jusqu'à l'obtention de votre certification.",
    why_1_title:"Approche personnalisée", why_1_desc:"Des solutions adaptées à votre réalité, vos objectifs et votre secteur. Pas de conseil générique.",
    why_2_title:"Résultats prouvés", why_2_desc:"Des systèmes efficaces menant à la certification et à une performance durable à long terme.",
    why_3_title:"Simplicité & Efficacité", why_3_desc:"Nous simplifions l'ISO 9001 en actions pratiques, claires et efficaces — sans bureaucratie inutile.",
    why_4_title:"Soutien jusqu'à la certification", why_4_desc:"Un accompagnement complet à chaque étape jusqu'à l'obtention réussie de votre certification.",
    why_5_title:"Expertise reconnue", why_5_desc:"Plus de 20 ans d'expérience industrielle et en gestion de la qualité auprès de grandes entreprises mondiales.",
    services_title:"Nos Services",
    services_sub:"Quatre piliers de services complets, conçus pour rapprocher votre entreprise de la certification ISO 9001 avec clarté et un minimum de perturbations.",
    svc_1_name:"Diagnostic & Analyse des écarts", svc_1_desc:"Une évaluation complète de votre système de management pour identifier les non-conformités, risques et opportunités d'amélioration.", svc_1_for:"PME, Fabricants, Services",
    svc_2_name:"Mise en œuvre ISO 9001", svc_2_desc:"Accompagnement complet pour construire votre système en conformité totale avec l'ISO 9001, incluant le Manuel Qualité et toutes les procédures.", svc_2_for:"Entreprises en croissance, Industries",
    svc_3_name:"Services de formation", svc_3_desc:"Développez les compétences de votre équipe avec des formations pratiques sur les outils qualité, en présentiel ou en ligne.", svc_3_for:"Équipes qualité, Responsables de département",
    svc_4_name:"Documentation & Amélioration continue", svc_4_desc:"Créez des documents clairs et conformes, mettez en place l'amélioration continue avec audit interne et suivi des performances.", svc_4_for:"Entreprises certifiées, Tous secteurs",
    starting:"À partir de", view_all:"Voir tous les services",
    industries_title:"Secteurs que nous servons",
    industries_sub:"Nous apportons une expertise ISO 9001 spécialisée dans un large éventail de secteurs industriels et de services.",
    process_title:"Votre chemin vers la certification",
    process_sub:"Un processus clair et prévisible en 5 étapes. Vous saurez toujours exactement où vous en êtes et ce qui vient ensuite.",
    p1:"Consultation gratuite", p1d:"Comprendre votre entreprise, vos objectifs et votre état actuel.",
    p2:"Analyse des écarts", p2d:"Évaluation de votre système par rapport aux exigences ISO 9001.",
    p3:"Mise en œuvre", p3d:"Documentation, procédures et déploiement du système qualité.",
    p4:"Formation", p4d:"Formation de votre équipe et préparation aux audits de certification.",
    p5:"Certification", p5d:"Accompagnement final jusqu'à votre certification réussie.",
    about_tag:"À propos d'AEM",
    about_title:"Votre partenaire ISO 9001 dédié",
    about_sub:"AEM Quality & ISO Consulting aide les PME et organisations industrielles à mettre en place des systèmes de management de la qualité ISO 9001 efficaces. Dirigé par Abdelali El-Magueri, le cabinet combine plus de 20 ans d'expertise industrielle, opérationnelle et qualité pour simplifier la certification et améliorer la performance.",
    about_li1:"Accompagnement bilingue français & anglais",
    about_li2:"Expérience avec des groupes industriels internationaux",
    about_li3:"Approche sur mesure — pas de conseil générique",
    about_li4:"Entreprise enregistrée au Québec (NEQ : 2282117623)",
    about_cta:"Rencontrer Abdelali",
    testimonials_title:"Ce que disent nos clients",
    testimonials_sub:"Retours réels d'entreprises que nous avons aidées à obtenir la certification ISO 9001.",
    t1_text:"AEM a simplifié notre processus de certification ISO et nous a aidés à obtenir la certification plus rapidement que prévu. Approche très professionnelle et pratique.",
    t1_name:"Directeur des opérations", t1_company:"PME manufacturière, Québec",
    t2_text:"Consultant professionnel, pratique et très expérimenté. Abdelali a immédiatement compris notre secteur et a livré exactement ce dont nous avions besoin.",
    t2_name:"Directeur Qualité", t2_company:"Entreprise de services industriels",
    t3_text:"Excellent accompagnement de l'analyse des écarts jusqu'à la certification finale. La documentation produite par AEM était claire, conforme et prête à l'emploi dès le premier jour.",
    t3_name:"PDG", t3_company:"Cabinet d'ingénierie, Canada",
    faq_title:"Questions fréquemment posées",
    faq_sub:"Tout ce que vous devez savoir sur la certification ISO 9001 avec AEM.",
    faq_1q:"Combien de temps prend la certification ISO 9001 ?",
    faq_1a:"Généralement 3 à 6 mois pour la plupart des PME, selon votre point de départ, la taille de l'organisation et la capacité de votre équipe. Nous vous donnerons une estimation précise après le diagnostic initial.",
    faq_2q:"Combien coûte la certification ISO 9001 au Canada ?",
    faq_2a:"Nos services de conseil commencent à 500 $ CAD pour un diagnostic. La mise en œuvre complète commence à 3 000 $ CAD. Les frais d'audit de l'organisme de certification sont séparés et varient selon la taille de l'organisation.",
    faq_3q:"Les petites entreprises peuvent-elles obtenir la certification ISO ?",
    faq_3a:"Absolument. L'ISO 9001 est conçu pour les organisations de toutes tailles. En fait, beaucoup de nos projets les plus réussis concernent des PME qui utilisent la certification pour décrocher de plus grands contrats.",
    faq_4q:"Proposez-vous des conseils à distance ?",
    faq_4a:"Oui. Nous offrons des services de conseil en présentiel et à distance partout au Canada. De nombreux clients complètent l'ensemble du processus à distance avec d'excellents résultats.",
    faq_5q:"Quels secteurs accompagnez-vous ?",
    faq_5a:"Nous travaillons dans la fabrication, l'automobile, l'aérospatiale, la logistique, l'ingénierie, les services industriels, les services professionnels et plus encore.",
    faq_6q:"Aidez-vous avec les audits et la documentation ?",
    faq_6a:"Oui — la documentation et la préparation aux audits font partie intégrante de notre service. Nous rédigeons les procédures, les manuels qualité et préparons votre équipe pour les audits internes et de certification.",
    cta_title:"Prêt à commencer votre parcours ISO 9001 ?",
    cta_sub:"Réservez votre consultation gratuite de 30 minutes — sans engagement, juste de la clarté et une voie à suivre.",
    cta_btn1:"Réserver une consultation gratuite",
    cta_btn2:"Parler à un expert ISO",
    cta_btn3:"Obtenir votre feuille de route ISO 9001",
  }
};

const tag: React.CSSProperties = { display:"inline-block", fontFamily:"Montserrat,sans-serif", fontSize:10, fontWeight:700, letterSpacing:"3px", textTransform:"uppercase", color:"#1a56db", background:"rgba(26,86,219,0.08)", padding:"6px 16px", borderRadius:50, marginBottom:14 };
const h2s: React.CSSProperties = { fontFamily:"Montserrat,sans-serif", fontSize:"clamp(26px,4vw,40px)", fontWeight:800, color:"#0a1f44", lineHeight:1.15, marginBottom:16 };
const sub: React.CSSProperties = { fontSize:16, color:"#3d4f6b", lineHeight:1.75, maxWidth:620 };

const industries = ["Manufacturing","Automotive","Aerospace","Logistics","Industrial Services","Engineering","Professional Services","Construction","Healthcare","SMEs"];

export default function HomePage() {
  const [lang, setLang] = useState<"en"|"fr">("en");
  const [openFaq, setOpenFaq] = useState<number|null>(null);
  const t = translations[lang];

  return (
    <div style={{ paddingTop:74, overflowX:"hidden", maxWidth:"100vw" }}>

      {/* LANG SWITCHER - fixed top right */}
      <div style={{ position:"fixed", top:18, right:80, zIndex:1100, display:"flex", gap:4, background:"#f0f4f8", borderRadius:20, padding:"3px 4px" }}>
        <button onClick={()=>setLang("en")} style={{ fontFamily:"Montserrat,sans-serif", fontSize:10, fontWeight:700, letterSpacing:"1px", padding:"5px 12px", borderRadius:16, border:"none", cursor:"pointer", background: lang==="en" ? "#1a56db":"transparent", color: lang==="en" ? "#fff":"#3d4f6b", transition:"all 0.2s" }}>EN</button>
        <button onClick={()=>setLang("fr")} style={{ fontFamily:"Montserrat,sans-serif", fontSize:10, fontWeight:700, letterSpacing:"1px", padding:"5px 12px", borderRadius:16, border:"none", cursor:"pointer", background: lang==="fr" ? "#1a56db":"transparent", color: lang==="fr" ? "#fff":"#3d4f6b", transition:"all 0.2s" }}>FR</button>
      </div>

      {/* HERO */}
      <section style={{ minHeight:"100vh", background:"#0a1f44", display:"flex", alignItems:"center", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 80% 60% at 70% 40%, rgba(26,86,219,0.22) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 15% 80%, rgba(0,194,255,0.07) 0%, transparent 60%), linear-gradient(155deg,#0a1f44 0%,#0d2860 55%,#0a1f44 100%)" }} />
        <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(255,255,255,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.022) 1px,transparent 1px)", backgroundSize:"64px 64px" }} />
        <div style={{ maxWidth:1240, margin:"0 auto", padding:"110px 24px", position:"relative", zIndex:2, width:"100%" }}>
          <div className="hero-flex">
            <div className="hero-left-col">
              <div style={{ display:"inline-flex", alignItems:"center", gap:10, background:"rgba(26,86,219,0.18)", border:"1px solid rgba(26,86,219,0.38)", borderRadius:50, padding:"8px 20px", marginBottom:28 }}>
                <span style={{ width:7, height:7, borderRadius:"50%", background:"#00c2ff", display:"inline-block", animation:"pulse 2s infinite" }} />
                <span style={{ fontFamily:"Montserrat,sans-serif", fontSize:10, fontWeight:700, letterSpacing:"2px", textTransform:"uppercase", color:"#3b82f6" }}>{t.hero_badge}</span>
              </div>
              <h1 style={{ fontFamily:"Montserrat,sans-serif", fontSize:"clamp(28px,4.5vw,52px)", fontWeight:900, color:"#fff", lineHeight:1.1, marginBottom:18 }}>
                {t.hero_title1}<br/>
                <span style={{ background:"linear-gradient(135deg,#3b82f6,#00c2ff)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>{t.hero_title2}</span>
              </h1>
              <p style={{ fontFamily:"Montserrat,sans-serif", fontSize:13, fontWeight:700, letterSpacing:"2px", textTransform:"uppercase", color:"#3b82f6", marginBottom:16 }}>{t.hero_sub}</p>
              <p style={{ fontSize:16, color:"rgba(255,255,255,0.65)", lineHeight:1.82, marginBottom:32, maxWidth:520 }}>{t.hero_desc}</p>

              {/* LED BY */}
              <div style={{ background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.12)", borderRadius:12, padding:"16px 20px", marginBottom:32, display:"flex", alignItems:"center", gap:16 }}>
                <div style={{ width:52, height:52, borderRadius:"50%", background:"linear-gradient(135deg,#1a56db,#2563eb)", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"Montserrat,sans-serif", fontSize:20, fontWeight:900, color:"#fff", flexShrink:0 }}>A</div>
                <div>
                  <div style={{ fontFamily:"Montserrat,sans-serif", fontSize:9, fontWeight:700, letterSpacing:"2px", textTransform:"uppercase", color:"rgba(255,255,255,0.45)", marginBottom:2 }}>{t.led_by}</div>
                  <div style={{ fontFamily:"Montserrat,sans-serif", fontSize:15, fontWeight:800, color:"#fff" }}>Abdelali El-Magueri</div>
                  <div style={{ fontSize:12, color:"#3b82f6", fontWeight:600 }}>{t.led_title}</div>
                  <div style={{ fontFamily:"Montserrat,sans-serif", fontSize:10, fontWeight:700, color:"rgba(255,255,255,0.5)", letterSpacing:"1px", marginTop:2 }}>{t.led_exp}</div>
                </div>
              </div>

              <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
                <Link href="/contact" style={{ display:"inline-flex", alignItems:"center", gap:10, fontFamily:"Montserrat,sans-serif", fontSize:11, fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", padding:"15px 28px", background:"linear-gradient(135deg,#1a56db,#2563eb)", color:"#fff", borderRadius:8, textDecoration:"none", boxShadow:"0 8px 28px rgba(26,86,219,0.4)" }}>
                  {t.hero_cta1} <ArrowRight size={15}/>
                </Link>
                <Link href="/services" style={{ display:"inline-flex", alignItems:"center", gap:10, fontFamily:"Montserrat,sans-serif", fontSize:11, fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", padding:"14px 24px", border:"2px solid rgba(255,255,255,0.22)", color:"rgba(255,255,255,0.85)", borderRadius:8, textDecoration:"none" }}>
                  {t.hero_cta2}
                </Link>
              </div>
            </div>

            {/* Stats card */}
            <div className="hero-right-col">
              <div style={{ background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:20, padding:"32px 28px", backdropFilter:"blur(20px)" }}>
                <p style={{ fontFamily:"Montserrat,sans-serif", fontSize:10, fontWeight:700, letterSpacing:"2.5px", textTransform:"uppercase", color:"#3b82f6", marginBottom:24 }}>Our Impact</p>
                {[
                  { icon:<Award size={20}/>, num:"+20", label:t.stats_1 },
                  { icon:<TrendingUp size={20}/>, num:"100+", label:t.stats_2 },
                  { icon:<Users size={20}/>, num:"50+", label:t.stats_3 },
                  { icon:<Zap size={20}/>, num:"✓", label:t.stats_4 },
                ].map((s,i) => (
                  <div key={i} style={{ display:"flex", alignItems:"center", gap:16, padding:"14px 0", borderBottom:i<3?"1px solid rgba(255,255,255,0.07)":"none" }}>
                    <div style={{ width:44, height:44, borderRadius:10, background:"linear-gradient(135deg,#1a56db,#2563eb)", display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", flexShrink:0 }}>{s.icon}</div>
                    <div>
                      <div style={{ fontFamily:"Montserrat,sans-serif", fontSize:24, fontWeight:900, color:"#fff", lineHeight:1 }}>{s.num}</div>
                      <div style={{ fontSize:12, color:"rgba(255,255,255,0.5)", marginTop:3 }}>{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ position:"absolute", bottom:-16, right:-16, background:"linear-gradient(135deg,#f0b429,#f59e0b)", borderRadius:12, padding:"14px 18px", textAlign:"center", boxShadow:"0 12px 36px rgba(240,180,41,0.45)" }}>
                <div style={{ fontFamily:"Montserrat,sans-serif", fontSize:22, fontWeight:900, color:"#0a1f44" }}>FREE</div>
                <div style={{ fontFamily:"Montserrat,sans-serif", fontSize:9, fontWeight:700, letterSpacing:"1.5px", textTransform:"uppercase", color:"rgba(10,31,68,0.7)" }}>First Consultation</div>
              </div>
            </div>
          </div>
        </div>
        <style>{`@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.5;transform:scale(0.8)}} .hero-flex{display:flex;align-items:center;gap:60px;} .hero-left-col{flex:1;} .hero-right-col{width:360px;flex-shrink:0;position:relative;} @media(max-width:1024px){.hero-right-col{display:none;}.hero-flex{display:block;}}`}</style>
      </section>

      {/* TRUST BAR */}
      <div style={{ background:"#112255", borderTop:"1px solid rgba(255,255,255,0.05)", padding:"40px 24px" }}>
        <div style={{ maxWidth:1240, margin:"0 auto" }}>
          <p style={{ fontFamily:"Montserrat,sans-serif", fontSize:10, fontWeight:700, letterSpacing:"3px", textTransform:"uppercase", color:"rgba(255,255,255,0.3)", textAlign:"center", marginBottom:24 }}>{t.trust_title}</p>
          <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"16px 40px" }}>
            {["Volvo","Valeo","Alstom","Sumitomo","Labinal","Sylea"].map(b => (
              <span key={b} style={{ fontFamily:"Montserrat,sans-serif", fontSize:14, fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", color:"rgba(255,255,255,0.35)" }}>{b}</span>
            ))}
          </div>
        </div>
      </div>

      {/* STATS */}
      <div style={{ background:"#fff", padding:"56px 24px", borderBottom:"1px solid #e4eaf5" }}>
        <div style={{ maxWidth:1240, margin:"0 auto" }}>
          <div className="stats-grid">
            {[
              { num:"+20", label:t.stats_1, icon:<Award size={24}/> },
              { num:"100+", label:t.stats_2, icon:<TrendingUp size={24}/> },
              { num:"50+", label:t.stats_3, icon:<Users size={24}/> },
              { num:"7+", label:"International Groups", icon:<Globe size={24}/> },
            ].map((s,i) => (
              <div key={i} style={{ textAlign:"center", padding:"24px 16px" }}>
                <div style={{ color:"#1a56db", marginBottom:12, display:"flex", justifyContent:"center" }}>{s.icon}</div>
                <div style={{ fontFamily:"Montserrat,sans-serif", fontSize:"clamp(32px,4vw,48px)", fontWeight:900, color:"#0a1f44", lineHeight:1 }}>{s.num}</div>
                <div style={{ fontFamily:"Montserrat,sans-serif", fontSize:11, fontWeight:700, letterSpacing:"1.5px", textTransform:"uppercase", color:"#8492a6", marginTop:8 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHY AEM */}
      <section style={{ padding:"88px 24px", background:"#f4f7fb" }}>
        <div style={{ maxWidth:1240, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:52 }}>
            <span style={tag}>Why AEM</span>
            <h2 style={{ ...h2s, textAlign:"center" }}>{t.why_title}</h2>
            <p style={{ ...sub, margin:"0 auto" }}>{t.why_sub}</p>
          </div>
          <div className="why-grid">
            {[
              { icon:<Target size={28}/>, title:t.why_1_title, desc:t.why_1_desc },
              { icon:<TrendingUp size={28}/>, title:t.why_2_title, desc:t.why_2_desc },
              { icon:<Zap size={28}/>, title:t.why_3_title, desc:t.why_3_desc },
              { icon:<Shield size={28}/>, title:t.why_4_title, desc:t.why_4_desc },
              { icon:<Award size={28}/>, title:t.why_5_title, desc:t.why_5_desc },
            ].map((w,i) => (
              <div key={i} className="why-card" style={{ background:"#fff", border:"1px solid #e4eaf5", borderRadius:16, padding:"32px 24px", textAlign:"center", transition:"all 0.3s" }}>
                <div style={{ width:64, height:64, borderRadius:"50%", background:"linear-gradient(135deg,rgba(26,86,219,0.1),rgba(0,194,255,0.1))", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 18px", color:"#1a56db" }}>{w.icon}</div>
                <h3 style={{ fontFamily:"Montserrat,sans-serif", fontSize:13, fontWeight:800, textTransform:"uppercase", letterSpacing:"0.5px", color:"#0a1f44", marginBottom:10 }}>{w.title}</h3>
                <p style={{ fontSize:13, color:"#3d4f6b", lineHeight:1.72 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding:"88px 24px", background:"#fff" }}>
        <div style={{ maxWidth:1240, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:52 }}>
            <span style={tag}>{t.services_title}</span>
            <h2 style={{ ...h2s, textAlign:"center" }}>Everything You Need<br/><span style={{ color:"#2563eb" }}>From Zero to Certified</span></h2>
            <p style={{ ...sub, margin:"0 auto" }}>{t.services_sub}</p>
          </div>
          <div className="svc-grid">
            {[
              { icon:<Search size={24}/>, num:"01", name:t.svc_1_name, desc:t.svc_1_desc, price:"$500", for:t.svc_1_for, deliverables:["Gap Analysis Report","Nonconformity Register","Action Plan","Debrief Call"] },
              { icon:<Settings size={24}/>, num:"02", name:t.svc_2_name, desc:t.svc_2_desc, price:"$3,000", for:t.svc_2_for, deliverables:["Quality Manual","All Procedures","Process Maps","Training Materials"] },
              { icon:<GraduationCap size={24}/>, num:"03", name:t.svc_3_name, desc:t.svc_3_desc, price:"$750", for:t.svc_3_for, deliverables:["Training Slides","Workshop Exercises","Certificates","Assessment"] },
              { icon:<FileText size={24}/>, num:"04", name:t.svc_4_name, desc:t.svc_4_desc, price:"$1,500", for:t.svc_4_for, deliverables:["Document Library","Audit Toolkit","KPI Templates","CAPA System"] },
            ].map((s,i) => (
              <div key={i} className="svc-card" style={{ background:"#fff", border:"1px solid #e4eaf5", borderRadius:18, padding:"32px 26px", display:"flex", flexDirection:"column", transition:"all 0.35s" }}>
                <div style={{ fontFamily:"Montserrat,sans-serif", fontSize:10, fontWeight:800, letterSpacing:"2px", color:"#1a56db", marginBottom:14 }}>{s.num}</div>
                <div style={{ width:52, height:52, borderRadius:14, background:"rgba(26,86,219,0.08)", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:16, color:"#1a56db" }}>{s.icon}</div>
                <h3 style={{ fontFamily:"Montserrat,sans-serif", fontSize:15, fontWeight:800, color:"#0a1f44", marginBottom:10, lineHeight:1.3 }}>{s.name}</h3>
                <p style={{ fontSize:13, color:"#3d4f6b", lineHeight:1.72, marginBottom:14, flex:1 }}>{s.desc}</p>
                <div style={{ marginBottom:14 }}>
                  <div style={{ fontFamily:"Montserrat,sans-serif", fontSize:9, fontWeight:700, letterSpacing:"1.5px", textTransform:"uppercase", color:"#8492a6", marginBottom:6 }}>Deliverables</div>
                  {s.deliverables.map(d => (
                    <div key={d} style={{ display:"flex", alignItems:"center", gap:6, fontSize:12, color:"#3d4f6b", padding:"3px 0" }}>
                      <CheckCircle2 size={11} color="#1a56db" style={{ flexShrink:0 }}/>{d}
                    </div>
                  ))}
                </div>
                <div style={{ background:"#0a1f44", borderRadius:10, padding:"12px 16px", marginBottom:14 }}>
                  <div style={{ fontFamily:"Montserrat,sans-serif", fontSize:9, fontWeight:700, letterSpacing:"2px", textTransform:"uppercase", color:"rgba(255,255,255,0.4)", marginBottom:2 }}>{t.starting}</div>
                  <div style={{ fontFamily:"Montserrat,sans-serif", fontSize:22, fontWeight:900, color:"#fff" }}>{s.price} <span style={{ fontSize:11, color:"#3b82f6" }}>CAD</span></div>
                </div>
                <div style={{ fontSize:11, color:"#8492a6", marginBottom:14 }}>
                  <span style={{ fontFamily:"Montserrat,sans-serif", fontWeight:700, color:"#1a56db" }}>For: </span>{s.for}
                </div>
                <Link href="/services" style={{ display:"inline-flex", alignItems:"center", gap:6, fontFamily:"Montserrat,sans-serif", fontSize:11, fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", color:"#1a56db", textDecoration:"none" }}>
                  Learn More <ArrowRight size={13}/>
                </Link>
              </div>
            ))}
          </div>
          <div style={{ textAlign:"center", marginTop:44 }}>
            <Link href="/services" style={{ display:"inline-flex", alignItems:"center", gap:10, fontFamily:"Montserrat,sans-serif", fontSize:12, fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", padding:"15px 36px", background:"linear-gradient(135deg,#1a56db,#2563eb)", color:"#fff", borderRadius:8, textDecoration:"none" }}>
              {t.view_all} <ArrowRight size={16}/>
            </Link>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section style={{ padding:"72px 24px", background:"#f4f7fb" }}>
        <div style={{ maxWidth:1240, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:40 }}>
            <span style={tag}>Industries</span>
            <h2 style={{ ...h2s, textAlign:"center" }}>{t.industries_title}</h2>
            <p style={{ ...sub, margin:"0 auto" }}>{t.industries_sub}</p>
          </div>
          <div style={{ display:"flex", flexWrap:"wrap", gap:12, justifyContent:"center" }}>
            {industries.map(ind => (
              <span key={ind} style={{ fontFamily:"Montserrat,sans-serif", fontSize:12, fontWeight:700, letterSpacing:"1px", padding:"12px 22px", background:"#fff", border:"1px solid #e4eaf5", borderRadius:50, color:"#3d4f6b", transition:"all 0.2s" }} className="ind-pill">{ind}</span>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ padding:"88px 24px", background:"#0a1f44" }}>
        <div style={{ maxWidth:1240, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:52 }}>
            <span style={{ ...tag, background:"rgba(26,86,219,0.2)", color:"#3b82f6" }}>Process</span>
            <h2 style={{ ...h2s, color:"#fff", textAlign:"center" }}>{t.process_title}</h2>
            <p style={{ ...sub, color:"rgba(255,255,255,0.55)", margin:"0 auto" }}>{t.process_sub}</p>
          </div>
          <div className="proc-grid">
            {[
              { num:1, title:t.p1, desc:t.p1d },
              { num:2, title:t.p2, desc:t.p2d },
              { num:3, title:t.p3, desc:t.p3d },
              { num:4, title:t.p4, desc:t.p4d },
              { num:5, title:t.p5, desc:t.p5d },
            ].map((s,i) => (
              <div key={i} style={{ textAlign:"center", padding:"24px 12px", position:"relative" }}>
                <div style={{ width:56, height:56, borderRadius:"50%", background:"linear-gradient(135deg,#1a56db,#2563eb)", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 18px", fontFamily:"Montserrat,sans-serif", fontSize:20, fontWeight:900, color:"#fff", boxShadow:"0 6px 20px rgba(26,86,219,0.4)" }}>{s.num}</div>
                <h3 style={{ fontFamily:"Montserrat,sans-serif", fontSize:12, fontWeight:800, textTransform:"uppercase", letterSpacing:"0.5px", color:"#fff", marginBottom:8 }}>{s.title}</h3>
                <p style={{ fontSize:13, color:"rgba(255,255,255,0.5)", lineHeight:1.65 }}>{s.desc}</p>
                {i<4 && <div className="proc-arrow" style={{ position:"absolute", right:-10, top:28, color:"rgba(255,255,255,0.2)", fontSize:20 }}>→</div>}
              </div>
            ))}
          </div>
          <div style={{ textAlign:"center", marginTop:44 }}>
            <Link href="/process" style={{ display:"inline-flex", alignItems:"center", gap:10, fontFamily:"Montserrat,sans-serif", fontSize:12, fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", padding:"15px 36px", border:"2px solid rgba(255,255,255,0.25)", color:"#fff", borderRadius:8, textDecoration:"none" }}>
              See Full Process <ArrowRight size={16}/>
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ padding:"88px 24px", background:"#fff" }}>
        <div style={{ maxWidth:1240, margin:"0 auto" }}>
          <div className="about-flex">
            <div>
              <div style={{ background:"#0a1f44", borderRadius:20, padding:"48px 40px", position:"relative", overflow:"hidden" }}>
                <div style={{ position:"absolute", top:-40, right:-40, width:180, height:180, borderRadius:"50%", background:"rgba(26,86,219,0.12)" }} />
                <div style={{ fontFamily:"Montserrat,sans-serif", fontSize:9, fontWeight:700, letterSpacing:"3px", textTransform:"uppercase", color:"#3b82f6", marginBottom:6 }}>{t.led_by}</div>
                <h3 style={{ fontFamily:"Montserrat,sans-serif", fontSize:22, fontWeight:900, color:"#fff", marginBottom:4 }}>Abdelali El-Magueri</h3>
                <div style={{ fontFamily:"Montserrat,sans-serif", fontSize:10, fontWeight:700, letterSpacing:"2px", textTransform:"uppercase", color:"#3b82f6", marginBottom:20 }}>{t.led_title}</div>
                <p style={{ fontSize:15, color:"rgba(255,255,255,0.62)", lineHeight:1.82, fontStyle:"italic", borderLeft:"3px solid #1a56db", paddingLeft:18, marginBottom:28 }}>
                  "Our mission is to simplify ISO 9001 certification through practical, efficient and results-driven support tailored to your business. Zero to Certified. Efficiently."
                </p>
                <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
                  {[{n:"+20",l:t.stats_1},{n:"7+",l:"Global Groups"},{n:"100%",l:"Success Rate"}].map(s => (
                    <div key={s.n} style={{ background:"rgba(255,255,255,0.07)", borderRadius:10, padding:"14px 16px", flex:1, textAlign:"center", minWidth:80 }}>
                      <div style={{ fontFamily:"Montserrat,sans-serif", fontSize:22, fontWeight:900, color:"#3b82f6" }}>{s.n}</div>
                      <div style={{ fontFamily:"Montserrat,sans-serif", fontSize:9, fontWeight:700, letterSpacing:"1.5px", textTransform:"uppercase", color:"rgba(255,255,255,0.4)", marginTop:4 }}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <span style={tag}>{t.about_tag}</span>
              <h2 style={{ ...h2s, marginBottom:20 }}>{t.about_title}<br/><span style={{ color:"#2563eb" }}>in Québec</span></h2>
              <p style={{ ...sub, marginBottom:28 }}>{t.about_sub}</p>
              <ul style={{ listStyle:"none", marginBottom:32 }}>
                {[t.about_li1, t.about_li2, t.about_li3, t.about_li4].map(item => (
                  <li key={item} style={{ display:"flex", alignItems:"flex-start", gap:12, padding:"10px 0", borderBottom:"1px solid #e4eaf5", fontSize:14, color:"#3d4f6b" }}>
                    <CheckCircle2 size={17} color="#1a56db" style={{ flexShrink:0, marginTop:2 }}/>{item}
                  </li>
                ))}
              </ul>
              <Link href="/about" style={{ display:"inline-flex", alignItems:"center", gap:10, fontFamily:"Montserrat,sans-serif", fontSize:12, fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", padding:"14px 28px", background:"linear-gradient(135deg,#1a56db,#2563eb)", color:"#fff", borderRadius:8, textDecoration:"none" }}>
                {t.about_cta} <ArrowRight size={16}/>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding:"88px 24px", background:"#f4f7fb" }}>
        <div style={{ maxWidth:1240, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:52 }}>
            <span style={tag}>Testimonials</span>
            <h2 style={{ ...h2s, textAlign:"center" }}>{t.testimonials_title}</h2>
            <p style={{ ...sub, margin:"0 auto" }}>{t.testimonials_sub}</p>
          </div>
          <div className="testi-grid">
            {[
              { text:t.t1_text, name:t.t1_name, company:t.t1_company, init:"O" },
              { text:t.t2_text, name:t.t2_name, company:t.t2_company, init:"Q" },
              { text:t.t3_text, name:t.t3_name, company:t.t3_company, init:"C" },
            ].map((t2,i) => (
              <div key={i} style={{ background:"#fff", border:"1px solid #e4eaf5", borderRadius:16, padding:"32px 28px", display:"flex", flexDirection:"column" }}>
                <div style={{ display:"flex", gap:4, marginBottom:18 }}>
                  {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="#f0b429" color="#f0b429"/>)}
                </div>
                <p style={{ fontSize:15, color:"#3d4f6b", lineHeight:1.8, fontStyle:"italic", marginBottom:24, flex:1 }}>"{t2.text}"</p>
                <div style={{ display:"flex", alignItems:"center", gap:14 }}>
                  <div style={{ width:44, height:44, borderRadius:"50%", background:"linear-gradient(135deg,#1a56db,#2563eb)", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"Montserrat,sans-serif", fontSize:16, fontWeight:900, color:"#fff", flexShrink:0 }}>{t2.init}</div>
                  <div>
                    <div style={{ fontFamily:"Montserrat,sans-serif", fontSize:13, fontWeight:700, color:"#0a1f44" }}>{t2.name}</div>
                    <div style={{ fontSize:12, color:"#8492a6" }}>{t2.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding:"88px 24px", background:"#fff" }}>
        <div style={{ maxWidth:860, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:52 }}>
            <span style={tag}>FAQ</span>
            <h2 style={{ ...h2s, textAlign:"center" }}>{t.faq_title}</h2>
            <p style={{ ...sub, margin:"0 auto" }}>{t.faq_sub}</p>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:4 }}>
            {[
              { q:t.faq_1q, a:t.faq_1a },
              { q:t.faq_2q, a:t.faq_2a },
              { q:t.faq_3q, a:t.faq_3a },
              { q:t.faq_4q, a:t.faq_4a },
              { q:t.faq_5q, a:t.faq_5a },
              { q:t.faq_6q, a:t.faq_6a },
            ].map((f,i) => (
              <div key={i} style={{ border:"1px solid #e4eaf5", borderRadius:12, overflow:"hidden" }}>
                <button onClick={()=>setOpenFaq(openFaq===i?null:i)} style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"20px 24px", background: openFaq===i?"#f4f7fb":"#fff", border:"none", cursor:"pointer", textAlign:"left", gap:16 }}>
                  <span style={{ fontFamily:"Montserrat,sans-serif", fontSize:14, fontWeight:700, color:"#0a1f44" }}>{f.q}</span>
                  {openFaq===i ? <ChevronUp size={18} color="#1a56db" style={{ flexShrink:0 }}/> : <ChevronDown size={18} color="#8492a6" style={{ flexShrink:0 }}/>}
                </button>
                {openFaq===i && (
                  <div style={{ padding:"0 24px 20px", background:"#f4f7fb" }}>
                    <p style={{ fontSize:14, color:"#3d4f6b", lineHeight:1.75, borderLeft:"3px solid #1a56db", paddingLeft:16 }}>{f.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ padding:"80px 24px", background:"linear-gradient(135deg,#0a1f44 0%,#1a3a7a 100%)", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 50% 70% at 80% 50%, rgba(26,86,219,0.28) 0%, transparent 70%)" }} />
        <div style={{ maxWidth:1240, margin:"0 auto", position:"relative", zIndex:2 }} className="cta-banner-inner">
          <div className="cta-banner-text">
            <h2 style={{ fontFamily:"Montserrat,sans-serif", fontSize:"clamp(22px,3.5vw,38px)", fontWeight:900, color:"#fff", marginBottom:10, lineHeight:1.2 }}>{t.cta_title}</h2>
            <p style={{ fontSize:16, color:"rgba(255,255,255,0.55)", lineHeight:1.7 }}>{t.cta_sub}</p>
          </div>
          <div className="cta-banner-btns">
            <Link href="/contact" style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", gap:10, fontFamily:"Montserrat,sans-serif", fontSize:11, fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", padding:"15px 24px", background:"linear-gradient(135deg,#1a56db,#2563eb)", color:"#fff", borderRadius:8, textDecoration:"none", width:"100%" }}>
              {t.cta_btn1} <ArrowRight size={15}/>
            </Link>
            <a href="tel:+15145526936" style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", gap:10, fontFamily:"Montserrat,sans-serif", fontSize:11, fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", padding:"14px 20px", border:"2px solid rgba(255,255,255,0.3)", color:"#fff", borderRadius:8, textDecoration:"none", width:"100%" }}>
              <Phone size={15}/> +1 514 552 6936
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:0;border:1px solid #e4eaf5;border-radius:16px;overflow:hidden;}
        .stats-grid > div{border-right:1px solid #e4eaf5;}
        .stats-grid > div:last-child{border-right:none;}
        .why-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:16px;}
        .svc-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;align-items:stretch;}
        .proc-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;}
        .about-flex{display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:center;}
        .testi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
        .cta-banner-inner{display:flex;align-items:center;justify-content:space-between;gap:36px;}
        .cta-banner-btns{display:flex;gap:12px;flex-shrink:0;min-width:280px;}
        .svc-card:hover{border-color:transparent!important;box-shadow:0 20px 60px rgba(10,31,68,0.13)!important;transform:translateY(-5px)!important;}
        .why-card:hover{background:#0a1f44!important;border-color:transparent!important;}
        .why-card:hover h3,.why-card:hover p{color:#fff!important;}
        .ind-pill:hover{background:#0a1f44!important;color:#fff!important;border-color:transparent!important;}
        @media(max-width:1100px){
          .svc-grid{grid-template-columns:1fr 1fr!important;}
          .why-grid{grid-template-columns:1fr 1fr!important;}
          .proc-grid{grid-template-columns:1fr 1fr!important;}
          .proc-arrow{display:none!important;}
          .stats-grid{grid-template-columns:1fr 1fr!important;}
        }
        @media(max-width:768px){
          .svc-grid{grid-template-columns:1fr!important;}
          .why-grid{grid-template-columns:1fr!important;}
          .stats-grid{grid-template-columns:1fr 1fr!important;}
          .about-flex{grid-template-columns:1fr!important;gap:40px!important;}
          .testi-grid{grid-template-columns:1fr!important;}
          .cta-banner-inner{flex-direction:column!important;text-align:center!important;align-items:stretch!important;gap:24px!important;}
          .cta-banner-btns{flex-direction:column!important;width:100%!important;min-width:unset!important;}
          .proc-grid{grid-template-columns:1fr!important;}
        }
      `}</style>
    </div>
  );
}
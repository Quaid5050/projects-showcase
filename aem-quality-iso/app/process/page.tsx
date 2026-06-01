"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Phone, Calendar, Search, Map, Settings, Award, CheckCircle2, Clock, ChevronDown, ChevronUp } from "lucide-react";

const T = {
  en: {
    tag:"Our Process", hero_title:"From First Call to", hero_highlight:"Certified Business",
    hero_sub:"A clear, structured and completely transparent 5-step process. You will always know exactly where you are, what is happening next, and what the expected outcome is at every stage.",
    outcome_label:"Expected Outcome", duration_label:"Typical Duration", happens_label:"What Happens During This Stage",
    faq_tag:"Common Questions", faq_title:"Frequently Asked About Our Process",
    cta_title:"Ready to Take Step 1?", cta_sub:"Book your free 30-minute consultation and let us talk about your business, your goals, and how we can get you certified.",
    cta_btn:"Book Free Consultation",
    steps:[
      { num:1, title:"Free 30-Minute Consultation", subtitle:"No cost. No commitment. Just clarity.",
        desc:"Every successful ISO 9001 project starts with a conversation. Our free consultation gives you a clear picture of the path ahead — what it involves, how long it takes, what it costs, and what you will get at the end.",
        happens:["We listen to your business situation, challenges, and goals","We ask about your industry, size, and existing quality processes","We explain ISO 9001 certification in plain language","We answer every question you have — nothing is too basic","We outline the realistic timeline and investment for your situation","You leave with clarity and a clear path forward"],
        outcome:"A clear understanding of what ISO 9001 means for your business and which services would be most beneficial.", duration:"30 minutes · Free · Online or Phone" },
      { num:2, title:"Diagnostic & Gap Analysis", subtitle:"Know exactly where you stand.",
        desc:"Before we build anything, we conduct a thorough assessment of your current management system. This is the foundation of everything — saving significant time and money by ensuring every action is targeted and necessary.",
        happens:["Structured review of your existing processes and documentation","Clause-by-clause comparison against ISO 9001:2015 requirements","Identification of major and minor nonconformities","Assessment of risks and opportunities in your current approach","Interviews with key staff to understand real-world practices","Detailed written report with findings and prioritized recommendations"],
        outcome:"A comprehensive Gap Analysis Report, nonconformity register, and strategic action plan that tells you exactly what needs to change and in what order.", duration:"3–5 business days" },
      { num:3, title:"Customized Implementation Plan", subtitle:"Your roadmap to certification.",
        desc:"Based on the gap analysis, we develop a detailed, realistic implementation plan tailored specifically to your organization. This roadmap becomes your guide through the entire certification journey.",
        happens:["Detailed project plan with specific tasks, owners, and deadlines","Phased approach that minimizes disruption to your operations","Identification of quick wins vs longer-term projects","Resource planning — what your team needs to contribute and when","Risk mitigation planning for common implementation challenges","Regular checkpoint schedule to track progress"],
        outcome:"A comprehensive implementation roadmap with clear KPIs to measure progress at every stage.", duration:"1–2 weeks to develop" },
      { num:4, title:"Build, Document & Train", subtitle:"Where planning becomes reality.",
        desc:"This is the core of the implementation — building the actual quality management system and embedding it into your organization. We work alongside your team to design processes, write documentation, and build skills.",
        happens:["Development of Quality Manual, procedures, and work instructions","Process mapping and optimization for key business activities","Creation of quality records templates and forms","Risk and opportunity register development","Objectives, targets, and KPI framework implementation","Team training on ISO 9001 requirements and quality tools","Internal audit program setup and execution","Corrective action and continual improvement process"],
        outcome:"A complete, documented quality management system understood and owned by your team — ready for certification audit.", duration:"8–16 weeks depending on organization size" },
      { num:5, title:"Certification Ready — and Beyond", subtitle:"Walk in confident. Walk out certified.",
        desc:"With your QMS fully built and your team trained, we prepare you for the certification audit and support you through the process until you have that certificate in hand.",
        happens:["Pre-certification readiness review — a practice run to identify last gaps","Audit preparation coaching for you and your team","Support during the certification audit process","Guidance on responding to any audit findings","Post-certification support to ensure compliance is maintained","Planning for ongoing internal audits and management reviews","Continual improvement program setup for the years ahead"],
        outcome:"ISO 9001 certification in hand, a team that knows how to maintain the system, and a quality culture that drives performance.", duration:"Ongoing support through certification and beyond" },
    ],
    faqs:[
      { q:"How long does ISO 9001 certification take?", a:"Typically 3–6 months for most SMEs, depending on your starting point, organization size, and team capacity. We will give you a specific estimate after the initial diagnostic." },
      { q:"Do we need to shut down operations during implementation?", a:"Absolutely not. We design the implementation to work around your operations. Most work happens in parallel with your normal business activities, with minimal disruption." },
      { q:"What does my team need to do?", a:"Your team participates in process reviews, training sessions, and providing information about how work gets done. We do the heavy lifting on documentation and system design." },
      { q:"Do we work with you directly, or a junior consultant?", a:"You work directly with Abdelali El-Magueri on every project. There are no junior consultants — just direct, experienced support from the founder himself." },
      { q:"What happens after we get certified?", a:"We help you set up ongoing processes — internal audits, management reviews, corrective actions, KPI monitoring — that keep your certification valid and your system improving." },
      { q:"Do you provide remote consulting?", a:"Yes. We offer both on-site and remote consulting across Canada. Many clients complete the entire process remotely with excellent results." },
    ]
  },
  fr: {
    tag:"Notre processus", hero_title:"Du premier appel à l'", hero_highlight:"entreprise certifiée",
    hero_sub:"Un processus clair, structuré et totalement transparent en 5 étapes. Vous saurez toujours exactement où vous en êtes, ce qui se passe ensuite et quel est le résultat attendu à chaque étape.",
    outcome_label:"Résultat attendu", duration_label:"Durée typique", happens_label:"Ce qui se passe pendant cette étape",
    faq_tag:"Questions courantes", faq_title:"Questions fréquentes sur notre processus",
    cta_title:"Prêt à franchir l'étape 1 ?", cta_sub:"Réservez votre consultation gratuite de 30 minutes et parlons de votre entreprise, de vos objectifs et de la façon dont nous pouvons vous faire certifier.",
    cta_btn:"Réserver une consultation gratuite",
    steps:[
      { num:1, title:"Consultation gratuite de 30 minutes", subtitle:"Sans frais. Sans engagement. Juste de la clarté.",
        desc:"Chaque projet ISO 9001 réussi commence par une conversation. Notre consultation gratuite vous donne une image claire du chemin à parcourir — ce que cela implique, combien de temps cela prend et ce que vous obtiendrez à la fin.",
        happens:["Nous écoutons votre situation d'entreprise, vos défis et vos objectifs","Nous nous renseignons sur votre secteur, votre taille et vos processus qualité existants","Nous expliquons la certification ISO 9001 en langage clair","Nous répondons à toutes vos questions — rien n'est trop basique","Nous présentons le calendrier réaliste et l'investissement pour votre situation","Vous repartez avec de la clarté et une voie claire à suivre"],
        outcome:"Une compréhension claire de ce que signifie l'ISO 9001 pour votre entreprise et des services qui vous seraient les plus bénéfiques.", duration:"30 minutes · Gratuit · En ligne ou par téléphone" },
      { num:2, title:"Diagnostic & Analyse des écarts", subtitle:"Sachez exactement où vous en êtes.",
        desc:"Avant de construire quoi que ce soit, nous effectuons une évaluation approfondie de votre système de management actuel. C'est le fondement de tout — économisant du temps et de l'argent en garantissant que chaque action est ciblée.",
        happens:["Revue structurée de vos processus et documentation existants","Comparaison clause par clause vs exigences ISO 9001:2015","Identification des non-conformités majeures et mineures","Évaluation des risques et opportunités dans votre approche actuelle","Entretiens avec le personnel clé pour comprendre les pratiques réelles","Rapport écrit détaillé avec conclusions et recommandations priorisées"],
        outcome:"Un rapport d'analyse des écarts complet, un registre des non-conformités et un plan d'action stratégique indiquant exactement ce qui doit changer.", duration:"3 à 5 jours ouvrables" },
      { num:3, title:"Plan de mise en œuvre personnalisé", subtitle:"Votre feuille de route vers la certification.",
        desc:"Sur la base de l'analyse des écarts, nous développons un plan de mise en œuvre détaillé et réaliste, spécifiquement adapté à votre organisation.",
        happens:["Plan de projet détaillé avec tâches spécifiques, responsables et délais","Approche phasée minimisant les perturbations de vos opérations","Identification des gains rapides vs projets à plus long terme","Planification des ressources — ce que votre équipe doit apporter","Planification d'atténuation des risques pour les défis courants","Calendrier de points de contrôle réguliers pour suivre les progrès"],
        outcome:"Une feuille de route de mise en œuvre complète avec des KPI clairs pour mesurer les progrès à chaque étape.", duration:"1 à 2 semaines pour développer" },
      { num:4, title:"Construire, documenter & former", subtitle:"Là où la planification devient réalité.",
        desc:"C'est le cœur de la mise en œuvre — construire le système de management de la qualité et l'intégrer dans votre organisation.",
        happens:["Développement du Manuel Qualité, des procédures et instructions de travail","Cartographie et optimisation des processus pour les activités clés","Création de modèles d'enregistrements qualité et formulaires","Développement du registre des risques et opportunités","Mise en œuvre du cadre d'objectifs, cibles et KPI","Formation de l'équipe sur les exigences ISO 9001 et outils qualité","Mise en place et exécution du programme d'audit interne","Processus d'action corrective et d'amélioration continue"],
        outcome:"Un système de management de la qualité complet et documenté, compris et approprié par votre équipe — prêt pour l'audit de certification.", duration:"8 à 16 semaines selon la taille" },
      { num:5, title:"Prêt pour la certification — et au-delà", subtitle:"Entrez confiant. Ressortez certifié.",
        desc:"Avec votre SMQ entièrement construit et votre équipe formée, nous vous préparons pour l'audit de certification et vous accompagnons tout au long du processus.",
        happens:["Revue de préparation à la certification — un exercice pratique pour identifier les derniers écarts","Coaching de préparation à l'audit pour vous et votre équipe","Soutien pendant le processus d'audit de certification","Guidance pour répondre aux éventuelles conclusions d'audit","Soutien post-certification pour assurer le maintien de la conformité","Planification des audits internes et revues de direction en cours","Mise en place du programme d'amélioration continue pour les années à venir"],
        outcome:"Certification ISO 9001 en main, une équipe qui sait comment maintenir le système et une culture qualité qui stimule la performance.", duration:"Soutien continu tout au long de la certification et au-delà" },
    ],
    faqs:[
      { q:"Combien de temps prend la certification ISO 9001 ?", a:"Généralement 3 à 6 mois pour la plupart des PME, selon votre point de départ, la taille et la capacité de votre équipe. Nous vous donnerons une estimation précise après le diagnostic initial." },
      { q:"Devons-nous arrêter nos opérations pendant la mise en œuvre ?", a:"Absolument pas. Nous concevons la mise en œuvre pour s'adapter à vos opérations. La plupart du travail se fait en parallèle avec vos activités normales, avec un minimum de perturbations." },
      { q:"Que doit faire notre équipe ?", a:"Votre équipe participe aux revues de processus, sessions de formation et fournit des informations sur la façon dont le travail est effectué. Nous nous chargeons de la documentation et de la conception du système." },
      { q:"Travaillons-nous directement avec vous ou un consultant junior ?", a:"Vous travaillez directement avec Abdelali El-Magueri sur chaque projet. Pas de consultants juniors — juste un soutien direct et expérimenté du fondateur lui-même." },
      { q:"Que se passe-t-il après la certification ?", a:"Nous vous aidons à mettre en place des processus continus — audits internes, revues de direction, actions correctives, suivi des KPI — qui maintiennent votre certification valide." },
      { q:"Proposez-vous des conseils à distance ?", a:"Oui. Nous offrons des services en présentiel et à distance partout au Canada. De nombreux clients complètent l'ensemble du processus à distance avec d'excellents résultats." },
    ]
  }
};

export default function ProcessPage() {
  const [lang, setLang] = useState<"en"|"fr">("en");
  const [openFaq, setOpenFaq] = useState<number|null>(null);
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
        <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 70% 60% at 50% 50%, rgba(26,86,219,0.2) 0%, transparent 70%)" }} />
        <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)", backgroundSize:"60px 60px" }} />
        <div style={{ maxWidth:1240, margin:"0 auto", position:"relative", zIndex:2, textAlign:"center" }}>
          <span style={{ display:"inline-block", fontFamily:"Montserrat,sans-serif", fontSize:10, fontWeight:700, letterSpacing:"3px", textTransform:"uppercase", color:"#3b82f6", background:"rgba(26,86,219,0.2)", border:"1px solid rgba(26,86,219,0.35)", padding:"6px 18px", borderRadius:50, marginBottom:20 }}>{t.tag}</span>
          <h1 style={{ fontFamily:"Montserrat,sans-serif", fontSize:"clamp(32px,5vw,52px)", fontWeight:900, color:"#fff", lineHeight:1.1, marginBottom:18 }}>
            {t.hero_title}<br/>
            <span style={{ background:"linear-gradient(135deg,#3b82f6,#00c2ff)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>{t.hero_highlight}</span>
          </h1>
          <p style={{ fontSize:17, color:"rgba(255,255,255,0.6)", lineHeight:1.8, maxWidth:660, margin:"0 auto 52px" }}>{t.hero_sub}</p>
          <div style={{ display:"flex", justifyContent:"center", alignItems:"center", flexWrap:"wrap", gap:0 }}>
            {t.steps.map((s,i) => (
              <div key={i} style={{ display:"flex", alignItems:"center" }}>
                <div style={{ display:"flex", flexDirection:"column", alignItems:"center", padding:"0 16px" }}>
                  <div style={{ width:48, height:48, borderRadius:"50%", background:i%2===0?"linear-gradient(135deg,#1a56db,#2563eb)":"rgba(255,255,255,0.12)", border:"2px solid rgba(255,255,255,0.2)", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"Montserrat,sans-serif", fontSize:18, fontWeight:900, color:"#fff", marginBottom:10 }}>{s.num}</div>
                  <div style={{ fontFamily:"Montserrat,sans-serif", fontSize:9, fontWeight:700, letterSpacing:"1.5px", textTransform:"uppercase", color:"rgba(255,255,255,0.45)", textAlign:"center", maxWidth:72, lineHeight:1.4 }}>{s.title.split(" ").slice(0,2).join(" ")}</div>
                </div>
                {i<4 && <div style={{ width:40, height:1, background:"rgba(255,255,255,0.15)", marginBottom:28, flexShrink:0 }} className="proc-line"/>}
              </div>
            ))}
          </div>
        </div>
        <style>{`.proc-line{display:block;} @media(max-width:600px){.proc-line{display:none!important;}}`}</style>
      </section>

      {/* STEPS */}
      {t.steps.map((step, i) => (
        <section key={step.num} style={{ padding:"72px 24px", background:i%2===0?"#fff":"#f4f7fb", borderBottom:"1px solid #e4eaf5" }}>
          <div style={{ maxWidth:1240, margin:"0 auto" }}>
            <div className="step-grid">
              <div>
                <div style={{ display:"flex", alignItems:"center", gap:20, marginBottom:28 }}>
                  <div style={{ width:68, height:68, borderRadius:"50%", background:"linear-gradient(135deg,#1a56db,#2563eb)", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"Montserrat,sans-serif", fontSize:24, fontWeight:900, color:"#fff", flexShrink:0, boxShadow:"0 8px 24px rgba(26,86,219,0.35)" }}>{step.num}</div>
                  <div>
                    <div style={{ fontFamily:"Montserrat,sans-serif", fontSize:10, fontWeight:800, letterSpacing:"2.5px", textTransform:"uppercase", color:"#1a56db", marginBottom:4 }}>Step {step.num} of 5</div>
                    <h2 style={{ fontFamily:"Montserrat,sans-serif", fontSize:"clamp(18px,2.8vw,28px)", fontWeight:900, color:"#0a1f44", lineHeight:1.15 }}>{step.title}</h2>
                    <p style={{ fontFamily:"Montserrat,sans-serif", fontSize:11, fontWeight:700, color:"#3b82f6", letterSpacing:"1px", marginTop:4 }}>{step.subtitle}</p>
                  </div>
                </div>
                <p style={{ fontSize:16, color:"#3d4f6b", lineHeight:1.82, marginBottom:24 }}>{step.desc}</p>
                <h3 style={{ fontFamily:"Montserrat,sans-serif", fontSize:11, fontWeight:800, letterSpacing:"1.5px", textTransform:"uppercase", color:"#0a1f44", marginBottom:14 }}>{t.happens_label}</h3>
                <ul style={{ listStyle:"none" }}>
                  {step.happens.map((w,j) => (
                    <li key={j} style={{ display:"flex", alignItems:"flex-start", gap:12, padding:"9px 0", borderBottom:"1px solid #e4eaf5", fontSize:14, color:"#3d4f6b", lineHeight:1.6 }}>
                      <CheckCircle2 size={15} color="#1a56db" style={{ flexShrink:0, marginTop:2 }}/>{w}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
                <div style={{ background:"#0a1f44", borderRadius:16, padding:"28px 32px", position:"relative", overflow:"hidden" }}>
                  <div style={{ position:"absolute", top:-20, right:-20, width:100, height:100, borderRadius:"50%", background:"rgba(26,86,219,0.15)" }} />
                  <div style={{ fontFamily:"Montserrat,sans-serif", fontSize:10, fontWeight:800, letterSpacing:"2px", textTransform:"uppercase", color:"#3b82f6", marginBottom:12 }}>{t.outcome_label}</div>
                  <p style={{ fontSize:15, color:"rgba(255,255,255,0.75)", lineHeight:1.8 }}>{step.outcome}</p>
                </div>
                <div style={{ background:"#fff", border:"1px solid #e4eaf5", borderRadius:14, padding:"22px 26px", display:"flex", alignItems:"center", gap:16 }}>
                  <div style={{ width:44, height:44, borderRadius:12, background:"rgba(26,86,219,0.08)", display:"flex", alignItems:"center", justifyContent:"center", color:"#1a56db", flexShrink:0 }}><Clock size={20}/></div>
                  <div>
                    <div style={{ fontFamily:"Montserrat,sans-serif", fontSize:9, fontWeight:700, letterSpacing:"2px", textTransform:"uppercase", color:"#8492a6", marginBottom:4 }}>{t.duration_label}</div>
                    <div style={{ fontFamily:"Montserrat,sans-serif", fontSize:13, fontWeight:700, color:"#0a1f44" }}>{step.duration}</div>
                  </div>
                </div>
                {step.num===5 && (
                  <div style={{ background:"linear-gradient(135deg,#1a56db,#2563eb)", borderRadius:14, padding:"24px 28px" }}>
                    <p style={{ fontSize:14, color:"rgba(255,255,255,0.85)", lineHeight:1.7, marginBottom:18 }}>Book your free consultation and we will walk through every step with you.</p>
                    <Link href="/contact" style={{ display:"inline-flex", alignItems:"center", gap:8, fontFamily:"Montserrat,sans-serif", fontSize:11, fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", color:"#fff", textDecoration:"none", background:"rgba(255,255,255,0.2)", padding:"10px 20px", borderRadius:8 }}>
                      {t.cta_btn} <ArrowRight size={14}/>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* FAQ */}
      <section style={{ padding:"80px 24px", background:"#fff" }}>
        <div style={{ maxWidth:860, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:48 }}>
            <span style={{ display:"inline-block", fontFamily:"Montserrat,sans-serif", fontSize:10, fontWeight:700, letterSpacing:"3px", textTransform:"uppercase", color:"#1a56db", background:"rgba(26,86,219,0.08)", padding:"6px 16px", borderRadius:50, marginBottom:14 }}>{t.faq_tag}</span>
            <h2 style={{ fontFamily:"Montserrat,sans-serif", fontSize:"clamp(24px,3.5vw,36px)", fontWeight:800, color:"#0a1f44" }}>{t.faq_title}</h2>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:4 }}>
            {t.faqs.map((f,i) => (
              <div key={i} style={{ border:"1px solid #e4eaf5", borderRadius:12, overflow:"hidden" }}>
                <button onClick={()=>setOpenFaq(openFaq===i?null:i)} style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"20px 24px", background:openFaq===i?"#f4f7fb":"#fff", border:"none", cursor:"pointer", textAlign:"left", gap:16 }}>
                  <span style={{ fontFamily:"Montserrat,sans-serif", fontSize:14, fontWeight:700, color:"#0a1f44" }}>{f.q}</span>
                  {openFaq===i?<ChevronUp size={18} color="#1a56db" style={{ flexShrink:0 }}/>:<ChevronDown size={18} color="#8492a6" style={{ flexShrink:0 }}/>}
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

      {/* CTA */}
      <section style={{ padding:"80px 24px", background:"#0a1f44" }}>
        <div style={{ maxWidth:720, margin:"0 auto", textAlign:"center" }}>
          <h2 style={{ fontFamily:"Montserrat,sans-serif", fontSize:"clamp(24px,3.5vw,36px)", fontWeight:900, color:"#fff", marginBottom:14 }}>{t.cta_title}</h2>
          <p style={{ fontSize:16, color:"rgba(255,255,255,0.55)", lineHeight:1.8, marginBottom:36 }}>{t.cta_sub}</p>
          <div style={{ display:"flex", justifyContent:"center", gap:16, flexWrap:"wrap" }}>
            <Link href="/contact" style={{ display:"inline-flex", alignItems:"center", gap:10, fontFamily:"Montserrat,sans-serif", fontSize:12, fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", padding:"16px 36px", background:"linear-gradient(135deg,#1a56db,#2563eb)", color:"#fff", borderRadius:8, textDecoration:"none" }}>
              {t.cta_btn} <ArrowRight size={16}/>
            </Link>
            <a href="tel:+15145526936" style={{ display:"inline-flex", alignItems:"center", gap:10, fontFamily:"Montserrat,sans-serif", fontSize:12, fontWeight:700, letterSpacing:"1px", textTransform:"uppercase", padding:"16px 28px", border:"2px solid rgba(255,255,255,0.25)", color:"#fff", borderRadius:8, textDecoration:"none" }}>
              <Phone size={16}/> +1 514 552 6936
            </a>
          </div>
        </div>
      </section>

      <style>{`.step-grid{display:grid;grid-template-columns:1.5fr 1fr;gap:56px;align-items:start;} @media(max-width:900px){.step-grid{grid-template-columns:1fr!important;}}`}</style>
    </div>
  );
}
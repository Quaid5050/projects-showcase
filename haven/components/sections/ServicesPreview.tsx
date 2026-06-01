"use client";
import Link from "next/link";
const services=[
  {num:"01",title:"Tire Installation",desc:"Professional mounting and balancing. Precision torque to OEM specs on every vehicle.",icon:<svg viewBox="0 0 48 48" fill="none" stroke="#e8001d" strokeWidth="1.5" strokeLinecap="round"><circle cx="24" cy="24" r="18"/><circle cx="24" cy="24" r="8"/><circle cx="24" cy="24" r="2" fill="#e8001d" stroke="none"/><line x1="24" y1="6" x2="24" y2="16"/><line x1="24" y1="32" x2="24" y2="42"/><line x1="6" y1="24" x2="16" y2="24"/><line x1="32" y1="24" x2="42" y2="24"/></svg>},
  {num:"02",title:"Wheel Alignment",desc:"Computer-aided 4-wheel alignment for optimal handling and maximum tire life.",icon:<svg viewBox="0 0 48 48" fill="none" stroke="#e8001d" strokeWidth="1.5" strokeLinecap="round"><line x1="8" y1="16" x2="40" y2="16"/><line x1="8" y1="32" x2="40" y2="32"/><circle cx="18" cy="16" r="4"/><circle cx="30" cy="32" r="4"/><line x1="18" y1="20" x2="18" y2="28"/><line x1="30" y1="20" x2="30" y2="28"/></svg>},
  {num:"03",title:"Performance Wheels",desc:"Custom alloy and forged wheel fitment. Staggered setups and spacer kits.",icon:<svg viewBox="0 0 48 48" fill="none" stroke="#e8001d" strokeWidth="1.5" strokeLinecap="round"><circle cx="24" cy="24" r="16"/><circle cx="24" cy="24" r="6"/><line x1="24" y1="8" x2="24" y2="18"/><line x1="24" y1="30" x2="24" y2="40"/><line x1="8" y1="24" x2="18" y2="24"/><line x1="30" y1="24" x2="40" y2="24"/><line x1="12.7" y1="12.7" x2="19.5" y2="19.5"/><line x1="28.5" y1="28.5" x2="35.3" y2="35.3"/><line x1="35.3" y1="12.7" x2="28.5" y2="19.5"/><line x1="19.5" y1="28.5" x2="12.7" y2="35.3"/></svg>},
  {num:"04",title:"Seasonal Change",desc:"Swift summer-to-winter swap. Storage options with inspection included.",icon:<svg viewBox="0 0 48 48" fill="none" stroke="#e8001d" strokeWidth="1.5" strokeLinecap="round"><path d="M12 34 C12 20 36 20 36 34"/><rect x="10" y="34" width="28" height="6" rx="2"/><line x1="24" y1="8" x2="24" y2="20"/><path d="M19 13 L24 8 L29 13"/></svg>},
  {num:"05",title:"Ceramic Coating",desc:"Nano-ceramic paint protection. UV block, scratch resistance, years of gloss.",icon:<svg viewBox="0 0 48 48" fill="none" stroke="#e8001d" strokeWidth="1.5" strokeLinecap="round"><path d="M10 36 Q24 14 38 36"/><line x1="24" y1="14" x2="24" y2="8"/><circle cx="24" cy="8" r="3"/><path d="M16 26 Q24 22 32 26"/></svg>},
  {num:"06",title:"Window Tint",desc:"Premium ceramic and carbon film for UV block, privacy, and sleek aesthetics.",icon:<svg viewBox="0 0 48 48" fill="none" stroke="#e8001d" strokeWidth="1.5" strokeLinecap="round"><rect x="6" y="10" width="36" height="28" rx="3"/><line x1="24" y1="10" x2="24" y2="38"/><rect x="6" y="10" width="18" height="28" rx="3" fill="rgba(232,0,29,0.06)" stroke="none"/></svg>},
];
export default function ServicesPreview(){
  return(
    <section id="services" style={{background:"#080808",padding:"100px 0"}}>
      <div style={{maxWidth:"1400px",margin:"0 auto",padding:"0 60px"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:"56px",flexWrap:"wrap",gap:"20px"}}>
          <div>
            <span className="section-tag reveal">What We Do</span>
            <h2 className="section-title reveal">OUR SERVICES</h2>
            <p className="reveal" style={{fontSize:"17px",color:"rgba(240,240,240,0.82)",maxWidth:"420px",lineHeight:1.8,marginTop:"12px"}}>From precision installation to full performance upgrades, every detail handled with expert care.</p>
          </div>
          <Link href="/services" className="clip-btn reveal" data-hover style={{background:"transparent",color:"#e8001d",border:"1px solid #e8001d",padding:"12px 28px",fontFamily:"'Rajdhani',sans-serif",fontSize:"14px",fontWeight:700,letterSpacing:"3px",textTransform:"uppercase",textDecoration:"none",whiteSpace:"nowrap",transition:"all .3s"}}
          onMouseEnter={e=>{e.currentTarget.style.background="#e8001d";e.currentTarget.style.color="white"}}
          onMouseLeave={e=>{e.currentTarget.style.background="transparent";e.currentTarget.style.color="#e8001d"}}>View All Services</Link>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"2px"}} className="sp-grid">
          {services.map((s,i)=>(
            <div key={s.num} data-hover className="reveal glass-card" style={{padding:"36px 28px",position:"relative",overflow:"hidden",transition:"all .4s",transitionDelay:`${i*.06}s`,cursor:"default"}}
            onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,255,255,0.07)";e.currentTarget.style.transform="translateY(-4px)";e.currentTarget.style.borderColor="rgba(232,0,29,0.25)"}}
            onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.04)";e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.borderColor="rgba(255,255,255,0.08)"}}>
              <div style={{position:"absolute",top:0,left:0,right:0,height:"2px",background:"#e8001d",transform:"scaleX(0)",transformOrigin:"left",transition:"transform .4s"}} className="svc-line"/>
              <span style={{position:"absolute",top:"18px",right:"20px",fontFamily:"'Orbitron',sans-serif",fontSize:"13px",color:"rgba(232,0,29,0.3)",letterSpacing:"2px"}}>{s.num}</span>
              <div style={{width:"44px",height:"44px",marginBottom:"20px"}}>{s.icon}</div>
              <div style={{fontFamily:"'Orbitron',sans-serif",fontSize:"14px",fontWeight:700,letterSpacing:"2px",color:"#f0f0f0",marginBottom:"10px",textTransform:"uppercase"}}>{s.title}</div>
              <p style={{fontSize:"15px",color:"rgba(240,240,240,0.82)",lineHeight:1.75}}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`.sp-grid>div:hover .svc-line{transform:scaleX(1)!important}@media(max-width:900px){.sp-grid{grid-template-columns:repeat(2,1fr)!important}}@media(max-width:560px){.sp-grid{grid-template-columns:1fr!important}}@media(max-width:768px){#services>div{padding:70px 24px!important}}`}</style>
    </section>
  );
}

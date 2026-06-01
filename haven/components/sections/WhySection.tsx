"use client";
import { useEffect, useRef, useState } from "react";
function useCounter(target:number,suffix:string,dur=1800){
  const [val,setVal]=useState("0");
  const [started,setStarted]=useState(false);
  const ref=useRef<HTMLDivElement>(null);
  useEffect(()=>{const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting)setStarted(true)},{threshold:.5});if(ref.current)obs.observe(ref.current);return()=>obs.disconnect()},[]);
  useEffect(()=>{if(!started)return;let s:number|null=null;const step=(ts:number)=>{if(!s)s=ts;const p=Math.min((ts-s)/dur,1),e2=1-Math.pow(1-p,3),c=Math.floor(e2*target);setVal(c>=1000?(c/1000).toFixed(0)+"K"+suffix:c+suffix);if(p<1)requestAnimationFrame(step)};requestAnimationFrame(step)},[started,target,suffix,dur]);
  return{val,ref};
}
function Stat({t,s,l}:{t:number,s:string,l:string}){
  const{val,ref}=useCounter(t,s);
  return(
    <div ref={ref} className="glass-card" style={{padding:"36px 28px",textAlign:"center",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",bottom:0,left:0,right:0,height:"2px",background:"linear-gradient(90deg,transparent,#e8001d,transparent)"}}/>
      <div style={{fontFamily:"'Orbitron',sans-serif",fontSize:"clamp(32px,4vw,48px)",fontWeight:900,color:"#e8001d",textShadow:"0 0 20px rgba(232,0,29,0.4)",marginBottom:"8px",lineHeight:1}}>{val}</div>
      <div style={{fontSize:"14px",letterSpacing:"3px",color:"rgba(240,240,240,0.82)",textTransform:"uppercase"}}>{l}</div>
    </div>
  );
}
const pts=[{title:"Same-Day Service",desc:"Most installations completed within 90 minutes. Back on the road fast without compromising quality."},{title:"Certified Technicians",desc:"All techs hold OEM certifications for every brand we carry. No guesswork, pure expertise."},{title:"Warranty Backed",desc:"Every service backed by our labor warranty. Manufacturer warranties fully honored."},{title:"Premium Brands Only",desc:"We stock Michelin, Pirelli, Bridgestone, Toyo, Yokohama, and Nitto. No off-brand compromises."}];
export default function WhySection(){
  return(
    <section id="why" style={{background:"#0d0d0d",padding:"100px 0",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",left:"-200px",top:"50%",transform:"translateY(-50%)",width:"600px",height:"600px",background:"radial-gradient(circle,rgba(232,0,29,0.05),transparent 70%)",pointerEvents:"none"}}/>
      <div style={{maxWidth:"1400px",margin:"0 auto",padding:"0 60px"}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"80px",alignItems:"center"}} className="why-grid">
          <div className="reveal-left">
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"2px"}}>
              {[{t:10000,s:"+",l:"Tires Installed"},{t:500,s:"+",l:"Happy Clients"},{t:15,s:"+",l:"Expert Technicians"},{t:8,s:"",l:"Years in Business"}].map(s=><Stat key={s.l} t={s.t} s={s.s} l={s.l}/>)}
            </div>
          </div>
          <div className="reveal-right">
            <span className="section-tag">Why Haven</span>
            <h2 className="section-title" style={{marginBottom:"16px"}}>PRECISION IS<br/>OUR STANDARD</h2>
            <p style={{fontSize:"17px",color:"rgba(240,240,240,0.82)",lineHeight:1.85,maxWidth:"400px",marginBottom:"36px"}}>Every vehicle that rolls into our shop leaves better than it arrived. Not a promise, a proven track record built over 8 years.</p>
            <div style={{display:"flex",flexDirection:"column",gap:"22px"}}>
              {pts.map(p=>(
                <div key={p.title} style={{display:"flex",gap:"16px",alignItems:"flex-start"}}>
                  <div style={{width:"32px",height:"32px",flexShrink:0,border:"1px solid #e8001d",display:"flex",alignItems:"center",justifyContent:"center",marginTop:"2px"}}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#e8001d" strokeWidth="1.8" strokeLinecap="round"><path d="M2 7 L5.5 11 L12 3"/></svg>
                  </div>
                  <div>
                    <div style={{fontFamily:"'Orbitron',sans-serif",fontSize:"14px",fontWeight:700,letterSpacing:"2px",color:"#f0f0f0",marginBottom:"4px",textTransform:"uppercase"}}>{p.title}</div>
                    <p style={{fontSize:"15px",color:"rgba(240,240,240,0.82)",lineHeight:1.75}}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.why-grid{grid-template-columns:1fr!important;gap:50px!important}#why>div{padding:70px 24px!important}}`}</style>
    </section>
  );
}

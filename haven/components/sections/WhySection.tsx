"use client";

const features = [
  {
    num: "01",
    title: "Precision-Certified Technicians",
    text: "Our experts are rigorously trained in modern automotive protection and upgrade systems. Every job is executed to the highest standard — flawless results, every single time.",
  },
  {
    num: "02",
    title: "Industry-Leading Materials Only",
    text: "We work exclusively with premium brands for coatings, films, and electronics. Top-tier inputs mean top-tier outputs — we never cut corners on what touches your vehicle.",
  },
  {
    num: "03",
    title: "Personalised Vehicle Plans",
    text: "Every car gets a customised strategy. We assess your model, usage, and goals to recommend exactly the right services — no unnecessary upsells, no wasted spend.",
  },
  {
    num: "04",
    title: "Transparent, Honest Service",
    text: "Clear inspections, upfront quotes, measurable results. You always know exactly what is being done to your vehicle and why — no guesswork, no surprises.",
  },
];

export default function WhySection() {
  return (
   <section style={{padding:"100px 60px",background:"#080808"}} className="why-section">
      <div style={{maxWidth:"1400px",margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"80px",alignItems:"start"}} className="why-inner">
        <div style={{position:"relative",overflow:"hidden"}}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80"
            alt="Haven Customs Quality"
            style={{width:"100%",height:"600px",objectFit:"cover",filter:"brightness(0.7)"}}
            onError={e=>{(e.target as HTMLImageElement).src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"}}
          />
          <div style={{position:"absolute",inset:0,background:"linear-gradient(135deg,rgba(232,0,29,0.15),transparent)"}}/>
          <div style={{position:"absolute",bottom:"30px",left:"30px",background:"#e8001d",padding:"14px 24px",fontFamily:"'Orbitron',sans-serif",fontSize:"10px",letterSpacing:"3px",textTransform:"uppercase",color:"#fff"}}>
            Haven Customs · Est. 2017
          </div>
        </div>
 

        <div>
          <span style={{display:"inline-flex",alignItems:"center",gap:"10px",fontFamily:"'Orbitron',sans-serif",fontSize:"10px",letterSpacing:"6px",color:"#e8001d",textTransform:"uppercase",marginBottom:"14px"}}>
            <span style={{width:"28px",height:"1px",background:"#e8001d",display:"block"}}/>Why Choose Haven
          </span>
          <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(38px,4vw,60px)",lineHeight:.95,color:"#f0f0f0",marginBottom:"20px"}}>
            BECAUSE EVERY DETAIL <span style={{color:"#e8001d"}}>DESERVES CARE</span> FROM SOMEONE WHO UNDERSTANDS
          </h2>
          <div style={{width:"60px",height:"2px",background:"#e8001d",marginBottom:"32px"}}/>

          <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
            {features.map((f) => (
              <div key={f.num} style={{display:"flex",gap:"20px",alignItems:"flex-start",padding:"24px",background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.07)",transition:"all .3s"}}
                onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(232,0,29,0.3)";(e.currentTarget as HTMLElement).style.background="rgba(232,0,29,0.04)"}}
                onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(255,255,255,0.07)";(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.02)"}}>
                <div style={{fontFamily:"'Orbitron',sans-serif",fontSize:"28px",fontWeight:900,color:"rgba(232,0,29,0.2)",lineHeight:1,flexShrink:0,width:"48px"}}>{f.num}</div>
                <div>
                  <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"20px",letterSpacing:"2px",color:"#f0f0f0",marginBottom:"6px"}}>{f.title}</div>
                  <div style={{fontSize:"13px",color:"rgba(240,240,240,0.5)",lineHeight:1.8}}>{f.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.why-inner{grid-template-columns:1fr!important;gap:40px!important}.why-section{padding:60px 24px!important}}`}</style>
    </section>
  );
}

"use client";
const UNSPLASH="https://images.unsplash.com";

const milestones=[
  {year:"2017",event:"Haven Tire and Wheel founded in a single 2-bay unit with two technicians."},
  {year:"2018",event:"Achieved Michelin Authorized Dealer status after first year of exceptional sales volume."},
  {year:"2019",event:"Expanded to 8 bays and added ceramic coating and window tint services."},
  {year:"2021",event:"Reached 5,000 tire installations. Added Hunter HawkEye Elite alignment system."},
  {year:"2022",event:"Earned Pirelli Preferred Dealer and Bridgestone Gold Partner certifications."},
  {year:"2024",event:"10,000 tires installed milestone. Voted Best Tire Shop by city automotive enthusiast community."},
];
export default function AboutPage(){
  return(
    <main style={{background:"#080808",paddingTop:"100px"}}>
      {/* Hero */}
      <section style={{position:"relative",minHeight:"70vh",display:"flex",alignItems:"center",overflow:"hidden"}}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${UNSPLASH}/photo-1503376780353-7e6692767b70?w=1400&q=80`} alt="Workshop" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",filter:"brightness(0.22) saturate(1.1)"}} onError={e=>{(e.target as HTMLImageElement).style.display="none"}}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(to right,rgba(8,8,8,0.95) 40%,rgba(8,8,8,0.4) 100%)"}}/>
        <div style={{position:"relative",padding:"120px 60px",maxWidth:"700px",zIndex:2}}>
          <span style={{display:"inline-flex",alignItems:"center",gap:"10px",fontFamily:"'Orbitron',sans-serif",fontSize:"13px",letterSpacing:"6px",color:"#e8001d",textTransform:"uppercase",marginBottom:"20px"}}>
            <span style={{width:"28px",height:"1px",background:"#e8001d",display:"block"}}/>Our Story
          </span>
          <h1 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(60px,8vw,100px)",lineHeight:.9,color:"#f0f0f0",letterSpacing:"2px",marginBottom:"28px"}}>BUILT ON<br/><span style={{color:"#e8001d"}}>PASSION</span><br/>AND PRECISION</h1>
          <p style={{fontSize:"19px",color:"rgba(240,240,240,0.88)",lineHeight:1.9,maxWidth:"520px"}}>Haven was founded in 2017 with a single mission: to bring professional-grade tire and wheel service to enthusiast drivers who expect more than the average garage experience.</p>
        </div>
      </section>

      {/* Story */}
      <section style={{padding:"100px 60px",maxWidth:"1400px",margin:"0 auto"}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"80px",alignItems:"center"}} className="about-story">
          <div>
            <span style={{display:"inline-flex",alignItems:"center",gap:"10px",fontFamily:"'Orbitron',sans-serif",fontSize:"13px",letterSpacing:"6px",color:"#e8001d",textTransform:"uppercase",marginBottom:"14px"}}>
              <span style={{width:"28px",height:"1px",background:"#e8001d",display:"block"}}/>Who We Are
            </span>
            <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(38px,4vw,58px)",color:"#f0f0f0",lineHeight:.95,marginBottom:"24px"}}>MORE THAN A TIRE SHOP</h2>
            <div style={{width:"60px",height:"2px",background:"#e8001d",marginBottom:"28px"}}/>
            <p style={{fontSize:"17px",color:"rgba(240,240,240,0.88)",lineHeight:1.9,marginBottom:"20px"}}>We started Haven because we were frustrated. As car enthusiasts ourselves, we kept finding that tire shops treated every vehicle the same, whether it was a grocery-getter or a track-prepped supercar. We knew there had to be a better way.</p>
            <p style={{fontSize:"17px",color:"rgba(240,240,240,0.88)",lineHeight:1.9,marginBottom:"20px"}}>Eight years later, Haven has installed over 10,000 tires, built a team of 15 certified technicians, and earned partner status with every major premium tire brand. We have worked on everything from daily commuters to multi-million-dollar exotics.</p>
            <p style={{fontSize:"17px",color:"rgba(240,240,240,0.88)",lineHeight:1.9}}>Every vehicle gets the same obsessive attention to detail. That is the Haven standard, and we have never compromised it once.</p>
          </div>
          <div style={{position:"relative",overflow:"hidden",minHeight:"500px",background:"#111"}}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${UNSPLASH}/photo-1492144534655-ae79c964c9d7?w=800&q=80`} alt="Premium Car" style={{width:"100%",height:"100%",objectFit:"cover",filter:"brightness(0.65) saturate(1.2)"}} onError={e=>{(e.target as HTMLImageElement).style.display="none"}}/>
            <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(8,8,8,0.6),transparent)"}}/>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{background:"#0d0d0d",padding:"100px 60px",borderTop:"1px solid rgba(255,255,255,0.05)",borderBottom:"1px solid rgba(255,255,255,0.05)"}}>
        <div style={{maxWidth:"1400px",margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:"60px"}}>
            <span style={{display:"inline-flex",alignItems:"center",gap:"10px",justifyContent:"center",fontFamily:"'Orbitron',sans-serif",fontSize:"13px",letterSpacing:"6px",color:"#e8001d",textTransform:"uppercase",marginBottom:"14px"}}>
              <span style={{width:"28px",height:"1px",background:"#e8001d",display:"block"}}/>Our History<span style={{width:"28px",height:"1px",background:"#e8001d",display:"block"}}/>
            </span>
            <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(38px,5vw,64px)",color:"#f0f0f0"}}>THE Haven JOURNEY</h2>
          </div>
          <div style={{position:"relative",paddingLeft:"40px"}}>
            <div style={{position:"absolute",left:"8px",top:0,bottom:0,width:"2px",background:"linear-gradient(to bottom,#e8001d,rgba(232,0,29,0.1))"}}/>
            {milestones.map((m,i)=>(
              <div key={m.year} style={{position:"relative",marginBottom:"44px",paddingLeft:"30px"}}>
                <div style={{position:"absolute",left:"-36px",top:"4px",width:"16px",height:"16px",border:"2px solid #e8001d",background:"#080808",borderRadius:i===milestones.length-1?"50%":"0",display:"flex",alignItems:"center",justifyContent:"center"}}>
                  {i===milestones.length-1 && <div style={{width:"6px",height:"6px",background:"#e8001d",borderRadius:"50%"}}/>}
                </div>
                <div style={{fontFamily:"'Orbitron',sans-serif",fontSize:"14px",fontWeight:700,color:"#e8001d",letterSpacing:"3px",marginBottom:"8px"}}>{m.year}</div>
                <p style={{fontSize:"16px",color:"rgba(240,240,240,0.88)",lineHeight:1.75}}>{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

   
      <style>{`@media(max-width:1100px){.team-grid{grid-template-columns:repeat(2,1fr)!important}}@media(max-width:900px){.about-story{grid-template-columns:1fr!important;gap:40px!important}section{padding-left:24px!important;padding-right:24px!important}}@media(max-width:560px){.team-grid{grid-template-columns:1fr!important}}`}</style>
    </main>
  );
}

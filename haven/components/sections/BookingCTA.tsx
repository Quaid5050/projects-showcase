"use client";
import Link from "next/link";

export default function BookingCTA() {
  return (
    <section style={{position:"relative",overflow:"hidden",padding:"100px 60px",textAlign:"center",background:"#080808"}} className="cta-section">
      <div style={{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(232,0,29,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(232,0,29,0.03) 1px,transparent 1px)",backgroundSize:"48px 48px",pointerEvents:"none"}}/>
      <div style={{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)",width:"600px",height:"300px",background:"radial-gradient(ellipse,rgba(232,0,29,0.08) 0%,transparent 70%)",pointerEvents:"none"}}/>

      <div style={{position:"relative",zIndex:2,maxWidth:"700px",margin:"0 auto"}}>
        <span style={{display:"inline-flex",alignItems:"center",gap:"10px",justifyContent:"center",fontFamily:"'Orbitron',sans-serif",fontSize:"10px",letterSpacing:"6px",color:"#e8001d",textTransform:"uppercase",marginBottom:"14px"}}>
          <span style={{width:"28px",height:"1px",background:"#e8001d",display:"block"}}/>Available 6 Days a Week<span style={{width:"28px",height:"1px",background:"#e8001d",display:"block"}}/>
        </span>
        <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(42px,6vw,80px)",lineHeight:.95,color:"#f0f0f0",marginBottom:"20px"}}>
          GIVE HAVEN CUSTOMS A <span style={{color:"#e8001d"}}>CALL TODAY</span>
        </h2>
        <p style={{fontSize:"15px",color:"rgba(240,240,240,0.5)",lineHeight:1.9,marginBottom:"32px"}}>
          Experiencing any car-related needs? Our team is always ready to guide you — from a quick consultation to a full vehicle transformation.
        </p>
        <a href="tel:+19058030000" style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(28px,4vw,48px)",color:"#e8001d",letterSpacing:"4px",display:"block",marginBottom:"36px",textDecoration:"none"}}>
          +1 (416) 431-5255
        </a>
        <div style={{display:"flex",gap:"14px",flexWrap:"wrap",justifyContent:"center"}}>
          <Link href="/contact" style={{background:"#e8001d",color:"#fff",padding:"15px 38px",fontFamily:"'Rajdhani',sans-serif",fontSize:"13px",fontWeight:700,letterSpacing:"3px",textTransform:"uppercase",textDecoration:"none",display:"inline-block",transition:"all .3s",clipPath:"polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%)"}}
            onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.background="#ff0025";(e.currentTarget as HTMLElement).style.boxShadow="0 0 40px rgba(232,0,29,0.7)"}}
            onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.background="#e8001d";(e.currentTarget as HTMLElement).style.boxShadow="none"}}>
            Book An Appointment
          </Link>
          <Link href="/services" style={{background:"transparent",color:"#f0f0f0",padding:"15px 38px",border:"1px solid rgba(240,240,240,0.22)",fontFamily:"'Rajdhani',sans-serif",fontSize:"13px",fontWeight:700,letterSpacing:"3px",textTransform:"uppercase",textDecoration:"none",display:"inline-block",transition:"all .3s"}}
            onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor="#e8001d";(e.currentTarget as HTMLElement).style.color="#e8001d"}}
            onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(240,240,240,0.22)";(e.currentTarget as HTMLElement).style.color="#f0f0f0"}}>
            View All Services
          </Link>
        </div>
      </div>
      <style>{`@media(max-width:768px){.cta-section{padding:60px 24px!important}}`}</style>
    </section>
  );
}

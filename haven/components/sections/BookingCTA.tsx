"use client";
import Link from "next/link";
export default function BookingCTA(){
  return(
    <section style={{background:"#080808",padding:"130px 60px",textAlign:"center",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",top:0,left:0,right:0,height:"1px",background:"linear-gradient(90deg,transparent,#e8001d 30%,#e8001d 70%,transparent)"}}/>
      <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:"800px",height:"400px",background:"radial-gradient(ellipse,rgba(232,0,29,0.08),transparent 70%)",pointerEvents:"none"}}/>
      <div style={{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(232,0,29,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(232,0,29,0.02) 1px,transparent 1px)",backgroundSize:"60px 60px",pointerEvents:"none"}}/>
      <div style={{position:"relative",zIndex:2,maxWidth:"700px",margin:"0 auto"}}>
        <span className="section-tag reveal" style={{justifyContent:"center"}}>Ready to Upgrade</span>
        <h2 className="reveal" style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(50px,7vw,90px)",lineHeight:.92,letterSpacing:"2px",color:"#f0f0f0",marginBottom:"20px"}}>
          BOOK YOUR<br/><span style={{color:"#e8001d",textShadow:"0 0 60px rgba(232,0,29,0.5)"}}>SERVICE</span><br/>TODAY
        </h2>
        <p className="reveal" style={{fontSize:"17px",letterSpacing:"2px",color:"rgba(240,240,240,0.82)",marginBottom:"50px",lineHeight:1.8}}>Same-week appointments available. No waiting around.<br/>Call us or book online and we will handle the rest.</p>
        <div className="reveal" style={{display:"flex",gap:"16px",justifyContent:"center",flexWrap:"wrap"}}>
          <Link href="/contact" className="clip-btn" data-hover style={{display:"inline-flex",alignItems:"center",gap:"10px",background:"#e8001d",color:"white",padding:"18px 50px",fontFamily:"'Orbitron',sans-serif",fontSize:"14px",fontWeight:700,letterSpacing:"4px",textTransform:"uppercase",textDecoration:"none",transition:"all .4s"}}
          onMouseEnter={e=>{e.currentTarget.style.background="#ff0025";e.currentTarget.style.boxShadow="0 0 60px rgba(232,0,29,0.65),0 0 120px rgba(232,0,29,0.3)";e.currentTarget.style.transform="translateY(-3px) scale(1.02)"}}
          onMouseLeave={e=>{e.currentTarget.style.background="#e8001d";e.currentTarget.style.boxShadow="none";e.currentTarget.style.transform="none"}}>
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round"><path d="M3 3h3l1.5 4-2 1.5a11 11 0 0 0 4 4L11 11l4 1.5V16a2 2 0 0 1-2 2C6.5 18 0 11.5 0 5a2 2 0 0 1 2-2z"/></svg>
            Book Appointment
          </Link>
          <Link href="/services" className="clip-btn" data-hover style={{display:"inline-flex",alignItems:"center",gap:"10px",background:"transparent",color:"#f0f0f0",padding:"18px 50px",border:"1px solid rgba(240,240,240,0.55)",fontFamily:"'Orbitron',sans-serif",fontSize:"14px",fontWeight:700,letterSpacing:"4px",textTransform:"uppercase",textDecoration:"none",transition:"all .3s"}}
          onMouseEnter={e=>{e.currentTarget.style.borderColor="#e8001d";e.currentTarget.style.color="#e8001d";e.currentTarget.style.transform="translateY(-3px)"}}
          onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(240,240,240,0.55)";e.currentTarget.style.color="#f0f0f0";e.currentTarget.style.transform="none"}}>View Services</Link>
        </div>
        <div className="reveal" style={{display:"flex",gap:"44px",justifyContent:"center",marginTop:"56px",flexWrap:"wrap"}}>
          {[{l:"Phone",v:"(416) 431-5255"},{l:"Hours",v:"Mon to Sat  8AM to 6PM"},{l:"Location",v:"124 Production Dr, Scarborough"}].map(c=>(
            <div key={c.l} style={{textAlign:"center"}}>
              <div style={{fontFamily:"'Orbitron',sans-serif",fontSize:"12px",letterSpacing:"4px",color:"#e8001d",textTransform:"uppercase",marginBottom:"4px"}}>{c.l}</div>
              <div style={{fontSize:"15px",color:"rgba(240,240,240,0.88)",letterSpacing:"1px"}}>{c.v}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{position:"absolute",bottom:0,left:0,right:0,height:"3px",background:"linear-gradient(90deg,transparent,#e8001d 30%,#e8001d 70%,transparent)"}}/>
      <style>{`@media(max-width:768px){section{padding:90px 24px!important}}`}</style>
    </section>
  );
}

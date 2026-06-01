"use client";

const UNSPLASH="https://images.unsplash.com";
const services=[
  {num:"01",title:"Tire Installation",sub:"Precision Mounting for Every Vehicle",img:`${UNSPLASH}/photo-1558618666-fcd25c85cd64?w=800&q=80`,desc:"Our certified technicians use state-of-the-art mounting and balancing equipment to ensure every tire is fitted to OEM torque specifications. We handle everything from economy commuters to exotic supercars, with the same obsessive attention to detail on every single job. Balancing weights are precision-matched per wheel, and every vehicle leaves with a final road-noise check.",features:["Computer spin balancing on all axles","OEM torque spec compliance","Road force balancing available","Valve stem inspection and replacement","TPMS reset and calibration"]},
  {num:"02",title:"Wheel Alignment",sub:"Computer-Aided 4-Wheel Precision",img:`${UNSPLASH}/photo-1492144534655-ae79c964c9d7?w=800&q=80`,desc:"Misalignment is the single biggest cause of premature tire wear and compromised handling. Our Hunter alignment system delivers sub-millimeter accuracy on all four wheels. We check and adjust caster, camber, and toe to manufacturer specifications, then provide a printed before-and-after report so you see exactly what changed.",features:["Hunter 4-wheel alignment system","Camber, caster, and toe adjustment","Printed alignment report included","Steering angle sensor reset","Suspension inspection included"]},
  {num:"03",title:"Tire Balancing",sub:"Smooth Ride at Any Speed",img:`${UNSPLASH}/photo-1619767886558-efdc259cde1a?w=800&q=80`,desc:"Vibration at speed is not just uncomfortable, it accelerates tire wear and stresses wheel bearings. We perform dynamic spin balancing on every wheel, using precision stick-on or clip-on weights for the cleanest result. Road force balancing is available for vehicles with persistent vibration complaints.",features:["Dynamic spin balancing","Road force balancing option","Precision stick-on weights","Wheel runout measurement","Free re-check after 500km"]},
  {num:"04",title:"Seasonal Tire Change",sub:"Summer to Winter and Back Again",img:`https://images.unsplash.com/photo-1625047509248-ec889cbff17f?q=80`,desc:"Canadian seasons demand it. We make the seasonal swap fast, thorough, and worry-free. Every changeover includes torque check, inflation set to temperature-corrected specs, and a visual brake inspection while your wheels are off. Climate-controlled tire storage available for year-round clients.",features:["Correct torque to OEM specs","Temperature-corrected inflation","Brake and rotor visual inspection","Tire tread depth measurement","Climate-controlled storage available"]},
  {num:"05",title:"Performance Wheels",sub:"Custom Fitment for Every Build",img:`${UNSPLASH}/photo-1503376780353-7e6692767b70?w=800&q=80`,desc:"The right wheel transforms a car. We carry an extensive catalogue of forged, flow-formed, and cast alloys from top brands including HRE, Vossen, BBS, Enkei, and OZ Racing. Our fitment specialists calculate exact offsets, backspacing, and hub bore requirements for a flush, safe, and properly-clearanced fitment on any vehicle.",features:["HRE, Vossen, BBS, Enkei, OZ Racing","Staggered and flush fitment setups","Hub-centric spacer and adapter kits","Fender rolling available","Full concierge ordering service"]},
  {num:"06",title:"Tire Repair",sub:"Plugs, Patches, and Pressure",img:`https://images.unsplash.com/photo-1645445522156-9ac06bc7a767?q=80`,desc:"A repairable puncture should never cost you a tire. We assess every puncture to ensure it falls within repairable limits, then perform a proper internal patch repair, not just a plug. Valve stem replacements, bead sealing, and slow-leak diagnosis are all part of our repair service.",features:["Internal patch repair, not just plug","Puncture repairable zone assessment","Valve stem replacement","Bead sealing for alloy corrosion","Nitrogen refill available"]},
  {num:"07",title:"Ceramic Coating",sub:"Paint Protection That Lasts",img:`${UNSPLASH}/photo-1580273916550-e323be2ae537?w=800&q=80`,desc:"Professional-grade nano-ceramic coatings bond to your paintwork at a molecular level, creating a semi-permanent layer of protection against UV degradation, oxidation, bird droppings, water spots, and light scratches. We prep every panel to perfection before application, and cure the coating under controlled conditions for maximum durability.",features:["9H hardness nano-ceramic formula","Full paint decontamination prep","Wheel face and brake caliper coating","5-year protection warranty","Graphene-infused upgrade available"]},
  {num:"08",title:"Window Tint",sub:"Privacy, UV Protection, Clean Aesthetics",img:`${UNSPLASH}/photo-1616422285623-13ff0162193c?w=800&q=80`,desc:"Our ceramic and carbon window films block up to 99% of UV radiation and dramatically reduce cabin heat without compromising visibility. We cut every film on-site using plotted templates for perfect fit, and apply by hand in a dust-controlled environment. Legal VLT levels matched for every province.",features:["Ceramic and carbon film options","99% UV block on all films","Heat rejection up to 65%","Plotted template precision cutting","Lifetime delamination warranty"]},
];

export default function ServicesPage(){
  return(
    <main style={{background:"#080808",paddingTop:"100px"}}>
      {/* Hero */}
      <section style={{padding:"80px 60px 100px",position:"relative",overflow:"hidden",borderBottom:"1px solid rgba(255,255,255,0.05)"}}>
        <div style={{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(232,0,29,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(232,0,29,0.025) 1px,transparent 1px)",backgroundSize:"64px 64px"}}/>
        <div style={{position:"absolute",right:"-10%",top:"50%",transform:"translateY(-50%)",width:"600px",height:"600px",background:"radial-gradient(circle,rgba(232,0,29,0.08) 0%,transparent 70%)",pointerEvents:"none"}}/>
        <div style={{position:"relative",maxWidth:"1400px",margin:"0 auto"}}>
          <span style={{display:"inline-flex",alignItems:"center",gap:"10px",fontFamily:"'Orbitron',sans-serif",fontSize:"13px",letterSpacing:"6px",color:"#e8001d",textTransform:"uppercase",marginBottom:"20px"}}>
            <span style={{width:"28px",height:"1px",background:"#e8001d",display:"block"}}/>What We Do
          </span>
          <h1 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(60px,8vw,110px)",lineHeight:.9,color:"#f0f0f0",letterSpacing:"2px",marginBottom:"24px"}}>
            OUR<br/><span style={{color:"#e8001d"}}>SERVICES</span>
          </h1>
          <p style={{fontSize:"18px",color:"rgba(240,240,240,0.88)",letterSpacing:"1.5px",maxWidth:"500px",lineHeight:1.85}}>
            Eight premium services. One obsession: making sure every vehicle that leaves our shop is better than when it arrived.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section style={{padding:"0 60px 120px",maxWidth:"1400px",margin:"0 auto"}}>
        {services.map((s,idx)=>(
          <div key={s.num} style={{display:"grid",gridTemplateColumns:idx%2===0?"1fr 1fr":"1fr 1fr",gap:"0",borderBottom:"1px solid rgba(255,255,255,0.05)",padding:"80px 0"}} className="svc-row">
            {/* Image */}
            <div style={{order:idx%2===0?1:2,position:"relative",overflow:"hidden",minHeight:"420px",background:"#111"}} className="svc-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.img} alt={s.title} style={{width:"100%",height:"100%",objectFit:"cover",display:"block",filter:"brightness(0.6) saturate(1.2)",transition:"transform .65s ease,filter .4s"}} className="img-zoom"
              onError={e=>{(e.target as HTMLImageElement).style.display="none"}}
              />
              <div className="img-overlay"/>
              <div style={{position:"absolute",top:"24px",left:"24px",fontFamily:"'Orbitron',sans-serif",fontSize:"42px",fontWeight:900,color:"rgba(232,0,29,0.15)",letterSpacing:"2px"}}>{s.num}</div>
            </div>
            {/* Content */}
            <div style={{order:idx%2===0?2:1,background:"#0d0d0d",padding:"60px",display:"flex",flexDirection:"column",justifyContent:"center"}} className="svc-content">
              <span style={{fontFamily:"'Orbitron',sans-serif",fontSize:"13px",letterSpacing:"5px",color:"#e8001d",textTransform:"uppercase",marginBottom:"12px"}}>{s.sub}</span>
              <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(36px,3.5vw,52px)",color:"#f0f0f0",marginBottom:"20px",lineHeight:.95}}>{s.title}</h2>
              <div style={{width:"60px",height:"2px",background:"#e8001d",marginBottom:"24px"}}/>
              <p style={{fontSize:"16px",color:"rgba(240,240,240,0.88)",lineHeight:1.85,marginBottom:"28px"}}>{s.desc}</p>
              <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:"10px"}}>
                {s.features.map(f=>(
                  <li key={f} style={{display:"flex",alignItems:"center",gap:"10px",fontSize:"15px",color:"rgba(240,240,240,0.88)"}}>
                    <span style={{width:"20px",height:"20px",border:"1px solid #e8001d",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="#e8001d" strokeWidth="1.5"><path d="M2 5 L4 7 L8 3"/></svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
      <style>{`@media(max-width:900px){.svc-row{grid-template-columns:1fr!important}.svc-img{order:1!important;min-height:260px!important}.svc-content{order:2!important;padding:36px 24px!important}section{padding-left:24px!important;padding-right:24px!important}}`}</style>
    </main>
  );
}

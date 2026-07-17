"use client";
import { useState } from "react";
import type { Metadata } from "next";

const UNSPLASH="https://images.unsplash.com";

const brands=[
  {name:"MICHELIN",tagline:"A Better Way Forward",color:"#003189",since:"1889",country:"France",tier:"Platinum Partner",img:`${UNSPLASH}/photo-1558618666-fcd25c85cd64?w=700&q=80`,desc:"The world's largest tire manufacturer and consistent top performer in independent tests. Michelin's silica compound technology delivers class-leading wet grip and fuel efficiency simultaneously. We stock their full performance lineup including the iconic Pilot Sport series.",lines:["Pilot Sport 5","Pilot Sport Cup 2","CrossClimate 2","Primacy 4","Latitude Sport 3"],best:"High-performance road and track use"},
  {name:"PIRELLI",tagline:"Power is Nothing Without Control",color:"#f5a623",since:"1872",country:"Italy",tier:"Platinum Partner",img:`${UNSPLASH}/photo-1494976388531-d1058494cdd8?w=700&q=80`,desc:"The official F1 tire supplier and the badge of choice for Ferrari, Lamborghini, and McLaren OEM fitments. Pirelli's P Zero family defines the ultra-high-performance segment, combining extreme grip with surprisingly liveable daily manners.",lines:["P Zero","P Zero Corsa","Cinturato P7","Scorpion Verde","Winter Sottozero 3"],best:"Exotic and ultra-luxury vehicles"},
  {name:"BRIDGESTONE",tagline:"Your Journey Our Passion",color:"#e8001d",since:"1931",country:"Japan",tier:"Gold Partner",img:`${UNSPLASH}/photo-1619767886558-efdc259cde1a?w=700&q=80`,desc:"Japan's largest tire maker brings legendary reliability and impressive performance to the table. The Potenza line has been dominating the high-performance segment for decades, and the new Potenza Sport is among the sharpest performance street tires available today.",lines:["Potenza Sport","Potenza RE004","Turanza T005","Blizzak WS90","Alenza Sport"],best:"Balanced performance and durability"},
  {name:"TOYO TIRES",tagline:"Get There",color:"#1a5fd4",since:"1945",country:"Japan",tier:"Gold Partner",img:`${UNSPLASH}/photo-1503376780353-7e6692767b70?w=700&q=80`,desc:"Toyo has carved a strong niche in the performance and off-road space, with the Proxes family competing directly with European premium tires. The Proxes Sport is a standout for aggressive drivers who want real feedback from their tires.",lines:["Proxes Sport","Proxes R888R","Open Country A/T III","Celsius Sport","Proxes CF2"],best:"Performance and enthusiast drivers"},
  {name:"YOKOHAMA",tagline:"The Hot Brand on Ice and Asphalt",color:"#f5a623",since:"1917",country:"Japan",tier:"Silver Partner",img:`${UNSPLASH}/photo-1449824913935-59a10b8d2000?w=700&q=80`,desc:"Yokohama punches above its weight with the ADVAN line, a direct OEM supplier to Nissan, Subaru, and numerous European brands. The ADVAN Sport V107 is praised as one of the finest balanced performance tires in its class.",lines:["ADVAN Sport V107","ADVAN Neova AD09","BluEarth-GT AE51","Geolandar A/T G015","iceGUARD iG53"],best:"Sports sedans and all-season performance"},
  {name:"NITTO",tagline:"Engineered to Exceed",color:"#2c9e4a",since:"1949",country:"Japan",tier:"Silver Partner",img:`${UNSPLASH}/photo-1616422285623-13ff0162193c?w=700&q=80`,desc:"Nitto occupies a unique space as both a performance and style tire brand. Their NT555 G2 is genuinely competitive with European premium brands at a value price point, while the Ridge Grappler has become a staple in the truck and SUV customization scene.",lines:["NT555 G2","NT05","Ridge Grappler","Terra Grappler G2","NT420V"],best:"Trucks, SUVs, and value performance"},
];

export default function BrandsPage(){
  const [active,setActive]=useState(0);
  const b=brands[active];
  return(
    <main style={{background:"#080808",paddingTop:"100px"}}>
      {/* Hero */}
     {/* Hero */}
<section style={{borderBottom:"1px solid rgba(255,255,255,0.05)",position:"relative",overflow:"hidden",minHeight:"420px",display:"flex",alignItems:"center"}}>
  {/* eslint-disable-next-line @next/next/no-img-element */}
  <img src={`${UNSPLASH}/photo-1558618666-fcd25c85cd64?w=1400&q=80`} alt="Premium Brands"
    style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",filter:"brightness(0.18) saturate(1.2)"}}
    onError={e=>{(e.target as HTMLImageElement).style.display="none"}}
  />
  <div style={{position:"absolute",inset:0,background:"linear-gradient(to right,rgba(8,8,8,0.95) 40%,rgba(8,8,8,0.4) 100%)"}}/>
  <div style={{position:"absolute",top:0,left:0,right:0,height:"2px",background:"linear-gradient(90deg,transparent,#e8001d 30%,#e8001d 70%,transparent)"}}/>
  <div style={{maxWidth:"1400px",margin:"0 auto",position:"relative",padding:"80px 60px",width:"100%"}}>
          <span style={{display:"inline-flex",alignItems:"center",gap:"10px",fontFamily:"'Orbitron',sans-serif",fontSize:"13px",letterSpacing:"6px",color:"#e8001d",textTransform:"uppercase",marginBottom:"20px"}}>
            <span style={{width:"28px",height:"1px",background:"#e8001d",display:"block"}}/>Our Partners
          </span>
          <h1 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(60px,8vw,110px)",lineHeight:.9,color:"#f0f0f0",letterSpacing:"2px",marginBottom:"24px"}}>
            PREMIUM<br/><span style={{color:"#e8001d"}}>BRANDS</span>
          </h1>
          <p style={{fontSize:"18px",color:"rgba(240,240,240,0.88)",letterSpacing:"1.5px",maxWidth:"500px",lineHeight:1.85}}>
            We partner exclusively with the world's top tire manufacturers. Every brand earns its place through proven performance, safety, and reliability.
          </p>
        </div>
      </section>

      {/* Brand selector + detail */}
      <section style={{padding:"80px 60px",maxWidth:"1400px",margin:"0 auto"}}>
        {/* Selector tabs */}
        <div style={{display:"flex",gap:"2px",marginBottom:"60px",flexWrap:"wrap"}} className="brand-tabs">
          {brands.map((br,i)=>(
            <button key={br.name} onClick={()=>setActive(i)} data-hover style={{
              padding:"14px 28px",fontFamily:"'Orbitron',sans-serif",fontSize:"14px",fontWeight:700,letterSpacing:"3px",textTransform:"uppercase",border:"none",cursor:"pointer",transition:"all .3s",
              background:i===active?"#e8001d":"rgba(255,255,255,0.04)",
              color:i===active?"white":"rgba(240,240,240,0.88)",
            }}
            onMouseEnter={e=>{if(i!==active){e.currentTarget.style.background="rgba(255,255,255,0.08)";e.currentTarget.style.color="#f0f0f0"}}}
            onMouseLeave={e=>{if(i!==active){e.currentTarget.style.background="rgba(255,255,255,0.04)";e.currentTarget.style.color="rgba(240,240,240,0.88)"}}}
            >{br.name}</button>
          ))}
        </div>

        {/* Brand detail card */}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"2px"}} className="brand-detail">
          {/* Image */}
          <div style={{position:"relative",overflow:"hidden",minHeight:"500px",background:"#111"}}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={b.img} alt={b.name} key={b.name} style={{width:"100%",height:"100%",objectFit:"cover",filter:"brightness(0.55) saturate(1.3)",animation:"fadeIn .5s ease"}}
            onError={e=>{(e.target as HTMLImageElement).style.display="none"}}/>
            <div className="img-overlay"/>
            <div style={{position:"absolute",bottom:"36px",left:"36px"}}>
              <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"64px",color:"#f0f0f0",lineHeight:.9,letterSpacing:"2px"}}>{b.name}</div>
              <div style={{fontFamily:"'Orbitron',sans-serif",fontSize:"14px",color:b.color,letterSpacing:"3px",marginTop:"6px"}}>{b.tagline}</div>
            </div>
            <div style={{position:"absolute",top:"28px",right:"28px",background:"rgba(232,0,29,0.15)",border:"1px solid rgba(232,0,29,0.4)",padding:"6px 16px",fontFamily:"'Orbitron',sans-serif",fontSize:"12px",letterSpacing:"3px",color:"#e8001d"}}>{b.tier}</div>
          </div>

          {/* Content */}
          <div style={{background:"#0d0d0d",padding:"60px",display:"flex",flexDirection:"column",justifyContent:"center"}}>
            <div style={{display:"flex",gap:"36px",marginBottom:"32px"}}>
              <div style={{borderLeft:"2px solid #e8001d",paddingLeft:"12px"}}>
                <div style={{fontFamily:"'Orbitron',sans-serif",fontSize:"12px",color:"rgba(240,240,240,0.72)",letterSpacing:"3px",textTransform:"uppercase",marginBottom:"4px"}}>Founded</div>
                <div style={{fontFamily:"'Orbitron',sans-serif",fontSize:"20px",color:"#f0f0f0"}}>{b.since}</div>
              </div>
              <div style={{borderLeft:"2px solid #e8001d",paddingLeft:"12px"}}>
                <div style={{fontFamily:"'Orbitron',sans-serif",fontSize:"12px",color:"rgba(240,240,240,0.72)",letterSpacing:"3px",textTransform:"uppercase",marginBottom:"4px"}}>Origin</div>
                <div style={{fontFamily:"'Orbitron',sans-serif",fontSize:"20px",color:"#f0f0f0"}}>{b.country}</div>
              </div>
            </div>
            <div style={{width:"60px",height:"2px",background:"#e8001d",marginBottom:"24px"}}/>
            <p style={{fontSize:"16px",color:"rgba(240,240,240,0.88)",lineHeight:1.85,marginBottom:"32px"}}>{b.desc}</p>
            <div style={{fontFamily:"'Orbitron',sans-serif",fontSize:"13px",letterSpacing:"4px",color:"#e8001d",marginBottom:"14px",textTransform:"uppercase"}}>Lines We Stock</div>
            <div style={{display:"flex",flexWrap:"wrap",gap:"8px",marginBottom:"28px"}}>
              {b.lines.map(l=>(
                <span key={l} style={{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.1)",padding:"6px 14px",fontSize:"14px",color:"rgba(240,240,240,0.88)",letterSpacing:"1px"}}>{l}</span>
              ))}
            </div>
            <div style={{background:"rgba(232,0,29,0.08)",border:"1px solid rgba(232,0,29,0.2)",padding:"14px 20px",display:"flex",gap:"10px",alignItems:"center"}}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#e8001d" strokeWidth="1.5"><circle cx="7" cy="7" r="6"/><path d="M7 4 L7 7 L10 8"/></svg>
              <span style={{fontSize:"14px",color:"rgba(240,240,240,0.88)",letterSpacing:"1px"}}><span style={{color:"#e8001d"}}>Best For:</span> {b.best}</span>
            </div>
          </div>
        </div>
      </section>

      {/* All brands grid */}
      <section style={{background:"#0d0d0d",padding:"80px 60px",borderTop:"1px solid rgba(255,255,255,0.05)"}}>
        <div style={{maxWidth:"1400px",margin:"0 auto"}}>
          <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"48px",color:"#f0f0f0",marginBottom:"50px",textAlign:"center"}}>FULL LINEUP OVERVIEW</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"2px"}} className="brands-all">
            {brands.map((br,i)=>(
              <button key={br.name} onClick={()=>setActive(i)} data-hover style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)",padding:"36px 28px",textAlign:"left",cursor:"pointer",transition:"all .3s",display:"block",width:"100%"}}
              onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,255,255,0.07)";e.currentTarget.style.borderColor="rgba(232,0,29,0.3)"}}
              onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.03)";e.currentTarget.style.borderColor="rgba(255,255,255,0.06)"}}>
                <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"32px",color:"#f0f0f0",letterSpacing:"2px",marginBottom:"6px"}}>{br.name}</div>
                <div style={{fontFamily:"'Orbitron',sans-serif",fontSize:"12px",letterSpacing:"3px",color:br.color,textTransform:"uppercase",marginBottom:"14px"}}>{br.tier}</div>
                <p style={{fontSize:"14px",color:"rgba(240,240,240,0.82)",lineHeight:1.7}}>{br.desc.substring(0,100)}...</p>
              </button>
            ))}
          </div>
        </div>
      </section>
      <style>{`@media(max-width:900px){.brand-detail{grid-template-columns:1fr!important}.brands-all{grid-template-columns:1fr 1fr!important}.brand-tabs button{padding:10px 16px!important;font-size:9px!important}section{padding-left:24px!important;padding-right:24px!important}}@media(max-width:560px){.brands-all{grid-template-columns:1fr!important}}`}</style>
    </main>
  );
}

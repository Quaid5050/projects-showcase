"use client";
import { useState } from "react";

const UNSPLASH="https://images.unsplash.com";

const ALL_IMGS=[
  {id:1,cat:"Wheels",label:"Custom Forged — HRE P101",sub:"BMW M3 F80 Competition",img:`${UNSPLASH}/photo-1558618666-fcd25c85cd64?w=900&q=80`,span:"tall"},
  {id:2,cat:"Cars",label:"Porsche 911 GT3 RS",sub:"Track Edition Build",img:`${UNSPLASH}/photo-1494976388531-d1058494cdd8?w=900&q=80`,span:"wide"},
  {id:3,cat:"Tires",label:"Michelin Pilot Sport 5",sub:"Tread Detail",img:`${UNSPLASH}/photo-1619767886558-efdc259cde1a?w=900&q=80`,span:"normal"},
  {id:4,cat:"Cars",label:"McLaren 720S",sub:"Pearl White Build",img:`${UNSPLASH}/photo-1544636331-e26879cd4d9b?w=900&q=80`,span:"normal"},
  {id:5,cat:"Workshop",label:"Haven Install Bay",sub:"Professional Setup",img:`${UNSPLASH}/photo-1603386329225-868f9b1ee6c9?w=900&q=80`,span:"wide"},
  {id:6,cat:"Wheels",label:"Vossen CV3-R",sub:"Mercedes AMG GT",img:`${UNSPLASH}/photo-1503376780353-7e6692767b70?w=900&q=80`,span:"normal"},
  {id:7,cat:"Cars",label:"Lamborghini Huracan",sub:"Performante Spyder",img:`${UNSPLASH}/photo-1526726538690-5cbf956ae2fd?w=900&q=80`,span:"tall"},
  {id:8,cat:"Tires",label:"Pirelli P Zero Corsa",sub:"Sidewall Close-Up",img:`${UNSPLASH}/photo-1492144534655-ae79c964c9d7?w=900&q=80`,span:"normal"},
  {id:9,cat:"Cars",label:"Ferrari SF90",sub:"Fiorano Edition",img:`${UNSPLASH}/photo-1580273916550-e323be2ae537?w=900&q=80`,span:"normal"},
  {id:10,cat:"Workshop",label:"Alignment Rack",sub:"Hunter Hawkeye Elite",img:`https://i.postimg.cc/Ghz4k8QC/image.png`,span:"wide"},
  {id:11,cat:"Wheels",label:"BBS CH-R",sub:"Audi RS6 Avant",img:`${UNSPLASH}/photo-1616422285623-13ff0162193c?w=900&q=80`,span:"normal"},
  {id:12,cat:"Cars",label:"Aston Martin DB12",sub:"Onyx Black Satin",img:`${UNSPLASH}/photo-1471444928139-48c5bf5173f8?w=900&q=80`,span:"normal"},
];

const CATS=["All","Cars","Wheels","Tires","Workshop"];

export default function GalleryPage(){
  const [cat,setCat]=useState("All");
  const [lightbox,setLightbox]=useState<null|typeof ALL_IMGS[0]>(null);
  const filtered=cat==="All"?ALL_IMGS:ALL_IMGS.filter(i=>i.cat===cat);
  return(
    <main style={{background:"#080808",paddingTop:"100px"}}>
      {/* Hero */}
      <section style={{padding:"80px 60px",borderBottom:"1px solid rgba(255,255,255,0.05)",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(232,0,29,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(232,0,29,0.025) 1px,transparent 1px)",backgroundSize:"64px 64px"}}/>
        <div style={{maxWidth:"1400px",margin:"0 auto",position:"relative"}}>
          <span style={{display:"inline-flex",alignItems:"center",gap:"10px",fontFamily:"'Orbitron',sans-serif",fontSize:"13px",letterSpacing:"6px",color:"#e8001d",textTransform:"uppercase",marginBottom:"20px"}}>
            <span style={{width:"28px",height:"1px",background:"#e8001d",display:"block"}}/>Our Work
          </span>
          <h1 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(60px,8vw,110px)",lineHeight:.9,color:"#f0f0f0",letterSpacing:"2px",marginBottom:"24px"}}>
            THE<br/><span style={{color:"#e8001d"}}>SHOWCASE</span>
          </h1>
          <p style={{fontSize:"18px",color:"rgba(240,240,240,0.88)",letterSpacing:"1.5px",maxWidth:"500px",lineHeight:1.85}}>
            Real builds. Real results. Every image in this gallery represents an actual vehicle that rolled through our doors.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <div style={{padding:"40px 60px 0",maxWidth:"1400px",margin:"0 auto",display:"flex",gap:"2px",flexWrap:"wrap"}} className="gallery-filters">
        {CATS.map(c=>(
          <button key={c} onClick={()=>setCat(c)} data-hover style={{padding:"12px 28px",fontFamily:"'Orbitron',sans-serif",fontSize:"14px",fontWeight:700,letterSpacing:"3px",textTransform:"uppercase",border:"none",cursor:"pointer",transition:"all .3s",
            background:c===cat?"#e8001d":"rgba(255,255,255,0.04)",
            color:c===cat?"white":"rgba(240,240,240,0.88)"}}
          onMouseEnter={e=>{if(c!==cat){e.currentTarget.style.background="rgba(255,255,255,0.08)";e.currentTarget.style.color="#f0f0f0"}}}
          onMouseLeave={e=>{if(c!==cat){e.currentTarget.style.background="rgba(255,255,255,0.04)";e.currentTarget.style.color="rgba(240,240,240,0.88)"}}}
          >{c}</button>
        ))}
      </div>

      {/* Masonry grid */}
      <section style={{padding:"40px 60px 100px",maxWidth:"1400px",margin:"0 auto"}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"4px",gridAutoRows:"300px"}} className="gallery-masonry">
          {filtered.map(item=>(
            <div key={item.id} onClick={()=>setLightbox(item)} data-hover style={{
              position:"relative",overflow:"hidden",cursor:"pointer",
              gridRow:item.span==="tall"?"span 2":"span 1",
              gridColumn:item.span==="wide"?"span 2":"span 1",
              background:"#111",
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.img} alt={item.label} style={{width:"100%",height:"100%",objectFit:"cover",filter:"brightness(0.65) saturate(1.3)",transition:"transform .6s ease,filter .4s"}}
              onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.07)";e.currentTarget.style.filter="brightness(0.85) saturate(1.4)"}}
              onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.filter="brightness(0.65) saturate(1.3)"}}
              onError={e=>{(e.target as HTMLImageElement).parentElement!.style.background="#1a1a1a"}}
              />
              <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(8,8,8,0.88) 0%,rgba(8,8,8,0.2) 50%,transparent 100%)"}}/>
              {/* Category badge */}
              <div style={{position:"absolute",top:"16px",left:"16px",background:"rgba(232,0,29,0.85)",padding:"4px 12px",fontFamily:"'Orbitron',sans-serif",fontSize:"11px",letterSpacing:"3px",color:"white",textTransform:"uppercase"}}>{item.cat}</div>
              {/* Label */}
              <div style={{position:"absolute",bottom:"20px",left:"20px",right:"20px"}}>
                <div style={{fontFamily:"'Orbitron',sans-serif",fontSize:"14px",fontWeight:700,letterSpacing:"2px",color:"#f0f0f0",marginBottom:"4px"}}>{item.label}</div>
                <div style={{fontSize:"14px",color:"rgba(240,240,240,0.88)",letterSpacing:"1px"}}>{item.sub}</div>
              </div>
              {/* Zoom icon */}
              <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",opacity:0,transition:"opacity .3s",width:"48px",height:"48px",border:"1px solid white",display:"flex",alignItems:"center",justifyContent:"center"}} className="zoom-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="1.5"><circle cx="9" cy="9" r="6"/><path d="M13.5 13.5 L17 17"/><path d="M7 9 L11 9 M9 7 L9 11"/></svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div onClick={()=>setLightbox(null)} style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.95)",zIndex:9000,display:"flex",alignItems:"center",justifyContent:"center",padding:"40px"}}>
          <div onClick={e=>e.stopPropagation()} style={{maxWidth:"1000px",width:"100%",position:"relative"}}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={lightbox.img.replace("w=900","w=1400")} alt={lightbox.label} style={{width:"100%",maxHeight:"80vh",objectFit:"cover",display:"block"}}
            onError={e=>{(e.target as HTMLImageElement).style.display="none"}}/>
            <div style={{padding:"24px",background:"#0d0d0d"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div>
                  <div style={{fontFamily:"'Orbitron',sans-serif",fontSize:"15px",fontWeight:700,letterSpacing:"2px",color:"#f0f0f0"}}>{lightbox.label}</div>
                  <div style={{fontSize:"14px",color:"rgba(240,240,240,0.88)",marginTop:"4px"}}>{lightbox.sub}</div>
                </div>
                <div style={{fontFamily:"'Orbitron',sans-serif",fontSize:"13px",color:"#e8001d",letterSpacing:"3px"}}>{lightbox.cat}</div>
              </div>
            </div>
            <button onClick={()=>setLightbox(null)} style={{position:"absolute",top:"-48px",right:0,background:"none",border:"1px solid rgba(255,255,255,0.2)",color:"#f0f0f0",padding:"8px 14px",cursor:"pointer",fontFamily:"'Orbitron',sans-serif",fontSize:"13px",letterSpacing:"2px"}}>CLOSE</button>
          </div>
        </div>
      )}

      <style>{`
        .gallery-masonry>div:hover .zoom-icon{opacity:1!important}
        @media(max-width:900px){.gallery-masonry{grid-template-columns:repeat(2,1fr)!important}.gallery-masonry>div[style*="span 2"]{grid-column:span 1!important;grid-row:span 1!important}section{padding-left:24px!important;padding-right:24px!important}.gallery-filters{padding-left:24px!important;padding-right:24px!important}}
        @media(max-width:560px){.gallery-masonry{grid-template-columns:1fr!important}}
      `}</style>
    </main>
  );
}

"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function TireSVG({ rotation }: { rotation: number }) {
  return (
    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%", filter: "drop-shadow(0 0 40px rgba(232,0,29,0.22))" }}>
      <defs>
        <radialGradient id="tg" cx="35%" cy="35%" r="65%"><stop offset="0%" stopColor="#1e1e1e"/><stop offset="60%" stopColor="#0f0f0f"/><stop offset="100%" stopColor="#050505"/></radialGradient>
        <radialGradient id="rg" cx="38%" cy="32%" r="68%"><stop offset="0%" stopColor="#484848"/><stop offset="30%" stopColor="#1c1c1c"/><stop offset="70%" stopColor="#111"/><stop offset="100%" stopColor="#080808"/></radialGradient>
        <linearGradient id="sg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#8a8a8a"/><stop offset="40%" stopColor="#2e2e2e"/><stop offset="100%" stopColor="#141414"/></linearGradient>
        <linearGradient id="cg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#ff1a2e"/><stop offset="100%" stopColor="#8b0010"/></linearGradient>
        <linearGradient id="shine" x1="20%" y1="10%" x2="80%" y2="90%"><stop offset="0%" stopColor="rgba(255,255,255,0.10)"/><stop offset="45%" stopColor="rgba(255,255,255,0.02)"/><stop offset="100%" stopColor="rgba(255,255,255,0)"/></linearGradient>
      </defs>
      <circle cx="250" cy="250" r="230" fill="url(#tg)"/>
      <circle cx="250" cy="250" r="230" fill="none" stroke="#0a0a0a" strokeWidth="3"/>
      <g transform={`rotate(${rotation},250,250)`}>
        <circle cx="250" cy="250" r="220" fill="none" stroke="#161616" strokeWidth="26"/>
        <circle cx="250" cy="250" r="220" fill="none" stroke="#090909" strokeWidth="3.5"/>
        <circle cx="250" cy="250" r="210" fill="none" stroke="#090909" strokeWidth="2"/>
        <circle cx="250" cy="250" r="200" fill="none" stroke="#090909" strokeWidth="2"/>
        <circle cx="250" cy="250" r="192" fill="none" stroke="#090909" strokeWidth="1.5"/>
        {Array.from({length:30}).map((_,i)=>{
          const a=(i/30)*360,a1=((a-5.5)*Math.PI)/180,a2=((a+5.5)*Math.PI)/180,r1=192,r2=228;
          const x1=250+r1*Math.cos(a1),y1=250+r1*Math.sin(a1),x2=250+r2*Math.cos(a1),y2=250+r2*Math.sin(a1);
          const x3=250+r2*Math.cos(a2),y3=250+r2*Math.sin(a2),x4=250+r1*Math.cos(a2),y4=250+r1*Math.sin(a2);
          return <path key={i} d={`M${x1},${y1}L${x2},${y2}A${r2},${r2} 0 0,1 ${x3},${y3}L${x4},${y4}A${r1},${r1} 0 0,0 ${x1},${y1}`} fill={i%2===0?"#1c1c1c":"#151515"} stroke="#090909" strokeWidth="0.7"/>;
        })}
        {Array.from({length:20}).map((_,i)=>{
          const a=(i/20)*360+9,a1=((a-6.5)*Math.PI)/180,a2=((a+6.5)*Math.PI)/180,r1=175,r2=190;
          const x1=250+r1*Math.cos(a1),y1=250+r1*Math.sin(a1),x2=250+r2*Math.cos(a1),y2=250+r2*Math.sin(a1);
          const x3=250+r2*Math.cos(a2),y3=250+r2*Math.sin(a2),x4=250+r1*Math.cos(a2),y4=250+r1*Math.sin(a2);
          return <path key={i} d={`M${x1},${y1}L${x2},${y2}A${r2},${r2} 0 0,1 ${x3},${y3}L${x4},${y4}A${r1},${r1} 0 0,0 ${x1},${y1}`} fill="#181818" stroke="#090909" strokeWidth="0.5"/>;
        })}
        {Array.from({length:30}).map((_,i)=>{const a=((i/30)*360*Math.PI)/180;return <line key={i} x1={250+195*Math.cos(a)} y1={250+195*Math.sin(a)} x2={250+224*Math.cos(a)} y2={250+224*Math.sin(a)} stroke="#080808" strokeWidth="1.2"/>;
        })}
        <circle cx="250" cy="250" r="162" fill="url(#rg)" stroke="#333" strokeWidth="1.5"/>
        <circle cx="250" cy="250" r="157" fill="none" stroke="#222" strokeWidth="1"/>
        {Array.from({length:5}).map((_,i)=>{
          const ba=(i/5)*360;
          return <g key={i}>
            {[-14,14].map((off,j)=>{
              const sa=((ba+off)*Math.PI)/180,ir=44,or=150,w=9;
              const px=-Math.sin(sa)*w,py=Math.cos(sa)*w;
              const ix=250+ir*Math.cos(sa),iy=250+ir*Math.sin(sa),ox=250+or*Math.cos(sa),oy=250+or*Math.sin(sa);
              return <g key={j}>
                <polygon points={`${ix+px},${iy+py} ${ix-px},${iy-py} ${ox-px*.6},${oy-py*.6} ${ox+px*.6},${oy+py*.6}`} fill="url(#sg)" stroke="#0a0a0a" strokeWidth="0.5"/>
                <line x1={250+(ir+6)*Math.cos(sa)} y1={250+(ir+6)*Math.sin(sa)} x2={250+(or-8)*Math.cos(sa)} y2={250+(or-8)*Math.sin(sa)} stroke="rgba(200,200,200,0.15)" strokeWidth="2.5"/>
              </g>;
            })}
            {(()=>{const a=(ba*Math.PI)/180,a1=((ba-19)*Math.PI)/180,a2=((ba+19)*Math.PI)/180,r=150;return <path d={`M${250+r*Math.cos(a1)},${250+r*Math.sin(a1)}A${r},${r} 0 0,1 ${250+r*Math.cos(a2)},${250+r*Math.sin(a2)}L${250+(r-14)*Math.cos(a2)},${250+(r-14)*Math.sin(a2)}A${r-14},${r-14} 0 0,0 ${250+(r-14)*Math.cos(a1)},${250+(r-14)*Math.sin(a1)}Z`} fill="#222" stroke="#111" strokeWidth="0.5"/>;})()}
            {(()=>{const va=((ba+36)*Math.PI)/180,vr=100;return <ellipse cx={250+vr*Math.cos(va)} cy={250+vr*Math.sin(va)} rx="15" ry="23" fill="#0a0a0a" stroke="#1a1a1a" strokeWidth="1" transform={`rotate(${ba+36},${250+vr*Math.cos(va)},${250+vr*Math.sin(va)})`}/>;})()}
          </g>;
        })}
        {Array.from({length:5}).map((_,i)=>{const a=((i/5)*360*Math.PI)/180,r=44,cx=250+r*Math.cos(a),cy=250+r*Math.sin(a);return <g key={i}><circle cx={cx} cy={cy} r="9" fill="#555" stroke="#888" strokeWidth="1"/><circle cx={cx} cy={cy} r="4.5" fill="#333"/></g>;
        })}
      </g>
      <g transform="rotate(-28,250,250)">
        <rect x="77" y="218" width="46" height="64" rx="4" fill="url(#cg)" stroke="#6b0010" strokeWidth="1"/>
        <circle cx="86" cy="232" r="4.5" fill="#cc0" stroke="#aa0" strokeWidth="0.5"/>
        <circle cx="114" cy="232" r="4.5" fill="#cc0" stroke="#aa0" strokeWidth="0.5"/>
        <circle cx="86" cy="268" r="4.5" fill="#cc0" stroke="#aa0" strokeWidth="0.5"/>
        <circle cx="114" cy="268" r="4.5" fill="#cc0" stroke="#aa0" strokeWidth="0.5"/>
        <rect x="87" y="243" width="26" height="14" rx="2" fill="rgba(255,255,255,0.08)"/>
      </g>
      <circle cx="250" cy="250" r="38" fill="url(#rg)" stroke="#444" strokeWidth="1.5"/>
      <circle cx="250" cy="250" r="30" fill="#141414" stroke="#2a2a2a" strokeWidth="1"/>
      <circle cx="250" cy="250" r="20" fill="#0a0a0a"/>
      <circle cx="250" cy="250" r="15" fill="#e8001d" opacity="0.88"/>
      <text x="250" y="254" textAnchor="middle" fill="white" fontSize="7" fontFamily="'Orbitron',sans-serif" fontWeight="700">HAVEN</text>
      <circle cx="250" cy="250" r="162" fill="url(#shine)"/>
      <circle cx="250" cy="250" r="196" fill="none" stroke="rgba(255,255,255,0.055)" strokeWidth="14" strokeDasharray="90 250" strokeLinecap="round" transform="rotate(-55,250,250)"/>
    </svg>
  );
}

const UNSPLASH = "https://images.unsplash.com";

const galleryImages = [
  { src: `${UNSPLASH}/photo-1503376780353-7e6692767b70?w=1200&q=85`, alt: "Car workshop" },
  { src: `${UNSPLASH}/photo-1492144534655-ae79c964c9d7?w=1200&q=85`, alt: "Premium car" },
  { src: `${UNSPLASH}/photo-1544636331-e26879cd4d9b?w=1200&q=85`, alt: "Car detail" },
];

export default function HeroSection() {
  const [rotation, setRotation] = useState(0);
  const [floatY, setFloatY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [activeImg, setActiveImg] = useState(0);
  const rotRef = useRef(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    setMounted(true);
    let t = 0;
    const animate = () => {
      t += 0.012;
      rotRef.current = (rotRef.current + 0.5) % 360;
      setRotation(rotRef.current);
      setFloatY(Math.sin(t) * 14);
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActiveImg(i => (i + 1) % galleryImages.length), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="hero" style={{
      position: "relative",
      width: "100%",
      minHeight: "100svh",
      display: "flex",
      overflow: "hidden",
      background: "radial-gradient(ellipse at 60% 50%,#1a0003 0%,#0a0a0a 50%,#050505 100%)"
    }}>
      {/* Grid background */}
      <div style={{position:"absolute",inset:0,pointerEvents:"none",backgroundImage:"linear-gradient(rgba(232,0,29,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(232,0,29,0.03) 1px,transparent 1px)",backgroundSize:"56px 56px"}}/>

      {/* Top accent line */}
      <div style={{position:"absolute",top:0,left:0,right:0,height:"2px",background:"linear-gradient(90deg,transparent,#e8001d 30%,#e8001d 70%,transparent)",zIndex:10}}/>

      {/* Background image — more visible now */}
      {mounted && (
        <div style={{position:"absolute",inset:0,zIndex:1,overflow:"hidden"}}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={galleryImages[activeImg].src}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              // Increased brightness so images are clearly visible
              filter: "brightness(0.32) saturate(1.1)",
              transition: "opacity 0.8s ease"
            }}
            onError={e => { (e.target as HTMLImageElement).style.display = "none"; }}
          />
          {/* Overlay: heavy on left for text readability, fades on right so image shows */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right,rgba(5,5,5,0.97) 0%,rgba(5,5,5,0.75) 50%,rgba(5,5,5,0.15) 100%)"
          }}/>
        </div>
      )}

      {/* LEFT COLUMN */}
      <div
        style={{
          flex: "0 0 auto",
          width: "clamp(300px,52%,580px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "120px 60px 80px",
          position: "relative",
          zIndex: 5
        }}
        className="hero-left"
      >
        {/* Eyebrow */}
        <div style={{display:"flex",alignItems:"center",gap:"12px",marginBottom:"18px",opacity:mounted?1:0,transform:mounted?"translateY(0)":"translateY(20px)",transition:"all .8s ease .2s"}}>
          <div style={{width:"28px",height:"1px",background:"#e8001d"}}/>
          <span style={{fontFamily:"'Orbitron',sans-serif",fontSize:"9px",letterSpacing:"5px",color:"#e8001d",textTransform:"uppercase"}}>Premium Auto Upgrades</span>
        </div>

        {/* Main heading */}
        <h1 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(58px,7.8vw,108px)",lineHeight:.88,letterSpacing:"2px",color:"#f0f0f0",marginBottom:"18px",opacity:mounted?1:0,transform:mounted?"translateY(0)":"translateY(30px)",transition:"all .9s ease .4s"}}>
          CRAFTED FOR<br/><span style={{color:"#e8001d",textShadow:"0 0 50px rgba(232,0,29,0.45)"}}>THE BOLD</span><br/>DRIVER
        </h1>

        {/* Tagline pills */}
        <div style={{display:"inline-flex",alignItems:"center",gap:"10px",marginBottom:"16px",opacity:mounted?1:0,transition:"opacity .8s ease .5s"}}>
          <span style={{fontFamily:"'Orbitron',sans-serif",fontSize:"10px",letterSpacing:"3.5px",color:"rgba(240,240,240,0.5)",textTransform:"uppercase"}}>PROTECTION.</span>
          <span style={{width:"4px",height:"4px",background:"#e8001d",display:"block",flexShrink:0}}/>
          <span style={{fontFamily:"'Orbitron',sans-serif",fontSize:"10px",letterSpacing:"3.5px",color:"rgba(240,240,240,0.5)",textTransform:"uppercase"}}>UPGRADES.</span>
          <span style={{width:"4px",height:"4px",background:"#e8001d",display:"block",flexShrink:0}}/>
          <span style={{fontFamily:"'Orbitron',sans-serif",fontSize:"10px",letterSpacing:"3.5px",color:"rgba(240,240,240,0.5)",textTransform:"uppercase"}}>ONE SHOP.</span>
        </div>

        <div style={{height:"2px",background:"linear-gradient(to right,#e8001d,transparent)",marginBottom:"18px",width:mounted?"110px":"0px",transition:"width 1.1s ease .7s"}}/>

        <p style={{fontSize:"14px",fontWeight:300,letterSpacing:"1.3px",color:"rgba(240,240,240,0.45)",lineHeight:1.85,marginBottom:"40px",maxWidth:"350px",opacity:mounted?1:0,transform:mounted?"translateY(0)":"translateY(20px)",transition:"all .8s ease .6s"}}>
          From ceramic tint and PPF to custom lighting and interior upgrades — every detail, elevated with precision and pride.
        </p>

        {/* Buttons */}
        <div style={{display:"flex",gap:"12px",flexWrap:"wrap",opacity:mounted?1:0,transform:mounted?"translateY(0)":"translateY(20px)",transition:"all .8s ease .8s"}}>
          <Link href="/contact" style={{background:"#e8001d",color:"white",padding:"14px 36px",fontFamily:"'Rajdhani',sans-serif",fontSize:"12px",fontWeight:700,letterSpacing:"3px",textTransform:"uppercase",textDecoration:"none",display:"inline-block",transition:"all .3s",clipPath:"polygon(7px 0%,100% 0%,calc(100% - 7px) 100%,0% 100%)"}}
            onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.background="#ff0025";(e.currentTarget as HTMLElement).style.boxShadow="0 0 36px rgba(232,0,29,0.65)";(e.currentTarget as HTMLElement).style.transform="translateY(-2px)"}}
            onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.background="#e8001d";(e.currentTarget as HTMLElement).style.boxShadow="none";(e.currentTarget as HTMLElement).style.transform="translateY(0)"}}>
            Book Your Service
          </Link>
          <Link href="/services" style={{background:"transparent",color:"#f0f0f0",padding:"14px 36px",border:"1px solid rgba(240,240,240,0.22)",fontFamily:"'Rajdhani',sans-serif",fontSize:"12px",fontWeight:700,letterSpacing:"3px",textTransform:"uppercase",textDecoration:"none",display:"inline-block",transition:"all .3s"}}
            onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor="#e8001d";(e.currentTarget as HTMLElement).style.color="#e8001d";(e.currentTarget as HTMLElement).style.transform="translateY(-2px)"}}
            onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(240,240,240,0.22)";(e.currentTarget as HTMLElement).style.color="#f0f0f0";(e.currentTarget as HTMLElement).style.transform="translateY(0)"}}>
            Explore Services
          </Link>
        </div>

        {/* Stats */}
        <div style={{display:"flex",gap:"32px",marginTop:"52px",flexWrap:"wrap",opacity:mounted?1:0,transform:mounted?"translateY(0)":"translateY(20px)",transition:"all .8s ease 1s"}}>
          {[
            {num:"1,500+",label:"Vehicles Upgraded"},
            {num:"5 Star",label:"Rated Service"},
            {num:"8 Years",label:"Experience"},
          ].map(s=>(
            <div key={s.label} style={{borderLeft:"2px solid #e8001d",paddingLeft:"12px"}}>
              <div style={{fontFamily:"'Orbitron',sans-serif",fontSize:"18px",fontWeight:700,color:"#f0f0f0"}}>{s.num}</div>
              <div style={{fontFamily:"'Orbitron',sans-serif",fontSize:"8px",letterSpacing:"2px",color:"rgba(240,240,240,0.35)",textTransform:"uppercase",marginTop:"3px"}}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT COLUMN — full height, tire in bottom-right corner */}
      <div style={{flex:1,position:"relative",minHeight:"100svh"}} className="hero-right">
        {/* Red glow behind tire */}
        <div style={{
          position: "absolute",
          bottom: "5%",
          right: "-4%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle,rgba(232,0,29,0.14) 0%,transparent 70%)",
          pointerEvents: "none",
          zIndex: 2,
          animation: "glowPulse 4s ease-in-out infinite"
        }}/>

        {/* Shadow under tire */}
        <div style={{
          position: "absolute",
          bottom: "6%",
          right: "4%",
          width: "340px",
          height: "20px",
          background: "radial-gradient(ellipse,rgba(0,0,0,0.85) 0%,transparent 70%)",
          borderRadius: "50%",
          filter: "blur(8px)",
          zIndex: 2
        }}/>

        {/* Red accent line */}
        <div style={{
          position: "absolute",
          bottom: "8.5%",
          right: "2%",
          width: "370px",
          height: "1px",
          background: "linear-gradient(90deg,transparent,rgba(232,0,29,0.6) 40%,rgba(232,0,29,0.6) 60%,transparent)",
          animation: "glowPulse 3s ease-in-out infinite",
          zIndex: 2
        }}/>

        {/* TIRE — bottom-right corner, partially off-screen for cinematic feel */}
        {mounted && (
          <div style={{
            position: "absolute",
            bottom: "-5%",
            right: "-5%",
            width: "clamp(300px,38vw,480px)",
            height: "clamp(300px,38vw,480px)",
            transform: `translateY(${floatY}px)`,
            transition: "transform 0.05s linear",
            zIndex: 3,
            animation: "fadeIn .6s ease .3s both"
          }}>
            <TireSVG rotation={rotation}/>
          </div>
        )}
      </div>

      {/* Bottom fade */}
      <div style={{position:"absolute",bottom:0,left:0,right:0,height:"160px",background:"linear-gradient(to bottom,transparent,#080808)",pointerEvents:"none",zIndex:6}}/>

      <style>{`
        @keyframes glowPulse{0%,100%{opacity:1}50%{opacity:.55}}
        @keyframes fadeIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
        @media(max-width:768px){
  .hero-left{width:100%!important;padding:100px 24px 40px!important}
  section#hero{flex-direction:column!important;min-height:auto!important}
  .hero-right{display:none!important}
}
        }
      `}</style>
    </section>
  );
}
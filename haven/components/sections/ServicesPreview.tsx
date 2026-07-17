"use client";
import Link from "next/link";

const UNSPLASH = "https://images.unsplash.com";

const services = [
  {
    img: `/ppf.webp`,
    icon: (<svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>),
    name: "PPF Service",
    desc: "Invisible armour for your most vulnerable panels. Stop chips, scratches, and debris before they ever reach your paint.",
    href: "/services/ppf",
  },
  {
    img: `/ceramic.webp`,
    icon: (<svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6l2 4h4l-3 3 1 4-4-2.5L8 17l1-4-3-3h4z"/></svg>),
    name: "Ceramic Coating",
    desc: "Showroom shine that endures. UV-resistant, scratch-resistant, and self-cleaning — the last protection your paint will ever need.",
    href: "/services/ceramic-coating",
  },
  {
    img: `/dashcam.webp`,
    icon: (<svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M8 6V4h8v2"/><circle cx="12" cy="12" r="3"/></svg>),
    name: "Dashcams",
    desc: "Professional install with clean wiring. Crystal-clear recording so you are always covered, whatever the road throws at you.",
    href: "/services/dashcams",
  },
  {
    img: `${UNSPLASH}/photo-1492144534655-ae79c964c9d7?w=500&q=75`,
    icon: (<svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01M9 6h6M9 10h6"/></svg>),
    name: "CarPlay Integration",
    desc: "Factory-fit Apple CarPlay installation. Clean wiring, seamless integration — a modern cockpit that looks OEM from day one.",
    href: "/services/carplay",
  },
  {
    img: `https://images.unsplash.com/photo-1776639520962-dad59bd15197?q=80`,
    icon: (<svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>),
    name: "Ambient Lights",
    desc: "Multi-zone custom LED lighting with smart colour control. Set the mood, sync with music, transform your interior.",
    href: "/services/ambient-lights",
  },
  {
    img: `https://images.unsplash.com/photo-1615775918890-040745dd38d5?q=80`,
    icon: (<svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2"/></svg>),
    name: "Wheel Lights",
    desc: "Vibration-proof, weather-resistant LED kits that make your rims unmissable — day or night, rain or shine.",
    href: "/services/wheel-lights",
  },
  {
    img: `https://images.unsplash.com/photo-1707085301609-10a63d3f0a8e?q=80`,
    icon: (<svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>),
    name: "Starlights",
    desc: "Thousands of hand-placed fibre-optic LEDs in your headliner. Your own private galaxy, every drive.",
    href: "/services/starlights",
  },
  {
    img: `/tire.webp`,
    icon: (<svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2"/></svg>),
    name: "Tire Services",
    desc: "Precision mounting, balancing, and rotation. Maximum grip, smooth ride, and total confidence every kilometre.",
    href: "/services/tires",
  },
  {
    img: `/tint.webp`,
    icon: (<svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>),
    name: "Ceramic Tint",
    desc: "Blocks 99% UV, cuts heat by 60%, zero signal interference. The last tint job your car will ever need.",
    href: "/services/tint",
  },
  {
    img: `/light.webp`,
    icon: (<svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>),
    name: "Tail Lights",
    desc: "Smoked or custom-tinted tail lights with an OEM-quality finish — a bold, distinctive rear presence that turns heads.",
    href: "/services/tail-lights",
  },
  {
    img: `/protect.webp`,
    icon: (<svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>),
    name: "Car Protection",
    desc: "Complete exterior and interior protection packages — paint correction, sealants, and coatings for all-year defence.",
    href: "/services/protection",
  },
  {
    img: `/upg.webp`,
    icon: (<svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/><path d="M15.54 8.46a5 5 0 010 7.07M8.46 8.46a5 5 0 000 7.07"/></svg>),
    name: "Custom Upgrades",
    desc: "Vinyl wraps, logo blackouts, full interior makeovers — if you can imagine it for your build, we can execute it.",
    href: "/services/custom",
  },
];

export default function ServicesPreview() {
  return (
    <section style={{background:"#0d0d0d",padding:"100px 60px",borderTop:"1px solid rgba(255,255,255,0.07)",borderBottom:"1px solid rgba(255,255,255,0.07)"}} className="services-section">
      <div style={{maxWidth:"1400px",margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:"64px"}}>
          <span style={{display:"inline-flex",alignItems:"center",gap:"10px",justifyContent:"center",fontFamily:"'Orbitron',sans-serif",fontSize:"10px",letterSpacing:"6px",color:"#e8001d",textTransform:"uppercase",marginBottom:"14px"}}>
            <span style={{width:"28px",height:"1px",background:"#e8001d",display:"block"}}/>What We Offer<span style={{width:"28px",height:"1px",background:"#e8001d",display:"block"}}/>
          </span>
          <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(38px,4vw,60px)",color:"#f0f0f0"}}>
            THE SERVICES YOUR <span style={{color:"#e8001d"}}>CAR DESERVES</span>
          </h2>
        </div>

        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"1px",background:"rgba(255,255,255,0.07)"}} className="services-grid">
          {services.map((s) => (
            <div key={s.name} style={{background:"#0d0d0d",transition:"all .4s",position:"relative",overflow:"hidden"}} className="service-card"
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="translateY(-4px)"}}
              onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="translateY(0)"}}>

              {/* Image thumbnail */}
              <div style={{position:"relative",height:"160px",overflow:"hidden"}}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.img} alt={s.name}
                  style={{width:"100%",height:"100%",objectFit:"cover",filter:"brightness(0.5) saturate(0.9)",transition:"transform .5s ease,filter .5s ease"}}
                  className="service-img"
                  onError={e=>{(e.target as HTMLImageElement).style.display="none"}}
                />
                <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,#0d0d0d 0%,transparent 60%)"}}/>
                <div style={{position:"absolute",top:"16px",left:"16px",color:"#e8001d"}}>{s.icon}</div>
              </div>

              {/* Text */}
              <div style={{padding:"20px 24px 28px"}}>
                <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"22px",letterSpacing:"2px",color:"#f0f0f0",marginBottom:"8px"}}>{s.name}</div>
                <div style={{fontSize:"13px",color:"rgba(240,240,240,0.5)",lineHeight:1.8}}>{s.desc}</div>
                <Link href={s.href} style={{display:"inline-flex",alignItems:"center",gap:"8px",fontFamily:"'Orbitron',sans-serif",fontSize:"9px",letterSpacing:"3px",textTransform:"uppercase",color:"#e8001d",marginTop:"16px",textDecoration:"none"}}>
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .service-card:hover .service-img{filter:brightness(0.75) saturate(1.2)!important;transform:scale(1.04)}
        @media(max-width:1100px){.services-grid{grid-template-columns:repeat(3,1fr)!important}}
        @media(max-width:768px){.services-grid{grid-template-columns:repeat(2,1fr)!important}.services-section{padding:60px 24px!important}}
        @media(max-width:480px){.services-grid{grid-template-columns:1fr!important}}
      `}</style>
    </section>
  );
}

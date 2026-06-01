"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const links = [
  { label: "Home",     href: "/" },
  { label: "Services", href: "/services" },
  { label: "Brands",   href: "/brands" },
  { label: "Gallery",  href: "/gallery" },
  { label: "About",    href: "/about" },
  { label: "Contact",  href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <nav style={{
        position:"fixed",top:0,left:0,right:0,zIndex:1000,
        padding: scrolled ? "14px 60px" : "22px 60px",
        background: scrolled ? "rgba(8,8,8,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(232,0,29,0.18)" : "none",
        transition:"all .45s ease",
        display:"flex",alignItems:"center",justifyContent:"space-between",
      }}>

        {/* Logo */}
        <Link
          href="/"
          style={{
            position: "relative",
            width: "170px",
            height: "52px",
            display: "block",
            flexShrink: 0,
          }}
        >
          <Image
            src="/logo1.png"
            alt="Logo"
            fill
            priority
            style={{ objectFit: "contain" }}
          />
        </Link>

        {/* Desktop Links */}
        <ul style={{display:"flex",gap:"32px",listStyle:"none"}} className="nav-links-desktop">
          {links.map(l => (
            <li key={l.href}>
              <Link href={l.href} data-hover style={{
                color: pathname===l.href ? "#e8001d" : "rgba(240,240,240,0.88)",
                textDecoration:"none",fontSize:"14px",fontWeight:600,
                letterSpacing:"3px",textTransform:"uppercase",
                fontFamily:"'Rajdhani',sans-serif",transition:"color .3s",
                borderBottom: pathname===l.href ? "1px solid #e8001d" : "1px solid transparent",
                paddingBottom:"2px",
              }}
              onMouseEnter={e=>(e.currentTarget.style.color="#e8001d")}
              onMouseLeave={e=>(e.currentTarget.style.color=pathname===l.href?"#e8001d":"rgba(240,240,240,0.88)")}
              >{l.label}</Link>
            </li>
          ))}
        </ul>

        {/* Book Now button */}
        <Link href="/contact" className="clip-btn" data-hover style={{
          background:"#e8001d",color:"white",padding:"10px 26px",
          fontFamily:"'Rajdhani',sans-serif",fontSize:"14px",fontWeight:700,
          letterSpacing:"3px",textTransform:"uppercase",textDecoration:"none",
          display:"inline-block",transition:"all .3s",
        }}
        onMouseEnter={e=>{e.currentTarget.style.background="#ff0025";e.currentTarget.style.boxShadow="0 0 28px rgba(232,0,29,0.6)"}}
        onMouseLeave={e=>{e.currentTarget.style.background="#e8001d";e.currentTarget.style.boxShadow="none"}}
        >Book Now</Link>

        {/* Hamburger */}
        <button onClick={()=>setMenuOpen(!menuOpen)} className="hamburger-btn" aria-label="Menu"
          style={{display:"none",background:"none",border:"1px solid rgba(255,255,255,0.15)",padding:"8px 10px",cursor:"pointer",flexDirection:"column",gap:"5px"}}>
          {[0,1,2].map(i=>(
            <span key={i} style={{
              display:"block",
              width:"22px",
              height:"1.5px",
              background:"#f0f0f0",
              transition:"all .3s",
              transformOrigin:"center",
              transform:menuOpen?(i===0?"rotate(45deg) translate(4.5px,4.5px)":i===1?"scaleX(0)":"rotate(-45deg) translate(4.5px,-4.5px)"):"none"
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div style={{
          position:"fixed",
          inset:0,
          background:"rgba(8,8,8,0.99)",
          zIndex:999,
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          justifyContent:"center",
          gap:"30px"
        }}>
          <button onClick={()=>setMenuOpen(false)} style={{
            position:"absolute",
            top:"24px",
            right:"24px",
            background:"none",
            border:"none",
            color:"rgba(240,240,240,0.88)",
            fontSize:"26px",
            cursor:"pointer",
            fontFamily:"monospace"
          }}>✕</button>

          {links.map(l=>(
            <Link key={l.href} href={l.href} style={{
              fontFamily:"'Bebas Neue',sans-serif",
              fontSize:"48px",
              letterSpacing:"4px",
              color: pathname===l.href?"#e8001d":"#f0f0f0",
              textDecoration:"none",
              transition:"color .3s"
            }}
            onMouseEnter={e=>(e.currentTarget.style.color="#e8001d")}
            onMouseLeave={e=>(e.currentTarget.style.color=pathname===l.href?"#e8001d":"#f0f0f0")}
            >{l.label}</Link>
          ))}
        </div>
      )}

      <style>{`
        @media(max-width:900px){
          .nav-links-desktop{display:none !important}
          .hamburger-btn{display:flex !important}
          nav{padding:${scrolled?"12px 20px":"18px 20px"} !important}
          nav a.clip-btn{display:none !important}
        }
      `}</style>
    </>
  );
}
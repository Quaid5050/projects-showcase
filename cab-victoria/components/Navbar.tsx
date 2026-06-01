'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  const links = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/tours', label: 'Tours' },
    { href: '/fleet', label: 'Fleet' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <style>{`
        .nb-topbar { display:flex; }
        .nb-desktop { display:flex; }
        .nb-burger  { display:none; }
        @media(max-width:768px){
          .nb-topbar  { display:none !important; }
          .nb-desktop { display:none !important; }
          .nb-burger  { display:flex !important; }
          .nb-logo    { font-size:1.4rem !important; }
        }
      `}</style>

      <header style={{
        position:'fixed', top:0, left:0, right:0, zIndex:1000,
        background: scrolled||open ? 'rgba(8,8,8,0.98)' : 'transparent',
        backdropFilter: scrolled||open ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(245,166,35,0.15)' : '1px solid transparent',
        transition:'all 0.3s ease',
      }}>

        {/* Top contact bar — desktop only */}
        <div className="nb-topbar" style={{
          background:'rgba(245,166,35,0.07)',
          borderBottom:'1px solid rgba(245,166,35,0.1)',
          padding:'5px 0',
        }}>
          <div style={{maxWidth:1200,margin:'0 auto',padding:'0 24px',display:'flex',gap:6,justifyContent:'flex-end',width:'100%',flexWrap:'wrap'}}>
            {[
              {href:'https://www.google.com/maps/search/1cab+victoria',label:'⭐ Review',bg:'#4285F4',color:'#fff',ext:true},
              {href:'https://wa.me/12509868284',label:'WhatsApp',bg:'#25D366',color:'#fff',ext:true},
              {href:'sms:+12509868284',label:'Text',bg:'#1a1a1a',color:'#ccc',border:'1px solid #2a2a2a'},
              {href:'tel:+12509868284',label:'📞 Call',bg:'var(--gold)',color:'#000'},
            ].map(b => (
              <a key={b.label} href={b.href}
                target={b.ext ? '_blank' : undefined}
                rel={b.ext ? 'noreferrer' : undefined}
                style={{display:'flex',alignItems:'center',gap:4,padding:'4px 12px',borderRadius:2,fontSize:11,fontWeight:700,letterSpacing:'0.05em',textTransform:'uppercase',background:b.bg,color:b.color,textDecoration:'none',border:b.border||'none',whiteSpace:'nowrap'}}
              >{b.label}</a>
            ))}
          </div>
        </div>

        {/* Main nav */}
        <nav style={{maxWidth:1200,margin:'0 auto',padding:'0 24px',display:'flex',alignItems:'center',justifyContent:'space-between',height:60}}>
          <Link href="/" style={{textDecoration:'none'}}>
            <div className="nb-logo font-display" style={{fontSize:'1.7rem',color:'var(--gold)',lineHeight:1,letterSpacing:'0.04em'}}>
              1CAB <span style={{color:'rgba(255,255,255,0.25)',fontSize:'0.6em',fontFamily:'Outfit,sans-serif',fontWeight:300,letterSpacing:'0.15em'}}>VICTORIA</span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="nb-desktop" style={{gap:'1.75rem',alignItems:'center'}}>
            {links.map(l => (
              <Link key={l.href} href={l.href} style={{
                textDecoration:'none',fontSize:12,fontWeight:600,
                letterSpacing:'0.09em',textTransform:'uppercase',
                color: pathname===l.href ? 'var(--gold)' : 'rgba(255,255,255,0.6)',
                borderBottom: pathname===l.href ? '1px solid var(--gold)' : '1px solid transparent',
                paddingBottom:2,transition:'color 0.2s',
              }}
                onMouseEnter={e=>(e.currentTarget.style.color='#fff')}
                onMouseLeave={e=>(e.currentTarget.style.color=pathname===l.href?'var(--gold)':'rgba(255,255,255,0.6)')}
              >{l.label}</Link>
            ))}
          </div>

          {/* Hamburger */}
          <button className="nb-burger" onClick={()=>setOpen(!open)} aria-label="Menu"
            style={{background:'none',border:'1px solid rgba(255,255,255,0.15)',borderRadius:4,color:'#fff',cursor:'pointer',padding:'6px 10px',alignItems:'center',justifyContent:'center'}}
          >
            {open
              ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            }
          </button>
        </nav>

        {/* Mobile drawer */}
        {open && (
          <div style={{background:'rgba(8,8,8,0.99)',borderTop:'1px solid rgba(245,166,35,0.1)',padding:'12px 16px 20px'}}>
            {links.map(l => (
              <Link key={l.href} href={l.href} style={{
                display:'block',padding:'13px 0',fontSize:15,fontWeight:600,
                letterSpacing:'0.06em',textTransform:'uppercase',
                color:pathname===l.href?'var(--gold)':'rgba(255,255,255,0.65)',
                textDecoration:'none',borderBottom:'1px solid rgba(255,255,255,0.06)',
              }}>{l.label}</Link>
            ))}
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,marginTop:16}}>
              {[
                {href:'https://wa.me/12509868284',label:'WhatsApp',bg:'#25D366',color:'#fff'},
                {href:'tel:+12509868284',label:'📞 Call',bg:'var(--gold)',color:'#000'},
                {href:'sms:+12509868284',label:'Text',bg:'#1a1a1a',color:'#ccc',border:'1px solid #2a2a2a'},
                {href:'https://www.google.com/maps/search/1cab+victoria',label:'⭐ Review',bg:'#4285F4',color:'#fff',ext:true},
              ].map(b => (
                <a key={b.label} href={b.href}
                  target={b.ext ? '_blank' : undefined}
                  rel={b.ext ? 'noreferrer' : undefined}
                  style={{display:'block',padding:'11px',textAlign:'center',background:b.bg,color:b.color,textDecoration:'none',borderRadius:4,fontSize:12,fontWeight:700,letterSpacing:'0.06em',textTransform:'uppercase',border:b.border||'none'}}
                >{b.label}</a>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  )
}

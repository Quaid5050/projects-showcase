'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [fabOpen, setFabOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false); setFabOpen(false) }, [pathname])

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
        .fab-wrap { position:fixed; top:72px; right:18px; z-index:999; }
        .fab-btn { width:44px; height:44px; border-radius:50%; background:var(--gold); border:none; cursor:pointer; display:flex; align-items:center; justify-content:center; box-shadow:0 4px 14px rgba(245,166,35,0.35); transition:transform 0.2s; }
        .fab-btn:hover { transform:scale(1.08); }
        .fab-menu { position:absolute; top:52px; right:0; background:rgba(15,15,15,0.98); border:1px solid rgba(245,166,35,0.2); border-radius:6px; padding:8px 0; min-width:180px; backdrop-filter:blur(12px); box-shadow:0 8px 28px rgba(0,0,0,0.6); }
        .fab-item { display:flex; align-items:center; gap:10px; padding:10px 16px; font-size:12px; font-weight:600; color:#ccc; text-decoration:none; transition:background 0.15s; white-space:nowrap; }
        .fab-item:hover { background:rgba(245,166,35,0.08); color:var(--gold); }
        @media(max-width:768px){
          .nb-topbar  { display:none !important; }
          .nb-desktop { display:none !important; }
          .nb-burger  { display:flex !important; }
          .nb-logo    { font-size:1.4rem !important; }
          .fab-wrap   { top:68px; right:14px; }
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
              {href:'https://g.page/r/CU7QJF11gO34EBI/review',label:'⭐ Review',bg:'#4285F4',color:'#fff',ext:true},
              {href:'mailto:1cab.victoria@gmail.com',label:'✉ Email',bg:'#1a1a1a',color:'#ccc',border:'1px solid #2a2a2a'},
              {href:'sms:+12509868284',label:'Text',bg:'#1a1a1a',color:'#ccc',border:'1px solid #2a2a2a'},
              {href:'https://wa.me/12509868284',label:'WhatsApp',bg:'#25D366',color:'#fff',ext:true},
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
              BOOKACAB 
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
                {href:'mailto:1cab.victoria@gmail.com',label:'✉ Email',bg:'#1a1a1a',color:'#ccc',border:'1px solid #2a2a2a'},
                {href:'https://g.page/r/CU7QJF11gO34EBI/review',label:'⭐ Review',bg:'#4285F4',color:'#fff',ext:true},
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

      {/* Floating action button */}
      <div className="fab-wrap">
        <button className="fab-btn" onClick={()=>setFabOpen(!fabOpen)} aria-label="Quick contact">
          {fabOpen
            ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          }
        </button>
        {fabOpen && (
          <div className="fab-menu">
            <a className="fab-item" href="sms:+12509868284">💬 Text</a>
            <a className="fab-item" href="mailto:1cab.victoria@gmail.com">✉️ Email</a>
            <a className="fab-item" href="https://wa.me/12509868284" target="_blank" rel="noreferrer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
            <a className="fab-item" href="tel:+12509868284">📞 Call</a>
          </div>
        )}
      </div>
    </>
  )
}
'use client'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
    <style>{`
      .footer-g { display:grid; grid-template-columns:repeat(4,1fr); gap:28px; margin-bottom:clamp(28px,4vw,40px); }
      .footer-bot { display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; }
      @media(max-width:860px){ .footer-g { grid-template-columns:1fr 1fr; } }
      @media(max-width:420px){ .footer-g { grid-template-columns:1fr; } }
    `}</style>
    <footer style={{background:'#060606',borderTop:'1px solid #141414',padding:'clamp(32px,5vw,52px) 0 clamp(18px,3vw,28px)'}}>
      <div className="wrap">
        <div className="footer-g">
          <div>
            <div className="font-display" style={{fontSize:'1.8rem',color:'var(--gold)',marginBottom:8}}>1CAB VICTORIA</div>
            <p style={{fontSize:12,color:'#3a3a3a',lineHeight:1.8}}>Assured service at all times.<br />Victoria, BC, Canada</p>
            <p style={{fontSize:11,color:'#2a2a2a',marginTop:8,lineHeight:1.7}}>Text 2–3 hrs ahead with pickup location, date/time & destination</p>
          </div>
          <div>
            <p style={{fontSize:10,fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',color:'var(--gold)',marginBottom:12}}>Services</p>
            {['Airport & Ferry Transfer','City Tours','Outstation Trips','Designated Driver','U-Haul Drivers','Limousine'].map(s=>(
              <Link key={s} href="/services" style={{display:'block',fontSize:12,color:'#3a3a3a',textDecoration:'none',marginBottom:6,transition:'color 0.2s'}}
                onMouseEnter={e=>(e.currentTarget.style.color='var(--gold)')}
                onMouseLeave={e=>(e.currentTarget.style.color='#3a3a3a')}>{s}</Link>
            ))}
          </div>
          <div>
            <p style={{fontSize:10,fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',color:'var(--gold)',marginBottom:12}}>Quick Links</p>
            {[{h:'/fleet',l:'Our Fleet'},{h:'/tours',l:'Victoria Tours'},{h:'/about',l:'About Jay'},{h:'/contact',l:'Contact'}].map(({h,l})=>(
              <Link key={h} href={h} style={{display:'block',fontSize:12,color:'#3a3a3a',textDecoration:'none',marginBottom:6,transition:'color 0.2s'}}
                onMouseEnter={e=>(e.currentTarget.style.color='var(--gold)')}
                onMouseLeave={e=>(e.currentTarget.style.color='#3a3a3a')}>{l}</Link>
            ))}
          </div>
          <div>
            <p style={{fontSize:10,fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',color:'var(--gold)',marginBottom:12}}>Contact Jay</p>
            <a href="https://wa.me/12509868284" style={{display:'flex',alignItems:'center',gap:7,fontSize:13,color:'#25D366',textDecoration:'none',marginBottom:10,fontWeight:600}}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              +1 (250) 986-8284
            </a>
            <a href="tel:+12509868284" style={{display:'block',fontSize:12,color:'#3a3a3a',textDecoration:'none',marginBottom:6}}>📞 +1 (250) 986-8284</a>
            <a href="mailto:1cab.victoria@gmail.com" style={{display:'block',fontSize:12,color:'#3a3a3a',textDecoration:'none',wordBreak:'break-all'}}>✉ 1cab.victoria@gmail.com</a>
          </div>
        </div>
        <div className="footer-bot" style={{borderTop:'1px solid #111',paddingTop:18}}>
          <span style={{fontSize:11,color:'#252525'}}>© 2025 1Cab Victoria · Jaydeep Mohan</span>
          <span style={{fontSize:11,color:'#252525'}}>Serving Victoria, BC & beyond</span>
        </div>
      </div>
    </footer>
    </>
  )
}

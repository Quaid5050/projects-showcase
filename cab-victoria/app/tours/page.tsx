'use client'
import { useState } from 'react'
import Image from 'next/image'

const stops = [
  {name:'Butchart Gardens',area:'40 min · Brentwood Bay',dur:'60–90 min',type:'Nature',dayImg:'https://images.unsplash.com/photo-1558449709-9215b1ec91de?q=80',nightImg:'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=700&q=80',dayDesc:'A breathtaking 55-acre garden paradise in full bloom. Sunlight dances through roses and Japanese maples in the famous Sunken Garden.',nightDesc:'700+ lights transform the gardens into a glowing fairytale. Saturday evenings bring live music and fireworks.',highlight:'UNESCO World Heritage site'},
  {name:'Inner Harbour',area:'City centre',dur:'30–45 min',type:'Landmark',dayImg:'https://images.unsplash.com/photo-1688713866885-4cb1310b4939?q=80',nightImg:'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=700&q=80',dayDesc:"Victoria's most famous viewpoint — float planes, the iconic Empress Hotel, and the buzz of the waterfront.",nightDesc:'Parliament glows with 3,300 lights reflected in still water. The most romantic spot in BC after dark.',highlight:'Heart of Victoria'},
  {name:"Fisherman's Wharf",area:'10 min from harbour',dur:'30 min',type:'Waterfront',dayImg:'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=700&q=80',nightImg:'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=700&q=80',dayDesc:'Colourful floating homes, harbour seals, fresh seafood, and the best ice cream in Victoria.',nightDesc:'Soft dock lights on calm water. Multicoloured homes glow quietly — a peaceful romantic stop.',highlight:"Canada's most colourful floating homes"},
  {name:'Craigdarroch Castle',area:'Rockland',dur:'45 min',type:'Heritage',dayImg:'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=700&q=80',nightImg:'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=700&q=80',dayDesc:'Romanesque-revival mansion built in the 1890s, perched on a hill with panoramic views of Victoria and the Olympics.',nightDesc:'Floodlit against the dark sky — straight out of a gothic novel.',highlight:'National Historic Site · 1890'},
  {name:'BC Legislature',area:'Inner Harbour',dur:'20 min',type:'Government',dayImg:'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700&q=80',nightImg:'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=700&q=80',dayDesc:'Grand Edwardian legislature completed 1897. Free interior tours. Imposing copper dome and intricate stonework.',nightDesc:'3,300 lights outline every dome, tower, and column — one of the most photographed night views in Western Canada.',highlight:'Completed 1897'},
  {name:'Beacon Hill Park',area:'South Victoria',dur:'30 min',type:'Park',dayImg:'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=700&q=80',nightImg:'https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?w=700&q=80',dayDesc:'Peacocks roam freely through 200 acres of gardens and clifftop ocean lookouts. Views of the Strait of Juan de Fuca.',nightDesc:'Lamplit paths, sea breeze, waves below. A uniquely peaceful Victoria evening.',highlight:'Free-roaming peacocks · Ocean views'},
  {name:'Fan Tan Alley',area:'Chinatown',dur:'20 min',type:'Cultural',dayImg:'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=700&q=80',nightImg:'https://images.unsplash.com/photo-1444084316824-dc26d6657664?w=700&q=80',dayDesc:"Canada's narrowest commercial street — barely 90cm wide. Artist studios, antique shops, and hidden courtyards.",nightDesc:'Red lanterns glow overhead. Warm light and shadows make it feel like another era.',highlight:"Canada's narrowest street"},
  {name:'Dallas Road Waterfront',area:'Scenic coastal drive',dur:'30 min',type:'Scenic',dayImg:'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=700&q=80',nightImg:'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=700&q=80',dayDesc:'Wind-blown clifftops above crashing Pacific waves. Views of the Olympic Mountains. Bald eagles overhead.',nightDesc:'City lights behind, stars above, waves below. Jay pulls over so you can take it all in.',highlight:'Olympics · Eagles · Orcas'},
]

export default function ToursPage() {
  const [mode, setMode] = useState<'day'|'night'>('day')
  const [sel, setSel] = useState(0)
  const cur = stops[sel]

  return (
    <>
    <style>{`
      .stops-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:3px; }
      .tours-layout { display:grid; grid-template-columns:1fr 340px; gap:20px; align-items:start; }
      .detail-sticky { position:sticky; top:112px; }

      @media(max-width:1024px){
        .stops-grid { grid-template-columns:repeat(3,1fr); }
      }
      @media(max-width:860px){
        /* On tablet/mobile: panel goes ABOVE the grid */
        .tours-layout { grid-template-columns:1fr; }
        .detail-sticky { position:static; order:-1; }
        /* 2 col stops on tablet */
        .stops-grid { grid-template-columns:repeat(3,1fr); }
      }
      @media(max-width:600px){
        .stops-grid { grid-template-columns:repeat(2,1fr); }
      }
      @media(max-width:360px){
        .stops-grid { grid-template-columns:1fr; }
      }
    `}</style>

    {/* Hero */}
    <section style={{height:'clamp(240px,38vw,420px)',position:'relative',display:'flex',alignItems:'flex-end',paddingBottom:36,overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0}}>
        <Image src={mode==='day' ? "https://images.unsplash.com/photo-1775740738694-1d590125a704?q=80" : "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1400&q=85"} alt="Victoria" fill style={{objectFit:'cover',transition:'opacity 0.6s'}} unoptimized priority />
        <div style={{position:'absolute',inset:0,background:'linear-gradient(0deg,rgba(0,0,0,0.92) 0%,rgba(0,0,0,0.22) 60%,rgba(0,0,0,0.5) 100%)'}} />
      </div>
      <div className="wrap page-hero" style={{position:'relative',zIndex:1,width:'100%'}}>
        <div className="gold-bar" />
        <p style={{fontSize:10,fontWeight:700,letterSpacing:'0.14em',textTransform:'uppercase',color:'var(--gold)',marginBottom:6}}>8 iconic stops</p>
        <h1 className="font-display" style={{fontSize:'clamp(2.2rem,7vw,5.5rem)',lineHeight:0.9}}>VICTORIA<br /><span style={{color:'var(--gold)'}}>CITY TOURS</span></h1>
        <p style={{color:'rgba(255,255,255,0.4)',fontSize:'clamp(12px,1.8vw,14px)',maxWidth:460,lineHeight:1.7,marginTop:8}}>Tap any stop to preview. Toggle day or night to see how Victoria transforms after dark.</p>
      </div>
    </section>

    {/* Sticky toggle bar */}
    <div style={{background:'rgba(8,8,8,0.97)',backdropFilter:'blur(12px)',borderBottom:'1px solid #1a1a1a',padding:'8px 0',position:'sticky',top:60,zIndex:50}}>
      <div className="wrap" style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:10,flexWrap:'wrap'}}>
        <div style={{display:'flex',gap:3,background:'#111',border:'1px solid #222',borderRadius:4,padding:3}}>
          {(['day','night'] as const).map(m=>(
            <button key={m} onClick={()=>setMode(m)} style={{padding:'7px 20px',borderRadius:2,fontSize:11,fontWeight:700,letterSpacing:'0.08em',textTransform:'uppercase',border:'none',cursor:'pointer',transition:'all 0.2s',background:mode===m ? 'var(--gold)' : 'transparent',color:mode===m ? '#000' : '#555'}}>
              {m==='day' ? '☀ Day' : '☾ Night'}
            </button>
          ))}
        </div>
        <span style={{fontSize:11,color:'#444'}}>1–20 passengers</span>
        <a href="https://wa.me/12509868284?text=Hi Jay, I'd like to book a Victoria city tour!" className="btn-primary" style={{fontSize:11,padding:'8px 18px'}}>Book Tour</a>
      </div>
    </div>

    {/* Main content */}
    <section style={{background:'#0a0a0a',padding:'20px 0 clamp(40px,6vw,60px)'}}>
      <div className="wrap">
        <div className="tours-layout">

          {/* Stops grid */}
          <div className="stops-grid">
            {stops.map((s,i)=>(
              <div key={s.name} onClick={()=>setSel(i)} style={{cursor:'pointer',position:'relative',overflow:'hidden',height:'clamp(120px,14vw,175px)',outline:sel===i ? '2px solid var(--gold)' : '1px solid #1e1e1e',outlineOffset:sel===i ? 2 : 0,transition:'all 0.25s'}}>
                <Image src={mode==='day' ? s.dayImg : s.nightImg} alt={s.name} fill style={{objectFit:'cover',transition:'transform 0.4s',transform:sel===i ? 'scale(1.04)' : 'scale(1)'}} unoptimized />
                <div style={{position:'absolute',inset:0,background:'linear-gradient(0deg,rgba(0,0,0,0.88) 0%,rgba(0,0,0,0.05) 60%)'}} />
                {sel===i && (
                  <div style={{position:'absolute',top:7,right:7,width:20,height:20,borderRadius:'50%',background:'var(--gold)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                )}
                <div style={{position:'absolute',bottom:0,left:0,right:0,padding:'8px 10px'}}>
                  <div style={{fontSize:7,fontWeight:700,letterSpacing:'0.08em',textTransform:'uppercase',background:'rgba(245,166,35,0.2)',color:'var(--gold)',padding:'1px 6px',borderRadius:2,display:'inline-block',marginBottom:3}}>{s.type}</div>
                  <div style={{fontSize:'clamp(10px,1.4vw,12px)',fontWeight:700,color:'#fff',lineHeight:1.2}}>{s.name}</div>
                  <div style={{fontSize:9,color:'rgba(255,255,255,0.3)',marginTop:1}}>{s.area.split(' · ')[0]}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Detail panel */}
          <div className="detail-sticky">
            <div style={{background:'#0d0d0d',border:'1px solid #1e1e1e',overflow:'hidden'}}>
              <div style={{position:'relative',height:'clamp(180px,22vw,220px)'}}>
                <Image src={mode==='day' ? cur.dayImg : cur.nightImg} alt={cur.name} fill style={{objectFit:'cover'}} unoptimized />
                <div style={{position:'absolute',inset:0,background:'linear-gradient(0deg,rgba(0,0,0,0.72) 0%,transparent 50%)'}} />
                <div style={{position:'absolute',top:10,left:10}}>
                  <span style={{fontSize:9,fontWeight:700,letterSpacing:'0.08em',textTransform:'uppercase',background:'var(--gold)',color:'#000',padding:'3px 10px',borderRadius:2}}>{mode==='day' ? '☀ Day' : '☾ Night'}</span>
                </div>
                <div style={{position:'absolute',bottom:12,left:14,right:14}}>
                  <div className="font-display" style={{fontSize:'clamp(1.3rem,3vw,1.6rem)',color:'#fff',lineHeight:1}}>{cur.name}</div>
                  <div style={{fontSize:10,color:'rgba(255,255,255,0.45)',marginTop:3}}>{cur.area}</div>
                </div>
              </div>
              <div style={{padding:'clamp(14px,2.5vw,20px)'}}>
                <div style={{display:'flex',gap:7,marginBottom:12,flexWrap:'wrap'}}>
                  <span style={{fontSize:9,fontWeight:700,color:'var(--gold)',background:'rgba(245,166,35,0.1)',border:'1px solid rgba(245,166,35,0.2)',padding:'3px 10px',borderRadius:2,letterSpacing:'0.06em',textTransform:'uppercase'}}>{cur.type}</span>
                  <span style={{fontSize:9,color:'#555',padding:'3px 10px',border:'1px solid #222',borderRadius:2}}>⏱ {cur.dur}</span>
                </div>
                <p style={{fontSize:'clamp(12px,1.5vw,13px)',color:'rgba(255,255,255,0.48)',lineHeight:1.8,marginBottom:12}}>
                  {mode==='day' ? cur.dayDesc : cur.nightDesc}
                </p>
                <div style={{fontSize:11,color:'var(--gold)',background:'rgba(245,166,35,0.05)',border:'1px solid rgba(245,166,35,0.12)',padding:'8px 12px',marginBottom:14,lineHeight:1.5}}>⭐ {cur.highlight}</div>
                <a href={`https://wa.me/12509868284?text=Hi Jay, I'd love to include ${cur.name} in my Victoria tour!`} className="btn-primary" style={{display:'block',textAlign:'center',width:'100%',padding:11,fontSize:12}}>
                  Book including {cur.name.split(' ')[0]}
                </a>
              </div>
            </div>
            <div style={{display:'flex',gap:4,flexWrap:'wrap',marginTop:8}}>
              {stops.map((_,i)=>(
                <button key={i} onClick={()=>setSel(i)} style={{width:24,height:3,border:'none',cursor:'pointer',transition:'background 0.2s',background:sel===i ? 'var(--gold)' : '#2a2a2a'}} />
              ))}
            </div>
            <p style={{fontSize:11,color:'#444',lineHeight:1.7,marginTop:8,padding:'10px 12px',background:'rgba(255,255,255,0.02)',border:'1px solid #1a1a1a'}}>
              All 8 stops included. Ask Jay to customise the order and pace.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section style={{background:'#080808',padding:'clamp(40px,6vw,60px) 24px',borderTop:'1px solid #1a1a1a',textAlign:'center'}}>
      <h2 className="font-display" style={{fontSize:'clamp(1.8rem,5vw,3.5rem)',marginBottom:10}}>READY TO EXPLORE?</h2>
      <p style={{color:'rgba(255,255,255,0.3)',marginBottom:24,fontSize:'clamp(12px,1.8vw,13px)'}}>1 to 20 passengers. Contact Jay for pricing and custom itineraries.</p>
      <div style={{display:'flex',gap:10,justifyContent:'center',flexWrap:'wrap'}}>
        <a href="https://wa.me/12509868284?text=Hi Jay, I'd like to book a Victoria city tour!" className="btn-primary">Book via WhatsApp</a>
        <a href="tel:+12509868284" className="btn-secondary">📞 Call Jay</a>
      </div>
    </section>
    </>
  )
}

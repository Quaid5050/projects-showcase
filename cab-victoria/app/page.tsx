'use client'
import Link from 'next/link'
import Image from 'next/image'

const WA = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
const Chev = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
const Tick = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5" style={{flexShrink:0,marginTop:3}}><polyline points="20 6 9 17 4 12"/></svg>
const Star = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="var(--gold)"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>

const svcs = [
  {title:'Airport & Ferry Transfer',sub:'Zero-stress pickups. Flight tracking. All hours.',img:'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',href:'/services'},
  {title:'Victoria City Tours',sub:'Day & night. 8 iconic stops. Fully customisable.',img:'https://images.unsplash.com/photo-1775740738694-1d590125a704?q=80',href:'/tours'},
  {title:'Outstation Trips',sub:'Long-distance rides across BC. Comfortable & on time.',img:'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',href:'/services'},
  {title:'Stretch Limousine',sub:'Weddings, proms, anniversaries. Arrive like royalty.',img:'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=800&q=80',href:'/fleet'},
  {title:'Designated Driver',sub:"We drive your car home. Enjoy your night safely.",img:'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80',href:'/services'},
  {title:'Wheelchair Accessible',sub:'Ramp, tie-downs, trained driver. Everyone welcome.',img:'https://images.unsplash.com/photo-1604357209793-fca5dca89f97?w=800&q=80',href:'/fleet'},
]

const fleetItems = [
  {n:'Electric Cars',img:'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400&q=70'},
  {n:'Passenger Vans',img:'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=400&q=70'},
  {n:'20-Pax Bus',img:'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&q=70'},
  {n:'Town Car',img:'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&q=70'},
  {n:'Stretch Limo',img:'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=400&q=70'},
  {n:'Wheelchair Van',img:'https://images.unsplash.com/photo-1633466154054-399bf16156a2?q=80'},
  {n:'High Roof Van',img:'https://images.unsplash.com/photo-1642888374449-583bf9e1d4f5?q=80'},
]

const ticker = ['Electric Cars','Passenger Vans','Wheelchair Van','High Roof Transit','20-Pax Bus','Town Car','Stretch Limo']

export default function Home() {
  return (
    <>
    <style>{`
      /* ── service grid ── */
      .sg-top { display:grid; grid-template-columns:1fr 1fr; gap:3px; margin-bottom:3px; }
      .sg-bot { display:grid; grid-template-columns:repeat(4,1fr); gap:3px; }
      /* ── tours ── */
      .tours-grid { display:grid; grid-template-columns:1fr 1fr; gap:48px; align-items:center; }
      .tour-imgs  { display:grid; gap:3px; }
      /* ── fleet ── */
      .fleet-g { display:grid; grid-template-columns:repeat(7,1fr); gap:3px; }
      /* ── why jay ── */
      .why-grid { display:grid; grid-template-columns:1fr 1fr; gap:48px; align-items:center; }
      /* ── hero btns / stats ── */
      .h-btns  { display:flex; gap:10px; flex-wrap:wrap; }
      .h-stats { display:flex; gap:28px; flex-wrap:wrap; padding-top:24px; border-top:1px solid rgba(255,255,255,0.08); }

      @media(max-width:1100px){
        .fleet-g { grid-template-columns:repeat(4,1fr); }
      }
      @media(max-width:900px){
        .sg-bot  { grid-template-columns:repeat(2,1fr); }
        .tours-grid { grid-template-columns:1fr; gap:32px; }
        .why-grid   { grid-template-columns:1fr; gap:32px; }
        .fleet-g    { grid-template-columns:repeat(3,1fr); }
      }
      @media(max-width:640px){
        .sg-top  { grid-template-columns:1fr; }
        .sg-bot  { grid-template-columns:1fr 1fr; }
        .fleet-g { grid-template-columns:repeat(2,1fr); }
        .h-stats { gap:18px; }
      }
      @media(max-width:420px){
        .sg-bot  { grid-template-columns:1fr; }
        .h-btns > a { width:100%; justify-content:center; }
      }
    `}</style>

    {/* ── HERO ── */}
    <section style={{minHeight:'100svh',position:'relative',display:'flex',alignItems:'center',paddingTop:80,paddingBottom:60}}>
      <div style={{position:'absolute',inset:0,zIndex:0}}>
        <Image src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600&q=85" alt="Open road" fill style={{objectFit:'cover'}} priority unoptimized />
        <div style={{position:'absolute',inset:0,background:'linear-gradient(90deg,rgba(0,0,0,0.93) 0%,rgba(0,0,0,0.6) 55%,rgba(0,0,0,0.2) 100%)'}} />
        <div style={{position:'absolute',inset:0,background:'linear-gradient(0deg,rgba(10,10,10,1) 0%,transparent 30%)'}} />
      </div>

      <div className="wrap" style={{position:'relative',zIndex:1,width:'100%'}}>
        <div style={{maxWidth:620}}>
          <div style={{display:'inline-flex',alignItems:'center',gap:8,background:'rgba(245,166,35,0.12)',border:'1px solid rgba(245,166,35,0.3)',borderRadius:2,padding:'5px 14px',marginBottom:22}}>
            <div style={{width:7,height:7,borderRadius:'50%',background:'#4ade80',animation:'pulse 2s infinite'}} />
            <span style={{fontSize:10,fontWeight:700,letterSpacing:'0.14em',textTransform:'uppercase',color:'var(--gold)'}}>Victoria, BC · Available Now</span>
          </div>

          <h1 className="font-display" style={{fontSize:'clamp(2.8rem,10vw,7rem)',lineHeight:0.9,marginBottom:20}}>
            RIDE IN<br />
            <span style={{WebkitTextStroke:'2px var(--gold)',color:'transparent'}}>STYLE.</span><br />
            ARRIVE IN<br />COMFORT.
          </h1>

          <p style={{fontSize:'clamp(13px,2vw,16px)',color:'rgba(255,255,255,0.5)',lineHeight:1.8,maxWidth:480,marginBottom:28}}>
            Premium transportation across Victoria — airport transfers, city tours, outstation trips, and luxury vehicles. 1 to 20 passengers.
          </p>

          <div className="h-btns" style={{marginBottom:32}}>
            <a href="https://wa.me/12509868284" className="btn-primary"><WA /> Book via WhatsApp</a>
            <Link href="/tours" className="btn-secondary">Explore City Tours <Chev /></Link>
          </div>

          <div className="h-stats">
            {[['7+','Vehicle types'],['1–20','Passengers'],['24/7','Service'],['100%','Personal']].map(([n,l])=>(
              <div key={l}>
                <div className="font-display" style={{fontSize:'clamp(1.4rem,4vw,2.2rem)',color:'var(--gold)',lineHeight:1}}>{n}</div>
                <div style={{fontSize:10,color:'rgba(255,255,255,0.3)',letterSpacing:'0.08em',textTransform:'uppercase',marginTop:3}}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ── TICKER ── */}
    <div style={{background:'#0d0d0d',borderTop:'1px solid #1e1e1e',borderBottom:'1px solid #1e1e1e',padding:'12px 0',overflow:'hidden',whiteSpace:'nowrap'}}>
      <div style={{display:'inline-flex',animation:'ticker 22s linear infinite'}}>
        {[...ticker,...ticker,...ticker].map((f,i)=>(
          <span key={i} style={{display:'inline-flex',alignItems:'center',gap:10,padding:'0 28px',borderRight:'1px solid #1e1e1e',flexShrink:0}}>
            <span style={{width:5,height:5,borderRadius:'50%',background:'var(--gold)',display:'inline-block'}} />
            <span style={{fontSize:11,fontWeight:700,color:'#888',letterSpacing:'0.07em',textTransform:'uppercase'}}>{f}</span>
          </span>
        ))}
      </div>
    </div>

    {/* ── SERVICES ── */}
    <section style={{background:'#0a0a0a',padding:'clamp(48px,7vw,80px) 0'}}>
      <div className="wrap">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:28,flexWrap:'wrap',gap:12}}>
          <div>
            <div className="gold-bar" />
            <p style={{fontSize:10,fontWeight:700,letterSpacing:'0.14em',textTransform:'uppercase',color:'var(--gold)',marginBottom:6}}>What we offer</p>
            <h2 className="font-display" style={{fontSize:'clamp(1.8rem,5vw,3.8rem)',lineHeight:0.95}}>OUR SERVICES</h2>
          </div>
          <Link href="/services" className="btn-secondary" style={{fontSize:11,padding:'9px 18px'}}>View all</Link>
        </div>

        <div className="sg-top">
          {svcs.slice(0,2).map(s=>(
            <Link key={s.title} href={s.href} style={{textDecoration:'none',position:'relative',height:'clamp(200px,28vw,320px)',overflow:'hidden',display:'block'}}>
              <Image src={s.img} alt={s.title} fill style={{objectFit:'cover',transition:'transform 0.5s'}} unoptimized
                onMouseEnter={e=>e.currentTarget.style.transform='scale(1.04)'}
                onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'}
              />
              <div style={{position:'absolute',inset:0,background:'linear-gradient(0deg,rgba(0,0,0,0.88) 0%,rgba(0,0,0,0.08) 60%)'}} />
              <div style={{position:'absolute',bottom:0,left:0,right:0,padding:'clamp(14px,3vw,24px)'}}>
                <h3 className="font-display" style={{fontSize:'clamp(1.2rem,2.5vw,1.8rem)',lineHeight:1,marginBottom:6,color:'#fff'}}>{s.title}</h3>
                <p style={{fontSize:'clamp(11px,1.5vw,13px)',color:'rgba(255,255,255,0.5)',lineHeight:1.6}}>{s.sub}</p>
                <div style={{display:'flex',alignItems:'center',gap:5,fontSize:10,color:'var(--gold)',marginTop:10,fontWeight:700,letterSpacing:'0.08em',textTransform:'uppercase'}}>Learn more <Chev /></div>
              </div>
            </Link>
          ))}
        </div>

        <div className="sg-bot" style={{marginTop:3}}>
          {svcs.slice(2).map(s=>(
            <Link key={s.title} href={s.href} style={{textDecoration:'none',position:'relative',height:'clamp(140px,16vw,210px)',overflow:'hidden',display:'block'}}>
              <Image src={s.img} alt={s.title} fill style={{objectFit:'cover',transition:'transform 0.5s'}} unoptimized
                onMouseEnter={e=>e.currentTarget.style.transform='scale(1.05)'}
                onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'}
              />
              <div style={{position:'absolute',inset:0,background:'linear-gradient(0deg,rgba(0,0,0,0.9) 0%,rgba(0,0,0,0.05) 60%)'}} />
              <div style={{position:'absolute',bottom:0,left:0,right:0,padding:'clamp(10px,2vw,16px)'}}>
                <h3 style={{fontSize:'clamp(11px,1.5vw,13px)',fontWeight:700,color:'#fff',lineHeight:1.2,marginBottom:4}}>{s.title}</h3>
                <p style={{fontSize:'clamp(10px,1.2vw,11px)',color:'rgba(255,255,255,0.4)',lineHeight:1.5}}>{s.sub}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* ── TOURS ── */}
    <section style={{background:'#080808',padding:'clamp(48px,7vw,80px) 0',borderTop:'1px solid #1a1a1a'}}>
      <div className="wrap">
        <div className="tours-grid">
          <div>
            <div className="gold-bar" />
            <p style={{fontSize:10,fontWeight:700,letterSpacing:'0.14em',textTransform:'uppercase',color:'var(--gold)',marginBottom:6}}>Interactive</p>
            <h2 className="font-display" style={{fontSize:'clamp(1.8rem,4vw,3.5rem)',lineHeight:0.95,marginBottom:18}}>DISCOVER<br />VICTORIA</h2>
            <p style={{fontSize:'clamp(13px,1.8vw,15px)',color:'rgba(255,255,255,0.4)',lineHeight:1.9,marginBottom:18}}>Explore 8 iconic stops — from Butchart Gardens to the glowing Parliament at night. Preview each stop day and night before you book.</p>
            <div style={{display:'flex',flexDirection:'column',gap:8,marginBottom:24}}>
              {["Butchart Gardens · Inner Harbour · Craigdarroch Castle","BC Legislature night glow · Fisherman's Wharf","Beacon Hill Park · Fan Tan Alley · Dallas Road"].map(t=>(
                <div key={t} style={{display:'flex',gap:10,alignItems:'flex-start',fontSize:'clamp(12px,1.5vw,13px)',color:'rgba(255,255,255,0.38)'}}><Tick />{t}</div>
              ))}
            </div>
            <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
              <Link href="/tours" className="btn-primary">Explore Tour Stops</Link>
              <a href="https://wa.me/12509868284?text=Hi Jay, I'm interested in a Victoria city tour!" className="btn-secondary">Book a Tour</a>
            </div>
          </div>

          <div className="tour-imgs">
            <div style={{position:'relative',height:'clamp(150px,20vw,230px)',overflow:'hidden',marginBottom:3}}>
              <Image src="https://images.unsplash.com/photo-1688713866885-4cb1310b4939?q=80" alt="Inner Harbour" fill style={{objectFit:'cover'}} unoptimized />
              <div style={{position:'absolute',inset:0,background:'linear-gradient(0deg,rgba(0,0,0,0.6) 0%,transparent 50%)'}} />
              <div style={{position:'absolute',bottom:12,left:14}}>
                <div style={{fontSize:13,fontWeight:700,color:'#fff'}}>Inner Harbour</div>
                <div style={{fontSize:10,color:'var(--gold)',fontWeight:700,letterSpacing:'0.06em',textTransform:'uppercase'}}>Day & Night</div>
              </div>
            </div>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:3}}>
              {[['Butchart Gardens','https://images.unsplash.com/photo-1558449709-9215b1ec91de?q=80'],['Dallas Road','https://images.unsplash.com/photo-1651449815976-a0c9d04c5f52?q=80']].map(([n,img])=>(
                <div key={n} style={{position:'relative',height:'clamp(90px,10vw,140px)',overflow:'hidden'}}>
                  <Image src={img} alt={n} fill style={{objectFit:'cover'}} unoptimized />
                  <div style={{position:'absolute',inset:0,background:'rgba(0,0,0,0.45)'}} />
                  <div style={{position:'absolute',bottom:8,left:10,fontSize:10,fontWeight:600,color:'rgba(255,255,255,0.7)'}}>{n}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ── FLEET ── */}
    <section style={{background:'#0a0a0a',padding:'clamp(48px,7vw,80px) 0'}}>
      <div className="wrap">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:24,flexWrap:'wrap',gap:12}}>
          <div>
            <div className="gold-bar" />
            <h2 className="font-display" style={{fontSize:'clamp(1.8rem,5vw,3.8rem)',lineHeight:0.95}}>OUR FLEET</h2>
            <p style={{fontSize:11,color:'rgba(255,255,255,0.22)',marginTop:5}}>7 vehicles · 1 to 20 passengers</p>
          </div>
          <Link href="/fleet" className="btn-secondary" style={{fontSize:11,padding:'9px 18px'}}>See all</Link>
        </div>
        <div className="fleet-g">
          {fleetItems.map(f=>(
            <Link key={f.n} href="/fleet" style={{textDecoration:'none',position:'relative',height:'clamp(110px,14vw,190px)',overflow:'hidden',display:'block'}}>
              <Image src={f.img} alt={f.n} fill style={{objectFit:'cover',filter:'saturate(0.3) brightness(0.55)',transition:'all 0.4s'}} unoptimized
                onMouseEnter={e=>{e.currentTarget.style.filter='saturate(0.9) brightness(0.75)';e.currentTarget.style.transform='scale(1.05)'}}
                onMouseLeave={e=>{e.currentTarget.style.filter='saturate(0.3) brightness(0.55)';e.currentTarget.style.transform='scale(1)'}}
              />
              <div style={{position:'absolute',inset:0,background:'linear-gradient(0deg,rgba(0,0,0,0.9) 0%,transparent 55%)'}} />
              <div style={{position:'absolute',bottom:0,left:0,right:0,padding:'8px 10px'}}>
                <div style={{fontSize:'clamp(9px,1.2vw,11px)',fontWeight:700,color:'#fff',textTransform:'uppercase',letterSpacing:'0.04em',lineHeight:1.3}}>{f.n}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* ── WHY JAY ── */}
    <section style={{position:'relative',overflow:'hidden',padding:'clamp(48px,7vw,80px) 0'}}>
      <div style={{position:'absolute',inset:0}}>
        <Image src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1600&q=80" alt="bg" fill style={{objectFit:'cover',objectPosition:'center 40%'}} unoptimized />
        <div style={{position:'absolute',inset:0,background:'rgba(0,0,0,0.88)'}} />
      </div>
      <div className="wrap" style={{position:'relative',zIndex:1}}>
        <div className="why-grid">
          <div>
            <div className="gold-bar" />
            <h2 className="font-display" style={{fontSize:'clamp(1.8rem,4vw,3.5rem)',lineHeight:0.95,marginBottom:18}}>WHY BOOK<br />WITH JAY?</h2>
            <p style={{fontSize:'clamp(13px,1.8vw,15px)',color:'rgba(255,255,255,0.4)',lineHeight:1.9,marginBottom:22}}>When you call, Jay answers. When you book, Jay drives. No dispatch, no call centres — pure personal service.</p>
            <div style={{display:'flex',flexDirection:'column',gap:14,marginBottom:26}}>
              {[['On-time, every time','Flights tracked. Routes planned. Always early.'],['Direct & personal','No call centres. Jay responds personally.'],['All needs covered','Wheelchair accessible vehicle always available.'],['Assured service','Not a slogan — a promise.']].map(([t,d])=>(
                <div key={t} style={{display:'flex',gap:12}}>
                  <Tick />
                  <div>
                    <div style={{fontSize:'clamp(12px,1.5vw,13px)',fontWeight:600,color:'#ccc',marginBottom:2}}>{t}</div>
                    <div style={{fontSize:'clamp(11px,1.3vw,12px)',color:'rgba(255,255,255,0.28)',lineHeight:1.6}}>{d}</div>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/about" className="btn-secondary" style={{fontSize:11,padding:'10px 20px'}}>Meet Jay</Link>
          </div>

          <div style={{background:'rgba(245,166,35,0.04)',border:'1px solid rgba(245,166,35,0.15)',padding:'clamp(24px,4vw,48px)',textAlign:'center'}}>
            <div style={{fontSize:56,color:'rgba(245,166,35,0.15)',fontFamily:'serif',lineHeight:0.8,marginBottom:14}}>"</div>
            <blockquote className="font-display" style={{fontSize:'clamp(1.2rem,2.5vw,1.9rem)',lineHeight:1.2,color:'#e8e8e8',marginBottom:18}}>ASSURED SERVICE AT ALL TIMES</blockquote>
            <div style={{width:36,height:1,background:'var(--gold)',margin:'0 auto 14px'}} />
            <div style={{fontSize:10,color:'rgba(255,255,255,0.25)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:18}}>Jaydeep Mohan · Personal Driver</div>
            <div style={{display:'flex',gap:3,justifyContent:'center',marginBottom:22}}>{[1,2,3,4,5].map(i=><Star key={i} />)}</div>
            <a href="https://www.google.com/maps/search/1cab+victoria" target="_blank" rel="noreferrer" className="btn-secondary" style={{fontSize:11,padding:'10px 18px'}}>⭐ Leave a Review</a>
          </div>
        </div>
      </div>
    </section>

    {/* ── CTA ── */}
    <section style={{background:'#080808',padding:'clamp(48px,7vw,80px) 24px',borderTop:'1px solid #1a1a1a',textAlign:'center'}}>
      <h2 className="font-display" style={{fontSize:'clamp(2.2rem,8vw,5rem)',lineHeight:0.9,marginBottom:12}}>READY TO<br /><span style={{color:'var(--gold)'}}>RIDE?</span></h2>
      <p style={{fontSize:'clamp(12px,1.8vw,14px)',color:'rgba(255,255,255,0.3)',lineHeight:1.8,maxWidth:380,margin:'0 auto 28px'}}>Text 2–3 hrs ahead with pickup location, date/time & destination for guaranteed on-time service.</p>
      <div style={{display:'flex',gap:10,justifyContent:'center',flexWrap:'wrap'}}>
        <a href="https://wa.me/12509868284" className="btn-primary"><WA />WhatsApp</a>
        <a href="sms:+12509868284" className="btn-secondary">Text</a>
        <a href="tel:+12509868284" className="btn-secondary">📞 Call</a>
        <Link href="/contact" className="btn-secondary">Contact</Link>
      </div>
    </section>
    </>
  )
}

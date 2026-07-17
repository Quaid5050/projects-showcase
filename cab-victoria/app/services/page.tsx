'use client'
import Image from 'next/image'
import Link from 'next/link'

const Tick = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5" style={{flexShrink:0,marginTop:4}}><polyline points="20 6 9 17 4 12"/></svg>

const svcs = [
  {id:'airport-transfer',title:'Airport & Ferry Transfer',tagline:'Send your flight details for Victoria Airport (YYJ).',img:'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=80',points:['Victoria International Airport (YYJ)','BC Ferries — Swartz Bay & Tsawwassen','Real-time flight tracking','Meet & greet with name board','All hours — early morning to late night'],note:'Text 2–3 hrs ahead with location, date, time, number of passengers and bags.',href:null},
  {id:'city-tours',title:'Victoria City Tours',tagline:'Specialist in personalized Victoria tours — day or night.',img:'/tours/inner-harbour-day.webp',points:['1 hour Express tour','Victoria City Highlights 2 hours','Grand City Tour 3 hours','Victoria Garden Tour 4 hours','Full day Tour','1 to 20 passengers'],note:'See the Tours page to preview every stop with day & night images.',href:'/tours'},
  {id:'outstation-trips',title:'Outstation Trips',tagline:'Victoria is just the beginning.',img:'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=900&q=80',points:['Vancouver','Whistler','Nanaimo','Tofino','Port Hardy','Flexible departure times · Multiple vehicle sizes'],note:'Contact Jay for custom route pricing.',href:null},
  {id:'cowichan-valley',title:'Cowichan Valley Wine / Cider / Distillery & Craft Spirits Tour',tagline:'4–6 hours. Discover the best of Cowichan Valley.',img:'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=900&q=80',points:['Wine, cider, distillery and craft spirits tastings','Scenic drive through Cowichan Valley','Visit award-winning estates and hidden gems','Flexible 4–6 hour itinerary','1 to 20 passengers'],note:'Let Jay plan the perfect tasting route for your group.',href:null},
  {id:'malahat-skywalk',title:'Malahat Skywalk & Castle Tour',tagline:'4–5 hours. Walk above the treetops and visit a castle.',img:'/services/malahat-tour.jpg',points:['Breathtaking spiral tower with panoramic views','Walk through ancient Douglas Fir canopy','Castle visit included in the tour','Scenic drive along the Malahat','Can be combined with wine tour or city tour'],note:'Popular experience — book ahead for the best times.',href:null},
  {id:'designated-driver',title:'Designated Driver',tagline:'Your car, our driver. Enjoy responsibly.',img:'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=900&q=80',points:['Jay drives your own vehicle home','Ideal for dinners, weddings, nights out','Licensed and insured driver','Available across Greater Victoria','Book ahead or call on the night'],note:'Popular on weekends — book early.',href:null},
  {id:'uhaul-drivers',title:'U-Haul Drivers',tagline:'Moving day, professionally handled.',img:'/services/uhaul-driver.jpg',points:['Licensed for local and long-distance moves','Available across Victoria and BC','Experienced with large vehicle handling','Flexible scheduling','You focus on the move, we drive'],note:'Perfect for those who prefer not to drive a large truck.',href:null},
  {id:'stretch-limousine',title:'Stretch Limousine',tagline:'Arrive like royalty. Leave an impression.',img:'/vehicles/limo-8pax.webp',points:['Weddings, proms, anniversaries, celebrations','Corporate and VIP transfers','Premium interior · privacy screen · drinks console','Up to 10 passengers in luxury','Advance booking recommended'],note:'Book early for peak dates like prom season and summer weddings.',href:null},
  {id:'wheelchair-accessible',title:'Wheelchair Accessible',tagline:'Everyone deserves a comfortable ride.',img:'/services/wheelchair-van.jpg',points:['Rear ramp access — fully equipped van','Secured tie-downs for all wheelchair types','Trained and experienced driver','Available for all service types'],note:'Mention accessibility needs at booking so Jay can prepare.',href:null},
]

export default function ServicesPage() {
  return (
    <>
    <style>{`
      .svc-row  { display:grid; grid-template-columns:380px 1fr; border:1px solid #1a1a1a; overflow:hidden; transition:border-color 0.3s; margin-bottom:3px; }
      .svc-row:hover { border-color:rgba(245,166,35,0.2); }
      .svc-img  { position:relative; min-height:260px; }
      .svc-body { padding:clamp(20px,3vw,40px); background:#0f0f0f; display:flex; flex-direction:column; justify-content:center; }

      @media(max-width:860px){
        .svc-row { grid-template-columns:1fr; }
        .svc-img { height:220px; min-height:unset; }
        .svc-img  { order:0 !important; }
        .svc-body { order:1 !important; }
      }
      @media(max-width:480px){
        .svc-body { padding:18px 16px; }
        .svc-img  { height:180px; }
      }
    `}</style>

    {/* Hero */}
    <section style={{height:'clamp(240px,40vw,440px)',position:'relative',display:'flex',alignItems:'flex-end',paddingBottom:40,overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0}}>
        <Image src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1600&q=85" alt="Services" fill style={{objectFit:'cover'}} unoptimized priority />
        <div style={{position:'absolute',inset:0,background:'linear-gradient(0deg,rgba(0,0,0,0.94) 0%,rgba(0,0,0,0.32) 60%,rgba(0,0,0,0.12) 100%)'}} />
      </div>
      <div className="wrap page-hero" style={{position:'relative',zIndex:1,width:'100%'}}>
        <div className="gold-bar" />
        <p style={{fontSize:10,fontWeight:700,letterSpacing:'0.14em',textTransform:'uppercase',color:'var(--gold)',marginBottom:6}}>Everything Jay does</p>
        <h1 className="font-display" style={{fontSize:'clamp(2.5rem,8vw,6rem)',lineHeight:0.88}}>OUR<br /><span style={{color:'var(--gold)'}}>SERVICES</span></h1>
        <p style={{color:'rgba(255,255,255,0.4)',maxWidth:460,lineHeight:1.8,marginTop:10,fontSize:'clamp(12px,1.8vw,15px)'}}>From airport runs to stretch limos. Contact Jay for pricing — he responds personally and quickly.</p>
      </div>
    </section>

    {/* Services list */}
    <section style={{background:'#0a0a0a',padding:'clamp(32px,5vw,56px) 0'}}>
      <div className="wrap">
        {svcs.map((s,i)=>(
          <div key={s.title} id={s.id} className="svc-row" style={{scrollMarginTop:80}}>
            <div className="svc-img" style={{order: i%2===0 ? 0 : 1}}>
              <Image src={s.img} alt={s.title} fill style={{objectFit:'cover',filter:'brightness(0.75)',transition:'all 0.5s'}} unoptimized
                onMouseEnter={e=>{e.currentTarget.style.filter='brightness(0.9)';e.currentTarget.style.transform='scale(1.04)'}}
                onMouseLeave={e=>{e.currentTarget.style.filter='brightness(0.75)';e.currentTarget.style.transform='scale(1)'}}
              />
              <div style={{position:'absolute',inset:0,background:'linear-gradient(0deg,rgba(0,0,0,0.35) 0%,transparent 55%)'}} />
            </div>
            <div className="svc-body" style={{order: i%2===0 ? 1 : 0}}>
              <h2 className="font-display" style={{fontSize:'clamp(1.3rem,2.5vw,1.9rem)',lineHeight:1,marginBottom:4,color:'#e8e8e8'}}>{s.title}</h2>
              <p style={{fontSize:'clamp(11px,1.5vw,12px)',color:'var(--gold)',fontStyle:'italic',marginBottom:14}}>{s.tagline}</p>
              <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:7,marginBottom:14}}>
                {s.points.map(p=>(
                  <li key={p} style={{display:'flex',alignItems:'flex-start',gap:9,fontSize:'clamp(12px,1.5vw,13px)',color:'rgba(255,255,255,0.42)',lineHeight:1.6}}>
                    <Tick />{p}
                  </li>
                ))}
              </ul>
              <div style={{background:'rgba(245,166,35,0.05)',border:'1px solid rgba(245,166,35,0.12)',borderRadius:2,padding:'8px 12px',fontSize:'clamp(11px,1.3vw,12px)',color:'rgba(255,255,255,0.28)',lineHeight:1.6,marginBottom:14}}>
                💡 {s.note}
              </div>
              <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
                {s.href && <Link href={s.href} className="btn-primary" style={{fontSize:11,padding:'8px 16px'}}>Preview stops</Link>}
                <a href={`https://wa.me/12509868284?text=Hi Jay, I'm interested in ${s.title}.`} className="btn-secondary" style={{fontSize:11,padding:'8px 16px'}}>Enquire via WhatsApp</a>
                <a href={`sms:+12509868284?body=Hi Jay, I'm interested in ${s.title}.`} className="btn-secondary" style={{fontSize:11,padding:'8px 16px'}}>Text</a>
                <a href={`mailto:1cab.victoria@gmail.com?subject=${s.title} Enquiry`} className="btn-secondary" style={{fontSize:11,padding:'8px 16px'}}>Email</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section style={{background:'#080808',padding:'clamp(40px,6vw,60px) 24px',borderTop:'1px solid #1a1a1a',textAlign:'center'}}>
      <h2 className="font-display" style={{fontSize:'clamp(1.8rem,5vw,3.5rem)',marginBottom:10}}>READY TO BOOK?</h2>
      <p style={{color:'rgba(255,255,255,0.3)',marginBottom:24,fontSize:'clamp(12px,1.8vw,13px)'}}>Contact Jay directly. Quick response, personal service, no hidden fees.</p>
      <div style={{display:'flex',gap:10,justifyContent:'center',flexWrap:'wrap'}}>
        <a href="sms:+12509868284" className="btn-primary">💬 Text Jay</a>
        <a href="mailto:1cab.victoria@gmail.com" className="btn-secondary">✉ Email</a>
        <a href="https://wa.me/12509868284" className="btn-secondary">WhatsApp</a>
        <a href="tel:+12509868284" className="btn-secondary">📞 Call</a>
      </div>
    </section>
    </>
  )
}
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const RESTAURANTS = [
  {
    img:'https://static.wixstatic.com/media/7a7eb7_906799b6457a4adaa6dbea4d6a0b2713~mv2.jpg/v1/fill/w_1300,h_844,al_c,q_85,enc_avif,quality_auto/7a7eb7_906799b6457a4adaa6dbea4d6a0b2713~mv2.jpg',
    title:"Miss T's Kitchen",
    desc:"Award-winning Jamaican fusion cuisine in a charming garden setting in Ocho Rios. A must-visit for authentic island flavours with a creative twist.",
    tags:['Jamaican Fusion','Garden Dining','Award-Winning'],
    url:'https://www.misstskitchenja.com',
    dist:'10 min drive',
  },
  {
    img:'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFTuFnak3BQR9gXpcXIDwDycd5mAwZRiv9z_hJr5WRcN4zP4ohcUZxeOx2VNQyLRnETQVufVGS6oaiQPe3SSD0IS6dqBDg-nG_MV3xd1oLF9r4OAo7J1rIEKGOZPtE-gyhTlK1TsuevqOPf=s1360-w1360-h1020-rw',
    title:'Scotchies Ocho Rios',
    desc:"The ultimate jerk experience — authentic wood-fire jerk chicken, pork, and sausage prepared the traditional Jamaican way. An iconic roadside spot.",
    tags:['Jerk Chicken','Authentic','Roadside'],
    url:'https://www.scotchies.com',
    dist:'15 min drive',
  },
  {
    img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/fa/da/78/caption.jpg?w=1100&h=1100&s=1',
    title:"Evita's Italian Restaurant",
    desc:"Perched on a hilltop with stunning views of Ocho Rios Bay. Italian cuisine with a Jamaican twist, served in a beautifully restored Victorian house.",
    tags:['Italian-Jamaican','Scenic Views','Fine Dining'],
    url:'https://www.evitasjamaica.com',
    dist:'10 min drive',
  },
  {
    img:'/huh.jpg',
    title:'Margaritaville Ocho Rios',
    desc:"Famous beachfront restaurant and bar with water slides, trampolines, and lively entertainment. Great food, cocktails, and the ultimate beach party atmosphere.",
    tags:['Beachfront','Cocktails','Entertainment'],
    url:'https://www.margaritavillecaribbean.com/ocho-rios',
    dist:'10 min drive',
  },
  {
    img:'https://lh3.googleusercontent.com/gps-cs-s/APNQkAE6qw4TfBk8Jr_Ag6_cEJfhEyDBOgnOD_HO-6nXxVn7paJvHegBN3I8xLzZ_zxuXGZ6nOglYNNpQ3YJYrTwjIC1N5v8YcdGT5uMrlF4W7KgAuDVuj4SmcAcmKcWM76eefB6Ac_j4Q=s1360-w1360-h1020-rw',
    title:'Sugar Pot Ruins Beach Bar',
    desc:"A hidden gem located on the remains of an old sugar plantation right by the sea. Authentic Jamaican seafood and drinks in a unique, atmospheric setting.",
    tags:['Beachfront','Seafood','Historic'],
    url:'https://www.facebook.com/SugarPotRuinsBeachBar',
    dist:'12 min drive',
  },
];

const ACTIVITIES = [
  {img:'https://i.postimg.cc/W3rZB8VZ/image.png', title:"Dunn's River Falls", desc:'Climb the world-famous terraced waterfalls — one of Jamaica\'s most iconic natural attractions.', dist:'5 min drive'},
  {img:'https://images.unsplash.com/photo-1722761478075-720dc58e63d1?q=80', title:'Blue Hole', desc:'Hidden gem featuring stunning natural pools and waterfalls where you can swim, jump, and rope swing.', dist:'20 min drive'},
  {img:'https://images.unsplash.com/photo-1466854076813-4aa9ac0fc347?q=80', title:'Mystic Mountain', desc:'Bobsled ride, zipline through rainforest canopy, and panoramic views of Ocho Rios.', dist:'10 min drive'},
  {img:'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80', title:'Snorkeling & Diving', desc:'Explore the vibrant coral reefs and marine life of the Caribbean Sea.', dist:'15 min drive'},
  {img:'https://images.unsplash.com/photo-1562701193-2c694bd0fe15?q=80', title:'White River Tubing', desc:'Float peacefully down the scenic White River surrounded by lush tropical greenery.', dist:'25 min drive'},
  {img:'https://images.unsplash.com/photo-1536869338989-e7ffd2297454?q=80', title:'Beaches', desc:'White sand beaches nearby — Ocho Rios Bay Beach, James Bond Beach, and Reggae Beach.', dist:'5–10 min drive'},
];

export default function ThingsToDoPage() {
  return (
    <>
      <Navbar /><ScrollToTop />

      {/* Hero */}
      <div style={{position:'relative',background:'#0E1729',padding:'80px 0',textAlign:'center',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,backgroundImage:`url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1400&q=60)`,backgroundSize:'cover',backgroundPosition:'center',opacity:0.2}}/>
        <div className="container" style={{position:'relative',zIndex:1}}>
          <p className="section-label">Explore Ocho Rios</p>
          <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(32px,5vw,52px)',fontWeight:700,color:'#fff',marginTop:10}}>Things To Do</h1>
          <p style={{fontSize:15,color:'rgba(255,255,255,0.7)',marginTop:12,maxWidth:540,margin:'12px auto 0'}}>From world-famous waterfalls to authentic Jamaican dining — everything you need for an unforgettable stay.</p>
        </div>
      </div>


      {/* Local Dining */}
      <section className="section-pad" style={{background:'#FDF8F0'}}>
        <div className="container">
          <div style={{textAlign:'center',marginBottom:36}}>
            <p className="section-label">Taste Jamaica</p>
            <div className="gold-divider center"/>
            <h2 className="section-title">Local Dining & Restaurants</h2>
            <p style={{fontSize:14,color:'#777',marginTop:12,maxWidth:540,margin:'12px auto 0'}}>Experience the best of Jamaican cuisine at these popular restaurants near Ocho Rios — from authentic jerk to fine dining with a view.</p>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(340px,1fr))',gap:24}}>
            {RESTAURANTS.map(r=>(
              <div key={r.title} style={{background:'#fff',border:'1px solid #EDE8E0',borderRadius:8,overflow:'hidden',transition:'all 0.3s',display:'flex',flexDirection:'column'}} onMouseEnter={e=>{e.currentTarget.style.boxShadow='0 8px 32px rgba(0,0,0,0.1)';e.currentTarget.style.transform='translateY(-3px)'}} onMouseLeave={e=>{e.currentTarget.style.boxShadow='none';e.currentTarget.style.transform='translateY(0)'}}>
                <div style={{height:210,overflow:'hidden',position:'relative'}}>
                  <img src={r.img} alt={r.title} loading="lazy" style={{width:'100%',height:'100%',objectFit:'cover',transition:'transform 0.5s'}} onMouseEnter={e=>e.target.style.transform='scale(1.06)'} onMouseLeave={e=>e.target.style.transform='scale(1)'}/>
                  <div style={{position:'absolute',top:14,right:14,background:'rgba(26,37,64,0.85)',color:'#fff',padding:'4px 12px',borderRadius:20,fontSize:11,fontWeight:600,backdropFilter:'blur(4px)'}}>📍 {r.dist}</div>
                </div>
                <div style={{padding:'20px',flex:1,display:'flex',flexDirection:'column'}}>
                  <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:19,color:'#1A2540',fontWeight:700,marginBottom:8}}>{r.title}</h3>
                  <p style={{fontSize:13,color:'#666',lineHeight:1.7,marginBottom:14,flex:1}}>{r.desc}</p>
                  <div style={{display:'flex',gap:6,flexWrap:'wrap',marginBottom:14}}>
                    {r.tags.map(t=><span key={t} style={{background:'#FDF8F0',border:'1px solid #EDE8E0',fontSize:11,padding:'3px 10px',borderRadius:20,color:'#888'}}>{t}</span>)}
                  </div>
                  <a href={r.url} target="_blank" rel="noreferrer" style={{display:'inline-flex',alignItems:'center',gap:6,color:'#C9933A',fontSize:13,fontWeight:600,textDecoration:'none',transition:'color 0.2s'}} onMouseEnter={e=>e.target.style.color='#a87a2e'} onMouseLeave={e=>e.target.style.color='#C9933A'}>
                    Visit Website <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
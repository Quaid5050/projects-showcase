import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import WhyChooseUs from '../components/WhyChooseUs';
import ProcessSection from '../components/ProcessSection';
import CTASection from '../components/CTASection';
import LeadForm from '../components/LeadForm';
import AnimatedSection from '../components/AnimatedSection';
import imgFurniture    from '../assets/images/hero-furniture.jpg';
import imgAppliance    from '../assets/images/hero-appliance.jpg';
import imgYard         from '../assets/images/hero-yard.jpg';
import imgConstruction from '../assets/images/hero-construction.jpg';
import imgProperty     from '../assets/images/hero-property.jpg';
import imgCommercial   from '../assets/images/hero-commercial.jpg';
import imgBefore       from '../assets/images/before-junk.jpg';
import imgAfter        from '../assets/images/after-clean.jpg';

const SERVICES = [
  { image:imgFurniture,    icon:'🛋️', title:'Furniture Removal',      to:'/services/furniture',    description:'Sofas, chairs, tables, mattresses, cabinets — gone fast and professionally.' },
  { image:imgAppliance,    icon:'🏠', title:'Appliance Removal',       to:'/services/appliance',    description:'Old fridges, washers, dryers, and stoves removed safely and efficiently.' },
  { image:imgYard,         icon:'🌿', title:'Yard Waste Removal',      to:'/services/yard',         description:'Branches, leaves, and outdoor debris cleared so your yard shines again.' },
  { image:imgConstruction, icon:'🔨', title:'Construction Debris',     to:'/services/construction', description:'Renovation waste, wood, and drywall hauled away fast for any project.' },
  { image:imgProperty,     icon:'🔑', title:'Property Cleanups',       to:'/services/property',     description:'Garage cleanouts, move-outs, estate sales — total property clearing.' },
  { image:imgCommercial,   icon:'🏢', title:'Commercial Junk Removal', to:'/services/commercial',   description:'Offices, storage areas, and commercial spaces cleared with minimal disruption.' },
];

const AUDIENCES = [
  { icon:'🏡', title:'Homeowners',        desc:'Reclaim your garage, basement, or yard. We make home cleanups fast and stress-free.' },
  { icon:'🔑', title:'Property Managers', desc:'Fast cleanouts between tenants. Trusted by landlords across South Florida.' },
  { icon:'💼', title:'Small Businesses',  desc:'Keep your commercial space clean and organized with reliable junk removal.' },
];

const MARQUEE = ['Furniture Removal','Appliance Removal','Yard Waste','Construction Debris','Property Cleanouts','Commercial Cleanup','Same-Day Service'];

const FEATURES = [
  ['⚡','Fast Response',    'We respond within hours and offer same-day service.'],
  ['💰','Honest Pricing',   'Upfront estimates. No hidden fees. Ever.'],
  ['♻️','Eco-Responsible', 'We donate and recycle whenever possible.'],
  ['📍','Locally Trusted',  'South Florida based and community focused.'],
];

function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); }});
    }, { threshold: 0.07, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function Home() {
  useReveal();
  useEffect(() => {
    document.title = 'Junk Pro Service | Local Junk Removal & Property Cleanup Experts';
    const m = document.querySelector('meta[name="description"]') || Object.assign(document.createElement('meta'),{name:'description'});
    m.setAttribute('content','Fast, reliable, and affordable junk removal for homeowners, property managers, and small businesses. Contact Junk Pro Service for professional cleanup help.');
    if (!m.parentNode) document.head.appendChild(m);
  }, []);

  return (
    <main className="main-content page-enter" id="main">

      <Hero />

      {/* Marquee */}
      <div className="marquee-track" aria-hidden="true">
        <div className="marquee-inner">
          {[...MARQUEE,...MARQUEE].map((item,i) => (
            <span key={i} className="marquee-item">{item}<span className="marquee-dot"/></span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="stats-bar" aria-label="Business highlights">
        <div className="container">
          <div className="stats-grid">
            {[['500+','Jobs Completed'],['5 ★','Customer Rating'],['Same Day','Available'],['100%','Satisfaction']].map(([v,l],i) => (
              <div key={l} className={`stat-item reveal delay-${i+1}`}><h3>{v}</h3><p>{l}</p></div>
            ))}
          </div>
        </div>
      </div>

      {/* Who We Are — WHITE section */}
      <AnimatedSection className="section-pad" style={{ background:'#ffffff' }} aria-labelledby="intro-h">
        <div className="container">
          <div className="pg-two-col" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'var(--space-12)', alignItems:'center' }}>
            <div className="reveal-left">
              <span className="label" style={{ color:'var(--yellow-dark)' }}>Who We Are</span>
              <h2 id="intro-h" style={{ fontSize:'clamp(1.8rem,4vw,2.8rem)', fontWeight:900, color:'#111111', marginTop:'var(--space-3)', marginBottom:'var(--space-4)', letterSpacing:'-0.5px' }}>
                Cleanups Made <span style={{ color:'var(--yellow-dark)' }}>Simple</span>
              </h2>
              <div style={{ width:48, height:3, background:'var(--yellow)', borderRadius:2, marginBottom:'var(--space-5)' }} />
              <p style={{ color:'#555555', lineHeight:1.9, marginBottom:'var(--space-6)' }}>
                Junk Pro Service helps homeowners, property managers, and small businesses remove
                unwanted items quickly and professionally. From furniture and appliances to yard
                waste and construction debris — we make cleanups simple from start to finish.
              </p>
              <Link to="/about" className="btn btn-primary">Learn About Us →</Link>
            </div>
            <div className="reveal-right" style={{ display:'flex', flexDirection:'column', gap:'var(--space-4)' }}>
              {FEATURES.map(([icon,title,desc]) => (
                <div key={title} className="feature-item feature-item-light">
                  <span className="feature-icon" aria-hidden="true">{icon}</span>
                  <div>
                    <div className="feature-title" style={{ color:'#111111' }}>{title}</div>
                    <div className="feature-desc" style={{ color:'#666666' }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Services — LIGHT GRAY section */}
      <AnimatedSection className="section-pad" style={{ background:'#f5f5f5' }} aria-labelledby="services-h">
        <div className="container">
          <div className="section-header reveal">
            <span className="label" style={{ color:'var(--yellow-dark)' }}>What We Do</span>
            <h2 id="services-h" style={{ color:'#111111' }}>Our Services</h2>
            <p style={{ color:'#555555' }}>From single-item pickups to full property cleanouts — we handle it all.</p>
          </div>
          <div className="pg-three-col" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'var(--space-5)' }}>
            {SERVICES.map((s,i) => (
              <ServiceCard key={s.title} {...s} className={`service-card-light delay-${(i%3)+1}`} />
            ))}
          </div>
          <div style={{ textAlign:'center', marginTop:'var(--space-10)' }} className="reveal">
            <Link to="/services" className="btn btn-primary btn-lg">View All Services →</Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Before / After */}
      <section style={{ background:'var(--black)', padding:'var(--space-20) 0' }} aria-labelledby="ba-h">
        <div className="container">
          <div className="pg-ba-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:4, borderRadius:'var(--radius-2xl)', overflow:'hidden', minHeight:380 }}>
            <div className="reveal-left" style={{ position:'relative', overflow:'hidden' }}>
              <img src={imgBefore} alt="Cluttered property before junk removal" loading="lazy" style={{ width:'100%', height:'100%', objectFit:'cover', filter:'grayscale(25%)' }}/>
              <div style={{ position:'absolute', inset:0, background:'rgba(0,0,0,0.35)' }}/>
              <span style={{ position:'absolute', top:'1rem', left:'1rem', background:'var(--yellow)', color:'var(--black)', fontWeight:900, fontSize:'0.65rem', letterSpacing:3, textTransform:'uppercase', padding:'4px 12px', borderRadius:100 }}>Before</span>
            </div>
            <div className="reveal-right" style={{ position:'relative', overflow:'hidden' }}>
              <img src={imgAfter} alt="Clean property after junk removal" loading="lazy" style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
              <div style={{ position:'absolute', inset:0, background:'rgba(0,0,0,0.15)' }}/>
              <span style={{ position:'absolute', top:'1rem', right:'1rem', background:'var(--yellow)', color:'var(--black)', fontWeight:900, fontSize:'0.65rem', letterSpacing:3, textTransform:'uppercase', padding:'4px 12px', borderRadius:100 }}>After</span>
            </div>
          </div>
          <div className="reveal" style={{ textAlign:'center', marginTop:'var(--space-8)' }}>
            <span className="label" id="ba-h">The Transformation</span>
            <h2 style={{ fontSize:'clamp(1.6rem,3.5vw,2.6rem)', fontWeight:900, color:'var(--white)', marginTop:'var(--space-3)', marginBottom:'var(--space-4)' }}>
              From Cluttered to <span className="txt-yellow">Spotless</span>
            </h2>
            <p style={{ color:'var(--text-muted)', maxWidth:500, margin:'0 auto var(--space-6)' }}>
              We help you reclaim your property without the stress. One call and our crew handles everything.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg">Book Your Cleanup</Link>
          </div>
        </div>
      </section>

      {/* Process — WHITE section */}
      <ProcessSection />

      {/* Lead Gen */}
      <AnimatedSection className="section-pad" style={{ background:'var(--bg-body)' }} aria-labelledby="lead-h">
        <div className="container">
          <div className="pg-two-col" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'var(--space-12)', alignItems:'start' }}>
            <div className="reveal-left">
              <span className="label">Free Estimate</span>
              <h2 id="lead-h" style={{ fontSize:'clamp(1.8rem,4vw,2.8rem)', fontWeight:900, color:'var(--white)', margin:'var(--space-3) 0 var(--space-4)', letterSpacing:'-0.5px' }}>
                Need Junk Gone <span className="txt-yellow">Fast?</span>
              </h2>
              <div style={{ width:48, height:3, background:'var(--yellow)', borderRadius:2, marginBottom:'var(--space-5)' }} />
              <p style={{ color:'var(--text-muted)', lineHeight:1.9, marginBottom:'var(--space-6)' }}>
                Tell us what needs to be removed and we'll get back to you with a fast, honest estimate.
                No obligation. No hidden fees.
              </p>
              <a href="tel:+17543272760" className="hero-phone-link" aria-label="Call Junk Pro Service">
                📞 +1 754-327-2760
              </a>
              <p style={{ fontSize:'var(--fs-sm)', color:'var(--text-faint)', marginTop:'var(--space-3)' }}>Or fill out the form — we'll reach you fast.</p>
            </div>
            <div className="reveal-right"><LeadForm /></div>
          </div>
        </div>
      </AnimatedSection>

      {/* Audiences — WHITE section */}
      <AnimatedSection className="section-pad" style={{ background:'#ffffff' }} aria-labelledby="audience-h">
        <div className="container">
          <div className="section-header reveal">
            <span className="label" style={{ color:'var(--yellow-dark)' }}>Who We Serve</span>
            <h2 id="audience-h" style={{ color:'#111111' }}>Built for Everyone</h2>
            <p style={{ color:'#555555' }}>Whether you're a homeowner, landlord, or business owner — we've got you.</p>
          </div>
          <div className="pg-three-col" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'var(--space-5)' }}>
            {AUDIENCES.map((a,i) => (
              <div key={a.title} className={`audience-card audience-card-light reveal delay-${i+1}`}>
                <span className="audience-icon" aria-hidden="true">{a.icon}</span>
                <h3 style={{ color:'#111111' }}>{a.title}</h3>
                <p style={{ color:'#555555' }}>{a.desc}</p>
                <Link to="/contact" className="btn btn-primary btn-sm" style={{ marginTop:'var(--space-5)' }}>Get Started →</Link>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <CTASection title="Ready to Clear the Clutter?"
        text="Professional junk removal and property cleanup services are just one message away."
        primaryLabel="Contact Junk Pro Service" primaryTo="/contact" secondaryLabel="Call Us Now" />
    </main>
  );
}

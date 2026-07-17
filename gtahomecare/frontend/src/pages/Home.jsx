import { Link } from 'react-router-dom';
import { Heart, Shield, Clock, Users, Phone, Star, CheckCircle, ArrowRight, Home, UserCheck, RefreshCw, Footprints, Activity } from 'lucide-react';
import ServiceCarousel from '../components/ServiceCarousel';

const services = [
  { icon: <Home size={26} color="var(--red)" />, title: 'Home Care', desc: 'Professional in-home support tailored to daily needs, enabling independence and comfort.', path: '/services/home-care' },
  { icon: <UserCheck size={26} color="var(--red)" />, title: 'North York Senior Care', desc: 'Dedicated senior care for North York families — reliable, local, and deeply personal.', path: '/services/north-york-senior-care' },
  { icon: <Users size={26} color="var(--red)" />, title: 'Companion Care', desc: 'Meaningful companionship and social engagement to brighten every day.', path: '/services/companion-care' },
  { icon: <RefreshCw size={26} color="var(--red)" />, title: 'Respite Care', desc: 'Temporary relief for family caregivers — rest easy knowing your loved one is in good hands.', path: '/services/respite-care' },
  { icon: <Clock size={26} color="var(--red)" />, title: '24-Hour Home Care', desc: 'Around-the-clock support from trained caregivers for those needing continuous care.', path: '/services/24-hour-home-care' },
  { icon: <Heart size={26} color="var(--red)" />, title: 'Personal Care Services', desc: 'Dignified assistance with bathing, grooming, hygiene, and mobility — done with compassion.', path: '/services/personal-care-services' },
  { icon: <Footprints size={26} color="var(--red)" />, title: 'Foot Spa & Nail Grooming', desc: 'Relaxing foot spa and gentle nail grooming for seniors, done with care and hygiene in mind.', path: '/services/foot-spa-nail-grooming' },
  { icon: <Activity size={26} color="var(--red)" />, title: 'Physiotherapy', desc: 'Professional physiotherapy to improve mobility, strength, and recovery in the comfort of home.', path: '/services/physiotherapy' },
];

const whyUs = [
  { icon: <UserCheck size={22} color="var(--red)" />, title: 'Experienced Professionals', desc: 'All caregivers undergo thorough screening, training, and ongoing evaluation.' },
  { icon: <Heart size={22} color="var(--red)" />, title: 'Personalized Care Plans', desc: 'Every plan is built around medical history, mobility, lifestyle, and family expectations.' },
  { icon: <Shield size={22} color="var(--red)" />, title: 'Client-Focused Communication', desc: 'We maintain ongoing communication with families for transparency and consistency.' },
  { icon: <Clock size={22} color="var(--red)" />, title: 'Flexible Scheduling', desc: 'From a few hours per week to full-time live-in support — we scale with your needs.' },
];

const testimonials = [
  { name: 'Margaret T.', loc: 'North York', text: 'The team at GTA Homecare has been an absolute blessing. My mother receives exceptional care every single day.' },
  { name: 'James R.', loc: 'Etobicoke', text: 'We tried several agencies before finding GTA Homecare. Reliable, caring, and they truly treat family as their own.' },
  { name: 'Priya S.', loc: 'Scarborough', text: 'The 24-hour care for my father gave our entire family peace of mind. The caregiver is patient and genuinely caring.' },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '90vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <picture>
          <source media="(max-width: 768px)" srcSet="/mobile.png" />
          <img src="/hero1.png" alt="hero"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        </picture>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(20,0,0,0.55) 0%, rgba(20,0,0,0.55) 100%)' }} />
        <div className="container hero-content" style={{ position: 'relative', zIndex: 2, padding: '5rem 1.5rem', textAlign: 'center' }}>
          <style>{`@media (max-width: 768px) { .hero-content { padding-top: 9rem !important; } }`}</style>
          <div style={{ maxWidth: 620, margin: '0 auto' }}>
            <div style={{ display: 'inline-block', background: 'var(--gold)', color: 'white', fontSize: '0.7rem', letterSpacing: '0.2em', padding: '0.35rem 1rem', borderRadius: 2, fontFamily: 'Poppins,sans-serif', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              Greater Toronto Area
            </div>
            <h1 style={{ fontFamily: 'Baloo 2,sans-serif', fontSize: 'clamp(2.5rem,5vw,4rem)', color: 'white', lineHeight: 1.15, marginBottom: '1rem' }}>
              Your Partner<br /><span style={{ color: 'var(--gold-light)' }}>in Care</span>
            </h1>
            <p style={{ fontFamily: 'Poppins,sans-serif', fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', marginBottom: '0.5rem', fontWeight: 300, fontStyle: 'italic' }}>
              Helping Hands, Healing Hearts
            </p>
            <p style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: 520, margin: '0 auto 2.5rem' }}>
              We offer a wide range of specialized homecare services across the GTA. Our dedicated Filipino caregiving team delivers high-quality, compassionate care — tailored to your unique needs.
            </p>
            <div className="hero-btns" style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: '2.5rem', justifyContent: 'center' }}>
              <style>{`@media (max-width: 768px) { .hero-btns { flex-direction: column; align-items: center; } }`}</style>
              <Link to="/booking" className="btn-gold">Book Free Assessment</Link>
              <Link to="/services/home-care" className="btn-outline-white">Our Services</Link>
            </div>
            <div className="hero-features" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
              <style>{`@media (max-width: 768px) { .hero-features { flex-direction: column; align-items: center; gap: 0.75rem; } }`}</style>
              {['24/7 Available', 'Licensed Caregivers', 'Free Assessment', 'GTA Wide'].map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <CheckCircle size={14} color="var(--gold-light)" />
                  <span style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.8rem', color: 'rgba(255,255,255,0.8)' }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: '5rem 0', background: 'var(--cream)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-tag">What We Offer</span>
            <h2 style={{ fontFamily: 'Baloo 2,sans-serif', fontSize: 'clamp(1.8rem,3vw,2.5rem)', color: 'var(--text-dark)', marginBottom: '1rem' }}>Our Care Services</h2>
            <div className="divider-gold center" />
            <p style={{ fontFamily: 'Poppins,sans-serif', color: 'var(--text-mid)', maxWidth: 550, margin: '1rem auto 0', lineHeight: 1.8, fontSize: '0.95rem' }}>
              From companion care to 24-hour live-in support, every care plan is designed around the individual.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '1.5rem' }}>
            {services.map(s => (
              <Link key={s.title} to={s.path} className="service-card">
                <div className="icon-wrap">{s.icon}</div>
                <h3 style={{ fontFamily: 'Baloo 2,sans-serif', fontSize: '1.15rem', color: 'var(--text-dark)', marginBottom: '0.75rem' }}>{s.title}</h3>
                <p style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.875rem', color: 'var(--text-mid)', lineHeight: 1.75, marginBottom: '1rem' }}>{s.desc}</p>
                <span style={{ display: 'flex', alignItems: 'center', gap: 5, color: 'var(--red)', fontSize: '0.75rem', fontFamily: 'Poppins,sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Learn More <ArrowRight size={13} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServiceCarousel />

      {/* ABOUT STRIP */}
      <section style={{ padding: '5rem 0', background: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: '4rem', alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
              <img src="/img1.avif" alt="care"
                style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: 12 }} />
              <div style={{ position: 'absolute', bottom: -20, right: -20, background: 'var(--red)', color: 'white', borderRadius: 10, padding: '1.25rem 1.5rem', boxShadow: '0 8px 24px rgba(192,26,26,0.3)' }}>
                <div style={{ fontFamily: 'Baloo 2,sans-serif', fontSize: '2rem', fontWeight: 700 }}>500+</div>
                <div style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.75rem', opacity: 0.9, marginTop: 2 }}>Families Served</div>
              </div>
            </div>
            <div>
              <span className="section-tag">About GTA Homecare</span>
              <h2 style={{ fontFamily: 'Baloo 2,sans-serif', fontSize: 'clamp(1.8rem,3vw,2.5rem)', color: 'var(--text-dark)', lineHeight: 1.3, marginBottom: '1rem' }}>
                Care Is a Responsibility.<br />Not Just a Task.
              </h2>
              <div className="divider-gold" />
              <p style={{ fontFamily: 'Poppins,sans-serif', color: 'var(--text-mid)', lineHeight: 1.85, marginTop: '1.25rem', marginBottom: '1rem', fontSize: '0.95rem' }}>
                GTA Homecare Services is a professional home care company serving families across the Greater Toronto Area. Our compassionate, Filipino-led team provides structured and personalized care designed to help seniors remain comfortable in their own homes.
              </p>
              <p style={{ fontFamily: 'Poppins,sans-serif', color: 'var(--text-mid)', lineHeight: 1.85, marginBottom: '2rem', fontSize: '0.95rem' }}>
                We deliver reliable support through trained caregivers, personal support workers, and nursing professionals who understand that care is built on consistency and trust.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                <Link to="/about" className="btn-primary">Learn More</Link>
                <a href="tel:+14169100223" className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  <Phone size={15} /> Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ padding: '5rem 0', background: '#FDF5F5' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-tag">Why Families Trust Us</span>
            <h2 style={{ fontFamily: 'Baloo 2,sans-serif', fontSize: 'clamp(1.8rem,3vw,2.5rem)', color: 'var(--text-dark)', marginBottom: '1rem' }}>The GTA Homecare Difference</h2>
            <div className="divider-gold center" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: '1.5rem' }}>
            {whyUs.map(w => (
              <div key={w.title} style={{ background: 'white', borderRadius: 10, padding: '1.75rem', boxShadow: '0 2px 15px rgba(0,0,0,0.06)' }}>
                <div className="icon-wrap">{w.icon}</div>
                <h3 style={{ fontFamily: 'Baloo 2,sans-serif', fontSize: '1.05rem', color: 'var(--text-dark)', marginBottom: '0.6rem' }}>{w.title}</h3>
                <p style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.85rem', color: 'var(--text-mid)', lineHeight: 1.75 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL IMAGE CTA */}
      <section style={{ position: 'relative', height: 360, display: 'flex', alignItems: 'center' }}>
        <img src="/img2.avif" alt="cta"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(20,0,0,0.7)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Baloo 2,sans-serif', fontSize: 'clamp(1.8rem,3vw,2.5rem)', color: 'white', marginBottom: '1rem' }}>Ready to Get Started?</h2>
          <p style={{ fontFamily: 'Poppins,sans-serif', color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', maxWidth: 500, margin: '0 auto 2rem' }}>
            Schedule a free assessment today. Let us design a personalized care plan for your family.
          </p>
          <Link to="/booking" className="btn-gold">Book Free Assessment</Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: '5rem 0', background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-tag">What Families Say</span>
            <h2 style={{ fontFamily: 'Baloo 2,sans-serif', fontSize: 'clamp(1.8rem,3vw,2.5rem)', color: 'var(--text-dark)', marginBottom: '1rem' }}>Trusted by GTA Families</h2>
            <div className="divider-gold center" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1.5rem' }}>
            {testimonials.map(t => (
              <div key={t.name} style={{ background: 'var(--cream)', borderRadius: 10, padding: '2rem', border: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', gap: 3, marginBottom: '1rem' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="var(--gold)" color="var(--gold)" />)}
                </div>
                <p style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.9rem', color: 'var(--text-mid)', lineHeight: 1.8, fontStyle: 'italic', marginBottom: '1.25rem' }}>"{t.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'var(--red)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: '0.85rem' }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-dark)' }}>{t.name}</div>
                    <div style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.78rem', color: 'var(--text-light)' }}>{t.loc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/testimonials" className="btn-outline">Read All Reviews</Link>
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section style={{ background: 'var(--red-dark)', padding: '3rem 0' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem' }}>
          <div>
            <h3 style={{ fontFamily: 'Baloo 2,sans-serif', fontSize: '1.6rem', color: 'white', marginBottom: '0.35rem' }}>Call for a Free Assessment</h3>
            <p style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.875rem', color: 'rgba(255,255,255,0.75)' }}>Our care coordinators are available 24/7.</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <a href="tel:+14169100223" className="btn-gold" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <Phone size={16} /> +1 416 910 0223
            </a>
            <Link to="/contact" className="btn-outline-white">Send a Message</Link>
          </div>
        </div>
      </section>
    </>
  );
}

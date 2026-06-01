import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ background: '#0E1729', color: '#FFFFFF', paddingTop: 80 }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 48, paddingBottom: 60, borderBottom: '1px solid rgba(201,147,58,0.2)' }}>
          
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 500, marginBottom: 4 }}>Sunset Retreat</div>
            <div style={{ fontSize: 11, letterSpacing: '0.3em', color: '#C9933A', textTransform: 'uppercase', marginBottom: 20 }}>Jamaica</div>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: 24, maxWidth: 280 }}>
              Your private luxury escape in Jamaica. Experience the warmth, beauty, and serenity of island living.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {['instagram', 'facebook', 'airbnb'].map(s => (
                <div key={s} style={{ width: 36, height: 36, border: '1px solid rgba(201,147,58,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s' }}>
                  <SocialIcon name={s} />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9933A', marginBottom: 20 }}>Quick Links</h4>
            {[['/', 'Home'], ['/about', 'About Us'], ['/services', 'Our Services'], ['/contact', 'Book Now']].map(([to, label]) => (
              <Link key={to} to={to} style={{ display: 'block', fontSize: 14, color: 'rgba(255,255,255,0.55)', marginBottom: 12, transition: 'color 0.3s' }}
                onMouseEnter={e => e.target.style.color = '#C9933A'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.55)'}
              >{label}</Link>
            ))}
          </div>

          <div>
            <h4 style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9933A', marginBottom: 20 }}>Contact</h4>
            <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 2 }}>
              <p>Ocho Rios, Jamaica</p>
              <a href="tel:+18762689319" style={{ color: 'rgba(255,255,255,0.55)', display: 'block', transition: 'color 0.3s' }}
                onMouseEnter={e => e.target.style.color = '#C9933A'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.55)'}
              >+1 876 268 9319</a>
              <a href="mailto:sunsetretreatja@gmail.com" style={{ color: 'rgba(255,255,255,0.55)', transition: 'color 0.3s' }}
                onMouseEnter={e => e.target.style.color = '#C9933A'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.55)'}
              >sunsetretreatja@gmail.com</a>
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9933A', marginBottom: 20 }}>Tagline</h4>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontStyle: 'italic', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
              "Relax · Unwind · Escape"
            </p>
            <div style={{ marginTop: 20 }}>
              <Link to="/contact" className="btn-primary" style={{ fontSize: 11, padding: '12px 24px' }}>
                Book Your Stay
              </Link>
            </div>
          </div>
        </div>

        <div style={{ padding: '24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>© 2026 Sunset Retreat JA. All rights reserved.</p>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>Luxury Vacation Rental · Jamaica</p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ name }) {
  if (name === 'instagram') return (
    <svg width="16" height="16" fill="none" stroke="#C9933A" strokeWidth="1.5" viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="#C9933A"/>
    </svg>
  );
  if (name === 'facebook') return (
    <svg width="16" height="16" fill="none" stroke="#C9933A" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
  return (
    <svg width="16" height="16" fill="none" stroke="#C9933A" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9,22 9,12 15,12 15,22"/>
    </svg>
  );
}

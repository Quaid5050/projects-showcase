import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../../components/ProductCard';
import { SearchIcon, ArrowIcon, TruckIcon, CartIcon, MapPinIcon, WhatsAppIcon, ShieldIcon } from '../../components/Icons';

const API = process.env.REACT_APP_API_URL || '/api';

/* ── Detailed Category SVGs ── */
const CatBeer = () => (
  <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
    <rect x="14" y="16" width="30" height="44" rx="6" fill="#F5D78E"/>
    <rect x="14" y="16" width="30" height="16" rx="4" fill="#FFF8EB" opacity=".7"/>
    <rect x="44" y="24" width="10" height="22" rx="5" fill="#E8C85A"/>
    <rect x="44" y="24" width="10" height="8" rx="5" fill="#F5E6A8" opacity=".5"/>
    <path d="M22 42h14" stroke="#C8A020" strokeWidth="2" strokeLinecap="round"/>
    <path d="M22 48h10" stroke="#C8A020" strokeWidth="2" strokeLinecap="round" opacity=".5"/>
    <circle cx="29" cy="24" r="2" fill="#C8A020" opacity=".3"/>
    <circle cx="24" cy="27" r="1.5" fill="#C8A020" opacity=".2"/>
    <circle cx="34" cy="22" r="1" fill="#C8A020" opacity=".25"/>
  </svg>
);

const CatSpirits = () => (
  <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
    <rect x="28" y="6" width="16" height="10" rx="4" fill="#8AAEE8" opacity=".7"/>
    <path d="M24 16h24l3 10H21l3-10z" fill="#B8C8F0" opacity=".6"/>
    <rect x="18" y="26" width="36" height="38" rx="8" fill="#B8C8F0"/>
    <rect x="18" y="26" width="36" height="14" rx="6" fill="#D0DBEF" opacity=".6"/>
    <rect x="24" y="44" width="24" height="14" rx="3" fill="white" opacity=".3"/>
    <path d="M28 50h16" stroke="#6B8FDD" strokeWidth="2" strokeLinecap="round"/>
    <path d="M30 55h12" stroke="#6B8FDD" strokeWidth="1.5" strokeLinecap="round" opacity=".5"/>
    <circle cx="36" cy="34" r="4" fill="white" opacity=".2"/>
  </svg>
);

const CatWine = () => (
  <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
    <path d="M28 8h16v22c0 10 10 14 10 14H18s10-4 10-14V8z" fill="#9B4D6E"/>
    <path d="M28 8h16v12c0 0-4 6-8 6s-8-6-8-6V8z" fill="#C06888" opacity=".5"/>
    <ellipse cx="36" cy="18" rx="6" ry="3" fill="#D48BA3" opacity=".3"/>
    <rect x="33" y="44" width="6" height="14" rx="1.5" fill="#9B4D6E" opacity=".8"/>
    <rect x="26" y="58" width="20" height="5" rx="2.5" fill="#9B4D6E" opacity=".6"/>
    <ellipse cx="36" cy="60.5" rx="8" ry="1.5" fill="#7A3D58" opacity=".15"/>
  </svg>
);

const CatStore = () => (
  <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
    <rect x="10" y="30" width="52" height="34" rx="4" fill="#7DCBA4"/>
    <path d="M6 30l6-18h48l6 18H6z" fill="#5AB88A"/>
    <rect x="14" y="14" width="8" height="6" rx="3" fill="#4AA87A"/>
    <rect x="50" y="14" width="8" height="6" rx="3" fill="#4AA87A"/>
    <rect x="32" y="14" width="8" height="6" rx="3" fill="#4AA87A"/>
    <rect x="28" y="42" width="16" height="22" rx="3" fill="white" opacity=".6"/>
    <rect x="30" y="44" width="5" height="8" rx="1" fill="#5AB88A" opacity=".4"/>
    <rect x="37" y="44" width="5" height="8" rx="1" fill="#5AB88A" opacity=".4"/>
    <path d="M14 38h12" stroke="white" strokeWidth="2" strokeLinecap="round" opacity=".4"/>
    <path d="M46 38h12" stroke="white" strokeWidth="2" strokeLinecap="round" opacity=".4"/>
  </svg>
);

export default function Home() {
  const navigate = useNavigate();
  const [featured, setFeatured] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get(`${API}/products?limit=8&badge=Popular`).then(r => setFeatured(r.data.data)).catch(() => {});
  }, []);

  const cats = [
    { label: 'Beer', cls: 'beer', icon: <CatBeer />, sub: 'Lagers, Ales, Stouts & Craft', count: 'Beer Store' },
    { label: 'Spirits', cls: 'spirits', icon: <CatSpirits />, sub: 'Whiskey, Vodka, Rum, Gin', count: 'Liquor Store' },
    { label: 'Wine', cls: 'wine', icon: <CatWine />, sub: 'Red, White, Rosé, Champagne', count: 'Liquor Store' },
    { label: 'Convenience', cls: 'store', icon: <CatStore />, sub: 'Snacks, Mixers, Ice, Cups', count: 'Convenience Store' },
  ];

  const steps = [
    { n: '01', icon: <SearchIcon />, t: 'Browse & Search', d: 'Find your favourite beers, spirits, wines and more from 3 local stores.' },
    { n: '02', icon: <CartIcon />, t: 'Add to Cart', d: 'Select products, pick quantities and review your order before checkout.' },
    { n: '03', icon: <MapPinIcon />, t: 'Enter Address', d: 'Tell us where to deliver. Choose cash, card or Interac e-Transfer.' },
    { n: '04', icon: <TruckIcon />, t: 'Fast Delivery', d: 'We pick, pack and deliver to your door in about 30 minutes.' },
  ];

  return (
    <>
      {/* ── Hero ── */}
      <div className="hero fade-up">
        <img
          src={process.env.PUBLIC_URL + '/images/hero-banner.png'}
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', opacity: 0.25, pointerEvents: 'none', zIndex: 0
          }}
        />
        <div className="container hero-grid">
          <div>
            <div className="hero-eyebrow">
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ADE80', display: 'inline-block' }} />
              Now delivering in Mississauga & GTA
            </div>
            <h1 className="hero-title">
              Fast Alcohol<br />Delivery<br /><span className="gold">To Your Door</span>
            </h1>
            <p className="hero-subtitle">
              Beer, wine, spirits & convenience store products delivered fast from top local stores. Order in minutes.
            </p>
            <div className="hero-ctas">
              <Link to="/products" className="btn-primary">Shop Now <ArrowIcon /></Link>
              <Link to="/about" className="btn-outline">How It Works</Link>
            </div>
            <div className="hero-stats">
              <div><div className="hero-stat-num">30min</div><div className="hero-stat-lbl">Average delivery</div></div>
              <div><div className="hero-stat-num">3</div><div className="hero-stat-lbl">Partner stores</div></div>
              <div><div className="hero-stat-num">500+</div><div className="hero-stat-lbl">Products</div></div>
            </div>
          </div>
          <div className="hero-right">
            <div className="delivery-badge"><TruckIcon /> Free delivery over $60</div>
            <div className="hero-cards-row">
              {cats.slice(0, 3).map(c => (
                <div key={c.label} className="hero-card" onClick={() => navigate(`/products?cat=${c.label}`)}>
                  <div className="hero-card-icon">{c.icon}</div>
                  <div className="hero-card-name">{c.label}</div>
                  <div className="hero-card-sub">{c.count}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Search ── */}
      <div className="search-section">
        <div className="container">
          <div className="search-wrap hero-search">
            <SearchIcon />
            <input className="search-input" placeholder="Search for beer, wine, spirits, snacks..."
              value={search} onChange={e => setSearch(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && navigate(`/products?search=${search}`)} />
            <button className="btn-search" onClick={() => navigate(`/products?search=${search}`)}><SearchIcon /> Search</button>
          </div>
        </div>
      </div>

      {/* ── Trust Bar ── */}
      <div style={{ background: 'var(--cream)', padding: '20px 0', borderTop: '1px solid var(--gray-lt)', borderBottom: '1px solid var(--gray-lt)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap' }}>
          {[
            { icon: <TruckIcon />, text: 'Free delivery $60+' },
            { icon: <ShieldIcon />, text: 'Age verified delivery' },
            { icon: <MapPinIcon />, text: 'Mississauga & GTA' },
            { icon: <WhatsAppIcon />, text: 'WhatsApp support' },
          ].map((t, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, fontWeight: 600, color: 'var(--gray)' }}>
              <span style={{ color: 'var(--gold)' }}>{t.icon}</span>
              {t.text}
            </div>
          ))}
        </div>
      </div>

      {/* ── Categories ── */}
      <div className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div className="section-title">Shop by Category</div>
            <div className="section-sub">From three major local stores — Beer Store, Liquor Store & Convenience</div>
          </div>
          <div className="cat-grid">
            {cats.map(c => (
              <Link key={c.label} to={`/products?cat=${c.label}`} className={`cat-card ${c.cls}`}>
                <div className="cat-icon">{c.icon}</div>
                <div className="cat-name">{c.label}</div>
                <div style={{ fontSize: 12, color: 'var(--gray)', lineHeight: 1.5, marginTop: 2 }}>{c.sub}</div>
                <div style={{
                  marginTop: 10, fontSize: 11, fontWeight: 700,
                  color: 'var(--gold-dk)', textTransform: 'uppercase', letterSpacing: 0.5,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4
                }}>
                  {c.count} <ArrowIcon />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── Featured Products ── */}
      {featured.length > 0 && (
        <div className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 28 }}>
              <div>
                <div className="section-title">Popular Products</div>
                <div className="section-sub">Best sellers this week</div>
              </div>
              <Link to="/products" className="btn-outline">View All <ArrowIcon /></Link>
            </div>
            <div className="prod-grid">
              {featured.slice(0, 8).map(p => <ProductCard key={p._id} product={p} />)}
            </div>
          </div>
        </div>
      )}

      {/* ── How it works ── */}
      <div className="how-section">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <div className="section-title" style={{ color: 'white' }}>How OSIPP Works</div>
            <div style={{ color: 'rgba(255,255,255,.45)', fontSize: 15, marginTop: 8 }}>Delivery in 4 simple steps</div>
          </div>
          <div className="how-grid">
            {steps.map(s => (
              <div key={s.n} className="how-step">
                <div className="how-num">{s.n}</div>
                <div className="how-step-icon">{s.icon}</div>
                <div className="how-step-title">{s.t}</div>
                <div className="how-step-text">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA Banner ── */}
      <div style={{ background: 'var(--cream)', padding: '64px 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 600 }}>
          <h2 style={{ fontFamily: 'var(--font-d)', fontSize: 'clamp(26px,3.5vw,38px)', fontWeight: 800, letterSpacing: '-0.8px', marginBottom: 12 }}>
            Ready to Order?
          </h2>
          <p style={{ color: 'var(--gray)', fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}>
            Browse 500+ products from 3 partner stores. Get beer, wine, spirits and convenience items delivered to your door in under 30 minutes.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/products" className="btn-primary" style={{ padding: '15px 32px', fontSize: 16 }}>
              Browse Products <ArrowIcon />
            </Link>
            <button className="btn-wa" style={{ padding: '15px 24px', fontSize: 14 }}
              onClick={() => window.open('https://wa.me/19054622160', '_blank')}>
              <WhatsAppIcon /> Order on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
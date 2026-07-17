import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const StarRating = ({ rating }) => (
  <div style={{ display: 'flex', gap: 2 }}>
    {[1,2,3,4,5].map(s => (
      <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill={s <= Math.round(rating) ? '#F59E0B' : 'none'} stroke="#F59E0B" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ))}
    <span style={{ fontSize: 12, color: '#9CA3AF', marginLeft: 4 }}>({rating})</span>
  </div>
);

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'iptv-box', label: 'IPTV Boxes' },
    { value: 'android-box', label: 'Android Boxes' },
    { value: 'mag-box', label: 'MAG Boxes' },
  ];

  useEffect(() => {
    const url = filter === 'all' ? '/api/products' : `/api/products?category=${filter}`;
    axios.get(url).then(r => setProducts(r.data)).catch(() => {}).finally(() => setLoading(false));
  }, [filter]);

  return (
    <div style={{ minHeight: '100vh', background: '#070B14', paddingTop: 40 }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #0D1526, #111827)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '60px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: '#06B6D4', marginBottom: 12 }}>Our Collection</div>
          <h1 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(32px,5vw,56px)', fontWeight: 800, marginBottom: 16 }}>IPTV Boxes & Devices</h1>
          <p style={{ color: '#9CA3AF', fontSize: 17, maxWidth: 500, margin: '0 auto' }}>Premium hardware for the best streaming experience worldwide</p>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 24px' }}>
        {/* Filter tabs */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 40, flexWrap: 'wrap' }}>
          {categories.map(c => (
            <button key={c.value} onClick={() => setFilter(c.value)} style={{
              padding: '9px 20px', borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: 'pointer',
              background: filter === c.value ? 'linear-gradient(135deg,#3B82F6,#8B5CF6)' : 'rgba(255,255,255,0.04)',
              border: `1px solid ${filter === c.value ? 'transparent' : 'rgba(255,255,255,0.08)'}`,
              color: filter === c.value ? '#fff' : '#9CA3AF',
              transition: 'all 0.2s ease'
            }}>{c.label}</button>
          ))}
        </div>

        {/* Products grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
          {loading ? [1,2,3,4,5,6].map(i => (
            <div key={i} style={{ height: 380, borderRadius: 20, background: '#111827', border: '1px solid rgba(255,255,255,0.06)', backgroundSize: '200% 100%', animation: 'shimmer 1.5s infinite' }} />
          )) : products.map(p => (
            <Link to={`/products/${p.slug}`} key={p._id} style={{ display: 'block', textDecoration: 'none' }}>
              <div style={{
                background: 'linear-gradient(145deg, #111827, #1A2540)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 20, overflow: 'hidden', height: '100%',
                transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column'
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(59,130,246,0.4)'; e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.4), 0 0 40px rgba(59,130,246,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
              >
                <div style={{ position: 'relative', height: 200, background: '#070B14', overflow: 'hidden' }}>
                  <img src={p.images[0]} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85, transition: 'transform 0.4s ease' }}
                    onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={e => e.target.style.transform = ''}
                  />
                  {p.originalPrice && (
                    <div style={{ position: 'absolute', top: 12, right: 12, padding: '4px 10px', borderRadius: 8, fontSize: 11, fontWeight: 700, background: '#10B981', color: '#fff' }}>
                      Save {Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100)}%
                    </div>
                  )}
                  {!p.inStock && (
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ color: '#9CA3AF', fontWeight: 600 }}>Out of Stock</span>
                    </div>
                  )}
                </div>

                <div style={{ padding: '20px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontSize: 11, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 6 }}>{p.brand}</div>
                  <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 16, marginBottom: 8, lineHeight: 1.3 }}>{p.name}</h3>
                  <StarRating rating={p.rating} />
                  <div style={{ flex: 1 }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 16 }}>
                    <div>
                      <span style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 22 }}>${p.price}</span>
                      {p.originalPrice && <span style={{ fontSize: 13, color: '#6B7280', textDecoration: 'line-through', marginLeft: 6 }}>${p.originalPrice}</span>}
                    </div>
                    <div style={{ padding: '8px 18px', borderRadius: 10, background: 'linear-gradient(135deg,#3B82F6,#8B5CF6)', color: '#fff', fontSize: 13, fontWeight: 600 }}>Buy Now</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {products.length === 0 && !loading && (
          <div style={{ textAlign: 'center', padding: '80px 0', color: '#6B7280' }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ marginBottom: 16, opacity: 0.4 }}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
            <div>No products found in this category</div>
          </div>
        )}
      </div>
    </div>
  );
}

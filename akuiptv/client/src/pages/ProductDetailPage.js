import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImg, setSelectedImg] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`/api/products/${slug}`)
      .then(r => { setProduct(r.data); setLoading(false); })
      .catch(() => setLoading(false));
  }, [slug]);

  if (loading) return <div style={{ minHeight: '100vh', background: '#070B14', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9CA3AF' }}>Loading...</div>;
  if (!product) return <div style={{ minHeight: '100vh', background: '#070B14', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9CA3AF' }}>Product not found</div>;

  return (
    <div style={{ minHeight: '100vh', background: '#070B14', paddingTop: 40 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '48px 24px' }}>
        <Link to="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#9CA3AF', fontSize: 14, marginBottom: 32 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Back to Products
        </Link>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60 }}>
          {/* Images */}
          <div>
            <div style={{ borderRadius: 20, overflow: 'hidden', background: '#0D1526', height: 360, marginBottom: 16 }}>
              <img src={product.images[selectedImg]} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            {product.images.length > 1 && (
              <div style={{ display: 'flex', gap: 12 }}>
                {product.images.map((img, i) => (
                  <div key={i} onClick={() => setSelectedImg(i)} style={{ width: 72, height: 72, borderRadius: 12, overflow: 'hidden', border: `2px solid ${selectedImg === i ? '#3B82F6' : 'transparent'}`, cursor: 'pointer' }}>
                    <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div>
            <div style={{ fontSize: 12, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: 8 }}>{product.brand}</div>
            <h1 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(24px,3vw,36px)', lineHeight: 1.15, marginBottom: 16 }}>{product.name}</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
              <span style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 32 }}>${product.price}</span>
              {product.originalPrice && (
                <>
                  <span style={{ fontSize: 18, color: '#6B7280', textDecoration: 'line-through' }}>${product.originalPrice}</span>
                  <span style={{ padding: '4px 10px', borderRadius: 8, background: 'rgba(16,185,129,0.15)', color: '#34D399', fontSize: 13, fontWeight: 700 }}>
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </span>
                </>
              )}
            </div>

            <p style={{ color: '#9CA3AF', fontSize: 15, lineHeight: 1.8, marginBottom: 28 }}>{product.description}</p>

            {/* Features */}
            <div style={{ marginBottom: 28 }}>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 12 }}>Key Features</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {product.features.map((f, i) => (
                  <div key={i} style={{ padding: '6px 14px', borderRadius: 8, background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.15)', fontSize: 13, color: '#93C5FD' }}>{f}</div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
              <Link to="/contact" style={{ flex: 1, display: 'block', textAlign: 'center', padding: '14px', borderRadius: 12, background: 'linear-gradient(135deg,#3B82F6,#8B5CF6)', color: '#fff', fontWeight: 700, fontSize: 16 }}>Buy Now</Link>
              <Link to="/contact" style={{ padding: '14px 20px', borderRadius: 12, border: '1.5px solid rgba(255,255,255,0.15)', color: '#9CA3AF', fontWeight: 600 }}>Inquire</Link>
            </div>
          </div>
        </div>

        {/* Specs table */}
        {product.specs.length > 0 && (
          <div style={{ marginTop: 56 }}>
            <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 24, marginBottom: 24 }}>Specifications</h2>
            <div style={{ background: 'linear-gradient(145deg,#111827,#1A2540)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, overflow: 'hidden' }}>
              {product.specs.map((s, i) => (
                <div key={i} style={{ display: 'flex', padding: '16px 24px', borderBottom: i < product.specs.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}>
                  <div style={{ width: 160, color: '#9CA3AF', fontSize: 14, fontWeight: 500 }}>{s.label}</div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{s.value}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <style>{`@media(max-width:768px){div>div>div{grid-template-columns:1fr!important;}}`}</style>
    </div>
  );
}

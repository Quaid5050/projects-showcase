import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LiveChat() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => { setOpen(true); }, 4000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 999 }}>
      {open && (
        <div style={{ position: 'absolute', bottom: 68, right: 0, width: 280, background: '#fff', borderRadius: 10, boxShadow: '0 8px 40px rgba(0,0,0,0.18)', padding: '1.2rem', border: '1px solid #e5e7eb' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10, paddingBottom: 10, borderBottom: '1px solid #eee' }}>
            <div style={{ width: 8, height: 8, background: '#22c55e', borderRadius: '50%' }}></div>
            <div>
              <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#0B1F3A' }}>Global Pardon & Waivers Support</div>
              <div style={{ fontSize: '0.72rem', color: '#6b7280' }}>Typically replies in minutes</div>
            </div>
            <button onClick={() => setOpen(false)} style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem', color: '#9ca3af', lineHeight: 1 }}>×</button>
          </div>
          <p style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: 12, lineHeight: 1.6 }}>👋 Have questions about your pardon or waiver? We're here — completely free.</p>
          <button onClick={() => { navigate('/apply'); setOpen(false); }} style={{ width: '100%', background: '#0B1F3A', color: '#fff', border: 'none', padding: '10px', borderRadius: 4, fontFamily: 'inherit', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }}>
            Start Free Consultation →
          </button>
        </div>
      )}
      <button onClick={() => setOpen(!open)} style={{ width: 56, height: 56, background: '#C9A84C', borderRadius: '50%', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.25)', transition: 'transform 0.2s' }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" strokeWidth="2.5">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      </button>
    </div>
  );
}

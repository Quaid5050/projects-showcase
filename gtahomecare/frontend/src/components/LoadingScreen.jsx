import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 1200);
    const hideTimer = setTimeout(() => setVisible(false), 1600);
    return () => { clearTimeout(fadeTimer); clearTimeout(hideTimer); };
  }, []);

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: '#F5E6D3',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      opacity: fadeOut ? 0 : 1, transition: 'opacity 0.4s ease',
      pointerEvents: fadeOut ? 'none' : 'auto',
    }}>
      <img src="/logo1.png" alt="GTA Homecare Services"
        style={{ width: 90, height: 90, objectFit: 'contain', animation: 'loadingPulse 1.1s ease-in-out infinite', marginBottom: '1.25rem' }} />
      <div style={{ fontFamily: 'Baloo 2,sans-serif', fontWeight: 700, fontSize: '1.3rem', color: 'var(--red-dark)', letterSpacing: '0.02em' }}>
        GTA Homecare
      </div>
      <div style={{ fontFamily: 'Poppins,sans-serif', fontSize: '0.7rem', color: 'var(--gold)', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: 4 }}>
        Services
      </div>
      <div style={{ display: 'flex', gap: 6, marginTop: '1.75rem' }}>
        {[0, 1, 2].map(i => (
          <span key={i} style={{
            width: 8, height: 8, borderRadius: '50%', background: 'var(--red)',
            animation: `loadingDot 1.1s ease-in-out ${i * 0.15}s infinite`,
          }} />
        ))}
      </div>
      <style>{`
        @keyframes loadingPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.1); } }
        @keyframes loadingDot { 0%, 100% { opacity: 0.3; transform: translateY(0); } 50% { opacity: 1; transform: translateY(-6px); } }
      `}</style>
    </div>
  );
}

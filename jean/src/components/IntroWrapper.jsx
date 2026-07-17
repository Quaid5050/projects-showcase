import { useEffect, useState } from 'react';
import logo from '../assets/images/logo.png';

const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${(i * 5.2) % 100}%`,
  size: `${(i % 4) + 3}px`,
  dur:  `${(i % 4) + 3.5}s`,
  del:  `${(i * 0.22) % 3}s`,
}));

export default function IntroWrapper({ onComplete }) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    document.body.classList.add('intro-active');
    const t1 = setTimeout(() => setExiting(true), 3200);
    const t2 = setTimeout(() => {
      onComplete?.();
      document.body.classList.remove('intro-active');
    }, 4100);
    return () => { clearTimeout(t1); clearTimeout(t2); document.body.classList.remove('intro-active'); };
  }, [onComplete]);

  return (
    <div className={`intro-wrapper${exiting ? ' exit' : ''}`} role="status" aria-label="Loading Junk Pro Service">
      <div className="intro-particles" aria-hidden="true">
        {PARTICLES.map(p => (
          <div key={p.id} className="intro-particle" style={{
            left: p.left, bottom: 0,
            width: p.size, height: p.size,
            animationDuration: p.dur,
            animationDelay: p.del,
          }} />
        ))}
      </div>

      <div className="intro-logo">
        <img src={logo} alt="Junk Pro Service" width="130" height="130" />
      </div>
      <div className="intro-brand">Junk <span>Pro</span> Service</div>
      <div className="intro-tagline">Fast &nbsp;·&nbsp; Reliable &nbsp;·&nbsp; Affordable</div>
      <div className="intro-bar-wrap" aria-hidden="true">
        <div className="intro-bar-fill" />
      </div>
    </div>
  );
}

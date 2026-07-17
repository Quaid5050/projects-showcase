import { useEffect, useState, useRef } from 'react';
import './IntroWrapper.css';

export default function IntroWrapper({ onComplete }) {
  const [phase, setPhase] = useState('enter'); // enter | reveal | exit
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);

  // Water particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 120 }, () => ({
      x: Math.random() * window.innerWidth,
      y: window.innerHeight + Math.random() * 200,
      radius: Math.random() * 3 + 1,
      speed: Math.random() * 1.8 + 0.6,
      opacity: Math.random() * 0.6 + 0.1,
      drift: (Math.random() - 0.5) * 60,
      hue: Math.random() * 40 + 260, // purple range
    }));

    let running = true;

    const animate = () => {
      if (!running) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.y -= p.speed;
        p.x += Math.sin(p.y * 0.02) * 0.5;
        p.opacity = Math.max(0, p.opacity - 0.001);

        if (p.y < -10 || p.opacity <= 0) {
          p.y = canvas.height + 20;
          p.x = Math.random() * canvas.width;
          p.opacity = Math.random() * 0.6 + 0.15;
          p.speed = Math.random() * 1.8 + 0.6;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, 75%, ${p.opacity})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `hsla(${p.hue}, 100%, 80%, 0.5)`;
        ctx.fill();
      });

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      running = false;
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  // Phase timeline
  useEffect(() => {
    const t1 = setTimeout(() => setPhase('reveal'), 300);
    const t2 = setTimeout(() => setPhase('exit'), 3200);
    const t3 = setTimeout(() => onComplete(), 3900);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <div className={`intro-wrapper intro-wrapper--${phase}`} aria-hidden="true">
      <canvas ref={canvasRef} className="intro-canvas" />

      {/* Background glow orbs */}
      <div className="intro-orb intro-orb--1" />
      <div className="intro-orb intro-orb--2" />
      <div className="intro-orb intro-orb--3" />

      <div className="intro-content">

        {/* Text */}
        <div className="intro-text">
          <img
            src="/images/logo.png"
            alt="Pranvue Property Services"
            className="intro-logo-img"
          />
          <div className="intro-divider" />
          <p className="intro-tagline">Let Your Property Smile For You ✨</p>
        </div>

        {/* Loading bar */}
        <div className="intro-loader">
          <div className="intro-loader__track">
            <div className="intro-loader__fill" />
          </div>
          <p className="intro-loader__text">Preparing your experience...</p>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="intro-wave">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z" fill="#241033" opacity="0.5"/>
          <path d="M0,80 C360,20 720,100 1080,40 C1260,10 1380,70 1440,80 L1440,120 L0,120 Z" fill="#5E2B97" opacity="0.3"/>
        </svg>
      </div>
    </div>
  );
}

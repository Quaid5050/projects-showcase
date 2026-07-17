'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DiamondIcon, MenuIcon, CloseIcon, PhoneIcon } from './Icons';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => { window.removeEventListener('scroll', handleScroll); window.removeEventListener('resize', handleResize); };
  }, []);
  useEffect(() => { setIsOpen(false); }, [pathname]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/courses', label: 'Courses' },
    { href: '/products', label: 'Products' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top Bar - Desktop Only */}
      {!isMobile && (
        <div style={{background:'#1B2A4A',color:'white',fontSize:'12px',padding:'8px 0'}}>
          <div className="container-custom" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div style={{display:'flex',alignItems:'center',gap:'24px'}}>
              <a href="tel:+14372697007" style={{color:'#d1d5db',textDecoration:'none',display:'flex',alignItems:'center',gap:'6px'}} onMouseOver={e=>(e.currentTarget.style.color='#C5A047')} onMouseOut={e=>(e.currentTarget.style.color='#d1d5db')}>
                <PhoneIcon size={14} /><span>+1 (437) 269-7007</span>
              </a>
              <a href="mailto:jaswani@angeldiamondinc.com" style={{color:'#d1d5db',textDecoration:'none'}} onMouseOver={e=>(e.currentTarget.style.color='#C5A047')} onMouseOut={e=>(e.currentTarget.style.color='#d1d5db')}>jaswani@angeldiamondinc.com</a>
            </div>
            <span style={{color:'#9ca3af'}}>Canada&apos;s Premier Diamond Education Institute</span>
          </div>
        </div>
      )}

      {/* Main Header */}
      <header style={{background: scrolled ? 'rgba(255,255,255,0.97)' : 'white', boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.08)' : 'none', position:'sticky', top:0, zIndex:50, transition:'all 0.3s ease', backdropFilter: scrolled ? 'blur(10px)' : 'none'}}>
        <div className="container-custom">
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',height: isMobile ? '60px' : '70px'}}>

            {/* Logo */}
            <Link href="/" style={{textDecoration:'none',display:'flex',alignItems:'center',gap:'10px'}}>
              <div style={{width:'36px',height:'36px',background:'#1B2A4A',borderRadius:'4px',display:'flex',alignItems:'center',justifyContent:'center',transition:'background 0.3s',flexShrink:0}}
                onMouseOver={e=>(e.currentTarget.style.background='#C5A047')}
                onMouseOut={e=>(e.currentTarget.style.background='#1B2A4A')}>
                <DiamondIcon size={20} className="text-white" />
              </div>
              <div style={{display:'flex',flexDirection:'column'}}>
                <span style={{fontFamily:"'Playfair Display',serif",fontSize: isMobile ? '14px' : '16px',fontWeight:700,color:'#1B2A4A',lineHeight:1.2,letterSpacing:'0.5px',whiteSpace:'nowrap'}}>Canadian Diamond</span>
                <span style={{fontSize:'9px',textTransform:'uppercase',letterSpacing:'3px',color:'#C5A047',fontWeight:600}}>Academy</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            {!isMobile && (
              <nav style={{display:'flex',alignItems:'center',gap:'4px'}}>
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} style={{padding:'8px 16px',fontSize:'14px',fontWeight:500,color: pathname===link.href ? '#C5A047' : '#1B2A4A',textDecoration:'none',transition:'color 0.2s'}}
                    onMouseOver={e=>(e.currentTarget.style.color='#C5A047')}
                    onMouseOut={e=>(e.currentTarget.style.color= pathname===link.href ? '#C5A047' : '#1B2A4A')}>
                    {link.label}
                  </Link>
                ))}
              </nav>
            )}

            {/* Right Side */}
            <div style={{display:'flex',alignItems:'center',gap:'12px'}}>
              {/* Book Button - Desktop Only */}
              {!isMobile && (
                <a href="https://wa.me/14372697007" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{fontSize:'11px',padding:'10px 20px',whiteSpace:'nowrap'}}>
                  Book Free Consultation
                </a>
              )}

              {/* Hamburger - Mobile Only */}
              {isMobile && (
                <button onClick={() => setIsOpen(!isOpen)} style={{padding:'8px',background:'none',border:'none',cursor:'pointer',color:'#1B2A4A',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  {isOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobile && (
          <div style={{overflow:'hidden',maxHeight: isOpen ? '500px' : '0',transition:'max-height 0.3s ease',borderTop: isOpen ? '1px solid #f3f4f6' : 'none'}}>
            <div style={{padding:'16px 20px',display:'flex',flexDirection:'column',gap:'4px'}}>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} style={{display:'block',padding:'14px 16px',fontSize:'15px',fontWeight:500,borderRadius:'8px',textDecoration:'none',background: pathname===link.href ? '#F5F0E3' : 'transparent',color: pathname===link.href ? '#A88A3A' : '#1B2A4A',transition:'background 0.2s'}}>
                  {link.label}
                </Link>
              ))}

              {/* Phone in mobile menu */}
              <a href="tel:+14372697007" style={{display:'flex',alignItems:'center',gap:'8px',padding:'14px 16px',fontSize:'14px',color:'#6b7280',textDecoration:'none',borderTop:'1px solid #f3f4f6',marginTop:'8px',paddingTop:'16px'}}>
                <PhoneIcon size={16} style={{color:'#C5A047'}} />
                +1 (437) 269-7007
              </a>

              {/* Book button in mobile menu */}
              <a href="https://wa.me/14372697007" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{marginTop:'8px',textAlign:'center',justifyContent:'center',fontSize:'13px',width:'100%',padding:'14px 20px'}}>
                Book Free Consultation
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
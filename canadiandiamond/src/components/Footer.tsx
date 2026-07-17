'use client';
import React from 'react';
import Link from 'next/link';
import { DiamondIcon, PhoneIcon, EmailIcon, LocationIcon, WhatsAppIcon, ArrowRightIcon } from './Icons';

export default function Footer() {
  return (
    <footer style={{background:'#1B2A4A',color:'white'}}>
      {/* CTA */}
      <div style={{borderBottom:'1px solid rgba(255,255,255,0.1)'}}>
        <div className="container-custom" style={{padding:'64px 20px',textAlign:'center'}}>
          <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:'36px',fontWeight:700,marginBottom:'16px'}}>Begin Your Journey in <span style={{color:'#C5A047'}}>Gemology</span></h2>
          <p style={{color:'#9ca3af',maxWidth:'480px',margin:'0 auto 32px',lineHeight:1.7}}>Take the first step towards a rewarding career in the diamond and jewelry industry.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/14372697007" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{justifyContent:'center'}}>
              <WhatsAppIcon size={18} />Contact Us on WhatsApp
            </a>
            <Link href="/courses" style={{display:'inline-flex',alignItems:'center',gap:'8px',padding:'14px 32px',border:'1px solid rgba(255,255,255,0.3)',color:'white',textDecoration:'none',fontSize:'14px',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.5px',transition:'background 0.3s'}}
              onMouseOver={e=>(e.currentTarget.style.background='rgba(255,255,255,0.1)')}
              onMouseOut={e=>(e.currentTarget.style.background='transparent')}>
              View All Courses<ArrowRightIcon size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="container-custom" style={{padding:'64px 20px'}}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" style={{display:'flex',alignItems:'center',gap:'12px',marginBottom:'24px',textDecoration:'none'}}>
              <div style={{width:'40px',height:'40px',background:'#C5A047',borderRadius:'4px',display:'flex',alignItems:'center',justifyContent:'center'}}><DiamondIcon size={22} style={{color:'#1B2A4A'}} /></div>
              <div><div style={{fontFamily:"'Playfair Display',serif",fontSize:'18px',fontWeight:700,color:'white',lineHeight:1.2}}>Canadian Diamond</div><div style={{fontSize:'10px',textTransform:'uppercase',letterSpacing:'3px',color:'#C5A047'}}>Academy</div></div>
            </Link>
            <p style={{color:'#6b7280',fontSize:'14px',lineHeight:1.7}}>Canada&apos;s premier online diamond education institute offering personalized 1-on-1 Zoom classes in gemology and diamond grading.</p>
          </div>

          <div>
            <h4 style={{fontFamily:"'Playfair Display',serif",fontSize:'18px',fontWeight:600,marginBottom:'24px'}}>Quick Links</h4>
            <ul style={{listStyle:'none',padding:0,display:'flex',flexDirection:'column',gap:'12px'}}>
              {[{href:'/',label:'Home'},{href:'/about',label:'About Us'},{href:'/courses',label:'Our Courses'},{href:'/products',label:'Tools & Equipment'},{href:'/contact',label:'Contact Us'}].map(l=>(
                <li key={l.href}><Link href={l.href} style={{color:'#6b7280',fontSize:'14px',textDecoration:'none',transition:'color 0.2s'}} onMouseOver={e=>(e.currentTarget.style.color='#C5A047')} onMouseOut={e=>(e.currentTarget.style.color='#6b7280')}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{fontFamily:"'Playfair Display',serif",fontSize:'18px',fontWeight:600,marginBottom:'24px'}}>Programs</h4>
            <ul style={{listStyle:'none',padding:0,display:'flex',flexDirection:'column',gap:'12px'}}>
              {['Diamond Grading & Certification','Gemstone Identification','Jewelry Design Fundamentals','Diamond Cutting & Polishing','Business of Gemstones'].map(item=>(
                <li key={item} style={{color:'#6b7280',fontSize:'14px',display:'flex',alignItems:'center',gap:'8px'}}><DiamondIcon size={10} style={{color:'#C5A047',flexShrink:0}} />{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{fontFamily:"'Playfair Display',serif",fontSize:'18px',fontWeight:600,marginBottom:'24px'}}>Get In Touch</h4>
            <div style={{display:'flex',flexDirection:'column',gap:'16px'}}>
              <a href="tel:+14372697007" style={{color:'#6b7280',fontSize:'14px',textDecoration:'none',display:'flex',alignItems:'flex-start',gap:'12px'}}><PhoneIcon size={18} style={{color:'#C5A047',flexShrink:0,marginTop:'2px'}} />+1 (437) 269-7007</a>
              <a href="mailto:jaswani@angeldiamondinc.com" style={{color:'#6b7280',fontSize:'14px',textDecoration:'none',display:'flex',alignItems:'flex-start',gap:'12px'}}><EmailIcon size={18} style={{color:'#C5A047',flexShrink:0,marginTop:'2px'}} />jaswani@angeldiamondinc.com</a>
              <a href="https://wa.me/14372697007" target="_blank" rel="noopener noreferrer" style={{color:'#6b7280',fontSize:'14px',textDecoration:'none',display:'flex',alignItems:'flex-start',gap:'12px'}}><WhatsAppIcon size={18} style={{color:'#C5A047',flexShrink:0,marginTop:'2px'}} />WhatsApp: +1 (437) 269-7007</a>
              <div style={{color:'#6b7280',fontSize:'14px',display:'flex',alignItems:'flex-start',gap:'12px'}}><LocationIcon size={18} style={{color:'#C5A047',flexShrink:0,marginTop:'2px'}} />Canada</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div style={{borderTop:'1px solid rgba(255,255,255,0.1)'}}>
        <div className="container-custom" style={{padding:'24px 20px',display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:'16px'}}>
          <p style={{color:'#4b5563',fontSize:'12px'}}>&copy; {new Date().getFullYear()} Canadian Diamond Academy. All rights reserved.</p>
          <div style={{display:'flex',gap:'24px'}}>
            <Link href="/contact" style={{color:'#4b5563',fontSize:'12px',textDecoration:'none'}}>Privacy Policy</Link>
            <Link href="/contact" style={{color:'#4b5563',fontSize:'12px',textDecoration:'none'}}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
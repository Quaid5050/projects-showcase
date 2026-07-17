'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DiamondIcon, PhoneIcon, EmailIcon, LocationIcon, WhatsAppIcon, ArrowRightIcon, ClockIcon, ZoomIcon, GlobeIcon, CheckIcon } from '@/components/Icons';

const C = { primary:'#1B2A4A', gold:'#C5A047', goldLighter:'#F5F0E3', goldDark:'#A88A3A', warm:'#FAFAF7' };

export default function ContactPage() {
  return (
    <>
      <section style={{position:'relative',background:C.primary,padding:'96px 0 128px',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0}}><Image src="https://images.unsplash.com/photo-1551751299-1b51cab2694c?w=1600&q=80" alt="Contact" fill style={{objectFit:'cover',opacity:0.15}} /><div style={{position:'absolute',inset:0,background:'linear-gradient(to bottom,rgba(27,42,74,0.9),#1B2A4A)'}} /></div>
        <div className="container-custom" style={{position:'relative',zIndex:10,textAlign:'center'}}>
          <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(36px,5vw,60px)',fontWeight:800,color:'white',marginBottom:'24px'}}>Contact <span style={{background:'linear-gradient(135deg,#C5A047,#E8D48B,#C5A047)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>Us</span></h1>
          <p style={{color:'#9ca3af',fontSize:'18px',maxWidth:'640px',margin:'0 auto',lineHeight:1.8}}>Have questions about our courses, tools, or enrollment? We are here to help.</p>
        </div>
      </section>

      <section className="section-padding" style={{background:'white'}}>
        <div className="container-custom">
          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" style={{marginBottom:'80px'}}>
            {[{icon:PhoneIcon,title:'Call Us',detail:'+1 (437) 269-7007',sub:'Mon-Sat, 9AM-6PM EST',href:'tel:+14372697007',action:'Call Now'},{icon:WhatsAppIcon,title:'WhatsApp',detail:'+1 (437) 269-7007',sub:'Quick responses anytime',href:'https://wa.me/14372697007',action:'Message Us'},{icon:EmailIcon,title:'Email Us',detail:'jaswani@angeldiamondinc.com',sub:'We respond within 24 hours',href:'mailto:jaswani@angeldiamondinc.com',action:'Send Email'},{icon:LocationIcon,title:'Location',detail:'Canada',sub:'Online classes worldwide',href:'#',action:'View Details'}].map(c=>(
              <a key={c.title} href={c.href} target={c.href.startsWith('http')?'_blank':undefined} rel={c.href.startsWith('http')?'noopener noreferrer':undefined} className="card-luxury" style={{background:'white',padding:'32px',borderRadius:'4px',textAlign:'center',textDecoration:'none',display:'block'}}>
                <div style={{width:'64px',height:'64px',background:C.goldLighter,borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 16px',transition:'background 0.3s'}} onMouseOver={e=>(e.currentTarget.style.background=C.gold)} onMouseOut={e=>(e.currentTarget.style.background=C.goldLighter)}>
                  <c.icon size={28} style={{color:C.gold}} />
                </div>
                <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:'18px',fontWeight:700,color:C.primary,marginBottom:'8px'}}>{c.title}</h3>
                <p style={{color:'#374151',fontSize:'14px',fontWeight:500,marginBottom:'4px'}}>{c.detail}</p>
                <p style={{color:'#6b7280',fontSize:'12px',marginBottom:'16px'}}>{c.sub}</p>
                <span style={{color:C.gold,fontSize:'14px',fontWeight:600,display:'inline-flex',alignItems:'center',gap:'4px'}}>{c.action}<ArrowRightIcon size={12} /></span>
              </a>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div style={{display:'flex',alignItems:'center',gap:'12px',marginBottom:'16px'}}><DiamondIcon size={16} style={{color:C.gold}} /><span style={{color:C.gold,fontSize:'13px',fontWeight:600,textTransform:'uppercase',letterSpacing:'3px'}}>Reach Out</span></div>
              <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(28px,3vw,40px)',fontWeight:700,color:C.primary,marginBottom:'24px'}}>We Would Love to <span style={{color:C.gold}}>Hear from You</span></h2>
              <p style={{color:'#4b5563',lineHeight:1.8,marginBottom:'32px'}}>Whether you are interested in enrolling, have questions about tools, or want to learn about a career in gemology — reach out via WhatsApp for the fastest response.</p>
              <div style={{display:'flex',flexDirection:'column',gap:'16px'}}>
                {[{icon:ZoomIcon,title:'Free Consultation Call',desc:'Schedule a free Zoom consultation to discuss your goals and explore course options.'},{icon:ClockIcon,title:'Business Hours',desc:'Monday to Saturday: 9:00 AM - 6:00 PM EST. WhatsApp monitored outside hours for urgent inquiries.'},{icon:GlobeIcon,title:'International Students Welcome',desc:'We accommodate students from all time zones with flexible class scheduling options.'}].map(item=>(
                  <div key={item.title} style={{display:'flex',gap:'16px',padding:'16px',background:C.warm,borderRadius:'4px'}}>
                    <div style={{width:'48px',height:'48px',background:C.goldLighter,borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}><item.icon size={22} style={{color:C.gold}} /></div>
                    <div><h4 style={{fontWeight:600,color:C.primary,marginBottom:'4px'}}>{item.title}</h4><p style={{fontSize:'14px',color:'#4b5563',lineHeight:1.7}}>{item.desc}</p></div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div style={{background:C.warm,padding:'32px',borderRadius:'4px',border:'1px solid #e5e7eb'}}>
                <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:'24px',fontWeight:700,color:C.primary,marginBottom:'24px'}}>How Can We Help?</h3>
                <div style={{display:'flex',flexDirection:'column',gap:'12px',marginBottom:'32px'}}>
                  {[{title:'Course Enrollment',desc:'Want to enroll? Contact us to discuss options and schedules.',link:'https://wa.me/14372697007?text=Hi%2C%20I%20am%20interested%20in%20enrolling.'},{title:'Equipment Purchase',desc:'Looking for tools? Ask about exclusive student pricing.',link:'https://wa.me/14372697007?text=Hi%2C%20I%20am%20interested%20in%20purchasing%20tools.'},{title:'Career Guidance',desc:'Not sure which program fits you? We will help you decide.',link:'https://wa.me/14372697007?text=Hi%2C%20I%20would%20like%20career%20guidance.'},{title:'General Inquiry',desc:'Any other question? We are happy to help.',link:'https://wa.me/14372697007?text=Hi%2C%20I%20have%20a%20question.'}].map(item=>(
                    <a key={item.title} href={item.link} target="_blank" rel="noopener noreferrer" style={{display:'block',padding:'20px',background:'white',borderRadius:'4px',border:'1px solid #e5e7eb',textDecoration:'none',transition:'all 0.2s'}} onMouseOver={e=>{e.currentTarget.style.borderColor='rgba(197,160,71,0.4)';e.currentTarget.style.boxShadow='0 4px 20px rgba(0,0,0,0.08)'}} onMouseOut={e=>{e.currentTarget.style.borderColor='#e5e7eb';e.currentTarget.style.boxShadow='none'}}>
                      <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
                        <div><h4 style={{fontWeight:600,color:C.primary,marginBottom:'4px'}}>{item.title}</h4><p style={{fontSize:'14px',color:'#6b7280'}}>{item.desc}</p></div>
                        <ArrowRightIcon size={18} style={{color:C.gold,flexShrink:0,marginTop:'4px'}} />
                      </div>
                    </a>
                  ))}
                </div>
                <div style={{background:C.primary,padding:'24px',borderRadius:'4px',textAlign:'center',color:'white'}}>
                  <WhatsAppIcon size={32} style={{color:C.gold,margin:'0 auto 12px',display:'block'}} />
                  <h4 style={{fontFamily:"'Playfair Display',serif",fontSize:'18px',fontWeight:700,marginBottom:'8px'}}>Fastest Way to Reach Us</h4>
                  <p style={{color:'#9ca3af',fontSize:'14px',marginBottom:'16px'}}>Send us a message on WhatsApp for quick responses.</p>
                  <a href="https://wa.me/14372697007" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{width:'100%',justifyContent:'center',fontSize:'12px'}}><WhatsAppIcon size={16} />Chat on WhatsApp</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{background:C.warm}}>
        <div className="container-custom">
          <div style={{textAlign:'center',maxWidth:'672px',margin:'0 auto 48px'}}>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(24px,3vw,36px)',fontWeight:700,color:C.primary}}>Why Students Choose <span style={{color:C.gold}}>Canadian Diamond Academy</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" style={{maxWidth:'900px',margin:'0 auto'}}>
            {['Personalized 1-on-1 Instruction','Flexible Class Scheduling','Industry-Recognized Certificates','Expert Instructors with Decades of Experience','Special Student Pricing on Tools','Career Guidance & Support','Global Student Community','Comprehensive Curriculum','Learn from Anywhere in the World'].map(item=>(
              <div key={item} style={{display:'flex',alignItems:'center',gap:'12px',padding:'12px'}}>
                <div style={{width:'24px',height:'24px',background:C.goldLighter,borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}><CheckIcon size={14} style={{color:C.gold}} /></div>
                <span style={{fontSize:'14px',color:'#374151',fontWeight:500}}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
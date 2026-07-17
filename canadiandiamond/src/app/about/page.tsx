'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DiamondIcon, GraduationIcon, GlobeIcon, ShieldIcon, CheckIcon, ArrowRightIcon, UsersIcon, CertificateIcon, SparkleIcon, ClockIcon } from '@/components/Icons';

const C = { primary:'#1B2A4A', gold:'#C5A047', goldLighter:'#F5F0E3', goldDark:'#A88A3A', warm:'#FAFAF7' };

const values = [
  { icon: ShieldIcon, title: 'Integrity', desc: 'We uphold the highest standards of honesty in our education, ensuring every student receives accurate, unbiased gemological knowledge.' },
  { icon: GraduationIcon, title: 'Excellence', desc: 'Our commitment to excellence drives everything — from curriculum development and instructor selection to student support and certification.' },
  { icon: UsersIcon, title: 'Personalization', desc: 'Every student is unique. Our 1-on-1 teaching model ensures each learning experience is customized to individual goals and pace.' },
  { icon: GlobeIcon, title: 'Accessibility', desc: 'Through our fully online platform, we make world-class gemological education accessible to students everywhere.' },
];

const milestones = [
  { year: '2009', title: 'Academy Founded', desc: 'Canadian Diamond Academy was established with a mission to democratize gemological education across Canada.' },
  { year: '2012', title: 'Online Platform Launch', desc: 'Transitioned to a fully online model, enabling students across the globe to access our premium courses via Zoom.' },
  { year: '2015', title: 'Curriculum Expansion', desc: 'Expanded course catalog to include jewelry design, manufacturing, and advanced gemstone identification.' },
  { year: '2018', title: 'Tools & Equipment Store', desc: 'Launched our online store offering professional gemological tools and jewelry-making equipment.' },
  { year: '2021', title: 'International Recognition', desc: 'Achieved alignment with international standards and partnered with leading suppliers including Stuller.' },
  { year: '2024', title: '500+ Graduates', desc: 'Celebrated over 500 graduates worldwide with successful careers in the diamond and jewelry industry.' },
];

export default function AboutPage() {
  return (
    <>
      <section style={{position:'relative',background:C.primary,padding:'96px 0 128px',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0}}><Image src="https://images.unsplash.com/photo-157340600&q=80" alt="About" fill style={{objectFit:'cover',opacity:0.15}} /><div style={{position:'absolute',inset:0,background:'linear-gradient(to bottom,rgba(27,42,74,0.9),#1B2A4A)'}} /></div>
        <div className="container-custom" style={{position:'relative',zIndex:10,textAlign:'center'}}>
          <div style={{display:'flex',alignItems:'center',gap:'12px',justifyContent:'center',marginBottom:'16px'}}><div style={{height:'1px',width:'48px',background:C.gold}} /><span style={{color:C.gold,fontSize:'13px',fontWeight:600,textTransform:'uppercase',letterSpacing:'4px'}}>Our Story</span><div style={{height:'1px',width:'48px',background:C.gold}} /></div>
          <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(36px,5vw,60px)',fontWeight:800,color:'white',marginBottom:'24px'}}>About <span style={{background:'linear-gradient(135deg,#C5A047,#E8D48B,#C5A047)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>Canadian Diamond Academy</span></h1>
          <p style={{color:'#9ca3af',fontSize:'18px',maxWidth:'640px',margin:'0 auto',lineHeight:1.8}}>For over 15 years, we have been shaping the future of gemological education in Canada and beyond.</p>
        </div>
      </section>

      <section className="section-padding" style={{background:'white'}}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div style={{position:'relative'}}>
              <div style={{position:'relative',aspectRatio:'4/5',borderRadius:'4px',overflow:'hidden'}}><Image src="/course4.png" alt="Mission" fill style={{objectFit:'cover'}} /></div>
              <div style={{position:'absolute',bottom:'-24px',left:'-24px',width:'192px',height:'192px',background:C.goldLighter,borderRadius:'4px',zIndex:-1}} className="hidden lg:block" />
            </div>
            <div>
              <div style={{display:'flex',alignItems:'center',gap:'12px',marginBottom:'16px'}}><DiamondIcon size={16} style={{color:C.gold}} /><span style={{color:C.gold,fontSize:'13px',fontWeight:600,textTransform:'uppercase',letterSpacing:'3px'}}>Our Mission</span></div>
              <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(28px,3vw,40px)',fontWeight:700,color:C.primary,marginBottom:'24px'}}>Empowering Aspiring Gemologists with <span style={{color:C.gold}}>Knowledge & Skill</span></h2>
              <p style={{color:'#4b5563',marginBottom:'20px',lineHeight:1.8}}>Canadian Diamond Academy was founded with a clear mission: to make professional gemological education accessible to anyone, anywhere. Our founder, Bhagwan Mohanlal Jaswani, a veteran in the diamond industry, envisioned an academy where every student receives personalized attention from expert instructors.</p>
              <p style={{color:'#4b5563',marginBottom:'32px',lineHeight:1.8}}>Today, we continue to innovate and expand our programs to ensure our students are equipped with the knowledge, skills, and confidence to thrive in the global diamond and jewelry industry.</p>
              <div style={{background:C.goldLighter,padding:'24px',borderRadius:'4px',borderLeft:`4px solid ${C.gold}`}}>
                <p style={{fontFamily:"'Playfair Display',serif",fontSize:'18px',color:C.primary,fontStyle:'italic'}}>&ldquo;Our goal is not just to educate — it is to inspire the next generation of gemological professionals.&rdquo;</p>
                <p style={{color:C.goldDark,fontSize:'14px',fontWeight:600,marginTop:'12px'}}>— B.M. Jaswani, Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{background:C.warm}}>
        <div className="container-custom">
          <div style={{textAlign:'center',maxWidth:'672px',margin:'0 auto 64px'}}>
            <div style={{display:'flex',alignItems:'center',gap:'12px',justifyContent:'center',marginBottom:'16px'}}><DiamondIcon size={16} style={{color:C.gold}} /><span style={{color:C.gold,fontSize:'13px',fontWeight:600,textTransform:'uppercase',letterSpacing:'3px'}}>Our Values</span></div>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(28px,3vw,40px)',fontWeight:700,color:C.primary}}>The Principles That <span style={{color:C.gold}}>Guide Us</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map(v=>(<div key={v.title} className="card-luxury" style={{background:'white',padding:'32px',borderRadius:'4px',display:'flex',gap:'24px'}}>
              <div style={{width:'56px',height:'56px',background:C.goldLighter,borderRadius:'4px',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}><v.icon size={28} style={{color:C.gold}} /></div>
              <div><h3 style={{fontFamily:"'Playfair Display',serif",fontSize:'20px',fontWeight:700,color:C.primary,marginBottom:'12px'}}>{v.title}</h3><p style={{color:'#4b5563',fontSize:'14px',lineHeight:1.8}}>{v.desc}</p></div>
            </div>))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{background:'white'}}>
        <div className="container-custom">
          <div style={{textAlign:'center',maxWidth:'672px',margin:'0 auto 64px'}}>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(28px,3vw,40px)',fontWeight:700,color:C.primary}}>Milestones of <span style={{color:C.gold}}>Excellence</span></h2>
          </div>
          <div style={{maxWidth:'720px',margin:'0 auto'}}>
            {milestones.map((m,i)=>(<div key={m.year} style={{display:'flex',gap:'40px',marginBottom: i<milestones.length-1 ? '40px' : 0}}>
              <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <div style={{width:'56px',height:'56px',background:C.primary,borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',color:C.gold,fontFamily:"'Playfair Display',serif",fontWeight:700,fontSize:'13px',flexShrink:0}}>{m.year}</div>
                {i<milestones.length-1&&<div style={{width:'1px',flex:1,background:'rgba(197,160,71,0.2)',marginTop:'8px'}} />}
              </div>
              <div style={{paddingBottom:'40px'}}>
                <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:'20px',fontWeight:700,color:C.primary,marginBottom:'8px'}}>{m.title}</h3>
                <p style={{color:'#4b5563',fontSize:'14px',lineHeight:1.8}}>{m.desc}</p>
              </div>
            </div>))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{background:C.primary,color:'white'}}>
        <div className="container-custom">
          <div style={{textAlign:'center',maxWidth:'672px',margin:'0 auto 64px'}}>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(28px,3vw,40px)',fontWeight:700}}>What Sets Us <span style={{color:C.gold}}>Apart</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{icon:UsersIcon,title:'1-on-1 Learning',desc:'Personalized approach ensures undivided attention from your instructor every session.'},{icon:ClockIcon,title:'Flexible Scheduling',desc:'We work around your schedule across all time zones, full-time or part-time.'},{icon:CertificateIcon,title:'Industry Certification',desc:'Certificates recognized by employers in the diamond and jewelry industry.'},{icon:SparkleIcon,title:'Hands-On Training',desc:'Practical exercises with real gemstones and professional tools.'},{icon:GlobeIcon,title:'Global Student Network',desc:'Connect with students and graduates from around the world.'},{icon:ShieldIcon,title:'Ongoing Support',desc:'Career guidance, job placement assistance, and continuous learning resources.'}].map(item=>(
              <div key={item.title} style={{padding:'24px',border:'1px solid rgba(255,255,255,0.1)',borderRadius:'4px',transition:'border-color 0.3s'}} onMouseOver={e=>(e.currentTarget.style.borderColor='rgba(197,160,71,0.3)')} onMouseOut={e=>(e.currentTarget.style.borderColor='rgba(255,255,255,0.1)')}>
                <item.icon size={28} style={{color:C.gold,marginBottom:'16px'}} />
                <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:'18px',fontWeight:700,marginBottom:'8px'}}>{item.title}</h3>
                <p style={{color:'#9ca3af',fontSize:'14px',lineHeight:1.8}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{background:C.warm}}>
        <div className="container-custom" style={{textAlign:'center'}}>
          <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(28px,3vw,40px)',fontWeight:700,color:C.primary,marginBottom:'24px'}}>Ready to Start Your <span style={{color:C.gold}}>Gemological Journey?</span></h2>
          <p style={{color:'#4b5563',maxWidth:'480px',margin:'0 auto 32px',lineHeight:1.8}}>Join hundreds of successful graduates who transformed their passion into thriving careers.</p>
          <div style={{display:'flex',flexWrap:'wrap',gap:'16px',justifyContent:'center'}}>
            <Link href="/courses" className="btn-primary" style={{justifyContent:'center'}}>Explore Programs<ArrowRightIcon size={16} /></Link>
            <Link href="/contact" className="btn-gold" style={{justifyContent:'center'}}>Get In Touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}
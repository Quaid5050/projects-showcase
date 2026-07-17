'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DiamondIcon, ClockIcon, CheckIcon, ArrowRightIcon, ZoomIcon, CertificateIcon, StarIcon, UsersIcon, SparkleIcon, WhatsAppIcon } from '@/components/Icons';

const C = { primary:'#1B2A4A', gold:'#C5A047', goldLighter:'#F5F0E3', goldDark:'#A88A3A', warm:'#FAFAF7' };

const courses = [
  { title:'Diamond Grading & Certification', duration:'12 Weeks', level:'Beginner to Advanced', sessions:'24 Sessions', desc:'Master the complete art and science of diamond grading. This comprehensive course covers every aspect of diamond evaluation, from understanding the 4Cs to producing professional grading reports.', longDesc:'You will learn to assess cut quality, determine color grades using master stones, identify clarity characteristics, and calculate carat weight accurately.', topics:['Understanding the 4Cs','Cut Quality Assessment','Color Grading Techniques','Clarity Grading & Plotting','Carat Weight Estimation','Grading Report Writing','Lab-Grown vs Natural','Diamond Treatments','Market Valuation','Professional Ethics'], image:'/course3.png', popular:true },
  { title:'Gemstone Identification', duration:'10 Weeks', level:'Intermediate', sessions:'20 Sessions', desc:'Develop professional expertise in identifying precious and semi-precious gemstones using standard gemological instruments.', longDesc:'From rubies and sapphires to emeralds and rare collector stones, you will learn the properties that define each gemstone species.', topics:['Optical Properties','Refractive Index Testing','Specific Gravity','Spectroscopy Fundamentals','Inclusion Patterns','Origin Determination','Synthetic vs Natural','Treatment Detection','Rare Gemstones','Lab Procedures'], image:'/course2.png', popular:false },
  { title:'Jewelry Design & Manufacturing', duration:'16 Weeks', level:'All Levels', sessions:'32 Sessions', desc:'From concept to finished product — learn jewelry design fundamentals, CAD modeling, metalworking, stone setting, and finishing techniques.', longDesc:'Whether creating custom pieces or launching your own line, this program provides the technical skills and creative knowledge you need.', topics:['Design Principles','CAD/CAM Design','Wax Carving','Lost Wax Casting','Precious Metals','Stone Setting Techniques','Prong, Bezel & Channel','Soldering & Assembly','Polishing & Finishing','Quality Control'], image:'/course1.png', popular:false },
  { title:'Diamond Cutting & Polishing', duration:'14 Weeks', level:'Intermediate to Advanced', sessions:'28 Sessions', desc:'Learn the traditional art and modern techniques of diamond cutting and polishing from master cutters.', longDesc:'Study rough diamond assessment, planning, cleaving, faceting, and polishing under expert guidance.', topics:['Rough Assessment','Computer Modeling','Marking Techniques','Cleaving & Sawing','Bruting & Girdling','Facet Placement','Brilliant Cut Execution','Fancy Shapes','Polishing Techniques','Yield Optimization'], image:'/course4.png', popular:true },
  { title:'Business of Gemstones', duration:'8 Weeks', level:'All Levels', sessions:'16 Sessions', desc:'A practical business course for those entering the gem and jewelry trade — buying, selling, sourcing, and pricing.', longDesc:'Covers market dynamics, supply chain, ethical sourcing, pricing strategies, and building client relationships.', topics:['Global Gem Market','Rough & Polished Trading','Pricing & Valuation','Supply Chain','Ethical Sourcing','Client Relationships','Marketing','Online Sales','Legal Framework','Business Planning'], image:'/course5.png', popular:false },
  { title:'Advanced Gemological Laboratory', duration:'10 Weeks', level:'Advanced', sessions:'20 Sessions', desc:'An advanced program for graduates specializing in laboratory gemology and complex gemstone analysis.', longDesc:'Gain expertise in advanced spectroscopic techniques, photoluminescence analysis, and treatment identification.', topics:['Advanced Spectroscopy','Photoluminescence','FTIR & UV-Vis','Treatment Detection','Lab Report Writing','Quality Assurance','Research Methodology','Diamond Classification','Origin Studies','Emerging Technologies'], image:'/course6.png', popular:false },
];

export default function CoursesPage() {
  return (
    <>
      <section style={{position:'relative',background:C.primary,padding:'96px 0 128px',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0}}><Image src="https://images.unsplash.com/photo-1515562141589-67f0d569b6fc?w=1600&q=80" alt="Courses" fill style={{objectFit:'cover',opacity:0.15}} /><div style={{position:'absolute',inset:0,background:'linear-gradient(to bottom,rgba(27,42,74,0.9),#1B2A4A)'}} /></div>
        <div className="container-custom" style={{position:'relative',zIndex:10,textAlign:'center'}}>
          <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(36px,5vw,60px)',fontWeight:800,color:'white',marginBottom:'24px'}}>Gemology <span style={{background:'linear-gradient(135deg,#C5A047,#E8D48B,#C5A047)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>Courses</span></h1>
          <p style={{color:'#9ca3af',fontSize:'18px',maxWidth:'640px',margin:'0 auto',lineHeight:1.8}}>Explore our comprehensive programs designed to take you from beginner to certified professional.</p>
        </div>
      </section>

      <section style={{background:'white',borderBottom:'1px solid #f3f4f6'}}>
        <div className="container-custom" style={{padding:'32px 20px'}}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[{icon:ZoomIcon,text:'1-on-1 Zoom Classes'},{icon:ClockIcon,text:'Flexible Scheduling'},{icon:CertificateIcon,text:'Industry Certification'},{icon:UsersIcon,text:'Expert Instructors'}].map(item=>(
              <div key={item.text} style={{display:'flex',alignItems:'center',gap:'12px'}}><item.icon size={20} style={{color:C.gold,flexShrink:0}} /><span style={{fontSize:'14px',color:'#374151',fontWeight:500}}>{item.text}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{background:C.warm}}>
        <div className="container-custom" style={{display:'flex',flexDirection:'column',gap:'48px'}}>
          {courses.map((course,i)=>(
            <div key={i} className="card-luxury" style={{background:'white',borderRadius:'4px',overflow:'hidden'}}>
              <div className="grid lg:grid-cols-5">
                <div style={{gridColumn:'span 2',position:'relative',minHeight:'280px'}}>
                  <Image src={course.image} alt={course.title} fill style={{objectFit:'cover'}} />
                  {course.popular&&<div style={{position:'absolute',top:'16px',left:'16px',background:C.gold,color:C.primary,fontSize:'12px',fontWeight:700,padding:'6px 16px',display:'flex',alignItems:'center',gap:'6px'}}><StarIcon size={12} />Most Popular</div>}
                </div>
                <div style={{gridColumn:'span 3',padding:'40px'}}>
                  <div style={{display:'flex',flexWrap:'wrap',gap:'8px',marginBottom:'16px'}}>
                    {[course.duration,course.level,course.sessions].map(t=>(<span key={t} style={{background:C.goldLighter,color:C.goldDark,fontSize:'12px',fontWeight:600,padding:'4px 12px',borderRadius:'20px'}}>{t}</span>))}
                  </div>
                  <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(22px,2.5vw,30px)',fontWeight:700,color:C.primary,marginBottom:'16px'}}>{course.title}</h2>
                  <p style={{color:'#4b5563',lineHeight:1.8,marginBottom:'8px'}}>{course.desc}</p>
                  <p style={{color:'#4b5563',fontSize:'14px',lineHeight:1.8,marginBottom:'24px'}}>{course.longDesc}</p>
                  <div style={{marginBottom:'24px'}}>
                    <h4 style={{fontSize:'13px',fontWeight:600,color:C.primary,marginBottom:'12px',textTransform:'uppercase',letterSpacing:'0.5px'}}>What You Will Learn</h4>
                    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'8px'}}>
                      {course.topics.map(t=>(<div key={t} style={{display:'flex',alignItems:'center',gap:'8px'}}><CheckIcon size={14} style={{color:C.gold,flexShrink:0}} /><span style={{fontSize:'14px',color:'#4b5563'}}>{t}</span></div>))}
                    </div>
                  </div>
                  <a href="https://wa.me/14372697007" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{fontSize:'12px'}}><WhatsAppIcon size={16} />Enquire About This Course</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{padding:'64px 0',background:C.goldLighter}}>
        <div className="container-custom" style={{display:'flex',flexWrap:'wrap',alignItems:'center',gap:'32px'}}>
          <div style={{width:'64px',height:'64px',background:C.gold,borderRadius:'4px',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}><SparkleIcon size={32} style={{color:'white'}} /></div>
          <div style={{flex:1}}>
            <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:'24px',fontWeight:700,color:C.primary,marginBottom:'8px'}}>Special Student Pricing on Tools & Equipment</h3>
            <p style={{color:'#374151',lineHeight:1.8}}>Enrolled students enjoy exclusive discounts on all professional tools purchased through our platform and American Diamond Academy.</p>
          </div>
          <Link href="/products" className="btn-primary" style={{flexShrink:0,fontSize:'12px'}}>View Products<ArrowRightIcon size={14} /></Link>
        </div>
      </section>

      <section className="section-padding" style={{background:'white'}}>
        <div className="container-custom">
          <div style={{textAlign:'center',maxWidth:'672px',margin:'0 auto 64px'}}>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(28px,3vw,40px)',fontWeight:700,color:C.primary}}>Frequently Asked <span style={{color:C.gold}}>Questions</span></h2>
          </div>
          <div style={{maxWidth:'720px',margin:'0 auto',display:'flex',flexDirection:'column',gap:'16px'}}>
            {[{q:'Do I need prior experience?',a:'No prior experience required for beginner courses. Intermediate and advanced courses have prerequisites discussed during consultation.'},{q:'How do 1-on-1 Zoom classes work?',a:'Each class is a live interactive session with your dedicated instructor, typically 60-90 minutes, scheduled for your timezone.'},{q:'Will I receive certification?',a:'Yes, upon successful completion you receive an industry-recognized certificate from Canadian Diamond Academy.'},{q:'Can I purchase tools through the Academy?',a:'Absolutely. We offer professional tools with special student pricing, including from our partner American Diamond Academy.'},{q:'How do I enroll?',a:'Contact us via WhatsApp at +1 (437) 269-7007 or email jaswani@angeldiamondinc.com. We will guide you through enrollment.'}].map((faq,i)=>(
              <div key={i} style={{border:'1px solid #e5e7eb',borderRadius:'4px',padding:'24px',transition:'border-color 0.3s'}} onMouseOver={e=>(e.currentTarget.style.borderColor='rgba(197,160,71,0.3)')} onMouseOut={e=>(e.currentTarget.style.borderColor='#e5e7eb')}>
                <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:'18px',fontWeight:700,color:C.primary,marginBottom:'12px',display:'flex',alignItems:'flex-start',gap:'12px'}}><DiamondIcon size={16} style={{color:C.gold,flexShrink:0,marginTop:'4px'}} />{faq.q}</h3>
                <p style={{color:'#4b5563',fontSize:'14px',lineHeight:1.8,marginLeft:'28px'}}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
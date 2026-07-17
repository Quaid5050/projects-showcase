'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { DiamondIcon, GraduationIcon, ToolsIcon, ZoomIcon, CertificateIcon, ArrowRightIcon, CheckIcon, StarIcon, ClockIcon, GlobeIcon, ShieldIcon, SparkleIcon, MicroscopeIcon } from '@/components/Icons';

const C = { primary:'#1B2A4A', gold:'#C5A047', goldLight:'#E8D48B', goldLighter:'#F5F0E3', goldDark:'#A88A3A', warm:'#FAFAF7' };

const stats = [
  { value: '500+', label: 'Graduates Worldwide' },
  { value: '15+', label: 'Years of Excellence' },
  { value: '1:1', label: 'Personal Mentoring' },
  { value: '98%', label: 'Student Satisfaction' },
];

const features = [
  { icon: ZoomIcon, title: 'Live 1-on-1 Zoom Classes', desc: 'Experience personalized education with dedicated one-on-one sessions via Zoom. Each class is tailored to your pace, skill level, and learning objectives.' },
  { icon: CertificateIcon, title: 'Industry-Recognized Certification', desc: 'Earn certificates valued and respected throughout the global diamond and jewelry industry, opening career doors worldwide.' },
  { icon: GraduationIcon, title: 'Expert Instructors', desc: 'Learn from seasoned professionals with decades of real-world experience in diamond grading, gem identification, and jewelry craftsmanship.' },
  { icon: ToolsIcon, title: 'Professional Tools & Equipment', desc: 'Access premium diamond grading tools and jewelry-making machines at special student pricing through our platform.' },
  { icon: GlobeIcon, title: 'Learn From Anywhere', desc: 'Our fully online format means you can master the art and science of gemology from the comfort of your home, anywhere in the world.' },
  { icon: ShieldIcon, title: 'Trusted Curriculum', desc: 'Our curriculum is developed in alignment with international gemological standards, covering fundamentals to advanced professional techniques.' },
];

const courses = [
  { title: 'Diamond Grading & Certification', duration: '12 Weeks', level: 'Beginner to Advanced', desc: 'Master the 4Cs of diamond grading — Cut, Clarity, Color, and Carat Weight. Learn professional grading techniques used by certified gemologists worldwide.', topics: ['4Cs Analysis','Grading Reports','Clarity Plotting','Color Grading','Proportions'], image: '/course3.png' },
  { title: 'Gemstone Identification', duration: '10 Weeks', level: 'Intermediate', desc: 'Develop expertise in identifying precious and semi-precious gemstones using optical properties, inclusion patterns, and advanced testing.', topics: ['Optical Properties','Inclusion Study','Refractive Index','Spectroscopy','Origin'], image: '/course2.png' },
  { title: 'Jewelry Design & Manufacturing', duration: '16 Weeks', level: 'All Levels', desc: 'From concept to creation — learn jewelry design fundamentals, CAD modeling, metalworking, stone setting, and professional finishing techniques.', topics: ['CAD Design','Wax Carving','Stone Setting','Metal Casting','Finishing'], image: '/course1.png' },
];

const testimonials = [
  { name: 'Sarah Mitchell', role: 'Certified Gemologist', text: 'The personalized attention through 1-on-1 Zoom classes was exceptional. My instructor tailored every lesson to my pace and I earned my certification with confidence.' },
  { name: 'Rajesh Patel', role: 'Jewelry Store Owner', text: 'Canadian Diamond Academy transformed my understanding of diamonds. The practical skills I gained helped me build a successful jewelry business.' },
  { name: 'Emily Chen', role: 'Diamond Appraiser', text: 'The flexibility of online classes made all the difference for my career transition. The curriculum was comprehensive and the hands-on approach invaluable.' },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section style={{position:'relative',background:C.primary,minHeight:'90vh',display:'flex',alignItems:'center',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0}}>
          <Image src="/bg.png" alt="Luxury diamonds" fill style={{objectFit:'cover',}} priority />
          <div style={{position:'absolute',inset:0,}} />
        </div>
        <div style={{position:'absolute',top:'80px',right:'80px',width:'256px',height:'256px',border:'1px solid rgba(197,160,71,0.1)',transform:'rotate(45deg)'}} className="hidden lg:block" />

        <div className="container-custom" style={{position:'relative',zIndex:10,padding:'80px 20px'}}>
          <div style={{maxWidth:'800px'}}>
            <div style={{display:'flex',alignItems:'center',gap:'12px',marginBottom:'24px'}}>
              <div style={{height:'1px',width:'48px',background:C.gold}} />
              <span style={{color:C.gold,fontSize:'13px',fontWeight:600,textTransform:'uppercase',letterSpacing:'4px'}}>Established in Canada</span>
            </div>
            <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(42px,6vw,72px)',fontWeight:800,color:'white',lineHeight:1.1,marginBottom:'24px'}}>
              Master the Art of<br/><span style={{background:'linear-gradient(135deg,#C5A047,#E8D48B,#C5A047)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>Diamond Excellence</span>
            </h1>
            <p style={{color:'#d1d5db',fontSize:'18px',maxWidth:'640px',marginBottom:'40px',lineHeight:1.8}}>
              Canada&apos;s premier online diamond education institute. Learn diamond grading, gemstone identification, and jewelry craftsmanship through personalized 1-on-1 Zoom classes with world-class instructors.
            </p>
            <div style={{display:'flex',flexWrap:'wrap',gap:'16px',marginBottom:'64px'}}>
              <Link href="/courses" className="btn-gold">Explore Our Courses<ArrowRightIcon size={16} /></Link>
              <a href="https://wa.me/14372697007" target="_blank" rel="noopener noreferrer" style={{display:'inline-flex',alignItems:'center',justifyContent:'center',gap:'8px',padding:'14px 32px',border:'1px solid rgba(255,255,255,0.3)',color:'white',textDecoration:'none',fontSize:'14px',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.5px',transition:'background 0.3s'}} onMouseOver={e=>(e.currentTarget.style.background='rgba(255,255,255,0.1)')} onMouseOut={e=>(e.currentTarget.style.background='transparent')}>Free Consultation</a>
            </div>
            <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'32px',paddingTop:'40px',borderTop:'1px solid rgba(255,255,255,0.1)'}} className="grid-cols-2 md:grid-cols-4">
              {stats.map(s=>(
                <div key={s.label}>
                  <div style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(28px,3vw,40px)',fontWeight:700,color:C.gold,marginBottom:'4px'}}>{s.value}</div>
                  <div style={{color:'#9ca3af',fontSize:'14px'}}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT INTRO */}
      <section className="section-padding" style={{background:'white'}}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div style={{position:'relative'}}>
              <div style={{position:'relative',aspectRatio:'4/5',borderRadius:'4px',overflow:'hidden'}}>
                <Image src="/bg1.png" alt="Diamond education" fill style={{objectFit:'cover'}} />
              </div>
              <div style={{position:'absolute',bottom:'-32px',right:'-16px',background:'white',boxShadow:'0 20px 60px rgba(0,0,0,0.12)',padding:'24px',borderRadius:'4px',maxWidth:'280px',zIndex:10}}>
                <div style={{display:'flex',alignItems:'center',gap:'12px',marginBottom:'12px'}}>
                  <div style={{width:'48px',height:'48px',background:C.goldLighter,borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center'}}><GraduationIcon size={24} style={{color:C.gold}} /></div>
                  <div><div style={{fontFamily:"'Playfair Display',serif",fontWeight:700,color:C.primary,fontSize:'18px'}}>15+ Years</div><div style={{fontSize:'12px',color:'#6b7280'}}>of Educational Excellence</div></div>
                </div>
                <p style={{fontSize:'12px',color:'#6b7280',lineHeight:1.6}}>Trusted by hundreds of students across the globe for professional gemology education.</p>
              </div>
            </div>

            <div>
              <div style={{display:'flex',alignItems:'center',gap:'12px',marginBottom:'16px'}}><DiamondIcon size={16} style={{color:C.gold}} /><span style={{color:C.gold,fontSize:'13px',fontWeight:600,textTransform:'uppercase',letterSpacing:'3px'}}>About Our Academy</span></div>
              <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(28px,3vw,40px)',fontWeight:700,color:C.primary,marginBottom:'24px',lineHeight:1.2}}>Where Passion for Diamonds Meets <span style={{color:C.gold}}>World-Class Education</span></h2>
              <p style={{color:'#4b5563',marginBottom:'20px',lineHeight:1.8}}>Canadian Diamond Academy is a pioneering online education institute dedicated to providing comprehensive gemological education to students worldwide. Founded with the vision of making premium diamond education accessible to everyone, we offer personalized 1-on-1 learning experiences.</p>
              <p style={{color:'#4b5563',marginBottom:'32px',lineHeight:1.8}}>Our curriculum is designed in alignment with international gemological standards, covering everything from diamond grading and gemstone identification to jewelry design and manufacturing.</p>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'12px',marginBottom:'40px'}}>
                {['Personalized Learning Plans','International Standards','Flexible Scheduling','Career-Ready Skills','Expert Mentorship','Global Community'].map(item=>(
                  <div key={item} style={{display:'flex',alignItems:'center',gap:'10px'}}>
                    <div style={{width:'20px',height:'20px',background:C.goldLighter,borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}><CheckIcon size={12} style={{color:C.gold}} /></div>
                    <span style={{fontSize:'14px',color:'#374151',fontWeight:500}}>{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/about" className="btn-primary">Learn More About Us<ArrowRightIcon size={16} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-padding" style={{background:C.warm}}>
        <div className="container-custom">
          <div style={{textAlign:'center',maxWidth:'672px',margin:'0 auto 64px'}}>
            <div style={{display:'flex',alignItems:'center',gap:'12px',justifyContent:'center',marginBottom:'16px'}}><DiamondIcon size={16} style={{color:C.gold}} /><span style={{color:C.gold,fontSize:'13px',fontWeight:600,textTransform:'uppercase',letterSpacing:'3px'}}>Why Choose Us</span></div>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(28px,3vw,40px)',fontWeight:700,color:C.primary,marginBottom:'24px'}}>An Education Experience Built for <span style={{color:C.gold}}>Your Success</span></h2>
            <p style={{color:'#4b5563',lineHeight:1.8}}>We combine cutting-edge technology with time-honored gemological techniques to deliver an unparalleled learning experience.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map(f=>(
              <div key={f.title} className="card-luxury" style={{background:'white',padding:'32px',borderRadius:'4px'}}>
                <div style={{width:'56px',height:'56px',background:C.goldLighter,borderRadius:'4px',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'24px'}}><f.icon size={28} style={{color:C.gold}} /></div>
                <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:'20px',fontWeight:700,color:C.primary,marginBottom:'12px'}}>{f.title}</h3>
                <p style={{color:'#4b5563',fontSize:'14px',lineHeight:1.8}}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES PREVIEW */}
      <section className="section-padding" style={{background:'white'}}>
        <div className="container-custom">
          <div style={{textAlign:'center',maxWidth:'672px',margin:'0 auto 64px'}}>
            <div style={{display:'flex',alignItems:'center',gap:'12px',justifyContent:'center',marginBottom:'16px'}}><DiamondIcon size={16} style={{color:C.gold}} /><span style={{color:C.gold,fontSize:'13px',fontWeight:600,textTransform:'uppercase',letterSpacing:'3px'}}>Our Programs</span></div>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(28px,3vw,40px)',fontWeight:700,color:C.primary,marginBottom:'24px'}}>Comprehensive Gemology <span style={{color:C.gold}}>Programs</span></h2>
            <p style={{color:'#4b5563',lineHeight:1.8}}>Choose from our carefully designed programs, each created to provide you with knowledge and practical skills to excel.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {courses.map((c,i)=>(
              <div key={i} className="card-luxury" style={{background:'white',borderRadius:'4px',overflow:'hidden'}}>
                <div style={{position:'relative',height:'224px',overflow:'hidden'}}>
                  <Image src={c.image} alt={c.title} fill style={{objectFit:'cover',transition:'transform 0.5s'}} />
                  <div style={{position:'absolute',inset:0,background:'linear-gradient(to top, rgba(27,42,74,0.6), transparent)'}} />
                  <div style={{position:'absolute',bottom:'16px',left:'16px',display:'flex',gap:'8px'}}>
                    <span style={{background:C.gold,color:C.primary,fontSize:'12px',fontWeight:600,padding:'4px 12px'}}>{c.duration}</span>
                    <span style={{background:'rgba(255,255,255,0.9)',color:C.primary,fontSize:'12px',fontWeight:600,padding:'4px 12px'}}>{c.level}</span>
                  </div>
                </div>
                <div style={{padding:'24px'}}>
                  <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:'20px',fontWeight:700,color:C.primary,marginBottom:'12px'}}>{c.title}</h3>
                  <p style={{color:'#4b5563',fontSize:'14px',lineHeight:1.8,marginBottom:'16px'}}>{c.desc}</p>
                  <div style={{display:'flex',flexWrap:'wrap',gap:'8px',marginBottom:'24px'}}>
                    {c.topics.map(t=>(<span key={t} style={{background:C.goldLighter,color:C.goldDark,fontSize:'12px',padding:'4px 12px',borderRadius:'20px',fontWeight:500}}>{t}</span>))}
                  </div>
                  <Link href="/courses" style={{color:C.gold,fontSize:'14px',fontWeight:600,display:'inline-flex',alignItems:'center',gap:'8px',textDecoration:'none'}}>Learn More<ArrowRightIcon size={14} /></Link>
                </div>
              </div>
            ))}
          </div>
          <div style={{textAlign:'center',marginTop:'48px'}}><Link href="/courses" className="btn-primary">View All Programs<ArrowRightIcon size={16} /></Link></div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-padding" style={{background:C.primary,color:'white',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',top:'40px',left:'40px',width:'384px',height:'384px',border:'1px solid rgba(197,160,71,0.05)',transform:'rotate(45deg)'}} className="hidden lg:block" />
        <div className="container-custom" style={{position:'relative',zIndex:10}}>
          <div style={{textAlign:'center',maxWidth:'672px',margin:'0 auto 64px'}}>
            <div style={{display:'flex',alignItems:'center',gap:'12px',justifyContent:'center',marginBottom:'16px'}}><DiamondIcon size={16} style={{color:C.gold}} /><span style={{color:C.gold,fontSize:'13px',fontWeight:600,textTransform:'uppercase',letterSpacing:'3px'}}>How It Works</span></div>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(28px,3vw,40px)',fontWeight:700,marginBottom:'24px'}}>Your Path to <span style={{color:C.gold}}>Gemological Mastery</span></h2>
            <p style={{color:'#9ca3af',lineHeight:1.8}}>Getting started is simple. Follow these steps to begin your journey.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {step:'01',icon:SparkleIcon,title:'Choose Your Program',desc:'Browse our catalog and select the program that aligns with your career goals.'},
              {step:'02',icon:ClockIcon,title:'Schedule Your Classes',desc:'Work with our team to set a flexible schedule that fits your timezone.'},
              {step:'03',icon:ZoomIcon,title:'Learn via Zoom',desc:'Attend personalized 1-on-1 sessions with expert instructors.'},
              {step:'04',icon:CertificateIcon,title:'Get Certified',desc:'Complete coursework and earn an industry-recognized certification.'},
            ].map(item=>(
              <div key={item.step} style={{textAlign:'center'}}>
                <div style={{position:'relative',width:'80px',height:'80px',margin:'0 auto 24px'}}>
                  <div style={{position:'absolute',inset:0,border:'1px solid rgba(197,160,71,0.2)',borderRadius:'50%'}} />
                  <div style={{position:'absolute',inset:'8px',background:'rgba(197,160,71,0.1)',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center'}}><item.icon size={28} style={{color:C.gold}} /></div>
                  <div style={{position:'absolute',top:'-8px',right:'-8px',width:'32px',height:'32px',background:C.gold,color:C.primary,fontSize:'12px',fontWeight:700,display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'50%'}}>{item.step}</div>
                </div>
                <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:'18px',fontWeight:700,marginBottom:'12px'}}>{item.title}</h3>
                <p style={{color:'#9ca3af',fontSize:'14px',lineHeight:1.8}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding" style={{background:C.warm}}>
        <div className="container-custom">
          <div style={{textAlign:'center',maxWidth:'672px',margin:'0 auto 64px'}}>
            <div style={{display:'flex',alignItems:'center',gap:'12px',justifyContent:'center',marginBottom:'16px'}}><DiamondIcon size={16} style={{color:C.gold}} /><span style={{color:C.gold,fontSize:'13px',fontWeight:600,textTransform:'uppercase',letterSpacing:'3px'}}>Testimonials</span></div>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(28px,3vw,40px)',fontWeight:700,color:C.primary,marginBottom:'24px'}}>What Our Students <span style={{color:C.gold}}>Say About Us</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t,i)=>(
              <div key={i} style={{background:'white',padding:'32px',borderRadius:'4px',border:'1px solid #f3f4f6',transition:'box-shadow 0.3s'}} onMouseOver={e=>(e.currentTarget.style.boxShadow='0 20px 60px rgba(0,0,0,0.1)')} onMouseOut={e=>(e.currentTarget.style.boxShadow='none')}>
                <div style={{display:'flex',gap:'4px',marginBottom:'16px'}}>{[1,2,3,4,5].map(j=>(<StarIcon key={j} size={16} style={{color:C.gold}} />))}</div>
                <p style={{color:'#4b5563',fontSize:'14px',lineHeight:1.8,marginBottom:'24px',fontStyle:'italic'}}>&ldquo;{t.text}&rdquo;</p>
                <div style={{display:'flex',alignItems:'center',gap:'16px',paddingTop:'16px',borderTop:'1px solid #f3f4f6'}}>
                  <div style={{width:'48px',height:'48px',background:C.primary,borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontFamily:"'Playfair Display',serif",fontWeight:700,fontSize:'18px'}}>{t.name.charAt(0)}</div>
                  <div><div style={{fontWeight:600,color:C.primary,fontSize:'14px'}}>{t.name}</div><div style={{fontSize:'12px',color:'#6b7280'}}>{t.role}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS PREVIEW */}
      <section className="section-padding" style={{background:'white'}}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div style={{display:'flex',alignItems:'center',gap:'12px',marginBottom:'16px'}}><DiamondIcon size={16} style={{color:C.gold}} /><span style={{color:C.gold,fontSize:'13px',fontWeight:600,textTransform:'uppercase',letterSpacing:'3px'}}>Professional Equipment</span></div>
              <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(28px,3vw,40px)',fontWeight:700,color:C.primary,marginBottom:'24px'}}>Premium Tools & <span style={{color:C.gold}}>Equipment</span></h2>
              <p style={{color:'#4b5563',marginBottom:'20px',lineHeight:1.8}}>Equip yourself with professional-grade diamond grading tools and jewelry-making machines at exclusive student pricing.</p>
              <div style={{display:'flex',flexDirection:'column',gap:'16px',marginBottom:'40px'}}>
                {[{icon:MicroscopeIcon,title:'Gemological Microscopes',desc:'High-powered microscopes for detailed gem examination'},{icon:ToolsIcon,title:'Jewelry Making Tools',desc:'Complete sets for metalworking, setting, and finishing'},{icon:SparkleIcon,title:'Diamond Grading Instruments',desc:'Precision instruments for accurate assessment'}].map(tool=>(
                  <div key={tool.title} style={{display:'flex',gap:'16px',padding:'16px',borderRadius:'4px',transition:'background 0.2s'}} onMouseOver={e=>(e.currentTarget.style.background=C.warm)} onMouseOut={e=>(e.currentTarget.style.background='transparent')}>
                    <div style={{width:'48px',height:'48px',background:C.goldLighter,borderRadius:'4px',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}><tool.icon size={24} style={{color:C.gold}} /></div>
                    <div><h4 style={{fontWeight:600,color:C.primary,marginBottom:'4px'}}>{tool.title}</h4><p style={{fontSize:'14px',color:'#6b7280'}}>{tool.desc}</p></div>
                  </div>
                ))}
              </div>
              <Link href="/products" className="btn-primary">Browse All Products<ArrowRightIcon size={16} /></Link>
            </div>
            <div style={{position:'relative'}}>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'16px'}}>
                <div style={{display:'flex',flexDirection:'column',gap:'16px'}}>
                  <div style={{position:'relative',aspectRatio:'3/4',borderRadius:'4px',overflow:'hidden'}}><Image src="/tool1.png" alt="Tools" fill style={{objectFit:'cover'}} /></div>
                  <div style={{position:'relative',aspectRatio:'1',borderRadius:'4px',overflow:'hidden'}}><Image src="/tool3.png" alt="Craftsmanship" fill style={{objectFit:'cover'}} /></div>
                </div>
                <div style={{display:'flex',flexDirection:'column',gap:'16px',paddingTop:'32px'}}>
                  <div style={{position:'relative',aspectRatio:'1',borderRadius:'4px',overflow:'hidden'}}><Image src="/tool5.png" alt="Equipment" fill style={{objectFit:'cover'}} /></div>
                  <div style={{position:'relative',aspectRatio:'3/4',borderRadius:'4px',overflow:'hidden'}}><Image src="/tool6.png" alt="Diamond inspection" fill style={{objectFit:'cover'}} /></div>
                </div>
              </div>
              <div style={{position:'absolute',top:'16px',right:'16px',background:C.gold,color:C.primary,padding:'12px 16px',borderRadius:'4px',boxShadow:'0 10px 30px rgba(197,160,71,0.4)',zIndex:10}}>
                <div style={{fontFamily:"'Playfair Display',serif",fontWeight:700,fontSize:'18px'}}>Special</div>
                <div style={{fontSize:'12px',fontWeight:600}}>Student Pricing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section style={{padding:'64px 0',background:C.warm,borderTop:'1px solid #e5e7eb',borderBottom:'1px solid #e5e7eb'}}>
        <div className="container-custom">
          <div style={{textAlign:'center',marginBottom:'40px'}}><p style={{fontSize:'13px',color:'#6b7280',textTransform:'uppercase',letterSpacing:'3px',fontWeight:500}}>Aligned with International Gemological Standards</p></div>
          <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',gap:'48px',opacity:0.6}}>
            {['GIA Standards','IGI Aligned','Canadian Gemology','Stuller Partner','Zoom Certified'].map(p=>(
              <div key={p} style={{display:'flex',alignItems:'center',gap:'8px',fontFamily:"'Playfair Display',serif",fontWeight:700,fontSize:'18px',color:C.primary}}><DiamondIcon size={18} style={{color:C.gold}} />{p}</div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
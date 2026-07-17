'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DiamondIcon, ToolsIcon, ArrowRightIcon, CheckIcon, MicroscopeIcon, SparkleIcon, ShieldIcon, WhatsAppIcon, StarIcon } from '@/components/Icons';

const C = { primary:'#1B2A4A', gold:'#C5A047', goldLighter:'#F5F0E3', goldDark:'#A88A3A', warm:'#FAFAF7' };

const categories = [
  { title:'Diamond Grading Instruments', desc:'Professional-grade instruments for accurate diamond assessment including precision loupes, tweezers, and digital carat scales.', image:'/tool1.png', items:['10x Triplet Loupes','Diamond Tweezers','Color Grading Master Stones','Proportion Analyzers','Digital Carat Scales','Darkfield Illuminators','Diamond Light Boxes','Grading Papers'] },
  { title:'Gemological Microscopes', desc:'High-quality binocular and trinocular microscopes designed for gemological examination with darkfield and brightfield illumination.', image:'/tool2.png', items:['Binocular Microscopes','Trinocular with Camera','Darkfield Attachments','Immersion Cells','Fiber Optic Illuminators','Digital Imaging Systems','Microscope Accessories','Replacement Parts'] },
  { title:'Gemstone Testing Equipment', desc:'Essential instruments for gemstone identification including refractometers, spectroscopes, and specialized filters.', image:'/tool3.png', items:['Gem Refractometers','Handheld Spectroscopes','Chelsea Color Filters','Polariscopes','Dichroscopes','UV Lamps','Specific Gravity Equipment','Thermal Conductivity Testers'] },
  { title:'Jewelry Making Tools', desc:'Complete range of professional jewelry-making tools sourced from Stuller and other industry-trusted manufacturers.', image:'/tool4.png', items:["Jeweler's Bench","Hand Files & Needle Files","Pliers & Cutters Set","Soldering Equipment","Polishing Motors","Flex Shaft Rotary Tools","Mandrels & Ring Sizers","Wax Carving Tools"] },
  { title:'Stone Setting Tools', desc:'Specialized tools for secure and precise stone setting across prong, bezel, channel, and pave settings.', image:'/tool5.png', items:['Prong Pushers','Bezel Rollers','Bead Raising Tools','Grain Tools','Setting Burs & Drills','Stone Holders','GRS Engraving Systems','Pavé Setting Kits'] },
  { title:'Machines & Heavy Equipment', desc:'Industrial and semi-industrial machines for jewelry manufacturing including casting machines and laser welders.', image:'/tool6.png', items:['Casting Machines','Rolling Mills','Laser Welding Machines','Ultrasonic Cleaners','Steam Cleaners','Tumbling Polishers','Diamond Cutting Wheels','Faceting Machines'] },
];

export default function ProductsPage() {
  return (
    <>
      <section style={{position:'relative',background:C.primary,padding:'96px 0 128px',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0}}><Image src="https://images.unsplash.com/photo-1600607686527-6fb886090705?w=1600&q=80" alt="Tools" fill style={{objectFit:'cover',opacity:0.15}} /><div style={{position:'absolute',inset:0,background:'linear-gradient(to bottom,rgba(27,42,74,0.9),#1B2A4A)'}} /></div>
        <div className="container-custom" style={{position:'relative',zIndex:10,textAlign:'center'}}>
          <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(36px,5vw,60px)',fontWeight:800,color:'white',marginBottom:'24px'}}>Tools & <span style={{background:'linear-gradient(135deg,#C5A047,#E8D48B,#C5A047)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>Equipment</span></h1>
          <p style={{color:'#9ca3af',fontSize:'18px',maxWidth:'640px',margin:'0 auto',lineHeight:1.8}}>Professional-grade gemological instruments, jewelry-making tools, and diamond processing equipment.</p>
        </div>
      </section>

      <section style={{background:C.goldLighter,borderBottom:'1px solid rgba(197,160,71,0.2)'}}>
        <div className="container-custom" style={{padding:'24px 20px',display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'space-between',gap:'16px'}}>
          <div style={{display:'flex',alignItems:'center',gap:'16px'}}><div style={{width:'40px',height:'40px',background:C.gold,borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}><StarIcon size={18} style={{color:'white'}} /></div><div><p style={{fontWeight:600,color:C.primary}}>Exclusive Student Pricing Available</p><p style={{fontSize:'14px',color:'#4b5563'}}>Enrolled students receive special discounts on all purchases.</p></div></div>
          <a href="https://wa.me/14372697007" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{flexShrink:0,fontSize:'12px'}}><WhatsAppIcon size={14} />Ask for Student Price</a>
        </div>
      </section>

      <section className="section-padding" style={{background:'white'}}>
        <div className="container-custom">
          <div style={{textAlign:'center',maxWidth:'672px',margin:'0 auto 64px'}}>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(28px,3vw,40px)',fontWeight:700,color:C.primary,marginBottom:'16px'}}>Premium Tools from <span style={{color:C.gold}}>Trusted Sources</span></h2>
            <p style={{color:'#4b5563',lineHeight:1.8}}>We source equipment from leading manufacturers including Stuller, ensuring every tool meets professional standards.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{icon:ShieldIcon,title:'Authentic Products',desc:'Sourced directly from authorized manufacturers.'},{icon:SparkleIcon,title:'Student Discounts',desc:'Exclusive pricing for all enrolled students.'},{icon:ToolsIcon,title:'Expert Guidance',desc:'Instructors help you choose the right tools.'},{icon:MicroscopeIcon,title:'Quality Guarantee',desc:'All products include manufacturer warranties.'}].map(item=>(
              <div key={item.title} style={{textAlign:'center'}}>
                <div style={{width:'64px',height:'64px',background:C.goldLighter,borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 16px'}}><item.icon size={28} style={{color:C.gold}} /></div>
                <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:'18px',fontWeight:700,color:C.primary,marginBottom:'8px'}}>{item.title}</h3>
                <p style={{color:'#4b5563',fontSize:'14px',lineHeight:1.8}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{background:C.warm}}>
        <div className="container-custom" style={{display:'flex',flexDirection:'column',gap:'40px'}}>
          {categories.map((cat,i)=>(
            <div key={i} className="card-luxury" style={{background:'white',borderRadius:'4px',overflow:'hidden'}}>
              <div className="grid lg:grid-cols-2">
                <div style={{position:'relative',minHeight:'320px',order: i%2===1 ? 2 : 1}}><Image src={cat.image} alt={cat.title} fill style={{objectFit:'cover'}} /></div>
                <div style={{padding:'40px',order: i%2===1 ? 1 : 2}}>
                  <div style={{display:'flex',alignItems:'center',gap:'8px',marginBottom:'16px'}}><ToolsIcon size={18} style={{color:C.gold}} /><span style={{fontSize:'12px',fontWeight:600,color:C.gold,textTransform:'uppercase',letterSpacing:'0.5px'}}>Category</span></div>
                  <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:'24px',fontWeight:700,color:C.primary,marginBottom:'16px'}}>{cat.title}</h3>
                  <p style={{color:'#4b5563',lineHeight:1.8,marginBottom:'24px'}}>{cat.desc}</p>
                  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'8px',marginBottom:'24px'}}>
                    {cat.items.map(item=>(<div key={item} style={{display:'flex',alignItems:'center',gap:'8px'}}><CheckIcon size={14} style={{color:C.gold,flexShrink:0}} /><span style={{fontSize:'14px',color:'#4b5563'}}>{item}</span></div>))}
                  </div>
                  <a href="https://wa.me/14372697007" target="_blank" rel="noopener noreferrer" style={{color:C.gold,fontSize:'14px',fontWeight:600,display:'inline-flex',alignItems:'center',gap:'8px',textDecoration:'none'}}><WhatsAppIcon size={16} />Enquire About Pricing<ArrowRightIcon size={14} /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding" style={{background:C.primary,color:'white',textAlign:'center'}}>
        <div className="container-custom" style={{maxWidth:'720px',margin:'0 auto'}}>
          <DiamondIcon size={40} style={{color:C.gold,margin:'0 auto 24px',display:'block'}} />
          <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(28px,3vw,40px)',fontWeight:700,marginBottom:'24px'}}>Also Available at <span style={{color:C.gold}}>American Diamond Academy</span></h2>
          <p style={{color:'#9ca3af',lineHeight:1.8,marginBottom:'32px'}}>Our partner site carries an extended range of tools. Students receive special pricing on purchases from both platforms.</p>
          <div style={{display:'flex',flexWrap:'wrap',gap:'16px',justifyContent:'center'}}>
            <a href="https://americandiamondacademy.com" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{justifyContent:'center'}}>Visit American Diamond Academy<ArrowRightIcon size={16} /></a>
            <Link href="/contact" style={{display:'inline-flex',alignItems:'center',justifyContent:'center',gap:'8px',padding:'14px 32px',border:'1px solid rgba(255,255,255,0.3)',color:'white',textDecoration:'none',fontSize:'14px',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.5px',transition:'background 0.3s'}} onMouseOver={e=>(e.currentTarget.style.background='rgba(255,255,255,0.1)')} onMouseOut={e=>(e.currentTarget.style.background='transparent')}>Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
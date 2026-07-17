"use client";
import { useState } from "react";
import { CheckCircle, MapPin, Phone, Mail, Facebook, Instagram, Youtube, Navigation, Send } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name:"", email:"", protocol:"", message:"" });
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="relative min-h-[55vh] w-full flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 bg-surface-deep-navy"><div className="absolute inset-0 grid-bg opacity-100"/><div className="absolute inset-0 scanline-overlay opacity-30"/></div>
        <div className="relative z-10 text-center px-margin-mobile max-w-3xl mx-auto">
          <span className="inline-block font-mono text-[10px] text-brand-red tracking-[0.2em] border border-brand-red/30 px-4 py-1.5 rounded mb-6">READY FOR THE NEXT LEVEL?</span>
          <h1 className="font-sora text-4xl md:text-6xl font-extrabold text-white mb-6 uppercase tracking-tight">Get In Touch</h1>
          <p className="text-on-surface-variant text-base max-w-lg mx-auto leading-relaxed">Our systems are primed for your inquiry. Connect with the nexus for bookings, events, or technical specifications.</p>
        </div>
      </section>

      <section className="section-fade py-24 px-margin-mobile md:px-margin-desktop max-w-container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            {sent ? (
              <div className="glass-panel p-12 rounded-xl text-center border border-brand-red/20">
                <CheckCircle className="w-12 h-12 text-brand-red mx-auto mb-4"/>
                <h3 className="font-sora text-2xl font-bold text-white mb-3">Transmission Received</h3>
                <p className="text-on-surface-variant mb-6">We&apos;ll respond within 24 hours at {form.email}.</p>
                <button onClick={()=>{setSent(false);setForm({name:"",email:"",protocol:"",message:""})}} className="text-brand-red font-bold hover:underline text-sm">Send Another</button>
              </div>
            ) : (
              <div className="glass-panel rounded-xl p-7 md:p-9">
                <h2 className="font-sora text-2xl font-bold text-white mb-8">Transmission Terminal</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div><label className="font-mono text-[10px] text-on-surface-variant tracking-[0.15em] block mb-2">CODENAME</label><input type="text" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your Name" className="w-full bg-surface-container-low border border-outline-variant/50 rounded-lg px-4 py-3 text-on-surface text-sm focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red transition-colors placeholder:text-on-surface-variant/30"/></div>
                  <div><label className="font-mono text-[10px] text-on-surface-variant tracking-[0.15em] block mb-2">SECURE FREQUENCY</label><input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="email@address.com" className="w-full bg-surface-container-low border border-outline-variant/50 rounded-lg px-4 py-3 text-on-surface text-sm focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red transition-colors placeholder:text-on-surface-variant/30"/></div>
                  <div className="md:col-span-2"><label className="font-mono text-[10px] text-on-surface-variant tracking-[0.15em] block mb-2">PROTOCOL</label><select value={form.protocol} onChange={e=>setForm({...form,protocol:e.target.value})} className="w-full bg-surface-container-low border border-outline-variant/50 rounded-lg px-4 py-3 text-on-surface text-sm focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red transition-colors"><option value="">General Inquiry</option><option value="booking">Booking Request</option><option value="birthday">Birthday Party</option><option value="corporate">Corporate Event</option><option value="partnership">Partnership</option><option value="feedback">Feedback</option></select></div>
                  <div className="md:col-span-2"><label className="font-mono text-[10px] text-on-surface-variant tracking-[0.15em] block mb-2">ENCRYPTED MESSAGE</label><textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} rows={6} placeholder="System logs or message content..." className="w-full bg-surface-container-low border border-outline-variant/50 rounded-lg px-4 py-3 text-on-surface text-sm focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red transition-colors resize-none placeholder:text-on-surface-variant/30"/></div>
                </div>
                <button onClick={()=>setSent(true)} className="mt-6 w-full bg-brand-red text-white py-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 tracking-[0.1em]">
                  INITIATE UPLINK <Send className="w-4 h-4"/>
                </button>
              </div>
            )}
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-xl p-7">
              <p className="font-mono text-[10px] text-brand-red tracking-[0.15em] mb-5">COORDINATES</p>
              <div className="flex items-start gap-3 mb-6"><MapPin className="w-5 h-5 text-brand-red mt-0.5 flex-shrink-0"/><div><p className="text-white font-semibold text-sm">13026 97 St NW #201</p><p className="text-on-surface-variant text-sm">Edmonton, AB T5E 4C6</p></div></div>
              <p className="font-mono text-[10px] text-brand-red tracking-[0.15em] mb-4">VOICE & DATA</p>
              <div className="space-y-3">
                <a href="tel:+15875669707" className="flex items-center gap-3 text-on-surface hover:text-brand-red transition-colors"><Phone className="w-5 h-5 text-brand-red"/><span className="text-sm">+1 587 566 9707</span></a>
                <a href="mailto:yeg@another-world.com" className="flex items-center gap-3 text-on-surface hover:text-brand-red transition-colors"><Mail className="w-5 h-5 text-brand-red"/><span className="text-sm">yeg@another-world.com</span></a>
              </div>
              <p className="font-mono text-[10px] text-brand-red tracking-[0.15em] mt-6 mb-4">SOCIAL NEXUS</p>
              <div className="flex gap-3">
                {[Facebook,Instagram,Youtube].map((Ic,i)=>(<a key={i} href="#" className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-brand-red hover:border-brand-red transition-all"><Ic className="w-4 h-4"/></a>))}
              </div>
            </div>
            <div className="glass-panel rounded-xl overflow-hidden h-[250px] relative">
              <div className="absolute inset-0 bg-surface-deep-navy grid-bg"/>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center"><MapPin className="w-10 h-10 text-brand-red mx-auto mb-2 opacity-40"/><a href="https://www.google.com/maps/search/13026+97+St+NW+Edmonton" target="_blank" rel="noopener noreferrer" className="text-brand-red font-bold text-sm hover:underline">Open in Google Maps</a></div>
              </div>
              <div className="absolute bottom-3 left-3 glass-panel px-3 py-1.5 rounded"><p className="font-mono text-[9px] text-on-surface-variant tracking-[0.1em]">SECTOR 201</p><p className="text-white text-xs font-semibold">North Edmonton Nexus</p></div>
              <a href="https://www.google.com/maps/search/13026+97+St+NW+Edmonton" target="_blank" rel="noopener noreferrer" className="absolute bottom-3 right-3 w-8 h-8 rounded bg-brand-red flex items-center justify-center"><Navigation className="w-4 h-4 text-white"/></a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-fade py-16 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[{l:"LATENCY",v:"<5ms"},{l:"AVAILABILITY",v:"99.9%"},{l:"SQUAD SIZE",v:"1-8"},{l:"GEAR LEVEL",v:"MAX"}].map(s=>(
            <div key={s.l} className="stat-card rounded-xl py-8 px-4 text-center"><p className="font-mono text-[10px] text-on-surface-variant tracking-[0.15em] mb-2">{s.l}</p><p className="font-sora text-3xl md:text-5xl font-extrabold text-brand-red">{s.v}</p></div>
          ))}
        </div>
      </section>
    </>
  );
}
"use client";
import Image from "next/image";
import { useState } from "react";
import { Swords, Skull, Rocket, Compass, ChevronLeft, ChevronRight, Minus, Plus, CalendarDays, Gamepad2, Lock, Clock, FileText, XCircle, Info } from "lucide-react";

const experiences = [
  { id: "action", label: "Action", Icon: Swords },
  { id: "horror", label: "Horror", Icon: Skull },
  { id: "scifi", label: "Sci-Fi", Icon: Rocket },
  { id: "adventure", label: "Adventure", Icon: Compass },
];

const timeSlots = ["10:00 AM","11:30 AM","01:00 PM","02:30 PM","04:00 PM","05:30 PM"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
function getDIM(y:number,m:number){return new Date(y,m+1,0).getDate()}
function getFD(y:number,m:number){return new Date(y,m,1).getDay()}

export default function BookPage() {
  const [exp,setExp]=useState("adventure");
  const [players,setPlayers]=useState(2);
  const [selTime,setSelTime]=useState("01:00 PM");
  const [selDay,setSelDay]=useState(5);
  const now=new Date();
  const [month,setMonth]=useState(now.getMonth());
  const [year,setYear]=useState(now.getFullYear());
  const dim=getDIM(year,month); const fd=getFD(year,month); const pdim=getDIM(year,month-1);
  const price=35; const sub=players*price; const tax=Math.round(sub*0.05*100)/100; const total=sub+tax;
  const expLabel=experiences.find(e=>e.id===exp)?.label||"";
  const pm=()=>{if(month===0){setMonth(11);setYear(year-1)}else setMonth(month-1)};
  const nm=()=>{if(month===11){setMonth(0);setYear(year+1)}else setMonth(month+1)};

  return (
    <>
      <section className="pt-28 pb-12 px-margin-mobile md:px-margin-desktop max-w-container mx-auto">
        <span className="font-mono text-xs text-brand-red tracking-[0.2em] uppercase mb-3 block">Secure Your Reality</span>
        <h1 className="font-sora text-4xl md:text-6xl font-extrabold text-white/20 leading-tight mb-4">Reserve Your Session</h1>
        <p className="text-on-surface-variant max-w-lg text-base leading-relaxed">Step into a world without limits. Select your experience, choose a time, and prepare for immersion.</p>
      </section>

      <section className="pb-24 px-margin-mobile md:px-margin-desktop max-w-container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1 */}
            <div className="glass-panel rounded-xl p-7">
              <div className="flex items-center gap-3 mb-6"><div className="w-8 h-8 rounded-full bg-brand-red text-white flex items-center justify-center font-bold text-sm">1</div><h2 className="font-sora text-xl font-bold text-white">Choose Experience</h2></div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {experiences.map(e=>(
                  <button key={e.id} onClick={()=>setExp(e.id)} className={`flex flex-col items-center gap-2.5 py-5 px-3 rounded-xl transition-all border ${exp===e.id?"border-brand-red bg-brand-red/10 shadow-[0_0_15px_rgba(233,17,79,0.15)]":"border-outline-variant/40 hover:border-brand-red/40"}`}>
                    <e.Icon className={`w-7 h-7 ${exp===e.id?"text-brand-red":"text-on-surface-variant"}`}/>
                    <span className={`text-sm font-medium ${exp===e.id?"text-brand-red":"text-on-surface-variant"}`}>{e.label}</span>
                  </button>
                ))}
              </div>
            </div>
            {/* Step 2 */}
            <div className="glass-panel rounded-xl p-7">
              <div className="flex items-center gap-3 mb-6"><div className="w-8 h-8 rounded-full bg-brand-red text-white flex items-center justify-center font-bold text-sm">2</div><h2 className="font-sora text-xl font-bold text-white">Select Date & Time</h2></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <button onClick={pm} className="text-on-surface-variant hover:text-brand-red transition-colors"><ChevronLeft className="w-5 h-5"/></button>
                    <span className="font-semibold text-white text-sm">{months[month]} {year}</span>
                    <button onClick={nm} className="text-on-surface-variant hover:text-brand-red transition-colors"><ChevronRight className="w-5 h-5"/></button>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center">
                    {["S","M","T","W","T","F","S"].map((d,i)=>(<div key={i} className="text-on-surface-variant/50 text-xs font-mono py-1.5">{d}</div>))}
                    {Array.from({length:fd}).map((_,i)=>(<div key={`p${i}`} className="text-on-surface-variant/20 text-xs py-2">{pdim-fd+1+i}</div>))}
                    {Array.from({length:dim}).map((_,i)=>{const d=i+1;const s=d===selDay;const p=month===now.getMonth()&&year===now.getFullYear()&&d<now.getDate();
                      return(<button key={d} disabled={p} onClick={()=>setSelDay(d)} className={`text-sm py-2 rounded-lg transition-all ${s?"bg-brand-red text-white font-bold shadow-[0_0_10px_rgba(233,17,79,0.3)]":p?"text-on-surface-variant/20 cursor-not-allowed":"text-on-surface hover:bg-white/5"}`}>{d}</button>);
                    })}
                  </div>
                </div>
                <div>
                  <p className="font-mono text-[10px] text-on-surface-variant tracking-[0.15em] mb-4">AVAILABLE SLOTS</p>
                  <div className="grid grid-cols-2 gap-2.5">
                    {timeSlots.map(t=>(<button key={t} onClick={()=>setSelTime(t)} className={`py-2.5 px-3 rounded-lg text-sm font-medium transition-all border ${selTime===t?"border-brand-red bg-brand-red/10 text-brand-red":"border-outline-variant/40 text-on-surface-variant hover:border-brand-red/40"}`}>{t}</button>))}
                  </div>
                  <p className="mt-4 text-on-surface-variant/60 text-xs flex items-center gap-1.5"><Info className="w-3.5 h-3.5"/>Each session lasts approximately 60 minutes.</p>
                </div>
              </div>
            </div>
            {/* Step 3 */}
            <div className="glass-panel rounded-xl p-7">
              <div className="flex items-center gap-3 mb-6"><div className="w-8 h-8 rounded-full bg-brand-red text-white flex items-center justify-center font-bold text-sm">3</div><h2 className="font-sora text-xl font-bold text-white">Number of Players</h2></div>
              <div className="flex items-center gap-4">
                <button onClick={()=>setPlayers(Math.max(1,players-1))} className="w-10 h-10 rounded-lg border border-outline-variant flex items-center justify-center text-on-surface-variant hover:border-brand-red hover:text-brand-red transition-all"><Minus className="w-5 h-5"/></button>
                <span className="font-sora text-2xl font-bold text-white w-10 text-center">{players}</span>
                <button onClick={()=>setPlayers(Math.min(8,players+1))} className="w-10 h-10 rounded-lg border border-outline-variant flex items-center justify-center text-on-surface-variant hover:border-brand-red hover:text-brand-red transition-all"><Plus className="w-5 h-5"/></button>
                <span className="text-on-surface-variant text-sm ml-2">Max 8 players per session</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel-solid rounded-xl p-7 lg:sticky lg:top-24">
              <h3 className="font-sora text-xl font-bold text-white mb-6">Summary</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-on-surface-variant">Players ({players} x ${price})</span><span className="text-white font-semibold">${sub.toFixed(2)}</span></div>
                <div className="flex justify-between"><span className="text-on-surface-variant">Taxes</span><span className="text-white font-semibold">${tax.toFixed(2)}</span></div>
                <div className="h-px bg-glass-stroke my-4"/>
                <div className="flex justify-between"><span className="text-brand-red font-bold">Total</span><span className="text-brand-red font-bold text-lg">${total.toFixed(2)}</span></div>
              </div>
              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-start gap-3"><CalendarDays className="w-4 h-4 text-brand-red mt-0.5 flex-shrink-0"/><div><p className="text-white font-semibold">{months[month]} {selDay}, {year}</p><p className="text-on-surface-variant text-xs">{selTime} (60 Mins)</p></div></div>
                <div className="flex items-start gap-3"><Gamepad2 className="w-4 h-4 text-brand-red mt-0.5 flex-shrink-0"/><div><p className="text-white font-semibold">{expLabel} Genre</p><p className="text-on-surface-variant text-xs">Epic Discovery Journey</p></div></div>
              </div>
              <button className="mt-8 w-full bg-brand-red text-white py-4 rounded-xl font-bold transition-all">Proceed to Checkout</button>
              <p className="mt-3 text-center text-on-surface-variant/50 text-xs flex items-center justify-center gap-1"><Lock className="w-3 h-3"/>SECURE ENCRYPTED TRANSACTION</p>
            </div>
            <div className="glass-panel rounded-xl p-7">
              <p className="font-mono text-[10px] text-brand-red tracking-[0.15em] mb-5">IMPORTANT DETAILS</p>
              <div className="space-y-5">
                {[{Icon:Clock,t:"Arrival Time",d:"Please arrive 15 minutes before for safety briefing and equipment fitting."},{Icon:FileText,t:"Digital Waiver",d:"A signed waiver is required. Links provided in confirmation email."},{Icon:XCircle,t:"Cancellation Policy",d:"Full refund for cancellations 24+ hours in advance."}].map(x=>(
                  <div key={x.t} className="flex items-start gap-3"><x.Icon className="w-4 h-4 text-brand-red mt-0.5 flex-shrink-0"/><div><p className="text-white font-semibold text-sm">{x.t}</p><p className="text-on-surface-variant text-xs leading-relaxed">{x.d}</p></div></div>
                ))}
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden h-[160px] border border-glass-stroke bg-surface">
              <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwdAdH6xVGFG-n3xkvDStzjT7qkBdm2FLdjALM2cYdfK7NUz1xkb0wXHHlwp1aUstXniL9hOfGKP1A1LPEKLiE-2FEgU_eeSY5ABsFr0HEHX_u3x9oU2_4cbBP-y0MQShSDyjug3eO-ZVzuyUbVnS9mW6akQEhFpLpkEQATaj5QbuZTKfDWTgPOQE06KGQMeOyN6BFwWnbSPQWEfQOD4sox9Y8KZk-qg87X1WbHS9RvT1I_T26ekGGZZxFFYF3b0zw0IpL4O6u7g" alt="Member offer" fill className="object-cover brightness-50" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="font-mono text-[9px] text-white bg-brand-red px-2 py-0.5 rounded w-fit tracking-[0.1em] mb-2">MEMBER OFFER</span>
                <p className="font-sora text-lg font-bold text-white">Join the Vanguard for 15% off</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { googleReviews, HERO_BG } from '@/lib/data';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const CheckBadge = () => (
  <svg viewBox="0 0 16 16" className="w-4 h-4 shrink-0" fill="none">
    <circle cx="8" cy="8" r="8" fill="#1a73e8" />
    <path d="M5 8l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill={i < rating ? '#fbbc04' : 'none'} stroke="#fbbc04" strokeWidth="1.2" className="w-4 h-4">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSlider() {
  const [index, setIndex] = useState(0);
  const visible = 4;
  const max = Math.max(0, googleReviews.length - visible);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(max, i + 1));

  const shown = googleReviews.slice(index, index + visible);

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <Image src={HERO_BG} alt="" fill className="object-cover object-center" sizes="100vw" />
      <div className="absolute inset-0 bg-black/85" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header row */}
        <div className="flex items-start justify-between gap-8 mb-12">
          <div>
            <p className="text-[#e01e25] text-[0.65rem] font-bold uppercase tracking-[0.3em] mb-3">
              Driven By Trust
            </p>
            <h2 className="text-[2rem] md:text-[2.5rem] font-black text-white leading-[1.15]">
              What It Feels Like to<br />
              Leave Your Car in the<br />
              Right <span className="text-[#e01e25]">Hands</span>
            </h2>
            <div className="flex gap-2 mt-5">
              <span className="w-8 h-[3px] bg-[#e01e25] inline-block" />
              <span className="w-8 h-[3px] bg-[#e01e25] inline-block" />
            </div>
          </div>

          {/* + VIEW OUR SERVICES split button */}
          <div className="hidden md:flex items-stretch shrink-0 mt-2">
            <Link href="/services"
              className="bg-[#e01e25] hover:bg-[#b8191f] text-white font-black text-[0.7rem] uppercase tracking-[0.12em] px-6 py-3.5 flex items-center gap-2 transition-colors whitespace-nowrap">
              <span className="text-base font-black leading-none">+</span> View Our Services
            </Link>
            <Link href="/services"
              className="bg-[#2a2a2a] hover:bg-[#e01e25] text-white font-black text-lg px-4 py-3.5 flex items-center justify-center transition-colors">
              +
            </Link>
          </div>
        </div>

        {/* Cards + floating side arrows */}
        <div className="relative">
          {index > 0 && (
            <button onClick={prev}
              className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-xl hover:bg-gray-100 transition-colors">
              <ChevronLeft size={18} className="text-[#1a1a1a]" />
            </button>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {shown.map((r, i) => (
              <div key={index + i} className="bg-white rounded-lg p-5 shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-sm shrink-0"
                    style={{ background: r.bg }}>
                    {r.initial}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[#1a1a1a] font-bold text-sm leading-tight">{r.name}</p>
                    <p className="text-gray-400 text-[0.65rem]">{r.date}</p>
                  </div>
                  <div className="shrink-0 ml-auto">
                    <GoogleIcon />
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <StarRating rating={r.rating} />
                  <CheckBadge />
                </div>
                <p className="text-[#555] text-xs leading-relaxed line-clamp-4">{r.text}</p>
                {r.hasMore && (
                  <p className="text-gray-400 text-xs mt-2">Read more</p>
                )}
              </div>
            ))}
          </div>

          {index < max && (
            <button onClick={next}
              className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-xl hover:bg-gray-100 transition-colors">
              <ChevronRight size={18} className="text-[#1a1a1a]" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

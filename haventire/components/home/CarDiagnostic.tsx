'use client';

import { useState } from 'react';
import Image from 'next/image';
import { DC_CAR } from '@/lib/data';

const markers = [
  {
    id: 1,
    style: { top: '28%', left: '18%' },
    tooltip: 'Premium ceramic coating with three-year paint protection',
    direction: 'right' as const,
  },
  {
    id: 2,
    style: { top: '8%', right: '8%' },
    tooltip: 'Window Ceramic Tinting for comfort, privacy, and style',
    direction: 'left' as const,
  },
  {
    id: 3,
    style: { bottom: '18%', left: '48%' },
    tooltip: 'Custom stickers and decals to make your vehicle stand out',
    direction: 'top' as const,
  },
  {
    id: 4,
    style: { bottom: '28%', right: '10%' },
    tooltip: 'Expert seasonal tire swaps for smooth and safe driving',
    direction: 'left' as const,
  },
];

export default function CarDiagnostic() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="relative w-full">
      <Image
        src={DC_CAR}
        alt="Mercedes diagnostic"
        width={680}
        height={460}
        className="object-contain w-full"
      />

      {markers.map((m) => (
        <div
          key={m.id}
          className="absolute"
          style={m.style as React.CSSProperties}
          onMouseEnter={() => setHovered(m.id)}
          onMouseLeave={() => setHovered(null)}>

          {/* Tooltip — shows on hover */}
          {hovered === m.id && (
            <div className={`absolute z-20 w-52 pointer-events-none ${
              m.direction === 'right'
                ? 'left-full ml-3 top-1/2 -translate-y-1/2'
                : m.direction === 'left'
                ? 'right-full mr-3 top-1/2 -translate-y-1/2'
                : 'bottom-full mb-3 left-1/2 -translate-x-1/2'
            }`}>
              <div className="bg-[#1a1a1a] text-white text-xs leading-snug font-medium px-4 py-3 rounded-sm shadow-2xl">
                {m.tooltip}
              </div>
            </div>
          )}

          {/* Dashed line to car part */}
          <div className={`absolute pointer-events-none ${
            m.direction === 'right'
              ? 'top-1/2 left-full w-16 border-t border-dashed border-[#e01e25] -translate-y-1/2'
              : m.direction === 'left'
              ? 'top-1/2 right-full w-16 border-t border-dashed border-[#e01e25] -translate-y-1/2'
              : 'left-1/2 bottom-full h-10 border-l border-dashed border-[#e01e25] -translate-x-1/2'
          }`} />

          {/* Red + circle */}
          <div className="w-11 h-11 rounded-full bg-[#e01e25] flex items-center justify-center font-black text-xl text-white shadow-lg cursor-pointer z-10 relative hover:scale-110 transition-transform duration-200">
            +
          </div>
        </div>
      ))}
    </div>
  );
}

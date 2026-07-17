"use client";

export default function Logo({ className = "", compact = false }: { className?: string; compact?: boolean }) {
  if (compact) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Roof */}
          <path d="M50 5L5 45H20V90H80V45H95L50 5Z" stroke="#1B2A4A" strokeWidth="5" fill="none" />
          <path d="M50 5L5 45H20" stroke="#E31E24" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M50 5L95 45H80" stroke="#E31E24" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          {/* JP */}
          <text x="50" y="62" textAnchor="middle" fontFamily="Raleway, sans-serif" fontWeight="800" fontSize="32" fill="#1B2A4A">JP</text>
        </svg>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5L5 45H20V90H80V45H95L50 5Z" stroke="#1B2A4A" strokeWidth="5" fill="none" />
        <path d="M50 5L5 45H20" stroke="#E31E24" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M50 5L95 45H80" stroke="#E31E24" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <text x="50" y="62" textAnchor="middle" fontFamily="Raleway, sans-serif" fontWeight="800" fontSize="32" fill="#1B2A4A">JP</text>
      </svg>
      <div>
        <div className="font-heading font-extrabold text-[22px] leading-tight">
          <span className="text-brand-red">JP HOME</span>{" "}
          <span className="text-brand-navy">COMFORT</span>
        </div>
        <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-brand-cyan">
          Heating | Cooling | Water Systems
        </div>
      </div>
    </div>
  );
}

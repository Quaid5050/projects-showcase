"use client";

export default function LaptopFrame({ videoSrc, label }: { videoSrc: string; label?: string }) {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-brand-purple/20 blur-3xl" />
      {/* lid + screen */}
      <div className="relative rounded-2xl border border-white/10 glass-strong p-2.5 shadow-glass">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-ink">
          <video
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* subtle screen sheen + glow */}
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/8 to-transparent" />
          {label && (
            <span className="absolute bottom-3 right-3 rounded-full glass-strong px-3 py-1.5 text-xs font-semibold text-white">{label}</span>
          )}
        </div>
      </div>
      {/* base */}
      <div className="mx-auto h-3 w-[112%] -translate-x-[5.4%] rounded-b-2xl bg-gradient-to-b from-white/15 to-white/5" />
      <div className="mx-auto -mt-1 h-1.5 w-24 rounded-full bg-white/10" />
    </div>
  );
}
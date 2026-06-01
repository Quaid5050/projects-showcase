"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

/**
 * A flat (non-3D) laptop mockup.
 *
 * - Pass `videoSrc` to play a looping muted video inside the screen.
 * - Or pass `src` (a URL) to embed a live website preview via a scaled iframe.
 */
const BASE_W = 1280; // virtual desktop width for iframe mode

export default function LaptopFrame({
  videoSrc,
  src,
  href,
  label = "Visit Website",
}: {
  videoSrc?: string;
  src?: string;
  href?: string;
  label?: string;
}) {
  const screenRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.3);

  useEffect(() => {
    if (videoSrc) return; // scaling only needed for iframe mode
    const el = screenRef.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / BASE_W);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [videoSrc]);

  return (
    <div className="relative mx-auto w-full max-w-xl">
      {/* glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 scale-90 rounded-full bg-brand-purple/25 blur-[90px]" />

      {/* Lid + screen */}
      <div className="rounded-2xl border border-white/10 bg-[#15101f] p-2.5 shadow-glass">
        <div
          ref={screenRef}
          className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#05030a]"
        >
          {videoSrc ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 h-full w-full object-cover"
              aria-hidden="true"
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          ) : (
            <iframe
              src={src}
              title="Website preview"
              loading="lazy"
              scrolling="no"
              className="absolute left-0 top-0 origin-top-left border-0"
              style={{
                width: `${BASE_W}px`,
                height: `${BASE_W * (10 / 16)}px`,
                transform: `scale(${scale})`,
                pointerEvents: "none",
              }}
            />
          )}

          {/* subtle screen reflection */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/5" />

          {/* optional visit button */}
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full glass-strong px-3.5 py-2 text-xs font-semibold text-white transition-all duration-300 hover:text-brand-green hover:shadow-glow-green"
            >
              {label} <ExternalLink size={13} />
            </a>
          )}
        </div>
      </div>

      {/* Base / hinge */}
      <div className="relative mx-auto h-3 w-[112%] -translate-x-[5.4%] rounded-b-xl bg-gradient-to-b from-[#241a38] to-[#0f0a1c] shadow-lg">
        <div className="absolute left-1/2 top-0 h-1.5 w-20 -translate-x-1/2 rounded-b-lg bg-[#05030a]" />
      </div>
    </div>
  );
}
"use client";
import { useState, useRef, useCallback } from "react";

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateSlider = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const onMouseDown = () => { dragging.current = true; };
  const onMouseUp = () => { dragging.current = false; };
  const onMouseMove = (e: React.MouseEvent) => { if (dragging.current) updateSlider(e.clientX); };
  const onTouchMove = (e: React.TouchEvent) => { updateSlider(e.touches[0].clientX); };

  return (
    <div style={{ borderRadius: 0, overflow: "hidden", border: "1px solid rgba(212,160,23,0.2)" }}>
      <div
        ref={containerRef}
        className="before-after-container"
        style={{ position: "relative", height: 420, userSelect: "none" }}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onMouseMove={onMouseMove}
        onTouchMove={onTouchMove}
        onTouchEnd={onMouseUp}
      >
        {/* AFTER panel (base layer, right side) */}
        <div style={{ position: "absolute", inset: 0 }}>
          <img src="/after.png" alt="After" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} draggable={false} />
          <div style={{ position: "absolute", top: 16, right: 16, background: "rgba(212,160,23,0.9)", padding: "6px 14px" }}>
            <span style={{ fontFamily: "Arial, sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", color: "#0a0a0a" }}>AFTER</span>
          </div>
        </div>

        {/* BEFORE panel (clipped top layer, left side) */}
        <div style={{ position: "absolute", inset: 0, clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
          <img src="/before.png" alt="Before" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} draggable={false} />
          <div style={{ position: "absolute", top: 16, left: 16, background: "rgba(0,0,0,0.6)", padding: "6px 14px" }}>
            <span style={{ fontFamily: "Arial, sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", color: "#F5F5F0" }}>BEFORE</span>
          </div>
        </div>

        {/* Slider handle */}
        <div style={{ position: "absolute", top: 0, bottom: 0, left: `${sliderPos}%`, transform: "translateX(-50%)", width: 3, background: "#D4A017", cursor: "ew-resize", zIndex: 10 }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 44, height: 44, borderRadius: "50%", background: "#D4A017", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 16px rgba(0,0,0,0.5)", cursor: "ew-resize" }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 5L3 10L7 15" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13 5L17 10L13 15" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Drag hint */}
        <div style={{ position: "absolute", bottom: 16, left: "50%", transform: "translateX(-50%)", background: "rgba(0,0,0,0.6)", padding: "4px 12px", pointerEvents: "none" }}>
          <span style={{ fontFamily: "Arial, sans-serif", fontSize: "0.7rem", letterSpacing: "0.1em", color: "rgba(245,245,240,0.7)", textTransform: "uppercase" }}>Drag to Compare</span>
        </div>
      </div>
    </div>
  );
}

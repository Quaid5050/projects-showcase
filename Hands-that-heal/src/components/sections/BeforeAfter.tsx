import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ── IMAGE SETUP ───────────────────────────────────────────────────────────────
// Place your before/after images in:  src/assets/results/
//
// Required filenames:
//   wax-before.jpg         — skin with hair (before waxing)
//   wax-after.jpg          — smooth skin (after waxing)
//   teeth-before.jpg       — stained/dull teeth (before whitening)
//   teeth-after.jpg        — bright white smile (after whitening)
//   laser-before.jpg       — skin with hair (before laser)
//   laser-after.jpg        — smooth skin (after laser)
//   contour-before.jpg     — body before contouring
//   contour-after.jpg      — sculpted body after contouring
//
// Once you add the images, uncomment the real imports below
// and delete the placeholder strings.
// ─────────────────────────────────────────────────────────────────────────────

import teethBefore   from "@/assets/results/teeth-before.jpg";
import teethAfter    from "@/assets/results/teeth-after.jpg";
import laserBefore   from "@/assets/results/laser-before.jpg";
import laserAfter    from "@/assets/results/laser-after.jpg";
import contourBefore from "@/assets/results/contour-before.jpg";
import contourAfter  from "@/assets/results/contour-after.jpg";

type Tab = { id: string; label: string; before: string; after: string; desc: string };

const tabs: Tab[] = [
  {
    id: "teeth",
    label: "Teeth Whitening",
    before: teethBefore,
    after: teethAfter,
    desc: "Visibly brighter smile after a single organic whitening session.",
  },
  {
    id: "laser",
    label: "Laser Hair Removal",
    before: laserBefore,
    after: laserAfter,
    desc: "Long-lasting smooth skin after Primelase laser hair removal.",
  },
  {
    id: "contouring",
    label: "Body Contouring",
    before: contourBefore,
    after: contourAfter,
    desc: "Visibly sculpted and toned results after body contouring treatment — targeted fat reduction with no downtime.",
  },
];

// ── Single before/after slider ────────────────────────────────────────────────
const Slider = ({ tab }: { tab: Tab }) => {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePos = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
    setPos(pct);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[16/9] sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-elegant select-none cursor-col-resize"
      onMouseDown={() => { dragging.current = true; }}
      onMouseMove={(e) => { if (dragging.current) updatePos(e.clientX); }}
      onMouseUp={() => { dragging.current = false; }}
      onMouseLeave={() => { dragging.current = false; }}
      onTouchMove={(e) => updatePos(e.touches[0].clientX)}
      onTouchStart={() => { dragging.current = true; }}
      onTouchEnd={() => { dragging.current = false; }}
    >
      {/* After image — full width behind */}
      <img
        src={tab.after}
        alt="After"
        className="absolute inset-0 w-full h-full object-cover object-center"
        draggable={false}
      />

      {/* Before image — clipped to left portion */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img
          src={tab.before}
          alt="Before"
          className="absolute inset-0 h-full object-cover object-left"
          style={{ width: `${(100 / pos) * 100}%`, maxWidth: "none" }}
          draggable={false}
        />
      </div>

      {/* Divider line + handle */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white z-10 pointer-events-none"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white shadow-elegant flex items-center justify-center pointer-events-auto cursor-col-resize">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M8 5L4 11L8 17" stroke="#4a9e8a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 5L18 11L14 17" stroke="#4a9e8a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Before / After labels */}
      <span className="absolute bottom-4 left-4 z-10 bg-foreground/60 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
        Before
      </span>
      <span className="absolute bottom-4 right-4 z-10 bg-primary/80 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
        After
      </span>

      {/* Drag hint on first render */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">← Drag to compare →</span>
      </div>
    </div>
  );
};

// ── Section ───────────────────────────────────────────────────────────────────
export const BeforeAfter = () => {
  const [active, setActive] = useState("teeth");
  const current = tabs.find((t) => t.id === active)!;

  return (
    <section className="py-8 sm:py-12 bg-soft-gradient">
      <div className="container-luxe">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-8"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Real Results</p>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05]">
            See the <span className="italic text-gradient">Difference</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Drag the slider to reveal the transformation. Real results from real clients at Hands That Heal.
          </p>
        </motion.div>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                active === tab.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-foreground hover:bg-primary/10 shadow-soft"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Slider + description */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="max-w-3xl mx-auto group"
          >
            <Slider tab={current} />
            <p className="mt-4 text-center text-sm text-muted-foreground leading-relaxed">
              {current.desc}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Drag hint */}
        <p className="text-center text-xs text-muted-foreground mt-3 flex items-center justify-center gap-2">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-primary">
            <path d="M5 3L2 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 3L12 7L9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Drag the handle left or right to compare
        </p>
      </div>
    </section>
  );
};

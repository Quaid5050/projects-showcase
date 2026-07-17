"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Businesses Served" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 3, suffix: "x", label: "Faster Operations" },
  { value: 24, suffix: "/7", label: "Support Available" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const tick = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 2000, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * value));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsSection() {
  return (
    <section style={{ padding: "56px 0", background: "#111111", borderTop: "1px solid rgba(255,255,255,0.07)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="r-inner" style={{ maxWidth: 1100 }}>
        <div className="r-stats">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ textAlign: "center" }}>
              <div className="stat-number"><Counter value={s.value} suffix={s.suffix} /></div>
              <p className="stat-label">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

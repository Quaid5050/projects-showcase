"use client";

import { motion } from "framer-motion";

interface Particle {
  size: number;
  x: string;
  y: string;
  delay: number;
  duration: number;
  color: string;
}

const defaultParticles: Particle[] = [
  { size: 5, x: "10%", y: "20%", delay: 0, duration: 5, color: "#F6C85F" },
  { size: 3, x: "85%", y: "15%", delay: 0.7, duration: 6, color: "#F7A8C4" },
  { size: 7, x: "20%", y: "80%", delay: 0.3, duration: 7, color: "#F6C85F" },
  { size: 4, x: "75%", y: "75%", delay: 1, duration: 5.5, color: "#F7A8C4" },
  { size: 6, x: "50%", y: "5%", delay: 0.5, duration: 6, color: "#F6C85F" },
  { size: 3, x: "92%", y: "45%", delay: 0.2, duration: 8, color: "#F7A8C4" },
  { size: 5, x: "5%", y: "60%", delay: 0.8, duration: 5, color: "#F6C85F" },
  { size: 4, x: "65%", y: "90%", delay: 0.4, duration: 7, color: "#F7A8C4" },
];

export default function FloatingParticles({ particles = defaultParticles }: { particles?: Particle[] }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: p.x,
            top: p.y,
            background: p.color,
          }}
          animate={{
            y: [0, -24, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

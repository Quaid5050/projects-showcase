import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Star } from "lucide-react";
import { StarSVG } from "../components/common/StarSVG";

export const NotFoundPage: React.FC = () => {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="min-h-screen bg-navy flex items-center justify-center relative overflow-hidden px-4"
    >
      {/* Background stars */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-twinkle"
            style={{
              top: `${5 + ((i * 73.1) % 90)}%`,
              left: `${3 + ((i * 137.5) % 94)}%`,
              animationDelay: `${(i * 0.3) % 3}s`,
            } as React.CSSProperties}
          >
            <StarSVG size={6 + (i % 4) * 6} color="#fedebe" />
          </div>
        ))}
      </div>

      {/* Clouds */}
      <div className="absolute bottom-10 left-5 opacity-10 pointer-events-none" aria-hidden="true">
        <svg width="200" height="110" viewBox="0 0 120 66" fill="#bdd8f4">
          <path d="M108 46a20 20 0 0 0-5-39 28 28 0 0 0-54 6 22 22 0 1 0-5 43h64z" />
        </svg>
      </div>
      <div className="absolute top-20 right-5 opacity-10 pointer-events-none" aria-hidden="true">
        <svg width="140" height="77" viewBox="0 0 120 66" fill="#9fcaf4">
          <path d="M108 46a20 20 0 0 0-5-39 28 28 0 0 0-54 6 22 22 0 1 0-5 43h64z" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Lost star illustration */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <motion.div
                animate={{ rotate: [0, 15, -10, 8, 0], y: [0, -8, 4, -4, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="relative">
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(254,222,190,0.3) 0%, transparent 70%)" }}
                  />
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="#fedebe" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>

          <p className="font-body font-700 text-peach text-sm uppercase tracking-widest mb-3">
            404 — Page Not Found
          </p>

          <h1 className="font-display font-semibold text-white text-3xl sm:text-4xl mb-4 text-balance">
            This little star wandered off course.
          </h1>

          <p className="font-body text-sky-light text-lg leading-relaxed mb-8">
            The page you're looking for doesn't exist, but we can help guide you back home.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-peach text-navy font-body font-700 px-7 py-3.5 rounded-full hover:bg-peach-dark hover:-translate-y-0.5 transition-all shadow-soft focus-visible:ring-2 focus-visible:ring-peach focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            >
              <Home size={18} aria-hidden="true" />
              Back to Home
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 font-body font-700 px-7 py-3.5 rounded-full hover:bg-white/20 hover:-translate-y-0.5 transition-all focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

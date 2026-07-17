import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light industrial system
        ink: {
          DEFAULT: "#0B1F3A",
          soft: "#1E3A5F",
          muted: "#334155",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          soft: "#F8FAFC",
          muted: "#F1F5F9",
          border: "#E2E8F0",
        },
        accent: {
          DEFAULT: "#0F766E",
          bright: "#14B8A6",
          soft: "#CCFBF1",
        },
        // Compatibility aliases used across existing components
        navy: {
          DEFAULT: "#0B1F3A",
          50: "#1E3A5F",
          100: "#16324F",
          200: "#0B1F3A",
          300: "#081628",
          400: "#050E18",
        },
        teal: {
          DEFAULT: "#0F766E",
          light: "#14B8A6",
        },
        aqua: "#14B8A6",
        green: {
          trade: "#059669",
        },
        copper: "#0F766E",
        "soft-white": "#F8FAFC",
        "steel-grey": "#64748B",
        "dark-text": "#0B1F3A",
      },
      fontFamily: {
        sora: ["var(--font-sora)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #0B1F3A 0%, #1E3A5F 55%, #0F766E 100%)",
        "accent-gradient": "linear-gradient(135deg, #0F766E, #14B8A6)",
        "ink-fade": "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "fade-up": "fade-up 0.7s ease-out forwards",
        "slide-in-left": "slide-in-left 0.7s ease-out forwards",
        "slide-in-right": "slide-in-right 0.7s ease-out forwards",
        shimmer: "shimmer 2.4s linear infinite",
        marquee: "marquee 32s linear infinite",
        "marquee-slow": "marquee 55s linear infinite",
        aurora: "aurora 16s ease-in-out infinite",
        "gradient-x": "gradient-x 6s ease infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "spin-slow": "spin 22s linear infinite",
        "bg-pan": "bg-pan 18s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-32px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(32px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        aurora: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.55" },
          "33%": { transform: "translate(6%, -8%) scale(1.15)", opacity: "0.8" },
          "66%": { transform: "translate(-6%, 6%) scale(1.05)", opacity: "0.65" },
        },
        "gradient-x": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.06)" },
        },
        "bg-pan": {
          "0%": { "background-position": "0% 0%" },
          "100%": { "background-position": "56px 56px" },
        },
      },
      boxShadow: {
        card: "0 10px 30px rgba(15, 23, 42, 0.06)",
        "card-hover": "0 18px 40px rgba(15, 23, 42, 0.10)",
        soft: "0 4px 20px rgba(15, 23, 42, 0.05)",
        "glow-teal": "0 10px 30px rgba(15, 118, 110, 0.18)",
        "glow-copper": "0 10px 30px rgba(15, 118, 110, 0.18)",
        "glow-aqua": "0 10px 30px rgba(20, 184, 166, 0.18)",
        "card-dark": "0 20px 60px rgba(11, 31, 58, 0.25)",
        glass: "0 8px 32px rgba(15, 23, 42, 0.08)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;

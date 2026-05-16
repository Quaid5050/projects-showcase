import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gold-primary": "#f9c833",
        "gold-dark": "#855106",
        "yellow-pastel": "#fffbce",
        "yellow-glow": "#feeb4e",
        "orange-highlight": "#aa4d00",
        "luxury-black": "#070705",
      },
      backgroundImage: {
        "gradient-gold": "linear-gradient(135deg, #f9c833 0%, #855106 50%, #aa4d00 100%)",
        "gradient-glow": "linear-gradient(180deg, rgba(254, 235, 78, 0.15) 0%, transparent 50%)",
        "gradient-dark": "linear-gradient(180deg, #070705 0%, #1a1915 100%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(249, 200, 51, 0.25)",
        "glow-strong": "0 0 60px rgba(249, 200, 51, 0.4)",
        "inner-gold": "inset 0 0 30px rgba(249, 200, 51, 0.1)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;

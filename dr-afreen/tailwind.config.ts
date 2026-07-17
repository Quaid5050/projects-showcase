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
        maroon: {
          DEFAULT: "#7A1F3D",
          deep: "#4B1025",
          light: "#9B3057",
        },
        pink: {
          soft: "#F7A8C4",
          blush: "#FFE8F0",
          light: "#FFF0F5",
        },
        gold: {
          DEFAULT: "#F6C85F",
          dark: "#E6B840",
          light: "#FBE4A0",
        },
        cream: {
          DEFAULT: "#FFF8EF",
          dark: "#F5EDE0",
          light: "#FFFCF8",
        },
        brand: {
          dark: "#2B1821",
        },
      },
      fontFamily: {
        heading: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        body: ["var(--font-nunito)", "Nunito Sans", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #FFF8EF 0%, #FFE8F0 50%, #FFF8EF 100%)",
        "maroon-gradient": "linear-gradient(135deg, #7A1F3D 0%, #4B1025 100%)",
        "pink-gradient": "linear-gradient(135deg, #FFE8F0 0%, #F7A8C4 100%)",
        "gold-gradient": "linear-gradient(135deg, #F6C85F 0%, #E6B840 100%)",
        "soft-gradient": "linear-gradient(180deg, #FFFCF8 0%, #FFF8EF 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        "soft": "0 4px 24px rgba(122, 31, 61, 0.08)",
        "warm": "0 8px 32px rgba(122, 31, 61, 0.12)",
        "gold": "0 4px 20px rgba(246, 200, 95, 0.3)",
        "pink": "0 4px 20px rgba(247, 168, 196, 0.3)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
    },
  },
  plugins: [],
};

export default config;

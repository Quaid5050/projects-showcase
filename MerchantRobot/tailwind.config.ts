import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        peach: {
          50: "#fff5ef",
          100: "#ffe8d6",
          200: "#fcd4b4",
          300: "#f8b88a",
          400: "#f59a62",
          500: "#f07d3a",
          600: "#e0621e",
          700: "#b84d17",
          800: "#923d18",
          900: "#763417",
        },
        charcoal: {
          50: "#f5f5f5",
          100: "#e9e9e9",
          200: "#d4d4d4",
          300: "#b0b0b0",
          400: "#888888",
          500: "#636363",
          600: "#4a4a4a",
          700: "#333333",
          800: "#1f1f1f",
          900: "#141414",
        },
        brand: {
          black: "#0D0D0D",
          white: "#FAFAFA",
          peach: "#F5C5A3",
          orange: "#E8874A",
          charcoal: "#2A2A2A",
          gray: "#E5E5E5",
        },
      },
      fontFamily: {
        heading: ["var(--font-sora)", "Space Grotesk", "Inter", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "Poppins", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "gradient-x": "gradient-x 8s ease infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundSize: {
        "300%": "300%",
      },
    },
  },
  plugins: [],
};

export default config;

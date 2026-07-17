import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#070707",
        surface: { DEFAULT:"#131313", dim:"#131313", bright:"#3a3939", lowest:"#0e0e0e",
          "container-low":"#1c1b1b", container:"#201f1f", "container-high":"#2a2a2a",
          "container-highest":"#353534", charcoal:"#111827", "deep-navy":"#0F0515",
          variant:"#353534", tint:"#E9114F" },
        "on-surface": { DEFAULT:"#e5e2e1", variant:"#c4b8bf" },
        primary: { DEFAULT:"#ff7a8a", container:"#E9114F", fixed:"#ffb3bb", "fixed-dim":"#ff4d6a" },
        "on-primary": { DEFAULT:"#3a0011", container:"#ffffff", fixed:"#1a0008", "fixed-variant":"#5c001e" },
        secondary: { DEFAULT:"#d0bcff", container:"#571bc1" },
        "on-secondary": { DEFAULT:"#3c0091", container:"#c4abff" },
        tertiary: { DEFAULT:"#ffd5d7", container:"#ffadb3" },
        error: { DEFAULT:"#ffb4ab", container:"#93000a" },
        outline: { DEFAULT:"#859398", variant:"#3c494e" },
        "glass-stroke": "rgba(255, 255, 255, 0.1)",
        brand: { red:"#E9114F", pink:"#ff4d6a", glow:"rgba(233,17,79,0.5)" },
        neon: { red:"#E9114F", pink:"#ff4d6a" },
      },
      fontFamily: {
        sans: ["Inter","sans-serif"],
        sora: ["Sora","sans-serif"],
        mono: ["JetBrains Mono","monospace"],
      },
      spacing: { gutter:"24px", "margin-mobile":"20px", "margin-desktop":"64px" },
      maxWidth: { container:"1280px" },
    },
  },
  plugins: [],
};
export default config;

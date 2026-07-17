/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Deep navy palette — the dark luxury base
        navy: {
          950: '#03060f',
          900: '#060d1f',
          850: '#080f22',
          800: '#0a1128',
          750: '#0d1530',
          700: '#111c3a',
          600: '#162344',
          500: '#1a2a52',
          400: '#2a3f6f',
          300: '#3d5490',
        },
        // Gold accent palette
        gold: {
          200: '#fef3c7',
          300: '#fde68a',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          DEFAULT: '#f59e0b',
        },
        // Keep primary mapped to navy for existing class usage
        primary: {
          50:  '#eff2ff',
          100: '#dde3ff',
          200: '#c2ceff',
          300: '#9baeff',
          400: '#7088ff',
          500: '#4a64f5',
          600: '#2a3f6f',
          700: '#111c3a',
          800: '#0a1128',
          900: '#060d1f',
          950: '#03060f',
          DEFAULT: '#111c3a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'navy-gradient': 'linear-gradient(135deg, #03060f 0%, #0a1128 50%, #111c3a 100%)',
        'gold-gradient': 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
        'hero-gradient': 'linear-gradient(to right, rgba(3,6,15,0.96) 0%, rgba(6,13,31,0.82) 60%, rgba(10,17,40,0.4) 100%)',
      },
      boxShadow: {
        'gold': '0 4px 24px rgba(245,158,11,0.25)',
        'gold-lg': '0 8px 40px rgba(245,158,11,0.35)',
        'navy': '0 4px 24px rgba(3,6,15,0.6)',
        'navy-lg': '0 12px 48px rgba(3,6,15,0.8)',
        'glow': '0 0 30px rgba(245,158,11,0.2)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'pulse-gold': 'pulse-gold 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'pulse-gold': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(245,158,11,0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(245,158,11,0)' },
        },
      },
    },
  },
  plugins: [],
}

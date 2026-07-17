/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        peach: {
          DEFAULT: '#fedebe',
          light: '#fff0e0',
          dark: '#fdc89a',
        },
        sky: {
          brand: '#9fcaf4',
          light: '#bdd8f4',
          pale: '#e8f4fd',
        },
        navy: {
          DEFAULT: '#183b65',
          light: '#1e4a80',
          dark: '#0f2440',
        },
        cream: {
          DEFAULT: '#fffdf9',
          warm: '#fff8f0',
        },
        text: {
          dark: '#14283d',
          muted: '#5f7184',
        },
      },
      fontFamily: {
        display: ['"Fredoka"', '"Trebuchet MS"', 'sans-serif'],
        body: ['"Nunito Sans"', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'drift': 'drift 20s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.8)' },
        },
        drift: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      boxShadow: {
        'soft': '0 4px 24px rgba(24,59,101,0.08)',
        'card': '0 8px 32px rgba(24,59,101,0.10)',
        'hover': '0 16px 48px rgba(24,59,101,0.15)',
      },
      backgroundImage: {
        'gradient-warm': 'linear-gradient(135deg, #fff8f0 0%, #e8f4fd 100%)',
        'gradient-hero': 'linear-gradient(180deg, rgba(24,59,101,0.6) 0%, rgba(24,59,101,0.2) 60%, transparent 100%)',
        'gradient-peach': 'linear-gradient(135deg, #fff8f0 0%, #fedebe 100%)',
        'gradient-sky': 'linear-gradient(135deg, #e8f4fd 0%, #bdd8f4 100%)',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-dark': '#0A1628',
        'navy-medium': '#1a2942',
        'navy-light': '#2d3e5f',
        'gold': '#D4AF37',
        'gold-light': '#E5C158',
        'gold-dark': '#B8941F',
        'light-gray': '#F8F9FA',
        'medium-gray': '#6B7280',
        'dark-text': '#1F2937',
        'border-gray': '#E5E7EB',
        'urgent': '#DC2626',
      },
      fontFamily: {
        sans: ['Inter', 'Geist', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'monospace'],
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}

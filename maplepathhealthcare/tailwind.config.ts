import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: { DEFAULT: '#1C3162', m: '#2A4373', l: '#5DA6DD' },
        sage: { DEFAULT: '#D4E7F7', pale: '#EBF4FC' },
        gold: '#54AABA',
        brand: { red: '#E0262E', 'red-h': '#C01E25' },
        ivory: '#F5F8FC',
        cream: '#EBF0F8',
      },
      fontFamily: {
        serif: ['Crimson Pro', 'serif'],
        sans: ['Mulish', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

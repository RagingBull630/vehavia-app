import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1B3A2D',
        'primary-mid': '#2D5C47',
        accent: '#B8924A',
        'accent-light': '#D4AC6A',
        cream: '#FAF8F4',
        'footer-bg': '#111F18',
        'text-dark': '#1A1A18',
        'text-body': '#3A3A38',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FDFCF9',
          100: '#FBF8F1',
          200: '#F6F1E6',
          300: '#EFE7D8',
          400: '#E5DA8B',
        },
        charcoal: {
          900: '#141412',
          800: '#1F1F1C',
          700: '#2C2C28',
          600: '#42423D',
          500: '#61615B',
          400: '#878780',
          100: '#E8E8E6',
        },
        wheat: {
          50: '#FAF6EE',
          100: '#F3EAD5',
          200: '#E6D3A7',
          300: '#D7BB7A',
          400: '#C5A059', // Primary Accent
          500: '#B08B43',
          600: '#947031',
        },
        sage: {
          50: '#F2F7F4',
          100: '#DEEBE2',
          200: '#BDD7C6',
          300: '#94BDA2',
          400: '#649C76',
          500: '#3B6E4C', // Natural Green Accent
          600: '#2D543A',
        },
        warmgray: {
          100: '#F4F2EE',
          200: '#E7E4DC',
          300: '#D8D4C8',
          400: '#BFB9AA',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Instrument Serif', 'Georgia', 'serif'],
      },
      boxShadow: {
        'subtle': '0 2px 15px -3px rgba(20, 20, 18, 0.04), 0 1px 6px -2px rgba(20, 20, 18, 0.02)',
        'card': '0 10px 30px -5px rgba(20, 20, 18, 0.05), 0 2px 10px -2px rgba(20, 20, 18, 0.02)',
        'modal': '0 25px 50px -12px rgba(20, 20, 18, 0.25)',
      }
    },
  },
  plugins: [],
}

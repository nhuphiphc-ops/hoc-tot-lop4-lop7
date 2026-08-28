/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
      },
      colors: {
        kid: {
          yellow: '#FFD166',
          orange: '#FF9F1C',
          green: '#06D6A0',
          blue: '#118AB2',
          navy: '#073B4C',
          pink: '#EF476F',
          purple: '#8338EC',
          bg: '#FFFDF7',
        }
      },
      boxShadow: {
        'bouncy': '0 6px 0 0 rgba(0, 0, 0, 0.15)',
        'bouncy-sm': '0 4px 0 0 rgba(0, 0, 0, 0.15)',
        'bouncy-lg': '0 8px 0 0 rgba(0, 0, 0, 0.18)',
        'bouncy-pink': '0 6px 0 0 #D81E5B',
        'bouncy-green': '0 6px 0 0 #05A87D',
        'bouncy-blue': '0 6px 0 0 #0C6B8B',
        'bouncy-orange': '0 6px 0 0 #D97706',
        'bouncy-purple': '0 6px 0 0 #601BC4',
      }
    },
  },
  plugins: [],
}

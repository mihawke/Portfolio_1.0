/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
        slideDown: 'slideDown 300ms ease-out',
      },
      fontFamily: {
        "roboto": "Roboto Mono",
        "saucer": "Saucer",
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'bloom-in': {
          '0%': { transform: 'scale(0.5) rotate(-6deg)', opacity: '0' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out forwards',
        'bloom-in': 'bloom-in 1s ease-out forwards',
      },
      animationDelay: {
        '1000': '1000ms',
      },
    },
  },
  plugins: [],
}

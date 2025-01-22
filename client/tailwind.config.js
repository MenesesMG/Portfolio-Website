/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'border-spin': {
          '100%': {
            transform: 'rotate(-360deg)',
          },
        },
        glow: {
          '0%, 50%': { filter: 'drop-shadow(0px 0px 16px rgba(255, 255, 255, 0.6))' },
          '50%': { filter: 'drop-shadow(0px 0px 32px rgba(255, 255, 255, 1))' },
        },
        zoomInOut: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' }, 
          '100%': { transform: 'scale(1)' }, 
        },
      },
      animation: {
        'border-spin': 'border-spin 7s linear infinite',
        glow: 'glow 2s infinite ease-in-out',
        zoomInOut: 'zoomInOut 10s infinite',
      },
      fontFamily: {
        primary: ['Be Vietnam Pro'],
        secondary: ['Bebas Neue'],
      },
    },
  },
  plugins: [],
};

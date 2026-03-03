/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#1e3a8a', // Navy Blue - Main Character
          secondary: '#3b82f6', // Medium-Light Blue
          accent: '#1e40af', // Darker Navy Blue
          text: '#0a1629', // Darkest Blue (almost black but still blue)
          'text-light': '#60a5fa', // Medium-Light Blue for light text
          background: '#ffffff', // White
          'background-alt': '#eff6ff', // Very Light Blue (pastel)
          'background-dark': '#0a1629', // Darkest Blue Background
          border: '#bfdbfe', // Light Blue Border
          'border-dark': '#93c5fd', // Medium-Light Blue Border
          900: '#0a1629', // Darkest Blue
          800: '#1e3a8a', // Navy Blue
          700: '#1e40af', // Darker Navy
          600: '#2563eb', // Medium Navy
          500: '#3b82f6', // Medium-Light Blue
          400: '#60a5fa', // Light Blue
          300: '#93c5fd', // Lighter Blue
          200: '#bfdbfe', // Very Light Blue
          100: '#dbeafe', // Pastel Blue
          50: '#eff6ff', // Lightest Blue
        }
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
}

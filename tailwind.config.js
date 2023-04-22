/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '5rem',

    },
    extend: {
      colors : {
        primary : "#0A0908",
        secondary: "#22333B",
        tertiary: "#5E503F",
        quinary: "#C6AC8F",
        default: "#EAE0D5"
      },
      fontFamily : {
        sedgwick: ["Sedgwick Ave Display", "cursive"],
        playfair: ["Playfair Display SC", "serif"],
        bodoni: ["Bodoni Moda", "serif"],
        cousine: ["Cousine", "monospace"],
      }
    },
  },
  plugins: [],
}


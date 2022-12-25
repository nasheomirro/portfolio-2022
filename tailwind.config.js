/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      gridAutoRows: {
        "uniform": "1fr",
      }
    },
    colors: {
      background: {
        300: "#0f0e0a",
        200: "#242039",
        100: "#2a2b47",
      },
      primary: {
        300: "#5462BB",
        200: "#6764BD",
        100: "#9667BE",
      },
      highlight: {
        yellow: "#fcbf49",
      },
      black: "#000",
      white: "#fff",
      transparent: "#00000000",
    },
    fontFamily: {
      default: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};

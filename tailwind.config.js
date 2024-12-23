/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#8055FE",
        "main-light": "#9F7FFF",
        orange: "#FF9051",
        pink: "#FFA9D2",
        "blue-dark": "#280A82",
        grey: "#A7A7A7",
        green: "#09CACA",
      },
      fontFamily: {
        main: ["Caveat", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
}

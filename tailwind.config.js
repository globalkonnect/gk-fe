/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Rammetto: ["Rammetto One", "sans-serif"],
        Alata: ["Alata", "sans-serif"],
      },
      colors: {
        Yellow: "#FFCD3A",
        Offwhite: "#F2F2F2",
        offBlack:"#2e2d2b",
        offgray:"#d9d9d9"
      },
    },
  },
  plugins: [],
};

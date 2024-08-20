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
        offBlack: "#131212",
        offgray: "#d9d9d9",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-stroke": {
          "-webkit-text-stroke": "1px black",
          "color": "white",
        },
        ".text-shadow": {
          "text-shadow": "2px 2px 0px rgba(0, 0, 0, 0.1)",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};

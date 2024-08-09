/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
       Rammetto: ["Rammetto One", "sans-serif"],
       Alata : ["Alata", 'sans-serif']
      } ,
     colors:{
      Yellow:"#FFCD3A",
      Offwhite:"#F2F2F2"
     }
    
    },
  },
  plugins: [],
}


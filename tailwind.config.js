/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      boxShadow:{
        'innersplash': '1px 0px 5px 7px rgb(16,16,26) inset;'
      },
      backgroundImage:{
        mybackground: 'linear-gradient(-45deg, #6355a4, #6355a4, #e89a3e, #e89a3e)'

      },
      fontFamily: {
        markpro:[ "Mark Pro"],
        markprobold:[ "Mark Pro Bold"],
        markpromedium: ['Mark Pro Medium'],
        markproheavy: ['Mark Pro Heavy']
      },
    },
  },
  plugins: [],
}
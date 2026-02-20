/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",


  ],
 theme: {
  extend: {

      borderRadius: {
        maly: '4px',     // malý
        stredny: '8px',     // stredný
        velky: '16px',    // veľký
      },


    fontWeight: {
      fontmedium: '500',
    },
     fontSize: {
      base16: '16px',
      malytext:"10px"
    },
     colors: {
    blackCustom: '#000000',  // vlastná čierna
    whiteCustom: '#ffffff',  // vlastná biela
    sivaTmava: '#959595',
  },
   transitionDuration: {
    '300': '300ms',  // vlastná duration 0.3s
  },
  spacing: {
    mobilKraj: '16px',
    pcKraj: '36px',
  },

  },
},
  plugins: [],
}


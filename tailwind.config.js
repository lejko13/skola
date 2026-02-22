/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",


  ],
 theme: {
  extend: {
      screens: {
        'prvy': '470px', // vlastný breakpoint
        'druhy': '570px', // vlastný breakpoint
      },

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
    sivadalsie:"#272727",
    pozadei:"#F0F0F0"
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


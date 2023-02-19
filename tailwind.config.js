/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors:{
      darkGray:'#3B3B40', 
      lightGray:'#D9D9D9',
      cherryRed:"#A64153",
      pinkRed:'#F2637E',
      peach:'#F26B76',
      white: '#FFFFFF',
      black:'#000000'
    },
    extend: {
      opacity:{
        75:'75%',
        100:'100%'
      },
      fontFamily: {
        'avenir': ['Avenir', 'sans-serif']
      },
    },
  },
  plugins: [],
};

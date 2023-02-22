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
      padding:{
        4.5:'18px',
      },
      fontFamily: {
        'avenir': ['Avenir', 'sans-serif']
      },
      fontSize:{
        '4.5xl':'40px'
      },
      backgroundImage: {
        'menu': "url('/images/menu_bg.svg')",
      },
      flex: {
        '0': '0 0 auto'
      },
      backdropBlur: {
        sm: '4px',
      }
    },
  },
  plugins: [],
};

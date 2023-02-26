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
        '0-0-auto': '0 0 auto',
        '1-1-auto':'1 1 auto',
        '1-0-auto':'1 0 auto',
      },
      backdropBlur: {
        sm: '4px',
      },
      height:{
        'top-banner':'calc(100vh-50px)',
        '100vh':'100vh',
        200:'200px'
      }, 
      translate:{
        'minus-100':'translateX(-100)',
        'minus-200':'translateX(-200)'
      }, 
      inset:{
        70:'70px',
        150:'150px',
        '40%':'40%',
      },
      width:{
        'top-banner-100':'calc(100%-100px)',
        'top-banner-150':'calc(100%-150px)',
        100:'100px',
        150:'150px',
        250:'250px',
        300:'300px',
        350:'350px',
        400:'400px',
        500:'500px',
        550:'550px'
      },
      spacing:{
        220:'220px',
        260:'260px',
        280:'280px'
      }
  
    },
  },
  plugins: [],
};

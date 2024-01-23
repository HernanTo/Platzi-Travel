/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ['./public/index.html', './src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage : {
       'bali' : "url('../img/bali.jpg')",
       'chicago' : "url('../img/chicago.jpg')",
       'europe' : "url('../img/europe.jpg')",
       'iceland' : "url('../img/iceland.jpg')",
       'LA' : "url('../img/lA.jpg')",
       'miami' : "url('../img/miami.jpg')",
       'new_york' : "url('../img/new_york.jpg')",
       'norway' : "url('../img/norway.jpg')",
       'sanFrancisco' : "url('../img/sanFrancisco.jpg')",
       'sanFranciscoDesktop' : "url('../img/sanFranciscoDesktop.jpg')",
       'seattle' : "url('../img/seattle.jpg')",
       'switzerland' : "url('../img/switzerland.jpg')",
       'sydney' : "url('../img/sydney.jpg')",
       'yosemite' : "url('../img/yosemite.jpg')",
       'medellin' : "url('../img/medellin.jpg')",
      }, 
      backgroundColor : {
        ...theme => ('colors'),
        'primary' : '#CC2D4A', 
        'secondary' : '#8FA206',
        'terciary': '#61AEC9'
      },
      textColor : {
        'primary' : '#CC2D4A', 
        'secondary' : '#8FA206',
        'terciary': '#61AEC9'
      },
      placeholderColor:{
        'primary' : '#CC2D4A', 
        'secondary' : '#8FA206',
        'terciary': '#61AEC9'
      },
      ringColor:{
        'primary' : '#CC2D4A', 
        'secondary' : '#8FA206',
        'terciary': '#61AEC9'
      },
      fontFamily : {
        NunitoSans:['"Nunito Sans"'],
        Poppins:['"Poppins"']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}


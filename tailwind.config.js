// tailwind.config.js
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        fontFamily:{
        'roboto':['Roboto', 'sans-serif'],
        'neo' : ['Neology']
        },
        backgroundImage: {
          'slavi': "url('./assets/referees/slavi.jpg')",
          'igrachi': "url('./assets/referees/igrachi.jpg')",
          'cez': "url('./assets/referees/cez.jpg')",
          'press-start': "url('./assets/referees/press-start.jpg')",
          'eli-stefanova': "url('./assets/referees/slavi.jpg')",
         }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [
      // require('daisyui'),
    ],
  }
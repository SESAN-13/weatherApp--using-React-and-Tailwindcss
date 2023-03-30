/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '760px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
      opensans: ['Open Sans', 'sans-serif']
    },
    extend: {
      colors: {
        softWhite: 'rgba(0,0,0,0.4)',
        trans: 'rgba(255,255,255,0.2)'
       
      },
      backgroundImage: {
        'img': "url('../weather/src/images/sunset.jpg)",
      },

    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      screens: {
        xs: '450px',
        sm: '700px',
        md: '870px',
        lg: '1050px',
        xl: '1250px',
      },
      colors: {
        mainBlue: '#0866ff',
        iconsColor: '#385898',
        deepBlack: '#050505',
        mainGray: '#f0f2f5',
        lightGray: '#f7f8fa',
      },
    },
  },
  plugins: [],
}

const colors = require('tailwindcss/colors');



module.exports = {
  content: [
    'web/**/*.html'
  ],
  safeList: [],
  theme: {
    colors: {
      transparent: colors.transparent,
      current: colors.currentColor,
      brand: {
        black: '#000000',
        white: '#ffffff',
        beige: '#fdf9f3',
        grey: colors.gray['200'],
        'dark-grey': colors.gray['500'],
      },
    },
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        'sm': '768px',
        'xl': '1024px',
      },
    },
    fontFamily: {},
    screens: {
      'xs': '480px',
      'sm': '768px',
      'md': '1024px',
      'lg': '1280px',
      'xl': '1536px',
    },
    extend: {
      maxWidth: theme => theme('width'),
    },
  },
  plugins: [],
};
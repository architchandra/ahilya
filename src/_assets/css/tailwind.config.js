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
    fontFamily: {
      title: ['"Arima Madurai"', 'sans-serif'],
      prose: ['Martel', 'serif'],
    },
    screens: {
      'xs': '480px',
      'sm': '768px',
      'md': '1024px',
      'lg': '1280px',
      'xl': '1536px',
    },
    extend: {
      backgroundPosition: {
        'almost-right-top': '98% top',
      },
      backgroundSize: {
        'h-5': 'auto 1.25rem',
        'h-8': 'auto 2rem',
      },
      maxWidth: theme => theme('width'),
      spacing: {
        '7h': '1.875rem',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              marginBottom: 0,
            },
            figure: {
              figcaption: {
                color: theme('colors.brand[dark-grey]'),
                fontSize: '0.75rem',
              },
            },
          },
        },
      }),
      width: {
        prose: '65ch',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
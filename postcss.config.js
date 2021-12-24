module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss/nesting'),
    require('tailwindcss')('src/_assets/css/tailwind.config.js'),
    require('autoprefixer'),
  ],
};
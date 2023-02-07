/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.tsx', './**/*.svelte' ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
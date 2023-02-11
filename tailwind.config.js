/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f7ab0a',
      },
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}

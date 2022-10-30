/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray-50': '#EDEDED',
        'custom-black': '#242424',
        'light-1': '#242424',
        'light-2': '#99A799',
        'light-3': '#D3E4CD',
        'light-4': '#FEF5ED',
        'dark-1': '#495371',
        'dark-2': '#74959A',
        'dark-3': '#98B4AA',
        'dark-4': '#F1E0AC',
      },
      boxShadow: {
        'custom': '0px 10px 10px #EDEDED'
      },
    },
  },
  plugins: [],
}

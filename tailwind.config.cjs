/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-1': '#353535',
        'light-2': '#013237',
        'light-3': '#C0E6BA',
        'light-4': '#EAF9E7',
        'dark-1': '#526260',
        'dark-2': '#75898A',
        'dark-3': '#ECECED',
        'dark-4': '#9ADAD2',
      },
      boxShadow: {
        'light': '0px 10px 10px #b2b2b2',
        'dark': '0px 10px 10px #2f3737',
      },
      backgroundImage: {
        'texture': 'url(\'/imgs/texture.png\')',
      },
      scale: {
        '70': '.70',
      },
      screens: {
        'custom-481': '481px',
        'custom-1184': '1184px',
      },
      margin: {
        '1.75': '7px',
      },
    },
  },
  plugins: [],
}



/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      zIndex: {
        '2000': '2000',
        '3000': '3000'
      },
      spacing:{
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        'full': '100%',
        portrait:'151.4%'
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#E5E7EB',
        'secondary': '#38423B',
        'dark': '#272A27'
      }),
      colors: {
        'bgprimary': '#E5E7EB',
        'bgsecondary': '#38423B',
        'bgdark': '#272A27',
        'semiPrimary': '#E5E7EB80',
        'semiSecondary': '#38423B80',
        'semiDark': '#272A2780'
      },
      textColor: {
      'primary': '#E5E7EB',
      'dark': '#272A27',
      },
      fontFamily: {
        superRetro: ['var(--superRetro)']
      }
    },
  },
  plugins: [],
}

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
      fontFamily: {
        superRetro: ['var(--superRetro)']
      }
    },
  },
  plugins: [],
}

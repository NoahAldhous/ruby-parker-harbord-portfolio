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
        'primary': '#EDFDF9',
        'secondary': '#38423B',
        'dark': '#2B3B36'
      }),
      fontFamily: {
        superRetro: ['var(--superRetro)']
      }
    },
  },
  plugins: [],
}

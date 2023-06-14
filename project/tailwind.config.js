/** @type {import('tailwindcss').Config} */
module.exports = {
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
        'secondary': '#38423B' 
      }),
      fontFamily: {
        superRetro: ['var(--superRetro)']
      }
    },
  },
  plugins: [],
}

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
        'dark': '#1F2937'
      }),
      fontFamily: {
        superRetro: ['var(--superRetro)']
      }
    },
  },
  plugins: [],
}

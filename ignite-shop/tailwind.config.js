/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      maxWidth: {
        base: '1100px',
      },
      colors: {
        gray: {
          900: '#121214',
          800: '#202024',
          400: '#8D8D99',
          300: '#c4c4cc',
          100: '#e1e1e6',
        },
        green: {
          500: '#00875f',
          300: '#00b37e',
          100: '#cce7df',
          200: '#99cfbf',
          400: '#339f7f',
          600: '#006c4c',
          700: '#005139',
          800: '#003626',
          900: '#001b13',
        },
      },
    },
  },
  plugins: [],
}

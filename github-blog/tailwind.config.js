/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/hero.svg')",
      },
      colors: {
        base: {
          input: '#040F1A',
          background: '#071422',
          profile: '#0B1B2B',
          post: '#112131',
          border: '#1C2F41',
          label: '#3A536B',
          span: '#7B96B2',
          text: '#AFC2D4',
          'sub-title': '#C4D4E3',
          title: '#E7EDF4',
          blue: '#3294F8',
        },
      },
      maxWidth: {
        'screen-base': '54rem',
      },
    },
  },

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#AFC2D4',
          neutral: '#AFC2D4',
          'base-100': '#071422',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}

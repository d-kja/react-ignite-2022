/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        purple: {
          default: "#8284FA",
          dark: "#5E60CE",
        },
        blue: {
          default: "#4EA8DE",
          dark: "#1E6F9F",
        },
        gray: {
          700: "#0D0D0D",
          600: "#1A1A1A",
          500: "#262626",
          400: "#333333",
          300: "#808080",
          200: "#D9D9D9",
          100: "#F2F2F2",
        },
        danger: "#E25858",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "base-100": "#1A1A1A",
          info: "#808080",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

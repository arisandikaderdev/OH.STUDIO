/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["open sans", "sans-serif"],
    },
    extend: {
      colors: {
        primary_white: "#fff",
        primary_grey: "#7f7f7f",
        primary_white_alpha: "rgba(0,0,0,.1)",
      },
    },
  },
  plugins: [],
};

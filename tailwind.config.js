/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary_white: "#fff",
        primary_grey: "#7f7f7f",
      },
    },
  },
  plugins: [],
};

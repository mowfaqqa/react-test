/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          fade: "#A0B0B9",
          main: "#4A4A4A",
        },
        lime: {
          main: "#8BC34A",
        },
      },
    },
  },
  plugins: [],
};

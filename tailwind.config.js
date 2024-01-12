/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      lightBlue: "#a6d0dd",
      darkBlue: "#3a98b9",
      lightGray: "#404040",
      darkGray: "#262626",
      white: "#f2f2f2",
      black: "#0d0d0d",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Kalnia", "serif"],
    },
    extend: {},
  },
  plugins: [],
};

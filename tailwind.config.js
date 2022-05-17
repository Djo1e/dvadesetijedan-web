const colors = require("tailwindcss/colors");

module.exports = {
  purge: false,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./out/index.html",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      orange: "#f7931a",
      dark: "#1C1D27",
      lightDark: "#535873",
      purple: "#AF8EFF",
      purpleGradient: "#9068FE",
      lightOrangeGradient: "#FEB068",
      gray: "#A2A4BA",
    },
    extend: {},
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Apparel Display"],
        code: ["Courier New"],
      },
      colors: {
        green: "#3d5634",
        primary: "#ffffff",
      },
    },
  },
  plugins: [],
};

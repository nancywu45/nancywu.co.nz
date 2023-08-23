/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Apparel Display"],
        code: ["Fira Code"],
      },
      colors: {
        green: "#3d5634",
        lightGreen: "#507045",
        primary: "#ffffff",
        grey: "#DADADA",
      },
      keyframes: {
        slidein: {
          from: { marginLeft: 0 },
          to: { marginLeft: 100 }
        }
      },
      animation: {
        slidein: 'slidein 1s'
      }
    },
  },
  plugins: [],
};

import colors from "tailwindcss/defaultTheme";

module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
        gray: colors.trueGray,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
        rose: colors.rose,
        teal: colors.teal,
        blue: colors.blue,
        green: colors.green,
        emerald: colors.emerald,

        customGreen: {
          DEFAULT: "#3ba23f",
          dark: "#39913c",
        },
        customRed: {
          DEFAULT: "#c91f3b",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
};

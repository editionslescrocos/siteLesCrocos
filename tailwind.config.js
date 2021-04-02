const colors = require("tailwindcss/colors");

module.exports = {
  theme: {
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
        dark: "#39913c"
      },
      customRed: {
        DEFAULT: "#c91f3b"
      }
    }
  },
  purge: {
    options: {
      safelist: [
        "bg-customGreen",
        "bg-customGreen-dark",
        "bg-customRed",
        "text-customGreen",
        "text-customGreen-dark",
        "text-customRed",
        "bg-rose-600",
        "bg-gray-100",
        "bg-gray-200",
        "bg-gray-400",
        "text-gray-900",
        "text-gray-800",
        "from-yellow-500",
        "to-yellow-500",
        "from-yellow-700",
        "to-yellow-700",
        "from-gray-700",
        "to-gray-700",
        "from-red-500",
        "to-red-500",
        "from-indigo-700",
        "to-indigo-700",
        "to-indigo-500",
        "from-red-700",
        "to-red-700",
        "from-teal-700",
        "to-teal-700",
        "from-teal-500",
        "to-teal-500",
        "to-teal-600",
        "text-rose-600",
        "py-24",
        "bg-emerald-900",
        "bg-emerald-700",
        "bg-yellow-600",
        "bg-green-700",
        "text-green-700",
        "bg-red-700",
        "text-red-700",
        "bg-yellow-200",
        "text-yellow-200"
      ]
    }
  }
};

const colors = require("tailwindcss/colors");

module.exports = {
  theme: {
    screens: {},
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
      black: colors.black,
      white: colors.white
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      mono: ["ui-monospace", "SFMono-Regular"],
      abel: ['"Abel"', "sans-serif"]
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem"
      },
      borderRadius: {
        "4xl": "2rem"
      }
    },
    backgroundPosition: {
      filmSize: "right top 5rem"
    },
    boxShadow: {
      poster: "14px 12px 8px -8px rgba(0, 0, 0, 0.85)"
    }
  }
};

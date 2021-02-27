module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#B380AA",
        secondary: "#61A0AF",
        success: "#bcd979",
        warning: "#FCBB6D",
        danger: "#f06c9b",
        default: "#475C7A",
        black: "#293132",
        info: "#96C9DC",
      },
      fontFamily: {
        logo: ["S-CoreDream-9Black", "Roboto"],
        menu: ["GmarketSansBold", "Roboto"],
        guide: ["GmarketSansMedium", "Roboto"],
        text: ["GmarketSansLight", "Roboto"],
        pen: ["KyoboHand", "Roboto"],
        pretty: ["S-CoreDream-2ExtraLight", "Roboto"],
        pretty2: ["Open Sans Condensed", "Roboto"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

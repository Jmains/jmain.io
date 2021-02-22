// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "proj-1": "url('/headshot.JPG')",
      }),
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "gray-bg": "#1C1C1C",
        projectBlue: "#34C2E3",
      },
      height: {
        fph: "400px",
        card: "40rem",
      },
      width: {
        fpw: "500px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

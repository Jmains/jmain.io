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
        primaryBgDark: "#161616",
        primaryBgGrey: "#F6F9FC",
        secondaryBgDark: "#111927",
        secondaryDark: "#24D3ED",
        primaryDark: "#645BFF",
        primaryLight: "#E0A8FF",
        darkGray: "#2e2e2e",
      },
      height: {
        fph: "400px",
        card: "40rem",
        heroBg: "806px",
        heroSectionHeight: "700px",
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

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "gray-bg": "#1C1C1C",
      },
      height: {
        fph: "400px",
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

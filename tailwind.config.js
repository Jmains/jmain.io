module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "proj-1": "url('/headshot.JPG')",
      }),
      colors: {
        "gray-bg": "#1C1C1C",
        projectBlue: "#34C2E3",
      },
      height: {
        fph: "400px",
        card: "36rem",
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

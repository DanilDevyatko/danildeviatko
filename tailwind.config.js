/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#031c19",
        secondary: "#b3f5ec",
        tertiary: "#057567",
        "black-100": "#023d36",
        "black-200": "#090325",
        "white-100": "#fff",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg1.jpg')",
      },
    },
  },
  plugins: [],
};

// 077D6D
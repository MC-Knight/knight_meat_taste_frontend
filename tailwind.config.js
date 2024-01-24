/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "main-sans": ["Lexend", "sans-serif"],
      },
      colors: {
        primary: "#FFFCF5",
        secondary: "#FB4A36",
        dark: "#131313",
        light: "#BFB8AC",
        grey: "#A29F9B",
      },
      backgroundImage: {
        home: "url('./assets/images/home.png')",
        menu: "url('./assets/images/bg.png')",
      },
    },
  },
  plugins: [],
};

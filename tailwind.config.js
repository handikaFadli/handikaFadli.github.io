/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#1a8fe3",
        dark: "#0f172a",
        grey: "#64748b",
        coklat: "#ac6b34",
        hitam: "#131419",
        abu: "#1C1D24",
      },
      screens: {
        xl: "1120px",
      },
    },
  },
  plugins: [],
};

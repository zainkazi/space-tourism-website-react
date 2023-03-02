/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "6xl": "4.052rem",
        "7xl": "4.822rem",
        "8xl": "5.552rem",
        "9xl": "6.252rem",
        "10xl": "7.052rem",
      },
    },
  },
  plugins: [],
};

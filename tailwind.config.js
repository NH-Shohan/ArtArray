/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      black: "#111111",
      gray: "#363636",
      "gray-light": "#888888",
      light: "#EEEEEE",
      white: "#FBFBFB",
    },
  },
  plugins: [],
};

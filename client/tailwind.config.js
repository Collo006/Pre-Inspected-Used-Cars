/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // you can define custom colors here if needed
        primary: "#1e40af", // example blue-800
        secondary: "#fbbf24", // example amber-400
      },
      fontFamily: {
        // optional: custom fonts
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [scrollbarHide] // ✅ hides scrollbar in slide,
};


export default config;
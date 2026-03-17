/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",         // <--- Muy importante si tu HTML está en la raíz
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
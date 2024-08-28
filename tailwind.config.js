/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange": "#FD8549",
        "bg-2": "#C8F1F3",
        "gray": "#2F3C4C"
      }
    },
  },
  plugins: [require('daisyui')],
}

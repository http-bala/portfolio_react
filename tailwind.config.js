/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#F2BE21', // Custom highlight color
        highlight: '#FF5722',
      },
    },
  },
  plugins: [],
}
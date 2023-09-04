/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'lybas-gray':'rgba(100, 116, 139, 1)',
        'lybas-blue':'rgba(26, 84, 235, 1)',
        'lybas-red':'rgba(255, 53, 33, 1)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
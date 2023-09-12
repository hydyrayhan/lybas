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
        'lybas-light-gray':'rgba(246, 246, 246, 1)',
        'lybas-light-blue':'rgba(7, 98, 200, 0.05)'
      },
      boxShadow:{
        'lybas-1': '0px 0px 4px 0px rgba(0, 0, 0, 0.2)'
      },
      transitionProperty: {
        'width': 'width'
    },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing:{
        'valueGap':'1.3125rem',
        'valueHeight': '12.1875rem',
        'valueWidth': '21.6875rem',
        'valueWordsHeight': '5.3125rem'
      },
      screens: {
        'desktop': '1440px',
        'tablet': '768px',
        'smartphone': '360px',
      }
    },
  },
  plugins: [],
}
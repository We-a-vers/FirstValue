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
        'valuePadPhone': '1.88rem',
        'valuePadDesktop': '6.5rem',
        'valueHeight': '12.1875rem',
        'valueWidth': '21.6875rem',
        'valueWordsHeight': '5.3125rem',
        'valueSecWidth': '18.75rem',
        'valueTabletWordsWidth': '26.1875rem',
        'valueTabletWidth':'29.375rem'
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
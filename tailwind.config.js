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
      },
      //implementation: 'bg-light'
      colors: { 
        'light': '#e6ecf1',
        'light-hover': '#d9e2ea',
        'light-active': '#b1c3d4',
        'normal': '#023e73',
        'normal-hover': '#02325c',
        'dark': '#022f56',
        'dark-hover': '#012545',
        'dark-active': '#011c34',
        'darker': '#011628'
      },
      // implementation: 'bg-main-gradient'
      // To use backgroundImage into text, apply text-transparent bg-clip-text into className. 
      // Example: className="bg-main-gradient text-transparent bg-clip-text"
      backgroundImage: {
        'main-gradient': 'var(--first-value-gradient)',
        'landing-sub-title': 'var(--foundation-blue-dark-hover)',
        'landing-text': 'var(--natural-color-gray)',
        'subtitle-button': 'var(--foundation-blue-normal)',
        'body-text': 'var(--natural-color-black)',
        'navbar-text': 'var(--foundation-blue-dark)',
        'button-text': 'var(--natural-color-white)',
      },
      // implementation: 'shadow-button-hover-shadow'
      boxShadow: {
        'button-hover': '0px 4px 20px 0px rgba(0, 0, 0, 0.10)',
      },
      // implementation: 'font-chi-serif'
      fontFamily: {
        'chi-serif': ['Noto Serif TC'],
        'chi-sans': ['Noto Sans TC'],
      }
    },
  },
  plugins: [],
}
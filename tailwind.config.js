/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        valueImgSizeDesk: '3.75rem',
        valueWordsHeight: '5.3125rem',
        valueSecWidth: '18.75rem',
        valueTabletWordsWidth: '26.1875rem',
      },
      screens: {
        desktop: '1440px',
        tablet: '768px',
        smartphone: '360px',
      },
      // implementation: 'bg-dark-active'
      colors: {
        light: '#e6ecf1',
        'light-hover': '#d9e2ea',
        'light-active': '#b1c3d4',
        normal: '#023e73',
        'normal-hover': '#02325c',
        dark: '#022f56',
        'dark-hover': '#012545',
        'dark-active': '#011c34',
        darker: '#011628',
        'cool-grey-90': '#21272A',
        'foundation-blue-dark-hover': '#012545',
        'natural-color-gray': '#646368',
        'foundation-blue-normal': '#023e73',
        'natural-color-black': '#21272a',
        'foundation-blue-dark': '#022f56',
        'natural-color-white': '#fafafa',
        'service-tech-card-border-color': '#40464d0d',
      },
      // implmentation: 'bg-main-gradient'
      // backgroundImage section is for gradient color and other general usage of backgroundImage extension.
      // To use gradient into a text: apply "text-transparent", "bg-clip-text" into tailwind css.
      // Example: className="bg-main-gradient text-transparent bg-clip-text"
      backgroundImage: {
        'main-gradient': 'var(--first-value-gradient)',
      },
      // implementation: 'shadow-button-hover'
      boxShadow: {
        'button-hover': '0px 4px 20px 0px rgba(0, 0, 0, 0.10)',
        'value-card': '0px 4px 40px 0px rgba(34, 63, 101, 0.07)',
        'service-tech-card-border':
          '0px 2px 30px 0px rgba(151, 151, 151, 0.10)',
      },
      // implementation: 'font-chi-serif'
      fontFamily: {
        'chi-serif': ['Noto Serif TC'],
        'chi-sans': ['Noto Sans TC'],
      },
    },
  },
  plugins: [],
};

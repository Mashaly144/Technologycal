module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './index.html',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],

  theme: {
    fontFamily: {
      primary: 'Mulish, sans-serif',
      secondary: 'Source Code Pro, monospace',
    },
    container: {
      padding: {
        DEFAULT: '1.5rem',
        lg: '3rem',
        xs: '1rem',
      },
    },
    background: {},
    longContainer: {
      padding: {
        DEFAULT: '1.5rem',
        lg: '2rem',
        xs: '1rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },

    extend: {
      colors: {
        white: '#FFFFFF',
        dimWhite: '#808080',
        transparent: 'transparent',
        primary: '#5956E9',
        headerColor: '#2F2F2F',
        secondary1: '#797979',
        footerCardBg: '#2F2F2F',
        bgCard: '#F6F6F6',
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin.cjs')],
  darkMode: 'class',
};

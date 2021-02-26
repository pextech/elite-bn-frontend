module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: { min: '300px', max: '475px' },
      },
      colors: {
        primary: {
          100: '#495AF1',
          200: '2D3BBD',
        },
        secondary: {
          100: '#333',
          200: '#000',
        },
      },
      backgroundImage: (theme) => ({
        test1: "url('/src/images/test1.jpg')",
      }),
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#495AF1',
      secondary: '#FEFDFF',
      danger: '#e3342f',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

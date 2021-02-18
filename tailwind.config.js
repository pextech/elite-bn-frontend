module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        test1: "url('/src/images/test1.jpg')",
      }),
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#2D3BBD',
      secondary: '#FEFDFF',
      danger: '#e3342f',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

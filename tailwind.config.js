module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        test1: "url('/src/images/test1.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Lobster"', "cursive"],
        body: ['"Dosis"', "sans-serif"],
      },
      backgroundImage: {
        hero: "url('https://clickup.com/landing/images/main/bg_gradient__main-header.svg')",
      },
    },
  },
  plugins: [],
};

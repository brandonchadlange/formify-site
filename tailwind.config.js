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
        hero: "url('https://www.digitalocean.com/static/hero-bg-animation-ef666767f909d3b76122f0279a8bf16d.svg')",
      },
    },
  },
  plugins: [],
};

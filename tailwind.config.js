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
        body: ['"Inter"', "sans-serif"],
      },
      animation: {
        "reverse-spin-slow": "reverse-spin 12s linear infinite",
        "spin-slow": "spin 12s linear infinite",
      },
      keyframes: {
        "reverse-spin": {
          from: {
            transform: "rotate(360deg)",
          },
        },
      },
      backgroundImage: {
        hero: "url('https://clickup.com/landing/images/main/bg_gradient__main-header.svg')",
      },
    },
  },
  plugins: [],
};

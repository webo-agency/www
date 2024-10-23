/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./content/**/*.md",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      screens: {
        phone: "320px",
        "phone-wide": "480px",
        phablet: "560px",
        "tablet-small": "640px",
        tablet: "768px",
        "tablet-wide": "1024px",
        desktop: "1248px",
        "desktop-wide": "1440px",
        fullHd: "1680px",
        ultraHd: "4096px",
      },
      fontFamily: {
        body: "Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
      },

      fontSize: {
        base: ["16px", "28px"],
        xl: ["20px", "31px"],
        "2xl": ["25px", "32px"],
        "4xl": ["35px", "42px"],
        "5xl": ["45px", "55px"],
      },
      colors: {
        green: {
          main: "#06CEAF",
          mainHover: "#07C7A9",
          light: "#F3FEFC",
          gray: "#ECF6F4",
        },
        gray: {
          darkest: "#010302",
          darker: "#202020",
          dark: "#424242",
          default: "#E9E9E9",
          light: "#F5F6F6",
          lighter: "#FAFAFA",
        },
      },
    },
  },
  plugins: [],
};

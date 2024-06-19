import { fileURLToPath } from "url";
import { dirname, join } from "path";
var appManifest = require("./package.json");

require("dotenv").config();

const currentDir = dirname(fileURLToPath(import.meta.url));

const API_URL = process.env.API_URL;
const API_AFFIX = process.env.API_AFFIX;

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default {
  name: "webo-theme",
  devtools: { enabled: false },
  env: {
    CONTEXT: process.env.CONTEXT,
    API_URL: API_URL,
    API_AFFIX: API_AFFIX,
    GOOGLE_FONTS: "Montserrat:400,500,600,700,800:latin,latin-ext&display=swap",
  },
  globalName: process.env.NAME,
  app: {
    head: {
      viewport: "width=device-width, initial-scale=1",
      charset: "utf-8",
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  components: true,
  css: [
    join(currentDir, "./assets/css/style.css"),
    join(currentDir, "./assets/css/main.css"),
  ],
  plugins: [join(currentDir, "./plugins/textformatter.js")],
  modules: ["@nuxt/content", "@nuxt/image", "@nuxtjs/tailwindcss",'@stefanobartoletti/nuxt-social-share','nuxt-simple-sitemap'],
  // unocss: {
  //   autoImport: true,
  //   uno: true, // enabled `@unocss/preset-uno`
  //   icons: true, // enabled `@unocss/preset-icons`
  //   attributify: true, // enabled `@unocss/preset-attributify`,
  //   preflight: true,
  //   shortcuts: [],
  //   rules: [],
  // },
  // content: {
  //   documentDriven: true
  // },
  site:{
    url: 'https://www.webo.agency',
  },
  sitemap:{
    discoverImages: true,
    autoLastmod: true,
  },
  image: {
    provider: "ipx",
    ipx: {
      modifiers: {
        quality: "95",
        format: "webp",
      },
    },
  },
  bugsnag: {
    publishRelease: true,
    config: {
      apiKey: "e84d63a6f7b1a2db9acda61d3dc7d892",
      enabledReleaseStages: ["development", "staging", "production"],
      releaseStage: process.env.NODE_ENV,
      appVersion: appManifest.version,
    },
  },
  vueuse: {
    ssrHandlers: true,
  },
  // pwa: {
  //   manifest: {
  //     lang: "en",
  //   },
  // },
  target: "static",
  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },
  build: {
    transpile: ["swiper"],
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
};

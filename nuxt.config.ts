var appManifest = require("./package.json");

//require("dotenv").config();

const API_URL = process.env.API_URL;
const API_AFFIX = process.env.API_AFFIX;

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default {
  name: "webo-theme",

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
  experiments: {
    payloadExtraction: false,
  },
  components: true,
  css: ["./assets/css/style.css", "./assets/css/main.css"],
  plugins: ["./plugins/textformatter.js"],
  modules: [
    "@nuxt/content",
    "@nuxt/image",
    "nuxt-bugsnag",
    "@nuxtjs/tailwindcss",
    //    "@nuxtjs/i18n",
  ],
  // unocss: {
  //   autoImport: true,
  //   uno: true, // enabled `@unocss/preset-uno`
  //   icons: true, // enabled `@unocss/preset-icons`
  //   attributify: true, // enabled `@unocss/preset-attributify`,
  //   preflight: true,
  //   shortcuts: [],
  //   rules: [],
  // },
  // i18n: {
  //   differentDomains: process.env.NODE_ENV === "production",
  //   fallbackLocale: "en",
  //   defaultLocale: "en",
  //   noPrefixDefaultLocale: true,
  //   strategy: "prefix_except_default",
  //   detectBrowserLanguage: false,
  //   locales: [
  //     {
  //       code: "pl",
  //       iso: "pl-PL",
  //       domain: "webo.pl",
  //       name: "Polski",
  //     },
  //     {
  //       code: "en",
  //       iso: "en-US",
  //       domain: "webo.agency",
  //       name: "English",
  //     },
  //   ],
  // },
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
  generate: {
    fallback: "404.html",
    // routes() {
    //   let _calls = [];

    //   _calls.push(axios.get(`${process.env.API_URL}${process.env.API_AFFIX}`));
    //   //@TODO: [BEOK-1] Per page loop. As another module can be usefull
    //   languages.availableLanguage.forEach(function (locale) {
    //     _calls.push(
    //       axios.get(
    //         `${process.env.API_URL}${process.env.API_AFFIX}/wp/v2/pages/?per_page=100&lang=${locale.code}`,
    //         locale
    //       )
    //     );
    //     _calls.push(
    //       axios.get(
    //         `${process.env.API_URL}${process.env.API_AFFIX}/wp/v2/posts/?per_page=100&lang=${locale.code}`,
    //         locale
    //       )
    //     );
    //   });

    //   return axios.all(_calls).then(
    //     axios.spread((...res) => {
    //       let _routeArray = [];

    //       let rootRequest = res[0];
    //       delete res[0];

    //       res.map((singleResponse) => {
    //         singleResponse.data.forEach((page) => {
    //           if (
    //             !rootRequest.data.home.includes(page.link) &&
    //             !rootRequest.data.home.concat("/").includes(page.link)
    //           )
    //             _routeArray.push({
    //               route: `${page.link
    //                 .replace(rootRequest.data.home, "")
    //                 .replace(/\/$/, "")}`, //SLUG FIX - No translation at the moment available from WP Multilanguage
    //               name: `${page.slug}___${singleResponse.config.code}`,
    //               payload: page,
    //             });
    //         });
    //       });

    //       return _routeArray;
    //     })
    //   );
    // },
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

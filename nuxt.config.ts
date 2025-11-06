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
  compatibilityDate: "2024-10-23",
  devtools: { enabled: true },
  env: {
    CONTEXT: process.env.CONTEXT,
    API_URL: API_URL,
    API_AFFIX: API_AFFIX,
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
    join(currentDir, './assets/css/style.css'),
    join(currentDir, './assets/css/main.css')
  ],
  plugins: [join(currentDir, './plugins/textformatter.js')],
  modules: [
    "@nuxt/content",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    '@stefanobartoletti/nuxt-social-share',
    'nuxt-simple-sitemap',
    "@vite-pwa/nuxt",
    "nuxt-vitalizer",
    "@nuxtjs/google-fonts",
  ],
  googleFonts: {
    download: true,
    inject: true,
    families: {
      Montserrat: {
        wght: [400,500,600]
      }
    },
    display: 'swap', // 'auto' | 'block' | 'swap' | 'fallback' | 'optional'
  },

  content: {
    documentDriven: true,
    experimental: {
      clientDb: false
    },
  },
  site:{
    url: 'https://webo.agency',
    trailingSlash: true
  },
  sitemap:{
    discoverImages: true,
    autoLastmod: true,
  },
  image: {
    provider: "ipx",
    format: ["webp"],
    ipx: {
      modifiers: {
        quality: "90",
        format: ["webp"],
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
  booster: {

    detection: {
      performance: true,
      browserSupport: true
    },

    performanceMetrics: {
      device: {
        hardwareConcurrency: { min: 2, max: 48 },
        deviceMemory: { min: 2 }
      },
      timing: {
        fcp: 800,
        dcl: 1200
      }
    },

    targetFormats: ['webp', 'avif', 'jpg|jpeg|png|gif'],

    componentAutoImport: false,
    componentPrefix: undefined,

    lazyOffset: {
      component: '0%',
      asset: '0%'
    }
    
  },
  pwa: {
    registerType: "autoUpdate",
    manifest: {
      name: "Webo.agency",
      lang: "en",
      theme_color: "#06ceaf",
      id: "/?standalone=true",
      start_url: "/",
      orientation: "any",
      icons: [
        {
          src: "symbol.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any maskable",
        },
      ],
    },
    strategies: "generateSW",
    workbox: {
      globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
      maximumFileSizeToCacheInBytes: 4000000,
      navigateFallback: null,
    },
  },

  target: "static",
  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
    },
  },
  experimental:{
    sharedPrerenderData: true,
    payloadExtraction: true,
    defaults:{
      nuxtLink:{
        prefetchOn:{
          visibility: false,
          interaction: true,
        },
        trailingSlash: 'append'
      }
    }
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
  vitalizer: {
    disablePrefetchLinks: true,
    disablePreloadLinks: true,
    disableStylesheets: 'entry',
  },
  vite: {
    build: {
      modulePreload: false,
      // rollupOptions: {
      //   output: {
      //     experimentalMinChunkSize: 250 * 1024,
      //     manualChunks: (id, _) => {
      //       if (
      //         !id.includes("node_modules") &&
      //         !id.startsWith("virtual:") &&
      //         !id.includes("src") &&
      //         !id.includes("assets")
      //       ) {
      //         if (id.includes("pages")) {
      //           const parts = id.split("/");
      //           const folderIndex = parts.indexOf("pages");
      //           if (folderIndex + 2 < parts.length) {
      //             const pageGroup = parts[folderIndex + 1];
      //             return `chunk-pg-${pageGroup}`;
      //           }
      //           return "chunk-pg-misc";
      //         }
      //       }
      //     },
      //   },
      // },
    },
  }
};
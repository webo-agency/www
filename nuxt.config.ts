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
  content: {
    documentDriven: true,
    experimental: {
      clientDb: false
    }
  },
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
  vitalizer: {
    disablePrefetchLinks: true,
    disablePreloadLinks: true,
    disableStylesheets: 'entry',
  },
  pwa: {
    registerType: "autoUpdate",
    manifest: {
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
    defaults:{
      nuxtLink:{
        prefetchOn:{
          visibility: false,
          interaction: true
        }
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

  hooks: {
    // prevent some prefetch behaviour
    "build:manifest": (manifest) => {
      for (const key in manifest) {
        manifest[key].dynamicImports = []
        manifest[key].prefetch = false;
        manifest[key].preload = false;
        
        const file = manifest[key];
        if (file.assets) {
          file.assets = file.assets.filter(
            (assetName) => !/.+\.(gif|jpe?g|png|svg)$/.test(assetName)
          );
        }
      }
    }
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          experimentalMinChunkSize: 250 * 1024,
          manualChunks: (id, _) => {
            if (
              !id.includes("node_modules") &&
              !id.startsWith("virtual:") &&
              !id.includes("src") &&
              !id.includes("assets")
            ) {
              if (id.includes("pages")) {
                const parts = id.split("/");
                const folderIndex = parts.indexOf("pages");
                if (folderIndex + 2 < parts.length) {
                  const pageGroup = parts[folderIndex + 1];
                  return `chunk-pg-${pageGroup}`;
                }
                return "chunk-pg-misc";
              }
            }
          },
        },
      },
    },
  }
};
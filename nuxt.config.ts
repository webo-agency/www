import { fileURLToPath } from "url";
import { dirname, join } from "path";
import tailwindcss from "@tailwindcss/vite";
var appManifest = require("./package.json");

require("dotenv").config();

const currentDir = dirname(fileURLToPath(import.meta.url));

const API_URL = process.env.API_URL;
const API_AFFIX = process.env.API_AFFIX;

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default {
  name: "webo-theme",
  compatibilityDate: "2024-10-23",
  future: {
    compatibilityVersion: 5,
  },
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
  components: [
    // Every component gets a nested, path-prefixed name derived from its folder:
    //   Block/Hero.vue     -> <BlockHero>     (::block-hero in markdown)
    //   Prose/H2.vue       -> <ProseH2>       (## headings)
    //   Ui/Button/Main.vue -> <UiButtonMain>
    //   Layout/Navbar.vue  -> <LayoutNavbar>
    // global:true registers them app-wide so MDC (::component) resolves them
    // during SSR/prerender without an explicit import.
    { path: "~/components", pathPrefix: true, global: true },
  ],
  css: [
    join(currentDir, './app/assets/css/style.css'),
    join(currentDir, './app/assets/css/main.css')
  ],
  plugins: [join(currentDir, './app/plugins/textformatter.js')],
  modules: [
    "@nuxt/content",
    "@nuxt/image",
    '@stefanobartoletti/nuxt-social-share',
    "nuxt-vitalizer",
    "@nuxtjs/google-fonts",
    "nuxt-gtag",
    "@nuxtjs/sitemap"
  ],
  googleFonts: {
    download: true,
    inject: true,
    families: {
      Montserrat: {
        wght: [400, 500, 600]
      }
    },
    display: 'swap', // 'auto' | 'block' | 'swap' | 'fallback' | 'optional'
  },
  gtag: {
    initMode: "manual",
    id: process.env.GA_ID,
    initCommands: [
      [
        "consent",
        "default",
        {
          ad_user_data: "denied",
          ad_personalization: "denied",
          ad_storage: "denied",
          analytics_storage: "denied",
          wait_for_update: 500,
        },
      ],
    ],
  },

  content: {
    documentDriven: true,
    experimental: {
      clientDb: false
    },
  },
  site: {
    url: 'https://webo.agency',
    trailingSlash: true
  },
  sitemap: {
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

  target: "static",
  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
    },
  },
  experimental: {
    sharedPrerenderData: true,
    payloadExtraction: true,
    defaults: {
      nuxtLink: {
        prefetchOn: {
          visibility: false,
          interaction: true,
        },
        trailingSlash: 'append'
      }
    }
  },
  build: {
    transpile: ["swiper"],
  },
  vitalizer: {
    disablePrefetchLinks: true,
    disablePreloadLinks: true,
    disableStylesheets: 'entry',
  },
  vite: {
    plugins: [tailwindcss()],
    // Pre-bundle heavy deps discovered at runtime so dev doesn't reload on first load
    optimizeDeps: {
       include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
        '@vueuse/components',
        '@vueuse/core',
        'three',
      ]
    },
    build: {
      modulePreload: false,
    },
  }
};
import getRoutes from "./utils/getRoutes";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: "fr"
    },
    title: "Éditions les crocos",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Les éditions les crocos proposent des livres pour enfants."
      },
      { name: "robots", content: "noindex" },
      { name: "theme-color", content: "#3ba23f" },
      { name: "og:title", content: "Éditions les crocos" },
      { name: "og:type", content: "article" },
      { name: "og:site_name", content: "Éditions les crocos" },
      {
        name: "og:description",
        content: "Les éditions les crocos proposent des livres pour enfants."
      }
    ]
    // link: [
    //   { rel: "preconnect", href: "https://app.snipcart.com" },
    //   { rel: "preconnect", href: "https://cdn.snipcart.com" },
    //   {
    //     rel: "stylesheet",
    //     href: "https://cdn.snipcart.com/themes/v3.1.0/default/snipcart.css"
    //   },
    //   { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    // ],
    // script: [
    //   { src: "https://cdn.snipcart.com/themes/v3.1.0/default/snipcart.js" }
    // ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  // css: [],
  // /*
  //  ** Plugins to load before mounting the App
  //  */
  // plugins: [],

  css: [
    "vue-slick-carousel/dist/vue-slick-carousel.css",
    "@/assets/css/main.scss"
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "@/plugins/carousel.js" },
    { src: "@/plugins/coolLightBox.js" },
    { src: "@/plugins/jsonld" }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/snipcart",
    "@nuxtjs/tailwindcss",
    "nuxt-compress",
    "@aceforth/nuxt-optimized-images",
    "@nuxt/image",
    [
      "@nuxtjs/google-fonts",
      {
        display: "swap",
        families: {
          Alata: true
        }
      }
    ]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    "nuxt-cookie-control",
    "@nuxtjs/sitemap",
    [
      "nuxt-compress",
      {
        gzip: {
          cache: true
        },
        brotli: {
          threshold: 10240
        }
      }
    ]
  ],

  snipcart: {
    key:
      "NGRjZGU0MTYtNzg5YS00Y2I2LWJiMjEtYTM1ODhhMDQyZjExNjM3NTAyOTQxNzQ2NTE0NjYw",
    locales: {
      fr: {
        actions: {
          checkout: "Passer la commande"
        }
      }
    },
    attributes: [
      ["data-cart-custom1-name", "Do you accept terms?"],
      ["data-cart-custom1-options", "true|false"],
      ["data-cart-custom1-required", "true"]
    ]
  },
  image: {
    ipx: {
      /**
       * Input directory for images
       **/
      dir: "~/static",
      /**
       * Cache directory for optimized images
       **/
      cacheDir: "~~/node_modules/.cache/nuxt-image",
      /**
       * Enable/Disable cache cleaning cron job
       **/
      clearCache: false,
      format: "webp",
      /**
       * Modify default behavior of image optimizer
       **/
      sharp: {
        // Here is complete list of available options: https://github.com/lovell/sharp/blob/master/lib/constructor.js#L132
      }
    }
  },
  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    //transpile: ["VueCarousel"]
    babel: {
      plugins: [["@babel/plugin-proposal-private-methods", { loose: true }]]
    }
  },

  sitemap: {
    hostname: "https://www.editionsdescrocos.com",
    gzip: true,
    exclude: ["/admin/**"],
    routes() {
      return getRoutes();
    }
  },

  cookies: {
    necessary: [],
    optional: [
      {
        name: "Google Analitycs",
        identifier: "G-L4315DSBHJ",
        description:
          "Nous utilisons l'outil Google Analytics à des fins statistiques afin d'améliorer nos services.",

        initialState: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-JFDNW9JFSX",
        async: true,
        cookies: ["_ga", "_gat", "_gid"],
        accepted: () => {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            "gtm.start": new Date().getTime(),
            event: "gtm.js"
          });
        },
        declined: () => {}
      }
    ]
  },

  googleAnalytics: {
    id: "G-L4315DSBHJ"
  }
};

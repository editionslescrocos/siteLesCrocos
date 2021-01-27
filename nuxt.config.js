export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "editionsdescrocos",
    htmlAttrs: {
      lang: "fr"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  // css: [],
  // /*
  //  ** Plugins to load before mounting the App
  //  */
  // plugins: [],

  css: ["vue-slick-carousel/dist/vue-slick-carousel.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "@/plugins/carousel.js" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "nuxt-compress",
    [
      "@nuxtjs/google-fonts",
      {
        display: "swap",
        families: {
          Fresca: true,
          Acme: true,
          "Happy+Monkey": true,
          "Short+Stack": true,
          Boogaloo: true,
          Chicle: true,
          "Bubblegum+Sans": true,
          "Rum+Raisin": true
        }
      }
    ]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    "@nuxt/image",
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

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    //transpile: ["VueCarousel"]
  },

  sitemap: {
    hostname: "https://editionsdescrocos.com",
    gzip: true,
    exclude: ["/admin/**"],
    routes: ["/livres"]
  },

  cookies: {
    necessary: [],
    optional: [
      {
        name: "Google Analitycs",
        identifier: "G-JFDNW9JFSX",
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
    id: "IndeiqueID"
  }
};

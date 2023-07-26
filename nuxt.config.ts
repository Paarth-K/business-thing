// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/image-edge"],
  ssr: false,
  css: [
    "primevue/resources/themes/lara-light-indigo/theme.css",
    "primevue/resources/primevue.min.css",
    "@/assets/styles/style.scss",
    "primeicons/primeicons.css",
    "primeflex/primeflex.css",
  ],

  build: {
    transpile: ["primevue"],
  },

  image: {},

  devtools: {
    enabled: true,
  },
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
});

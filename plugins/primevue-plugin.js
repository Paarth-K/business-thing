import { defineNuxtPlugin } from "nuxt/app";
import PrimeVue from "primevue/config";
import Breadcrumb from "primevue/breadcrumb";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue);
  // nuxtApp.vueApp.component("Button", Button);
  // nuxtApp.vueApp.component("InputText", InputText);
  nuxtApp.vueApp.component("BreadCrumb", Breadcrumb);
});

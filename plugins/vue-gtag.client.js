import VueGtag, { trackRouter } from "vue-gtag-next";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      //id: "G-BWYD5SWM32",
    },
  });
  trackRouter(useRouter());
});

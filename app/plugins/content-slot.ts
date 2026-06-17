import ContentSlot from '~/components/ContentSlot.vue';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('ContentSlot', ContentSlot);
});

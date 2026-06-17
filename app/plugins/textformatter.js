export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("formatText", (text) => {
    return typeof text === "string" ? text : "";
  });
  nuxtApp.provide("addTelSpaces", (text) => {
    if (typeof text === "string") {
      return text;
    }
  });
});

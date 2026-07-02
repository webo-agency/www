<template>
  <UiLink
    :url="link"
    :activeClass="'none'"
    class="uppercase text-green-main font-semibold border-0 border-b-2 border-b-transparent hover:border-b-green-main transition duration-200 py-2.5 mt-5 inline-block"
  >
    <span v-if="title" v-html="title"></span>
    <slot></slot>
  </UiLink>
</template>

<script>
import UiLink from "../Link.vue";

export default {
  props: {
    link: {
      type: String,
      required: true,
      default: "/",
    },
    title: {
      type: String,
      required: true,
    },
  },
  components: { UiLink },
};
</script>

<style></style>

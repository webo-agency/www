<template>
  <button
    v-if="tagButton"
    class="flex justify-between items-center w-max max-w-full py-[13px] rounded-full bg-green-main hover:bg-green-mainHover shadow-xl shadow-[#079F88]/25 text-[15px] font-semibold uppercase transition-all duration-300 group"
    :class="[isWide ? 'px-[25px]' : ' px-8']"
  >
    <span v-if="title" v-html="title"></span>
    <slot></slot>
    <span
      class="h-0.5 w-[14px] ml-3 mt-0.5 bg-current group-hover:translate-x-1 transition duration-200"
    ></span>
  </button>
  <CustomLink
    v-else
    :url="link"
    :activeClass="'none'"
    class="flex justify-between items-center w-max max-w-full py-[13px] rounded-full bg-green-main hover:bg-green-mainHover shadow-xl shadow-[#079F88]/25 text-[15px] font-semibold uppercase transition-all duration-300 group"
    :class="[isWide ? 'px-[25px]' : ' px-8']"
  >
    <span v-if="title" v-html="title"></span>
    <slot></slot>

    <span
      class="h-0.5 w-[14px] ml-3 mt-0.5 bg-current group-hover:translate-x-1 transition duration-200"
    ></span>
  </CustomLink>
</template>

<script>
import CustomLink from "../custom-link.vue";
export default {
  name: "ButtonMain",
  props: {
    link: {
      type: String,
      reguired: true,
      default: "/",
    },
    title: {
      type: String,
      reguired: true,
    },
    tagButton: {
      type: Boolean,
      default: false,
    },
    isWide: {
      type: Boolean,
      default: false,
    },
  },
  components: { CustomLink },
};
</script>

<style></style>

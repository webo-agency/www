<template>
  <button
    v-if="tagButton"
    class="btn-main flex justify-between items-center w-max max-w-full py-[20px] px-[35px] rounded-full bg-[#08DBBA] hover:bg-green-mainHover shadow-xl shadow-[#079F88]/25 text-[15px] !text-[#333] font-semibold uppercase transition-all duration-300 group"
  >
    <span v-if="title" v-html="title"></span>
    <slot></slot>
    <svg class="ml-4" v-if="arrowIcon" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.75 13.75L13.75 0.75M13.75 0.75V13.23M13.75 0.75H1.27" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <span v-else
      class="h-0.5 w-[14px] ml-3 mt-0.5 bg-current group-hover:translate-x-1 transition duration-200"
    ></span>
  </button>
  <CustomLink
    v-else
    :url="link"
    :activeClass="'none'"
    class="btn-main flex justify-between items-center w-max max-w-full py-[20px] px-[35px] rounded-full bg-[#08DBBA] hover:bg-green-mainHover shadow-xl shadow-[#079F88]/25 text-[15px] !text-[#333] font-semibold uppercase transition-all duration-300 group"
  >
    <span v-if="title" v-html="title"></span>
    <slot></slot>

    <svg class="ml-4" v-if="arrowIcon" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.75 13.75L13.75 0.75M13.75 0.75V13.23M13.75 0.75H1.27" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <span v-else
      class="h-0.5 w-[14px] ml-3 mt-0.5 bg-current group-hover:translate-x-1 transition duration-200"
    ></span>
  </CustomLink>
</template>

<script>
import CustomLink from "./custom-link.vue";
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
    arrowIcon: {
      type: Boolean,
      default: false,
    }
  },
  components: { CustomLink },
};
</script>

<style></style>

<template>
  <button
    v-if="tagButton"
    :class="rootClass"
  >
    <span v-if="title" v-html="title"></span>
    <slot></slot>

    <svg
      v-if="arrowIcon"
      class="ml-4"
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.75 13.75L13.75 0.75M13.75 0.75V13.23M13.75 0.75H1.27"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <span
      v-else
      class="h-0.5 w-[14px] ml-3 mt-0.5 bg-current group-hover:translate-x-1 transition duration-200"
    ></span>
  </button>

  <CustomLink
    v-else
    :url="link"
    :activeClass="'none'"
    :class="rootClass"
  >
    <span v-if="title" v-html="title"></span>
    <slot></slot>

    <svg
      v-if="arrowIcon"
      class="ml-4"
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.75 13.75L13.75 0.75M13.75 0.75V13.23M13.75 0.75H1.27"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <span
      v-else
      class="h-0.5 w-[14px] ml-3 mt-0.5 bg-current group-hover:translate-x-1 transition duration-200"
    ></span>
  </CustomLink>
</template>

<script>
import CustomLink from "../custom/link.vue";

export default {
  name: "ButtonSharedMain",
  components: { CustomLink },
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
    tagButton: {
      type: Boolean,
      default: false,
    },
    arrowIcon: {
      type: Boolean,
      default: false,
    },
    rootClass: {
      type: [String, Array, Object],
      default: "",
    },
  },
};
</script>

<style></style>

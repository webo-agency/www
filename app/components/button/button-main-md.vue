<template>
  <ButtonSharedMain
    :link="link"
    :title="title"
    :tagButton="tagButton"
    :rootClass="rootClass"
  >
    <slot></slot>
  </ButtonSharedMain>
</template>

<script>
import ButtonSharedMain from "./shared-main.vue";

export default {
  name: "ButtonMainMd",
  components: { ButtonSharedMain },
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
    isWide: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    rootClass() {
      const base =
        "flex justify-between items-center w-max max-w-full py-[13px] rounded-full bg-green-main hover:bg-green-mainHover shadow-xl shadow-[#079F88]/25 text-[15px] font-semibold uppercase transition-all duration-300 group";

      return `${base} ${this.isWide ? "px-[25px]" : "px-8"}`;
    },
  },
};
</script>

<style></style>

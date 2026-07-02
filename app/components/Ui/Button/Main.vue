<template>
  <ButtonSharedMain
    :link="link"
    :title="title"
    :tagButton="tagButton"
    :arrowIcon="arrowIcon"
    :rootClass="rootClass"
  >
    <slot></slot>
  </ButtonSharedMain>
</template>

<script>
import ButtonSharedMain from "./shared-main.vue";

export default {
  name: "ButtonMain",
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
    arrowIcon: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    rootClass() {
      return "btn-main flex justify-between items-center w-max max-w-full py-[20px] px-[35px] rounded-full bg-[#08DBBA] hover:bg-green-mainHover shadow-xl shadow-[#079F88]/25 text-[15px] !text-[#333] font-semibold uppercase transition-all duration-300 group";
    },
  },
};
</script>

<style></style>

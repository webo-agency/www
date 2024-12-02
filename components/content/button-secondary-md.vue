<template>
    <CustomLink
      :url="link"
      :activeClass="'none'"
      class="uppercase text-green-main font-semibold border-0 border-b-2 border-b-transparent hover:border-b-green-main transition duration-200 py-2.5 mt-5 inline-block"
    >
      <span v-if="title" v-html="title"></span>
      <slot></slot>
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
    },
    components: { CustomLink },
  };
  </script>
  
  <style></style>
  
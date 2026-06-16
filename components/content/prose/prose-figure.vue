<template>
  <figure class="mx-auto">
    <nuxt-picture
      v-if="src"
      class="block w-full object-cover overflow-hidden"
      :class="{ 'rounded-[5px]': rounded }"
      :imgAttrs="{ class: 'w-full', alt }"
      :src="src"
    ></nuxt-picture>
  </figure>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: '',
    },
    rounded: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

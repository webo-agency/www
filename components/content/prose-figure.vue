<template>
  <figure class="mx-auto">
    <nuxt-picture v-if="src" :src="src" class="block w-full object-cover overflow-hidden" :class="{ 'rounded-[5px]': rounded }" 
      :imgAttrs="{ class: 'w-full' }" format="webp"></nuxt-picture>
  </figure>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    rounded: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

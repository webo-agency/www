<template>
  <figure class=" mx-auto  " >
    <nuxt-picture class="w-full object-cover overflow-hidden"
    :class="{'rounded-[5px]':rounded}" v-if="src" :src="src"></nuxt-picture>
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

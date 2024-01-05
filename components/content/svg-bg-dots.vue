<template>
  <div v-if="decoration" class="dots hidden desktop:block absolute z-[-1]">
    <nuxt-picture
      class="w-full h-full"
      :src="'/img/bg-dots.png'"
      :imgAttrs="{ class: 'w-full h-full object-cover ultraHd:object-contain' }"
      width=""
      height=""
    >
    </nuxt-picture>
  </div>
</template>

<script>
export default {
  props: {
    decoration: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

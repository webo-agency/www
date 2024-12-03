<template>
  <CustomLink
    :url="props.href"
  >
    <slot />
  </CustomLink>
</template>

<script setup lang="ts">

const props = defineProps({
  href: {
    type: String,
    default: ''
  },
})
</script>
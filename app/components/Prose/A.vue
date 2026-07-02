<template>
  <UiLink
    :url="props.href"
  >
    <slot />
  </UiLink>
</template>

<script setup lang="ts">

const props = defineProps({
  href: {
    type: String,
    default: ''
  },
})
</script>
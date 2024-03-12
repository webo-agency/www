<template>
  <div
    class="flex tablet:flex-row"
    :class="[reverseMobile ? 'flex-col-reverse' : 'flex-col']"
  >
    <div class="w-full basis-full tablet:basis-1/2 left">
      <slot name="left"></slot>
    </div>
    <div class="w-full basis-full tablet:basis-1/2 right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    reverseMobile: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

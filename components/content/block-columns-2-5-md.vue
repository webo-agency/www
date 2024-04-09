<template>
  <div
    class="flex tablet:flex-row gap-x-12"
    :class="[reverseMobile ? 'flex-col-reverse' : 'flex-col']"
  >
    <div class="w-full basis-full tablet:basis-2/6 left">
      <slot name="left"></slot>
    </div>
    <div class="w-full basis-full tablet:basis-4/6 right">
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

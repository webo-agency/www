<template>
  <div
    class="max-w-[1220px] mx-auto flex flex-col tablet:flex-row gap-y-10 gap-x-10"
    :class="[reverseMobile ? 'flex-col-reverse' : 'flex-col']"
  >
    <div class="left w-full basis-full tablet:basis-3/4">
      <slot name="left"></slot>
    </div>
    <div class="right w-full h-[400px] basis-full tablet:basis-1/4 sticky top-[120px]">
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

<template>
  <div
    class="flex tablet:flex-row"
    :class="[
      reverseMobile ? 'flex-col-reverse' : 'flex-col',
      tiles ? 'columns-tiles gap-2 tablet:gap-[18px]' : '',
    ]"
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
    // kafelki: obie kolumny tej samej wysokości, a prose-video / prose-figure
    // (lub dowolny img/video) wypełniają kafelek (object-cover)
    tiles: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.columns-tiles > .left,
.columns-tiles > .right {
  @apply flex flex-col;
}

.columns-tiles :is(.left, .right) > * {
  @apply flex-1 flex flex-col;
}

.columns-tiles :is(figure, picture) {
  @apply flex-1 flex flex-col min-h-0;
}

.columns-tiles :is(figure > div, picture, video, img) {
  @apply flex-1 h-full w-full object-cover;
}
</style>

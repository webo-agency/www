<template>
  <div>
    <div class="title max-w-fit mb-5 text-xl desktop:text-2xl font-semibold">
      <slot name="title" />
    </div>

    <div
      :class="[
        tilesTight
          ? 'grid grid-cols-3 tablet:grid-cols-6 grid-rows-4 tablet:grid-rows-2'
          : 'grid grid-cols-2 grid-rows-2 gap-5',
      ]"
    >
      <slot name="content"> </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tilesTight: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style></style>

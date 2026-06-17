<template>
  <component :is="wrapper" :class="'relative w-full ' + classes">
    <div v-if="$slots.default" class="px-5 tablet:px-10 desktop:px-20">
      <div class="mx-auto max-w-screen-desktop-wide">
        <slot> </slot>
      </div>
    </div>
    <div v-if="$slots.full" class="w-full">
      <slot name="full"></slot>
    </div>
  </component>
</template>

<script>
export default {
  name: "PageSection",
  props: {
    wrapper: {
      type: String,
      default: "section",
    },
    classes: {
      type: String,
    },
  },
};
</script>

<style></style>

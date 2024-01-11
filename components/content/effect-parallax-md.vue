<template>
  <div ref="container" class="relative w-full">
    <div ref="parallaxEl" class="will-change-transform" :class="innerClass">
      <slot> </slot>
    </div>
  </div>
</template>

<script setup>
import { useElementBounding, useWindowSize } from "@vueuse/core";
const props = defineProps({
  innerClass: {
    type: String,
    default: "",
  },
  parallaxScale: {
    type: Number,
    default: 0.1,
  },
  startBottom: {
    type: Boolean,
    default: false
  }
})
const container = ref(null);
const parallaxEl = ref(null);
const { height: windowHeight } = useWindowSize()
const { y, height } =
  useElementBounding(container);

const parallaxStyle = computed(() => {
  const translateY = process.server ? 0 : (props.startBottom ? -(y.value + height.value - windowHeight.value) : -y.value);
  return `transform: translateY(${translateY * props.parallaxScale}px)`;
});

watch(parallaxStyle, (styleVal) => {
  if (parallaxEl.value && styleVal) {
    parallaxEl.value.style = styleVal
  }
})

</script>

<style></style>

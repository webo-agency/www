<template>
  <div
    ref="container"
    class="transition duration-500"
    :class="{ 'opacity-0 translate-y-2.5': !visited }"
    :style="{ 'transition-delay': delay + 'ms' }"
  >
    <slot></slot>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useElementBounding, useWindowSize } from "@vueuse/core";

export default {
  name: "EffectAppearMdc",
  props: {
    delay: {
      type: Number,
      default: 0,
    },
  },
  setup() {
    const container = ref(null);
    const { x, y, top, right, bottom, left, width, height } =
      useElementBounding(container);
    const windowHeight = useWindowSize().height;
    const windowWidth = useWindowSize().width;
    const isVisible = computed(() => {
      let calcOffset = height.value * 0.5 > 200 ? 200 : height.value * 0.5;

      return (
        y.value <
        windowHeight.value - (windowWidth.value > 768 ? calcOffset : 150)
      );
    });
    return {
      container,
      y,
      height,
      windowHeight,
      isVisible,
    };
  },
  data() {
    return {
      visited: false,
    };
  },
  watch: {
    isVisible(value) {
      if (value) {
        this.visited = true;
      }
    },
  },
  mounted() {
    // setTimeout(() => {
    this.checkAfterMount();
    // }, 200);
  },
  methods: {
    checkAfterMount() {
      if (this.y < this.windowHeight) {
        this.visited = true;
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
@media only screen and (max-width: 767px) {
  .desktop-delay :deep() {
    @apply !delay-[0s];
  }
}
</style>

<template>
  <div
    ref="container"
    class="transition duration-500"
    :class="{ 'opacity-0 translate-y-2.5': !visited && toggleOpacity, 'effect': trackCenter, 'active': isInCenter }"
    :style="{ 'transition-delay': delay + 'ms' }"
  >
    <slot></slot>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useElementBounding, useWindowSize } from "@vueuse/core";

export default {
  props: {
    delay: {
      type: Number,
      default: 0,
    },
    toggleOpacity: {
      type: Boolean,
      default: true,
    },
    // Adds .effect / .active classes when the element passes the window
    // center — used by list items that fade siblings in and out.
    trackCenter: {
      type: Boolean,
      default: false,
    },
  },
  async setup() {
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
    const isInWindowCenter = computed(() => {
      return (
        windowHeight.value / 2 - (height.value + 36) < y.value &&
        y.value < windowHeight.value / 2
      );
    });
    return {
      container,
      y,
      height,
      windowHeight,
      isVisible,
      isInWindowCenter,
    };
  },
  data() {
    return {
      visited: false,
      isInCenter: false,
    };
  },
  watch: {
    isVisible(value) {
      if (value) {
        this.visited = true;
      }
    },
    isInWindowCenter(value) {
      if (this.trackCenter) {
        this.isInCenter = value;
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.checkAfterMount();
    }, 200);
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

<style  scoped>
@reference "~/assets/css/main.css";

@media only screen and (max-width: 767px) {
  .desktop-delay :deep() {
    @apply !delay-[0s];
  }
}
</style>

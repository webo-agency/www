<template>
  <div
    ref="container"
    class="effect transition duration-500"
    :class="[{ 'opacity-0 translate-y-2.5': !visited && toggleOpacity },{'active':isInCenter}]"
    :style="{ 'transition-delay': delay + 'ms' }"
  >
    <slot></slot>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useElementBounding, useWindowSize } from "@vueuse/core";

export default {
  name: "EffectAppear",
  props: {
    toggleOpacity:{
      type:Boolean,
      default: true
    },
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
    const isVisible = computed(() => {
      return y.value < windowHeight.value - height.value * 0.5;
    });
    const isInCenter = computed(()=>{
      return windowHeight.value / 2 - (height.value + 36) < y.value &&
        y.value < windowHeight.value / 2;
    })
    return {
      isInCenter,
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
    this.$nextTick(() => {
      this.checkAfterMount();
    });
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

<style  lang="postcss" scoped>
@media only screen and (max-width: 767px) {
  .desktop-delay :deep() {
    @apply !delay-[0s];
  }
}
</style>

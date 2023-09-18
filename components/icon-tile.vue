<template>
  <div
    ref="container"
    class="tile max-w-md tablet-small:mr-[75px] mb-10 desktop:mb-16 group"
  >
    <div class="mb-2.5 w-[40px] h-[40px] desktop:w-[60px] desktop:h-[60px]">
      <nuxt-picture
        class="block shrink-0 w-full h-full overflow-hidden object-contain p-[2.5px] desktop:p-[5px] rounded-[5px] bg-green-light"
        v-if="data.iconUrl"
        :src="data.iconUrl"
        :imgAttrs="{class: 'w-full h-full object-contain'}"
      />
    </div>

    <div
      v-if="data.title"
      class="prose mb-5 max-w-sm text-lg desktop:text-xl font-semibold"
      v-html="$formatText(data.title)"
    ></div>
    <div
      v-if="data.description"
      class="prose mb-5 desktop:mb-[30px] leading-7 text-sm desktop:text-base font-normal"
      v-html="$formatText(data.description)"
    ></div>
    <div
      class="line relative w-[135px] h-0.5 rounded-full bg-gray-light overflow-hidden after:content-[''] after:absolute after:-top-0.5 after:right-full after:w-full after:h-2 after:bg-green-main tablet-small:after:translate-x-0 tablet-small:group-hover:after:translate-x-full after:transition after:duration-300"
      :class="{ active: focusActive }"
    ></div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useElementBounding, useWindowSize } from "@vueuse/core";

export default {
  name: "IconTile",
  props: {
    data: Object,
  },
  setup() {
    const container = ref(null);
    const { x, y, top, right, bottom, left, width, height } =
      useElementBounding(container);

    const windowHeight = useWindowSize().height;
    const windowWidth = useWindowSize().width;

    const focusActive = computed(() => {
      let tabletSmall = windowWidth.value >= 640;
      let isInCenter =
        windowHeight.value / 2 - (height.value + 36) < y.value &&
        y.value < windowHeight.value / 2;
      return isInCenter && !tabletSmall;
    });

    return {
      container,
      y,
      height,
      windowHeight,
      windowWidth,
      focusActive,
    };
  },
};
</script>

<style  lang="postcss" scoped>
.tile :deep(.line.active) {
  @apply after:translate-x-full;
}
</style>

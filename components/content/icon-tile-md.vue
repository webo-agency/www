<template>
  <li class="basis-full tablet-small:basis-1/2 desktop:basis-1/3">
    <EffectAppearMdc :delay="delay ? delay * 100 : 0">
      <div
        ref="container"
        class="tile max-w-md tablet-small:mr-[75px] mb-10 desktop:mb-16 group"
        :class="{ 'flex flex-wrap items-center': iconInline }"
      >
        <div
          class="w-[40px] h-[40px] desktop:w-[60px] desktop:h-[60px]"
          :class="iconInline ? 'shrink-0 mb-5 mr-5' : 'mb-2.5 '"
        >
          <nuxt-picture
            class="block shrink-0 w-full h-full overflow-hidden object-contain p-[5px] desktop:p-2.5 rounded-[5px] bg-green-light"
            v-if="iconUrl"
            :src="iconUrl"
            :imgAttrs="{ class: 'w-full h-full object-contain' }"
          />
        </div>

        <div
          v-if="$slots.title"
          class="max-w-sm text-lg desktop:text-xl font-semibold"
          :class="
            iconInline
              ? 'basis-[calc(100%_-_60px)] tablet:basis-[calc(100%_-_80px)] mb-5'
              : 'mb-5 '
          "
        >
          <ContentSlot :use="$slots.title" />
        </div>
        <div
          v-if="$slots.description"
          class="w-full mb-5 desktop:mb-[30px] leading-7 text-sm desktop:text-base font-normal"
        >
          <ContentSlot :use="$slots.description" />
        </div>
        <div
          v-if="line"
          class="line relative w-[135px] h-0.5 rounded-full bg-gray-light overflow-hidden"
          :class="{ active: focusActive }"
        ></div>
      </div>
    </EffectAppearMdc>
  </li>
</template>

<script>
import EffectAppearMdc from "./effect-appear-md.vue";
import { computed, ref } from "vue";
import { useElementBounding, useWindowSize } from "@vueuse/core";

export default {
  name: "IconTile",
  props: {
    delay: Number,
    iconUrl: String,
    iconInline: Boolean,
    line: {
      type: Boolean,
      default: true,
    },
  },
  components: { EffectAppearMdc },
  async setup() {
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

<style lang="postcss" scoped>
.tile :deep(.line::after) {
  content: "";
  @apply absolute -top-0.5 right-full w-full h-2 bg-green-main tablet-small:translate-x-0 transition duration-300;
}

.tile :deep(.line.active) {
  @apply after:translate-x-full;
}

.tile:hover .line::after {
  @apply tablet-small:translate-x-full;
}
</style>

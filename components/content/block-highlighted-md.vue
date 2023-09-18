<template>
  <div
    class="relative py-20 tablet:py-[120px] px-5 tablet:px-10 desktop:px-20 bg-gray-lighter overflow-hidden"
  >
    <nuxt-picture
      class="absolute mx-auto max-w-screen-desktop-wide inset-0 z-0 h-full w-full object-cover tablet:object-contain py-10 tablet:py-5"
      :src="'/img/dots_bg.png'"
    >
    </nuxt-picture>
    <EffectAppearMdc>
      <BlockHeaderMdc class="relative z-10" :maxWidth="880" :center="true">
        <template #title>
          <slot></slot>
        </template>
      </BlockHeaderMdc>
    </EffectAppearMdc>
  </div>
</template>

<script>
import EffectAppearMdc from "./effect-appear-md.vue";
import BlockHeaderMdc from "./block-header-md.vue";
export default {
  name: "BlockHighlightedMdc",
  components: { EffectAppearMdc, BlockHeaderMdc },
};
</script>

<style></style>

<template>
  <div
    class="relative py-20 tablet:py-[120px] px-5 tablet:px-10 desktop:px-20 bg-gray-lighter overflow-hidden"
  >
    <nuxt-picture
      class="absolute mx-auto max-w-screen-desktop-wide inset-0 z-0 h-full w-full object-cover tablet:object-contain py-10 tablet:py-5"
      :src="'/img/dots_bg.png'"
    >
    </nuxt-picture>
    <EffectAppear>
      <BlockHeader
        class="relative z-10"
        :title="title"
        :maxWidth="880"
        :center="true"
      />
    </EffectAppear>
  </div>
</template>

<script>
import EffectAppear from "./effect-appear.vue";
export default {
  name: "BlockHighlighted",
  props: {
    title: String,
  },
  components: { EffectAppear },
};
</script>

<style></style>

<template>
  <div class="">
    <EffectAppearMdc
      class="desktop-delay"
      :class="[tilesSmall ? 'h-[125px] tablet:h-[145px]' : 'h-[135px]']"
      :delay="delay * 100"
    >
      <div
        class="group h-full flex flex-col items-center justify-center text-gray-darker bg-green-light transition duration-200"
      >
        <nuxt-picture
          v-if="icon"
          class="shrink-0 w-20 mb-2"
          :class="[tilesSmall ? 'w-[60px] tablet:w-[80px]' : 'w-[100px]']"
          :src="icon"
          :alt="alt"
          loading="lazy"
        ></nuxt-picture>
        <div v-if="$slots.title" class="title max-w-fit font-semibold">
          <ContentSlot :use="$slots.title" />
        </div>
      </div>
    </EffectAppearMdc>
  </div>
</template>

<script>
import EffectAppearMdc from "./effect-appear-md.vue";
import CustomLink from "../custom-link.vue";
export default {
  name: "TechnologyTileMdc",
  props: {
    link: String,
    icon: String,
    alt: String,
    technologies: String,
    delay: {
      type: Number,
      default: 0,
    },
    tilesSmall: {
      type: Boolean,
      default: false,
    },
  },
  components: { EffectAppearMdc, CustomLink },
};
</script>

<style></style>

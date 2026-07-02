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
          <slot name="title" />
        </div>
      </div>
    </EffectAppearMdc>
  </div>
</template>

<script>
import EffectAppearMdc from "../Effect/Appear.vue";
import UiLink from "../Ui/Link.vue";
export default {
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
  components: { EffectAppearMdc, UiLink },
};
</script>

<style></style>

<template>
  <div
    class="w-full min-h-[330px] tablet:h-[555px] tablet:max-w-[455px] self-stretch mb-5"
  >
    <EffectAppearMdc class="desktop-delay h-full" :delay="delay * 100">
      <div
        class="group relative h-full flex flex-col justify-end text-gray-darker transition duration-200"
      >
        <nuxt-picture
          v-if="bgImage"
          class="shrink-0 w-full h-full absolute top-0 left-0 z-[-1] [&>img]:w-full [&>img]:h-full [&>img]:object-cover [&>img]:object-top before:content-[''] before:w-full before:h-1/2 before:absolute before:bottom-0 before:left-0 before:bg-gradient-to-t before:from-black before:to-none before:opacity-[85%] before:z-[0]"
          :src="bgImage"
        ></nuxt-picture>
        <div
          class="about-bar w-full mb-6 tablet:mb-12 px-10 tablet:px-12 py-4 bg-green-light"
        >
          <div
            v-if="$slots.title"
            class="title max-w-fit mb-1 text-xl desktop:text-2xl font-semibold"
            :class="[{ 'group-hover:underline': link }]"
          >
            <ContentSlot :use="$slots.title" />
          </div>
          <div class="description">
            <div v-if="$slots.description" class="">
              <ContentSlot :use="$slots.description" />
            </div>
          </div>
        </div>
      </div>
    </EffectAppearMdc>
  </div>
</template>

<script>
import EffectAppearMdc from "./effect-appear-md.vue";
import CustomLink from "../custom-link.vue";
export default {
  name: "OfferTileMdc",
  props: {
    link: String,
    bgImage: String,
    technologies: String,
    delay: {
      type: Number,
      default: 0,
    },
  },
  components: { EffectAppearMdc, CustomLink },
};
</script>

<style></style>

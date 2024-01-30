<template>
  <div class="self-stretch mb-5">
    <EffectAppearMdc class="desktop-delay h-full" :delay="delay * 100">
      <CustomLink :url="link ?? ''" :activeClass="'none'"
        class="group h-full p-5 pt-10 desktop-wide:px-10 tablet:pt-[60px] flex flex-col text-gray-darker bg-[#F3FEFC] transition duration-200 ">
        <nuxt-picture v-if="icon" class="shrink-0 w-20 h-[60px] mb-5 tablet:mb-9" :src="icon"></nuxt-picture>
        <div v-if="$slots.title"
          class="title max-w-fit mb-5 text-xl desktop:text-2xl font-semibold border-b-[1px] border-b-[#F3FEFC] transition duration-200"
          :class="[{ 'group-hover:underline': link, },
          ]">
          <ContentSlot :use="$slots.title" />
        </div>
        <div class="description mb-10 tablet:mb-[60px]">
          <div v-if="$slots.description" class="text-sm desktop:text-sm font-normal leading-normal">
            <ContentSlot :use="$slots.description" />
          </div>
          <nuxt-picture v-if="technologies" class="block min-w-[230px] h-[50px] mb-2 mt-5"
            :src="technologies"></nuxt-picture>
        </div>
        <div v-if="$slots.readMoreText"
          class="mt-auto border-t border-[#e4efeddd] pt-[20px] text-base text-gray-darker font-semibold flex justify-between transition duration-200"
          :class="{ 'group-hover:text-[#08DBBA]': link }">
          <ContentSlot :use="$slots.readMoreText" />
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="30" viewBox="0 0 23 30" fill="none">
            <path
              d="M15.0863 7.11133L13.7605 8.43713L19.3853 14.062H0V15.937H19.3852L13.7605 21.5617L15.0863 22.8875L22.9745 14.9994L15.0863 7.11133Z"
              fill="#202020" class="transition duration-200" :class="{ 'group-hover:fill-[#08DBBA]': link }" />
          </svg>
        </div>
      </CustomLink>
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
    icon: String,
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

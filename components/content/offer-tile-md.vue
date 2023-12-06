<template>
  <div class="offer-tile"
    :class="
      $slots.description || stylesMinimal
        ? 'basis-full tablet-small:basis-1/2 desktop-wide:basis-1/4'
        : 'basis-full tablet-small:basis-1/2'
    "
  >
    <EffectAppearMdc class="desktop-delay h-full" :delay="delay * 100">
      <div
        class="h-full tablet-small:pr-2.5 desktop:pr-5"
        :class="[stylesMinimal ? 'pb-2.5 desktop:pb-5' : 'pb-[15px] desktop:pb-[30px]']"
      >
        <div
          class="group h-full border-2 bg-white border-gray-light rounded-[5px] transition duration-200"
          :class="{'hover:border-green-main':link}"
        >
          <CustomLink
            :url="link"
            :activeClass="'none'"
            class="flex h-full text-gray-darker bg-no-repeat bg-right-bottom"
            :class="
              [$slots.description
                ? 'flex-col p-5 desktop:p-10 desktop:px-5 pt-6 desktop:pt-12'
                : '',
                stylesCustom ? 'flex-col items-center text-center' : '',
                stylesMinimal ? 'flex-col p-[30px] pt-7 desktop:pt-12' : 'p-5 desktop:px-10 desktop:pr-5']
            "
            :style="{
              'background-image': bgIcon ? `url(${bgIcon})` : 'none',
            }"
          >
            <nuxt-picture
              v-if="icon"
              class="shrink-0 w-fit"
              :class="{ 'mb-5': $slots.description || stylesMinimal },stylesCustom || iconBg ? 'p-2.5 rounded-md bg-green-light':'mr-10'"
              :imgAttrs="{ class: 'w-10 h-10 object-contain' + (stylesCustom || iconBg ? ' md:w-14 md:h-14':'') }"
              :src="icon ? icon : './icons/site.png'"
            ></nuxt-picture>
            <div
              v-if="$slots.title"
              class="max-w-sm text-lg desktop:text-xl font-semibold"
              :class="[{ 'mb-5': $slots.description },{'group-hover:underline':stylesMinimal}]"
            >
              <ContentSlot :use="$slots.title" />
            </div>
            <div
              v-if="$slots.description"
              class="flex flex-col justify-between h-full"
            >
              <div class="mb-5 text-sm desktop:text-base font-normal">
                <ContentSlot :use="$slots.description" />
              </div>
              <div v-if="!stylesCustom && !stylesMinimal" class="w-[135px] h-0.5 rounded-full bg-green-main"></div>
            </div>
          </CustomLink>
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
    icon: String,
    iconBg: {
      type: Boolean,
      default: false
    },
    bgIcon: String,
    delay: {
      type: Number,
      default: 0,
    },
    stylesCustom: Boolean,
    stylesMinimal: {
      type: Boolean,
      default: false
    }
  },
  components: { EffectAppearMdc, CustomLink },
};
</script>

<style></style>

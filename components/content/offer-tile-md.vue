<template>
  <div
    class="offer-tile"
    :class="
      $slots.description || stylesMinimal
        ? 'basis-full tablet-small:basis-1/2 desktop-wide:basis-1/3'
        : 'basis-full tablet-small:basis-1/2'
    "
  >
    <EffectAppearMdc class="desktop-delay h-full" :delay="delay * 100">
      <div
        class="h-full tablet-small:pr-2.5 desktop:px-5"
        :class="[
          stylesMinimal ? 'pb-2.5 desktop:pb-5' : 'pb-[15px] desktop:pb-[30px]',
        ]"
      >
        <div
          class="group h-full _bg_custom_color bg-[#F3FEFC] transition duration-200 relative before:contet-[''] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-black before:opacity-[0.02] before:z-[0]"
          :class="{ 'hover:border-green-main': link }"
        >
          <CustomLink
            :url="link"
            :activeClass="'none'"
            class="flex h-full text-gray-darker z-[1] relative"
            :class="[
              $slots.description
                ? 'flex-col p-5 desktop:p-10 desktop:px-10 pt-6 desktop:pt-[70px] desktop:pb-5'
                : '',
              stylesCustom ? 'flex-col items-center text-center' : '',
              stylesMinimal
                ? 'flex-col p-[30px] pt-7 desktop:pt-12'
                : 'p-5 desktop:px-10',
            ]"
          >
            <nuxt-picture
              v-if="icon"
              class="shrink-0 w-20 mb-5"
              :class="
                ({ 'mb-5': $slots.description || stylesMinimal },
                stylesCustom || iconBg
                  ? 'p-2.5 rounded-md bg-green-light'
                  : 'mr-10')
              "
              :imgAttrs="{
                class:
                  'w-20 h-[60px] object-contain' +
                  (stylesCustom || iconBg ? ' md:w-14 md:h-14' : ''),
              }"
              :src="icon ? icon : './icons/site.png'"
            ></nuxt-picture>
            <div
              v-if="$slots.title"
              class="max-w-fit mb-5 text-lg desktop:text-[25px] font-semibold border-b-[1px] border-b-[#F3FEFC] transition duration-200"
              :class="[
                { 'mb-5': $slots.description },
                { 'group-hover:underline': stylesMinimal },
                {
                  'group-hover:border-b-[1px] group-hover:border-b-[#202020]':
                    link,
                },
              ]"
            >
              <ContentSlot :use="$slots.title" />
            </div>
            <div
              v-if="$slots.description"
              class="flex flex-col justify-between h-full"
            >
              <div
                class="mb-5 text-sm desktop:text-sm font-normal leading-[21px]"
              >
                <ContentSlot :use="$slots.description" />
              </div>
              <nuxt-picture
                v-if="technologies"
                class="min-w-[230px] h-[50px] mb-20"
                :src="
                  technologies
                    ? technologies
                    : './icons/websites-technologies.png'
                "
              ></nuxt-picture>
              <div
                v-if="$slots.readMoreText"
                class="border-t-[1px] border-[#e4efeddd] pt-[30px] text-base text-gray-darker font-semibold flex justify-between transition duration-200"
                :class="{ 'group-hover:text-[#08DBBA]': link }"
              >
                <ContentSlot :use="$slots.readMoreText" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="30"
                  viewBox="0 0 23 30"
                  fill="none"
                >
                  <path
                    d="M15.0863 7.11133L13.7605 8.43713L19.3853 14.062H0V15.937H19.3852L13.7605 21.5617L15.0863 22.8875L22.9745 14.9994L15.0863 7.11133Z"
                    fill="#202020"
                    :class="{ 'group-hover:fill-[#08DBBA]': link }"
                  />
                </svg>
              </div>
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
    technologies: String,
    // readMoreText: String,
    iconBg: {
      type: Boolean,
      default: false,
    },
    bgIcon: String,
    delay: {
      type: Number,
      default: 0,
    },
    stylesCustom: Boolean,
    stylesMinimal: {
      type: Boolean,
      default: false,
    },
  },
  components: { EffectAppearMdc, CustomLink },
};
</script>

<style>
:root {
  --Base-Green-200: #f3fefc;
}
.bg_custom_color {
  background: var(
    --Base-Green-200,
    linear-gradient(0deg, rgba(0, 0, 0, 0.03) 0%, rgba(0, 0, 0, 0.03) 100%),
    #f3fefc
  );
}
</style>

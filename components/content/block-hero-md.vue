<template>
  <div ref="container" class="relative desktop:h-[890px] bg-black overflow-hidden -mt-[60px] desktop:-mt-[94px]">
    <HeroThreejsBg class="z-0" />

    <div class="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-black/10  to-black/80"></div>
    <div
      class="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-tr from-green-main/10 via-transparent to-transparent">
    </div>

    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
      class="hidden desktop:block absolute top-[42%] left-[2%] fullHd:left-[10%] z-[2]">
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M-0.00069046 14.7187C-0.00069046 17.6311 2.36471 20 5.27775 20L9.9977 19.9968L14.7173 20C17.6307 20 19.9961 17.6311 19.9961 14.7187V5.27815C19.9961 2.36894 17.6307 0 14.7176 0H5.27775C2.36471 0 -0.00069046 2.36894 -0.00069046 5.27815V14.7187ZM1.11599 14.7187V5.27815C1.11599 2.98275 2.98108 1.11892 5.27775 1.11892H14.7176C17.0143 1.11892 18.8791 2.98275 18.8791 5.27815V14.7187C18.8791 17.0173 17.0143 18.8811 14.7176 18.8811L9.9977 18.8779C9.99738 18.8779 5.27775 18.8811 5.27775 18.8811C2.98108 18.8811 1.11599 17.0173 1.11599 14.7187Z"
        fill="#08DBBA" fill-opacity="0.25" />
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"
      class="hidden desktop:block absolute top-[22%] left-[42%] z-[2]">
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M-0.00069046 14.7187C-0.00069046 17.6311 2.36471 20 5.27775 20L9.9977 19.9968L14.7173 20C17.6307 20 19.9961 17.6311 19.9961 14.7187V5.27815C19.9961 2.36894 17.6307 0 14.7176 0H5.27775C2.36471 0 -0.00069046 2.36894 -0.00069046 5.27815V14.7187ZM1.11599 14.7187V5.27815C1.11599 2.98275 2.98108 1.11892 5.27775 1.11892H14.7176C17.0143 1.11892 18.8791 2.98275 18.8791 5.27815V14.7187C18.8791 17.0173 17.0143 18.8811 14.7176 18.8811L9.9977 18.8779C9.99738 18.8779 5.27775 18.8811 5.27775 18.8811C2.98108 18.8811 1.11599 17.0173 1.11599 14.7187Z"
        fill="#07E7C4" />
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"
      class="hidden desktop:block absolute bottom-[21%] right-[45%] z-[2]">
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M-0.00069046 14.7187C-0.00069046 17.6311 2.36471 20 5.27775 20L9.9977 19.9968L14.7173 20C17.6307 20 19.9961 17.6311 19.9961 14.7187V5.27815C19.9961 2.36894 17.6307 0 14.7176 0H5.27775C2.36471 0 -0.00069046 2.36894 -0.00069046 5.27815V14.7187ZM1.11599 14.7187V5.27815C1.11599 2.98275 2.98108 1.11892 5.27775 1.11892H14.7176C17.0143 1.11892 18.8791 2.98275 18.8791 5.27815V14.7187C18.8791 17.0173 17.0143 18.8811 14.7176 18.8811L9.9977 18.8779C9.99738 18.8779 5.27775 18.8811 5.27775 18.8811C2.98108 18.8811 1.11599 17.0173 1.11599 14.7187Z"
        fill="#07E7C4" />
    </svg>

    <div class="relative z-10 flex flex-col h-full">
      <div class="flex-1 flex items-end px-5 tablet:px-10 desktop:px-20 pb-10 tablet-wide:pb-24">
        <div class="w-full mx-auto max-w-screen-desktop-wide">
          <EffectAppearMdc>
            <div class="pt-40 desktop:pt-0 mt-0 desktop:mt-[60px] transition duration-300">
              <p class="text-[14px] desktop:text-lg text-white">
                <em class="font-semibold text-green-main not-italic mr-1">-/</em>
                <ContentSlot :use="$slots.subtitle" unwrap="p" />
              </p>

              <div
                class="inline-block max-w-[970px] mb-6 desktop:mb-10 text-[28px] tablet:text-5xl desktop:text-[60px] leading-[40px] desktop:leading-[73px] font-semibold text-white">
                <ContentSlot :use="$slots.title" />
              </div>

              <div class="max-w-[750px] mb-8 desktop:mb-14 text-[18px] desktop:text-2xl font-normal text-white">
                <ContentSlot :use="$slots.description" />
              </div>

              <div class="flex justify-between flex-col desktop:flex-row gap-10">
                <div class="flex items-center gap-5">
                  <ButtonMain class="text-gray-darker" :link="button.link" :title="button.title" :isWide="true"
                    arrowIcon />
                  <div
                    class="hidden desktop:flex w-[60px] h-[60px] rounded-full border border-green-gray hover:border-green-main items-center justify-center cursor-pointer transition duration-300 group shrink-0"
                    role="button" aria-label="Scroll down" @click="scrollDown">
                    <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 0V18M1 12L7 18L13 12" stroke-width="1.5"
                        class=" stroke-green-gray group-hover:stroke-green-main transition duration-300" />
                    </svg>
                  </div>
                </div>

                <div class="z-[2] flex gap-[20px]">
                  <WidgetRatingClutch />
                  <WidgetRatingGoogle :rating="5"
                    :link="'https://www.google.com/search?q=webo+gliwice&sca_esv=581867933&ei=avdRZdPPHbCVxc8PqvGHwAM&ved=0ahUKEwjTrJKs38CCAxWwSvEDHar4ATgQ4dUDCBA&uact=5&oq=webo+gliwice&gs_lp=Egxnd3Mtd2l6LXNlcnAiDHdlYm8gZ2xpd2ljZTICECZIsdsJUPXHCVj1xwlwAngAkAEAmAFXoAFXqgEBMbgBA8gBAPgBAeIDBBgBIEGIBgE&sclient=gws-wiz-serp#lrd=0x471131b61b903edb:0xe16af5e90276dac,1,,,,'"
                    :text="'See all our reviews'" />
                </div>

              </div>
            </div>
          </EffectAppearMdc>

        </div>
      </div>

      <div v-if="logos && logos.length" class="relative z-20 tablet:px-10 desktop:px-20">
        <div
          class="flex flex-col tablet:flex-row tablet:items-center bg-gray-darker overflow-hidden mx-auto max-w-screen-desktop-wide">
          <span v-if="logosText" class="shrink-0 px-5 tablet:px-8 pt-4 tablet:pt-0 text-white text-base tablet:text-lg font-semibold whitespace-nowrap">
            {{ logosText }}
          </span>
          <div ref="heroSwiper" class="swiper swiper-container relative w-full overflow-hidden h-20 tablet:h-[97px] !py-4 tablet:!py-6">
            <div
              class="absolute top-0 left-0 w-7 h-full bg-gradient-to-r from-gray-darker to-transparent z-10 pointer-events-none">
            </div>
            <div
              class="absolute top-0 right-0 w-7 h-full bg-gradient-to-l from-gray-darker to-transparent z-10 pointer-events-none">
            </div>
            <div class="swiper-wrapper flex items-center h-full">
              <div v-for="(logo, i) in logos" :key="i"
                class="swiper-slide !w-auto max-w-[140px] tablet:max-w-[180px] flex items-center justify-center h-full">
                <nuxt-picture :src="logo.src" :alt="logo.alt"
                  class="h-full px-6 tablet:px-8 brightness-0 invert"
                  :imgAttrs="{class:'w-full h-full object-contain'}"
                  loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import EffectAppearMdc from "./effect-appear-md.vue";
import { Swiper, Autoplay, FreeMode } from "swiper";
import "swiper/css/bundle";

const props = defineProps({
  subtitle: { type: String, required: false },
  title: { type: String, required: false, default: "Title" },
  description: { type: String, required: false },
  button: {
    type: Object,
    required: false,
    default: () => ({ link: "/", title: "Click here" }),
  },
  googleRating: Number,
  googleRatingLink: String,
  googleRatingText: String,
  logosText: { type: String, required: false },
  logos: { type: Array, required: false },
});

const container = ref(null);
const heroSwiper = ref(null);
const visible = ref(false);

function scrollDown() {
  if (container.value) {
    window.scrollTo({
      top: container.value.clientHeight,
      behavior: "smooth",
    });
  }
}

onMounted(() => {
  visible.value = true;

  if (heroSwiper.value) {
    new Swiper(heroSwiper.value, {
      modules: [Autoplay, FreeMode],
      slidesPerView: "auto",
      spaceBetween: 0,
      direction: "horizontal",
      speed: 4000,
      loop: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      freeMode: {
        enabled: true,
        momentumBounceRatio: 0.8,
        momentumVelocityRatio: 0.5,
      },
    });
  }
});
</script>

<style></style>

<template>
  <div class="px-5 tablet:px-10 desktop:px-20 overflow-hidden">
    <div
      class="swiper-tabs relative w-full mx-auto max-w-screen-desktop desktop-wide:max-w-screen-desktop-wide rounded-[5px]"
    >
      <div class="w-full inset-0 absolute pointer-events-none z-30 ">
        <div
          class="pointer-events-auto cursor-pointer absolute hidden desktop:flex items-center justify-center top-[calc(50%_+_25px)] -left-16 w-[50px] h-[50px] rounded-[5px] bg-green-main hover:bg-green-mainHover transition duration-200"
          data-swiper-prev
        >
          <svg
            class="rotate-180"
            width="24"
            height="16"
            viewBox="0 0 24 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.6 0.111816L14.2742 1.43762L19.899 7.06244H0.513672V8.9375H19.8988L14.2742 14.5621L15.6 15.8879L23.4882 7.99988L15.6 0.111816Z"
              fill="white"
            />
          </svg>
        </div>
        <div
          class="pointer-events-auto cursor-pointer absolute hidden desktop:flex items-center justify-center top-[calc(50%_+_25px)]  right-7 w-[50px] h-[50px] rounded-[5px] bg-green-main hover:bg-green-mainHover transition duration-200"
          data-swiper-next
        >
          <svg
            width="24"
            height="16"
            viewBox="0 0 24 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.6 0.111816L14.2742 1.43762L19.899 7.06244H0.513672V8.9375H19.8988L14.2742 14.5621L15.6 15.8879L23.4882 7.99988L15.6 0.111816Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div
        class="relative desktop-wide:w-screen pr-5 tablet:pr-10 desktop:pr-20 -mr-5 tablet:-mr-10 desktop:-mr-20 desktop-wide:mr-0 h-full overflow-hidden"
      >
        <div
          class=" desktop:max-w-screen-desktop desktop-wide:max-w-screen-desktop-wide"
        >
          <div
            ref="swiperThumbs"
            class="swiper mb-10 tablet:mb-20"
          >
            <ul class="swiper-wrapper w-full">
              <li
                v-for="(item, index) in tabNames"
                :key="index"
                class="swiper-slide !w-auto !cursor-pointer"
              >
                <div
                  class="w-auto whitespace-nowrap px-4 py-2.5 tablet:px-5 tablet:py-4 text-gray-darker text-base font-semibold border-b-2 border-b-gray-default opacity-50 transition duration-300"
                >
                  <span class="text-green-main">{{ `0${index + 1}. ` }}</span
                  >{{ item }}
                </div>
              </li>
            </ul>
          </div>
          <div ref="swiper" class="swiper w-full h-full !overflow-visible">
            <div class="swiper-wrapper flex h-full">
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { useElementBounding, useWindowSize } from "@vueuse/core";
import { Swiper, Navigation, Thumbs, Controller, Parallax } from "swiper";
import "swiper/css/bundle";

export default {
  props: {
    tabNames: {
      type: Array,
    },
  },
  data() {
    return {
      swiperThumbs: null,
      swiperThumbsOptionsObject: {
        slidesPerView: "auto",
        modules: [Thumbs, Controller],
        direction: "horizontal",
        speed: 600,
        slideToClickedSlide: true,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
      },

      swiper: null,
    };
  },
  computed: {},
  mounted() {
    this.swiperThumbs = new Swiper(
      this.$refs.swiperThumbs,
      this.swiperThumbsOptionsObject
    );
    this.swiper = new Swiper(this.$refs.swiper, {
      modules: [Navigation, Thumbs, Controller, Parallax],
      slidesPerView: 1,
      direction: "horizontal",
      speed: 1000,
      watchSlidesProgress: true,
      thumbs: {
        swiper: this.swiperThumbs,
      },
      parallax: true,
      navigation: {
        nextEl: "[data-swiper-next]",
        prevEl: "[data-swiper-prev]",
      },
    });
    this.swiper.thumbs.init();
  },
  destroyed() {
    this.swiper.destroy(true, true);
    this.swiperThumbs.destroy(true, true);
  },
};
</script>

<style scoped>
.swiper-tabs:deep(.swiper-slide-thumb-active > div) {
  @apply !border-b-green-main !opacity-100;
}

.swiper-tabs:deep([data-swiper-next].swiper-button-disabled),
.swiper-tabs:deep([data-swiper-prev].swiper-button-disabled){
    @apply opacity-0
}
</style>

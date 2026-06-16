<template>
  <div>
    <div
      class="flex flex-col tablet:flex-row items-center justify-between w-full tablet:h-[100px] rounded-[5px] bg-white overflow-hidden shadow-xl shadow-[#424242]/5"
    >
      <span
        v-if="$slots.title"
        class="shrink-0 w-[241px] tablet:w-[300px] p-5 pb-0 tablet:pb-5 tablet:px-9 text-lg desktop:text-xl font-semibold"
      >
        <ContentSlot :use="$slots.title" />
      </span>
      <div ref="swiper" class="swiper swiper-container relative w-full h-full">
        <div
          class="absolute top-0 left-0 w-7 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"
        ></div>
        <div
          class="absolute top-0 right-0 w-7 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"
        ></div>

        <div class="swiper-wrapper flex items-center h-full py-5 tablet:py-0">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, Autoplay, FreeMode } from "swiper";
import "swiper/css/bundle";

export default {
  name: "BlockLogosSliderMdc",
  data() {
    return {
      swiper: null,
      swiperOptionsObject: {
        modules: [Autoplay, FreeMode],
        slidesPerView: "auto",
        spaceBetween: 0,
        direction: "horizontal",
        speed: 600,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        preloadImages: false,
        lazy: {
          loadPrevNext: true,
        },
        freeMode: {
          enabled: true,
          momentumBounceRatio: 0.8,
          momentumVelocityRatio: 0.5,
        },
      },
    };
  },
  mounted() {
    this.swiper = new Swiper(this.$refs.swiper, this.swiperOptionsObject);
  },
};
</script>

<style></style>

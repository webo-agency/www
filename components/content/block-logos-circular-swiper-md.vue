<template>
  <div>
    <div
      class="flex flex-col tablet:flex-row items-center justify-between w-full tablet:h-[100px]overflow-hidden"
    >
      <div ref="swiper" class="swiper swiper-container relative w-full h-full">
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
  name: "BlockCircularLogosSliderMdc",
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

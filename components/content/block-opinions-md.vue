<template>
  <div class="px-5 tablet:px-10 desktop:px-20 overflow-hidden">
    <div
      class="relative w-full mx-auto max-w-screen-desktop-wide rounded-[5px]"
    >
      <div
        class="relative desktop-wide:w-screen pr-5 tablet:pr-10 desktop:pr-20 -mr-5 tablet:-mr-10 desktop:-mr-20 desktop-wide:mr-0 h-full overflow-hidden"
      >
        <div class="max-w-screen-desktop-wide">
          <div
            ref="swiper"
            class="swiper swiper-container w-full h-full !overflow-visible"
          >
            <div class="swiper-wrapper flex h-full">
              <slot> </slot>
            </div>
            <div class="swiper-pagination !relative mt-20"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, Autoplay, Pagination } from "swiper";
import "swiper/css/bundle";

export default {
  name: "BlockOpinionsMdc",

  data() {
    return {
      swiper: null,
      swiperOptionsObject: {
        modules: [Autoplay, Pagination],
        slidesPerView: "auto",
        slidesPerGroupAuto: false,
        spaceBetween: 0,
        direction: "horizontal",
        loop: true,
        pagination: {
          dynamicBullets: true,
          el: ".swiper-pagination",
          clickable: true,
        },

        speed: 600,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        preloadImages: false,
        lazy: {
          loadPrevNext: true,
        },
      },
    };
  },
  mounted() {
    this.swiper = new Swiper(this.$refs.swiper, this.swiperOptionsObject);
  },
};
</script>

<style lang="postcss" scoped>
.swiper-pagination :deep(.swiper-pagination-bullet) {
  @apply w-[25px] h-[5px] rounded-[5px] opacity-100 bg-gray-default
    transition duration-200 mx-[5px];
}
.swiper-pagination
  :deep(.swiper-pagination-bullet.swiper-pagination-bullet-active) {
  @apply bg-green-main;
}
</style>

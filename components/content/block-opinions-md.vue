<template>
  <div class="px-5 tablet:px-10 desktop:px-0 overflow-hidden">
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
            <div
              class="swiper-navigation w-full hidden desktop:flex gap-5 justify-between absolute bottom-[240px] z-[2] pointer-events-none"
            >
              <div
                class="hidden pointer-events-auto ml-12 cursor-pointer desktop:flex items-center justify-center w-[120px] h-[120px] rounded-full bg-green-main transition duration-200"
                data-swiper-prev-opinions
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="16"
                  viewBox="0 0 24 16"
                  fill="none"
                  class="rotate-180"
                >
                  <path
                    d="M15.6 0.111328L14.2742 1.43713L19.899 7.06195H0.513672V8.93701H19.8988L14.2742 14.5617L15.6 15.8875L23.4882 7.99939L15.6 0.111328Z"
                    fill="#202020"
                  ></path>
                </svg>
              </div>
              <div
                class="pointer-events-auto mr-24 cursor-pointer desktop:flex items-center justify-center w-[120px] h-[120px] rounded-full bg-green-main transition duration-200"
                data-swiper-next-opinions
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="16"
                  viewBox="0 0 24 16"
                  fill="none"
                >
                  <path
                    d="M15.6 0.111328L14.2742 1.43713L19.899 7.06195H0.513672V8.93701H19.8988L14.2742 14.5617L15.6 15.8875L23.4882 7.99939L15.6 0.111328Z"
                    fill="#202020"
                  ></path>
                </svg>
              </div>
            </div>
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
import { Swiper, Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css/bundle";

export default {
  name: "BlockOpinionsMdc",

  data() {
    return {
      swiper: null,
      swiperOptionsObject: {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: "auto",
        slidesPerGroupAuto: false,
        spaceBetween: 0,
        direction: "horizontal",
        loop: true,
        grabCursor: true,
        pagination: {
          dynamicBullets: true,
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: "[data-swiper-next-opinions]",
          prevEl: "[data-swiper-prev-opinions]",
        },
        speed: 600,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        preloadImages: false,
        lazy: {
          loadPrevNext: true,
        },
        breakpoints: {
          1248: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
        },
      },
    };
  },
  mounted() {
    this.swiper = new Swiper(this.$refs.swiper, this.swiperOptionsObject);
  },
};
</script>

<style scoped>
.swiper-pagination :deep(.swiper-pagination-bullet) {
  @apply w-[25px] h-[5px] rounded-[5px] opacity-100 bg-gray-default
    transition duration-200 mx-[5px];
}
.swiper-pagination
  :deep(.swiper-pagination-bullet.swiper-pagination-bullet-active) {
  @apply bg-green-main;
}
[data-swiper-prev-opinions].swiper-button-disabled,
[data-swiper-next-opinions].swiper-button-disabled {
  @apply pointer-events-none opacity-0;
}
[data-swiper-prev-opinions] {
  @apply pointer-events-none opacity-0;
}
</style>

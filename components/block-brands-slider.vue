<template>
  <div class="px-5 tablet:px-10 desktop:px-20 overflow-hidden">
    <div class="relative w-full mx-auto max-w-screen-desktop-wide rounded-[5px]">
      <div class="relative desktop-wide:w-screen pr-5 tablet:pr-10 desktop:pr-20 -mr-5 tablet:-mr-10 desktop:-mr-20 desktop-wide:mr-0 h-full overflow-hidden">
        <div class="max-w-screen-desktop-wide">
          <div
          ref="swiper"
           class="swiper swiper-container !overflow-visible">
            <div
              class="swiper-wrapper items-center"
            >
              <div v-for="(logo, index) in logos" :key="index" class="swiper-slide shrink-0 flex-grow-0 !w-1/2 phone-wide:!w-auto px-5 tablet:px-6 tablet-wide:px-10">
                <CustomLink
                  class="group block h-10 phone:h-12 tablet:h-16 filter hover:filter-[opacity(1)]"
                  :url="logo.link ? logo.link : ''"
                >
                  <nuxt-picture
                    v-if="logo.imgUrl"
                    class="h-full flex justify-center opacity-30 group-hover:opacity-100 filter blur-0 brightness-100 contrast-100 grayscale-0 hue-rotate-0 invert-0 sepia-0 saturate-0 drop-shadow-none group-hover:saturate-100 object-contain transition-all duration-[400ms]"
                    :src="logo.imgUrl"
                    :title="logo.title ? logo.title : ''"
                    :alt="logo.alt ? logo.alt : 'Brand logo'"
                    :imgAttrs="{class: 'w-full phone-wide:w-auto h-full object-contain custom-filter duration-300 max-w-[200px]'}"
                  />
                </CustomLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, Autoplay } from "swiper";
import "swiper/css/bundle";

import CustomLink from "./custom-link.vue";
export default {
  name: "BlockBrandsSlider",
  props: {
    logos: Array,
  },
  components: { CustomLink },
  data() {
    return {
      swiper: null,
      swiperOptionsObject: {
        modules: [Autoplay],
        slidesPerView: "auto",
        spaceBetween: 0,
        direction: "horizontal",
        loop: true,
        speed: 1500,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
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

<style></style>

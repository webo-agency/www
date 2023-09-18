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
            class="swiper swiper-container case-swiper w-full h-full !overflow-visible"
          >
            <div class="swiper-wrapper flex h-full">
              <div
                class="swiper-slide flex flex-col w-full basis-full tablet:basis-1/2 shrink-0 mr-[30px] tablet:mr-0 tablet:pr-[30px] desktop:pr-5"
                v-for="(item, index) in slides"
                :key="index"
              >
                <div class="group">
                  <CustomLink
                    class="hover:text-green-main flex flex-col w-full"
                    :activeClass="'none'"
                    :url="item.url"
                  >
                    <nuxt-picture
                      class="flex items-end aspect-[4/3] desktop:aspect-auto desktop:h-[400px] w-full mb-5 desktop:mb-10 rounded-[5px] overflow-hidden"
                      v-if="item.image && item.image.url"
                      :src="item.image.url"
                      :title="item.image.title ? item.image.title : ''"
                      :alt="
                        item.image.alt ? item.image.alt : 'Case study image'
                      "
                      :imgAttrs="{
                        class:
                          'h-auto w-full group-hover:scale-[103%] transition-all duration-500',
                      }"
                    ></nuxt-picture>
                    <span
                      v-if="item.title"
                      class="prose mr-2.5 tablet:mr-5 desktop:mr-14 mb-5 text-xl leading-7 desktop:text-2xl font-semibold transition duration-300"
                      v-html="$formatText(item.title)"
                    ></span>
                  </CustomLink>
                  <div
                    v-if="item.description"
                    class="prose mr-2.5 tablet:mr-10 desktop:mr-[100px] text-sm leading-7 desktop:text-lg"
                    v-html="$formatText(item.description)"
                  ></div>
                  <div
                    class="line relative w-[135px] tablet-wide:w-[300px] h-0.5 mt-5 desktop:mt-10 rounded-full bg-gray-light overflow-hidden after:content-[''] after:absolute after:-top-0.5 after:right-full after:w-full after:h-2 after:bg-green-main group-hover:after:translate-x-full after:transition after:duration-300"
                  ></div>
                </div>
              </div>
            </div>
            <div
              class="block swiper-pagination !relative mt-10 desktop:mt-20"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, Autoplay, Pagination } from "swiper";
import "swiper/css/bundle";
import CustomLink from "./custom-link.vue";

export default {
  name: "BlockCasesSlider",
  props: {
    slides: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      swiper: null,
      swiperOptionsObject: {
        modules: [Autoplay, Pagination],
        slidesPerView: "auto",
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
  destroyed() {
    this.swiper.destroy(true,true);
  },
  components: { CustomLink },
};
</script>

<style  lang="postcss" scoped>
.swiper-pagination :deep(.swiper-pagination-bullet) {
  @apply w-[25px] h-[5px] rounded-[5px] opacity-100 bg-gray-default transition duration-200 mx-[5px];
}
.swiper-pagination
  :deep(.swiper-pagination-bullet.swiper-pagination-bullet-active) {
  @apply bg-green-main;
}

.case-swiper :deep(.swiper-slide-active .line) {
  @apply after:translate-x-full;
}
</style>

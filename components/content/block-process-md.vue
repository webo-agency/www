<template>
  <div
    class="pl-5 tablet:pl-10 desktop:pl-20 desktop-wide:px-20 overflow-hidden"
  >
    <div
      class="relative w-full mx-auto max-w-screen-desktop-wide rounded-[5px]"
    >
      <div class="relative w-full h-full overflow-hidden">
        <div
          class="pr-1 tablet:pr-10 desktop:pr-20 desktop-wide:pr-0 max-w-screen-desktop-wide"
        >
          <div
            ref="swiper"
            class="swiper swiper-container process-swiper relative w-full h-full mb-6 !overflow-visible"
          >
            <div class="swiper-wrapper flex !w-full h-full"
            :class="{'flex-wrap [&_.swiper-slide]:basis-full md:[&_.swiper-slide]:!basis-1/2 ':disableSwiper}">
              <slot> </slot>
            </div>
            <div v-if="decoration" class="hidden desktop:block absolute -bottom-6 right-0">
              <svg
                width="96"
                height="128"
                viewBox="0 0 96 128"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.6677 0.0102295L19.659 0.0156311H19.6509L19.6412 0.0210328C19.5634 0.037241 19.4894 0.0750363 19.4256 0.134467L19.4181 0.139899L19.4078 0.150702L19.3976 0.156104L0.158325 19.4008L0.149124 19.4062L0.138336 19.4169L0.130219 19.4277L0.121582 19.4385L0.116699 19.4439C0.0718563 19.5034 0.039982 19.5629 0.0210724 19.6331L0.0189362 19.6385L0.0157013 19.6493L0.0146027 19.6601C0.0119013 19.6709 0.0097385 19.6762 0.00811768 19.687C0.00325519 19.7194 0 19.752 0 19.779V107.066C0 107.287 0.134017 107.482 0.338242 107.568L45.36 125.759C53.851 129.185 61.5386 128.256 67.1088 124.025C71.4418 120.74 74.4997 115.435 75.6343 108.584C87.1314 108.065 95.3598 98.4215 95.3598 83.229V30.86C95.3598 30.6385 95.2247 30.4385 95.0194 30.3575L19.9886 0.0426697C19.9664 0.0318642 19.9432 0.0264355 19.92 0.0210328L19.9086 0.0156311H19.9027L19.893 0.0102295C19.8184 -0.00597874 19.7417 -0.000575983 19.6677 0.0102295ZM19.484 28.0182L1.08057 20.584V106.704L45.7652 124.755C53.8407 128.018 61.1603 127.191 66.455 123.166C71.7767 119.13 75.04 111.901 75.04 102.468V50.4613L19.679 28.0938C19.6082 28.083 19.5424 28.056 19.484 28.0182ZM94.2792 32.1729L76.1206 50.3208V102.468C76.1206 104.219 76.0071 105.899 75.7964 107.498C86.6506 106.888 94.2792 97.6219 94.2792 83.229V32.1729ZM20.3203 27.1915L75.4506 49.4617L93.8686 31.0544L20.3203 1.33927V27.1915ZM1.49982 19.5844L19.2398 26.7539V1.84724L1.49982 19.5844Z"
                  fill="#07E7C4"
                />
              </svg>
            </div>
          </div>
          <EffectAppearMdc>
            <CustomLink
              v-if="button"
              class="flex items-center w-max mx-auto text-base text-green-main hover:text-green-mainHover font-semibold transition duration-200"
              active-class=""
              :url="button.link ? button.link : '/'"
            >
              <span
                v-if="button.title"
                class="prose mr-2.5"
                v-html="button.title"
              ></span>
              <svg
                class="inline text-current fill-current"
                width="23"
                height="16"
                viewBox="0 0 23 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.0863 0.111816L13.7605 1.43762L19.3853 7.06244H0V8.9375H19.3852L13.7605 14.5621L15.0863 15.8879L22.9745 7.99988L15.0863 0.111816Z"
                />
              </svg>
            </CustomLink>
          </EffectAppearMdc>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, Grid } from "swiper";
import "swiper/css/bundle";

import EffectAppearMdc from "./effect-appear-md.vue";
import CustomLink from "../custom-link.vue";

export default {
  name: "BlockProcess",
  props: {
    button: {
      type: Object,
      required: false,
    },
    decoration: {
      type: Boolean,
      default: true,
    },
    disableSwiper: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      swiper: null,
      swiperOptionsObject: {
        modules: [Grid],
        slidesPerView: "auto",
        slidesPerGroupAuto: false,
        spaceBetween: 0,
        direction: "horizontal",
        speed: 600,
        preloadImages: false,
        lazy: {
          loadPrevNext: true,
        },
        breakpoints: {
          1248: {
            slidesPerView: 3,
            grid: {
              fill: "row",
              rows: 2,
            },
          },
        },
      },
    };
  },
  mounted() {
    if (!this.disableSwiper) {   
      this.swiper = new Swiper(this.$refs.swiper, this.swiperOptionsObject);
    }
  },
  components: { EffectAppearMdc, CustomLink },
};
</script>

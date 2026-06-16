<template>
  <div
    class="swiper-slide flex flex-col w-full shrink-0 group pr-5 basis-4/5 tablet:basis-1/3 last:!basis-full [&_.arrow]:last:!hidden">
    <div class="icon mb-5 opacity-10 transition duration-300">
      <nuxt-picture
        v-if="icon"
        class="shrink-0 h-10 w-10 tablet:h-[60px] tablet:w-[60px] "
        :imgAttrs="{ class: 'h-10 w-10 tablet:h-[60px] tablet:w-[60px] object-contain'}"
        :src="icon"
      ></nuxt-picture>
    </div>
    <div class="flex items-center mb-5 pr-5">
      <div class="circle shrink-0 flex items-center justify-center w-10 h-10 rounded-full border-2 border-solid border-[#08DBBA] opacity-10 transition duration-300">
        <div class="circle-inner w-5 h-5 rounded-full bg-green-main transition-all duration-500"></div>
      </div>
      <div class="flex justify-end overflow-hidden max-w-[390px]">
        <svg class="arrow opacity-10 min-w-[390px] transition duration-300" xmlns="http://www.w3.org/2000/svg" width="391" height="16" viewBox="0 0 391 16" fill="none">
          <path d="M0.5 8H389M389 8L382 1M389 8L382 15" stroke="#08DBBA"  stroke-width="2"/>
        </svg>
      </div>

    </div>
    <div class="pr-5 tablet:pr-10 max-w-sm">
      <div
          v-if="$slots.title"
          class="title text-lg desktop:text-xl font-semibold mb-[30px]"
        >
          <ContentSlot :use="$slots.title" />
        </div>
        <div
          v-if="$slots.description"
          class="text-sm desktop:text-base font-normal"
        >
          <ContentSlot :use="$slots.description" />
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
  props: {
    hoverEffect: {
      type: Boolean,
      default: true
    },
    isWideType: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
    },
  },
};
</script>

<style  lang="postcss" scoped>

  .swiper-slide-active.group .title {
    @apply underline;
  }
  .swiper-slide-active .icon,
  .swiper-slide-active .circle,
  .swiper-slide-active .arrow{
    @apply opacity-100;
  }
  .swiper-slide .circle-inner {
    transform: scale(0);
  }
  .swiper-slide-active .circle-inner {
    transform: scale(1) !important;
  }

</style>

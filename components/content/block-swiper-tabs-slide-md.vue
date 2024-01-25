<template>
  <div
    class="swiper-slide tabs-slide bg-[#ECF6F4] flex flex-col justify-between min-h-[460px] shrink-0 tablet:pr-10 p-[30px_20px] desktop:p-10 desktop:pb-[20px] !transition !duration-200"
  >
    <div class="text-gray-darker">
      <div
        class="relative z-20 shrink-0 grow basis-full tablet-wide:basis-[55%] flex flex-col tablet-wide:pr-10 desktop-wide:pr-20"
      >
        <nuxt-picture v-if="icon" :src="icon" class="mb-5" />
        <slot name="slideContent"> </slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    number: String,
    icon: String,
  },
};
</script>
<style scoped>
.tabs-slide:deep(p),
.tabs-slide:deep(li) {
  @apply !text-sm tablet:!text-base mb-4;
}

.tabs-slide:deep(li::before) {
  @apply content-[''] block w-2 h-0.5 bg-green-main mr-2.5 mb-1.5 shrink-0;
}

.tabs-slide:deep(li) {
  @apply flex items-center;
}
.tabs-slide:deep(h5) {
  @apply font-semibold text-xl tablet:text-2xl mb-4;
}
.swiper-slide.swiper-slide-prev,
.swiper-slide {
  @apply opacity-30;
}

.swiper-slide.swiper-slide-active {
  @apply opacity-100;
}
.swiper-slide.swiper-slide-next {
  @apply opacity-30;
}
</style>

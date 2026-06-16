<template>
  <div
    class="swiper-slide !h-auto !transition !duration-200">
      <div class="relative h-full flex flex-col text-gray-darker bg-[#ECF6F4] tablet:pr-10 py-[30px] px-5 desktop:p-10 desktop:pb-[20px]">
        <nuxt-picture v-if="icon" :src="icon" class="mb-5" />
        <slot></slot>
      </div>
  </div>
</template>
<script>
export default {
  props: {
    icon: String,
  },
};
</script>
<style scoped>
:deep(p),
:deep(li) {
  @apply !text-sm tablet:!text-base mb-4;
}

:deep(li::before) {
  @apply content-[''] block w-2 h-0.5 bg-green-main mr-2.5 mb-1.5 shrink-0;
}

:deep(li) {
  @apply flex items-center font-normal;
}

:deep(.title) {
  @apply font-semibold !text-xl tablet:!text-2xl !mb-5;
}

.swiper-slide.swiper-slide-active :deep(.title){
  @apply underline
}

:deep(p) {
  @apply font-normal;
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
}</style>

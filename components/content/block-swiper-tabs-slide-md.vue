<template>
  <div
    class="swiper-slide tabs-slide h-auto tablet-wide:!h-[660px] bg-[#ECF6F4] tablet:pr-10 p-[30px_20px] desktop:p-10 desktop:pb-[20px] !transition !duration-200"
  >
    <div class="flex flex-wrap text-gray-darker">
      <div class="relative flex flex-col">
        <nuxt-picture v-if="icon" :src="icon" class="mb-5" />
        <slot name="left"></slot>
      </div>
      <div class="relative">
        <slot name="right"></slot>
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
  @apply flex items-center font-normal;
}
.tabs-slide:deep(h5) {
  @apply font-semibold text-xl tablet:text-2xl mb-4;
}
.tabs-slide:deep(p) {
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
}
</style>

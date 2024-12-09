<template>
  <div
    class="swiper-slide bg-green-gray flex flex-col justify-between min-h-[460px] shrink-0 tablet:pr-10 p-[30px_20px] desktop:p-[60px_40px] !transition !duration-200">
    <div v-if="$slots.message" class="prose leading-7 text-sm tablet:text-base">
      <ContentSlot :use="$slots.message" />
      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="50" viewBox="0 0 70 50" fill="none" class="mt-5">
        <rect width="70" height="50" rx="25" fill="#F3FEFC" />
        <rect width="70" height="50" rx="25" fill="black" fill-opacity="0.06" />
        <path
          d="M49.6664 25.1872C49.6664 24.2069 49.5686 23.1949 49.4056 22.2461H35.2891V27.8438H43.3743C43.0483 29.6464 41.9724 31.2277 40.3749 32.2397L45.2 35.8766C48.0363 33.3149 49.6664 29.5832 49.6664 25.1872Z"
          fill="#202020" />
        <path
          d="M35.2905 39.3537C39.3331 39.3537 42.7237 38.0571 45.2014 35.8433L40.3764 32.238C39.0397 33.1235 37.3118 33.6295 35.2905 33.6295C31.3783 33.6295 28.0855 31.0679 26.8793 27.6523L21.9238 31.3525C24.4668 36.2544 29.6178 39.3537 35.2905 39.3537Z"
          fill="#202020" />
        <path
          d="M26.8788 27.6221C26.2593 25.8194 26.2593 23.8586 26.8788 22.056L21.9233 18.3242C19.8042 22.4355 19.8042 27.2742 21.9233 31.3538L26.8788 27.6221Z"
          fill="#202020" />
        <path
          d="M35.2905 16.0786C37.4096 16.047 39.4961 16.8376 41.0284 18.2608L45.2992 14.0862C42.5933 11.6195 39.0071 10.2912 35.2905 10.3228C29.6178 10.3228 24.4668 13.4221 21.9238 18.324L26.8793 22.0558C28.0855 18.6086 31.3783 16.0786 35.2905 16.0786Z"
          fill="#202020" />
      </svg>
    </div>

    <div class="relative flex flex-row gap-5 items-center">
      <div class="w-[50px] h-[50px] desktop:w-[70px] desktop:h-[70px] rounded-full overflow-hidden">
        <nuxt-picture :src="'/img/icons/person.png'"
          class="block w-full h-full object-contain p-0.5 desktop:p-1 overflow-hidden rounded-[5px] bg-gray-light"
          :imgAttrs="{ class: 'h-full w-full object-contain ' }"
          alt="person icon"
          loading="lazy" />
      </div>
      <div class="relative flex flex-col min-h-[82px]">
        <div v-if="$slots.author" class="prose text-xl desktop:text-2xl font-semibold mb-[5px]">
          <ContentSlot :use="$slots.author" />
        </div>
        <div v-if="$slots.title" class="prose leading-5 text-xs uppercase">
          <ContentSlot :use="$slots.title" />
        </div>

        <div class="flex gap-[6px] mt-4 w-max">
          <div v-for="index in 5" :key="index" class="relative overflow-hidden">
            <svg width="21" height="20" viewBox="0 0 21 20" xmlns="http://www.w3.org/2000/svg" fill="#06CEAF">
              <path
                d="M20.2117 7.04256L13.9503 6.1301L11.1512 0.440169C11.0748 0.284382 10.949 0.158269 10.7936 0.0816118C10.404 -0.111267 9.93051 0.0494653 9.73568 0.440169L6.93665 6.1301L0.675183 7.04256C0.502555 7.06729 0.344724 7.14889 0.223885 7.27253C0.0777962 7.4231 -0.0027051 7.62565 6.9411e-05 7.8357C0.00284392 8.04574 0.0886673 8.24609 0.238681 8.39272L4.76893 12.8215L3.69864 19.0752C3.67354 19.2207 3.68959 19.3703 3.74498 19.5071C3.80037 19.6439 3.89287 19.7624 4.012 19.8492C4.13113 19.9359 4.27213 19.9875 4.41899 19.998C4.56585 20.0085 4.71271 19.9775 4.84292 19.9086L10.4435 16.956L16.044 19.9086C16.1969 19.9902 16.3745 20.0174 16.5446 19.9877C16.9737 19.9135 17.2623 19.5055 17.1883 19.0752L16.118 12.8215L20.6482 8.39272C20.7715 8.27155 20.8529 8.11329 20.8776 7.94019C20.9442 7.50745 20.6433 7.10686 20.2117 7.04256Z" />
            </svg>
            <div class="absolute top-0 left-full h-6 w-full backdrop-grayscale" :style="{
              transform:
                'translateX(' +
                ((rating - index) * 100 < -100
                  ? -100
                  : (rating - index) * 100) +
                '%)',
            }"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Opinion",
  props: {
    rating: Number,
  },
};
</script>

<style scoped>
.swiper-slide.swiper-slide-prev,
.swiper-slide {
  @apply opacity-30;
}

.swiper-slide.swiper-slide-active,
.swiper-slide.swiper-slide-next {
  @apply opacity-100;
}
</style>

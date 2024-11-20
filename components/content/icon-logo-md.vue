<template>
  <div
    class="swiper-slide basis-16 shrink-0 px-2.5 tablet:px-5 desktop:px-[35px] box-content"
  >
    <div class="flex flex-col items-center justify-center group h-full">
      <nuxt-picture
          class="px-[5px] h-[40px] tablet:h-[50px] filter blur-0 brightness-100 contrast-100 grayscale-0 hue-rotate-0 invert-0 sepia-0 saturate-0 drop-shadow-none group-hover:saturate-100 object-contain transition duration-200"
          v-if="imgUrl"
          :src="imgUrl"
          :title="imgTitle ? imgTitle : ''"
          :alt="imgAlt ? imgAlt : 'Logo'"
          :imgAttrs="{class: 'h-[40px] tablet:h-[50px] object-contain'}"
          loading="lazy"
        ></nuxt-picture>
        <p class="text-gray-dark text-xs tablet:text-sm mt-1.5 group-hover:text-green-main transition duration-200">{{ title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: String,
    imgTitle: String,
    imgAlt: String,
    title: String,
  },
};
</script>

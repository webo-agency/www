<template>
  <div
    class="swiper-slide basis-16 shrink-0 px-2.5 tablet:px-5 desktop:px-[35px] self-start flex flex-col items-center"
  >
    <div class="border border-white w-20 h-20 tablet:w-[130px] tablet:h-[130px] aspect-square p-2 tablet:p-[15px] rounded-full transition-all duration-300 hover:p-1 tablet:hover:p-2.5 mb-2">
      <div class="w-full h-full bg-white p-2 tablet:p-5 rounded-full">
        <nuxt-picture
          class="w-full h-full block object-contain transition duration-200"
          v-if="iconUrl"
          :src="iconUrl"
          :title="title ? title : ''"
          :alt="alt ? alt : 'Client Logo'"
          :imgAttrs="{
                        class:
                          '!h-full !w-full object-contain',
                      }"
        ></nuxt-picture>
      </div>
    </div>
    <p v-if="title" class="text-center font-semibold">{{title}}</p>
  </div>
</template>

<script>
export default {
  props: {
    iconUrl: String,
    title: String,
    alt: String,
  },
};
</script>

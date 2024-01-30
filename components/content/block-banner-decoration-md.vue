<template>
  <div ref="container"
    class="relative w-full h-[550px] tablet-wide:h-[600px] -mt-[100px] desktop:h-[620px] hidden tablet:block">
    <div v-if="svgUrl_tl" class="absolute left-[10%] top-[25%]" :style="{ transform: `rotate(${rotate_tl ?? 0}deg)` }">
      <nuxt-picture :src="svgUrl_tl"> </nuxt-picture>
    </div>
    <div v-if="svgUrl_tr" class="absolute right-[20%] top-[25%]" :style="{ transform: `rotate(${rotate_tr ?? 0}deg)` }">
      <nuxt-picture :src="svgUrl_tr"> </nuxt-picture>
    </div>
    <div v-if="svgUrl_br" class="absolute right-[20%] bottom-[10%]" :style="{ transform: `rotate(${rotate_br ?? 0}deg)` }">
      <nuxt-picture :src="svgUrl_br"> </nuxt-picture>
    </div>
    <div v-if="svgUrl_bl" class="absolute left-[10%] bottom-[10%]" :style="{ transform: `rotate(${rotate_bl ?? 0}deg)` }">
      <nuxt-picture :src="svgUrl_bl"> </nuxt-picture>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    svgUrl_tl: String,
    svgUrl_tr: String,
    svgUrl_br: String,
    svgUrl_bl: String,
    rotate_tl: Number,
    rotate_tr: Number,
    rotate_br: Number,
    rotate_bl: Number,
  },
};
</script>

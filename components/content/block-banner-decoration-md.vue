<template>
  <div
    ref="container"
    class="relative w-full h-[550px] tablet-wide:h-[600px] -mt-[100px] desktop:h-[620px] hidden tablet:block"
  >
    <div
      class="absolute left-[10%] bottom-[10%]"
      :style="{ transform: `rotate(${rotate1 ?? 0}deg)` }"
    >
      <nuxt-picture :src="svgUrl1"> </nuxt-picture>
    </div>
    <div
      class="absolute right-[20%] top-[25%]"
      :style="{ transform: `rotate(${rotate2 ?? 0}deg)` }"
    >
      <nuxt-picture :src="svgUrl2"> </nuxt-picture>
    </div>
    <div
      v-if="svgUrl3"
      class="absolute left-[50%] top-[50%]"
      :style="{ transform: `rotate(${rotate3 ?? 0}deg)` }"
    >
      <nuxt-picture :src="svgUrl3"> </nuxt-picture>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    svgUrl1: String,
    svgUrl2: String,
    svgUrl3: String,
    rotate1: Number,
    rotate2: Number,
    rotate3: Number,
  },
};
</script>

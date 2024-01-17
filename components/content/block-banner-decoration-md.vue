<template>
  <div
    ref="container"
    class="relative w-full h-[550px] tablet-wide:h-[600px] -mt-[100px] desktop:h-[620px] hidden tablet:block"
  >
    <div
      class="absolute left-0 bottom-[10%]"
      :class="[rotate1 ? 'rotate-' + rotate1 : '']"
    >
      <nuxt-picture :src="svgUrl1"> </nuxt-picture>
    </div>
    <div
      class="absolute right-[30%] top-[30%]"
      :class="[rotate2 ? 'rotate-' + rotate2 : '']"
    >
      <nuxt-picture :src="svgUrl2"> </nuxt-picture>
    </div>
    <div
      v-if="svgUrl3"
      class="absolute left-[50%] top-[50%]"
      :class="[rotate3 ? 'rotate-' + rotate3 : '']"
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

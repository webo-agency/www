<template>
  <div class="shrink-0">
    <CustomLink
      class="group block h-8 tablet:h-12 tablet-wide:h-14 max-w-[100px] tablet:max-w-[120px] tablet-wide:max-w-[170px] filter hover:filter-[opacity(1)]"
      :url="link ? link : ''"
    >
      <nuxt-picture
        v-if="imgUrl"
        class="h-full object-center opacity-30 group-hover:opacity-100 filter blur-0 brightness-100 contrast-100 grayscale-0 hue-rotate-0 invert-0 sepia-0 saturate-0 drop-shadow-none group-hover:saturate-100 object-contain transition-all duration-[400ms]"
        :src="imgUrl"
        :title="title ? title : ''"
        :alt="alt ? alt : 'Brand logo'"
      />
    </CustomLink>
  </div>
</template>

<script>
import CustomLink from "../custom-link.vue";
export default {
  props: {
    link: String,
    imgUrl: String,
    title: String,
    alt: String,
  },
  components: { CustomLink },
};
</script>

<style></style>

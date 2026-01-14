<template>
  <div
    class="flex flex-wrap gap-y-8 tablet:gap-y-16 gap-x-6 tablet:gap-x-24 items-center justify-between"
  >
    <CustomLink
      v-for="(logo, index) in logos"
      :key="index"
      class="group block h-7 phone-wide:h-10 tablet:h-16 max-w-[100px] tablet:max-w-[150px] tablet-wide:max-w-[215px] filter"
      :url="logo.link ? logo.link : ''"
    >
      <nuxt-picture
        v-if="logo.imgUrl"
        class="h-full flex justify-center opacity-30 filter blur-0 brightness-100 contrast-100 grayscale-0 hue-rotate-0 invert-0 sepia-0 saturate-0 drop-shadow-none object-contain"
        :src="logo.imgUrl"
        :title="logo.title ? logo.title : ''"
        :alt="logo.alt ? logo.alt : 'Brand logo'"
        loading="lazy"
        :imgAttrs="{
          class: 'w-full h-full object-contain custom-filter duration-300',
        }"
      />
    </CustomLink>
  </div>
</template>

<script setup>
defineProps({
  logos: Array,
});
</script>

<style></style>

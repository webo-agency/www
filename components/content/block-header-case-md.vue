<template>
  <div
    class="mt-[100px] tablet:mt-[200px]"
    :style="[{ 'max-width': maxWidth + 'px' }]"
  >
    <div v-if="logoUrl" class="mb-5 md:mb-7">
      <nuxt-picture class="max-w-[150px] h-[50px] object-contain" :src="logoUrl" />
    </div>
    <div
      v-if="$slots.title"
      class="text-3xl tablet:text-4xl desktop:text-5xl font-semibold pb-5"
    >
      <ContentSlot :use="$slots.title" />
    </div>
    <ul
      v-if="$slots.tags"
      class="tags-list flex flex-row flex-wrap gap-x-5 gap-y-2 mb-10"
    >
      <ContentSlot :use="$slots.tags" unwrap="ul" />
    </ul>
    <div v-if="$slots.description" class="text-xl desktop:text-2xl">
      <ContentSlot :use="$slots.description" />
    </div>

    <div>
      <CustomLink
        v-if="link && $slots.buttontext"
        class="prose flex items-center w-max mt-10 text-base text-green-main hover:text-green-mainHover font-semibold transition duration-200"
        active-class=""
        :url="link"
      >
        <div v-if="$slots.buttontext" class="mr-2.5">
          <ContentSlot :use="$slots.buttontext" />
        </div>
        <svg
          class="inline text-current fill-current"
          width="23"
          height="16"
          viewBox="0 0 23 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.0863 0.111816L13.7605 1.43762L19.3853 7.06244H0V8.9375H19.3852L13.7605 14.5621L15.0863 15.8879L22.9745 7.99988L15.0863 0.111816Z"
          />
        </svg>
      </CustomLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    logoUrl: String,
    maxWidth: {
      type: Number,
      default: 920,
    },
    link: String,
  },
};
</script>

<style  lang="postcss" scoped>
:deep(.tags-list li) {
  @apply bg-gray-light text-black/25 rounded-[5px] py-[7px] px-[15px]
    text-lg desktop:text-xl font-semibold leading-none desktop:leading-none;
}
</style>

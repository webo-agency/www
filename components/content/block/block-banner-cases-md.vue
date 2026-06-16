<template>
  <div class="relative tablet-wide:min-h-[600px] flex flex-col justify-end">
    <div class="aspect-[4/3] tablet:aspect-auto tablet-wide:absolute inset-0 rounded-[5px] overflow-hidden">
      <nuxt-picture
        v-if="bgUrl"
        :src="bgUrl"
        class="w-full h-full object-cover tablet:object-right-top"
        :imgAttrs="{class: 'w-full h-full object-cover tablet:object-right-top'}"
      />
    </div>
    <div
      class="relative bottom-0 max-w-[710px] p-5 tablet:p-[50px] pb-0 tablet:pb-0 bg-white rounded-tr-[5px]"
    >
      <div v-if="logoUrl" class="mb-6">
        <nuxt-picture
          class="max-w-[120px] h-[50px] object-contain"
          :src="logoUrl"
        />
      </div>
      <div
        v-if="$slots.title"
        class="text-xl desktop:text-2xl font-semibold mb-7 tablet:mb-[50px]"
      >
        <ContentSlot :use="$slots.title" />
      </div>
      <div v-if="$slots.description" class="text-base desktop:text-lg">
        <ContentSlot :use="$slots.description" />
      </div>
      <div>
        <CustomLink
          v-if="link"
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
  </div>
</template>

<script>
export default {
  name: "BlockBannerCasesMd",
  props: {
    bgUrl: String,
    logoUrl: String,
    maxWidth: {
      type: Number,
      default: 920,
    },
    link: String,
  },
};
</script>

<style lang="postcss" scoped>
:deep(.tags-list li) {
  @apply bg-gray-light text-black/25 rounded-[5px] py-[7px] px-[15px]
      text-lg desktop:text-xl font-semibold leading-none desktop:leading-none;
}
</style>

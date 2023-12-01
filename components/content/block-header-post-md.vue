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
    {{postData}}
  </div>
</template>

<script setup>

  const route = useRoute()
  const { data:postData } = await useAsyncData(() => queryContent(route.fullPath.split('/')).findOne()) 

  const props = defineProps({
    logoUrl: String,
    maxWidth: {
      type: Number,
      default: 920,
    },
  })
</script>

<style  lang="postcss" scoped>
:deep(.tags-list li) {
  @apply bg-gray-light text-black/25 rounded-[5px] py-[7px] px-[15px]
    text-lg desktop:text-xl font-semibold leading-none desktop:leading-none;
}
</style>

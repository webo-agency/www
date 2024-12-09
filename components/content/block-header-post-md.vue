<template>
  <div
    itemscope itemtype="https://schema.org/NewsArticle"
    class="relative flex flex-col justify-end rounded-[20px] overflow-hidden desktop:mt-[30px]"
  >
    <nuxt-picture v-if="bgUrl" class="absolute inset-0 z-0 object-cover" :img-attrs="{class: 'w-full h-full object-cover',itemprop: 'image'}" :src="bgUrl" />
    <span class="absolute z-10 inset-0 bg-gradient-to-t from-black/75 to-transparent"></span>
    <div class="mx-blog relative z-20 flex flex-col justify-end pt-40 tablet:pt-56">
      <ul
        v-if="$slots.tags"
        class="tags-list flex flex-row flex-wrap gap-x-5 gap-y-2 mb-5"
      >
        <ContentSlot :use="$slots.tags" unwrap="ul" />
      </ul>
      <div
        v-if="$slots.title"
        itemprop="headline"
        class=" text-2xl tablet:text-3xl desktop:text-5xl font-semibold pb-5 text-white mb-5"
      >
        <ContentSlot :use="$slots.title" />
      </div>
    </div>
  </div>
</template>

<script setup>

  const props = defineProps({
    bgUrl: String,
  })
</script>

<style  lang="postcss" scoped>
:deep(.tags-list li) {
  @apply bg-white text-gray-darker rounded-full py-3 px-5 text-sm uppercase font-normal leading-none;
}
</style>

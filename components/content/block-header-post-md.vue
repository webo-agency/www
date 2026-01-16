<template>
  <div
    itemscope itemtype="https://schema.org/NewsArticle"
    class="_overflow-x-hidden"
  >
    <div class="mx-blog desktop:translate-y-[-60px] relative z-20">
      <a href="/blog" class="mb-4 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
          <path d="M13.75 13.75L0.75 0.75M0.75 0.75V13.23M0.75 0.75H13.23" stroke="#06CEAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="text-green-main font-semibold">Powrót do bloga</span>
      </a>
      <ul
        v-if="$slots.tags"
        class="tags-list flex flex-row flex-wrap gap-x-5 gap-y-2 mb-5"
      >
        <ContentSlot :use="$slots.tags" unwrap="ul" />
      </ul>
      <div
        v-if="$slots.title"
        itemprop="headline"
        class="mb-5 lg:mb-0 text-2xl tablet:text-3xl desktop:text-5xl font-semibold text-gray-darker"
      >
        <ContentSlot :use="$slots.title" />
      </div>
    </div>  

    <div class="relative">
      <nuxt-picture v-if="bgUrl" class="_absolute _inset-0 z-0 object-cover" :img-attrs="{class: 'w-full max-h-125 object-cover',itemprop: 'image'}" :src="bgUrl" />
      <span class="absolute z-10 inset-0 bg-gradient-to-t from-black/75 to-transparent"></span>
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

<template>
  <div>
    <div class="flex flex-col tablet:flex-row tablet:items-center mb-10 border-b border-solid border-gray-default pb-5 tablet:pb-[30px]">
      <div v-if="$slots.filtersText" class="text-sm font-medium mr-5 mb-2 tablet:mb-0">
        <ContentSlot :use="$slots.filtersText" />
      </div>
      <FiltersList :filters="filters" v-model="activeFilters" :clearText="allText"/>
    </div>
    <div
      v-if="contentFolder"
      ref="postsContainer"
      class="relative grid grid-cols-1 tablet:grid-cols-2 tablet-wide:grid-cols-3 gap-5 overflow-hidden"
    >
      <block-filter-tile-posts-md v-for="post_page in list" :key="post_page._path" :data="post_page" :activeFilters="activeFilters" />    
    </div>
    <div v-show="$slots.loadMore"  class="w-full flex justify-center items-center mt-10 tablet:mt-20">
      <div ref="increaseBtn" class="flex items-center text-base text-green-main hover:text-green-mainHover font-semibold transition duration-200 cursor-pointer "
      @click="increaseVisible()"
      >
        <ContentSlot :use="$slots.loadMore" />
        <svg
          class="inline text-current fill-current rotate-90 ml-3"
          width="23"
          height="16"
          viewBox="0 0 23 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.0863 0.111816L13.7605 1.43762L19.3853 7.06244H0V8.9375H19.3852L13.7605 14.5621L15.0863 15.8879L22.9745 7.99988L15.0863 0.111816Z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  allText: {
    type: String,
    default: 'Wszystkie',
  },
  contentFolder: {
    type: String,
    required: true,
  },
  filters: Array,
});

const { data: list } = await useAsyncData('blog-posts',() => queryContent(`/${props.contentFolder}/`).sort({ _path: 1 }).find())

const router = useRouter();
const route = useRoute();

const postsContainer = ref(null);
const increaseBtn = ref(null);

const activeFilters = ref(route.query.cat ? [route.query.cat] : []);
const shownCases = ref(9);


const updateVisible = () => {
  router.push({ query: { cat: activeFilters.value } });

  nextTick(() => {
    const tilesContainer = postsContainer.value;
    
    tilesContainer.querySelectorAll('.case-tile').forEach((item) => {
      item.classList.remove('hidden');
    });

    const cases = tilesContainer.querySelectorAll('.case-tile:not(.case-tile-hidden)');
    if (cases) {
      for (let i = 0; i < cases.length; i++) {
        if (i + 1 > shownCases.value) {
          cases[i].classList.add('hidden');
        } else {
          cases[i].classList.remove('hidden');
        }
      }

      if (cases.length <= shownCases.value) {
        increaseBtn.value.classList.add('hidden');
      } else {
        increaseBtn.value.classList.remove('hidden');
      }
    }
  });
};

const increaseVisible = () => {
  shownCases.value += 6;
};

watch([shownCases,activeFilters], updateVisible);

onMounted(updateVisible);

</script>

<style>
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
  z-index: 0;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>

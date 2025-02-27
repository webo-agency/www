<template>
  <div>
    <div v-if="$slots.title" class="text-2xl tablet:text-3xl desktop:text-4xl font-semibold mb-10 tablet:mb-[60px]">
      <ContentSlot :use="$slots.title" />
    </div>
    <div class="flex flex-col tablet:flex-row justify-between mb-10">
      <FiltersList :filters="filters" v-model="activeType" />
      <div class="shrink-0 relative flex flex-wrap justify-between">
        <div v-if="$slots.select" class="block py-[7px] px-5 text-sm tablet:text-base text-gray-darker">
          <ContentSlot :use="$slots.select" />
        </div>
        <div class="relative w-[200px] h-[34px] tablet:h-[42px]">
          <div
            class="absolute top-0 right-0 w-full border border-solid border-gray-default bg-white z-30 rounded-[5px] overflow-hidden">
            <div
              class="relative overflow-hidden after:absolute after:content-[''] after:top-0 after:right-10 after:w-1/2 after:h-[34px] tablet:after:h-[42px] after:bg-gradient-to-l after:from-white after:pointer-events-none"
              v-on-click-outside="() => selectExpanded && toggleExpand()">
              <span
                class="block py-[7px] px-5 text-sm tablet:text-base text-gray-darker min-h-[34px] tablet:min-h-[42px] whitespace-nowrap"
                @click="toggleExpand()">
                {{ activeTech.length > 0 ? activeTech.join() : allTechText }}
              </span>
              <div
                class="absolute top-0 right-0 w-10 h-[34px] tablet:h-[42px] flex justify-center items-center bg-white z-20 pointer-events-none">
                <svg width="20" height="10" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"
                  class="transition duration-300" :class="{ 'rotate-180': selectExpanded }">
                  <path
                    d="M9.15962 -3.67343e-08L10 0.840384L5 5.84046L-3.67343e-08 0.840383L0.840383 -4.0038e-07L5 4.21488L9.15962 -3.67343e-08Z"
                    fill="#212121" />
                </svg>
              </div>
              <ul class="transition-all duration-300 overflow-y-auto"
                :class="[selectExpanded ? 'max-h-[200px]' : 'max-h-0']">
                <li v-for="(tech, index) in technologies" :key="index"
                  class="py-[7px] px-5 text-sm tablet:text-base text-gray-darker">
                  <input class="appearance-none peer" type="checkbox" :id="tech" :value="tech" v-model="activeTech" />
                  <label class="peer-checked:font-semibold transition-all" :for="tech">{{ tech }}</label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cases-container overflow-hidden">
      <CaseTileMd v-for="case_page, index in filteredCases" :key="case_page._path" :data="case_page" :showTech="true"
        :mousePos="mousePos" class="animation-appear" :class="{ '!hidden': index + 1 > shownCasesCount }" />
    </div>
    <div v-if="$slots.loadMore" class="w-full flex justify-center items-center mt-10 tablet:mt-20">
      <div v-show="filteredCases.length > shownCasesCount"
        class="flex items-center text-base text-green-main hover:text-green-mainHover font-semibold transition duration-200 cursor-pointer "
        @click="increaseVisible()">
        <ContentSlot :use="$slots.loadMore" />
        <svg class="inline text-current fill-current rotate-90 ml-3" width="23" height="16" viewBox="0 0 23 16"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.0863 0.111816L13.7605 1.43762L19.3853 7.06244H0V8.9375H19.3852L13.7605 14.5621L15.0863 15.8879L22.9745 7.99988L15.0863 0.111816Z" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { vOnClickOutside } from '@vueuse/components'
import { useMouse } from '@vueuse/core'

const props = defineProps(
  {
    contentFolder: {
      type: String,
      required: true,
    },
    filters: Array,
    technologies: Array,
    allTechText: {
      type: String,
      default: 'All'
    }
  }
)
const mousePos = useMouse()
const { data: cases } = await useAsyncData('cases-filter-page', () =>
  queryContent(props.contentFolder)
    .where([
      {
        _path:
        {
          $and:
            [{ $ne: `/${props.contentFolder}/isw` }, { $ne: `/${props.contentFolder}` }]
        }
      },
      {
        tile_hidden:
          { $eq: false }
      }
    ])
    .sort({ tile_order: 1, $numeric: true })
    .find())

const activeType = ref([]);
const activeTech = ref([]);
const selectExpanded = ref(false);
const shownCasesCount = ref(6);


const filteredCases = computed(() => {
  return cases.value.filter(
    casePage => {
      const techMatch = activeTech.value.length === 0 || casePage.technologies?.some(r => activeTech.value.join().includes(r));
      const typeMatch = activeType.value.length === 0 || casePage.type?.some(r => activeType.value.join().includes(r));

      return techMatch && typeMatch;
    })
})

function toggleExpand() {
  selectExpanded.value = !selectExpanded.value;
}

function increaseVisible() {
  shownCasesCount.value += 4;
}
</script>

<style>
@keyframes appear {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.animation-appear {
  animation: appear 0.5s forwards ease-in-out;
}

.cases-container {
  @apply grid tablet:grid-cols-2;
}

.cases-container>*:nth-child(4n - 1) {
  @apply tablet:w-4/5 tablet:self-end tablet:justify-self-start
}

.cases-container>*:nth-child(4n - 2) {
  @apply tablet:w-4/5 tablet:self-start tablet:justify-self-end
}

.cases-container>*:nth-child(4n + 3),
.cases-container>*:nth-child(4n + 4) {
  @apply tablet:mb-10
}
</style>

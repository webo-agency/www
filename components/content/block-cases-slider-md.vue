<template>
  <div v-if="contentFolder">
    <div class="cases-container">
      <case-tile-md v-for="case_page in casesFiltered" :key="case_page._path" :data="case_page" :mousePos="mousePos"
        :showTech="false" />
    </div>
    <div class="!relative mt-10 desktop:mt-20"> show more </div>
  </div>
</template>

<script setup>
import { useMouse } from '@vueuse/core'

const props = defineProps(
  {
    contentFolder: {
      type: String,
      required: true,
    },
    techFilters: {
      type: Array,
      default: []
    },
    selectedSlugs: {
      type: Array,
      default: []
    }
  }
)

const routeTest = computed(() => useRoute().path)
const mousePos = useMouse()

const { data: cases } = await useAsyncData('cases', () => queryContent(props.contentFolder).find())

const casesFiltered = computed(() =>
  cases.value.filter(case_page => checkCaseVisibility(case_page))
)

function checkCaseVisibility(case_page) {
  return checkHomepageVisibility(case_page.homepage_hidden)
    && checkTechFilters(case_page.technologies)
    && checkSelectedSlugs(case_page)
    && case_page._path !== `/${props.contentFolder}`
}

function checkSelectedSlugs(case_page) {
  if (props.selectedSlugs.length == 0) return true

  const selectedPaths = props.selectedSlugs.map(slug => `/${case_page._dir}/${slug}`)
  return selectedPaths.includes(case_page._path)
}

function checkTechFilters(caseTechnologies) {

  if (props.techFilters.length == 0) return true

  if (caseTechnologies === undefined) {
    return false
  }
  return caseTechnologies.some(r => props.techFilters.includes(r))
}

function checkHomepageVisibility(isHomepageHidden) {
  return !(isHomepageHidden && (useRoute().fullPath == '/'))
}

</script>

<style scoped>
.cases-container {
  @apply grid tablet:grid-cols-2;
}

.cases-container>*:nth-child(4n - 1) {
  @apply w-4/5 self-end justify-self-start
}

.cases-container>*:nth-child(4n - 2) {
  @apply w-4/5 self-start justify-self-end
}
</style>

<template>
  <div v-if="contentFolder">
    <div class="cases-container">
      <EffectAppearMd v-for="case_page in casesFiltered" :key="case_page._path">
        <CaseTileMd :data="case_page" :mousePos="mousePos" :showTech="false" />
      </EffectAppearMd>
    </div>
    <EffectAppearMd>
      <div v-if="moreBtnVisible" class="!relative mt-10 desktop:mt-20">
        <CustomLink :url="moreBtn.url" :activeClass="'none-temp'"
          class="group flex items-center w-fit mx-auto text-base font-semibold border-gray-darker border-solid border-2 text-gray-darker hover:bg-green-main hover:border-green-main px-5 tablet:px-8 py-2.5 tablet:py-3.5 rounded-full transition duration-200 uppercase overflow-hidden">
          {{ moreBtn.linktitle }}
          <span
            class="h-0.5 w-[14px] ml-3 mt-0.5 bg-gray-darker z-10 group-hover:translate-x-1 transition-transform duration-200"></span>
        </CustomLink>
      </div>
    </EffectAppearMd>
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
    moreBtn: {
      type: Object
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

const mousePos = useMouse()

const { data: cases } = await useAsyncData('cases', () =>
  queryContent(props.contentFolder)
    .where([{
      _path:
      {
        $ne: `/${props.contentFolder}`
      }
    },
    {
      tile_hidden:
        { $eq: false }
    }
    ]).
    sort({ tile_order: 1 })
    .find()
)

const casesFiltered = computed(() => {
  const casesArray = cases.value.filter(case_page => checkCaseVisibility(case_page)).slice(0, 4)
  if (props.selectedSlugs.length > 0) {
    const selectedPaths = props.selectedSlugs.map(slug => `/${props.contentFolder}/${slug}`)
    casesArray.sort((a, b) =>
      selectedPaths.indexOf(a._path) - selectedPaths.indexOf(b._path)
    )
  }
  return casesArray
}
)

const moreBtnVisible = computed(() => {
  return props.moreBtn && props.moreBtn.url && props.moreBtn.linktitle
})

function checkCaseVisibility(case_page) {
  return checkTechFilters(case_page.technologies) && checkSelectedSlugs(case_page)
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
  @apply tablet:w-4/5 tablet:self-end tablet:justify-self-start
}

.cases-container>*:nth-child(4n - 2) {
  @apply tablet:w-4/5 tablet:self-start tablet:justify-self-end
}
</style>

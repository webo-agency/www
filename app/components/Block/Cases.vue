<template>
  <div v-if="contentFolder">
    <div class="cases-container">
      <EffectAppear v-for="case_page in casesFiltered" :key="case_page.path">
        <TileCase :data="case_page" :mousePos="mousePos" :showTech="false" />
      </EffectAppear>
    </div>
    <EffectAppear>
      <div v-if="moreBtnVisible" class="!relative">
        <UiLink
          :url="moreBtn.url"
          :activeClass="'none-temp'"
          class="group flex items-center w-fit mx-auto text-base font-semibold border-gray-darker border-solid border-2 text-gray-darker hover:bg-green-main hover:border-green-main px-5 tablet:px-8 py-2.5 tablet:py-3.5 rounded-full transition duration-200 uppercase overflow-hidden"
        >
          {{ moreBtn.linktitle }}
          <span
            class="h-0.5 w-[14px] ml-3 mt-0.5 bg-gray-darker z-10 group-hover:translate-x-1 transition-transform duration-200"
          ></span>
        </UiLink>
      </div>
    </EffectAppear>
  </div>
</template>

<script setup>
import { useMouse } from "@vueuse/core";

const props = defineProps({
  contentFolder: {
    type: String,
    required: true,
  },
  moreBtn: {
    type: Object,
  },
  techFilters: {
    type: Array,
    default: [],
  },
  selectedSlugs: {
    type: Array,
    default: [],
  },
});

const mousePos = useMouse();

const { data: cases } = await useAsyncData("cases", () =>
  queryCollection('content')
    .where('path', 'LIKE', `/${props.contentFolder}/%`)
    .all()
);

const casesFiltered = computed(() => {
  const casesArray = (cases.value || [])
    .filter((case_page) => case_page.path !== `/${props.contentFolder}` && case_page.meta.tile_hidden !== true)
    .sort((a, b) => (a.meta.tile_order ?? 9999) - (b.meta.tile_order ?? 9999))
    .filter((case_page) => checkCaseVisibility(case_page))
    .slice(0, 4);
  if (props.selectedSlugs.length > 0) {
    const selectedPaths = props.selectedSlugs.map(
      (slug) => `/${props.contentFolder}/${slug}`
    );
    casesArray.sort(
      (a, b) => selectedPaths.indexOf(a.path) - selectedPaths.indexOf(b.path)
    );
  }
  return casesArray;
});

const moreBtnVisible = computed(() => {
  return props.moreBtn && props.moreBtn.url && props.moreBtn.linktitle;
});

function checkCaseVisibility(case_page) {
  return (
    checkTechFilters(case_page.meta.technologies) && checkSelectedSlugs(case_page)
  );
}

function checkSelectedSlugs(case_page) {
  if (props.selectedSlugs.length == 0) return true;

  const selectedPaths = props.selectedSlugs.map(
    (slug) => `/${props.contentFolder}/${slug}`
  );
  return selectedPaths.includes(case_page.path);
}

function checkTechFilters(caseTechnologies) {
  if (props.techFilters.length == 0) return true;

  if (caseTechnologies === undefined) {
    return false;
  }
  return caseTechnologies.some((r) => props.techFilters.includes(r));
}

function checkHomepageVisibility(isHomepageHidden) {
  return !(isHomepageHidden && useRoute().fullPath == "/");
}
</script>

<style scoped>
@reference "~/assets/css/main.css";

.cases-container {
  @apply grid tablet:grid-cols-2;
}

.cases-container > *:nth-child(4n - 1) {
  @apply tablet:w-4/5 tablet:self-end tablet:justify-self-start;
}

.cases-container > *:nth-child(4n - 2) {
  @apply tablet:w-4/5 tablet:self-start tablet:justify-self-end;
}

.cases-container > *:nth-child(4n + 3),
.cases-container > *:nth-child(4n + 4) {
  @apply tablet:mb-10;
}
</style>

<template>
  <div class="px-5 tablet:px-10 desktop:px-20 overflow-hidden">
    <div
      class="relative w-full mx-auto max-w-screen-desktop-wide rounded-[5px]"
    >
      <div
        class="relative desktop-wide:w-screen pr-5 tablet:pr-10 desktop:pr-20 -mr-5 tablet:-mr-10 desktop:-mr-20 desktop-wide:mr-0 h-full overflow-hidden"
      >
        <div class="max-w-screen-desktop-wide">
          <div
            ref="swiper"
            class="swiper swiper-container case-swiper w-full h-full !overflow-visible"
          >
            <div class="swiper-wrapper flex h-full">
              <ContentList :path="'/realizacje/'" :query="{ path: '/realizacje/'}" v-slot="{list}">
                  <case-tile-md v-for="case_page in list.filter(case_page => checkCaseVisibility(case_page))" :key="case_page._path" :data="case_page" />
              </ContentList> 
            </div>
            <div
              class="block swiper-pagination !relative mt-10 desktop:mt-20"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, Autoplay, Pagination } from "swiper";
import "swiper/css/bundle";

export default {
  name: "BlockCasesSliderMed",
  data() {
    return {
      swiper: null,
      swiperOptionsObject: {
        modules: [Autoplay, Pagination],
        slidesPerView: "auto",
        spaceBetween: 0,
        direction: "horizontal",
        loop: true,
        pagination: {
          dynamicBullets: true,
          el: ".swiper-pagination",
          clickable: true,
        },
        speed: 600,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        preloadImages: false,
        lazy: {
          loadPrevNext: true,
        },
      },
    };
  },
  props:{
    techFilters:{
      type: Array,
      default: []
    },
    selectedSlugs:{
      type: Array,
      default: []
    }
  },
  methods:{
    checkCaseVisibility(case_page){

      return this.checkHomepageVisibility(case_page.homepage_hidden) 
          && this.checkTechFilters(case_page.technologies) 
          && this.checkSelectedSlugs(case_page)
    },

    checkSelectedSlugs(case_page){
      if (this.selectedSlugs.length == 0) return true
        
      const selectedPaths = this.selectedSlugs.map(slug => `/${case_page._dir}/${slug}`)
      return selectedPaths.includes(case_page._path)
    },

    checkTechFilters(caseTechnologies){

      if(this.techFilters.length == 0) return true

      if (caseTechnologies === undefined) {
        return false
      }
      return caseTechnologies.some(r => this.techFilters.includes(r))
    },

    checkHomepageVisibility(isHomepageHidden){
      return !(isHomepageHidden && (this.$route.fullPath == '/'))
    }
  },
  mounted() {
    this.swiper = new Swiper(this.$refs.swiper, this.swiperOptionsObject);
  },
};
</script>

<style  lang="postcss" scoped>
.swiper-pagination :deep(.swiper-pagination-bullet) {
  @apply w-[25px] h-[5px] rounded-[5px] opacity-100 bg-gray-default
    transition duration-200 mx-[5px];
}
.swiper-pagination
  :deep(.swiper-pagination-bullet.swiper-pagination-bullet-active) {
  @apply bg-green-main;
}
</style>

<template>
  <div>
    <div
      v-if="$slots.title"
      class="text-2xl tablet:text-3xl desktop:text-4xl font-semibold mb-10 tablet:mb-[60px]"
    >
      <ContentSlot :use="$slots.title" />
    </div>
    <div class="flex flex-col tablet:flex-row justify-between mb-10">
      <ul class="flex flex-wrap gap-x-5 gap-y-2.5 mb-5 tablet:mb-0">
        <li
          v-for="(filter, index) in filters"
          :key="index"
          class="py-[7px] px-5 text-sm tablet:text-base rounded-[5px] transition duration-200 cursor-pointer"
          :class="[
            activeType.includes(filter)
              ? 'bg-green-main hover:bg-green-mainHover text-white'
              : 'bg-green-light hover:bg-green-mainHover/10 text-gray-darker',
          ]"
          @click="toggleFilter(filter)"
        >
          {{ filter }}
        </li>
      </ul>
      <div class="shrink-0 relative flex flex-wrap justify-between">
        <div v-if="$slots.select"
          class="block py-[7px] px-5 text-sm tablet:text-base text-gray-darker"
          ><ContentSlot :use="$slots.select" /></div
        >
        <div class="relative w-[200px] h-[34px] tablet:h-[42px]">
          <div
            class="absolute top-0 right-0 w-full border border-solid border-gray-default bg-white z-30 rounded-[5px] overflow-hidden"
          >
            <div
              class="relative overflow-hidden after:absolute after:content-[''] after:top-0 after:right-10 after:w-1/2 after:h-[34px] tablet:after:h-[42px] after:bg-gradient-to-l after:from-white after:pointer-events-none"
            >
              <span
                class="block py-[7px] px-5 text-sm tablet:text-base text-gray-darker min-h-[34px] tablet:min-h-[42px] whitespace-nowrap"
                @click="toggleExpand()"
                >
                {{ activeTech.length>0 ? activeTech.join() : 'Wszystkie' }}
              </span>
              <div
                class="absolute top-0 right-0 w-10 h-[34px] tablet:h-[42px] flex justify-center items-center bg-white z-20 pointer-events-none"
              >
                <svg
                  width="20"
                  height="10"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="transition duration-300"
                  :class="{ 'rotate-180': selectExpanded }"
                >
                  <path
                    d="M9.15962 -3.67343e-08L10 0.840384L5 5.84046L-3.67343e-08 0.840383L0.840383 -4.0038e-07L5 4.21488L9.15962 -3.67343e-08Z"
                    fill="#212121"
                  />
                </svg>
              </div>
              <ul
                class="transition-all duration-300 overflow-y-auto"
                :class="[selectExpanded ? 'max-h-[200px]' : 'max-h-0']"
              >
                <li
                  v-for="(tech, index) in technologies"
                  :key="index"
                  class="py-[7px] px-5 text-sm tablet:text-base text-gray-darker"
                >
                <input
                class="appearance-none peer"
                type="checkbox"
                :id="tech"
                :value="tech"
                v-model="activeTech"
                />
                <label class="peer-checked:font-semibold transition-all" :for="tech">{{ tech }}</label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="$slots.cases"
      ref="casesContainer"
      class="relative flex flex-wrap gap-5 gap-y-10 tablet:gap-y-20 overflow-hidden"
    >
      <slot name="cases"></slot>
    </div>
    <div
      ref="casesContainer"
      class="relative flex flex-wrap gap-5 gap-y-10 tablet:gap-y-20 overflow-hidden"
    >
      <ContentList :path="'/realizacje/'" :query="{ path: '/realizacje/', where: { _path: { $ne: '/realizacje/isw'} }, sort: { homepage_hidden: false }}" v-slot="{list}">
          <block-filter-tile-cases-md v-for="case_page in list" :key="case_page._path" :data="case_page" :activeType="activeType" :activeTech="activeTech" />
      </ContentList> 
    </div>
    <div v-if="$slots.loadMore"  class="w-full flex justify-center items-center mt-10 tablet:mt-20">
      <div ref="increase_btn" class="flex items-center text-base text-green-main hover:text-green-mainHover font-semibold transition duration-200 cursor-pointer "
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

<script>
export default {
  props: {
    filters: Array,
    technologies: Array,
  },
  data() {
    return {
      activeType: [],
      activeTech: [],
      selectExpanded: false,
      shownCases:4
    };
  },
  watch:{
    shownCases(){
      this.updateVisible()
    },
    activeTech(){
      this.updateVisible()
    }
  },
  mounted(){
    this.updateVisible()
  },
  methods: {
    toggleFilter(value) {
      let filterIndex = this.activeType.indexOf(value);
      if (filterIndex > -1) {
        this.activeType.splice(filterIndex, 1);
      } else {
        this.activeType.push(value);
      }
      this.updateVisible()
    },

    toggleExpand() {
      this.selectExpanded = !this.selectExpanded;
    },

    increaseVisible(){
      this.shownCases += 4;
    },

    updateVisible(){
      this.$nextTick(()=>{
        const tilesContainer = this.$refs.casesContainer
        tilesContainer.querySelectorAll('.case-tile').forEach((item) => {
          item.classList.remove('hidden');
        });

        const cases = tilesContainer.querySelectorAll('.case-tile:not(.case-tile-hidden)')
        if (cases) {
          for (let i = 0; i < cases.length; i++) {
            if (i + 1 > this.shownCases) {
              cases[i].classList.add('hidden')
            }else{
              cases[i].classList.remove('hidden')
            }
          }
          
          const increaseBtn = this.$refs.increase_btn
          if ((cases.length) <= this.shownCases) {
            increaseBtn.classList.add('hidden')
          }else{
            increaseBtn.classList.remove('hidden')
          }
        }
        
      })
    }
  },
};
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

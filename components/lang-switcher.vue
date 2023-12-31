<template>
  <div class="relative group w-fit text-center" 
    @click="!isDesktop ? toggleExpand() : null" 
    @mouseenter="isDesktop ? toggleExpand(true) : null" 
    @mouseleave="isDesktop ? toggleExpand(false) : null">
    <div class="flex gap-2.5 items-center py-3 desktop:p-3 cursor-pointer">
      <span
        class="shrink-0 block text-inherit text-lg desktop:text-base font-semibold transition duration-300 group-hover:text-green-main"
        >{{ currLang }}</span
      >
      <svg class="shrink-0 transition duration-300 fill-current group-hover:text-green-main"
      :class="{'text-green-main !rotate-180':isExpanded}"
       width="15" height="8" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg"><path d="M9.15962 -3.67343e-08L10 0.840384L5 5.84046L-3.67343e-08 0.840383L0.840383 -4.0038e-07L5 4.21488L9.15962 -3.67343e-08Z"></path></svg>
    </div>
    
    <div
      class="desktop:absolute z-10 desktop:left-1/2 -translate-y-5 desktop:translate-y-0 desktop:-translate-x-1/2 desktop:top-0 desktop:pt-[96px] opacity-0 pointer-events-none transition duration-300"
      :class="{'translate-y-0 pointer-events-auto opacity-100':isExpanded}"
    >
    <div class="relative filter blur-0 brightness-100 contrast-100 grayscale-0 hue-rotate-0 saturate-100 invert-0 sepia-0 desktop:drop-shadow-[0_20px_25px_rgba(66,66,66,0.2)]">
        <div class="hidden desktop:block absolute top-[-11px] left-1/2 -translate-x-1/2 w-6 h-6 bg-white rotate-45 rounded-[3px] transition-all duration-200 translate-y-4"
        :class="{'!translate-y-0':isExpanded}"></div>
        <ul class="desktop:bg-white overflow-hidden rounded-b-[5px] relative z-20">
          <li v-for="lang in langList">
            <input
              v-model="currLang"
              type="radio"
              name="lang"
              :id="`lang-${lang}`"
              :value="lang"
              class="hidden peer"
            />
            <label
              :for="`lang-${lang}`"
              class="block font-semibold text-gray-darker px-5 py-3 hover:text-green-main desktop:hover:text-gray-darker desktop:hover:bg-gray-default transition duration-200 cursor-pointer"
              >{{ lang }}</label
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';

const route = useRoute()
const currLang = useState("lang");
const windowWidth = useWindowSize().width
const isDesktop = computed(()=>{
  if (!windowWidth.value) return true
  return windowWidth.value >= 1248
})
const isExpanded = ref(false);
const locales = {
  "PL":'pl-PL',
  "EN":'en-US'
}

const langList = computed(() =>
  Object.keys(locales).filter((lang) => lang != currLang.value)
);

watch(currLang, (newLang) => {
  const path = toggleLink(newLang)
  if (window) {
    window.location.href = path
  }

})

function toggleExpand(value){
  if (value) {
    isExpanded.value = value  
  }else{
    isExpanded.value = !isExpanded.value
  }
}

function toggleLink(lang){
  const hrefLangs = useState("hrefLangs"+route.fullPath.split('#')[0]);
  const domains = {
    PL: "https://webo.pl",
    EN: "https://webo.agency",
  };

  const linkItem = hrefLangs.value.find(item =>
    item.lang == lang
  )

  if (linkItem && linkItem.href) {
    return linkItem.href
  }

  if (domains[lang]) {
    return domains[lang]
  }
}

</script>

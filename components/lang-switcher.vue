<template>
  <div class="relative group w-12 text-center">
    <span
      class="text-inherit text-lg font-semibold transition duration-300 hover:text-green-main p-1 cursor-pointer"
      >{{ currLang }}</span
    >
    <div
      class="absolute z-10 left-1/2 -translate-x-1/2 top-0 desktop:pt-[84px] opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 hover:opacity-100 hover:pointer-events-auto transition duration-300"
    >
    <div class="relative filter blur-0 brightness-100 contrast-100 grayscale-0 hue-rotate-0 saturate-100 invert-0 sepia-0 drop-shadow-[0_20px_25px_rgba(66,66,66,0.2)]">
          <div class="absolute top-[-11px] left-1/2 -translate-x-1/2 w-6 h-6 bg-white rotate-45 rounded-[3px] transition-all duration-200 translate-y-4 group-hover:translate-y-0"></div>
        <ul class="bg-white overflow-hidden rounded-b-[5px] relative z-20">
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
              class="block font-semibold text-gray-darker px-5 py-3 hover:bg-gray-default transition duration-200 cursor-pointer"
              >{{ lang }}</label
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const currLang = useState("lang");
const languages = ["PL", "ENG"];
const langList = computed(() =>
  languages.filter((lang) => lang != currLang.value)
);
</script>

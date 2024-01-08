<template>
  <div class="flex flex-col shrink-0">
    <CustomLink class="group hover:text-green-main flex flex-col w-full" :disabled="data.draft && !data.fallback"
      :activeClass="'none'" :url="data.fallback ?? (data.url ?? ('https://www.webo.agency' + data._path))">
      <div ref="imgContainer"
        class="[&:hover_.arrow]:scale-100 relative flex aspect-square tablet:aspect-[0.9] w-full mb-5 desktop:mb-10 overflow-hidden">
        <div v-if="!data.draft || data.fallback"
          class=" absolute block z-10 -top-14 -left-14 tablet:-top-20 tablet:-left-20 transition-transform duration-[100] ease-out pointer-events-none"
          :style="hoverArrowPosition">
          <span
            class="arrow flex items-center justify-center aspect-square h-20 tablet:h-[120px] scale-0 z-10 transform transition-transform duration-300 rounded-full bg-green-main">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none">
              <path
                d="M15.6 0.111328L14.2742 1.43713L19.899 7.06195H0.513672V8.93701H19.8988L14.2742 14.5617L15.6 15.8875L23.4882 7.99939L15.6 0.111328Z"
                fill="#202020" />
            </svg>
          </span>
        </div>
        <nuxt-picture v-if="data.image && data.image.url" class="relative z-0 h-full w-full "
          :imgAttrs="{ class: 'w-full h-full object-cover object-left-top', wdith: 665, height: 738 }"
          :src="data.image.url" :title="data.image.title ? data.image.title : ''"
          :alt="data.image.alt ? data.image.alt : 'Case study image'" />
      </div>
      <ul v-if="data.type" class="flex flex-wrap mb-5 desktop:mb-8 gap-x-5 gap-y-2.5">
        <li v-for="tag, index in data.type" :key="index"
          class="rounded-full text-gray-darker bg-gray-light px-5 py-2 text-xs desktop:text-sm font-medium uppercase">
          {{ tag }}</li>
      </ul>
      <h4 v-if="data.introduction?.title"
        class="mr-2.5 tablet:mr-5 mb-5 desktop:mb-8 text-gray-darker text-xl desktop:text-2xl font-semibold transition duration-300"
        :class="{ 'group-hover:underline': !data.draft || data.fallback }">
        {{ data.introduction.title }}
      </h4>
    </CustomLink>
    <p v-if="data.introduction?.description"
      class="mb-5 tablet:mb-8 mr-2.5 tablet:mr-5 text-sm leading-7 desktop:text-base">
      {{ data.introduction.description }}
    </p>
    <ul v-if="data.technologies && showTech" class="flex gap-[5px] h-[30px] mb-5 tablet:mb-8">
      <li v-for="tech, index in data.technologies" :key="index"
        class="h-full w-[30px] rounded-full p-1 bg-white border border-gray-default overflow-hidden">
        <nuxt-picture v-if="techIcon[tech]" :src="techIcon[tech]" class="h-full w-full object-contain"
          :img-attrs="{ class: 'h-full w-full object-contain' }"></nuxt-picture>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  data: Object,
  showTech: {
    type: Boolean,
    detault: false
  },
  mousePos: Object
})
const imgContainer = ref(null)

const hoverArrowPosition = computed(() => {
  if (!imgContainer.value) return {};
  const posX = props.mousePos.x.value - imgContainer.value.getBoundingClientRect().left
  const posY = props.mousePos.y.value - imgContainer.value.getBoundingClientRect().top - window.scrollY
  return { transform: `translateY(${posY}px) translateX(${posX}px)` }
})

const techIcon = {
  "TailwindCSS": '/img/logos/tailwind.png',
  "Vue.js": '/img/logos/vue.png',
  "Nuxt": '/img/logos/nuxt.png',
  "PrestaShop": '/img/logos/presta.png',
  "Wordpress CMS": '/img/logos/wp.png',
  "Drupal CMS": '/img/logos/drupal.png',
  "JavaScript": '/img/logos/js.png',
  "Node.js": '/img/logos/node.png'
}


</script>

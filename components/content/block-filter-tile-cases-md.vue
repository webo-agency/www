<template>
    <div
    class="case-tile relative w-full flex flex-col tablet:basis-[calc(50%_-_10px)] shrink-0 z-20 bg-white"
    v-show="isVisible"
    :class="{'case-tile-hidden':!isVisible}">
      <div class="group">
        <CustomLink
          class="hover:text-green-main flex flex-col w-full"
          :disabled="data.draft && !data.fallback"
          :activeClass="'none'"
          :url="data.fallback ? data.fallback : (data.url ? data.url : 'https://www.webo.agency' + data._path)"
        >
          <div
            class="flex items-end aspect-[4/3] desktop:h-[400px] w-full rounded-[5px] overflow-hidden"
          >
            <nuxt-picture
              class="h-full w-full object-cover group-hover:scale-[103%] transition-all duration-500"
              v-if="data.image && data.image.url"
              :src="data.image.url"
              :title="data.image.title ? data.image.title : ''"
              :alt="data.image.alt ? data.image.alt : 'Case study data.image'"
              :imgAttrs="{class:'h-full w-full object-cover'}"
            ></nuxt-picture>
          </div>
          <div class="px-5 tablet:px-[30px] ">
            <ul class="flex flex-wrap my-5 tablet:my-[30px] gap-x-2.5 gap-y-1">
              <li v-for="tag,index in data.type" :key="index"
              class="rounded-[5px] text-gray-darker/25 bg-gray-light px-2 py-[2px] text-[10px] tablet:text-xs font-semibold">
              {{tag}}</li>
            </ul>
            <h4
              v-if="data.introduction?.title"
              class=" mr-2.5 tablet:mr-5 desktop:mr-14 mb-5 text-xl leading-7 desktop:text-2xl font-semibold transition duration-300"
            >
              {{data.introduction.title}}
            </h4>
          </div>
        </CustomLink>
        <div class="px-5 tablet:px-[30px] ">
          <p
            v-if="data.introduction?.description"
            class="mr-2.5 tablet:mr-10 desktop:mr-[100px] text-sm leading-7 desktop:text-lg"
          >
            {{data.introduction.description}}
          </p>
          <ul class="flex gap-[5px] h-[30px] my-5 tablet:my-[30px]">
            <li v-for="tech,index in data.technologies" :key="index" class="h-full w-[30px] rounded-full p-1 bg-white border border-gray-default overflow-hidden">
              <nuxt-picture
              v-if="techIcon[tech]"
              :src="techIcon[tech]"
              class="h-full w-full object-contain"
              :img-attrs="{class: 'h-full w-full object-contain'}"
            ></nuxt-picture>
            </li>
          </ul>
          <div
            class="line relative w-[135px] tablet-wide:w-[300px] h-0.5 rounded-full bg-gray-light overflow-hidden after:content-[''] after:absolute after:-top-0.5 after:right-full after:w-full after:h-2 after:bg-green-main group-hover:after:translate-x-full after:transition after:duration-300"
          ></div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      techIcon:{
        "TailwindCSS": '/img/logos/tailwind.png',
        "Vue.js": '/img/logos/vue.png',
        "Nuxt": '/img/logos/nuxt.png',
        "PrestaShop": '/img/logos/presta.png',
        "Wordpress CMS": '/img/logos/wp.png',
        "Drupal CMS": '/img/logos/drupal.png',
        "JavaScript": '/img/logos/js.png',
        "Node.js": '/img/logos/node.png'
      }
    }
  },
    props:{
        data: Object,
        activeType: Array,
        activeTech: Array,
    },
    computed:{
      isVisible(){
        if (this.activeType.length == 0 && this.activeTech.length == 0) {
          return true
        }

        let hasTech = this.activeTech.length == 0 ? true : this.data.technologies?.some(r=> this.activeTech.includes(r))
        if (this.activeType.length == 0 && hasTech ) {
          return true
        }
        
        let found = this.data.type?.some(r=> this.activeType.join().includes(r)) && hasTech
        return found
      }
    }
}
</script>

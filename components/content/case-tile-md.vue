<template>
  <div
    class="swiper-slide flex flex-col w-full basis-full tablet:basis-1/2 shrink-0 mr-[30px] tablet:mr-0 tablet:pr-[30px] desktop:pr-5"
  >
    <div class="group">
      <CustomLink
        class="hover:text-green-main flex flex-col w-full"
        :disabled="data.draft && !data.fallback"
        :activeClass="'none'"
        :url="data.fallback ? data.fallback : (data.url ? data.url : 'https://www.webo.agency' + data._path)"
      >
        <div
          class="flex items-end aspect-[4/3] desktop:aspect-auto desktop:h-[400px] w-full mb-5 desktop:mb-10 rounded-[5px] overflow-hidden"
        >
          <nuxt-picture
            class="h-auto w-full group-hover:scale-[103%] transition-all duration-500"
            v-if="data.image && data.image.url"
            :src="data.image.url"
            :title="data.image.title ? data.image.title : ''"
            :alt="data.image.alt ? data.image.alt : 'Case study image'"
          ></nuxt-picture>
        </div>
        <h4
          v-if="data.introduction?.title"
          class="mr-2.5 tablet:mr-5 desktop:mr-14 mb-5 text-xl leading-7 desktop:text-2xl font-semibold transition duration-300"
        > {{data.introduction.title}}
        </h4>
      </CustomLink>
      <p
        v-if="data.introduction?.description"
        class="mr-2.5 tablet:mr-10 desktop:mr-[100px] text-sm leading-7 desktop:text-lg"
      >
        {{data.introduction.description}}
      </p>
      <div
        class="line relative w-[135px] tablet-wide:w-[300px] h-0.5 mt-5 desktop:mt-10 rounded-full bg-gray-light overflow-hidden"
      ></div>
    </div>
  </div>
</template>

<script>
import CustomLink from "../custom-link.vue";

export default {
  props: {
    data: Object
  },
  components: { CustomLink },
};
</script>

<style  lang="postcss" scoped>
.swiper-slide-active .line::after {
  @apply translate-x-full;
}

.line::after{
    content: '';
    @apply absolute -top-0.5 right-full w-full h-2 bg-green-main group-hover:translate-x-full transition duration-300
}
</style>

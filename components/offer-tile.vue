<template>
  <div
    class="h-full tablet-small:pr-2.5 desktop:pr-5 pb-[15px] desktop:pb-[30px]"
  >
    <div
      class="h-full border-2 border-gray-light hover:border-green-main rounded-[5px] transition duration-200"
    >
      <CustomLink
        :url="data.link"
        :activeClass="'none'"
        class="flex h-full text-gray-darker bg-no-repeat bg-right-bottom"
        :class="
          data.description
            ? 'flex-col p-5 desktop:p-10 desktop:pr-5 pt-6 desktop:pt-12'
            : 'items-center p-5 desktop:px-10 desktop:pr-5'
        "
        :style="{
          'background-image': `url(${data.bgIcon ? data.bgIcon : ''})`,
        }"
      >
        <nuxt-picture
          class="mr-10 shrink-0"
          :class="{ 'mb-5': data.description }"
          :imgAttrs="{ class: 'w-10 h-10 object-contain' }"
          :src="data.icon ? data.icon : '/icons/site.png'"
        ></nuxt-picture>
        <div
          class="max-w-sm text-lg desktop:text-xl font-semibold"
          :class="{ 'mb-5': data.description }"
          v-html="data.title ? $formatText(data.title) : ''"
        ></div>
        <div
          v-if="data.description"
          class="flex flex-col justify-between h-full"
        >
          <div
            class="mb-5 text-sm desktop:text-base font-normal"
            v-html="$formatText(data.description)"
          ></div>
          <div class="w-[135px] h-0.5 rounded-full bg-green-main"></div>
        </div>
      </CustomLink>
    </div>
  </div>
</template>

<script>
import EffectAppear from "./effect-appear.vue";
import CustomLink from "./custom-link.vue";
export default {
  name: "OfferTile",
  props: {
    data: Object,
  },
  components: { EffectAppear, CustomLink },
};
</script>

<style></style>

<template>
  <div ref="container" class="relative w-full h-[550px] tablet-wide:h-[600px] -mt-[100px] desktop:h-[620px] mb-[50px] tablet:mb-[100px] desktop:mb-[150px]">
    <div class="absolute z-0 w-full h-full">
      <nuxt-picture
        class="w-full h-full object-cover ultraHd:object-contain"
        :src="bgUrl"
        :imgAttrs="{class:'w-full h-full object-cover ultraHd:object-contain'}"
        width="1920"
        height="650"
      >
      </nuxt-picture>
    </div>
    <PageSectionMd
      class="relative h-full z-10 bg-center bg-cover bg-no-repeat ultraHd:bg-contain flex flex-col justify-end"
    >
      <BlockHeaderMdc
        class="pt-[100px] pb-5 desktop:pb-10 pr-10"
        :textWhite="true"
        :maxWidth=" headerWidth ? headerWidth : 520"
      >
        <template v-if="$slots.subtitle" #subtitle>
          <slot name="subtitle" />
        </template>
        <template v-if="$slots.title" #title>
          <slot name="title" />
        </template>
      </BlockHeaderMdc>
      <div
        v-if="$slots.description"
        class="pb-2 desktop:pb-4 font-medium text-white text-lg desktop:text-xl"
        :style="[{ 'max-width': descriptionWidth + 'px' }]"
      >
        <ContentSlot :use="$slots.description" />
      </div>
      <div class="py-4 desktop:pt-0 desktop:pb-2 flex justify-center">
        <button-scroll-down :getContainerRef="() => $refs.container"/>
      </div>
    </PageSectionMd>
  </div>
</template>

<script>
import PageSectionMd from "./page-section-md.vue";
import BlockHeaderMdc from "./block-header-md.vue";
export default {
  props: {
    bgUrl: String,
    headerWidth: Number,
    descriptionWidth: {
      type: Number,
      default: 520
    }
  },
  components: {
    PageSectionMd,
    BlockHeaderMdc,
  },
};
</script>

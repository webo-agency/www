<template>
  <div ref="container" class="relative w-full h-[550px] mb-[80px]">
    <div v-if="bgImg" class="absolute w-full h-full">
      <nuxt-picture
        class="w-full h-full object-cover ultraHd:object-contain"
        :src="bgUrl"
        :imgAttrs="{
          class: 'w-full h-full object-cover ultraHd:object-contain',
        }"
        width="1920"
        height="650"
      >
      </nuxt-picture>
    </div>
    <PageSectionMd class="" :class="{ 'bg-[#ECF6F4]': !bgImg }">
      <BlockColumns11Md>
        <template #left>
          <div class="h-full flex flex-col justify-center">
            <BlockHeaderMdc
              class=""
              :textWhite="true"
              :maxWidth="headerWidth ? headerWidth : 520"
            >
              <template v-if="$slots.subtitle" #subtitle>
                <div :class="{ 'text-black': !bgImg }">
                  <slot name="subtitle" />
                </div>
              </template>
              <template v-if="$slots.title" #title>
                <div :class="{ 'text-black': !bgImg }">
                  <slot name="title" />
                </div>
              </template>
            </BlockHeaderMdc>
            <div
              v-if="$slots.description"
              class="pb-2 desktop:pb-4 font-medium text-white text-lg desktop:text-xl"
              :style="[{ 'max-width': descriptionWidth + 'px' }]"
              :class="{ '!text-black': !bgImg }"
            >
              <ContentSlot :use="$slots.description" />
            </div>
            <div v-if="!bgImg" class="py-4 desktop:pt-0 desktop:pb-2">
              <button-scroll-down
                :getContainerRef="() => $refs.container"
                :isSecondSvg="true"
                class="mt-6"
              />
            </div>
          </div>
        </template>
        <template #right>
          <slot name="right"></slot>
        </template>
      </BlockColumns11Md>
    </PageSectionMd>
  </div>
</template>

<script>
import PageSectionMd from "./page-section-md.vue";
import BlockHeaderMdc from "./block-header-md.vue";
export default {
  props: {
    bgImg: {
      type: Boolean,
      default: true,
    },
    bgUrl: String,
    headerWidth: Number,
    descriptionWidth: {
      type: Number,
      default: 520,
    },
  },
  components: {
    PageSectionMd,
    BlockHeaderMdc,
  },
};
</script>

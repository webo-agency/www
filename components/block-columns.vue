<template>
  <div
    class="flex flex-col items-center tablet-wide:items-start tablet-wide:flex-row pt-20 tablet-wide:py-20 desktop:py-[50px]"
    :class="{ 'tablet-wide:flex-row-reverse': contentOnRight }"
  >
    <div class="tablet-wide:basis-1/2">
      <EffectAppear>
        <BlockHeader
          class="no-padding header-small tablet-wide:max-w-[460px] desktop:mt-[70px] mb-5 desktop:mb-10"
          v-if="subtitle || title || description"
          :subtitle="subtitle"
          :title="title"
          :description="description"
        />
        <slot> </slot>
      </EffectAppear>
    </div>
    <div class="w-full tablet-wide:basis-1/2">
      <EffectAppear>
        <nuxt-picture
          v-if="image && image.url"
          class="px-5 desktop-wide:px-[60px] tablet-wide:min-h-[300px] object-contain"
          :class="
            image.url && imageMobile.url ? 'hidden tablet-wide:block' : 'block'
          "
          :src="image.url"
          :title="image.title ? image.title : ''"
          :alt="image.alt ? image.alt : 'WEBO image'"
        >
        </nuxt-picture>
        <nuxt-picture
          v-if="imageMobile && imageMobile.url"
          class="pt-8"
          :class="
            image.url && imageMobile.url
              ? 'block tablet-wide:hidden'
              : 'block tablet-wide:pt-0'
          "
          :src="imageMobile.url"
          :title="imageMobile.title ? imageMobile.title : ''"
          :alt="imageMobile.alt ? imageMobile.alt : 'WEBO image'"
          :imgAttrs="{
            class: 'max-w-[500px] w-full mx-auto object-contain object-bottom',
          }"
        >
        </nuxt-picture>
      </EffectAppear>
    </div>
  </div>
</template>

<script>
import BlockHeader from "./block-header.vue";
import EffectAppear from "./effect-appear.vue";
export default {
  name: "BlockColumns",
  props: {
    subtitle: { type: String, required: false },
    title: { type: String, required: false },
    description: { type: String, required: false },
    image: {
      type: Object,
      required: false,
    },
    imageMobile: {
      type: Object,
      required: false,
    },
    contentOnRight: { type: Boolean, required: false, default: false },
    HTMLContent: String,
  },
  components: { BlockHeader, EffectAppear },
};
</script>

<style></style>

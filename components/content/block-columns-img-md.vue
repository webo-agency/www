<template>
  <div
    class="flex flex-col items-center tablet-wide:items-start tablet-wide:flex-row pt-20 tablet-wide:py-20 desktop:py-[50px]"
    :class="{ 'tablet-wide:flex-row-reverse': contentOnRight }">
    <div class="tablet-wide:basis-1/2">
      <EffectAppearMdc>
        <BlockHeaderMdc class="no-padding header-small tablet-wide:max-w-[460px] desktop:mt-[70px] mb-5 desktop:mb-10"
          v-if="$slots.subtitle || $slots.title || $slots.description">
          <template v-if="$slots.subtitle" #subtitle>
            <slot name="subtitle" />
          </template>
          <template v-if="$slots.title" #title>
            <slot name="title" />
          </template>
          <template v-if="$slots.description" #description>
            <slot name="description" />
          </template>
        </BlockHeaderMdc>
        <slot> </slot>
      </EffectAppearMdc>
    </div>
    <div class="w-full tablet-wide:basis-1/2">
      <EffectAppearMdc>
        <nuxt-picture v-if="image && image.url"
          class="px-5 desktop-wide:px-[60px] tablet-wide:min-h-[300px] object-contain" :class="image.url && imageMobile.url ? 'hidden tablet-wide:block' : 'block'
            " :src="image.url" :title="image.title ? image.title : ''" :alt="image.alt ? image.alt : 'WEBO image'">
        </nuxt-picture>
        <nuxt-picture v-if="imageMobile && imageMobile.url"
          class="pt-4 max-w-[500px] w-full mx-auto object-contain object-bottom" :class="image.url && imageMobile.url
              ? 'block tablet-wide:hidden'
              : 'block tablet-wide:pt-0'
            " :imgAttrs="{ class: 'w-full' }" :src="imageMobile.url" :title="imageMobile.title ? imageMobile.title : ''"
          :alt="imageMobile.alt ? imageMobile.alt : 'WEBO image'">
        </nuxt-picture>
      </EffectAppearMdc>
    </div>
  </div>
</template>

<script>
import BlockHeaderMdc from "./block-header-md.vue";
import EffectAppearMdc from "./effect-appear-md.vue";
export default {
  name: "BlockColumns",
  props: {
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
  components: { BlockHeaderMdc, EffectAppearMdc },
};
</script>

<style></style>

<template>
  <div class="basis-full tablet:basis-1/2">
    <EffectAppearMdc :delay="delay * 100">
      <div class="tablet:flex items-start gap-4 desktop:gap-[30px] pr-5 desktop:pr-10">
        <div class="mb-2 tablet:mb-0 w-[65px] tablet:w-[80px] flex items-center justify-center">
          <nuxt-picture
            v-if="icon"
            :src="icon"
            class="size-full"
            :imgAttrs="{ class: 'w-full h-full object-contain' }"
            loading="lazy"
          />
        </div>
        <div class="flex-1 pt-2">
          <div v-if="$slots.title" class="text-base font-semibold [&_p]:m-0 [&_strong]:font-semibold">
            <ContentSlot :use="$slots.title" />
          </div>
          <div v-if="$slots.description" class="text-sm desktop:text-base font-normal text-gray-darker leading-relaxed [&_p]:m-0">
            <ContentSlot :use="$slots.description" />
          </div>
        </div>
      </div>
    </EffectAppearMdc>
  </div>
</template>

<script>
import EffectAppearMdc from "./effect-appear-md.vue";
export default {
  name: "IconTileGridMdc",
  props: {
    icon: String,
    delay: {
      type: Number,
      default: 0,
    },
  },
  components: { EffectAppearMdc },
};
</script>

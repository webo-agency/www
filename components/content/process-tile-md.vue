<template>
  <div
    class="swiper-slide flex flex-col w-full basis-4/5 shrink-0 group"
    :class="[isWideType ? 'pr-7 tablet:basis-1/2' : 'pr-5 tablet:basis-[30%] desktop:basis-1/3']"
  >
    <EffectAppearMdc class="desktop-delay" :delay="number * 100">
      <div class=" mb-5 desktop:mb-10"
      :class="[isWideType  ? ( iconInline ? 'mr-2 tablet:mr-10' : 'mr-2 tablet:mr-5') : 'max-w-sm']">
        <div>
          <div class="flex mb-2.5"
          :class="[!iconInline ? 'flex-col tablet:mb-5' : 'desktop:items-center' ]">
            <span
              class="block shrink-0 w-[40px] h-[40px] desktop:w-[60px] desktop:h-[60px] text-center leading-[40px] desktop:leading-[60px] mr-5 rounded-[5px] bg-green-light text-xl desktop:text-2xl text-green-main font-semibold"
              :class="{'mb-2.5 tablet:mb-5':!iconInline}"
              >{{ number }}</span
            >
            <div
              v-if="$slots.title"
              class="text-lg desktop:text-xl font-semibold"
              :class="{'max-w-sm' :!isWideType}"
            >
              <ContentSlot :use="$slots.title" />
            </div>
          </div>
          <div
            class="flex flex-col h-full justify-between"
            :class="{'ml-[60px] desktop:ml-[80px] desktop:mr-9':iconInline}"
          >
            <div
              v-if="$slots.description"
              class=" text-sm desktop:text-base font-normal"
              :class="[iconInline? 'mb-[30px]' : 'mb-2']"
            >
              <ContentSlot :use="$slots.description" />
            </div>
            <div v-if="hoverEffect"
              class="line relative w-[135px] h-0.5 rounded-full bg-gray-light overflow-hidden"
            ></div>
          </div>
        </div>
      </div>
    </EffectAppearMdc>
  </div>
</template>

<script>
import EffectAppearMdc from "./effect-appear-md.vue";
export default {
  props: {
    number: Number,
    hoverEffect: {
      type: Boolean,
      default: true
    },
    isWideType: {
      type: Boolean,
      default: false
    },
    iconInline: {
      type: Boolean,
      default: true
    },
  },
  components: { EffectAppearMdc },
};
</script>

<style  lang="postcss" scoped>

  .swiper-slide-active.group .line::after {
    @apply desktop:translate-x-0;
  }
  .swiper-slide-active:hover .line::after {
    @apply desktop:translate-x-full;
  }

  .line::after{
    @apply content-[''] block absolute -top-0.5 right-full w-full h-2 bg-green-main group-hover:translate-x-full transition duration-300
  }


.swiper-slide-active .line::after {
  @apply translate-x-full;
}
</style>

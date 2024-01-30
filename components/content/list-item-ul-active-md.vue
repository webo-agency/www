<template>
  <li>
    <effect-appear :toggleOpacity="false">
      <div class="flex flex-col tablet:flex-row" :class="[animated ? 'li-faded pb-10 tablet:pb-16' : 'pb-5 tablet:pb-7']">
        <nuxt-picture v-if="iconUrl" :src="iconUrl" class="shrink-0" :class="[iconBig ? 'w-12 tablet:w-[70px]' : 'w-10']"
          :imgAttrs="{ class: 'w-full object-contain' }" />
        <div class="tablet:ml-5 desktop:ml-[30px] tablet:pr-5">
          <div v-if="$slots.title" class="mb-5 text-xl font-semibold" :class="[iconBig ? 'mt-2 tablet:mt-5' : 'mt-2']">
            <ContentSlot :use="$slots.title" />
          </div>
          <div v-if="$slots.description" class="mb-5">
            <ContentSlot :use="$slots.description" />
          </div>
          <div v-if="animated"
            class="line relative w-[135px] h-0.5 rounded-full bg-gray-light overflow-hidden after:content-[''] after:absolute after:-top-0.5 after:right-full after:w-full after:h-2 after:bg-green-main tablet-small:after:translate-x-0 tablet-small:group-hover:after:translate-x-full after:transition after:duration-300">
          </div>
        </div>
      </div>
    </effect-appear>
  </li>
</template>

<script>
export default {
  props: {
    iconUrl: String,
    iconBig: {
      type: Boolean,
      default: false
    },
    animated: {
      type: Boolean,
      default: true
    },
  },
};
</script>

<style>
.effect .li-faded {
  @apply opacity-25 transition duration-300;
}

.effect.active .li-faded {
  @apply opacity-100;
}

.effect.active .line {
  @apply after:translate-x-full;
}
</style>

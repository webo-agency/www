<template>
  <div class="basis-full tablet-small:basis-1/2 desktop:basis-1/3"
  :class="{'desktop:basis-1/3':!iconInline}">
    <div
      ref="container"
      class="tile max-w-md tablet:mr-5 tablet-wide:mr-[75px] mb-10 desktop:mb-16 group"
      :class="{'flex flex-col desktop:flex-row tablet:!mr-10 desktop:!mr-16 !mb-10 !max-w-none':iconInline}"
    >
      <div class="mb-2.5 w-[40px] h-[40px] desktop:w-[60px] desktop:h-[60px] shrink-0"
      :class="{'mr-[30px] desktop:!mb-0':iconInline}">
        <nuxt-picture
          class="block shrink-0 w-full h-full overflow-hidden object-contain p-[5px] desktop:p-[10px] rounded-[5px] bg-green-light"
          v-if="iconUrl"
          :src="iconUrl"
          :imgAttrs="{class: 'w-full h-full object-contain'}"

        />
      </div>
      <div :class="{'mt-4':iconInline}">
        <div
          v-if="$slots.title"
          class="mb-5 text-lg desktop:text-xl font-semibold"
          :class="{'max-w-sm':!iconInline}"
        >
          <ContentSlot :use="$slots.title" />
        </div>
        <div
          v-if="$slots.description"
          class="mb-5 desktop:mb-[30px] leading-7 text-sm desktop:text-base font-normal"
        >
          <ContentSlot :use="$slots.description" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IconTileStaticMdc",
  props: {
    iconUrl: String,
    iconInline:{
      type: Boolean,
      default: false
    }
  },
};
</script>

<style  lang="postcss" scoped>
.tile :deep(.line::after){
  content: '';
 @apply absolute -top-0.5 right-full w-full h-2 bg-green-main tablet-small:translate-x-0 transition duration-300
}

.tile :deep(.line.active) {
  @apply after:translate-x-full;
}

.tile:hover .line::after{
  @apply tablet-small:translate-x-full
}
</style>

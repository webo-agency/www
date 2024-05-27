<template>
  <div>
    <div :class="textWhite ? 'text-white' : 'text-gray-darker'">
      <div
        v-if="$slots.subtitle"
        class="subtitle text-base desktop:text-lg font-normal"
        :class="{ 'text-center': center }"
      >
        <ContentSlot :use="$slots.subtitle" />
      </div>
      <div
        v-if="$slots.title"
        class="title text-2xl tablet:text-3xl desktop:text-4xl font-semibold"
        :class="[
          { ' mx-auto text-center': center },
          { 'mb-7 desktop:mb-12 ': $slots.description && !titleUnderline },
        ]"
        :style="[{ 'max-width': maxWidth + 'px' }]"
      >
        <ContentSlot :use="$slots.title" />
        <div
          v-if="titleUnderline"
          class="mt-7 mb-10 w-[200px] h-1 bg-green-main rounded-full"
        ></div>
      </div>
      <div
        v-if="$slots.description"
        class="text-base desktop:text-lg font-normal"
        :class="{ ' mx-auto text-center': center }"
        :style="[
          { 'max-width': !descriptionFullWidth ? maxWidth + 'px' : 'none' },
        ]"
      >
        <ContentSlot :use="$slots.description" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlockHeaderMdc",
  props: {
    maxWidth: {
      type: Number,
      default: 620,
    },
    descriptionFullWidth: {
      type: Boolean,
      default: false,
    },
    textWhite: Boolean,
    center: Boolean,
    titleUnderline: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="postcss" scoped>
.title :deep(h1) {
  @apply text-3xl tablet:text-4xl desktop:text-5xl pb-5;
}
.title :deep(h2) {
  @apply text-2xl tablet:text-3xl desktop:text-4xl;
}
.title :deep(h3) {
  @apply text-base tablet:text-lg pb-5;
}
.title :deep(h4) {
  @apply text-xl tablet:text-2xl desktop:text-3xl;
}

.title :deep(h5) {
  @apply text-2xl tablet:text-3xl pb-5;
}

.title :deep(h6) {
  @apply text-xl tablet:text-2xl pb-5;
}

.subtitle :deep(em) {
  @apply font-semibold;
}

.subtitle :deep(p) {
  @apply mb-0;
}
</style>

<template>
  <div :class="textWhite ? 'text-white' : 'text-gray-darker'">
    <div
      v-if="subtitle"
      class="prose subtitle text-base desktop:text-lg"
      v-html="$formatText(subtitle)"
      :class="{ 'text-center': center }"
    ></div>
    <div
      v-if="title"
      class="prose title text-2xl tablet:text-3xl desktop:text-4xl font-semibold"
      :class="[
        { ' mx-auto text-center': center },
        { 'mb-7 desktop:mb-12 ': description },
      ]"
      :style="[{ 'max-width': maxWidth + 'px' }]"
      v-html="$formatText(title)"
    ></div>
    <div
      v-if="description"
      class="prose text-base desktop:text-lg font-normal"
      :class="{ ' mx-auto text-center': center }"
      :style="[{ 'max-width': maxWidth + 'px' }]"
      v-html="$formatText(description)"
    ></div>
  </div>
</template>

<script>
export default {
  name: "BlockHeader",
  props: {
    subtitle: String,
    title: String,
    description: String,
    center: Boolean,
    maxWidth: {
      type: Number,
      default: 620,
    },
    textWhite: Boolean,
  },
};
</script>

<style  lang="postcss" scoped>
.title :deep(h2) {
  @apply text-3xl tablet:text-4xl desktop:text-5xl pb-5;
}

.subtitle :deep(em) {
  @apply font-semibold;
}
</style>

<template>
  <div
    class="flex flex-col tablet-wide:flex-row justify-between tablet-wide:items-end pb-5 desktop:pb-10"
  >
    <BlockHeader
      class="no-padding header-small tablet-wide:max-w-[460px]"
      v-if="subtitle || title || description"
      :subtitle="subtitle"
      :title="title"
      :description="description"
    />
    <CustomLink
      v-if="link"
      class="prose flex items-center w-max mt-10 text-base text-green-main hover:text-green-mainHover font-semibold transition duration-200"
      active-class=""
      :url="link.url"
    >
      <span class="prose mr-2.5" v-html="$formatText(link.title)"></span>
      <svg
        class="inline text-current fill-current"
        width="23"
        height="16"
        viewBox="0 0 23 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.0863 0.111816L13.7605 1.43762L19.3853 7.06244H0V8.9375H19.3852L13.7605 14.5621L15.0863 15.8879L22.9745 7.99988L15.0863 0.111816Z"
        />
      </svg>
    </CustomLink>
  </div>
</template>

<script>
import CustomLink from "./custom-link.vue";
export default {
  name: "BlockHeaderLink",
  props: {
    subtitle: String,
    title: String,
    description: String,
    center: Boolean,
    maxWidth: Number,
    link: Object,
  },
  components: { CustomLink },
};
</script>

<style lang="postcss" scoped >
div.no-padding :deep() {
  @apply px-0;
}

.title :deep(h2) {
  @apply text-3xl tablet:text-4xl desktop:text-5xl pb-5;
}

.title :deep(h3) {
  @apply text-2xl tablet:text-3xl desktop:text-4xl;
}
.subtitle :deep(em) {
  @apply font-semibold;
}
</style>

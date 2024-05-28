<template>
  <div>
    <div :class="textWhite ? 'text-white' : 'text-gray-darker'">
      <div
        v-if="$slots.subtitle"
        class="subtitle text-base desktop:text-lg"
        :class="{ 'text-center': center }"
      >
        <ContentSlot :use="$slots.subtitle" />
      </div>
      <div class="desktop:flex justify-between">
        <div
          v-if="$slots.title"
          class="title text-2xl tablet:text-3xl desktop:text-4xl font-semibold"
          :style="[{ 'max-width': maxWidth + 'px' }]"
          :class="{ 'tablet:pr-5': $slots.description }"
        >
          <ContentSlot :use="$slots.title" />
        </div>
        <div
          v-if="$slots.description"
          class="description self-end tablet:basis-1/2 text-base desktop:text-lg font-normal relative pb-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            class="hidden desktop:block absolute top-[-100px] left-[22%] z-[2]"
            data-v-inspector="components/content/block-hero-md.vue:7:5"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M-0.00069046 14.7187C-0.00069046 17.6311 2.36471 20 5.27775 20L9.9977 19.9968L14.7173 20C17.6307 20 19.9961 17.6311 19.9961 14.7187V5.27815C19.9961 2.36894 17.6307 0 14.7176 0H5.27775C2.36471 0 -0.00069046 2.36894 -0.00069046 5.27815V14.7187ZM1.11599 14.7187V5.27815C1.11599 2.98275 2.98108 1.11892 5.27775 1.11892H14.7176C17.0143 1.11892 18.8791 2.98275 18.8791 5.27815V14.7187C18.8791 17.0173 17.0143 18.8811 14.7176 18.8811L9.9977 18.8779C9.99738 18.8779 5.27775 18.8811 5.27775 18.8811C2.98108 18.8811 1.11599 17.0173 1.11599 14.7187Z"
              fill="#07E7C4"
              data-v-inspector="components/content/block-hero-md.vue:15:7"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            class="hidden desktop:block absolute top-[120px] right-[40%] z-[2]"
            data-v-inspector="components/content/block-hero-md.vue:7:5"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M-0.00069046 14.7187C-0.00069046 17.6311 2.36471 20 5.27775 20L9.9977 19.9968L14.7173 20C17.6307 20 19.9961 17.6311 19.9961 14.7187V5.27815C19.9961 2.36894 17.6307 0 14.7176 0H5.27775C2.36471 0 -0.00069046 2.36894 -0.00069046 5.27815V14.7187ZM1.11599 14.7187V5.27815C1.11599 2.98275 2.98108 1.11892 5.27775 1.11892H14.7176C17.0143 1.11892 18.8791 2.98275 18.8791 5.27815V14.7187C18.8791 17.0173 17.0143 18.8811 14.7176 18.8811L9.9977 18.8779C9.99738 18.8779 5.27775 18.8811 5.27775 18.8811C2.98108 18.8811 1.11599 17.0173 1.11599 14.7187Z"
              fill="#e9e9e9"
              data-v-inspector="components/content/block-hero-md.vue:15:7"
            ></path>
          </svg>
          <ContentSlot :use="$slots.description" />
        </div>
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
  },
};
</script>

<style lang="postcss" scoped>
.title :deep(h2) {
  @apply text-2xl tablet:text-3xl desktop:text-4xl;
}
.title :deep(h3) {
  @apply text-base tablet:text-lg pb-5;
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

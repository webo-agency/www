<template>
  <div>
    <div :class="textWhite ? 'text-white' : 'text-gray-darker'">
      <div
        v-if="$slots.subtitle"
        class="subtitle text-base desktop:text-lg font-normal"
        :class="{ 'text-center': center }"
      >
        <slot name="subtitle" />
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
        <slot name="title" />
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
        <slot name="description" />
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
@reference "~/assets/css/main.css";

/* ========================================================================== */
/* Plain CSS fallback for environments where SFC @apply is not transformed    */
/* ========================================================================== */

.title :deep(h1) {
  padding-bottom: 20px;
  font-size: 30px;
  line-height: 36px;
}

.title :deep(h2) {
  font-size: 25px;
  line-height: 32px;
}

.title :deep(h3) {
  padding-bottom: 20px;
  font-size: 16px;
  line-height: 28px;
}

.title :deep(h4) {
  font-size: 18px;
  line-height: 28px;
}

.title :deep(h5) {
  padding-bottom: 20px;
  font-size: 25px;
  line-height: 32px;
}

.title :deep(h6) {
  padding-bottom: 20px;
  font-size: 20px;
  line-height: 31px;
}

.subtitle :deep(em) {
  font-weight: 600;
}

.subtitle :deep(p) {
  margin-bottom: 0;
}

@media (min-width: 768px) {
  .title :deep(h1) {
    font-size: 35px;
    line-height: 42px;
  }

  .title :deep(h2) {
    font-size: 30px;
    line-height: 36px;
  }

  .title :deep(h3) {
    font-size: 18px;
    line-height: 28px;
  }

  .title :deep(h4) {
    font-size: 20px;
    line-height: 31px;
  }

  .title :deep(h5) {
    font-size: 30px;
    line-height: 36px;
  }

  .title :deep(h6) {
    font-size: 25px;
    line-height: 32px;
  }
}

@media (min-width: 1248px) {
  .title :deep(h1) {
    font-size: 45px;
    line-height: 55px;
  }

  .title :deep(h2) {
    font-size: 35px;
    line-height: 42px;
  }

  .title :deep(h3) {
    font-size: 18px;
    line-height: 28px;
  }

  .title :deep(h4) {
    font-size: 25px;
    line-height: 32px;
  }

  .title :deep(h5) {
    font-size: 30px;
    line-height: 36px;
  }

  .title :deep(h6) {
    font-size: 25px;
    line-height: 32px;
  }
}

/* ========================================================================== */
/* Original Tailwind @apply source kept for reference and future restoration   */
/* ========================================================================== */

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
  @apply text-lg tablet:text-xl desktop:text-2xl;
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

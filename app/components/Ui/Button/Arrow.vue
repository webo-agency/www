<template>
  <UiLink
    v-if="link && $slots.default"
    class="prose flex items-center w-max mt-10 text-base text-green-main hover:text-green-mainHover font-semibold transition duration-200"
    active-class=""
    :url="link"
  >
    <div
      v-if="$slots.default"
      class="mr-2.5 [&_p]:!mb-0 [&_p]:!text-sm desktop:[&_p]:!text-base"
    >
      <slot />
    </div>
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
  </UiLink>
</template>

<script>
import UiLink from "../Link.vue";

export default {
  props: {
    link: {
      type: String,
      required: true,
      default: "/",
    },
  },
  components: { UiLink },
};
</script>

<style></style>

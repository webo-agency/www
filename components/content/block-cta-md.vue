<template>
  <div
    class="relative flex flex-col tablet-wide:flex-row justify-between tablet-wide:items-center px-10 desktop-wide:px-[120px] py-[60px] desktop:py-20 rounded-[5px] overflow-hidden"
    :class="{ 'tablet-wide:!flex-col [&_*]:text-center': vertical }"
  >
    <BlockHeaderMdc
      class="no-padding text-center tablet:text-left z-20"
      :maxWidth="maxWidth"
    >
      <template v-if="$slots.subtitle" #subtitle>
        <slot name="subtitle" />
      </template>
      <template v-if="$slots.title" #title>
        <slot name="title" />
      </template>
      <template v-if="$slots.description" #description>
        <slot name="description" />
      </template>
    </BlockHeaderMdc>
    <ButtonMain
      class="mt-10 mx-auto desktop:mx-0 text-white z-20"
      :link="button.link"
      :title="button.title"
      :isWide="button.isWide"
    />
  </div>
</template>

<script>
import BlockHeaderMdc from "./block-header-md.vue";
import ButtonMain from "../button-main.vue";

export default {
  name: "BlockCtaMdc",
  components: { BlockHeaderMdc, ButtonMain },
  props: {
    maxWidth: {
      type: Number,
      default: 620,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
    button: {
      type: Object,
      required: false,
      default: { link: "/", title: "Skontaktuj się", isWide: false },
    },
  },
};
</script>

<style></style>

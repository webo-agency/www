<template>
  <div
    class="relative flex flex-col justify-between items-center px-5 desktop-wide:px-[120px] py-[40px] desktop:py-0 [&>div>div>div]:mb-2"
    :class="{ 'tablet-wide:!flex-col [&_*]:text-center': vertical }">
    <BlockHeaderMdc class="no-padding text-center tablet:text-left z-20" :maxWidth="maxWidth" center>
      <template v-if="$slots.subtitle" #subtitle>
        <slot name="subtitle" />
      </template>
      <template v-if="$slots.title" #title>
        <div class="title font-semibold text-center text-3xl mb-3">
          <slot name="title" />
        </div>
      </template>
      <template v-if="$slots.description" #description>
        <div class="description mb-4 text-base desktop:text-xl font-normal text-center">
          <slot name="description" />
        </div>
      </template>
    </BlockHeaderMdc>
    <ButtonMain class="mt-5 mx-auto desktop:mx-0 text-black z-20" :link="button.link" :title="button.title"
      :isWide="button.isWide" />
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

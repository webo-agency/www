<template>
  <li class="flex mb-5 desktop:mb-10 last:mb-0">
    <nuxt-picture
      v-if="iconUrl"
      :src="iconUrl"
      class="shrink-0 h-8 w-8 desktop:h-12 desktop:w-12 object-contain"
    />
    <div
      class="prose ml-2.5 desktop:ml-[30px] text-lg desktop:text-xl font-semibold text-gray-darker"
    >
      <ContentSlot :use="$slots.text" />
    </div>
  </li>
</template>

<script>
export default {
  props: {
    iconUrl: String,
  },
};
</script>

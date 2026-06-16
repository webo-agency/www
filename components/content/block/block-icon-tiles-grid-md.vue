<template>
  <div class="icon-tiles-grid p-5 tablet:p-[60px] bg-green-gray">
    <div v-if="$slots.title" class="col-span-full mb-10 tablet:mb-[60px] [&_h3]:text-xl [&_h3]:tablet:text-2xl [&_h3]:leading-[26px] [&_h3]:font-semibold [&_h3]:mb-0">
      <ContentSlot :use="$slots.title" />
    </div>
    <div v-if="$slots.items" class="col-span-full grid grid-cols-1 tablet:grid-cols-2 gap-y-8 tablet:gap-y-[100px] gap-x-10 tablet:gap-x-16">
      <slot name="items"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlockIconTilesGridMdc",
};
</script>

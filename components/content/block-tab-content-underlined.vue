<template>
  <div class="tab-block">
    <div
        v-if="$slots.title"
        class="title text-2xl tablet:text-xl desktop:text-2xl font-semibold"
        :class="[
          { 'mb-7 desktop:mb-12 ': $slots.content },
        ]"
        :style="[{ 'max-width': maxWidth + 'px' }]"
      >
        <ContentSlot :use="$slots.title" />
      </div>
      <div
        v-if="$slots.content"
        class="text-base desktop:text-lg font-normal"
      >
        <ContentSlot :use="$slots.content" />
      </div>
      <span class="block relative w-[135px] h-0.5 rounded-full bg-green-main overflow-hidden "></span>
  </div>
</template>

<script>
export default {
    props:{
        maxWidth: {
            type: Number,
            default: 620,
        },
    }

}
</script>

<style scoped>

.tab-block{
    @apply mb-10 tablet:mb-0
}
.left .tab-block{
    @apply tablet:pr-10 desktop:pr-24
}
.right .tab-block{
    @apply tablet:pl-10 desktop:pl-24
}

.tab-block :deep() p{
    @apply mb-4 tablet:mb-9 last:tablet:mb-7
}
</style>
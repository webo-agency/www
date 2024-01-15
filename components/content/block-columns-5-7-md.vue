<template>
  <div class="flex flex-col tablet:flex-row">
    <div class="basis-full left" :class="[reverseWidths ? 'tablet:basis-7/12' : 'tablet:basis-5/12']">
      <slot name="left"></slot>
    </div>
    <div class="basis-full right" :class="[reverseWidths ? 'tablet:basis-5/12' : 'tablet:basis-7/12']">
      <slot name="right">
      </slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  reverseWidths: Boolean
})
</script>

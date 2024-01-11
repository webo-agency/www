<template>
  <div class=" h-[65px] p-2 tablet:mt-0 bg-white rounded-[5px] overflow-hidden" :class="[
    { 'border-[1px] border-green-main': border },
    [shrinkMobile ? 'w-[100px] tablet:w-[204px]' : 'w-[204px]'],
  ]">
    <div class="clutch-widget" data-url="https://widget.clutch.co" data-widget-type="2" data-height="45"
      data-nofollow="true" data-expandifr="true" data-scale="100" data-clutchcompany-id="1892969"></div>
  </div>
</template>

<script setup>
defineProps({
  border: { type: Boolean, default: false },
  shrinkMobile: { type: Boolean, default: true }
});

useHead({
  script: [
    {
      type: "text/javascript",
      src: "https://widget.clutch.co/static/js/widget.js",
      async: true,
    },
  ],
});
</script>

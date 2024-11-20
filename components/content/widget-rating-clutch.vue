<template>
  <div class=" h-[65px] p-2 tablet:mt-0 bg-white rounded-[5px] overflow-hidden" :class="[
    { 'border-[1px] border-green-main': border },
    [shrinkMobile ? 'w-[100px] tablet:w-[204px]' : 'w-[204px]'],
  ]">
    <iframe id="iframe-0.9718574281008987" width="100%" loading="lazy"
      src="https://widget.clutch.co/widgets/get/2?ref_domain=localhost&amp;uid=1892969&amp;rel_nofollow=true&amp;ref_path=/"
      height="45px" scrolling="no" style="border: none; overflow: hidden; display: block; height: 45px;"></iframe>
  </div>
</template>

<script setup>
defineProps({
  border: { type: Boolean, default: false },
  shrinkMobile: { type: Boolean, default: true }
});
</script>

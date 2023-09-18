<template>
  <div
    class="relative z-10 p-5 py-[60px] pr-7 desktop:p-10 rounded-[5px] bg-gray-light shadow-xl shadow-[#424242]/[0.04]"
  >
    <ul
      class="flex flex-wrap desktop-wide:flex-nowrap justify-around desktop:justify-around gap-5 desktop-wide:gap-[60px]"
    >
      <slot> </slot>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BlockCountersMdc",
};
</script>

<style></style>

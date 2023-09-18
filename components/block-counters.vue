<template>
  <div
    class="p-5 py-[60px] pr-7 desktop:p-10 rounded-[5px] bg-gray-light shadow-xl shadow-[#424242]/[0.04]"
  >
    <ul
      class="flex flex-wrap desktop-wide:flex-nowrap justify-around desktop:justify-around gap-5 desktop-wide:gap-[60px]"
    >
      <li
        v-for="(item, index) in data"
        :key="index"
        class="basis-full tablet:basis-[300px] tablet-wide:basis-[400px] desktop-wide:basis-auto"
      >
        <Counter
          v-if="item.title && item.target && item.symbol"
          :title="item.title"
          :target="item.target"
          :symbol="item.symbol"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import Counter from "./counter.vue";
export default {
  name: "BlockCounters",
  props: {
    data: Array,
  },
  components: { Counter },
};
</script>

<style></style>

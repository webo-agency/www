<template>
  <ul class="flex flex-wrap">
    <li
      class="basis-full tablet-small:basis-1/2 desktop:basis-1/3"
      v-for="(item, index) in data"
      :key="index"
    >
      <EffectAppear :delay="index * 100">
        <IconTile :data="item" />
      </EffectAppear>
    </li>
  </ul>
</template>

<script>
import IconTile from "./icon-tile.vue";
import EffectAppear from "./effect-appear.vue";
export default {
  name: "BlockIcons",
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  components: { IconTile, EffectAppear },
};
</script>

<style></style>

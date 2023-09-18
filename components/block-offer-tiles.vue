<template>
  <ul class="flex flex-wrap">
    <li
      v-for="(item, index) in data"
      :key="index"
      :class="
        item.description
          ? 'basis-full tablet-small:basis-1/2 desktop-wide:basis-1/4'
          : 'basis-full tablet-small:basis-1/2'
      "
    >
      <EffectAppear class="desktop-delay h-full" :delay="index * 100">
        <OfferTile :data="item" />
      </EffectAppear>
    </li>
  </ul>
</template>

<script>
import OfferTile from "./offer-tile.vue";
export default {
  name: "BlockOfferTiles",
  props: {
    data: Array,
  },
  components: { OfferTile },
};
</script>

<style></style>

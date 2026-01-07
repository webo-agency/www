<template>
  <div class="max-w-[900px] mx-auto py-[50px] tablet:py-[100px]">
    <div 
      v-if="$slots.header"
      class="_mb-[50px] _tablet:mb-[70px]"
    >
      <ContentSlot :use="$slots.header" />
    </div>
    <div class="border-t border-t-gray-light">
      <ContentSlot :use="$slots.default" />
    </div>
  </div>
</template>

<script>
export default {
  name: "BlockFaqMd",
  provide() {
    return {
      faqActiveItem: () => this.activeItem,
      faqHandleClick: this.handleItemClicked
    };
  },
  data() {
    return {
      activeItem: null
    };
  },
  methods: {
    handleItemClicked(itemId) {
      this.activeItem = this.activeItem === itemId ? null : itemId;
    }
  }
};
</script>

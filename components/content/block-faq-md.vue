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
  data() {
    return {
      faqState: {
        activeItem: null,
        handleItemClicked: (itemId) => {
          this.faqState.activeItem = this.faqState.activeItem === itemId ? null : itemId;
        }
      }
    };
  },
  provide() {
    return { faqState: this.faqState };
  }
};
</script>

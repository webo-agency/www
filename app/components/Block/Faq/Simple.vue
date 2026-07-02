<template>
  <div class="max-w-full">
    <div class="space-y-4 tablet:space-y-6">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "BlockFaqSimpleMd",
  data() {
    return {
      faqState: {
        activeItem: '01',
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

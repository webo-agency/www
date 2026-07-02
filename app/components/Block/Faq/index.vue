<template>
  <div class="max-w-[900px] mx-auto py-[50px] tablet:py-[100px]" itemscope itemtype="https://schema.org/FAQPage">
    <div 
      v-if="$slots.header"
      class="_mb-[50px] _tablet:mb-[70px]"
    >
      <slot name="header" />
    </div>
    <div class="border-t border-t-gray-light">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
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

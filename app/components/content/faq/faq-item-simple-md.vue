<template>
  <div class="border-b border-b-gray-light">
    <div class="group flex items-center gap-4 tablet:gap-5 py-4 tablet:py-5 cursor-pointer hover:bg-gray-lighter transition duration-200"
      @click="faqState.handleItemClicked(number)">
      <div class="flex items-center justify-center shrink-0 w-[58px] h-[44px] rounded-full bg-[#e4efed] transition duration-200"
        :class="{'bg-green-main': isExpanded}">
        <span class="text-lg tablet:text-xl font-semibold leading-none text-center text-gray-darker transition duration-200"
          :class="{'text-white': isExpanded}"
          :style="!isExpanded ? { color: '#202020' } : {}">
          {{ number }}
        </span>
      </div>
      <div class="flex-1 pt-1">
        <h4 v-if="$slots.title" class="text-lg tablet:text-xl font-semibold text-gray-darker leading-snug transition duration-200">
          <ContentSlot :use="$slots.title" />
        </h4>
      </div>
      <div v-if="$slots.description" class="shrink-0 flex items-center justify-center w-6 h-6">
        <svg class="w-5 h-5 transition duration-300" :class="{'rotate-180': isExpanded}" xmlns="http://www.w3.org/2000/svg" width="15" height="8" viewBox="0 0 15 8" fill="none">
          <path d="M14.2143 0.5L7.35714 7.35714L0.5 0.5" stroke="#3A3944" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
    <div v-if="$slots.description" class="overflow-hidden transition-all duration-500" 
      :style="{'height': `${containerHeight}px`}">
      <div
        ref="descriptionContainer"
        class="px-4 tablet:px-5 pb-4 tablet:pb-5 tablet:pl-20 [&_p]:text-lg tablet:text-base text-gray-darker leading-relaxed"
        :class="{'opacity-0': !isExpanded}"
      >
        <ContentSlot :use="$slots.description" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FaqItemSimpleMd",
  props: {
    number: {
      type: String,
      required: true,
    },
  },
  inject: ['faqState'],
  data() {
    return {
      containerHeight: 0,
    };
  },
  computed: {
    isExpanded() {
      return this.faqState.activeItem === this.number;
    }
  },
  watch: {
    isExpanded() {
      this.$nextTick(() => {
        if (this.isExpanded && this.$refs.descriptionContainer) {
          this.containerHeight = this.$refs.descriptionContainer.scrollHeight;
        } else {
          this.containerHeight = 0;
        }
      });
    },
  },
  mounted() {
    this.$nextTick(() => {
      if (this.isExpanded && this.$refs.descriptionContainer) {
        this.containerHeight = this.$refs.descriptionContainer.scrollHeight;
      }
    });
  }
};
</script>

<style scoped>
</style>

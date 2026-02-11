<template>
  <div class="border-b border-b-gray-light" :data-faq-id="number">
    <div class="group flex items-center gap-4 tablet:gap-5 pt-0 pb-3 tablet:py-5 transition duration-200">
      <div class="flex items-center justify-center shrink-0 w-12 tablet:w-[58px] h-10 tablet:h-[44px] rounded-full bg-[#e4efed] transition duration-200">
        <span class="text-[15px] tablet:text-xl font-semibold leading-none text-center text-gray-darker transition duration-200"
          :style="!isExpanded ? { color: '#202020' } : {}">
          {{ number }}
        </span>
      </div>
      <div class="flex-1 pt-1">
        <h4 v-if="$slots.title" class="text-[15px] tablet:text-xl font-semibold text-gray-darker leading-snug transition duration-200">
          <ContentSlot :use="$slots.title" />
        </h4>
      </div>
      <div v-if="$slots.description" class="shrink-0 flex items-center justify-center w-6 h-6">
        <svg class="w-5 h-5 transition duration-300" :class="{'rotate-180': isExpanded}" xmlns="http://www.w3.org/2000/svg" width="15" height="8" viewBox="0 0 15 8" fill="none">
          <path d="M14.2143 0.5L7.35714 7.35714L0.5 0.5" stroke="#3A3944" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
    <div v-if="$slots.description" class="overflow-hidden transition-all" 
      :style="{'height': `${containerHeight}px`, 'transition-duration': isInScrollMode ? '50ms' : '500ms'}">
      <div
        ref="descriptionContainer"
        class="pl-2 tablet:px-5 pb-4 tablet:pb-5 tablet:pl-20 [&_p]:text-sm [&_p]:tablet:text-lg tracking-tighter text-gray-darker leading-relaxed"
        :class="{'opacity-0': !isExpanded}"
        :style="{'opacity': isScrollControlled ? (scrollProgress / 100) : (isExpanded ? 1 : 0), 'transition': isInScrollMode ? 'opacity 50ms' : 'opacity 500ms'}"
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
      containerHeight: 0
    };
  },
  computed: {
    isExpanded() {
      // During scroll mode, only show if has actual scroll progress
      if (this.isInScrollMode) {
        return this.scrollProgress > 0;
      }
      // Outside scroll mode, show based on active state
      return this.faqState.activeItem === this.number;
    },
    scrollProgress() {
      return this.faqState.scrollProgress[this.number] || 0;
    },
    isScrollControlled() {
      return this.isInScrollMode;
    },
    isInScrollMode() {
      return this.faqState.isScrollingThroughFaq;
    }
  },
  watch: {
    isExpanded() {
      if (!this.isInScrollMode) {
        this.updateContainerHeight();
      }
    },
    scrollProgress() {
      if (this.isInScrollMode) {
        this.updateContainerHeightByProgress();
      }
    }
  },
  methods: {
    updateContainerHeight() {
      this.$nextTick(() => {
        if (this.isExpanded && this.$refs.descriptionContainer) {
          this.containerHeight = this.$refs.descriptionContainer.scrollHeight;
        } else {
          this.containerHeight = 0;
        }
      });
    },
    updateContainerHeightByProgress() {
      this.$nextTick(() => {
        if (this.$refs.descriptionContainer) {
          const fullHeight = this.$refs.descriptionContainer.scrollHeight;
          this.containerHeight = (fullHeight / 100) * this.scrollProgress;
        }
      });
    }
  },
  mounted() {
    this.faqState.registerItem(this.number);
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

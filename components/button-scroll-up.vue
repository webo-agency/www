<template>
  <div
    class="w-full sticky z-30 bottom-0 px-5 tablet:px-10 desktop:px-20 pointer-events-none"
  >
    <div
      class="flex justify-end max-w-screen-desktop-wide mx-auto pointer-events-none h-0 items-end overflow-visible transition duration-200"
      :class="{ 'translate-y-[100px] opacity-0': isHidden }"
    >
      <button
        aria-label="Scroll up"
        class="appearance-none flex items-center justify-center bg-green-main rounded-full w-[60px] h-[60px] hover:bg-green-mainHover bottom-0 mb-[90px] shadow-green-mainHover/40 shadow-lg transition duration-300 pointer-events-auto"
        @click="scrollToTop()"
      >
        <svg
          width="19"
          height="25"
          viewBox="0 0 19 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.916503 8.58363L2.35919 10.0263L8.47992 3.90559L8.47992 25L10.5203 25L10.5203 3.90578L16.6408 10.0263L18.0835 8.58363L9.50001 -3.75197e-07L0.916503 8.58363Z"
            fill="#FAFAFA"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { useWindowScroll, useWindowSize } from "@vueuse/core";

export default {
  setup() {
    const { height } = useWindowSize();
    const { y } = useWindowScroll();
    return { y, height };
  },
  data() {
    return {
      isHidden: true,
    };
  },
  watch: {
    y(value, height) {
      this.checkScrollOffset();
    },
  },
  mounted() {
    this.checkScrollOffset();
  },
  methods: {
    checkScrollOffset() {
      const windowHeight = this.height;
      if (windowHeight) {
        this.isHidden = this.y < windowHeight;
      }
    },

    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style></style>

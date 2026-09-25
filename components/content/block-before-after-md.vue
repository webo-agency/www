<template>
  <div
    class="block-before-after relative overflow-hidden rounded-[5px] px-5 py-10 tablet:px-10 tablet:py-[60px]"
  >
    <div
      class="pointer-events-none absolute left-0 top-0"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="634" height="513" viewBox="0 0 634 513" fill="none">
      <g filter="url(#filter0_f_9160_26818)">
      <circle cx="234" cy="112.436" r="300" fill="#A9E8D3" fill-opacity="0.25"/>
      </g>
      <defs>
      <filter id="filter0_f_9160_26818" x="-166" y="-287.564" width="800" height="800" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_9160_26818"/>
      </filter>
      </defs>
      </svg>  
    </div>

    <div
      class="pointer-events-none absolute right-0 bottom-0"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="563" height="528" viewBox="0 0 563 528" fill="none">
      <g filter="url(#filter0_f_9160_26817)">
      <circle cx="384.5" cy="384.5" r="284.5" fill="#A9E8D3" fill-opacity="0.25"/>
      </g>
      <defs>
      <filter id="filter0_f_9160_26817" x="0" y="0" width="769" height="769" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_9160_26817"/>
      </filter>
      </defs>
      </svg>  
    </div>

    <div
      class="relative z-10 mx-auto flex max-w-[1380px] flex-col items-center gap-5 tablet-wide:flex-row tablet-wide:items-start tablet-wide:gap-5"
    >
      <div class="flex w-full justify-between tablet-wide:hidden">
        <span class="label">{{ beforeLabel }}</span>
        <span class="label">{{ afterLabel }}</span>
      </div>

      <span class="label hidden tablet-wide:block tablet-wide:pt-[45px]">{{ beforeLabel }}</span>

      <div
        class="w-full flex-1 rounded-[20px] bg-[rgba(255,255,255,0.4)] p-1.5 shadow-[0_16px_100px_0_#0000001A] backdrop-blur-[41.2px] tablet:rounded-[40px] tablet:p-3"
      >
        <div
          ref="frame"
          class="relative w-full touch-pan-y select-none overflow-hidden rounded-[14px] tablet:rounded-[30px] cursor-ew-resize"
          @pointerdown="onPointerDown"
          @pointermove="onPointerMove"
          @pointerup="onPointerUp"
          @pointercancel="onPointerUp"
        >
          <nuxt-img
            :src="after"
            :alt="afterAlt || afterLabel"
            class="block h-auto w-full"
            draggable="false"
            loading="lazy"
          />
          <nuxt-img
            :src="before"
            :alt="beforeAlt || beforeLabel"
            class="absolute inset-0 block h-full w-full object-cover"
            :style="{ clipPath: `inset(0 ${100 - position}% 0 0)` }"
            draggable="false"
            loading="lazy"
          />

          <div
            class="absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white"
            :style="{ left: `${position}%` }"
          ></div>

          <button
            type="button"
            role="slider"
            aria-label="Porównaj przed i po"
            aria-valuemin="0"
            aria-valuemax="100"
            :aria-valuenow="Math.round(position)"
            class="absolute top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-lg transition-transform duration-400 hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-green-main/40 lg:h-20 lg:w-20"
            :style="{ left: `${position}%` }"
            @keydown="onKeyDown"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-full w-full" viewBox="0 0 80 80" fill="none">
              <rect width="80" height="80" rx="40" fill="#08DBBA" />
              <path
                d="M52.5 40.0001L27.5 40.0001M44.9571 47.5L52.5 40.0001L44.9571 32.5M35.0429 47.5L27.5 40.0001L35.0429 32.5002"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <span class="label hidden tablet-wide:block tablet-wide:pt-[45px]">{{ afterLabel }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    before: {
      type: String,
      required: true,
    },
    after: {
      type: String,
      required: true,
    },
    beforeLabel: {
      type: String,
      default: 'Przed',
    },
    afterLabel: {
      type: String,
      default: 'Po',
    },
    beforeAlt: String,
    afterAlt: String,
    start: {
      type: Number,
      default: 50,
    },
  },
  data() {
    return {
      position: this.start,
      dragging: false,
    };
  },
  methods: {
    updatePosition(clientX) {
      const rect = this.$refs.frame.getBoundingClientRect();
      const percent = ((clientX - rect.left) / rect.width) * 100;
      this.position = Math.min(100, Math.max(0, percent));
    },
    onPointerDown(e) {
      this.dragging = true;
      this.$refs.frame.setPointerCapture(e.pointerId);
      this.updatePosition(e.clientX);
    },
    onPointerMove(e) {
      if (this.dragging) this.updatePosition(e.clientX);
    },
    onPointerUp(e) {
      this.dragging = false;
      if (this.$refs.frame.hasPointerCapture(e.pointerId)) {
        this.$refs.frame.releasePointerCapture(e.pointerId);
      }
    },
    onKeyDown(e) {
      const step = e.shiftKey ? 10 : 2;
      if (e.key === 'ArrowLeft') this.position = Math.max(0, this.position - step);
      else if (e.key === 'ArrowRight') this.position = Math.min(100, this.position + step);
      else if (e.key === 'Home') this.position = 0;
      else if (e.key === 'End') this.position = 100;
      else return;
      e.preventDefault();
    },
  },
};
</script>

<style lang="postcss" scoped>
.label {
  @apply text-[28px] leading-none lg:text-[44px] font-extrabold font-['Poppins'] text-[#A9E8D3];
}
</style>

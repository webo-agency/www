<template>
  <div class="block-showcase-scroll relative px-5 py-10 tablet:px-10 tablet:py-[60px] overflow-hidden">
    <div
      v-if="decoration"
      class="pointer-events-none absolute right-0 top-0 h-2/3 w-[85%] lg:w-[1242px] rounded-[5px] bg-[#A9E8D3]/90"
    ></div>

    <div
      class="pointer-events-none absolute left-0 top-0"
    >
      <svg class="max-w-[350px] lg:max-w-full" xmlns="http://www.w3.org/2000/svg" width="634" height="513" viewBox="0 0 634 513" fill="none">
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
      <svg class="max-w-[350px] lg:max-w-full" xmlns="http://www.w3.org/2000/svg" width="563" height="528" viewBox="0 0 563 528" fill="none">
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
      class="relative z-10 mx-auto w-full max-w-[1248px] lg:min-w-[1350px] rounded-[20px] bg-[rgba(255,255,255,0.4)] p-1.5 shadow-[0_16px_100px_0_#0000001A] backdrop-blur-[41.2px] tablet:rounded-[40px] tablet:p-3"
    >
      <div
        class="frame relative aspect-[4/5] w-full lg:min-w-[1248px] overflow-hidden rounded-[14px] bg-white tablet:aspect-[16/10] tablet:rounded-[30px]"
      >
        <nuxt-img
          :src="src"
          :alt="alt"
          class="scroll-img absolute left-0 top-0 block h-auto w-full"
          :style="{ animationDuration: `${speed}s` }"
          draggable="false"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: '',
    },
    // czas jednego przewinięcia (w dół lub w górę) w sekundach - im dłuższa grafika, tym większa wartość
    speed: {
      type: Number,
      default: 20,
    },
    decoration: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="postcss" scoped>
.frame {
  container-type: size;
}

.scroll-img {
  animation: showcase-scroll 16s linear infinite alternate;
}

.frame:hover .scroll-img {
  animation-play-state: running;
}

@keyframes showcase-scroll {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(calc(-100% + 100cqh));
  }
}

@media (prefers-reduced-motion: reduce) {
  .scroll-img {
    animation: none;
  }
}
</style>

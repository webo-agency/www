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
        ref="frame"
        class="frame relative aspect-[4/5] w-full lg:min-w-[1248px] overflow-hidden rounded-[14px] bg-white tablet:aspect-[16/10] tablet:rounded-[30px]"
      >
        <nuxt-img
          :src="src"
          :alt="alt"
          class="scroll-img absolute left-0 top-0 block h-auto w-full"
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
    // czas przewijania w dół w sekundach - im dłuższa grafika, tym większa wartość
    speedDown: {
      type: Number,
      default: 20,
    },
    // czas szybkiego powrotu na górę w sekundach
    speedUp: {
      type: Number,
      default: 2,
    },
    decoration: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const img = this.$refs.frame.querySelector('img');
    const total = this.speedDown + this.speedUp;

    // w dół ze stałą prędkością, powrót na górę szybko z łagodnym startem i hamowaniem
    this.animation = img.animate(
      [
        { transform: 'translateY(0)', easing: 'ease-in' },
        { transform: 'translateY(calc(-100% + 100cqh))', offset: this.speedDown / total, easing: 'ease-in-out' },
        { transform: 'translateY(0)' },
      ],
      { duration: total * 1000, iterations: Infinity }
    );
    this.animation.pause();

    // animacja startuje, gdy okno jest widoczne podczas scrollowania, i pauzuje po zniknięciu z ekranu
    this.observer = new IntersectionObserver(
      ([entry]) => {
        entry.isIntersecting ? this.animation.play() : this.animation.pause();
      },
      { threshold: 0.3 }
    );
    this.observer.observe(this.$refs.frame);
  },
  beforeUnmount() {
    this.observer?.disconnect();
    this.animation?.cancel();
  },
};
</script>

<style lang="postcss" scoped>
.frame {
  container-type: size;
}

</style>

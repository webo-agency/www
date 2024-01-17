<template>
  <div
    class="transition duration-500 group cursor-pointer rounded-full inline-block overflow-hidden"
    role="button"
    @click="scrollDown()"
    :class="{ 'translate-y-10 opacity-20': !isMounted }"
  >
    <svg
      width="23"
      height="35"
      viewBox="0 0 23 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="mb-5"
      v-if="!isSecondSvg"
    >
      <rect
        class="path1b"
        x="1"
        y="0.75"
        width="20.5"
        height="33.5"
        rx="4.25"
        stroke="white"
        stroke-width="1.5"
      />
      <rect
        class="path1 fill-green-main/5 group-hover:fill-green-main/20 transition duration-300"
        x="1"
        y="0.75"
        width="20.5"
        height="33.5"
        rx="4.25"
        stroke="#07E7C4"
        stroke-width="1.5"
      />
      <path class="path2" d="M11 14V27" stroke="#07E7C4" stroke-width="2" />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      class="group cursor-pointer hover:bg-[#07C7A9] transition duration-200"
      v-if="isSecondSvg"
    >
      <rect
        x="79.5"
        y="0.5"
        width="79"
        height="79"
        rx="39.5"
        transform="rotate(90 79.5 0.5)"
        stroke="#202020"
        class="group-hover:stroke-[#07C7A9] transition duration-200"
      />
      <path
        d="M47.8887 43.6L46.5629 42.2742L40.938 47.899L40.938 28.5137L39.063 28.5137L39.063 47.8988L33.4383 42.2742L32.1125 43.6L40.0006 51.4882L47.8887 43.6Z"
        fill="#202020"
      />
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMounted: false,
    };
  },
  props: {
    getContainerRef: {
      type: Function,
      default: () => ({}),
    },
    isSecondSvg: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    setTimeout(() => {
      this.isMounted = true;
    }, 500);
  },
  methods: {
    scrollDown() {
      const container = this.getContainerRef();
      if (container) {
        const elHeight = container.clientHeight;
        const scroollDistance = elHeight;
        window.scrollTo({
          top: scroollDistance,
          behavior: "smooth",
        });
      }
    },
  },
};
</script>

<style>
@keyframes path1anim {
  0% {
    stroke-dasharray: 25px;
    stroke-dashoffset: 33;
  }
  30% {
    stroke-dasharray: 110px;
    stroke-dashoffset: 0px;
  }
  80% {
    stroke-dasharray: 110px;
    stroke-dashoffset: 0px;
  }
  100% {
    stroke-dasharray: 25px;
    stroke-dashoffset: 33;
  }
}

.path1 {
  animation: path1anim 7s infinite ease-in-out 0.08s;
}

.path1b {
  animation: path1anim 7s infinite ease-in-out;
}

@keyframes path2anim {
  0% {
    stroke-dasharray: 13px;
    stroke-dashoffset: 13px;
  }

  20% {
    stroke-dasharray: 13px;
    stroke-dashoffset: 13px;
    transform: translateY(-6px);
  }
  30% {
    stroke-dasharray: 13px;
    stroke-dashoffset: 0px;
    transform: translateY(3px);
  }
  60% {
    stroke-dasharray: 13px;
    stroke-dashoffset: 0px;
    transform: translateY(0px);
  }
  90% {
    stroke-dasharray: 13px;
    stroke-dashoffset: -52px;
    transform: translateY(0px);
  }

  100% {
    stroke-dasharray: 13px;
    stroke-dashoffset: -65px;
    transform: translateY(10px);
  }
}

.path2 {
  animation: path2anim 7s infinite cubic-bezier(0.165, 0.84, 0.44, 1);
}
</style>

<template>
  <div
    class="p-2 transition duration-500 group cursor-pointer"
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

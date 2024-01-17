<template>
  <div class="w-fit pt-4" role="button" @click="scrollDown()">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      class="cursor-pointer"
    >
      <rect
        x="79.5"
        y="0.5"
        width="79"
        height="79"
        rx="39.5"
        transform="rotate(90 79.5 0.5)"
        stroke="#202020"
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

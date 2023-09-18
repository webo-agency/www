<template>
  <div ref="targetContainer" class="flex flex-row">
    <span
      class="min-w-[75px] text-3xl desktop:text-4xl text-green-main tablet:mr-2 font-semibold"
    >
      {{ symbol === "+" ? symbol + displayValue : displayValue + symbol }}
    </span>
    <div
      class="text-base desktop:text-xl font-semibold text-left"
      v-html="$formatText(title)"
    ></div>
  </div>
</template>

<script>
import { useElementVisibility } from "@vueuse/core";
import { ref } from "vue";

export default {
  name: "Counter",
  props: {
    title: String,
    target: Number,
    symbol: String,
  },
  setup() {
    const targetContainer = ref(null);
    const targetIsVisible = useElementVisibility(targetContainer);

    return {
      targetContainer,
      targetIsVisible,
    };
  },
  data() {
    return {
      value: 0,
      displayValue: 0,
      visited: false,
    };
  },
  watch: {
    targetIsVisible(value) {
      if (value) {
        this.visited = true;
        this.updateCounter();
      }
    },
  },
  methods: {
    updateCounter() {
      const increment = this.target / 100;
      if (this.value < this.target) {
        this.value = Math.round(this.value * 10000) / 10000 + increment;
        this.displayValue = Math.trunc(this.value);
        setTimeout(() => {
          this.updateCounter();
        }, 10);
      }
    },
  },
};
</script>

<style></style>

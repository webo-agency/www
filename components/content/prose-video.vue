<template>
  <figure class="mx-auto">
    <!-- wrapper + scale ucina 1px czarne krawędzie, które bywają wpalone w pliki wideo -->
    <div
      v-if="src"
      class="overflow-hidden"
      :class="{ 'rounded-[5px]': rounded }"
    >
    <video
      class="block w-full object-cover scale-[1.01]"
      :poster="poster || undefined"
      :autoplay="autoplay"
      :loop="loop"
      :muted="muted || autoplay"
      :controls="controls"
      playsinline
      preload="metadata"
      :aria-label="alt || undefined"
    >
      <source v-if="srcWebm" :src="srcWebm" type="video/webm" />
      <source :src="src" :type="type" />
    </video>
    </div>
  </figure>
</template>

<script>
export default {
  props: {
    // plik .mp4 lub .webm
    src: {
      type: String,
      required: true,
    },
    // opcjonalny dodatkowy plik .webm (gdy src to mp4)
    srcWebm: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
    poster: {
      type: String,
      default: '',
    },
    rounded: {
      type: Boolean,
      default: true,
    },
    autoplay: {
      type: Boolean,
      default: true,
    },
    loop: {
      type: Boolean,
      default: true,
    },
    muted: {
      type: Boolean,
      default: true,
    },
    controls: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    type() {
      return /\.webm(\?.*)?$/i.test(this.src) ? 'video/webm' : 'video/mp4';
    },
  },
};
</script>

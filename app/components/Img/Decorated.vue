<template>
  <div class="img-decorated relative w-full mb-20 tablet:mb-0 phone-wide:w-3/5 tablet:w-full mx-auto">
    <div class="relative block z-20 w-full">
      <nuxt-picture class="rounded-[5px] w-full" v-if="imgUrl" :src="imgUrl" :title="title ? title : 'Webo image'"
        :alt="alt ? alt : 'Webo image'" :class="{ 'shadow-2xl shadow-black/10': shadow }"
        :imgAttrs="{ class: 'w-full h-full object-cover' }" 
        loading="lazy"/>
      <div v-if="gradient"
        class="block bottom-0 inset-x-0 top-1/3 z-30 bg-gradient-to-t bg-gradient-from from-gray-darkest absolute">
      </div>
    </div>
    <div v-if="decoration"
      class="img-decoration [transform-style:preserve-3d] [transform:translateZ(-10px)] absolute w-1/2 h-1/3 z-0 -bottom-5 tablet:-bottom-[30px] desktop:-bottom-[50px] rounded-[5px] bg-gray-light">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: String,
    alt: String,
    title: String,
    decoration: {
      type: Boolean,
      default: true,
    },
    gradient: {
      type: Boolean,
      default: false,
    },
    shadow: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="postcss" scoped>
@reference "~/assets/css/main.css";

/* ========================================================================== */
/* Plain CSS fallback for environments where SFC @apply is not transformed    */
/* ========================================================================== */

.left .img-decorated {
  padding-right: 0;
}

.left .img-decoration {
  margin-right: 0;
  left: -20px;
}

.right .img-decorated {
  padding-left: 0;
}

.right .img-decoration {
  margin-left: 0;
  right: -20px;
}

@media (min-width: 768px) {
  .left .img-decorated {
    padding-right: 80px;
  }

  .left .img-decoration {
    margin-right: 80px;
    left: -30px;
  }

  .right .img-decorated {
    padding-left: 80px;
  }

  .right .img-decoration {
    margin-left: 80px;
    right: -30px;
  }
}

@media (min-width: 1248px) {
  .left .img-decorated {
    padding-right: 120px;
  }

  .left .img-decoration {
    margin-right: 120px;
    left: -50px;
  }

  .right .img-decorated {
    padding-left: 120px;
  }

  .right .img-decoration {
    margin-left: 120px;
    right: -50px;
  }
}

/* ========================================================================== */
/* Original Tailwind @apply source kept for reference and future restoration   */
/* ========================================================================== */

.left .img-decorated {
  @apply pr-0 tablet:pr-20 desktop:pr-[120px];
}

.left .img-decoration {
  @apply mr-0 tablet:mr-20 desktop:mr-[120px] -left-5 tablet:-left-[30px] desktop:-left-[50px];
}

.right .img-decorated {
  @apply pl-0 tablet:pl-20 desktop:pl-[120px];
}

.right .img-decoration {
  @apply ml-0 tablet:ml-20 desktop:ml-[120px] -right-5 tablet:-right-[30px] desktop:-right-[50px];
}
</style>

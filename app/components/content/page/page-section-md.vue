<template>
  <component
    class="relative w-full"
    :is="wrapper"
    :id="id"
    :class="'relative w-full ' + classes"
  >
    <div class="px-5 tablet:px-10 desktop:px-20">
      <div
        class="mx-auto max-w-screen-desktop-wide"
        :class="innerContainerClasses"
      >
        <slot> </slot>
      </div>
    </div>
    <div class="fullwidth w-full">
      <slot name="full"></slot>
    </div>
  </component>
</template>

<script>
export default {
  props: {
    wrapper: {
      type: String,
      default: "section",
    },
    classes: {
      type: String,
      default: "",
    },
    innerContainerClasses: {
      type: String,
      default: "",
    },
    id: {
      type: String,
    },
  },
};
</script>

<style lang="postcss" scoped>
@reference "~/assets/css/main.css";
:deep(.mx-default) {
  @apply mx-5 tablet:mx-20 desktop:mx-[120px];
}

:deep(.mx-blog) {
  @apply mx-5 tablet:mx-10 desktop:mx-auto desktop:max-w-[1100px];
}

:deep(.mx-blog p) {
  @apply !mb-5;
}

:deep(.mx-none *) {
  @apply mx-0;
}
.static-content :deep(*) {
  @apply text-gray-darker;
}

:deep(.fullwidth figure img) {
  @apply min-h-[300px] phone-wide:min-h-[400px] tablet:min-h-0 object-cover;
}

.static-content :deep(.block-quote),
.static-content :deep(.block-bg),
.static-content :deep(.block-border) {
  @apply mx-5 tablet:mx-20 desktop:mx-[120px];
}

.static-content :deep(.left .block-quote),
.static-content :deep(.left .block-bg),
.static-content :deep(.left .block-border) {
  @apply mx-0 tablet:mx-0 desktop:mx-0 mt-10 tablet:mt-20 tablet:mr-20 desktop:mr-40;
}

.static-content :deep(.right .block-quote),
.static-content :deep(.right .block-bg),
.static-content :deep(.right .block-border) {
  @apply mx-0 tablet:mx-0 desktop:mx-0 mt-10 tablet:mt-20 tablet:ml-20 desktop:ml-40;
}

/* ========================================================================== */
/* Plain CSS fallback when SFC @apply is left uncompiled by the build pipeline */
/* ========================================================================== */

:deep(.mx-default) {
  margin-left: 1.25rem;
  margin-right: 1.25rem;
}

:deep(.mx-blog) {
  margin-left: 1.25rem;
  margin-right: 1.25rem;
}

:deep(.mx-blog p) {
  margin-bottom: 1.25rem !important;
}

:deep(.mx-none *) {
  margin-left: 0;
  margin-right: 0;
}

.static-content :deep(*) {
  color: #202020;
}

:deep(.fullwidth figure img) {
  min-height: 18.75rem;
  object-fit: cover;
}

.static-content :deep(.block-quote),
.static-content :deep(.block-bg),
.static-content :deep(.block-border) {
  margin-left: 1.25rem;
  margin-right: 1.25rem;
}

.static-content :deep(.left .block-quote),
.static-content :deep(.left .block-bg),
.static-content :deep(.left .block-border) {
  margin-top: 2.5rem;
  margin-left: 0;
  margin-right: 0;
}

.static-content :deep(.right .block-quote),
.static-content :deep(.right .block-bg),
.static-content :deep(.right .block-border) {
  margin-top: 2.5rem;
  margin-left: 0;
  margin-right: 0;
}

.static-content :deep(h1) {
  margin-bottom: 2.5rem;
  font-size: 3.75rem;
  line-height: 1;
}

.static-content :deep(h2) {
  margin-bottom: 1.25rem;
  font-size: 1.25rem;
  line-height: 1.55;
  font-weight: 600;
}

.static-content :deep(h3) {
  margin-bottom: 1.75rem;
  font-size: 1.875rem;
  line-height: 1.2;
}

.static-content :deep(h4) {
  margin-bottom: 1.75rem;
  font-size: 1.25rem;
  line-height: 1.55;
}

.static-content :deep(h5) {
  margin-bottom: 1.75rem;
  font-size: 1.125rem;
  line-height: 1.55;
}

.static-content :deep(h6) {
  margin-bottom: 1.75rem;
  font-size: 1rem;
  line-height: 1.75;
}

.static-content :deep(.subtitle) {
  margin-bottom: 0.25rem;
  font-size: 1rem;
  line-height: 1.75;
}

.static-content :deep(.subtitle)::before {
  content: "-/";
  color: #06CEAF;
  font-weight: 600;
}

.static-content :deep(p) {
  margin-bottom: 1.75rem;
  font-size: 1.25rem;
  line-height: 1.55;
}

.static-content :deep(.p1 p) {
  font-size: 1.25rem;
  line-height: 1.55;
}

.static-content :deep(.p2 p) {
  font-size: 1.125rem;
  line-height: 1.55;
}

.static-content :deep(.p3 p) {
  font-size: 1rem;
  line-height: 1.75;
}

.static-content :deep(.p4 p) {
  font-size: 0.875rem;
  line-height: 1.5;
}

.static-content :deep(.p5 p) {
  font-size: 0.75rem;
  line-height: 1.33;
}

.static-content :deep(.p6 p) {
  font-size: 0.625rem;
  line-height: 1.2;
}

.static-content :deep(p),
.static-content :deep(.p2),
.static-content :deep(.p3),
.static-content :deep(.p4),
.static-content :deep(.p5),
.static-content :deep(.p6) {
  padding: 0;
}

.static-content :deep(bold),
.static-content :deep(strong) {
  font-weight: 600;
}

.static-content :deep(ul) {
  margin-bottom: 2.5rem;
  max-width: 100%;
}

.static-content :deep(ul li) {
  position: relative;
  margin-bottom: 0.75rem;
  margin-left: 1rem;
  font-size: 1rem;
  line-height: 1.75;
}

.static-content :deep(ul li)::before {
  content: "";
  display: inline-block;
  position: absolute;
  top: 0.625rem;
  left: -1rem;
  width: 0.375rem;
  height: 0.375rem;
  border-radius: 9999px;
  background-color: #06CEAF;
}

.static-content :deep(ol) {
  counter-reset: item;
  list-style: none;
}

.static-content :deep(ol li) {
  counter-increment: item;
  display: flex;
  margin-bottom: 1rem;
}

.static-content :deep(ol li)::before {
  content: counter(item);
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 1rem;
  border-radius: 5px;
  background-color: #F3FEFC;
  color: #06CEAF;
  font-size: 1.25rem;
  font-weight: 600;
}

.static-content :deep(ol li p) {
  margin-bottom: 0;
}

.static-content :deep(.block-quote)::before {
  content: "\201C";
  position: absolute;
  top: 5rem;
  left: 0.5rem;
  transform: scaleY(0.9);
  color: #202020;
  font-size: 140px;
  line-height: 2rem;
  font-weight: 500;
}

.static-content :deep(.block-quote)::after {
  content: "";
  position: absolute;
  left: -5px;
  bottom: -1.25rem;
  width: 100px;
  min-height: 100px;
  height: 75%;
  transform: translateZ(-10px);
  border-radius: 5px;
  background-color: #F5F6F6;
}

.static-content :deep(.block-quote) {
  position: relative;
  z-index: 10;
  margin-bottom: 5rem;
  padding: 2.5rem 1.75rem;
  transform-style: preserve-3d;
  border-radius: 5px;
  background-color: #424242;
  background-image: url("/img/dots2_bg.png");
  background-position: center;
  background-repeat: no-repeat;
  color: #fff;
}

.static-content :deep(.block-quote),
.static-content :deep(.block-quote *) {
  color: #fff;
}

.static-content :deep(.block-quote div:last-child p) {
  margin-bottom: 0;
}

.static-content :deep(.block-quote > *) {
  position: relative;
  z-index: 20;
  margin-left: 0;
  margin-right: 0;
}

.static-content :deep(.block-border) {
  margin-bottom: 1.75rem;
  padding: 2.5rem 1.75rem;
  border: 1px solid #F5F6F6;
  border-radius: 5px;
}

.static-content :deep(.block-border > *) {
  position: relative;
  z-index: 20;
  margin-left: 0;
  margin-right: 0;
}

.static-content :deep(.block-bg) {
  margin-bottom: 1.75rem;
  padding: 2.5rem 1.75rem;
  background-color: #ECF6F4;
}

.static-content :deep(.block-bg div:last-child p),
.static-content :deep(.block-bg > :last-child),
.static-content :deep(.block-bg div:last-child ul) {
  margin-bottom: 0 !important;
}

.static-content :deep(.block-bg > *) {
  position: relative;
  z-index: 20;
  margin-left: 0;
  margin-right: 0;
}

.static-content-basic :deep(h1) {
  margin-bottom: 2rem;
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 600;
}

.static-content-basic :deep(h2) {
  margin-bottom: 1.25rem;
  font-size: 1.25rem;
  line-height: 31px;
  font-weight: 600;
}

.static-content-basic :deep(ol) {
  margin-bottom: 2.5rem;
  padding-left: 1.25rem;
  list-style: decimal;
}

.static-content-basic :deep(ol ol) {
  margin-top: 0.25rem;
  margin-bottom: 0;
  padding-left: 1.25rem;
  list-style: lower-latin;
}

.static-content-basic :deep(ol ol li) {
  margin-bottom: 0.25rem;
  padding-left: 0.25rem;
}

.static-content-basic :deep(li) {
  margin-bottom: 1.25rem;
  font-size: 1rem;
  line-height: 1.75;
}

@media (min-width: 1248px) {
  :deep(.mx-default) {
    margin-left: 7.5rem;
    margin-right: 7.5rem;
  }

  :deep(.mx-blog) {
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
  }

  .static-content :deep(.block-quote),
  .static-content :deep(.block-bg),
  .static-content :deep(.block-border) {
    margin-left: 7.5rem;
    margin-right: 7.5rem;
  }

  .static-content :deep(h1) {
    margin-bottom: 5rem;
    font-size: 70px;
    line-height: 1;
  }

  .static-content :deep(h2) {
    font-size: 30px;
    line-height: 40px;
  }

  .static-content :deep(h3) {
    margin-bottom: 3.5rem;
    font-size: 2.25rem;
    line-height: 1.2;
  }

  .static-content :deep(h4) {
    margin-bottom: 3.5rem;
    font-size: 1.5rem;
    line-height: 1.33;
  }

  .static-content :deep(h5) {
    margin-bottom: 3.5rem;
    font-size: 1.25rem;
    line-height: 1.55;
  }

  .static-content :deep(h6) {
    margin-bottom: 3.5rem;
    font-size: 1.125rem;
    line-height: 1.55;
  }

  .static-content :deep(.subtitle) {
    font-size: 1.125rem;
    line-height: 1.55;
  }

  .static-content :deep(p) {
    margin-bottom: 3.5rem;
    font-size: 1.5625rem;
    line-height: 1.28;
  }

  .static-content :deep(.p1 p) {
    font-size: 1.5625rem;
    line-height: 1.28;
  }

  .static-content :deep(.p2 p) {
    font-size: 1.25rem;
    line-height: 1.55;
  }

  .static-content :deep(.p3 p) {
    font-size: 1.125rem;
    line-height: 32px;
  }

  .static-content :deep(.p4 p) {
    font-size: 1rem;
    line-height: 1.75;
  }

  .static-content :deep(.p5 p) {
    font-size: 0.875rem;
    line-height: 1.5;
  }

  .static-content :deep(.p6 p) {
    font-size: 0.75rem;
    line-height: 1.33;
  }

  .static-content :deep(ul) {
    margin-bottom: 5rem;
  }

  .static-content :deep(ul li) {
    margin-bottom: 1rem;
    font-size: 1.125rem;
    line-height: 1.75;
  }

  .static-content :deep(.block-quote) {
    margin-bottom: 9.375rem;
    padding: 6rem 3.75rem;
  }

  .static-content :deep(.block-quote)::after {
    left: -3.125rem;
    bottom: -3.125rem;
  }

  .static-content :deep(.block-border) {
    margin-bottom: 3.75rem;
    padding: 6rem 3.75rem;
  }

  .static-content :deep(.block-bg) {
    margin-bottom: 3.75rem;
    padding: 5rem 3.75rem;
  }
}

@media (min-width: 480px) {
  :deep(.fullwidth figure img) {
    min-height: 25rem;
  }
}

@media (min-width: 768px) {
  :deep(.mx-default) {
    margin-left: 5rem;
    margin-right: 5rem;
  }

  :deep(.mx-blog) {
    margin-left: 2.5rem;
    margin-right: 2.5rem;
  }

  :deep(.fullwidth figure img) {
    min-height: 0;
  }

  .static-content :deep(.block-quote),
  .static-content :deep(.block-bg),
  .static-content :deep(.block-border) {
    margin-left: 5rem;
    margin-right: 5rem;
  }

  .static-content :deep(.left .block-quote),
  .static-content :deep(.left .block-bg),
  .static-content :deep(.left .block-border) {
    margin-top: 5rem;
    margin-right: 5rem;
  }

  .static-content :deep(.right .block-quote),
  .static-content :deep(.right .block-bg),
  .static-content :deep(.right .block-border) {
    margin-top: 5rem;
    margin-left: 5rem;
  }

  .static-content :deep(ol li) {
    margin-bottom: 1.875rem;
  }

  .static-content :deep(ol li)::before {
    width: 3.75rem;
    height: 3.75rem;
    margin-right: 1.875rem;
    font-size: 1.5625rem;
    line-height: 2rem;
  }

  .static-content :deep(.block-quote)::after {
    left: -1.25rem;
    width: 220px;
    height: 220px;
  }

  .static-content-basic :deep(h1) {
    margin-bottom: 3rem;
    font-size: 45px;
    line-height: 55px;
  }

  .static-content-basic :deep(h2) {
    font-size: 25px;
    line-height: 32px;
  }

  .static-content-basic :deep(ol) {
    margin-bottom: 3.5rem;
  }

  .static-content-basic :deep(li) {
    font-size: 1.125rem;
    line-height: 1.75;
  }
}

/* ========================================================================== */
/* Original Tailwind @apply source kept for reference and future restoration   */
/* ========================================================================== */

.static-content :deep(h1) {
  @apply mb-10 desktop:mb-20 text-6xl desktop:text-[70px];
}
.static-content :deep(h2) {
  @apply mb-5 text-xl desktop:text-[30px] desktop:leading-[40px] font-semibold;
}
.static-content :deep(h3) {
  @apply mb-7 desktop:mb-14 text-3xl desktop:text-4xl;
}
.static-content :deep(h4) {
  @apply mb-7 desktop:mb-14 text-xl desktop:text-2xl;
}
.static-content :deep(h5) {
  @apply mb-7 desktop:mb-14 text-lg desktop:text-xl;
}
.static-content :deep(h6) {
  @apply mb-7 desktop:mb-14 text-base desktop:text-lg;
}
.static-content :deep(.subtitle) {
  @apply mb-1 text-base desktop:text-lg before:text-green-main before:content-[-/] before:font-semibold;
}

.static-content :deep(p),
.static-content :deep(.p2),
.static-content :deep(.p3),
.static-content :deep(.p4),
.static-content :deep(.p5),
.static-content :deep(.p6) {
  padding: 0;
}

.static-content :deep(p) {
  @apply mb-7 desktop:mb-14 text-xl desktop:text-2xl;
}
.static-content :deep(.p1 p) {
  @apply text-xl desktop:text-2xl;
}
.static-content :deep(.p2 p) {
  @apply text-lg desktop:text-xl;
}
.static-content :deep(.p3 p) {
  @apply text-base desktop:text-lg desktop:leading-[32px];
}
.static-content :deep(.p4 p) {
  @apply text-sm desktop:text-base;
}
.static-content :deep(.p5 p) {
  @apply text-xs desktop:text-sm;
}
.static-content :deep(.p6 p) {
  @apply text-[10px] desktop:text-xs;
}
.static-content :deep(bold),
.static-content :deep(strong) {
  @apply font-semibold;
}
.static-content :deep(ul) {
  @apply mb-10 desktop:mb-20 max-w-full;
}
.static-content :deep(ul li) {
  @apply relative mb-3 desktop:mb-4 ml-4 text-base desktop:text-lg before:inline-block before:content-[""] before:w-[6px] before:h-[6px] before:rounded-full before:bg-green-main before:absolute before:-left-4 before:top-2.5;
}

.static-content :deep(ol) {
  counter-reset: item;
  @apply list-none;
}

.static-content :deep(ol li) {
  counter-increment: item;
  @apply flex mb-4 tablet:mb-[30px] before:content-[counter(item)] before:flex before:justify-center before:items-center before:shrink-0 before:mr-4 before:tablet:mr-[30px] before:text-xl tablet:before:text-2xl before:font-semibold before:text-green-main before:rounded-[5px] before:bg-green-light before:w-[40px] before:h-[40px] tablet:before:w-[60px] tablet:before:h-[60px];
}

.static-content :deep(ol li p) {
  @apply mb-0;
}

.static-content :deep(.block-quote)::before {
  content: "\201C";
}
.static-content :deep(.block-quote) {
  transform-style: preserve-3d;
  background-image: url("/img/dots2_bg.png");
  @apply mb-20 desktop:mb-[150px] py-10 desktop:py-24 px-7 desktop:px-[60px] text-white relative z-10 rounded-[5px] bg-gray-dark bg-center bg-no-repeat before:absolute before:scale-y-90 before:font-medium before:top-20 before:left-2 before:text-gray-darker before:text-[140px] before:leading-8 after:absolute after:[transform:translateZ(-10px)] after:-left-[5px] after:tablet:-left-5 after:-bottom-5 after:desktop:-left-[50px] after:desktop:-bottom-[50px] after:h-3/4 after:min-h-[100px] after:w-[100px] after:tablet:h-[220px] after:tablet:w-[220px] after:bg-gray-light after:rounded-[5px];
}

.static-content :deep(.block-quote div:last-child p) {
  @apply mb-0;
}

.static-content :deep(.block-quote > *) {
  @apply relative z-20 mx-0;
}

.static-content :deep(.block-border) {
  @apply mb-7 desktop:mb-[60px] py-10 desktop:py-24 px-7 desktop:px-[60px] rounded-[5px] border border-solid border-gray-light;
}

.static-content :deep(.block-border > *) {
  @apply relative z-20 mx-0;
}

.static-content :deep(.block-bg) {
  @apply mb-7 desktop:mb-[60px] py-10 desktop:py-20 px-7 desktop:px-[60px]  bg-green-gray;
}

.static-content :deep(.block-bg div:last-child p),
.static-content :deep(.block-bg > :last-child),
.static-content :deep(.block-bg div:last-child ul) {
  @apply !mb-0;
}

.static-content :deep(.block-bg > *) {
  @apply relative z-20 mx-0;
}

.static-content-basic :deep(h1){
  @apply font-semibold text-4xl md:text-5xl mb-8 md:mb-12
}

.static-content-basic :deep(h2){
  @apply font-semibold text-xl md:text-2xl mb-5
}

.static-content-basic :deep(ol){
  @apply list-decimal pl-5 mb-10 md:mb-14
}

.static-content-basic :deep(ol ol){
  list-style: lower-latin;
  @apply pl-5 mb-0 mt-1
}

.static-content-basic :deep(ol ol li){
  @apply pl-1 mb-1
}

.static-content-basic :deep(li){
  @apply text-base md:text-lg mb-5
}

</style>

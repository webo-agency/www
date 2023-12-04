<template>
  <component class="relative w-full" :is="wrapper" :id="id" :class="'relative w-full ' + classes">
    <div class="px-5 tablet:px-10 desktop:px-20">
      <div class="mx-auto max-w-screen-desktop-wide">
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
    id: {
      type: String,
    },
  },
};
</script>

<style lang="postcss" scoped>

:deep(.mx-default) {
  @apply mx-5 tablet:mx-20 desktop:mx-[120px]
}

:deep(.mx-blog) {
  @apply mx-5 tablet:mx-10 desktop:mx-auto desktop:max-w-[934px]
}

:deep(.mx-none *){
  @apply mx-0
}
.static-content :deep() {
  @apply text-gray-darker;
}


:deep(.fullwidth figure img){
  @apply min-h-[300px] phone-wide:min-h-[400px] tablet:min-h-0 object-cover
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


.static-content :deep(h1) {
  @apply mb-10 desktop:mb-20 text-6xl desktop:text-[70px];
}
.static-content :deep(h2) {
  @apply mb-10 desktop:mb-20 text-4xl desktop:text-5xl;
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
  padding:0
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
  @apply text-base desktop:text-lg;
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
  @apply mb-10 desktop:mb-20 max-w-[800px];
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

.static-content :deep(.block-quote)::before{
  content: "\201C";
}
.static-content :deep(.block-quote) {
  transform-style: preserve-3d;
  background-image: url("/img/dots2_bg.png");
  @apply mb-20 desktop:mb-[150px] py-10 desktop:py-24 px-7 desktop:px-[60px] text-white relative z-10 rounded-[5px] bg-gray-dark bg-center bg-no-repeat before:absolute before:scale-y-90 before:font-medium before:top-20 before:left-2 before:text-gray-darker before:text-[140px] before:leading-8 after:absolute after:[transform:translateZ(-10px)] after:-left-[5px] after:tablet:-left-5 after:-bottom-5 after:desktop:-left-[50px] after:desktop:-bottom-[50px] after:h-3/4 after:min-h-[100px] after:w-[100px] after:tablet:h-[220px] after:tablet:w-[220px] after:bg-gray-light after:rounded-[5px];
}

.static-content :deep(.block-quote div:last-child p ) {
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
  @apply mb-7 desktop:mb-[60px] py-10 desktop:py-20 px-7 desktop:px-[60px]  rounded-[5px] bg-gray-light;
}

.static-content :deep(.block-bg div:last-child p ),
.static-content :deep(.block-bg >:last-child ),
.static-content :deep(.block-bg div:last-child ul) {
  @apply !mb-0;
}

.static-content :deep(.block-bg > *) {
  @apply relative z-20 mx-0;
}
</style>

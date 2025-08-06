<template>
  <div class="flex flex-col desktop:flex-row gap-10 justify-between">
    <svg class="decoration_shape absolute -bottom-16 left-14" xmlns="http://www.w3.org/2000/svg" width="96" height="113" viewBox="0 0 96 113" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M75.6917 0.555799L75.7003 0.560511H75.7085L75.7182 0.565223C75.796 0.579363 75.87 0.612334 75.9337 0.664179L75.9413 0.668918L75.9515 0.678342L75.9618 0.683054L95.201 17.4714L95.2103 17.4762L95.221 17.4855L95.2292 17.4949L95.2378 17.5044L95.2427 17.5091C95.2875 17.5609 95.3194 17.6128 95.3383 17.6741L95.3404 17.6788L95.3437 17.6882L95.3448 17.6977C95.3475 17.7071 95.3496 17.7117 95.3513 17.7211C95.3561 17.7494 95.3594 17.7778 95.3594 17.8014V93.9475C95.3594 94.1407 95.2254 94.3104 95.0211 94.3858L49.9994 110.255C41.5084 113.243 33.8208 112.433 28.2506 108.742C23.9176 105.876 20.8596 101.248 19.7251 95.2718C8.22799 94.8193 -0.000396729 86.4064 -0.000396729 73.1529V27.4681C-0.000396729 27.2748 0.134661 27.1004 0.339966 27.0297L75.3708 0.584099C75.3929 0.574672 75.4161 0.569936 75.4394 0.565223L75.4507 0.560511H75.4567L75.4664 0.555799C75.541 0.541659 75.6177 0.546373 75.6917 0.555799ZM75.8754 24.9889L94.2788 18.5036V93.6316L49.5942 109.378C41.5187 112.225 34.1991 111.504 28.9044 107.993C23.5826 104.472 20.3194 98.1658 20.3194 89.9366V44.5675L75.6804 25.0549C75.7511 25.0455 75.817 25.0219 75.8754 24.9889ZM1.08014 28.6134L19.2388 44.445V89.9366C19.2388 91.4636 19.3523 92.9293 19.563 94.3244C8.70881 93.7919 1.08014 85.7088 1.08014 73.1529V28.6134ZM75.039 24.2678L19.9088 43.6955L1.49075 27.6377L75.039 1.71521V24.2678ZM93.8596 17.6316L76.1196 23.886V2.15834L93.8596 17.6316Z" fill="#07E7C4"/>
    </svg>
    <div class="basis-[40%] flex flex-col justify-center items-center">
      <slot name="left">
        <div class="title text-left [&_h3]:!mb-[30px]">
          <slot name="title" />
        </div>
        <CustomLink
          v-if="link"
          class=""
          :url="link"
          :activeClass="'none'"
          >
          <nuxt-picture
            src="/img/content-images/opinion-google.png"
            fit="inside"
            class="block [&>img]:mx-auto [&>img]:desktop:-ml-10 [&>img]:w-1/2 [&>img]:desktop:w-[220px]"
          />
        </CustomLink>
          <nuxt-picture
            v-else
            src="/img/content-images/opinion-google.png"
            fit="inside"
            class="block [&>img]:mx-auto [&>img]:desktop:-ml-10 [&>img]:w-1/2 [&>img]:desktop:w-[220px]"
          />
      </slot>
    </div>
    <div class="basis-[60%]">
      <div
        class="relative bg-green-gray py-[60px] px-10 flex flex-col"
        :class="{ 'max-w-[695px] items-left mx-auto': center }"
      >
        <div><slot name="content" /></div>
        <div class="flex gap-5">
          <div class="avatarImg">
            <nuxt-picture
              src="/img/content-images/avatar-img.png"
              fit="inside"
              class="block max-w-[220px]"
            />
          </div>
          <div class="author-wrapper">
            <div class="author [&_h4]:!text-xl">
              <slot name="author" />
            </div>
            <div class="authorTitle"><slot name="authorTitle" /></div>
            <rating-stars v-if="rating" :rating="rating" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rating: Number,
    center: Boolean,
    link: String,
  }
};
</script>

<style lang="postcss" scoped>
:deep(.author *) {
  @apply !mb-1;
}
:deep(.authorTitle *) {
  @apply !uppercase;
}
:deep(.authorTitle .p6 p) {
  @apply !mb-4;
}
</style>

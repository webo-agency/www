<template>
  <div class="w-full title text-center">
    <slot name="title" />
  </div>
  <div class="flex flex-col desktop:flex-row gap-10 justify-between">
    <div class="basis-[40%]">
      <slot name="left">
        <nuxt-picture
          src="/img/content-images/case-mancraft-clutch.png"
          fit="inside"
          class="block [&>img]:mx-auto [&>img]:desktop:ml-0 [&>img]:w-1/2 [&>img]:desktop:w-[220px]"
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
            <div class="author">
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
  },
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

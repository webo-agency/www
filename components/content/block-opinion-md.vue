<template>
    <div class="relative flex flex-col"
    :class="{'max-w-[695px] items-center text-center mx-auto':center}">
        <div class="relative mb-5"><slot name="title" />
            <span
        class="absolute -top-5 text-[100px] text-gray-light font-semibold pointer-events-none"
        :class="[center ? '-right-10 tablet:right-[-70px] desktop:-right-32' : 'left-3/4 tablet:left-2/3']"
        >“</span>
        </div>
        <rating-stars v-if="rating" :rating="rating" />
        <div><slot name="content" /></div>
        <div class="author">
            <slot name="author" /></div>
        <div class="authorTitle"><slot name="authorTitle" /></div>
    </div>
  </template>
  
<script>
export default {
    props:{
        rating: Number,
        center: Boolean
    }
};
</script>
  
<style lang="postcss" scoped>
:deep(.author *) {
    @apply !mb-1
}
:deep(.authorTitle *) {
    @apply !uppercase
}
</style>  
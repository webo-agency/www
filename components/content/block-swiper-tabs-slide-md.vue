<template>
    <div class="swiper-slide tabs-slide flex flex-col w-full basis-full shrink-0 mr-0 pr-10 tablet-wide:pr-20 desktop:pr-28">
        <div class="flex flex-wrap text-gray-darker">
            <div class="relative z-20 shrink-0 grow basis-full tablet-wide:basis-[55%] flex flex-col tablet-wide:pr-10 desktop-wide:pr-20">
                <span class="ml-[2px] text-5xl tablet:text-7xl text-white font-extrabold tracking-tight text-outline">{{ number }}</span>
                <slot name='left'></slot>
            </div>
            <div class="relative z-10 shrink-0 grow-0 basis-full tablet-wide:basis-[45%] mt-10 tablet-wide:mt-0">
                <div class="relative h-full w-4/5 tablet:w-3/5 mx-auto tablet-wide:w-full">
                    <slot name='right'></slot>
                    <div v-if="$slots.right_parallax" class="absolute top-0 -z-10 -left-5 tablet:-left-10"
                    data-swiper-parallax="12%">
                        <ContentSlot :use="$slots.right_parallax"></ContentSlot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props:{
            number: String
        }
    }
</script>
<style scoped>
.tabs-slide:deep(p),
.tabs-slide:deep(li){
    @apply !text-sm tablet:!text-base mb-4
};

.tabs-slide:deep(li::before){
    @apply content-[''] block w-2 h-0.5 bg-green-main mr-2.5 mb-1.5 shrink-0
}

.tabs-slide:deep(li){
    @apply flex items-center
}
.tabs-slide:deep(h5){
    @apply font-semibold text-xl tablet:text-2xl mb-4
}
</style>
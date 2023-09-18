<template>
    <div class="tab-block">
        <div class="relative">
            <div class="py-10 px-7 desktop:p-[50px] text-white relative z-10 rounded-[5px] bg-gray-dark bg-center bg-no-repeat">
                <div class="font-semibold text-lg tablet:text-xl mb-5">
                    <ContentSlot :use="$slots.title" />
                </div>
                <div class="tab-list-content">
                    <ContentSlot :use="$slots.content" />
                </div>
            </div>
            <div class="absolute [transform:translateZ(-10px)] -left-[5px] -bottom-5 tablet:-left-[30px] tablet:-bottom-[30px] h-3/4 min-h-[50px] w-[100px] tablet:h-[220px] max-h-full tablet:w-[220px] bg-gray-light rounded-[5px]">
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.tab-block{
    @apply mb-10 tablet:mb-0
}

.left .tab-block{
    @apply tablet:pr-[30px]
}
.right .tab-block{
    @apply tablet:pl-[30px]
}

.tab-list-content{
    @apply text-sm tablet:text-base
}

.tab-list-content :deep() li{
    @apply mb-4 relative flex font-semibold before:content-[''] md:before:top-0.5 before:relative before:w-[22px] before:h-[22px] before:block before:border-2 before:border-green-main before:rounded-full before:mr-3 after:absolute after:left-2 after:top-[5px] after:md:top-[6.5px] after:content-[''] after:w-1.5 after:h-2.5 after:border-b-2 after:border-r-2 after:border-green-main after:rotate-45
}
</style>
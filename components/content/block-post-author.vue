<template>
    <div v-if="pageData?.author" class="text-gray-darker">
        <h3 class="pb-5 !mb-5 text-2xl tablet:!text-[25px] font-semibold border-b border-b-[#DEE7E5]">
            {{ title }}
        </h3>
        <div class="mb-5 flex items-center gap-4">
            <div class="relative">
                <img v-if="pageData?.authorAvatar" :src="pageData?.authorAvatar" :alt="pageData?.author" class="size-[87px] rounded-full object-cover shrink-0" />
                <svg class="absolute -bottom-1 -right-1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.002 30H0V0H30V17.9969C30 24.6207 24.6207 30 18.002 30Z" fill="#ECF6F4"/>
                </svg>
            </div>

            <div class="flex flex-col gap-0">
                <span class="!mb-0 !text-xl !text-[#181D27] font-semibold">{{ pageData?.author }}</span>
                <span v-if="pageData?.authorRole" class="!mb-0 text-base text-[#181D27]">{{ pageData?.authorRole }}</span>
            </div>
        </div>
        <div v-if="$slots.default" class="[&_p]:!text-base [&_p]:!text-[#202020] [&_p]:!mb-0">
            <ContentSlot :use="$slots.default" unwrap />
        </div>
    </div>
</template>
<script setup>
const pageData = inject('pageData')

defineProps({
    title: {
        type: String,
        default: 'Autor wpisu'
    }
})
</script>

<template>
    <div class="flex flex-col gap-y-4">
        <div v-if="pageData?.author || pageData?.updatedAt" class="flex items-center gap-3">
            <img v-if="pageData?.authorAvatar" :src="pageData?.authorAvatar" :alt="pageData?.author" class="w-10 h-10 rounded-full object-cover" />
            <div class="h-full flex items-center justify-between gap-4">
                <span v-if="pageData?.author" itemprop="author" class="text-gray-darker text-sm">{{ pageData?.author }}</span>
                <div class="w-[1px] h-[33px] bg-[#C7D0CF] block"></div>
                <span v-if="pageData?.updatedAt" class="text-gray-darker text-sm font-semibold">{{ new Date(pageData?.updatedAt).toLocaleDateString('pl-PL') }}</span>
            </div>
        </div>

        <!-- Share Section -->
        <div v-if="socials.length">
            <div class="bg-green-gray p-6 rounded-lg">
                <p v-if="shareText" class="text-[#181D27] text-base font-semibold !mb-4">
                    {{ shareText }}
                </p>
                <div class="relative w-fit">
                    <ul class="flex flex-wrap gap-3 !mb-0">
                        <SocialShare v-for="network in socials" :key="network" :network="network" :styled="true" :label="false" class="rounded-[5px] bg-green-light w-[35px] h-[35px] p-0 [&_svg_*]:!fill-[#202020] _[&_svg]:w-[35px] _[&_svg]:h-[35px] hover:bg-green-main transition duration-200 flex items-center justify-center" />
                        <button @click="copyLink" class="group rounded-[5px] bg-transparent w-[38px] h-[38px] p-0 hover:bg-green-main transition duration-200 flex items-center justify-center">
                            <svg class="scale-80" xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                                <path class="group-hover:stroke-black transition duration-200" d="M19.6667 19.6667V23.4C19.6667 24.8935 19.6667 25.6402 19.376 26.2106C19.1204 26.7124 18.7124 27.1204 18.2106 27.376C17.6402 27.6667 16.8935 27.6667 15.4 27.6667H5.26667C3.77319 27.6667 3.02646 27.6667 2.45603 27.376C1.95426 27.1204 1.54631 26.7124 1.29065 26.2106C1 25.6402 1 24.8935 1 23.4V13.2667C1 11.7732 1 11.0265 1.29065 10.456C1.54631 9.95426 1.95426 9.54631 2.45603 9.29065C3.02646 9 3.77319 9 5.26667 9H9M13.2667 19.6667H23.4C24.8935 19.6667 25.6402 19.6667 26.2106 19.376C26.7124 19.1204 27.1204 18.7124 27.376 18.2106C27.6667 17.6402 27.6667 16.8935 27.6667 15.4V5.26667C27.6667 3.77319 27.6667 3.02646 27.376 2.45603C27.1204 1.95426 26.7124 1.54631 26.2106 1.29065C25.6402 1 24.8935 1 23.4 1H13.2667C11.7732 1 11.0265 1 10.456 1.29065C9.95426 1.54631 9.54631 1.95426 9.29065 2.45603C9 3.02646 9 3.77319 9 5.26667V15.4C9 16.8935 9 17.6402 9.29065 18.2106C9.54631 18.7124 9.95426 19.1204 10.456 19.376C11.0265 19.6667 11.7732 19.6667 13.2667 19.6667Z" stroke="#C7D0CF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>                        
                        </button>
                    </ul>
                    <p :class="{'!opacity-100 !scale-100':copied}" class="pointer-events-none opacity-0 scale-95 mt-3 !text-sm !px-3 !py-1 block text-green-main bg-green-light rounded-md absolute top-full right-0 z-10 shadow-sm transition-all duration-200" aria-live="polite">{{ copyConfirmationText }}</p>
                </div>
            </div>
        </div>

        <!-- Tags Section -->
        <span v-if="tagsTitle" class="ml-6 !mb-0 text-[#181D27] !text-base font-semibold">
            {{ tagsTitle }}
        </span>
        <ul
            v-if="pageData?.category && pageData?.category.length"
            class="tags-list px-6 flex flex-col gap-y-3 [&_li]:before:!hidden [&_li]:!m-0"
        >
            <li v-for="tag,index in pageData?.category" :key="index">
                <nuxt-link :to="{path: archivePath, query:{cat: tag}}" class="bg-white border border-solid border-gray-default text-gray-darker rounded-full py-2 px-4 text-sm font-normal leading-none hover:text-white hover:bg-green-main hover:border-green-main transition duration-200 inline-block">{{tag}}</nuxt-link>
            </li>
        </ul>
    </div>
</template>
<script setup>

const pageData = inject('pageData')

const props = defineProps({
    shareText: {
        type: String,
        default: 'Share'
    },
    tagsTitle: {
        type: String,
        default: 'Tags:'
    },
    archivePath: {
        type: String,
        default: '/blog'
    },
    socials: {
        type: Array,
        default: () => ['facebook', 'linkedin', 'twitter']
    },
    copyConfirmationText: {
        type: String,
        default: 'Link copied!'
    }
})

const copied = ref(false)

const copyLink = () => {
    if (typeof window !== 'undefined') {
        navigator.clipboard.writeText(window.location.href)
        copied.value = true
        setTimeout(() => {
            copied.value = false
        }, 2000)
    }
}
</script>
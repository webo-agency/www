<template>
    <CustomLink class="group flex flex-col w-full" :disabled="data.draft && !data.fallback" :activeClass="'none'"
        :url="data.fallback ? data.fallback : (data.url ? data.url : 'https://www.webo.agency' + data._path)">
        <div class="flex items-end aspect-video w-full rounded-[5px] overflow-hidden mb-4 tablet:mb-6">
            <nuxt-picture class="h-full w-full object-cover group-hover:scale-[103%] transition-all duration-500"
                v-if="data.image && data.image.url" :src="data.image.url" :title="data.image.title ? data.image.title : ''"
                :alt="data.image.alt ? data.image.alt : 'Post thumbnail image'"
                :imgAttrs="{ class: 'h-full w-full object-cover' }"></nuxt-picture>
        </div>
        <div class="px-2.5 tablet:px-5 pb-1 ">
            <h4 v-if="data.introduction?.titleFormatted"
                class="mb-4 tablet:mb-6 text-lg desktop:text-xl font-semibold group-hover:underline decoration-inherit transition duration-300 [&_em]:text-green-main [&_em]:group-hover:underline [&_em]:decoration-green-main [&_em]:not-italic"
                v-html="$formatText(data.introduction.titleFormatted)">
            </h4>
            <p v-if="data.introduction?.description" class="mb-4 tablet:mb-6 text-sm desktop:text-base font-normal">
                {{ data.introduction.description }}
            </p>
            <svg class="transition duration-200 group-hover:translate-x-2.5" xmlns="http://www.w3.org/2000/svg" width="23"
                height="30" viewBox="0 0 23 30" fill="none">
                <path
                    d="M15.0863 7.11182L13.7605 8.43762L19.3853 14.0624H0V15.9375H19.3852L13.7605 21.5621L15.0863 22.8879L22.9745 14.9999L15.0863 7.11182Z"
                    fill="#06CEAF" />
            </svg>
        </div>
    </CustomLink>
</template>

<script setup>
defineProps({
    data: Object,
})
</script>

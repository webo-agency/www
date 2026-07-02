<template>
    <UiLink class="group flex flex-col w-full" :disabled="itemData.draft && !itemData.fallback" :activeClass="'none'"
        :url="itemData.fallback ? itemData.fallback : (itemData.url ? itemData.url : 'https://webo.agency' + itemData.path)">
        <div class="flex items-end aspect-video w-full rounded-[5px] overflow-hidden mb-4 tablet:mb-6">
            <nuxt-picture class="h-full w-full object-cover group-hover:scale-[103%] transition-all duration-500"
                v-if="itemData.image && itemData.image.url" :src="itemData.image.url" :title="itemData.image.title ? itemData.image.title : ''"
                :alt="itemData.image.alt ? itemData.image.alt : 'Post thumbnail image'"
                :imgAttrs="{ class: 'h-full w-full object-cover'}"></nuxt-picture>
        </div>
        <div class="px-2.5 tablet:px-5 pb-1 ">
            <h4 v-if="itemData.introduction?.titleFormatted"
                class="mb-4 tablet:mb-6 text-lg desktop:text-xl font-semibold group-hover:underline decoration-inherit transition duration-300 [&_em]:text-green-main [&_em]:group-hover:underline [&_em]:decoration-green-main [&_em]:not-italic"
                v-html="$formatText(itemData.introduction.titleFormatted)">
            </h4>
            <p v-if="itemData.introduction?.description" class="mb-4 tablet:mb-6 text-sm desktop:text-base font-normal">
                {{ itemData.introduction.description }}
            </p>
            <svg class="transition duration-200 group-hover:translate-x-2.5" xmlns="http://www.w3.org/2000/svg" width="23"
                height="30" viewBox="0 0 23 30" fill="none">
                <path
                    d="M15.0863 7.11182L13.7605 8.43762L19.3853 14.0624H0V15.9375H19.3852L13.7605 21.5621L15.0863 22.8879L22.9745 14.9999L15.0863 7.11182Z"
                    fill="#06CEAF" />
            </svg>
        </div>
    </UiLink>
</template>

<script setup>
const props = defineProps({
    data: Object,
})

const itemData = computed(() => {
    const raw = props.data || {}
    const meta = typeof raw.meta === 'string'
        ? (() => {
            try {
                return JSON.parse(raw.meta)
            } catch {
                return {}
            }
        })()
        : (raw.meta || {})

    return { ...meta, ...raw }
})
</script>

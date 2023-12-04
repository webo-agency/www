<template>
    <div class="mx-blog flex flex-col tablet:flex-row justify-between tablet:items-center">
        <ul
            v-if="tags"
            class="tags-list flex flex-row flex-wrap gap-x-5 gap-y-2 mb-5"
        >
            <li v-for="tag,index in tags" :key="index">
                <nuxt-link :to="{path: archivePath, query:{cat: tag}}">{{tag}}</nuxt-link>
            </li>
        </ul>
        <div class="flex flex-wrap items-center">
            <p v-if="shareText" class="text-gray-darker text-base font-semibold mr-5">
                {{ shareText }}
            </p>
            <ul class="flex flex-wrap gap-5">
                <SocialShare v-for="network in socials" :network="network" :styled="true" :label="false" class="rounded-[5px] bg-gray-dark w-[30px] h-[30px] p-1 [&_svg_*]:!fill-white" />
            </ul>
        </div>
    </div>
</template>
<script setup>
defineProps({
    shareText:{
        type: String,
        default: 'Share'
    },
    tags:{
        type: Array,
    },
    archivePath:{
        type: String,
        default: '/blog'
    },
    socials:{
        type: Array,
        default: ['facebook','linkedin']
    },
})
</script>
<style  lang="postcss" scoped>
:deep(.tags-list li a) {
  @apply bg-white border border-solid border-gray-default text-gray-darker rounded-full py-3 px-5 text-sm uppercase font-normal leading-none hover:text-white hover:bg-green-main hover:border-green-main transition duration-200;
}
</style>
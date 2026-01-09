<template>
    <div class="desktop:ml-auto w-full desktop:w-fit h-full p-10 bg-[#E4EFED80] backdrop-blur-sm">
        <h4 class="hidden desktop:block py-2.5 uppercase text-xl font-semibold hover:text-green-main transition duration-200 mb-10">
            {{ $formatText(data?.title) }}
        </h4>
        <ul v-if="data?.items" class="grid grid-cols-2 gap-x-12 gap-y-3">
            <li v-for="item in data.items" class="flex items-center">
                <nuxt-picture v-if="item.icon" class="shrink-0 w-10 h-10" :src="item.icon" :alt="item.name"
                    :img-attrs="{ class: 'h-full w-full object-contain' }" loading="lazy" />
                <p v-if="item.name" class=" font-semibold">
                    {{ $formatText(item.name) }}
                </p>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
    defineProps({
        data: Object
    })
</script>
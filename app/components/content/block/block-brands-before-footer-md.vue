<template>
    <ContentRenderer v-if="data" :value="data" />
</template>

<script setup>
const { data } = await useAsyncData(() => queryCollection('content').path('/_data-footer-brands').first())

</script>
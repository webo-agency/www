<template>
    <ContentRenderer v-if="data" :value="data" />
</template>

<script setup>
const { data } = await useAsyncData(() => queryContent().where({ _file: "_data-footer-brands.md" }).findOne())

</script>
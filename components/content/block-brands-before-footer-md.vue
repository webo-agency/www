<template>
    <ContentRenderer v-if="formData" :value="formData" />
</template>

<script setup>
const { data: formData } = await useAsyncData(() => queryContent().where({ _file: "_data-footer-brands.md" }).findOne())

</script>
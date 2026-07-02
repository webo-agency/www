<template>
    <ContentRenderer v-if="formData" :value="formData" />
</template>

<script setup>
const { data: formData } = await useAsyncData(() => queryCollection('content').path('/_data-footer-form').first())

</script>
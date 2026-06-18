<template>
  <li class="has-separator">
    <effect-appear>
        <div class="ordered-item before:tablet:!h-10 before:tablet:!w-10 flex-wrap items-center">
            <div v-if="$slots.title" class=" max-w-[calc(100%_-_70px)] text-lg tablet:text-xl">
                <slot name="title" />
            </div>
            <div v-if="$slots.content" class="my-5 tablet:mt-10 w-full text-base tablet:text-lg">
                <slot name="content" />
            </div>
            <div v-if="$slots.description" class="mb-5 w-full text-sm tablet:text-base font-semibold">
                <slot name="description" />
            </div>
            <span class="separator"></span>
        </div>
    </effect-appear>
  </li>
</template>

<script>
export default {

}
</script>

<style lang="postcss" scoped>
@reference "~/assets/css/main.css";

li.has-separator .separator{
    @apply w-full h-px bg-gray-light my-10 tablet:my-16;
}
li.has-separator:last-of-type .separator{
    @apply w-full h-0 bg-gray-light my-0 tablet:my-0;
}

</style>
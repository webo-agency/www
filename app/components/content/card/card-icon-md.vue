<template>
    <div class="mb-5">
        <EffectAppearMd class="desktop-delay h-full" :delay="delay * 100">
            <div class="group h-full p-5 pt-10 desktop-wide:p-10 flex flex-col text-gray-darker bg-green-gray">
                <nuxt-picture v-if="icon" class="shrink-0 w-[76px] h-[56px] mb-5 tablet:mb-[30px]"
                    :src="icon"></nuxt-picture>
                <div class="mb-6 [&_*]:font-semibold [&_*]:!mb-0 text-xl desktop:text-2xl">
                    <ContentSlot :use="$slots.title" />
                </div>
                <div class="[&_p]:!leading-loose [&_p]:!mb-0">
                    <ContentSlot :use="$slots.content" />
                </div>
            </div>
        </EffectAppearMd>
    </div>
</template>
  
<script setup>
defineProps({
    icon: String,
    delay: {
        type: Number,
        default: 0,
    }
})
</script>
  
<style></style>
  
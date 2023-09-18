<template>
  <div class=" basis-[calc(50%_-_20px)] tablet-small:basis-[calc(50%_-_40px)] flex flex-col items-center">
    <div class="w-full max-w-[220px] desktop:max-w-[275px]">
        <div class=" h-52 desktop:h-72 w-full relative mb-2">
            <div class="absolute bottom-10 w-full h-1/2 rounded-[5px] bg-gray-light">
            </div>
            <nuxt-picture v-if="imgUrl"
                :src="imgUrl"
                class="h-full w-full relative z-10 object-contain"
                :imgAttrs="{class: 'h-full w-full object-contain object-bottom'}"
            >
                
            </nuxt-picture>
        </div>
        <div
            v-if="$slots.name"
            class="mb-1 text-lg desktop:text-xl font-semibold text-center"
          >
            <ContentSlot :use="$slots.name" unwrap />
        </div>
        <div
            v-if="$slots.description"
            class="text-base desktop:text-lg text-center"
          >
            <ContentSlot :use="$slots.description" unwrap />
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        imgUrl: String
    }
}
</script>

<style>

</style>
<template>
    <li class="w-full">
        <EffectAppearMdc :delay="delay ? delay * 100 : 0">
            <div class="group p-5 bg-gradient-to-b from-gray-darker/50"
                :class="{ 'flex flex-wrap items-center': iconInline }">
                <div class="w-10" :class="iconInline ? 'shrink-0 mb-5 mr-5' : 'mb-10 tablet:mb-[60px] '">
                    <nuxt-picture class="block shrink-0 w-full h-full object-contain" v-if="iconUrl" :src="iconUrl"
                        :imgAttrs="{ class: 'w-full h-full object-contain' }" />
                </div>

                <div v-if="$slots.title" class="max-w-sm text-lg desktop:text-xl font-semibold text-white" :class="iconInline
                    ? 'basis-[calc(100%_-_40px)] mb-5'
                    : 'mb-5 tablet:mb-7 '
                    ">
                    <ContentSlot :use="$slots.title" />
                </div>
                <div v-if="$slots.description"
                    class="max-w-md w-full mb-5 leading-5 text-xs desktop:text-sm font-normal text-white/75">
                    <ContentSlot :use="$slots.description" />
                </div>
            </div>
        </EffectAppearMdc>
    </li>
</template>
  
<script>
import EffectAppearMdc from "./effect-appear-md.vue";

export default {
    name: "IconTile",
    props: {
        delay: Number,
        iconUrl: String,
        iconInline: Boolean,
        center: Boolean
    },
    components: { EffectAppearMdc },

};
</script>
  
  
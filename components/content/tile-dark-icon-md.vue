<template>
    <li class="w-full">
        <EffectAppearMdc :delay="delay ? delay * 100 : 0">
            <div class="group p-5 bg-gradient-to-b from-gray-darker/50"
                :class="{ 'flex flex-col items-center text-center': center }">
                <div class="relative">
                    <svg v-if="iconDecorated" class="mb-5 tablet:mb-8" xmlns="http://www.w3.org/2000/svg" width="100"
                        height="72" viewBox="0 0 100 72" fill="none">
                        <path
                            d="M95 72H85C84.45 72 84 71.55 84 71C84 70.45 84.45 70 85 70H95C96.65 70 98 68.65 98 67V5C98 3.35 96.65 2 95 2H5C3.35 2 2 3.35 2 5V67C2 68.65 3.35 70 5 70H15C15.55 70 16 70.45 16 71C16 71.55 15.55 72 15 72H5C2.24 72 0 69.76 0 67V5C0 2.24 2.24 0 5 0H95C97.76 0 100 2.24 100 5V67C100 69.76 97.76 72 95 72Z"
                            fill="#202020" />
                        <path
                            d="M95 0H5C2.24 0 0 2.24 0 5V7C0 7.55 0.45 8 1 8H99C99.55 8 100 7.55 100 7V5C100 2.24 97.76 0 95 0ZM2 5C2 3.35 3.35 2 5 2H82V6H2V5ZM98 6H84V2H95C96.65 2 98 3.35 98 5V6Z"
                            fill="#202020" />
                    </svg>
                    <nuxt-picture v-if="iconUrl" :src="iconUrl" class="block shrink-0 h-auto object-contain"
                        :class="[iconDecorated ? 'w-[55px] absolute left-1/2 -translate-x-1/2 bottom-3 tablet:bottom-6 max-h-16' : 'w-10']"
                        :imgAttrs="{ class: 'w-full h-full object-contain' }" />
                </div>

                <div v-if="$slots.title" class="max-w-[350px] font-semibold text-white mb-5 tablet:mb-7"
                    :class="[iconDecorated ? 'text-xl desktop:text-3xl' : 'text-lg desktop:text-xl']">
                    <ContentSlot :use="$slots.title" />
                </div>
                <div v-if="$slots.description"
                    class="max-w-[350px] w-full mb-5 leading-5 text-xs desktop:text-sm font-normal text-white/75">
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
        center: Boolean,
        iconDecorated: Boolean
    },
    components: { EffectAppearMdc },

};
</script>
  
  
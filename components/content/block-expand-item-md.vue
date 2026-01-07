<template>
    <div>
        <div class="group peer flex items-center px-5 py-3 tablet:px-[30px] tablet:py-[19px] cursor-pointer hover:bg-[#e4efed] transition duration-200"
        :class="{'bg-[#e4efed]':isExpanded}"
        @click="toggleExpand()">
            <div v-if="number" class="flex items-center justify-center mr-4 shrink-0 aspect-square w-8 tablet:w-10 rounded-full group-hover:bg-green-light transition duration-200" 
            :class="{'bg-green-main':isExpanded}">
                <span class="text-gray-default text-lg tablet:text-xl text-center group-hover:text-green-main transition duration-200"
                :class="{'!text-white group-hover:!text-green-main':isExpanded}">
                    {{ number }}
                </span>
            </div>
            <div
                v-if="$slots.title"
                class="group-hover:underline text-gray-darker text-lg desktop:text-xl font-semibold transition duration-200 pr-3"
            >
                <ContentSlot :use="$slots.title" />
            </div>
            <div v-if="$slots.description" class="shrink-0 p-[5px] w-[30px] h-[30px] relative ml-auto">
                <div class="arrow_wrapper w-[54px] h-[27px] bg-[#e4efed] group-hover:bg-green-main rounded-full flex items-center justify-center top-[5px] left-[-20px] absolute transition duration-300" :class="{'bg-green-main':isExpanded}">
                    <svg class="transition duration-300" :class="{'rotate-180':isExpanded}" xmlns="http://www.w3.org/2000/svg" width="15" height="8" viewBox="0 0 15 8" fill="none">
                        <path d="M14.2143 0.5L7.35714 7.35714L0.5 0.5" stroke="#3A3944" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>

        </div>
        <div class="border-b border-b-white transition duration-200"
        :class="{'border-b-green-main':isExpanded}">
            <div class="overflow-hidden transition-all duration-500" 
            :style="{'height': `${containerHeight}px`}"
            >
                <div
                    ref="descriptionContainer"
                    v-if="$slots.description"
                    class="bg-[#e4efed] text-base desktop:text-lg font-normal tablet:pl-[30px] p-5 pt-0 transition-opacity duration-300"
                    :class="{'opacity-0':!isExpanded}"
                >
                    <ContentSlot :use="$slots.description" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { useWindowSize } from '@vueuse/core'

export default {
    setup(){
        const { width: screenWidth } = useWindowSize()        
        return { screenWidth }
    },
    props:{
        number: Number
    },
    data(){
        return {
            isExpanded: false,
            containerHeight: 0
        }
    },
    watch:{
        screenWidth(){
            if (this.isExpanded) {
                this.setContainerHeight()
            }
        }
    },
    methods:{
        toggleExpand(){
            this.isExpanded = !this.isExpanded
            
            if (this.isExpanded) {
                this.setContainerHeight()
            }else{
                this.containerHeight = 0
            }
        },
        setContainerHeight(){
            const container = this.$refs['descriptionContainer']
            if (container) {
                this.containerHeight = container.clientHeight
            }

        }
    }
}
</script>
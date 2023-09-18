<template>
    <div>
        <div class="group peer flex items-center px-5 pl-0 py-3 tablet:px-[30px] tablet:py-[19px] cursor-pointer"
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
                class="group-hover:text-green-main text-gray-darker text-lg desktop:text-xl font-semibold transition duration-200 pr-3"
            >
                <ContentSlot :use="$slots.title" />
            </div>
            <div v-if="$slots.description" class="shrink-0 p-[5px] w-[30px] h-[30px] relative ml-auto">
                <svg class=" top-[5px] left-[5px] absolute transition duration-300 fill-gray-darker group-hover:fill-green-main rotate-90" :class="{'rotate-180':isExpanded}" xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <rect class="fill-inherit " y="9.5" width="20" height="2"/>
                </svg>
                <svg class="top-[5px] left-[5px] absolute transition duration-300 fill-gray-darker group-hover:fill-green-main" :class="{'rotate-180':isExpanded}" xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <rect class="fill-inherit " y="9.5" width="20" height="2"/>
                </svg>
            </div>

        </div>
        <div class="border-b border-b-gray-light peer-hover:border-b-green-main transition duration-200"
        :class="{'border-b-green-main':isExpanded}">
            <div class="overflow-hidden transition-all duration-500" 
            :style="{'height': `${containerHeight}px`}"
            >
                <div
                    ref="descriptionContainer"
                    v-if="$slots.description"
                    class="text-base desktop:text-lg font-normal pl-0 tablet:pl-[86px] p-5 pt-0 transition-opacity duration-300"
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
<template>
    <ul class="flex flex-wrap gap-x-5 gap-y-2.5 mb-5 tablet:mb-0">
        <li v-if="clearText">
            <input :checked="!selected || selected.length == 0" type="radio" id="clear" name="filters" :value="clearText" class="peer hidden" @change="$event.target.checked ? clearFilters() : null">
            <label for="clear" class="block py-[9px] px-5 text-sm font-medium uppercase rounded-full transition duration-200 cursor-pointer bg-green-light border border-solid border-green-light hover:border-green-main peer-checked:border-green-main text-gray-darker peer-checked:bg-green-main peer-checked:hover:bg-green-mainHover peer-checked:text-white peer-checked:shadow-xl !shadow-green-mainHover/25">

                {{ clearText }}
            </label>            
        </li>
        <li
          v-for="(filter, index) in filters"
          :key="index"          
        >
            <input v-model="selected" :type="clearText ? 'radio' : 'checkbox'" :id="index" name="filters" :value="filter" class="peer hidden" @change="updateValue">
            <label :for="index" class="block py-[9px] px-5 text-sm font-medium uppercase rounded-full transition duration-200 cursor-pointer bg-green-light border border-solid border-green-light hover:border-green-main peer-checked:border-green-main text-gray-darker peer-checked:bg-green-main peer-checked:hover:bg-green-mainHover peer-checked:text-white peer-checked:shadow-xl !shadow-green-mainHover/25">

                {{ filter }}
            </label>
        </li>
    </ul>
</template>

<script setup>
const props = defineProps({
    // This sets filters to radio mode
    clearText:{ 
        type: String,
        default: ''
    },
    filters:{
        type: Array
    },
    modelValue:{
        type: Array,
        default: []
    }
})

const selected = ref(props.modelValue.value ?? [])

const clearFilters = () => {
    selected.value = props.clearText ? null : []
    updateValue()
}

const emit = defineEmits(['update:modelValue'])
const updateValue = () => {
    if (props.clearText) {
        emit('update:modelValue', selected.value ? [selected.value] : [])
    }else{
        emit('update:modelValue', selected.value)
    }
};

</script>
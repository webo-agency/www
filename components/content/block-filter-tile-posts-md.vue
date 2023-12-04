<template>
    <div
    class="case-tile relative w-full flex flex-col z-20"
    v-show="isVisible"
    :class="{'case-tile-hidden':!isVisible}">
        <PostTileMd :data="data"/>
    </div>
</template>

<script>

export default {
    props: {
        data: Object,
        activeFilters: Array,
    },
    computed: {
        isVisible() {
            if (this.activeFilters.length == 0) {
                return true;
            }
            let found = this.data.category?.some(r => this.activeFilters.join().includes(r));
            return found;
        }
    },
}
</script>

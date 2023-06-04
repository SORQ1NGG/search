<script>
export default {
    name: 'SortButton',
};
</script>

<script setup>
import { ref } from 'vue';
import UISymbol from '@/components/ui/UISymbol/index.vue';

const emit = defineEmits(['sort-items']);

const props = defineProps({
    tag: {
        type: String,
        default: 'button',
    },
});
const root = ref(null);
</script>

<template>
    <component
        :is="props.tag"
        ref="root"
        type="button"
        class="button-sort"
        @click="emit('sort-items')"
    >
        <UISymbol class="sort" />
    </component>
</template>

<style src="./style.scss" lang="scss" scoped />

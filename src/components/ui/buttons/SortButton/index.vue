<script>
export default {
    name: 'SortButton',
};
</script>

<script setup>
import { ref } from 'vue';

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
        Сортировка по количеству репозиториев
    </component>
</template>

<style src="./style.scss" lang="scss" scoped />

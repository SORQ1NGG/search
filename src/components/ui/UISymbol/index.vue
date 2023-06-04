<script>
export default {
    name: 'UISymbol',
};
</script>

<script setup>
import { computed } from 'vue';
import iconSort from '@/assets/icons/symbols/sort.svg';

const iconPath = computed(() => {
    if (!iconSort) return '';

    let icon = null;

    try {
        icon = iconSort;
    } catch (e) {
        console.error(iconSort, e);
        return '';
    }

    return icon;
});

</script>

<template>
    <svg
        v-if="iconPath"
        class="symbol"
    >
        <use :xlink:href="`#${iconPath}`" />
    </svg>
</template>

<style src="./style.scss" lang="scss" scoped />

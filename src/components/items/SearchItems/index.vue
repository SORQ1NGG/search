<script>
export default {
    name: 'SearchItems',
};
</script>

<script setup>
import { ref } from 'vue';
import BaseInput from '@/components/BaseInput/index.vue';

const searchData = ref('');

const emit = defineEmits(['search']);

</script>

<template>
    <BaseInput
        v-model="searchData"
        label-text="Git"
        with-icon
        type="text"
        focus-on-mounted
        type-modifiers="search"
        :placeholder="'Search login...'"
        @keyup="emit('search', searchData)"
    />
</template>

<style src="./style.scss" lang="scss" scoped />

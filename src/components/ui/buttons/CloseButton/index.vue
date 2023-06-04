<script>
export default {
    name: 'CloseButton',
};
</script>

<script setup>
import { ref } from 'vue';

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
        class="button-close"
    >
        X
    </component>
</template>

<style src="./style.scss" lang="scss" scoped />

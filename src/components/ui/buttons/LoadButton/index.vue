<script>
export default {
    name: 'LoadButton',
};
</script>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['load-users']);

const props = defineProps({
    tag: {
        type: String,
        default: 'button',
    },
    loading: {
        type: Boolean,
    },
});
const root = ref(null);
</script>

<template>
    <component
        :is="props.tag"
        ref="root"
        role="button"
        type="button"
        class="button-load"
        :class="{'loading': props.loading}"
        @click="emit('load-users')"
    >
        <span>Загрузить еще</span>
    </component>
</template>

<style src="./style.scss" lang="scss" scoped />

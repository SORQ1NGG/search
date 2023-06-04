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
});
const root = ref(null);
</script>

<template>
    <component
        :is="props.tag"
        ref="root"
        type="button"
        class="button-load"
        @click="emit('load-users')"
    >
        Загрузить еще
    </component>
</template>

<style src="./style.scss" lang="scss" scoped />

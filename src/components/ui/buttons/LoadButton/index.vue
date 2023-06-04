<script>
export default {
    name: 'LoadButton',
};
</script>

<script setup>
import { ref } from 'vue';
import CircleLoader from '@/components/ui/loaders/CircleLoader/index.vue';

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
        type="button"
        class="button-load"
        @click="emit('load-users')"
    >
        <slot v-if="!props.loading" />
        <CircleLoader v-else />
    </component>
</template>

<style src="./style.scss" lang="scss" scoped />

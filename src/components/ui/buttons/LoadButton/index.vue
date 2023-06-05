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
        role="button"
        type="button"
        class="button-load"
        @click="emit('load-users')"
    >
        <span v-if="!props.loading">
            Загрузить еще
        </span>
        <CircleLoader v-else data-testid="circle-loader" />
    </component>
</template>

<style src="./style.scss" lang="scss" scoped />

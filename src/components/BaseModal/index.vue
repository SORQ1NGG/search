<script>
export default {
    name: 'BaseModal',
};
</script>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import CloseButton from '@/components/ui/buttons/CloseButton/index.vue';
import HorizontalLoader from '@/components/ui/loaders/HorizontalLoader/index.vue';

const emit = defineEmits(['close']);

const props = defineProps({
    isOpen: {
        type: Boolean,
    },
    loadingUsers: {
        type: Boolean,
    },
});
const root = ref(null);

const isOpened = ref(false);

const toggleOpened = force => {
    isOpened.value = force ?? !isOpened.value;
};

const close = () => {
    if (!isOpened.value) return;

    emit('close');
};

onMounted(() => {
    toggleOpened(true);
    root.value.focus();
});

onUnmounted(() => {
    toggleOpened(false);
});
</script>

<template>
    <transition name="fade">
        <div
            ref="root"
            class="modal-mask"
            tabindex="0"
            @keydown.esc="close"
        >
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-close">
                        <CloseButton @click="close" />
                    </div>
                    <div class="modal-body">
                        <slot v-if="!props.loadingUsers" />
                        <HorizontalLoader v-else />
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<style src="./style.scss" lang="scss" scoped />

<script>
export default {
    name: 'BaseInput',
};
</script>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
    type: {
        type: String,
        default: 'text',
    },
    modelValue: {
        type: [String, Number],
        default: '',
    },
    labelText: {
        type: String,
        default: '',
    },
    withIcon: {
        type: Boolean,
    },
    placeholder: {
        type: [String, Number],
        required: false,
        default: '',
    },
});

const emit = defineEmits(['update:modelValue', 'input-blur']);

const onInput = e => {
    emit('update:modelValue', e.target.value.trim());
};

const input = ref(null);

onMounted(() => {
    if (props.focusOnMounted && typeof input.value?.focus) {
        return input.value?.focus();
    }
});

</script>

<template>
    <label class="input-wrap">
        <span class="input-wrap__label">
            <slot name="label">
                {{ props.labelText }}
            </slot>
        </span>
        <input
            ref="input"
            :placeholder="props.placeholder"
            class="input input-wrap__input"
            :type="props.type"
            :value="props.modelValue"
            @input="onInput"
        >
    </label>
</template>

<style src="./style.scss" lang="scss" scoped />

<script>
export default {
    name: 'CounterMessage',
};
</script>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    usersCount: {
        type: [Array, Number],
        default: null,
    },
});

const counterMessage = computed(() => {
    return (props.usersCount > 0)
        ? `Найдено ${props.usersCount} пользователей`
        : (props.usersCount === 0)
            ? 'По вашему запросу пользователей не найдено'
            : null;
});
</script>

<template>
    <div>
        {{ counterMessage }}
    </div>
</template>

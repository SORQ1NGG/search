<script>
export default {
    name: 'UsersItem',
};
</script>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    login: {
        type: [String, Object],
        default: '',
    },
    avatar: {
        type: [String, Object],
        default: '',
    },
});

const avatarPath = computed(() => {
    if (!props.avatar) return '';

    return props.avatar;
});
</script>

<template>
    <div class="users__item">
        <img
            v-if="avatarPath"
            class="users__item-img"
            :src="`${avatarPath}`"
            alt="img"
            loading="lazy"
        >
        <span class="users__item-name">{{ props.login }}</span>
    </div>
</template>

<style src="./style.scss" lang="scss" scoped />

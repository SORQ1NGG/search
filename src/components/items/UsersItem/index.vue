<script>
export default {
    name: 'UsersItem',
};
</script>

<script setup>
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
</script>

<template>
    <div class="users__item">
        <img
            class="users__item-img"
            :src="`${props.avatar}`"
            alt="img"
        >
        <span class="users__item-name">{{ props.login }}</span>
    </div>
</template>

<style src="./style.scss" lang="scss" scoped />

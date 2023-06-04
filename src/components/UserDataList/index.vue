<script>
export default {
    name: 'UserDataList',
};
</script>

<script setup>
const props = defineProps({
    usersData: {
        type: Array,
        default: () => [],
    },
    title: {
        type: String,
        default: '',
    },
});
</script>

<template>
    <div v-if="props.usersData.length" class="user-block">
        <h3 class="user-block-title">
            {{ props.title }}
        </h3>
        <ul class="user-list">
            <li v-for="item in props.usersData" :key="item.id" class="user-list-item ">
                <a :href="item.html_url" target="_blank" class="user-list-link">{{ item.login ? item.login : item.name }}</a>
            </li>
        </ul>
    </div>
</template>

<style src="./style.scss" lang="scss" scoped />

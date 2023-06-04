<script>
export default {
    name: 'UserDescriptionItem',
};
</script>

<script setup>
import UsersList from '@/components/UserDataList/index.vue';

const props = defineProps({
    userData: {
        type: [String, Object, Array],
        default: '',
    },
    userRepos: {
        type: Array,
        default: () => [],
    },
    userFollowers: {
        type: Array,
        default: () => [],
    },
    userFollowing: {
        type: Array,
        default: () => [],
    },
    loadingImg: {
        type: Boolean,
    },
});
</script>

<template>
    <div v-if="props.userData.avatar_url && props.userData.login" class="user">
        <div class="user-name">
            <img :src="props.userData.avatar_url" alt="img">
            <h2 class="user-name">
                {{ props.userData.login }}
            </h2>
        </div>
        <UsersList :users-data="props.userFollowing" :title="'Following'" />
        <UsersList :users-data="props.userFollowers" :title="'Followers'" />
        <UsersList :users-data="props.userRepos" :title="'Repositories'" />
    </div>
</template>

<style src="./style.scss" lang="scss" scoped />

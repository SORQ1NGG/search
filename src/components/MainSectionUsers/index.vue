<script>
export default {
    name: 'MainSection',
};
</script>

<script setup>
import { useStore } from 'vuex';
import UsersItem from '@/components/items/UsersItem/index.vue';
import { useUsers } from '@/composables/users-list.js';
import SearchItems from '@/components/items/SearchItems/index.vue';
import UserDescriptionItem from '@/components/items/UserDescriptionItem/index.vue';
import LoadButton from '@/components/ui/buttons/LoadButton/index.vue';
import BaseModal from '@/components/BaseModal/index.vue';
import SortButton from '@/components/ui/buttons/SortButton/index.vue';
import CounterMessage from '@/components/ui/UICounterMessage/index.vue';
import HorizontalLoader from '@/components/ui/loaders/HorizontalLoader/index.vue';

const store = useStore();

const {
    searchUsers,
    usersData,
    showModal,
    loading,
    loadingDescription,
    order,
    loadMoreUsers,
    toggleLoadMoreButton,
    showUser,
    toggleModal,
    sortUsersRepo,
} = useUsers();

const closeUserModal = () => {
    toggleModal(false);
};

</script>

<template>
    <SearchItems @search="event => searchUsers(event)" />
    <div class="users-action">
        <CounterMessage :users-count="store.getters['users/totalCount']" />
        <SortButton
            v-if="store.getters['users/items'].length"
            :class="{'activeSort': order === 'asc'}"
            @sort-items="sortUsersRepo"
        />
    </div>
    <div class="users-content">
        <HorizontalLoader v-if="loading" />
        <div class="users-content__list">
            <UsersItem
                v-for="item in store.getters['users/items']"
                :key="item.id"
                :class="{'loading': loading}"
                :login="item.login"
                :avatar="item.avatar_url"
                :loading="loading"
                @click="showUser(item)"
            />
        </div>
        <LoadButton
            v-show="toggleLoadMoreButton(store.getters['users/totalCount'])"
            :loading="loading"
            :disabled="loading"
            @load-users="loadMoreUsers"
        />
        <BaseModal
            v-if="showModal"
            :is-open="showModal"
            :loading-user-info="loadingDescription"
            @close="closeUserModal"
        >
            <UserDescriptionItem
                :user-following="store.getters['users/userFollowing']"
                :user-followers="store.getters['users/userFollowers']"
                :user-repos="store.getters['users/userRepos']"
                :user-data="usersData.login"
            />
        </BaseModal>
    </div>
</template>

<style src="./style.scss" lang="scss" scoped />

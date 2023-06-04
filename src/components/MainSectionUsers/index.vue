<script>
export default {
    name: 'MainSection',
};
</script>

<script setup>
import { useStore } from 'vuex';
import { onUpdated } from 'vue';
import UsersItem from '@/components/items/UsersItem/index.vue';
import { useUsers } from '@/composables/users-list.js';
import SearchItems from '@/components/items/SearchItems/index.vue';
import UserDescriptionItem from '@/components/items/UserDescriptionItem/index.vue';
import LoadButton from '@/components/ui/buttons/LoadButton/index.vue';
import BaseModal from '@/components/BaseModal/index.vue';
import SortButton from '@/components/ui/buttons/SortButton/index.vue';
import CounterMessage from '@/components/ui/CounterMessage/index.vue';

const store = useStore();

const {
    searchUsers,
    usersData,
    showModal,
    loadMoreUsers,
    toggleLoadMoreButton,
    showUser,
    toggleModal,
    ascDesc,
} = useUsers();

const closeUserModal = () => {
    toggleModal(false);
};

onUpdated(() => {
    console.log(store.getters['users/items']);
});

</script>

<template>
    <SearchItems @search="event => searchUsers(event)" />
    <CounterMessage :users-count="store.getters['users/totalCount']" />
    <SortButton
        v-if="store.getters['users/items'].length"
        @sort-items="ascDesc"
    />
    <div class="users-content">
        <div class="users-content__list">
            <UsersItem
                v-for="item in store.getters['users/items']"
                :key="item.id"
                :login="item.login"
                :avatar="item.avatar_url"
                @click="showUser(item)"
            />
        </div>
        <LoadButton
            v-show="toggleLoadMoreButton(store.getters['users/totalCount'])"
            @load-users="loadMoreUsers"
        />
        <BaseModal
            v-if="showModal"
            :is-open="showModal"
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

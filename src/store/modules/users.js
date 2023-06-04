import { Users } from '@/api/users.js';
import { sortByKey } from '@/utils/helpers/helpers.js';

const getDefaultState = () => ({
    userRepos: [],
    userFollowers: [],
    userFollowing: [],
    items: [],
    totalCount: [],
});

export default {
    namespaced: true,

    state: getDefaultState(),

    getters: {
        items: s => s.items,
        totalCount: s => s.totalCount,
        userRepos: s => s.userRepos,
        userFollowing: s => s.userFollowing,
        userFollowers: s => s.userFollowers,
    },

    mutations: {
        CLEAR (state) {
            Object.assign(state, getDefaultState());
        },

        SET_USER_REPOS (state, data) {
            state.userRepos = data;
        },

        SET_USER_FOLLOWERS (state, data) {
            state.userFollowers = data;
        },

        SET_USER_FOLLOWING (state, data) {
            state.userFollowing = data;
        },

        SET_USER_ITEMS (state, data) {
            state.items = data;
        },

        SET_USERS_TOTAL_COUNT (state, data) {
            state.totalCount = data;
        },

        SORT_USERS_REPOS (state, { key, descSort }) {
            sortByKey(state.items, key, descSort);
        },
    },

    actions: {
        async clearSearchUsers ({ dispatch }) {
            dispatch('clearStore', null, { root: true });
        },

        async fetchUsersList ({ commit, getters, dispatch }, { searchUsers, perPageUsers, reposUsers, orderUsers }) {
            const response = await Users.getUsersList(searchUsers, perPageUsers, reposUsers, orderUsers);
            const { items, total_count } = response;

            commit('SET_USERS_TOTAL_COUNT', total_count);
            commit('SET_USER_ITEMS', items);
        },

        async fetchUserRepos ({ commit }, name) {
            commit('SET_USER_REPOS', await Users.getUserRepos(name));
        },

        async fetchUserFollowers ({ commit }, name) {
            commit('SET_USER_FOLLOWERS', await Users.getUserFollowers(name));
        },

        async fetchUserFollowing ({ commit }, name) {
            commit('SET_USER_FOLLOWING', await Users.getUserFollowing(name));
        },

        // async fetchUserData ({ commit }, name) {
        //     const response = await Users.getUserData(name);
        //     const [following, followers, repos] = response;
        //
        //     commit('SET_USER_REPOS', repos);
        //     commit('SET_USER_FOLLOWERS', followers);
        //     commit('SET_USER_FOLLOWING', following);
        // },
    },
};

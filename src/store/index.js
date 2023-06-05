import { createStore } from 'vuex';
import { modules } from '@/store/modules/index.js';

const store = createStore({
    modules,

    state: {
        routeComponentLoading: false,
    },

    mutations: {
        SET_TOGGLE_ROUTE_LOADING (state, force) {
            state.routeComponentLoading = force ?? !state.routeComponentLoading;
        },
    },

    actions: {
        clearStore () {
            store.commit('users/CLEAR');
        },
    },

    getters: {
        routeComponentLoading: s => s.routeComponentLoading,
    },
});
export default store;

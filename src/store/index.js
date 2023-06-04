import { createStore } from 'vuex';
import { modules } from '@/store/modules/index.js';

const store = createStore({
    modules,
    actions: {
        clearStore () {
            store.commit('users/CLEAR');
        },
    },
});
export default store;

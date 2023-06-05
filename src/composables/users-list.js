import { ref } from 'vue';
import debounce from 'lodash.debounce';
import { useStore } from 'vuex';
import { USER_PER_PAGE } from '@/constants/api.js';

export function useUsers () {
    const store = useStore();

    const filterSearch = ref('');
    const loading = ref(false);

    const perPage = ref(USER_PER_PAGE);
    const usersData = ref({});
    const repos = ref('repositories');
    const order = ref('desc');

    const showModal = ref(false);
    const loadingDescription = ref(true);

    const toggleModal = force => {
        showModal.value = force ?? !showModal.value;
    };

    const getUsers = async () => {
        const searchUsers = `${encodeURI(filterSearch.value)}`;
        const perPageUsers = perPage.value;
        const reposUsers = repos.value;
        const orderUsers = order.value;
        loading.value = true;
        await store.dispatch('users/fetchUsersList', { searchUsers, perPageUsers, reposUsers, orderUsers });
        loading.value = false;
    };

    const sortUsersRepo = async () => {
        order.value = order.value === 'desc' ? 'asc' : 'desc';
        await getUsers();
    };

    const searchUsers = debounce(async event => {
        filterSearch.value = event;
        if (filterSearch.value) {
            await getUsers();
        } else {
            await clearUsers();
        }
    }, 500);

    const clearUsers = async () => {
        perPage.value = USER_PER_PAGE;
        order.value = 'desc';
        usersData.value = {};
        await store.dispatch('users/clearSearchUsers');
    };

    const loadMoreUsers = async () => {
        if (store.getters['users/totalCount'] - 1 !== perPage.value) {
            perPage.value += 9;
        } else {
            perPage.value += 1;
        }
        await getUsers();
    };

    const toggleLoadMoreButton = usersCount => {
        return usersCount > perPage.value && perPage.value !== usersCount;
    };

    const fetchUserDescription = async login => {
        await Promise.all([
            store.dispatch('users/fetchUserRepos', login),
            store.dispatch('users/fetchUserFollowing', login),
            store.dispatch('users/fetchUserFollowers', login),
        ]);
    };

    const showUser = async name => {
        toggleModal(true);
        const { login } = name;
        loadingDescription.value = true;
        await fetchUserDescription(login);
        loadingDescription.value = false;
        usersData.value = { login: name, avatar_url: login.avatar_url };
    };

    return {
        searchUsers,
        loading,
        loadingDescription,
        perPage,
        filterSearch,
        usersData,
        showModal,
        order,
        getUsers,
        showUser,
        loadMoreUsers,
        toggleLoadMoreButton,
        toggleModal,
        fetchUserDescription,
        sortUsersRepo,
    };
}

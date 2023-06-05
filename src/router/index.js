import { createRouter, createWebHistory } from 'vue-router';
import { ROUTE_NAMES } from '@/constants/router.js';
import store from '@/store';

const routeOptions = [
    {
        path: '/',
        name: ROUTE_NAMES.MAIN,
        children: [
            {
                path: '',
                name: ROUTE_NAMES.USERS_LIST,
                component: () => import('@/components/MainSectionUsers/index.vue'),
            },
        ],
    },
];

const routes = [
    {
        path: '/:pathMatch(.*)*',
        redirect: '/',
    },
    ...routeOptions.map(route => ({
        ...route,
        component: async () => {
            let component = null;

            const timerId = setTimeout(() => {
                store.commit('SET_TOGGLE_ROUTE_LOADING', true);
            }, 200);

            try {
                component = await import(`@/views/${route.name}Page/index.vue`);
            } catch (e) {
                console.error(e);
            }

            clearTimeout(timerId);
            store.commit('SET_TOGGLE_ROUTE_LOADING', false);

            return component;
        },
    })),
];

const router = createRouter({
    mode: 'history',
    history: createWebHistory(),
    routes,
    scrollBehavior (to) {
        return to.hash ? { el: to.hash } : { top: 0 };
    },
});

export default router;

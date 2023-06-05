<script>
export default {
    name: 'DefaultLayout',
};
</script>

<script setup>
import { useStore } from 'vuex';
import HeaderSection from '@/components/HeaderSection/index.vue';
import CircleLoader from '@/components/ui/loaders/CircleLoader/index.vue';

const store = useStore();
</script>

<template>
    <HeaderSection />

    <CircleLoader
        v-if="store.getters['routeComponentLoading']"
    />

    <slot v-else />
</template>

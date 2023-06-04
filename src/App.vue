<script setup>
import { ref } from 'vue';
import DefaultLayout from '@/components/layouts/DefaultLayout/index.vue';

const root = ref(null);
</script>

<template>
    <div
        ref="root"
        class="app"
    >
        <DefaultLayout>
            <router-view class="page" />
        </DefaultLayout>
    </div>
</template>

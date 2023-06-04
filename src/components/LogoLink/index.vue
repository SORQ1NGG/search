<script>
export default {
    name: 'LogoLink',
};
</script>

<script setup>
import { useRouter } from 'vue-router';
import { ROUTE_NAMES } from '@/constants/router.js';

const router = useRouter();
</script>

<template>
    <div class="logo" @click="router.push({ name: ROUTE_NAMES.MAIN })">
        Git
    </div>
</template>

<style src="./style.scss" lang="scss" scoped />

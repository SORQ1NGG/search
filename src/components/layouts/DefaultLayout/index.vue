<script>
export default {
    name: 'DefaultLayout',
};
</script>

<script setup>
import HeaderSection from '@/components/HeaderSection/index.vue';
</script>

<template>
    <HeaderSection />
    <slot />
</template>

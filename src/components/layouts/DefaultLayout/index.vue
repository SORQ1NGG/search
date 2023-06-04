<script>
export default {
    name: 'DefaultLayout',
};
</script>

<script setup>
import HeaderSection from '@/components/HeaderSection/index.vue';
import FooterSection from '@/components/FooterSection/index.vue';
</script>

<template>
    <HeaderSection />
    <slot />
    <FooterSection />
</template>

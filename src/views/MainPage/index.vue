<script>
export default {
    name: 'MainPage',
};
</script>

<script setup>
import MainSection from '@/components/MainSectionUsers/index.vue';
</script>

<template>
    <div class="main-page">
        <div class="main-page__wrapper content-container">
            <MainSection />
        </div>
    </div>
</template>

<style src="./style.scss" lang="scss" scoped />

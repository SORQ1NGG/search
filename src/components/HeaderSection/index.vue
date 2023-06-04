<script>
export default {
    name: 'HeaderSection',
};
</script>

<script setup>
import LogoLink from '@/components/LogoLink/index.vue';
import HeaderSectionMenu from '@/components/HeaderSection/HeaderSectionMenu/index.vue';
</script>

<template>
    <header
        class="header"
    >
        <div class="header__inner">
            <div class="content-container header__content">
                <LogoLink />
                <HeaderSectionMenu />
            </div>
        </div>
    </header>
</template>

<style src="./style.scss" lang="scss" scoped />

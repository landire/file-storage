<script setup>
import Logo from '@/assets/navbar-logo.svg'

</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    background-color: white;
    width: 100%;
}

.navbar__logo {
    height: 50px;
    text-decoration: none;
}

.navbar__header {
    margin-left: 10px;
    font-size: 24px;
    font-weight: 700;
    text-decoration: none;
}

.container {
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: solid;
    border-color: var(--secondary-color);
}
</style>

<template>
    <div class="container">
        <div class="navbar">
            <router-link class="navbar__logo" to="/">
                <img src="@/assets/navbar-logo.svg" class="navbar__logo" />
            </router-link>
            <router-link class="navbar__header" to="/">Cloud Storage</router-link>
            <slot></slot>
        </div>
    </div>
</template>
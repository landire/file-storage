<script setup>
import { useStore } from 'vuex';

const store = useStore()

const logout = () => {
    store.dispatch('logout')
}
</script>

<style scoped>
.navbar__logout {
    margin-left: auto;
    height: 50px;
    background-color: white;
    border: none;
    cursor: pointer;
}
</style>

<template>
    <button title="Выйти" class="navbar__logout"><img src="@/assets/navbar-logout-logo.svg"
            style="height: 35px; text-decoration: none;" @click="logout" /></button>
</template>
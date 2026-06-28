<script setup>
import { useStore } from 'vuex';

const store = useStore()
</script>

<style scoped></style>

<template>
    <div v-if="!store.state.isAuth">
        <h1>Login PLS</h1>
    </div>
    <div v-if="store.state.isAuth">
        <h1>Hello User</h1>
    </div>
</template>
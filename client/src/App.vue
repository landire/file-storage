<script setup>
import { useStore } from 'vuex';
import LogoutButton from './components/LogoutButton.vue';
import { onMounted, watchEffect } from 'vue';
import { auth } from './actions/user';

const store = useStore()

onMounted(() => {
  auth(store)
})
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  color: var(--secondary-color);
}

body {
  background-color: var(--primary-color);
}

:root {
  --primary-color: #E9E6E6;
  --secondary-color: #1C274C;
}

.app {
  display: flex;
  flex-direction: column;
}

.navbar__login {
  margin-left: auto;
  margin-right: 20px;
}

.navbar__registration {
  margin-right: 20px;
}
</style>

<template>
  <div class="app">
    <Navbar>
      <router-link v-if="!store.state.isAuth" class="navbar__login" to="/login">Войти</router-link>
      <router-link v-if="!store.state.isAuth" class="navbar__registration" to="/registration">Регистрация</router-link>
      <LogoutButton v-if="store.state.isAuth"></LogoutButton>
    </Navbar>
    <router-view></router-view>
  </div>
</template>
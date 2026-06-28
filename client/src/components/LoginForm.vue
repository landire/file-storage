<script setup>
import { login } from '@/actions/user'
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const user = reactive({ email: '', password: '' })
const store = useStore()
const router = useRouter()

const checkUser = () => {
    login(store, user).then(() => {
        user.email = ''
        user.password = ''

        if (store.state.isAuth) {
            router.push('/')
        }
    })
}
</script>

<style scoped>
.login {
    display: flex;
    flex-direction: column;
    width: 500px;
    align-items: center;
    background-color: white;
    border-radius: 20px;
    padding: 20px;
    align-self: center;
    margin-top: 250px;
}

.login__header {
    font-size: 30px;
    font-weight: 700;
}

input {
    margin: 10px 20px;
}
</style>

<template>
    <div class="login">
        <div class="login__header">Вход</div>
        <InputVue v-model="user.email" type="email" placeholder="Введите email" />
        <InputVue v-model="user.password" type="password" placeholder="Введите пароль" />
        <ButtonVue @click="checkUser">Войти</ButtonVue>
    </div>
</template>
<script setup>
import { registration, login } from '@/actions/user'
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex'

const user = reactive({ email: '', password: '' })
const store = useStore()
const router = useRouter()

const createUser = () => {
    registration(user).then(() => {
        login(store, user).then(() => {
            user.email = ''
            user.password = ''

            if (store.state.isAuth) {
                router.push('/')
            }
        })
    })

}
</script>

<style scoped>
.registration {
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

.registration__header {
    font-size: 30px;
    font-weight: 700;
}

input {
    margin: 10px 20px;
}
</style>

<template>
    <div class="registration">
        <div class="registration__header">Регистрация</div>
        <InputVue v-model="user.email" type="email" placeholder="Введите email" />
        <InputVue v-model="user.password" type="password" placeholder="Введите пароль" />
        <ButtonVue @click="createUser">Создать</ButtonVue>
    </div>
</template>
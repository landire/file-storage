import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/view/LoginView.vue'
import RegistrationView from '@/view/RegistrationView.vue'
import MainView from '@/view/MainView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainView,
    },
    {
      path: '/registration',
      component: RegistrationView
    },
    {
      path: '/login',
      component: LoginView
    },
  ],
})

export default router

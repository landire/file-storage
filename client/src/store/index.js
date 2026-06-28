import { createStore } from 'vuex'
import Cookies from 'js-cookie'

export const store = createStore({
  state: {
    user: {},
    file: {},
    accToken: undefined,
    isAuth: false,
  },
  getters: {
    user: (state) => state.user,
    file: (state) => state.file,
    accToken: (state) => state.accToken,
    isAuth: (state) => state.isAuth,
  },
  mutations: {
    setUser(state, data) {
      state.user = data
    },
    setFile(state, data) {
      state.file = data
    },
    setAccToken(state, data) {
      state.accToken = data
    },
    setAuth(state, data) {
      state.isAuth = data
    },
  },
  actions: {
    setUserData({ commit, dispatch }, data) {
      if (data.token) {
        commit('setAuth', true)
      }
      commit('setUser', data.user)
      commit('setAccToken', data.token)
    },

    login({ commit, dispatch }, data) {
      if (data.token) {
        Cookies.set('accToken', data.token)
        commit('setAuth', true)
      }
    },

    logout({ commit, dispatch }, data) {
      Cookies.remove('accToken')
      commit('setAuth', false)
    },
  },
})

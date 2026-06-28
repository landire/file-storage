import axios from 'axios'
import config from '../../config.json'
import Cookies from 'js-cookie'

export const registration = async (user) => {
  try {
    const response = await axios.post(
      `${config.apiURL}:${config.apiPort}/api/auth/registration`,
      user,
    )
  } catch (e) {
    console.error(e.response?.data.message)
    alert(e)
  }
}

export const login = async (store, user) => {
  try {
    const response = await axios.post(`${config.apiURL}:${config.apiPort}/api/auth/login`, user)

    store.dispatch('login', response.data)
  } catch (e) {
    console.error(e.response?.data)
    alert(e)
  }
}

export const auth = async (store) => {
  try {
    const response = await axios.get(`${config.apiURL}:${config.apiPort}/api/auth/auth`, {
      headers: { Authorization: `Bearer ${Cookies.get('accToken')}` },
    })

    store.dispatch('setUserData', response.data)
  } catch (e) {
    console.error(e.response?.data)
    alert(e)
    store.commit('logout')
  }
}

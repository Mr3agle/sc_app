import axios from 'axios'
const api_url = process.env.VUE_APP_API_URL

export default {
  namespaced: true,
  state: { userData: null },
  getters: {
    user: (state) => state.userData,
  },
  mutations: {
    setUserData(state, user) {
      state.userData = user
    },
  },
  actions: {
    loginRequest({ commit }, data) {
      commit('setErrors', {}, { root: true })
      return axios.post(api_url + 'login', data).then((response) => {
        commit('setUserData', response.data.user)
        localStorage.setItem('authToken', response.data.token)
      })
    },
    registerRequest({ commit }, data) {
      commit('setErrors', {}, { root: true })
      return axios.post(api_url + 'register', data).then((response) => {
        commit('setUserData', response.data.user)
        localStorage.setItem('authToken', response.data.token)
      })
    },
    userDataRequest({ commit }) {
      axios
        .get(api_url + 'user')
        .then((response) => {
          commit('setUserData', response.data)
        })
        .catch(() => {
          localStorage.removeItem('authToken')
        })
    },
    sendLogOutRequest({ commit }) {
      axios.post(api_url + 'logout').then(() => {
        commit('setUserData', null)
        localStorage.removeItem('authToken')
      })
    },
    resendVerificationRequest() {
      return axios.get(api_url + 'email/resend')
    },
    sendVerificationRequest({ dispatch }, token) {
      return axios.get(api_url + 'email/verify/' + token).then(() => {
        dispatch('userDataRequest')
      })
    },
  },
}

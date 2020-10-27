import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Layout from './views/shared/BaseLayout.vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from 'gsap/all'
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$gsap = gsap

const requireComponent = require.context(
  './components',
  true,
  /[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName)
  const componentName = upperFirst(
    camelCase(
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )
  Vue.component(componentName, componentConfig.default || componentConfig)
  console.log(componentName);
})

Vue.component('Layout', Layout)

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    switch (error.response.status) {
      case 422: {
        store.commit('setErrors', error.response.data.errors)
        break
      }
      case 401: {
        store.commit('auth/setUserData', null)
        localStorage.removeItem('authToken')
        router.push({ name: 'Login' })
        break
      }
      default: {
        return Promise.reject(error)
      }
    }
  }
)

axios.interceptors.request.use(function(config) {
  config.headers.common = {
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }
  return config
})
// axios.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response.status === 422) {
//       store.commit('setErrors', error.response.data.errors)
//     } else if (error.response.status === 401) {
//       store.commit('auth/setUserData', null)
//       localStorage.removeItem('authToken')
//       router.push({ name: 'Login' })
//     } else {
//       return Promise.reject(error)
//     }
//   }
// )

// axios.interceptors.request.use(function(config) {
//   config.headers.common = {
//     Authorization: `Bearer ${localStorage.getItem('authToken')}`,
//     'Content-Type': 'application/json',
//     Accept: 'application/json',
//   }

//   return config
// })

Vue.mixin({
  methods: {
    getCurrentYear: (year) => new Date().getFullYear(),
  },
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')

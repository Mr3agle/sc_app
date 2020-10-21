import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/pages/Home'

Vue.use(VueRouter)

const guest = (to, from, next) => {
  if (!localStorage.getItem('authToken')) {
    return next()
  } else {
    return next('/')
  }
}

const auth = (to, from, next) => {
  if (localStorage.getItem('authToken')) {
    return next()
  } else {
    return next('/login')
  }
}
const admin = (to, from, next) => {
  const isAdmin = localStorage.getItem('authRole')
  if (isAdmin == 'admin') {
    return next()
  } else {
    return next('/404')
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/pages/About'),
  },
  {
    path: '/login',
    name: 'Login',
    beforeEnter: guest,
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/auth/Login'),
  },
  {
    path: '/register',
    name: 'Register',
    beforeEnter: guest,
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/auth/Register'),
  },
  {
    path: '/verify/:token',
    name: 'Verify',
    beforeEnter: auth,
    props: true,
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/auth/Verify'),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    beforeEnter: admin,
    props: true,
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/admin/Dashboard'),
  },
  {
    path: '*',
    name: 'NotFound',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/error/NotFound'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router

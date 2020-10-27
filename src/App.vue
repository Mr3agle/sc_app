<template>
  <div id="app">
    <div v-show="isAdmin" class="w-screen flex admin-nav bg-blue-900 p-1">
      <a v-show="!dashboard" href="/admin/dashboard">
        <div class="px-3 dashboard p2 text-white bg-blue-600 rounded cursor-pointer ml-4">
          Administrar
        </div>
      </a>
      <a v-show="dashboard" href="/">
        <div class="px-3 dashboard p2 text-white bg-green-600 rounded cursor-pointer ml-4">
          Ver sitio
        </div>
      </a>
      <a v-show="dashboard" href="#" @click="logout">
        <div class="px-3 dashboard p2 text-white bg-red-600 rounded cursor-pointer ml-4">
          salir
        </div>
      </a>
    </div>
    <nav v-show="!dashboard" class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <span class="font-semibold text-xl tracking-tight">Simpol Commerce</span>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">

      <router-link class="active:text-white block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" to="/">Inicio</router-link>
      <router-link class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"to="/about">Acerca de</router-link>
      <span class="guest" v-show="!user">
            <router-link class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" to="/login">Ingresar</router-link>
          </span>
          <span class="guest" v-show="!user">
            <router-link class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" to="/register">Registrarse</router-link>
          </span>
          <span v-show="user">
            <button type="button" @click="logout">Salir</button>
          </span>
    </div>
    <div>
      <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
    </div>
  </div>
</nav>
    <!-- <div class="client-nav flex mb-4 bg-green-300 p-3">
      <div class="container bg-red-100 mx-auto">
        <div class="w-1/4 bg-orange-500">
          <div class="logo">
            Simpol-Commerce
          </div>
        </div>
        <div class="w-3/4 bg-purple-400">
          <router-link class="link" to="/">Inicio</router-link>
          |
          <router-link to="/about">Acerca de</router-link>
          |
          <span class="guest" v-show="!user">
            <router-link to="/login">Ingresar</router-link>
          </span>
          <span class="guest" v-show="!user">
            |
            <router-link to="/register">Registrarse</router-link>
          </span>
          <span v-show="user">
            <button type="button" @click="logout">Salir</button>
          </span>
        </div>
      </div>
      
    </div> -->
    <!-- <div class="showbar" @click="isAdmin">
      será admin?
    </div> -->
    <router-view />
  </div>
</template>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    // color: $purple;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    data(){
      return{
        isAdmin: null,
        dashboard: null
      }
    },
    computed: {
      ...mapGetters('auth', ['user']),
      
    },
    mounted() {
      if (localStorage.getItem('authToken')) {
        this.userDataRequest()
      }
      console.log(this.$router.currentRoute.name);
    },
    methods: {
      ...mapActions('auth', ['sendLogOutRequest', 'userDataRequest']),

      logout() {
        this.sendLogOutRequest()
        this.$router.push({name: 'Home'}, () => {})
      }
    },
    updated() {
      if (this.user !== null && this.user.role === 'admin') {
        // console.log(this.user.role)
        this.isAdmin = true
      }
      else{
        // console.log('Not in or logged out')
        this.isAdmin = false
      }

      // $route.matched.some(({ name }) => name === 'admin')

      if(this.$route.path.includes('/admin') ){
        this.dashboard = true
      }else{
        this.dashboard = false
      }
      // console.log(this.$route.path.includes('admin'));
      // console.log(localStorage.getItem('authRole'))

    }
  }
</script>

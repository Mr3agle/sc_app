<template>
  <div id="app">
    <div v-show="isAdmin" class="w-screen flex admin-nav bg-blue-900 p-1">
      <a href="/dashboard">
        <div class="px-3 dashboard p2 text-white bg-blue-600 rounded cursor-pointer ml-4">
          Administrar
        </div>
      </a>
    </div>
    <div id="nav">
      <router-link to="/">Inicio</router-link>
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
        isAdmin: null
      }
    },
    computed: {
      ...mapGetters('auth', ['user']),
    },
    mounted() {
      if (localStorage.getItem('authToken')) {
        this.userDataRequest()
      }
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

      // console.log(localStorage.getItem('authRole'))

    }
  }
</script>

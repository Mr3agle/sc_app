<template>
  <div id="app">
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
        // location.reload()
        // if (!this.$router.currentRouteName !== 'Home') {
        //   this.$router.push('/')
        // }
      },
    },
  }
</script>

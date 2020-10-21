<template>
  <main class="container mx-auto bg-gray-300 p-5">
    <div class="w-full max-w-xs mx-auto">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @keyup.enter="login">
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2 text-left"
            for="username"
          >
            E-mail/Usuario
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            :class="{ 'border-red-500': errors.email }"
            id="email"
            type="text"
            name="username"
            placeholder="alguien@mail.com"
            v-model="loginData.username"
          />
          <div
            class="text-red-500 text-xs italic text-left"
            v-if="errors.email"
          >
            {{ errors.email[0] }}
          </div>
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2 text-left"
            for="password"
          >
            Password
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            :class="{ 'border-red-500': errors.password }"
            id="password"
            type="password"
            placeholder="*********"
            v-model="loginData.password"
          />

          <div
            class="text-red-500 text-xs italic text-left"
            v-if="errors.password"
          >
            {{ errors.password[0] }}
          </div>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            @click="login"
          >
            Ingresar
          </button>
          <router-link
            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            to="/register"
          >
            o Regístrate
          </router-link>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;{{ getCurrentYear() }} SimpolCommerce. Todos Los derechos
        reservados.
      </p>
    </div>
  </main>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    data() {
      return {
        loginData: {
          username: null,
          password: null,
        },
      }
    },
    computed: {
      ...mapGetters(['errors']),
    },
    mounted() {
      this.$store.commit('setErrors', {})
    },
    methods: {
      ...mapActions('auth', ['loginRequest']),

      login() {
        this.loginRequest(this.loginData)
          .then(() => {
            this.$router.push({
              name: 'Home',
            })
          })
          .catch((errors) => {
            console.log(errors)
          })
      },
    },
  }
</script>

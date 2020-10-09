<template>
  <main class="container mx-auto bg-gray-300 p-5">
    <div class="w-full max-w-xs mx-auto">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2 text-left"
            for="name"
          >
            Nombre
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            :class="{ 'border-red-500': errors.name }"
            id="nombre"
            type="text"
            placeholder="John Doe"
            v-model="registerData.name"
          />
          <div class="text-red-500 text-xs italic text-left" v-if="errors.name">
            {{ errors.name[0] }}
          </div>
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2 text-left"
            for="username"
          >
            E-mail
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            :class="{ 'border-red-500': errors.email }"
            id="email"
            type="email"
            placeholder="alguien@mail.com"
            v-model="registerData.email"
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
            Contraseña
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            :class="{ 'border-red-500': errors.password }"
            id="password"
            type="password"
            placeholder="*********"
            v-model="registerData.password"
          />
          <div
            class="text-red-500 text-xs italic text-left"
            v-if="errors.password"
          >
            {{ errors.password[0] }}
          </div>
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2 text-left"
            for="password"
          >
            Repetir Contraseña
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password-check"
            type="password"
            placeholder="*********"
            v-model="registerData.password_confirmation"
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            @click="register"
          >
            Regístrarse
          </button>
          <router-link
            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            to="/login"
          >
            o Inicia Sesión
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
  import { mapActions, mapGetters } from 'vuex'
  export default {
    data() {
      return {
        registerData: {
          name: null,
          email: null,
          password: null,
          password_confirmation: null,
        },
      }
    },
    computed: {
      ...mapGetters(['errors']),
    },
    methods: {
      ...mapActions('auth', ['registerRequest']),

      register() {
        this.registerRequest(this.registerData).then(() => {
          this.$router.push({
            name: 'Home',
          })
        })
      },
    },
    mounted() {
      this.$store.commit('setErrors', {})
    },
  }
</script>

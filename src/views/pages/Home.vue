<template>
  <div class="home mt-5">
    <div class="container mx-auto">
      <div
        class="alert-animate w-1/2 mb-12 mx-auto bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
        role="alert"
        v-if="success"
      >
        <div class="flex">
          <div class="py-1">
            <svg
              class="fill-current h-6 w-6 text-teal-500 mr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"
              />
            </svg>
          </div>
          <div>
            <p class="font-bold">¡Genial!</p>
            <p class="text-sm">
              {{ success }}
            </p>
          </div>
        </div>
      </div>
      <div
        class="alert-animate w-1/2 mb-12 mx-auto bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-md"
        role="alert"
        v-if="error"
      >
        <div class="flex">
          <div class="py-1">
            <svg
              class="fill-current h-6 w-6 text-red-500 mr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"
              />
            </svg>
          </div>
          <div>
            <p class="font-bold">¡Oh No!</p>
            <p class="text-sm">
              {{ error }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="alert alert-danger" role="alert" v-if="error">
      {{ error }}
    </div>
    <h2 v-if="!user">
      Bienvenido a Simpol-Commerce, para ver el contenido por favor
      <router-link class="text-blue-500 hover:text-blue-700" to="/register">
        regístate
      </router-link>
      o
      <router-link class="text-blue-500 hover:text-blue-700" to="/login">
        inicia sesión
      </router-link>
      .
    </h2>
    <h2 v-else-if="!user.email_verified_at">
      Hola, {{ user.name }}! gracias por registrarte, por favor revisa tu correo
      y sigue el enlace para ativar tu cuenta.
      <p class="text-sm text-gray-600 mt-3">
        ¿No recibiste el mail? Haz
        <button
          type="button"
          class="text-blue-500 hover:text-blue-700"
          @click="resendVerificationCode"
        >
          click aquí
        </button>
        y te enviaremos otro.
      </p>
    </h2>
    <div class="container mx-auto" v-else>
      <div class="max-w-sm w-1/2 mx-auto shadow-2xl lg:max-w-full lg:flex ">
        <div
          class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          style="background-image: url('https://images.unsplash.com/photo-1511317559916-56d5ddb62563?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=639&q=80')"
          title="Woman holding a mug"
        ></div>
        <div
          class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
        >
          <div class="mb-8">
            <p class="text-sm text-gray-600 flex items-center">
              <svg
                class="fill-current text-gray-500 w-3 h-3 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
                />
              </svg>
              Solo miembros
            </p>
            <div class="text-gray-900 font-bold text-xl mb-2 text-left mt-3">
              Hola {{ user.name }}! eres un {{ user.role }}
            </div>
            <p class="text-gray-700 text-base text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="flex items-center">
            <img
              class="w-10 h-10 rounded-full mr-4"
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Avatar of Jonathan Reinink"
            />
            <div class="text-sm">
              <p class="text-gray-900 leading-none">Jonathan Reinink</p>
              <p class="text-gray-600 text-left">Aug 18</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'Home',

    data() {
      return {
        success: null,
        error: null,
      }
    },

    computed: {
      ...mapGetters('auth', ['user']),
    },

    methods: {
      ...mapActions('auth', ['resendVerificationRequest']),

      resendVerificationCode() {
        this.success = this.error = null
        this.resendVerificationRequest()
          .then(() => {
            this.success =
              'Se ha enviado un nuevo link de confirmación a tu correo.'
          })
          .catch((error) => {
            this.error =
              'Ocurrió un error, no pudimos enviar el link de confirmación.'
            console.log(error.response)
          })
      },
    },
  }
</script>

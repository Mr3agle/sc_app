<template>
  <main>
    <div class="verify container mx-auto">
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
    <h1 v-show="!error">Solo tardará unos segundos...</h1>
  </main>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    props: ['token'],
    data() {
      return {
        error: null,
      }
    },
    mounted() {
      this.sendVerificationRequest(this.token)
        .then(() => {
          this.$router.push({
            name: 'Home',
          })
        })
        .catch((error) => {
          console.log(error.response)
          this.error = 'No se pudo verificar el e-mail'
        })
    },
    computed: {
      ...mapGetters('auth', ['user']),
    },
    methods: {
      ...mapActions('auth', ['sendVerificationRequest']),
    },
  }
</script>

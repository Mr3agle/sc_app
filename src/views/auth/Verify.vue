<template>
  <main>
    <div class="verify">
      <div class="error" v-if="error">
        {{ error }}
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

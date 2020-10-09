<template>
  <Layout>
    <h2 class="teste">
      Esta es la página que habla sobre Simpol Commerce y su equipo.
    </h2>
  </Layout>
</template>

<style lang="scss" scoped>
  h2 {
    color: #198cf8;
  }
</style>

<script>
  export default {
    mounted() {
      this.$gsap.from('.teste', {
        opacity: 0,
        y: 100,
        duration: 1,
      })
    },
  }
</script>

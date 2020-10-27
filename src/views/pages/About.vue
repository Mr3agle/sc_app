<template>
  <Layout>
    <h2 class="teste mt-5 container mx-auto">
      Esta es la página que habla sobre Simpol Commerce y su equipo.
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, reprehenderit perspiciatis. Minima animi, fugiat suscipit tempore debitis, sunt cupiditate nesciunt, velit ducimus nostrum architecto neque nulla error incidunt aliquam. Tempore.
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

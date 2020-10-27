<template>
  <section class="trasition-all duration-300">
    <div class="flex">
      <div class="w-1/6" :class="{'w-1/12':collapse}">
        <DashboardNav>
          <template v-slot:admin-data>
            <div v-show="!collapse" class="text-white font-bold text-2xl text-left pl-5">
              Admin Data Aqui
            </div>
            <div class="hamburger text-white hover:text-gray-400 cursor-pointer" @click="toggleCollapse">
              colapsar <- 
            </div>
          </template>
          <ul v-show="!collapse" class="text-left pl-5">
            <li>
              <BaseButton to="/admin/dashboard"> Dashboard </BaseButton>
            </li>
            <li>
              <BaseButton to="/admin/productos"> Productos </BaseButton>
            </li>
            <li>
              <BaseButton to="/admin/cupones"> Cupones </BaseButton>
            </li>
            <li>
              <BaseButton to="/admin/usuarios"> Usuarios </BaseButton>
            </li>
            <li>
              <BaseButton to="/admin/configuraciones"> Configuraciones </BaseButton>
            </li>
          </ul>
        </DashboardNav>
      </div>
      <div class="w-5/6 h-100" :class="{'w-11/12':collapse}">
        <div class="container my-5 p-12 mx-auto">
          <h1 class="font-bold text-4xl text-left">Productos</h1>
          <div class="products bg-white mx-auto shadow-md rounded-lg">
            <!-- {{productData}} -->
            <table class="table-fixed text-left">
              <thead>
                <tr>
                  <th class="px-4 py-2">id</th>
                  <th class="w-1/2 px-4 py-2">Nombre</th>
                  <th class="w-1/2 px-4 py-2">Categoría</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(products,index) in productData" :class="{'bg-gray-100': index % 2 !== 0}">
                  <td class="border px-4 py-2">{{index+1}}</td>
                  <td class="border px-4 py-2">{{products.productName}}</td>
                  <td class="border px-4 py-2">{{products.categoryName}}</td>
                </tr>
                <!-- <tr>
                  <td class="border px-4 py-2">1</td>
                  <td class="border px-4 py-2">Adam</td>
                  <td class="border px-4 py-2">858</td>
                </tr>
                <tr class="bg-gray-100">
                  <td class="border px-4 py-2">2</td>
                  <td class="border px-4 py-2">Adam</td>
                  <td class="border px-4 py-2">112</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">3</td>
                  <td class="border px-4 py-2">Chris</td>
                  <td class="border px-4 py-2">1,280</td>
                </tr> -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      collapse: false,
      productData: []
    }
  },
  methods:{
    toggleCollapse(){
      this.collapse = !this.collapse
    }
  },
  mounted(){
    axios.get('https://scapi.test/api/products')
    .then(response => (this.productData = response.data))
    .catch(err=> console.log(err))
  }
}
</script>

<style lang="scss" scoped>
  ul{
    li{
      margin-top: 2rem;
    }
  }
</style>
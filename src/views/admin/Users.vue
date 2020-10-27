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
            <!-- {{usersData}} -->
            <table class="table-fixed text-left">
              <thead>
                <tr>
                  <th class="px-4 py-2">id</th>
                  <th class="w-1/5 px-4 py-2">Nombre</th>
                  <th class="w-1/5 px-4 py-2">Usuario</th>
                  <th class="w-1/5 px-4 py-2">E-mail</th>
                  <th class="w-1/5 px-4 py-2">ip</th>
                  <th class="w-1/5 px-4 py-2">role</th>
                  <th class="w-1/5 px-4 py-2">Registrado</th>
                  <th class="w-1/5 px-4 py-2">Verificado</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(users,index) in usersData" :class="{'bg-gray-100': index % 2 !== 0}">
                  <td class="border px-4 py-2">{{index+1}}</td>
                  <td class="border px-4 py-2">{{users.name}} {{users.lastname}}</td>
                  <td class="border px-4 py-2">{{users.username}}</td>
                  <td class="border px-4 py-2">{{users.email}}</td>
                  <td class="border px-4 py-2">{{users.ip_address}}</td>
                  <td class="border px-4 py-2">{{users.role}}</td>
                  <td class="border px-4 py-2">{{toDate(users.created_at)}}</td>
                  <td class="border px-4 py-2">{{toDate(users.email_verified_at)}}</td>
                </tr>
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
      usersData: []
    }
  },
  methods:{
    toggleCollapse(){
      this.collapse = !this.collapse
    },
    toDate(d){
      if(d !== null){
        const date = new Date(d)
        return date.toLocaleDateString()
      }else{
        return null
      }
    }
  },
  mounted(){
    axios.get('https://scapi.test/api/all-users')
    .then(response => (this.usersData = response.data))
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
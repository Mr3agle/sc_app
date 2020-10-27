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
      <div class="w-5/6 bg-blue-500 h-100" :class="{'w-11/12':collapse}">
        Aqui va todo el content
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      collapse: false
    }
  },
  methods:{
    toggleCollapse(){
      this.collapse = !this.collapse
    }
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
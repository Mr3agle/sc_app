<template>
<!-- :class="{'collapse': collapsed}" -->
  <nav class=" bg-gray-800">
    <div class="dashboard-admin-data">
      <slot name="admin-data">
      </slot>
    </div>
    <div class="divider"></div>
    <div class="dashboard-nav text-white">
      <slot></slot>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'Dashboard-Nav',
  // props:{
  //   collapsed: Boolean
  // },
  data() {
    return {
      
    }
  },
  mounted(){

  }
}
</script>
<style lang="scss" scoped>
  nav{
    height: 100vh;
    transition: all ease-in-out .3s;
  }
  .collapse{
    width: 3rem;
    transition: all ease-in-out .3s;

  }
  .divider{
    width: 100%;
    margin: auto;
    height: .1rem;
    background-color: #7d8ec5;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-radius: 15px;
  }
</style>
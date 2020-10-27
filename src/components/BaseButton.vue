<template>
  <router-link :to="to" class="primary-button">
    <slot/>
  </router-link>
</template>

<script>
export default {
  props:{
    to:String
  }
}
</script>

<style lang="scss" scoped>
  .primary-button{
    padding: .5rem;
    background-color: #1c5d66;
    border-radius: .5rem;
    &:hover{
      background-color: #077886;
    }
  }
  .router-link-active{
    background-color: #11a377;
    &:hover{
      background-color: #0e815f;
    }
  }
</style>
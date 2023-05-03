
<template>
  <v-app>
    <NavbarPage/>
    <router-view></router-view>
  </v-app>
</template>

<script>
import NavbarPage from './components/NavbarPage.vue';
  export default {
    components: {
      NavbarPage
    }
  }
</script>

<style lang="scss" scoped>

</style>
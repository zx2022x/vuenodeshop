<template>
  <div id="app">
    
    
    <router-view></router-view>
  </div>
</template>

<script>

import AdminLogin from '@/pages/admin/Login'
import AdminHome from '@/pages/admin/adminHome'

export default {
  name: 'App',
  components: {
    AdminLogin,
    AdminHome,
  }
}
</script>

<style>

</style>

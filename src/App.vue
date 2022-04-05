<template>
  <div id="app">
    
    <Header />
    <div class="w">
    <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>

import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components:{
       Header,
       Footer,
  }
   
 
 

}

</script>

<style lang='less' scoped>
#app{
   background-color:#f5f5f5;
}
.w {

  width: 1290px;

  margin: 0 auto;
 
}

</style>

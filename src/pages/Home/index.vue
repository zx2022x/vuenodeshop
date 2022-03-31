<template>
  <div class="home">
  
  <Header/>
  <div class="body">
   <Search/>

  </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Search from '@/pages/Search'
export default {
  data(){
      return {

      }
  },
  components:{
      Header,
      Search,
  }
}
</script>

<style lang='less' scoped>

.home{

    .body{

    
    width: 1290px;
    height: 600px;
    margin:0 auto;
    background-color: aqua;
   
    
    }
    
}

</style>
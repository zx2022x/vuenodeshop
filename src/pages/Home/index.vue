<template>
  <div class="home">

  <Header/>
  <div class="body">

  </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  data(){
      return {

      }
  },
  components:{
      Header,
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
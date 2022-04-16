<template>
  <div class="search">
        <!-- <el-input v-model="input" placeholder="请输入商品名称" @change="search($event)" ref='item'></el-input> -->
        <el-input v-model="input1" placeholder="请输入商品名称" ></el-input>
  </div>
</template>

<script>
import {debounce} from 'loadsh'
export default {
data() {
    return {
      input1: '',
    }
  },
  methods:{
    // getData(newValue){
    //    console.log('新的值1'+newValue)
    //    _.debounce((newValue)=>{
    //       // this.$router.push({name:'searchitemlist',params:{searchword:nV}})
    //       console.log('新的值'+newValue)
    //       //  this.$store.dispatch('getSearchList')
    //     },10)


    // },
    getData:debounce(function(nV){
      // this.$store.dispatch('getSearchInfo',{pageNum:1,pageSize:10,goods_name:nV})
      this.$router.push({path:'/searchlist',query:{goods_name:nV}})
      
    },1000)
  },
  watch:{
     input1(nV,oldValue){
        // console.log('新的值'+nV)
      // _.debounce(function(){
      //     // this.$router.push({name:'searchitemlist',params:{searchword:nV}})
      //     console.log(nV)
      //     //  this.$store.dispatch('getSearchList')
      //   },10)
      this.getData(nV)

     }
  }
}

</script>

<style lang='less' scoped>
.search{
    height: 112px;
    // background-color: rgb(211, 224, 189);
}
.el-input{
    margin-top:37px;
    margin-left:864px;
    width: 400px;
    
} 

</style>
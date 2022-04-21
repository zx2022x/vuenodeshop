<template>
<div class="swiper">
  <div class="block">
   
    <el-carousel height="420px">
      <el-carousel-item v-for="(item, index) in list" :key="item.id">
        <!-- <h3 class="small">{{ item }}</h3> -->
         <el-image
      style="width: 100%; height: 420px"
      :src="url"
       fit="fit"></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
 
  </div>
</template>
<script>
export default{
  data(){
    return{
       url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
       list:[],
       
    }
  },
  mounted(){
    this.$bus.$on('arr',(arr)=>{
         console.log("arr++++++")
          //  console.log(this.list)
           const a=arr.length
           let count=0
           for(let i=a-4;i<a;i++){

            if(count==4){
              i=a
            }
           count++
           this.list.push(arr[i])
           }
         
          //    console.log(nV[a-1],nV[a-2])
             console.log(this.list)
    })
  },
  methods:{
     
  }
}
</script>

<style lang='less' scoped>

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  

</style>
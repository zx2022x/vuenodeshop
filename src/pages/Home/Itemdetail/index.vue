<template>
  <div>
    <Search />
    <div class="w">
    <div class="itemInfo">

      <div class="demo-image__preview">
        <el-image
          style="width: 300px; height: 300px"
          :src="url"
          :preview-src-list="srcList"
        >
        </el-image>
      </div>
     <div class="itemIn2">
      <h1>{{goods_name}}</h1>
      <div class="item3">
      <div class="price">
      <span>价格:¥{{goods_price}}</span>
      </div>
      <div class="hezai">
      <el-input-number v-model="num" @change="handleChange" :min="1" :max="9000" label="描述文字"></el-input-number>
      <el-button type="danger" @click="addShopCart()">加入购物车</el-button>
      </div>
      <p>详细描述:<p>
      <p>{{goods_detail}}</p>
      </div>
    </div>
    </div>
    
    </div>
  </div>
</template>

<script>
import Search from "@/pages/Search";
import {getID} from '@/utils/token'
export default {
  data() {
    return {
      url: "",
      srcList: [
        
      ],
       num: 1,
      id:'',
      goods_name:'',
      goods_price:'',
      goods_detail:'',
    };
  },
  methods:{
    //点击增加或减少数量
    handleChange(value) {
         this.num=value++
         
      },
    //点获取路由参数
    getRouterParam(){
       
        // const {goods_id,goods_name,goods_price,goods_detail}=this.$route.query.item
        // console.log("goodsiD岗位是"+this.$route.query.item)
    },
    //
    async addShopCart(){
       const {id,num}=this
       const user_id=parseInt(getID())
       const id1=parseInt(id)
      //  console.log('输入是'+num)
       await this.$store.dispatch('addShopCart',{goods_id:id1,user_id,number:num})
       
    }
  },
  components: {
    Search,
  },
  mounted(){
      // this.getRouterParam()
  },
  watch:{
       '$route.query':{
           handler(nV,oV){
               
                  const {id,goods_name,goods_price,goods_detail,goods_img}=nV
                  this.id=id
                  this.goods_name=goods_name
                  this.goods_price=goods_price
                  this.goods_detail=goods_detail
                  this.url=`http://localhost:3000/${goods_img}`
                  this.srcList[0]=`http://localhost:3000/${goods_img}`
                  
           },
           deep:true,
           immediate:true
       }
  }
};
</script>

<style lang="less" scoped>
.clearfix {
  &::before,
  &::after {
    content: "";
    display: table;
  }
  &::after {
    clear: both;
  }
  & {
    *zoom: 1;
  }
}
.w {

  width: 1290px;

  margin: 0 auto;
  .clearfix;
}
.demo-image__preview{
     
     float:left;

}
.itemIn2{

      height:500px;
      width: 600px;
      margin-left:25px;
      float:left;
  
      h1{
        font-size:17px;
      }
      .price{
        margin-top:20px;
        margin-bottom:20px;
        color:red;
      }
      .hezai{
         margin-bottom:30px;
         .el-button{
           margin-left:15px;
         }
      }
}
.item3{
      margin-left:5px;
}

</style>
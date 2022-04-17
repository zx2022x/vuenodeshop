<template>
 <div class="w">
  <div class="af">
    <!-- <el-button :plain="true" @click="open2">成功</el-button>

    <el-button :plain="true" @click="open4">错误</el-button> -->
    <!-- <el-table :data="SpListInfo.list" stripe style="width: 100%"> -->
    <el-table :data="getShopCartInfo.list" stripe style="width: 100%">
      <el-table-column  label="" width="50">
          <template slot-scope="scope">
          <el-checkbox v-model="scope.row.selected"></el-checkbox>
          </template>
      </el-table-column>
      <el-table-column prop="goods_info.goods_name" label="名称" width="400">
      </el-table-column>

      <el-table-column prop="goods_info.goods_price" label="价格" width="100">
      </el-table-column>
         <el-table-column  label="数量" width="220">
            <template slot-scope="scope" >
                <!-- <div :setNum="setNum(scope.$index, scope.row)"> -->
                  <div>
            <!-- <el-input-number v-model="num" @change="handleChange()" :min="1" :max="9999" label="描述文字"></el-input-number> -->
                <el-input-number v-model="scope.row.number" @change="(value)=>handleChange(value,scope)" :min="1" :max="9999" label="描述文字"></el-input-number> 
                
                </div>
            </template>
      </el-table-column>

      <!-- <el-table-column prop="number" label="数量" width="80">

      </el-table-column> -->
      
      <el-table-column prop="" label="小计" width="80" >
        
         <template slot-scope="scope" >
           <!-- <div :cacuPrice="cacuPrice(scope.$index, scope.row)"> -->
             <div :fistXiaoji="fistXiaoji(scope)">
             {{xiaoJi[scope.row.id]}}
           </div>
          </template>
      </el-table-column>

      
     
      <el-table-column label="图片" width="100" row-class-name='ss'>
        <template slot-scope="scope">
          <el-image
            style="width: 80px; height: 80px"
            :src="api + scope.row.goods_info.goods_img"
          ></el-image>
        </template>
      </el-table-column> 

      

     <el-table-column align="left" label="操作" width="70"> 
        <template slot-scope="scope">
       
        
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除
          </el-button>
        </template>
      </el-table-column>  
    </el-table>

    <!-- <el-pagination background layout="prev, pager, next" :total="totalCount" @current-change="changePage">
    </el-pagination> -->
    <div class="pa">
     <Pagination :total="getShopCartInfo.total" :pageSize="6" @changePnum='changePnum'/>
    </div>
  </div>
  </div>
</template>

<script>

import { mapGetters } from "vuex";
import Pagination from "@/pages/admin/Pagination"
import {getID} from "@/utils/token"
export default {
  data() {
    return {
      // tableData: [],
      api: "http://localhost:3000/",
      //图片数据
      fits: "fill",

      //图片数据 end
      totalCount: 100, //一共有多少条信息
      
      urla: 1,
      num: 1,
      data:[],
      xiaoJi:[],
      
    };
  },
  mounted() {
    //获取数据
    this.getdata();
    
    
  },
  methods: {
    async getdata(pageNum=1, pageSize=6) {

      const uid=getID()
      const user_id=parseInt(uid)
      
      await this.$store.dispatch("getAddShopCart", {pageNum,pageSize,user_id});
        
       
     
    },
   
    // handleChange(value) {
    //     console.log(value);
    //   },
     changePnum(val){
       
        this.getdata(val,6)

    },
   
    handleChange(value,scope){

     
          const price=parseInt(scope.row.goods_info.goods_price)
         
          this.xiaoJi[scope.row.id]=price*value
          
          
          this.$store.dispatch('updateShopCart',{number:value,id:scope.row.id,selected:scope.row.selected})
          
          
    },
    
  //初始化小计
   fistXiaoji(scope){
      const price=parseInt(scope.row.goods_info.goods_price)
      const number=scope.row.number
      this.xiaoJi[scope.row.id]=price*number
   },
  //购物车单个删除
 async handleDelete(index,row){
      const id=row.id
      const ids=[]
      ids.push(id)
      
     await this.$store.dispatch("singeDeleSCL",ids)
    //  await this.getdata()
  },
    
    
  },
  computed: {
    //mapGetters里面的写法：传递的数组，因为getters计算是没有划分模块【home,search】
    // ...mapGetters(["SpListInfo"]),
    ...mapGetters(["getShopCartList","getShopCartListTotal","getShopCartInfo"]),
    
  },
  components:{
      Pagination,
  }

};
</script>

<style lang='less' scoped>

.pa {


  margin-top:30px;
  margin-left:454px
  // transform: translateX(-50%);
  
}
.ss{
   margin-right:105px;
}


</style>
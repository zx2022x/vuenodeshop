<template>
  <div>
    <!-- <el-button :plain="true" @click="open2">成功</el-button>

    <el-button :plain="true" @click="open4">错误</el-button> -->
    <!-- <el-table :data="SpListInfo.list" stripe style="width: 100%"> -->
    <el-table :data="getRuGoodsList" stripe style="width: 100%">
      <el-table-column prop="goods_name" label="名称" width="180">
      </el-table-column>

      <el-table-column prop="goods_price" label="价格" width="100">
      </el-table-column>
      <el-table-column prop="goods_num" label="数量" width="80">
      </el-table-column>
      <el-table-column  label="类目" width="80">
         <template slot-scope="scope">
          <!-- <div :handleFm="handleFm(scope.$index, scope.row)"> -->
            <span>{{changeValue(scope.row.goods_fm)}}</span>
          <!-- </div> -->
        </template>
      </el-table-column>
      <el-table-column prop="goods_detail" label="详细信息" width="350">
      </el-table-column>

      <!-- 图片框 start -->
      
        <el-table-column  label="图片" width="150">
          <template slot-scope="scope">
            <el-image style="width: 60px; height: 60px" :src="(api+scope.row.goods_img)"></el-image>
            
          </template>
       
         </el-table-column> 
      <!-- 图片框 start -->

      
    <el-table-column align="left" label="操作" width="100">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="handleSj(scope.$index, scope.row)"
            >上架</el-button
          >
        </template>
      </el-table-column> 
    </el-table>
     <div class="pa">
    <Pagination :total="getRuGoodsInfo" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Pagination from "@/pages/admin/Pagination"
export default {

  data() {
    return {
      // tableData: [],
      api: "http://localhost:3000/",
      //图片数据
      // fits: "fill",

     

      //图片数据 end
      totalCount: 100, //一共有多少条信息
     
      urla: 1,
      getUnvali: [],
    };
  },
  mounted() {
    //获取数据
    this.getdata();
   
  },
  methods: {
    async getdata(pageNum=1,pageSize=6){
      try {
       

        const message = await this.$store.dispatch("getRuGoodsList", {
          pageNum,
          pageSize,
        });
        this.$message({
          message: message,
          type: "success",
        });
        
      } catch (error) {

        this.$message.error(error.message);
      
      }
    },
    async handleSj(index,row){
        try {
        const message=await this.$store.dispatch('sangJia',row.id)
          this.getdata()
          this.$message({
          message: message,
          type: "success",
        });
        } catch (error) {
           this.$message.error(error.message);
        }
        

    },
  
     changeValue(row){
      let a ='dmd'
        switch(row){
           case 1:
            a="水果";
             break;
            case 2:
              a="肉类";
              break;
            case 3:
              a="粗粮";

              break;
             
            

        }
        return a

    },
    
  },
  computed: {
    //mapGetters里面的写法：传递的数组，因为getters计算是没有划分模块【home,search】
    // ...mapGetters(["SpListInfo"]),
    ...mapGetters(["getRuGoodsList","getRuGoodsInfo"]),
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

</style>
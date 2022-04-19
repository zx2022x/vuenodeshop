<template>
  <div>
    <!-- <el-button :plain="true" @click="open2">成功</el-button>

    <el-button :plain="true" @click="open4">错误</el-button> -->
    <!-- <el-table :data="SpListInfo.list" stripe style="width: 100%"> -->
    <el-table :data="getOrderInfo.list" stripe style="width: 100%">
       <el-table-column prop="id" label="用户ID" width="100">
      </el-table-column>
       <el-table-column prop="order_number" label="订单号" width="80">
         
      </el-table-column>
      <el-table-column prop="goods_name" label="名称" width="180">
      </el-table-column>

      <el-table-column prop="goods_price" label="总价" width="100">
      </el-table-column>
      <el-table-column prop="goods_num" label="数量" width="80">
      </el-table-column>
      <el-table-column prop="address.consignee" label="收件人" width="80">
      </el-table-column>
      <el-table-column prop="address.phone" label="电话号码" width="80">
      </el-table-column>
      <el-table-column prop="address.address" label="地址" width="80">
      </el-table-column>
     
      <el-table-column prop="createdAt" label="下单时间" width="350">
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
            >取消订单</el-button
          >
        </template>
      </el-table-column> 
    </el-table>
     <div class="pa">
    <Pagination :total="getOrderTotal" target="getOrderList" @changePnum='changePnum' :pageSize="6"/>
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
   
       

        const message = await this.$store.dispatch("getOrderList");
        
     
    },
    async handleSj(index,row){
        try {
        const message=await this.$store.dispatch('sangJia',row.id)
          this.getdata()
        //   this.$message({
        //   message: message,
        //   type: "success",
        // });
        } catch (error) {
          //  this.$message.error(error.message);
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

    changePnum(val){
       
        this.getdata(val,6)
    }
    
  },
  computed: {
    //mapGetters里面的写法：传递的数组，因为getters计算是没有划分模块【home,search】
    // ...mapGetters(["SpListInfo"]),
    ...mapGetters(["getOrderInfo","getOrderTotal"]),
  },
  components:{
     Pagination,
  }
};
</script>

<style lang='less' scoped>
 .pa {


  margin-top:17px;
  margin-left:454px
  // transform: translateX(-50%);
  
}

</style>
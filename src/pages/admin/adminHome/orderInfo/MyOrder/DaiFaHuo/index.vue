<template>
  <div >
  
         <el-table :data="getOrderInfo.list" stripe style="width: 100%">
       <!-- <el-table-column prop="user_id" label="用户ID" width="70">
      </el-table-column> -->
       <el-table-column prop="order_number" label="订单号" width="120">
         
      </el-table-column>
      <el-table-column prop="goods_name" label="名称" width="180">
      </el-table-column>

       <el-table-column prop="goods_num" label="数量" width="80">
      </el-table-column>


      <el-table-column prop="total" label="总价" width="100">
      </el-table-column>
       <!-- <el-table-column prop="status" label="status" width="100">
      </el-table-column> -->
     
      <el-table-column prop="address.consignee" label="收件人" width="80">
      </el-table-column>
      <el-table-column prop="address.phone" label="电话号码" width="120">
      </el-table-column>
      <el-table-column prop="address.address" label="地址" width="150">
       
      </el-table-column>
     
      <el-table-column prop="createdAt" label="下单时间" width="180">
           <template slot-scope="scope">
          <span>{{ handelUaTime(scope.$index, scope.row) }}</span>
        </template>
      </el-table-column>

      <!-- 图片框 start -->
      
        <el-table-column  label="图片" width="150">
          <template slot-scope="scope">
            <el-image style="width: 60px; height: 60px" :src="(api+scope.row.goods_img)"></el-image>
            
          </template>
       
         </el-table-column> 
      <!-- 图片框 start -->

      
    <el-table-column align="left" label="操作" width="100" v-if="mark==2 ||mark==3|| mark==4 ? false:true">
        <template slot-scope="scope">
          <el-button
            v-if="mark==0 ? true:false"
            size="mini"
            type="success"
            @click="handleSj(scope.$index, scope.row)"
            >发货</el-button
          >
           <el-button
            v-if="mark==2 ? true:false"
            size="mini"
            type="success"
            @click="hasReeied(scope.$index, scope.row)"
            >收到货物</el-button
          >
        </template>
      </el-table-column> 
    </el-table>
     <div class="pa">
    <Pagination :total="getOrderTotal" target="getOrderList"  @changePnum='changePnum' :pageSize="6"/>
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
      // fits: "fill",

     

      //图片数据 end
      totalCount: 100, //一共有多少条信息
     
      urla: 1,
      getUnvali: [],
      status:0,
    };
  },
  props:['mark'],
  mounted() {
    
  },
  methods: {
    async getdata(pageNum=1,pageSize=6,mark){
       const user_id=getID()

       

        const message = await this.$store.dispatch("getOrderList",{pageNum,pageSize,status:mark,user_id});
        
     
    },
    //取消订单
    async handleSj(index,row){
       
       console.log("id"+row.id)
       await this.$store.dispatch('updateStatus',{id:row.id,status:2})
       await this.getdata(1,6,row.status)
       
       
        

    },
     getMarkOrderInfo(mark){
        const list1=this.getOrderInfo.list
        const list=Array.from(list1)
        const total=0
       
        
        // console.log("mark")
        // console.log(mark)
        const fenedList=[]
        console.log(mark)
        list.forEach(item=>{
           if(item.status==mark){
             //已发货
              total++;
              fenedList.push(item)

           }
          

        })
        
       
        return {
            total,
            fenedList
        }

    },
    //收到货物
    async hasReeied(index,row){
       await this.$store.dispatch('updateStatus',{id:row.id,status:3})
       await this.getdata(1,6,row.status)
    },
  

   async changePnum(val){
    //  console.log(this.mark)
        // const status=this.props.mark
        // console.log("status"+status)
        const status=this.status
        
        await this.getdata(val,6,status)
    },
     //处理时间
    handelUaTime(index, row) {
      const { updatedAt } = row;
      const upTime = updatedAt.replace("T", " ").replace(".000Z", "");

      return upTime;
    },
    

    
  },
  computed: {
    //mapGetters里面的写法：传递的数组，因为getters计算是没有划分模块【home,search】
    // ...mapGetters(["SpListInfo"]),
    ...mapGetters(["getOrderInfo","getOrderTotal"]),
    
   
 
  },
  components:{
     Pagination,
  },
  watch:{
    'mark':{
      async handler(mark,oV){
       this.status=mark
      
       await this.getdata(1,6,mark)
      
       
      },
       deep:true,
      immediate:true
     
    }
  }
};
</script>

<style lang='less' scoped>
 .pa {


  margin-top:17px;
  margin-left:450px
  // transform: translateX(-50%);
  
}

</style>
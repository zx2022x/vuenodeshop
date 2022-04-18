<template>
  <div class="w">
    <div class="af">
      <!-- <el-button :plain="true" @click="open2">成功</el-button>

    <el-button :plain="true" @click="open4">错误</el-button> -->
      <!-- <el-table :data="SpListInfo.list" stripe style="width: 100%"> -->
      <el-table :data="getShopCartInfo.list" stripe style="width: 100%">
        <el-table-column label="" width="50">
          <template slot-scope="scope">
            <el-checkbox v-model="scope.row.selected" @change="(value)=>updateChecked(value,scope.row.id)"></el-checkbox>
          </template>
        </el-table-column>
        <el-table-column prop="goods_info.goods_name" label="名称" width="400">
        </el-table-column>

        <el-table-column prop="goods_info.goods_price" label="价格" width="100">
        </el-table-column>
        <el-table-column label="数量" width="220">
          <template slot-scope="scope">
            <!-- <div :setNum="setNum(scope.$index, scope.row)"> -->
            <div>
              <!-- <el-input-number v-model="num" @change="handleChange()" :min="1" :max="9999" label="描述文字"></el-input-number> -->
              <el-input-number
                v-model="scope.row.number"
                @change="(value) => handleChange(value, scope)"
                :min="1"
                :max="9999"
                label="描述文字"
              ></el-input-number>
            </div>
          </template>
        </el-table-column>

        <!-- <el-table-column prop="number" label="数量" width="80">

      </el-table-column> -->

        <el-table-column prop="" label="小计" width="80">
          <template slot-scope="scope">
            <!-- <div :cacuPrice="cacuPrice(scope.$index, scope.row)"> -->
            <div :fistXiaoji="fistXiaoji(scope)">
              {{ xiaoJi[scope.row.id] }}
            </div>
          </template>
        </el-table-column>

        <el-table-column label="图片" width="100" row-class-name="ss">
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
      <div class="finalCart" :setCheck="setCheck">
        <el-checkbox
          id="checkBox"
          v-model="allIs_default"
          @change="setCheckAll()"
          
        ></el-checkbox>
        <!-- :checked="setCheck && getShopCartList.length > 0" -->
        <!-- :setCheck="setCheck(getShopCartInfo.list)" -->

        
        <span>全选</span> <span class="hov" @click="unSetCheckAll">全不选</span>
        <span class="hov">删除选中的商品</span
        ><span class="hov">清空购物车</span>
        <span id="choseItem">已选择<span>1</span>件商品</span>
        <span id="zongJia">总价:<span>¥500</span></span>
        <div class="jieSuan">结算</div>
      </div>
      <div class="pa">
        <Pagination
          :total="getShopCartInfo.total"
          :pageSize="6"
          @changePnum="changePnum"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Pagination from "@/pages/admin/Pagination";
import { getID } from "@/utils/token";
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
      data: [],
      xiaoJi: [],
      allIs_default: false,
      cartList:[]
    }
  },
  mounted() {
    //获取数据
    this.getdata();
    // this.all()
  },
  methods: {
    async getdata(pageNum = 1, pageSize = 6) {
      const uid = getID();
      const user_id = parseInt(uid);

      await this.$store.dispatch("getAddShopCart", {
        pageNum,
        pageSize,
        user_id,
      });
    },

    // handleChange(value) {
    //     console.log(value);
    //   },
    changePnum(val) {
      this.getdata(val, 6);
    },

    handleChange(value, scope) {
      const price = parseInt(scope.row.goods_info.goods_price);

      this.xiaoJi[scope.row.id] = price * value;

      this.$store.dispatch("updateShopCart", {
        number: value,
        id: scope.row.id,
        selected: scope.row.selected,
      });
    },

    //初始化小计
    fistXiaoji(scope) {
      const price = parseInt(scope.row.goods_info.goods_price);
      const number = scope.row.number;
      this.xiaoJi[scope.row.id] = price * number;
    },
    //购物车单个删除
    async handleDelete(index, row) {
      const id = row.id;
      const ids = [];
      ids.push(id);

      await this.$store.dispatch("singeDeleSCL", ids);
      //  await this.getdata()
    },
    //更新选中状态
     async updateChecked(value,id){
        await this.$store.dispatch("updateChecked",{selected:value,id})
    },
    //设置全选
    async setCheckAll(){
          if(!this.allIs_default){
            this.allIs_default=!this.allIs_default
          }
      // console.log("skmsk"+this.allIs_default)
          if(this.allIs_default){
          await this.$store.dispatch("setCheckAll")
          await this.getdata()
          }
       
    },
    //全不选
    async unSetCheckAll(){
        await this.$store.dispatch("unSetCheckAll")
        await this.getdata()
    }
   
  },
  computed: {
    //mapGetters里面的写法：传递的数组，因为getters计算是没有划分模块【home,search】
    // ...mapGetters(["SpListInfo"]),
    ...mapGetters([
      "getShopCartList",
      "getShopCartListTotal",
      "getShopCartInfo",
    ]),
    getShopCartL() {
      return this.getShopCartList;
    },
    //查看是否是全选
    setCheck() {
     
     
      const list1=this.getShopCartList
     const list =Array.from(list1)
     if(!list){
       this.allIs_default=false
     }else{
        this.allIs_default = list.every((item)=>item.selected==1)
     }
      
   

    //    list.forEach((item) => {
    //     if (!item.is_default) {
    //        this.allIs_default=false
    //     }else{
    //        this.allIs_default=true
    //     }

    //   });
    //    if(index==-1){
    //         this.allIs_default=true
    //    }else{
    //         this.allIs_default=false
    //    }
    },
  },
  components: {
    Pagination,
  },
  // watch:{
  //    "getShopCartL":{
  //      handler(nV,oV){
  //         this.cartList=nV
  //      },

  //    },
  //    "getShopCartInfo":{
  //       handler(nV,oV){
  //         // console.log("信息")
  //         //  console.log(nV)

  //       }
  //    }
  // }
};
</script>

<style lang='less' scoped>
.w{
  width: 1058px;
}
.pa {


  margin-top:30px;
  margin-left:454px

  // transform: translateX(-50%);
  
}
.ss{
   margin-right:105px;
}
.finalCart{
   position:relative;
   margin-top:20px;
   height: 116px;
   width: 100%;
   background-color:#ffffff;
   border:1px solid #ebeef5;
   span{
   line-height:116px;
   margin:0 5px;
   font-size:14px;
   color:#606266;

}
 .hov{
    &:hover{
      color:#e64347;
    }
 }

   #checkBox{
     margin-left:8px;
   }
   .jieSuan{
     position:absolute;
     top:0;
     right:0;
     height: 116px;
     width: 100px;
     color:#ffffff;
     font-size:21px;
     line-height:116px;
     padding-left:29px;
     background-color: #e64347;
     
   }
   #choseItem{
      position:absolute;
      right:256px;
      span{
        font-family:bold;
        color:#e64347;
      }
   }
   #zongJia{
     position:absolute;
     right:142px;

     span{
        font-family:bold;
        color:#e64347;
      }
   }
}




</style>
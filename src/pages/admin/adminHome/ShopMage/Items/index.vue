<template>
  <div>
    <!-- <el-button :plain="true" @click="open2">成功</el-button>

    <el-button :plain="true" @click="open4">错误</el-button> -->
    <!-- <el-table :data="SpListInfo.list" stripe style="width: 100%"> -->
    <el-table :data="SpListInfo.list" stripe style="width: 100%">
      <el-table-column prop="goods_name" label="名称" width="180">
      </el-table-column>

      <el-table-column prop="goods_price" label="价格" width="100">
      </el-table-column>
      <el-table-column prop="goods_num" label="数量" width="80">
      </el-table-column>
      
      <el-table-column label="类目" width="80">
        <template slot-scope="scope">
          <!-- <div :handleFm="handleFm(scope.$index, scope.row)"> -->
            <span>{{changeValue(scope.row.goods_fm)}}</span>
          <!-- </div> -->
        </template>
      </el-table-column>
      <el-table-column prop="goods_detail" label="详细信息" width="350">
      </el-table-column>

      <el-table-column label="图片" width="80">
        <template slot-scope="scope">
          <el-image
            style="width: 60px; height: 60px"
            :src="api + scope.row.goods_img"
          ></el-image>
        </template>
      </el-table-column>

      <el-table-column align="left" label="操作" width="400">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="handleEdit(scope.$index, scope.row)"
            >编辑
          </el-button>

          <el-button
            size="mini"
            type="warning"
            @click="handleXiaJia(scope.$index, scope.row)"
            >下架
          </el-button>

          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination background layout="prev, pager, next" :total="totalCount">
    </el-pagination>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      // tableData: [],
      api: "http://localhost:3000/",
      //图片数据
      fits: "fill",

      //图片数据 end
      totalCount: 100, //一共有多少条信息
      pageNum: 1,
      pageSize: 7,
      urla: 1,
    };
  },
  mounted() {
    //获取数据
    this.getdata();
  },
  methods: {
    async getdata() {
      try {
        const { pageNum, pageSize } = this;

        const message = await this.$store.dispatch("getSpListInfo", {
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
    handleEdit(index, row) {
      console.log(row);
      const { goods_name, goods_price, goods_num, goods_img, goods_fm } = row;
      const pm = { goods_name, goods_price, goods_num, goods_img, goods_fm };

      console.log(pm);
      this.$router.push({ name: "edititem", params: pm });
      console.log(row);
    },
    async handleDelete(index, row) {
      try {
        const id = row.id;
        const message = await this.$store.dispatch("SpDelete", id);
        this.$message({
          message: message,
          type: "success",
        });
         this.getdata();
      } catch (error) {
        this.$message.error(error.message);
      }
    },
    async handleXiaJia(index, row) {
      try {
        const id = row.id;
        const message = await this.$store.dispatch("spXiaJia", id);

        this.$message({
          message: message,
          type: "success",
        });
        this.getdata();
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
    ...mapGetters(["SpListInfo"]),
    // tableData:SpListInfo.list,
    // tableData:SpListInfo.list
    //  SpListInfo(){
    //     const urla=SpListInfo.list.goods_img
    //     const
    //  }
  },
};
</script>

<style lang='less' scoped>
.el-pagination {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 20px;
}
</style>
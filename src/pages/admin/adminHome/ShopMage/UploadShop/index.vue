<template>
  <div class="uploadShop">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="商品名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="商品类别">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="水果" value="1"></el-option>
          <el-option label="肉类" value="2"></el-option>
          <el-option label="粗粮" value="3"></el-option>
        </el-select>
      </el-form-item>
      <!-- 数量框 -->
      <div class="numInp">
        <span class="wont">价格</span
        ><el-input-number
          v-model="price"
          :min="1"
          :max="1000"
          label="描述文字"
        ></el-input-number>
      </div>
      <div class="numInp">
        <span class="wont">数量</span>
        <el-input-number
          v-model="num"
          :min="1"
          :max="100000"
          label="描述文字"
        ></el-input-number>
      </div>

      <el-form-item label="详细信息">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <!-- 商品图片上传 start -->
       <span class="wont wopload">上传图片</span>
       <div class="upld">
      <el-upload
        action="http://localhost:3000/goods/upload"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible" class="tcon">
        <img width="100%" :src="dialogImageUrl" alt="" />
      </el-dialog>
      </div>
  <!-- 商品图片上传 end-->
      <el-form-item>
        <el-button type="primary" @click="onSubmit">完成</el-button>
        
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: "",
      num: "",

      form: {
        name: "",
        region: "", //复选框

        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      //文件上传参数 start
      dialogImageUrl: "",
      dialogVisible: false,
      //文件上传参数 end
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    //文件上传方法 start
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      console.log(file)
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;

    },
    //文件上传方法 end
  },
};
</script>
<style scoped lang="less">
.uploadShop {
  .wont{
      font-size: 14px;
      margin-right: 9px;
      font-family: "Helvetica Neue", Helvetica, "PingFang SC",
        "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
      font-weight: normal;
      color: #606266;
    }
  .priceInput {
    width: 75px;
  }

  .numInp {
    margin: 23px 0 23px 10px;
    .wont;
    .el-input-number{
      margin-left:34px;
    }
   
  }
  .wopload{
      display: block;
      margin:5px 3px 13px 10px;
  }
 .el-icon-plus{
   margin:50px 50px 50px 50px ;
 }
  .upld{
    margin:15px 0 20px 78px;
  }
  

}
</style>
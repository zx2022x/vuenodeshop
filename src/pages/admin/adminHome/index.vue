<template>
  <div class="adminHome">
    <header>后台管理系统</header>
    <div>
      <el-row class="tac">
       
        <el-col :span="12">
         
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
           
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">商品管理</span>
              
            </el-menu-item>
              <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">订单管理</span>
            </el-menu-item>
              <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">用户管理</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },

  mounted() {
    this.$router.push("/adminHome");
  },
  
};
</script>

<style lang='less' scoped>
.adminHome {
  header {
    padding-left: 10px;
    color:white;
    height: 46px;
    background-color: #545c64;
    line-height:46px;
  }
  .tac{
    width: 400px;
  }
}
</style>
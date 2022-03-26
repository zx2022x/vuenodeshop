<template>
  <div class="adminHome">
    <header>后台管理系统</header>
    <div>
      <el-row class="tac">
        <el-col :span="12">
          <!-- :default-active="$route.path"  绑定路由-->
          <el-menu
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            router
          >
           
            <el-submenu class="eit" index='f-2'>
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>商品管理</span>
              </template>
              <el-menu-item-group>
               
                <el-menu-item index="/uploadshop">商品上传</el-menu-item>
                <el-menu-item index="/items">商品列表</el-menu-item>
                <el-menu-item index="/validitem">商品上架</el-menu-item>
              </el-menu-item-group>
              
             
            </el-submenu>

            <el-menu-item index="/orderInfo" class="eit">
              <i class="el-icon-menu"></i>
              <span slot="title">订单管理</span>
            </el-menu-item>
            <el-menu-item index="3" class="eit">
              <i class="el-icon-menu"></i>
              <span slot="title">用户管理</span>
            </el-menu-item>
            <!-- 补全缺陷 -->
            <el-menu-item index="4" class="eit last-eit">
              <span slot="title"></span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>

       <el-main class="rightPanel">
         <!-- 路由的出口，子组件显示的地方，因为要在主页面显示，所以要用子路由 -->

        <router-view></router-view>
       </el-main>
    </div>
  </div>
</template>
<script>
//订单信息
import OrderInfo from "@/pages/admin/adminHome/orderInfo";
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  components: {
    OrderInfo,
  },

  // mounted() {
  //   this.$router.push("/adminHome");
  // },
};
</script>

<style lang='less' scoped>
.adminHome {
  header {
    padding-left: 10px;
    color: white;
    height: 46px;
    background-color: #545c64;
    line-height: 46px;
  }
  .tac {
    float: left;
    width: 200px;
    .eit {
      width: 200px;
    }
    .last-eit {
      height: 539px;
    }
  }
  .rightPanel {
    float: left;
  }
}
</style>
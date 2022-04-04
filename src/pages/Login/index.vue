<template>
  <div class="login">
    <div class="leftbord"></div>
    <div class="rightBord">
      <div class="centerBo">
        <el-tabs v-model="activeName" @tab-click="handleClick" class="fl">
          <el-tab-pane label="登录" name="first" class="form1">
            <LoginInner />
          </el-tab-pane>
          <el-tab-pane label="注册" name="second" class="form2">
            <Resigster />
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import Resigster from "@/pages/Resigster";
import LoginInner from "@/pages/Login/LoginInner";
export default {
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    changeCompo(){
         const mark=this.$route.params.mark
         if(mark==1)
         {
           this.activeName= "first"
         }
         else{
            this.activeName= "second"
         }
    }
  },

  mounted() {
    this.$bus.$on("goLoginIn", () => {
      this.activeName = "first";
    });
    this.changeCompo();
  },
  // watch: {
  //   '$route.params':{
         
  //       handler(newValue,oldValue){
  //         console.log('新路由地址')
  //         console.log(newValue)
  //       }
  //   }
  // },
  components: {
    LoginInner,
    Resigster,
  },
};
</script>

<style lang="less" scoped>
.login {
  position: absolute;
  width: 100%;
  height: 100%;

  .leftbord {
    float: left;
    height: 100%;
    width: 470px;
    background: url("@/assets/loginbg.png") no-repeat;
  }
  .rightBord {
    margin-left: 471px;
    height: 100%;

    padding-top: 105px;
    background-color: #ffffff;
    .centerBo {
      margin-left: 50%;
      transform: translateX(-50%);
      width: 412px;
      height: 524px;
      padding: 45px 45px 0 45px;
      background-color: #f9f9f9;
      .form1 {
        margin-top: 90px;
        margin-left: -30px;
      }
      .form2 {
        margin-top:30px;
        margin-left: -30px;
      }
    }
  }
}
</style>
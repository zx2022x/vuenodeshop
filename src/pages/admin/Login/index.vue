<template>
  <div class="aa">
    <div class="adminLogin">
      <!-- <h1>登录</h1>
      <input type="text" v-model="user_name"/> <br />
      <input type="password" v-model="password"/><br />
      <button @click="adminlogin">登录</button> -->
      <h1>登录</h1>
      <el-input
        type="text"
        placeholder="请输入账号"
        v-model="user_name"
        maxlength="10"
        show-word-limit
         prefix-icon="el-icon-user"
      >
     
      </el-input>
      <el-input placeholder="请输入密码" v-model="password"  maxlength="10" show-password prefix-icon="el-icon-coordinate"></el-input>
       <!-- <el-button type="primary" plain @click="adminlogi">主要按钮</el-button> -->
         <el-button type="primary" round  @click="adminlogin">主要按钮</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "adminLogin",

  data() {
    return {
      user_name:"",
      password: "",
    };
  },
  methods: {
    async adminlogin() {
      try {
        const { user_name, password } = this; //

        user_name &&
          password &&
          (await this.$store.dispatch("adminUserLogin", {
            user_name,
            password,
          }));

        this.$router.push("/adminHome");
        // this.$store.dipatch('')
      } catch (error) {
        alert("管理员登录" + error.message);
      }
    },
  },
};
</script >

<style lang='less' scoped>
.aa {
  background-color: #2b3a4b;
  height: 100%;
  width: 100%;
  position: fixed;
  color: rgb(247, 247, 247);

  .adminLogin {
    width: 364px;
    height: 323px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    // background-color: #2e4156;
    
    .el-input{
       margin: 11px 0;
    }
    .el-button {
      text-align: center;
      
      width: 284px;
      height: 51px;
      background-color: #379bff;
      bottom: 0;
      margin:5px 0 0 35px;
      
      color: white;
    }
    h1 {
      font-size: 33px;
      text-align: center;
    }
  }
}
</style>
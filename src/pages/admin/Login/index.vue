<template>
  <div class="aa">
    <div class="adminLogin">
      <h1>登录</h1>
      <input type="text" v-model="user_name"/> <br />
      <input type="password" v-model="password"/><br />
      <button @click="adminlogin">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "adminLogin",
  
  data(){
     return{
         user_name:"",
         password:"",
     }
  },
  methods:{
    
    async adminlogin(){
      try {
        const{user_name,password}=this//
        
        user_name&&password&&(await this.$store.dispatch('adminUserLogin',{user_name,password}))
        
        this.$router.push('/adminHome')
          // this.$store.dipatch('')
      } catch (error) {
        
         alert("前台"+error.message)
      }
     
    }
  }

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
    width: 436px;
    height: 323px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    input {
      text-align: center;
      
      margin: 20px 0;
      width: 436px;
      height: 51px;
      
    }
    button {
      text-align: center;
      position: absolute;
      width: 436px;
      height: 51px;
      background-color: #379bff;
      bottom: 0;
      border-radius: 30px;
      color: white;
    }
    h1 {
      font-size: 33px;
      text-align: center;
    }
  }
}
</style>
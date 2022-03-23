<template>
  <div class="aa">
    <div class="adminLogin">
      <h1>登录</h1>
      <input type="text" /> <br />
      <input type="password" /><br />
      <button>登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "adminLogin",
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
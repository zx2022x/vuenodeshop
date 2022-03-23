<template>
  <div class="aa">
    <div class="adminLogin">
      <h1>登录</h1>
     <input type="text" /> 
     <input type="password" />
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
  background-color: black;
  height: 100%;
  width: 100%;
  position: fixed;
  color: rgb(247, 247, 247);
  .adminLogin {
    width: 100px;
    height: 100px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    h1 {
      font-size: 18px;
    }
  }
}
</style>
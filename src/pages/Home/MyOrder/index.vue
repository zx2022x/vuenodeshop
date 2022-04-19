<template>
  <div class="myOrder">
    <div class="w">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="待发货" name="first">

        </el-tab-pane>
        <el-tab-pane label="代收货" name="second">

        </el-tab-pane>
        <el-tab-pane label="已取消订单" name="third">
          
        </el-tab-pane>
       
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name:'order',
  data() {
    return {
      activeName: 'first',
    }
  },
  methods:{
    handleClick(tab, event) {
        console.log(tab, event);
      }
  }



};
</script>

<style scoped leng="less">
.w {
  width: 1290px;

  margin: 0 auto;
}
</style>
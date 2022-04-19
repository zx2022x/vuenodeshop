<template>
  <div class="myOrder">
    <div class="w">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="待发货" name="first">
          <DaiFaHuo />
        </el-tab-pane>
        <el-tab-pane label="代收货" name="second">
          <DaiFaHuo v-if="isOpen1" />
        </el-tab-pane>
        <el-tab-pane label="已取消订单" name="third">
          <DaiFaHuo v-if="isOpen2" />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import DaiFaHuo from "@/pages/Home/MyOrder/DaiFaHuo";
export default {
  name: "order",
  data() {
    return {
      activeName: "first",
      isOpen1: false,
      isOpen2: false,
    };
  },
  methods: {
    handleClick(tab, event) {},
  },
  components: {
    DaiFaHuo,
  },
  watch: {
    activeName: {
      handler(nV, oV) {
        if (nV.search("second")) {
          this.isOpen1 = true;
        }
        if (nV.search("third")) {
          this.isOpen2 = true;
        }
      },
    },
  },
};
</script>

<style scoped leng="less">
/* .w {
  width: 1290px;

  margin: 0 auto;
} */
</style>
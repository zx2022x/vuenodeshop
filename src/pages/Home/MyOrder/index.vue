<template>
  <div class="myOrder">
    <div class="w">
      <el-tabs v-model="activeName" @tab-click="handleClick" class="tabPlane">
        <el-tab-pane label="待发货" name="first" class="tabPlane">
          <div class="tab">
          <DaiFaHuo />
          </div>
          

          

        </el-tab-pane>
        <el-tab-pane label="代收货" name="second">
          <div class="tab">
          <DaiFaHuo v-if="isOpen1" />
          </div>
        </el-tab-pane>
        <el-tab-pane label="已取消订单" name="third">
           <div class="tab">
          <DaiFaHuo v-if="isOpen2" />
           </div>
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
         
        if (!nV.search("second")) {
         
          this.isOpen1 = true;
        }
        if (!nV.search("third")) {
          this.isOpen2 = true;
        }
      },
    },
  },
};
</script>

<style scoped leng="less">
        /* >>>.el-tabs__item:nth-child(1){
          padding-left:200px;
        } */
        >>>.el-tabs__item{
           padding: 0 200px;
        }
        >>>#tab-first{
          margin-left:200px;
        }
        >>>.el-tabs__active-bar{
           margin-left:200px;
        }
/* .w {
  width: 1290px;

  margin: 0 auto;
} */
.tab{
    margin-left:112px;
}
/* .tabPlane{
   margin-left:200px;
} */
</style>
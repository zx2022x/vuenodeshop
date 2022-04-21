<template>
  <div class="myOrder">
    <div>
      <el-tabs v-model="activeName" @tab-click="handleClick" class="tabPlane" >
        <el-tab-pane label="待发货" name="first" class="tabPlane" >
          <div class="tab">
          <DaiFaHuo :mark="mark"/>
          </div>
          

          

        </el-tab-pane>
        <el-tab-pane label="代收货" name="second">
          <div class="tab">
            <keep-alive>
          <DaiFaHuo1 v-if="isOpen1" :mark="mark"/>
           </keep-alive>
          </div>
        </el-tab-pane>
      
          <el-tab-pane label="已完成订单" name="four" :style="mark==3 || mark==4 ? styleObj:'w'">
           <div class="tab">
             <keep-alive>
          <DaiFaHuo3 v-if="isOpen3" :mark="mark" />
           </keep-alive>
           </div>
        </el-tab-pane>

          <el-tab-pane label="已取消订单" name="third" :style="mark==3 || mark==4 ? styleObj:'w'">
           <div class="tab">
             <keep-alive>
          <DaiFaHuo2 v-if="isOpen2"  :mark="mark"/>
          </keep-alive>
           </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import DaiFaHuo from "@/pages/Home/MyOrder/DaiFaHuo";
import DaiFaHuo1 from "@/pages/Home/MyOrder/DaiFaHuo";
import DaiFaHuo2 from "@/pages/Home/MyOrder/DaiFaHuo";
import DaiFaHuo3 from "@/pages/Home/MyOrder/DaiFaHuo";
export default {
  name: "order",
  data() {
    return {
      activeName: "first",
      isOpen1: false,
      isOpen2: false,
      isOpen3: false,
      mark:0,
      styleObj:{
        'margin-left':'78px'
      }
    };
  },
  methods: {
    handleClick(tab, event) {},
    
  },
  components: {
    DaiFaHuo,
    DaiFaHuo1,
    DaiFaHuo2,
    DaiFaHuo3
  },
  watch: {
    activeName: {
      handler(nV, oV) {
         if (!nV.search("first")) {
         
         
          
          this.mark=0
        }
        if (!nV.search("second")) {
         
          this.isOpen1 = true;
          
          this.mark=2
        }
        if (!nV.search("third")) {
          this.isOpen2 = true;
          this.mark=4
        }
         if (!nV.search("four")) {
          this.isOpen3 = true;
          this.mark=3
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
          margin-left:70px;
        }
        /* 变化后的tab-first */

        >>>.el-tabs__active-bar{
           margin-left:70px;
        }
/* .w {
  width: 1200px;

  margin: 0 auto;
} */
.tab{
    margin-left:112px;
}
/* .tabPlane{
   margin-left:200px;
} */
</style>
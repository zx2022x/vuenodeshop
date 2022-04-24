<template>
<div>
  <div class="itemRightList" v-if="isShow[1]" @mouseenter="goRightBo(1)" @mouseleave="leave(1)">
    <ul v-for="(item,index) in getItemList1 " :key="item.id+'A1122'">
      <li @click="goDetail(item)">
        <el-image
          class="img"
          style="width: 100px; height: 100%"
          :src="api1+item.goods_img"
          fit="fit"
        ></el-image>
        <h1 >{{item.goods_name}}</h1>
        <!-- <div class="itemName">四川丑柑母本新鲜孕妇水果当季丑八怪青见耙耙柑整箱橘子包邮</div> -->
      </li>
     
    </ul>
  </div>

  <div class="itemRightList" v-if="isShow[2]" @mouseenter="goRightBo(2)" @mouseleave="leave(2)">
    <ul v-for="(item,index) in getItemList2 " :key="item.id+'A1122'">
      <li  @click="goDetail(item)">
        <el-image
          class="img"
          style="width: 100px; height: 100%"
          :src="api1+item.goods_img"
          fit="fit"
        ></el-image>
        <h1 >{{item.goods_name}}</h1>
        <!-- <div class="itemName">四川丑柑母本新鲜孕妇水果当季丑八怪青见耙耙柑整箱橘子包邮</div> -->
      </li>
     
    </ul>
  </div>
  
  <div class="itemRightList" v-if="isShow[3]" @mouseenter="goRightBo(3)" @mouseleave="leave(3)">
    <ul v-for="(item,index) in getItemList3 " :key="item.id+'A1122'">
      <li @click="goDetail(item)">
        <el-image
          class="img"
          style="width: 100px; height: 100%"
          :src="api1+item.goods_img"
          fit="fit"
        ></el-image>
        <h1 >{{item.goods_name}}</h1>
        <!-- <div class="itemName">四川丑柑母本新鲜孕妇水果当季丑八怪青见耙耙柑整箱橘子包邮</div> -->
      </li>
     
    </ul>
  </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  data() {
    return {
      api1: "http://localhost:3000/",
      mark:0,
      isShow:[],
      

    };
  },
  methods:{
      getMark(){
        this.$bus.$on("seen",(value)=>{
           
            // this.isShow[value]=true
            // console.log("value    "+value)
            //  console.log(this.isShow[value])
            //  console.log("1       "+this.isShow[1])
             this.$set(this.isShow, value, true)
            // this.getData(1,10,value)
           
      })
      
      
     
      },
      leaveMark(){
         this.$bus.$on("leave",(v2)=>{
           this.isShow[v2]=false
           console.log(this.isShow[v2])
           this.$set(this.isShow, v2, false)
         })
      },
       goRightBo(value){
    this.$set(this.isShow, value, true)
      // console.log("的kid授课教师"+value)
    },
    leave(v2){
      console.log("leave")
      this.$set(this.isShow, v2, false)
       console.log("leave"+this.isShow[v2])
    },
     goDetail(item) {
      this.$router.push({ path: "/itemdetail", query: item });
    },
   
  },

  mounted(){
       this.getMark()
       this.leaveMark()
  },
  computed:{
      ...mapGetters(['getItemList1','getItemList2','getItemList3'])
  }
};
</script>

<style lang='less' scoped>
.itemRightList {
  position: absolute;
  top: 162px;
  left: 406px;
  height: 433px;
  width: 741px;
  background-color: #ffffff;
  z-index: 999;
  padding: 20px 0 20px 20px;
  overflow: hidden;
  li {
    list-style: none;
    height: 63px;
    width: 220px;
    float: left;
    margin-right: 20px;
    margin-bottom: 20px;
  
    .img {
      float: left;
      margin-right: 5px;
    }
    h1 {
      float: left;
      display: block;
      font-size: 14px;
      font-weight: 200;
      width: 114px;
      height: 55px;
      margin-top: 3px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      // background-color: rgb(148, 221, 221);
      &:hover{
          color: #ff6700;
      }
    }
  }
}
</style>
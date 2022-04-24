<template>
  <div class="Tavbar">

       <ul>
          <!-- <li>水果 <span class="iconfont">&#xe622;</span>  </li>
          <li>肉类 <span class="iconfont">&#xe622;</span>  </li>
          <li>粗粮 <span class="iconfont">&#xe622;</span>  </li> -->
          
          <li @mouseenter="goRightBo(1)" @mouseleave="leave(1)">水果</li>
          <li @mouseenter="goRightBo(2)" @mouseleave="leave(2)">肉类</li>
          <li @mouseenter="goRightBo(3)" @mouseleave="leave(3)">粗粮</li>
        </ul>
     <ItemRightList />
  </div>
</template>

<script>
import ItemRightList from "./itemRightList/inde.vue"
export default {
  methods:{
    goRightBo(value){
      this.$bus.$emit("seen",value)
      // console.log("的kid授课教师"+value)
    },
    leave(v2){
      this.$bus.$emit("leave",v2)
    }

  },
   components:{
         ItemRightList,
   }
}
</script>

<style scoped lang="less">
  ul {
        list-style: none;
        
        li {
          color: #d3d5de;
          width: 100%;
          height: 140px;
          text-align: center;
          line-height: 140px;
          font-size: 40px;
          
          // span{
          //   margin-left:154px;
          // }
          &:hover {
            background-color: #ff6700;
          }
          &::after {
            padding-left: 65px;
            content: "\e622";
            font-family: "iconfont";
          }
        }
      }
  
</style>
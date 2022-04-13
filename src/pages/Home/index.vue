<template>

   
  <div class="home">

    <div class="w">
    <!-- <Header /> -->
    <Search />
    <div class="xiong">
      <div class="leftbord">
        <ul>
          <!-- <li>水果 <span class="iconfont">&#xe622;</span>  </li>
          <li>肉类 <span class="iconfont">&#xe622;</span>  </li>
          <li>粗粮 <span class="iconfont">&#xe622;</span>  </li> -->

          <li>水果</li>
          <li>肉类</li>
          <li>粗粮</li>
        </ul>
      </div>
      <div class="rightbord">
        <Swiper />
      </div>
   
      
    </div>
    <ItemList />
    </div>
   
  </div>
</template>

<script>
import Header from "@/components/Header";
import Search from "@/pages/Search";
import Swiper from "@/pages/Home/Swiper";
import ItemList from "@/pages/Home/ItemList";

import Footer from "@/components/Footer"
export default {
  data() {
    return {};
  },
  components: {
    Header,
    Search,
    Swiper,
    ItemList,
    Header,
    Footer 
  },
};
</script>

<style lang='less' scoped>
//拷贝项目下面生成的 @font-face

@font-face {
  font-family: "iconfont";
  src: url("@/common/iconfont.ttf?t=1648886884286") format("truetype");
}
.clearfix {
  &::before,
  &::after {
    content: "";
    display: table;
  }
  &::after {
    clear: both;
  }
  & {
    *zoom: 1;
  }
}
.w {

  width: 1290px;

  margin: 0 auto;
}
.home {
  background-color:#f5f5f5;
  .xiong {
    

    //清除浮动
    .clearfix;

    //定义使用 iconfont 的样式
    .iconfont {
      font-family: "iconfont" !important;
      font-size: 16px;
      font-style: normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    .leftbord {
      float: left;
      width: 296px;

      height: 100%;

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
    }
    .rightbord {
      float: left;
      height: 100%;
      width: 994px;
      background-color: #ff6700;
    }
  }
}
</style>
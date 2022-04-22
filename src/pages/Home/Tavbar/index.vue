<template>
  <div>
       <ul>
          <!-- <li>水果 <span class="iconfont">&#xe622;</span>  </li>
          <li>肉类 <span class="iconfont">&#xe622;</span>  </li>
          <li>粗粮 <span class="iconfont">&#xe622;</span>  </li> -->

          <li>水果</li>
          <li>肉类</li>
          <li>粗粮</li>
        </ul>
  </div>
</template>

<script>
export default {

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
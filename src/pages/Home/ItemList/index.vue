<template>
  <div class="item" >
    <h1>肉类</h1>
    <div class="itemlist">
      <ul>
        <li>
          <el-image
            style="width: 160px; height: 160px"
            :src="url"
            fit="fill"
            class="imgli"
          >
          </el-image>
          <span>¥134</span>
          <h1>沃柑10斤新鲜水果当季整箱一级沙糖蜜橘砂糖柑橘桔子广西武鸣橘子</h1>
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li>
          <ul class="sks">
            <li></li>
            <li></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {

  data(){
    return {
      api1:'http://localhost:3000',
    }
  },
  mounted(){

    this.$store.dispatch('getSpListInfo',{pageNum:1,pageSize:6})

  },
  methods:{
     
  },
  computed:{
    ...mapGetters(['SpList'])
  }
};
</script>

<style scoped lang="less">
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
.item {
  margin-top: 20px;
  width: 100%;

  h1 {
    font-size: 25px;
    font-family: "SimSun";
    font-weight: normal;
  }

  .itemlist {
    .clearfix;
    margin-top: 15px;
    width: 100%;

    background-color: aqua;
    li {
      list-style: none;
      float: left;
      width: 246px;
      height: 285.5px;
      margin-left: 15px;
      margin-bottom: 15px;
      background-color: antiquewhite;
    }
    li:nth-child(1) {
      margin-left: 0;
    }
    li:nth-child(6) {
      margin-left: 0;
    }
    .sks {
      list-style: none;
      width: 100%;
      height: 100%;
      li {
        margin-left: 0;
        width: 100%;
        height: 135.75px;
        margin-bottom: 15px;
        background-color: rgb(200, 208, 123);
      }
      li:last-child {
        margin-bottom: 0;
      }
    }
    .imgli {
      margin: 40px 43px 8px 43px;
    }
    span {
      display: block;
      height: 18px;
      margin-bottom: 12px;
      margin-left: 15px;
      color: #ff4400;
      font-family: bold;
      font-size: 18px;
    }
    h1 {
      width: 225px;
      // height: 35px;
      display: block;
      margin-left: 10px;
      font-size: 14px;
      // overflow:hidden;
      // text-overflow: ellipsis;
      // white-space:nowrap
      overflow: hidden;
     //两行溢出就用...代替省略
      text-overflow: ellipsis;

      display: -webkit-box;

      -webkit-box-orient: vertical;

      -webkit-line-clamp: 2;
    }
  }
}
</style>
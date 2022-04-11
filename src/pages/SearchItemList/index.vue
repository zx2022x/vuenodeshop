<template>
  <div>
    <Header />
    <div class="item">
      <div class="itemHeader">
        <h1>{{title}}</h1>
      </div>
      <div class="itemlist">
        <ul>
          <li v-for="(item, index) in getItemList1" :key="item.id">
            <el-image
              style="width: 160px; height: 160px"
              :src="api1 + item.goods_img"
              fit="fill"
              class="imgli"
            >
            </el-image>
            <span>¥{{ item.goods_price }}</span>
            <h1>{{ item.goods_detail }}</h1>
          </li>
        </ul>
      </div>
    </div>
    <div class="pagination">
    <Pagination  :total='getItemListTotal' :pageSize="10" @changePnum="changePnum"/>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Pagination from '@/pages/admin/Pagination'
export default {
  name:'FenedItemList',
  data() {
    return {
      title:'',
      api1: "http://localhost:3000/",
    };
  },
  mounted() {
    
    this.getData();
    this.getTitle();
    // this.getData(1, 10, 2, "getItemList2");
    // this.getData(1, 10, 3, "getItemList3");
    //  this.getData(1,10,3)
    
  },
  methods: {

    async getData(pageNum = 1, pageSize = 10) {
       const goods_fm=this.$route.params.goods_fm
      await this.$store.dispatch('getItemList1', {
        pageNum,
        pageSize,
        goods_fm,
      });
      //  await this.$store.dispatch('getItemList',pageNum,pageSize,goods_fm)
      //  await this.$store.dispatch('getItemList',pageNum,pageSize,goods_fm)
    },
    //拿到传来的参数
    // getRoute(){
    //   const goods_fm=this.$route.params.goods_fm
    //   return goods_fm
    // },
    getTitle(){
       const goods_fm=this.$route.params.goods_fm;
   
       let a='';
       switch(goods_fm){
         case 1: 
         a='水果';
         break;
         case 2: 
         a='肉类';
         break;
         case 3: 
         a='粗粮';
         break;
         default: 
         a='数据错误';
         break;

       }
       this.title=a
    },
    changePnum(val){
       
      this.getData(val,10)
    }
  },
  computed: {
    
    ...mapGetters(["getItemList1","getItemListTotal"]),

  },
  components:{

     Pagination,

  }
};
</script>

<style scoped lang="less">
@font-face {
  font-family: "iconfont";
  src: url("@/common/iconfont1.ttf?t=1649143183049") format("truetype");
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
.item {
  margin-top: 20px;
  width: 100%;
  .itemHeader {
    .clearfix;
  }
  h1 {
    float: left;
    display: block;
    font-size: 25px;
    font-family: "SimSun";
    font-weight: normal;
  }
  //   .more {
  //     float: right;
  //     height: 30px;
  //     width: 119px;
  //     color: #424242;

  //     font-size: 20px;
  //     .goDetail {
  //       display: block;
  //       color: #424242;

  //       &:hover {
  //         color: #ff6700;
  //       }
  //       &::after {
  //         padding-left: 18px;
  //         content: "\e634";
  //         font-family: "iconfont";
  //       }
  //     }
  //   }

  .itemlist {
    .clearfix;
    margin-top: 15px;
    width: 100%;

    li {
      list-style: none;
      float: left;
      width: 246px;
      height: 285.5px;
      margin-left: 15px;
      margin-bottom: 15px;
      background-color: #ffffff;
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
.pagination{
   position:absolute;
   top:710px;
   left:50%;
   transform:translateX(-50%)
}
</style>